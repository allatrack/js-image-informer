import Readability from './Readability'
import LinkHelper from './LinkHelper'

export default class ImageInformerCreator {

    constructor(smartInformerName, id) {

        if (!smartInformerName) {
            console.error('SmartInformerCreator.constructor: smartInformerName must be specified');
        }

        if (typeof id == 'undefined' || id == '') {
            console.error('SmartInformerCreator.constructor: Root Id was excepted but ' + id + ' given');
        }

        this.id = id;
        this.rootId = id;
        this.marketGidCompositeId = smartInformerName + id;
        this.smartInformerName = smartInformerName;
        this.smartInformer = document.getElementById(this.marketGidCompositeId);
        this.smartInformer.parentNode.removeChild(this.smartInformer);
        this.article;
        this.images = [];
        this.linkHelper = new LinkHelper();

        this._setStyles();
    }

    _setStyles() {
        this.styles = `
         * {margin:0; padding:0;}
        body, html {width:100%; height: 100%;}

        .main-container {
            position: relative;
        }

        .main-news {
            padding-top: 30px;
            padding-bottom: 39px;
            border-bottom: 1px solid #eeeeee;
            margin-bottom: 30px;
        }

        .main-news > a {
            display: block;
            position: relative;
            height: 200px;
            overflow: hidden;
            margin-left: 42px;
            margin-right: 42px;
        }

        a {
            color: #222222;
            text-decoration: none;
        }

        desktop.css?t=1501484400:15
        a {
            background: transparent;
        }

        .main-news .arrow {
            width: 64px;
            height: 49px;
            position: absolute;
            right: 40px;
            top: 50px;
            background: url(img/arrow.png) no-repeat scroll 0 0 transparent;
        }

        .main-news .photo {
            position: absolute;
            top: 0px;
            left: 0px;
        }
        desktop.css?t=1501484400:26
        img {
            border: 0;
            display: -moz-inline-stack;
            display: inline-block;
            vertical-align: top;
            zoom: 1;
        }

        .main-news .name-news {
            font-size: 44px;
            font-weight: bold;
            line-height: 56px;
            padding: 0px;
            margin: 19px 120px 22px 240px;
            max-height: 112px;
            overflow: hidden;
            color: #222222 !important;
        }

        .main-news .desc {
            color: #666666;
            margin-left: 240px;
            margin-right: 290px;
        }

        .main-news .site-news {
            font-size: 10px;
            color: #adadad;
            margin-left: 240px;
            margin-right: 290px;
            line-height: 14px;
        }

        .main-news .btns {
            position: absolute;
            bottom: 0px;
            right: 0px;
            text-align: right;
            white-space: nowrap;
        }

        .red-btn {
            display: -moz-inline-stack;
            display: inline-block;
            vertical-align: top;
            zoom: 1;
            width: 140px;
            text-align: center;
            text-transform: uppercase;
            color: #fff;
            font-weight: bold;
            height: 50px;
            line-height: 50px;
            margin-left: 10px;
            background: #c32828;
            background: -moz-linear-gradient(top, #c32828 0%, #b32020 100%);
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#c32828), color-stop(100%,#b32020));
            background: -webkit-linear-gradient(top, #c32828 0%,#b32020 100%);
            background: -o-linear-gradient(top, #c32828 0%,#b32020 100%);
            background: -ms-linear-gradient(top, #c32828 0%,#b32020 100%);
            background: linear-gradient(to bottom, #c32828 0%,#b32020 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c32828', endColorstr='#b32020',GradientType=0 );
        }

       `;

    }

    _getArticleParent(node) {

        // try to find article body by id
        if (node['id']) {

            var nodeInDom = document.getElementById(node['id']);
            return nodeInDom ? nodeInDom.parentNode : null;

            // try to find article body by css class
        } else if (node.classList && node.classList.length) {

            var classes = [];
            [].forEach.call(node.classList, className=> classes.push(className));

            var articleNodes = document.getElementsByClassName(classes.join(' '));

            return articleNodes.length && typeof articleNodes[0] != 'undefined' ? articleNodes[0].parentNode : null;

        } else {

            return node.parentNode ? this._extractArticle(node.parentNode) : null;
        }
    }

    _extractArticle(node, _firstCall, _collectionLength) {


        var firstCall = _firstCall || false;
        var collectionLength = _collectionLength || 0;

        if (node[0] && firstCall && collectionLength === 1) {
            var fn = node[0];
            if (fn['id']) {
                return document.getElementById(fn['id']);

                // try to find article body by css class
            } else if (fn.classList && fn.classList.length) {

                var classes = [];
                [].forEach.call(fn.classList, className => classes.push(className));

                return document.querySelector(fn.tagName + '.' + classes.join('.')).parentNode;
            } else {
                console.warn('SmartInformerCreator._extractArticle: ' +
                    'Cant select element from read DOM by using node -' + fn.tagName);
                return null;
            }
        }

        var result = null;

        if (node && node.length) {

            // article consists of  more than one element
            [].forEach.call(node, element=>result = this._getArticleParent(element, true));
        } else {
            result = this._getArticleParent(node);
        }

        return result;
    }

