import * as helpers from './../libs/helpers';

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
        this.supported_hosts = ['blogspot', 'hanoiiplus', /** FOR testing **/  'newsatlast' , 'ohtrending', 'albertespinola', 'webtretho'] ;
        this.supported_hosts.push(document.location.host === 'localhost'
            ? 'newsatlast'
            : document.location.host);
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

    /**
     * Try to find images by their location
     *
     * @param imageWidth
     * @param before
     * @param after
     * @returns {Array}
     * @private
     */
    _tryFindArticleImages(imageWidth, before, after) {

        const {viewportWidth} = helpers.getViewPortSize();

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

    /**
     * Check if there is one of the parent node is Add
     *
     * @param _element
     * @returns {boolean}
     * @private
     */
    _hasAddUpward(_element) {

        // by default - thing that there cant be ads inside text node
        if (helpers.isTextNode(_element) && !_element.parentNode) {
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

    /**
     * There is a list of supported hosts - field supported_hosts
     * Check if given link's domain name is equal with
     * one of the supported_hosts domain
     *
     * @param image
     * @returns {boolean}
     * @private
     */
    _linkIsInSupportedHosts(image) {

        var link = this._getParent(image, 'A');

        if (!link) {
            return true;
        }

        var isInSupportedDomainsList = false;

        this.supported_hosts.forEach(host => {
            (!isInSupportedDomainsList ) && (isInSupportedDomainsList = link.href.search(host) != -1)
        });

        return isInSupportedDomainsList;
    }

    /**
     * Get parent block with tagName
     *
     * @param e
     * @param tagName
     * @returns {*}
     * @private
     */
    _getParent(e, tagName) {

        if (!e || !tagName) {
            return null
        }

        if (e.tagName === tagName) {
            return e
        }

        return this._getParent((e.parentNode), tagName)
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
    _findSuitableImages(imageWidth = 400, before = 0.2, after = 2) {

        if (!this._article) {
            console.warn('ImageInformerCreator ._findSuitableImages: Article was not specified.');
            return this._tryFindArticleImages(imageWidth, before, after);
        }

        let array = [];
        [].forEach.call(this._article.querySelectorAll('img'), img => {
            if (img.tagName !== 'IMG') {
                return;
            }

            if (img.clientWidth && img.clientWidth <= imageWidth) {
                return;
            }

            var wrappedInLink = this._isWrappedInLink(img);

            if (wrappedInLink && this._hasAddUpward(img)) {
                return;
            }

            if (wrappedInLink && !this._linkIsInSupportedHosts(img)) {
                return;
            }

            if (this._isSuitableAspectRation(img, before, after)) {
                if (this._isInFigure(img)) {
                    var figure = this._getParent(img, 'FIGURE');
                    array.push(figure);
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
                'Find images before calling this method. Run ImageInformerCreator._findSuitableImages.');
            return;
        }

        if (!blocksToPaste || !blocksToPaste.length) {
            console.info('ImageInformerCreator.insertWidget: Nothing to render - no block. ' +
                'Provide sticky block array|HTMLCollection which will be paste in.');
            return;
        }

        let counter = 0;
        [].forEach.call(blocksToPaste, item=> {
            (counter < max_img_for_sticky_widget) && (this._initIFrame(item, this._images.shift()));
            counter++;
        });
    }

    /**
     * Create Ifrane after given block
     *
     * @param {Element} blockToiFrame - block to paste
     * @param {Element} imgNode - block
     * @private
     */
    _initIFrame(blockToiFrame, imgNode) {

        if (!blockToiFrame) {
            console.info('ImageInformerCreator._initIFrame: ' +
                'Cant insert add after image - no block left on the page');
            return;
        }

        if (!imgNode) {
            console.info('ImageInformerCreator._initIFrame: ' +
                'Cant insert add after image - no image left on the page');
            return;
        }

        var iFrame = this._insertIFrameToPage(imgNode);

        // fill the iFrame
        try {
            var infoWindow = iFrame.contentWindow.document;
            infoWindow.open();
            infoWindow.writeln("<html><head></head><body></body></html>");
            infoWindow.close();
            infoWindow.body.appendChild(blockToiFrame);

            this._setIFrameHeight(iFrame, blockToiFrame);
        }
        catch (e) {
            console.error('ImageInformerCreator._initIFrame: Error ', e);
        }

        // set close button listeners
        let closeButton = infoWindow.querySelector('.mgCloseButton');
        closeButton.addEventListener('click', ()=>iFrame.style.display = 'none');
        closeButton.addEventListener('mousedown', e => {
            (e.which === 2) && (iFrame.style.display = 'none');
            return true;// to allow the browser to know that we handled it.
        });

        // insert styles
        var cssStyle = infoWindow.createElement('style');
        cssStyle.innerHTML = this._styles + `body,html{margin:0;padding:0}html{-ms-overflow-style:-ms-autohiding-scrollbar}.cbb{position:absolute;right:0;top:0;background-image:url(https://tpc.googlesyndication.com/pagead/images/x_button_blue2.svg);background-repeat:no-repeat;background-position:top right;cursor:pointer;height:15px;width:15px;z-index:9020}`;
        infoWindow.head.appendChild(cssStyle);
    }

    _insertIFrameToPage(img) {

        var width = helpers.getStyle(img, 'width');
        var marginBottom = helpers.getStyle(img, 'margin-bottom');
        var marginLeft = helpers.getStyle(img, 'margin-left');
        var marginRight = helpers.getStyle(img, 'margin-right');
        var isFigure = img.tagName === 'FIGURE';

        if (isFigure) {
            var figureImage = img.querySelector('img');
            if (figureImage) {
                width = helpers.getStyle(figureImage, 'width');
                marginBottom = this._resetAndGet(img, 'margin-bottom', 'marginBottom') + 'px';// _style.marginBottom;
                marginLeft = helpers.getStyle(figureImage, 'margin-left');
                marginRight = helpers.getStyle(figureImage, 'margin-right');
            }
        }

        img.style.setProperty('margin-bottom', '0px', 'important');
        img.style.setProperty('padding-bottom', '0px', 'important');

        // reset margin bottom
        var iFrame = document.createElement('iframe');
        iFrame.style.borderWidth = '0';
        iFrame.style.width = width;
        iFrame.style.marginBottom = marginBottom;
        iFrame.style.marginLeft = marginLeft;
        iFrame.style.marginRight = marginRight;

        img.parentNode.insertBefore(iFrame, img.nextSibling);

        if (!isFigure) {
            this._correctMargin(iFrame, img);
            this._correctSpecialCases(img);
        }

        return iFrame;
    }

    _setIFrameHeight(iFrame, blockToiFrame) {

        var getIFrameHeight = ()=>iFrame.style.height = helpers.getStyle(blockToiFrame, 'height');

        iFrame.addEventListener("readystatechange", e =>(e.target.readyState == "complete") && ( getIFrameHeight() ))
    }

    _correctMargin(iFrame, node) {

        let rectImg = node.getBoundingClientRect();
        let rectIFrame = iFrame.getBoundingClientRect();

        if (rectImg.bottom !== rectIFrame.top && rectImg.bottom < rectIFrame.top) {
            iFrame.style.marginTop = ( -(rectIFrame.top - rectImg.bottom) ) + 'px';
        }
    }

    /**
     * Handler for special cases
     *
     * @param img
     * @private
     */
    _correctSpecialCases(img) {

        let node = this._getNodeWithMarginEMCase(img);
        if (node) {
            node.style.setProperty('margin-left', '0px', 'important');
            node.style.setProperty('margin-right', '0px', 'important');
        }
    }

    /**
     * Rule if parent element margin-left\fight are
     * em + their parent text-align = center - reset margins
     *
     * @param node
     * @returns {null|Element}
     * @private
     */
    _getNodeWithMarginEMCase(node) {

        var result = null;

        if (!node || !node.style || !node.parentNode || !node.parentNode.style) {
            return result;
        }

        var marginsAreEM = node.style.marginLeft.search('em') != -1 && node.style.marginRight.search('em') != -1;

        if (marginsAreEM && node.parentNode.style.textAlign === 'center') {
            result = node;
        }

        if (!result) {
            result = this._getNodeWithMarginEMCase(node.parentNode);
        }

        return result;
    }

    /**
     *
     * @param node
     * @returns {*}
     * @private
     */
    //_isWrappedInText(node) {
    //
    //    if (!node) {
    //        console.error('SmartInformerCreator._isWrappedInText: No node was provided');
    //        return false;
    //    }
    //
    //    if (!node.parentNode) {
    //        return false;
    //    }
    //
    //    if (['P', 'SPAN'].indexOf(node.parentNode.tagName) != -1) {
    //        return true;
    //    }
    //
    //    return this._isWrappedInText(node.parentNode);
    //}

    /**
     * Get all children(+ their children) of the block
     * For each node - get property value - return it
     * For each node - set property value to null after getting it
     * Accumulate and return property value
     *
     * Used for reset margins
     *
     * @param block
     * @param property
     * @param propertyCamel
     * @returns {number}
     * @private
     */
    _resetAndGet(block, property, propertyCamel) {

        var _style = window.getComputedStyle(block);

        let sum = _style[propertyCamel] === 'auto' ? 0 :
            (_style[propertyCamel] !== "" ? parseInt(_style[propertyCamel].replace('px', '')) : 0);

        block.style.setProperty(property, '0', 'important');

        if (block.children && block.children.length) {
            [].forEach.call(block.children, e =>
                sum += this._resetAndGet(e, property, propertyCamel)
            )
        }

        return sum;
    }

    /**
     * Go throw all children nodes and sum their border height
     *
     * @param node
     * @returns {number}
     * @private
     */
    _getBorderHeight(node) {

        if (!node) {
            return 0;
        }

        var result = 0;

        if (node.children && node.children.length) {
            [].forEach.call(node.children, element=> {
                result += this._getBorderHeight(element);
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


