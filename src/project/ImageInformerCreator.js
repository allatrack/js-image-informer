import {isTextNode, getStylePx, getParentFontSize, getViewPortSize, getNodeHeight} from './../libs/helpers';

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

        this.height = 0;
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

    tryFindArticleImages(imageWidth, before, after) {

        const {viewportWidth} = getViewPortSize();

        let parts = viewportWidth / 4;
        let allImages = document.querySelectorAll('img');

        let array = [];
        [].forEach.call(allImages, img=> {

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

            let rect = img.getBoundingClientRect();
            let imageMiddle = rect.width / 2;
            let imageMiddleImQuarter = imageMiddle >= parts && imageMiddle <= (parts * 3);

            if (this._isSuitableAspectRation(img, before, after) && imageMiddleImQuarter) {

                if (this._isInFigure(img)) {
                    array.push(img.parentNode);
                    return;
                }

                array.push(img);
            }
        });

        return this._images = array;
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
    _isSuitableAspectRation(img, before = 0.5, after = 2) {

        if (img.tagName !== 'IMG') {
            return false;
        }

        let r = img.clientHeight / img.clientWidth;

        return r >= before && r <= after;
    }

    _isInFigure(img) {
        if (!img || !img.parentNode) {
            return false;
        }

        return img.parentNode.tagName === 'FIGURE' || this._isInFigure(img.parentNode);
    }

    /**
     * Find suitable images in the article
     *
     * @param {number} imageWidth - image width
     * @param {number} before
     * @param {number} after
     * @returns {*}
     */
    findSuitableImages(imageWidth = 400, before = 0.2, after = 2) {

        if (!this._article) {
            console.warn('ImageInformerCreator .findSuitableImages: Article was not specified.');
            return this.tryFindArticleImages(imageWidth, before, after);
        }

        let array = [];
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

            if (this._isSuitableAspectRation(img, before, after)) {

                if (this._isInFigure(img)) {
                    array.push(img.parentNode);
                    return;
                }

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

        let self = this;
        iframe.onload = function () {
            setTimeout(()=>{
                var bordersHeight = self.getBorderHeight(block);

                iframe.style.height = block.clientHeight
                    + getStylePx(block, 'marginTop')
                    + getStylePx(block, 'marginBottom') + bordersHeight + 'px';
            }, 500)
        }

        try {
            var infoWindow = iframe.contentWindow.document;
            infoWindow.open();
            infoWindow.writeln("<html><head></head><body></body></html>");
            infoWindow.close();
            infoWindow.body.appendChild(block);
        }
        catch (e) {
            console.error('ImageInformerCreator._createIframe: Error ', e);
        }

        // add close button
        let closeButton = infoWindow.querySelector('.mgCloseButton');
        closeButton.addEventListener('click', ()=>iframe.style.display = 'none');
        closeButton.addEventListener('mousedown', e => {
            (e.which === 2) && (iframe.style.display = 'none');
            return true;// to allow the browser to know that we handled it.
        });

        // set styles
        var style = infoWindow.createElement('style');
        style.innerHTML = this._styles + `
        body, html{
            margin:0;
            padding:0;
        }
        html {
            -ms-overflow-style: -ms-autohiding-scrollbar;
        }
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
    }

    getBorderHeight(node) {
        if (!node) {
            return 0;
        }

        var result = 0;

        if (node.children && node.children.length) {
            [].forEach.call(node.children, element=> {
                result += this.getBorderHeight(element);
            })
        }

        let style = window.getComputedStyle(node);

        let borderBottomWidth = style['borderBottomWidth'].replace('px', '');
        let borderTopWidth = style['borderTopWidth'].replace('px', '');

        return result
            + parseInt(borderBottomWidth === 'auto' ? 0 : borderBottomWidth)
            + parseInt(borderTopWidth === 'auto' ? 0 : borderTopWidth);
    }
}