    /**
     * If Readability.js return article with some structure.
     * If the structure is correct - SmartInformerCreator
     * will find correct place to paste informer to.
     * Otherwise, you can adjust article extraction in method below
     * or in method _extractArticle
     *
     * @returns {*}
     * @private
     */
    _handleSpecialCases() {

        if (this.article && this.article.parentNode && this.article.parentNode.children[0] && this.article.parentNode.children[0].tagName === 'HEADER') {
            this.article = this.article.parentNode;
            return;
        }

        if (this.article && this.article.id === 'wrap' && this.article.children[0].id === 'content') {
            this.article = this.article.children[0];
            return;
        }

        var logo = document.querySelector('a.logo.custom-logo-18');
        if (logo) {
            this.article = document.getElementsByClassName('content_text')[0];
            return;
        }

        logo = document.querySelector('div#page-wrap > center>img');
        if (logo) {
            this.article = document.getElementsByClassName('detail-left-side')[0];
            return;
        }

        var articleInStructure = this.article.querySelector('div.td-pb-row > div.td-pb-span8.td-main-content > div.td-ss-main-content > this.article');

        if (articleInStructure) {
            this.article = articleInStructure;
            return;
        }

        if (this.article.classList.contains('post-body') && this.article.classList.contains('entry-content')) {
            this.article = this.article.parentNode;
            return;
        }

        if (this.articleParsed.rootElements && this.articleParsed.rootElements.length) {
            [].forEach.call(this.articleParsed.rootElements, function (e) {
                if (e.tagName === 'this.article') {
                    this.article = document.querySelector(e.tagName);
                } else {
                    console.info('SmartInformerCreator._parsethis.article: Cant parse this.article. ' +
                        'You should add this new condition to the code');
                }
            });
        }

        if (this.article) {
            return;
        }

        console.error('SmartInformerCreator._handleSpecialCases: article In DOM not recognized');
    }

    parseArticle() {

        // Readability's parse() works by modifying the DOM.
        // This removes some elements in the web page.
        // You could avoid this by passing the clone of the
        // document object while creating a Readability object.
        var loc = document.location;

        /**
         * Parse and get copy of the article from real DOM
         *
         * @type {object} articleParsed - copy of the article from real DOM
         */
        this.articleParsed = new Readability({
            spec: loc.href,
            host: loc.host,
            prePath: loc.protocol + "//" + loc.host,
            scheme: loc.protocol.substr(0, loc.protocol.indexOf(":")),
            pathBase: loc.protocol + "//" + loc.host + loc.pathname.substr(0, loc.pathname.lastIndexOf("/") + 1)
        }, document.cloneNode(true)).parse();

        this.article = this._extractArticle(this.articleParsed.rootElements, true, this.articleParsed.rootElements.length);

        this._handleSpecialCases();

        return this.article;
    }

    getImages(imageWidth) {

        if (!imageWidth) {
            console.error('SmartInformerCreator.getImages: You forgot to define image size');
            return;
        }

        if (!this.article) {
            console.warn('SmartInformerCreator.getImages: Article In DOM not recognized');
            return [];
        }

        this.images = [].filter.call(
            this.article.querySelectorAll('img'),
            img => {

                if (img.clientWidth&& img.clientWidth >= imageWidth && (!this.linkHelper.isWrappedInLink(img) || !this.linkHelper.isAddLink(img) )){
                    //console.log(11111111111111111, img);
                    return true;
                } else {
                    return false;
                }



            }
        );

        return this.images;
    }

    insertAdds(data = []) {

        if (!data || !data.length) {
            console.error('ImageInformerCreator.insertAdds: Error in insertAdds');
            return;
        }

        if (!this.images || !this.images.length) {
            console.info('ImageInformerCreator.insertAdds: NoWhere to render - no images');
            return;
        }

        data.forEach(item => this._createIframe(item, [].pop.call(this.images)));
    }

    _createIframe(item, img) {

        var iframe = document.createElement('iframe');
        iframe.style.borderWidth = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100px';

        if (!img) {
            console.info('ImageInformerCreator._createIframe: ' +
                'Cant insert add after image - no image left on the page');
            return;
        }

        img.parentNode.insertBefore(iframe, img.nextSibling);
        let template;
        try {
            template = `
            <html>
                <body>
                    <div class="main-container">
                    <div class="main-news">
                        <a href="${item[10]['l']}" target="_blank" style="display: block !important; visibility: visible !important;">
                            <span class="arrow"></span>
                            <img class="photo" src="${item[10]['i']}" alt="${item[0]}" width="200" height="200">
                            <div class="name-news">${item[0]}</div>
                            <div class="desc">${item[0]}</div>
                            <span class="site-news">${item[0]}</span>
                            <div class="btns">
                                                    <div class="red-btn">Learn more</div>
                            </div>
                        </a>
                    </div>
                </body>
            </html>`;

            //template = `
            //   <html>
            //   <body>
            //        <div>
            //            <img src="${item[10]['i']}">
            //            <div class="content">
            //                <div class="btn-close"></div>
            //                <h2><a href="${item[10]['l']}">${item[0]}</a></h2>
            //                <p><a href="${item[10]['l']}">${item[0]}</a></p>
            //                <a href="${item[3]}" class="btn-submit">Перейти</a>
            //        </div>
            //        </body>
            //       </html>`

        } catch (e) {
            template = "<html><body></body></html>";
            console.error(e);
        }

        try {
            var infoWindow = iframe.contentWindow.document;
            infoWindow.open();
            infoWindow.writeln(template);
            infoWindow.close();

            var head = infoWindow.head;
        }
        catch (e) {
            console.error('ImageInformerCreator._createIframe: Error ', e);
        }
        var style = infoWindow.createElement('style');
        style.innerHTML = this.styles;
        head.appendChild(style);


    }
}

if (typeof module === "object") {
    module.exports = require('./ImageInformerCreator').default;
}
