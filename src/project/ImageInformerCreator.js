import {isTextNode, getMargin, getParentFontSize} from './../libs/helpers';

export default class ImageInformerCreator {

    constructor(smartInformerName, id) {
        if (!smartInformerName) {
            console.error('SmartInformerCreator.constructor: smartInformerName must be specified');
        }

        if (typeof id == 'undefined' || id == '') {
            console.error('SmartInformerCreator.constructor: Root Id was excepted but ' + id + ' given');
        }

        this.rootId = id;

        this.cssClasses = ['td-post-next-prev', 'adsb30', 'sadserver', 'adsbygoogle',
            'fb-share-button', 'fb_iframe_widget',
            'fb-comments', 'td_block_related_posts',
            'td-post-sharing', 'td-post-sharing-top',
            'sharing', 'shareaholic-ui', 'comments', 'related',
            'share', 'at-share-btn-elements', 'post-footer'];

        this.ids = ['ad-space', 'fb_comments_div', 'ad-space', 'div-gpt-ad',
            'MarketGidScript', 'MarketGidScriptRoot', 'disqus_comments_div',
            'ScriptRoot', 'Preload', 'MarketGidComposite', 'SC_TBlock'];
    }

    set stickyBlocksToPaste(blocks) {
        this._stickyBlocksToPaste = blocks;
    }

    get stickyBlocksToPaste() {
        return this._stickyBlocksToPaste;
    }

    set article(article) {
        this._article = article;
    }

    set styles(styles) {
        this._styles = styles;
    }

    get article() {
        return this._article;
    }

    get images() {
        return this._images;
    }

    _hasAddUpward(_element) {

        // by default - thing that there cant be ads inside text node
        if (isTextNode(_element) && !_element.parentNode) {
            return false;
        }

        var cantBeCalculated = false;

        this.ids.forEach(id =>
            (!cantBeCalculated && _element.id) && (cantBeCalculated = _element.id.includes(id))
        );

        this.cssClasses.forEach(cssClass =>
            (!cantBeCalculated && _element.classList) && (cantBeCalculated = _element.classList.contains(cssClass))
        );

        if (cantBeCalculated) {
            return true;
        }

        if (_element.parentNode) {
            cantBeCalculated = this._hasAddUpward(_element.parentNode);
        }

        return cantBeCalculated;
    }

    _isWrappedInLink(node = null) {

        if (!node) {
            console.error('SmartInformerCreator._isWrappedInAddLink: No image was provided');
            return false;
        }

        if (!node.parentNode) {
            return false;
        }

        if (node.parentNode.tagName === 'A') {
            return true;
        }

        return this._isWrappedInLink(node.parentNode);
    }

    /**
     * Check if image has suitable aspect ratio
     *
     * @param {HTMLElement} img - image
     * @param {number} before - width ratio
     * @param {number} after - height ratio
     * @returns {boolean}
     * @private
     */
    _isSuitableAspectRation(img, before=0.5, after=2) {

        if (img.tagName!=='IMG'){
            return false;
        }

        let  r = img.clientHeight / img.clientWidth;

        return  r>=before && r <= after;
    }

    _isInFigure(img){
        if (!img || !img.parentNode ){
            return false;
        }

        return img.parentNode.tagName==='FIGURE' || this._isInFigure(img.parentNode);
    }

    /**
     * Find suitable images in the article
     *
     * @param {number} imageWidth - image width
     * @param {number} before
     * @param {number} after
     * @returns {*}
     */
    findSuitableImages(imageWidth = 400,  before = 0.2, after = 2) {

        if (!this._article) {
            console.warn('ImageInformerCreator .findSuitableImages: Article was not specified.' +
                ' Please set the article first!');
            return [];
        }

        let array =[];
        [].forEach.call(this._article.querySelectorAll('img'), img => {

            if (img.tagName !== 'IMG') {
                return;
            }

            if (img.clientWidth && img.clientWidth <= imageWidth) {
                return;
            }

            if (this._isWrappedInLink(img) || this._hasAddUpward(img)) {
                return;
            }

            if (this._isInFigure(img)) {
                array.push(img.parentNode);
                return;
            }

            if (this._isSuitableAspectRation(img, before, after)) {
                array.push(img);
            }
        });

        return this._images = array;
    }

    /**
     * Insert widget blocks
     *
     * @param {array| HTMLCollection} blocksToPaste - array of blocks, which will be paste in
     * @param {number} max_img_for_sticky_widget - max sticky blocks to paste
     */
    insertWidget(blocksToPaste = this._stickyBlocksToPaste, max_img_for_sticky_widget = this._images.length) {


        if (!this._images || !this._images.length) {
            console.info('ImageInformerCreator.insertWidget: No Where to render - no images. ' +
                'Find images before calling this method. Run ImageInformerCreator.findSuitableImages.');
            return;
        }

        if (!blocksToPaste || !blocksToPaste.length) {
            console.info('ImageInformerCreator.insertWidget: Nothing to render - no block. ' +
                'Provide sticky block array|HTMLCollection which will be paste in.');
            return;
        }

        let counter = 0;
        [].forEach.call(blocksToPaste, item => {
            (counter < max_img_for_sticky_widget) && (this._createIframe(item, this._images.shift()));
            counter++;
        });
    }

    _createIframe(block, img) {

        if (!block) {
            console.info('ImageInformerCreator._createIframe: ' +
                'Cant insert add after image - no block left on the page');
            return;
        }

        if (!img) {
            console.info('ImageInformerCreator._createIframe: ' +
                'Cant insert add after image - no image left on the page');
            return;
        }

        var iframe = document.createElement('iframe');
        iframe.style.borderWidth = '0';
        iframe.style.width = '100%';
        img.parentNode.insertBefore(iframe, img.nextSibling);

        try {
            var infoWindow = iframe.contentWindow.document;
            infoWindow.open();
            infoWindow.writeln("<html><body></body></html>");
            infoWindow.close();

            infoWindow.body.appendChild(block);
        }
        catch (e) {
            console.error('ImageInformerCreator._createIframe: Error ', e);
        }

        // add close button
        let div = document.createElement('div');
        div.classList.add('cbb');
        div.title = 'Close';
        div.addEventListener('click', ()=>iframe.style.display = 'none');
        infoWindow.body.appendChild(div);

        // set styles
        var style = infoWindow.createElement('style');
        style.innerHTML = this._styles + `
        .cbb {
            position: absolute;
            right: 0px;
            top: 0px;
        }

        .cbb {
            background-image: url(https://tpc.googlesyndication.com/pagead/images/x_button_blue2.svg);
            background-repeat: no-repeat;
            background-position: top right;
            cursor: pointer;
            height: 15px;
            width: 15px;
            z-index: 9020;
        } `;
        infoWindow.head.appendChild(style);

        iframe.style.height = iframe.clientHeight + getMargin(block, 'top')+ getMargin(block, 'bottom') +'px';
    }
}


