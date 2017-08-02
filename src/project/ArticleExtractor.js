import Readability from './../libs/Readability';

export default class ArticleExtractor {


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

        if (this.article && this.article.classList.contains('shortcode-content')) {
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
                    console.info('SmartInformerCreator._parseself.article: Cant parse self.article. ' +
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

        try {

            if (this.articleParsed){
                this.article = this._extractArticle(this.articleParsed.rootElements, true, this.articleParsed.rootElements.length);
                this._handleSpecialCases();
            } else {
                this.article =null;
            }

            return this.article ;
        }catch(e){
             console.error(e);
        }
    }
}