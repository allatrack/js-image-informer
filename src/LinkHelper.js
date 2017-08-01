import isTextNode from './helpers';

export default class LinkHelper {

    constructor() {
        this.addDomains = ['www.mgid.com'];

        this.cssClasses = ['adsbygoogle', 'comments', 'related', 'share', 'at-share-btn-elements', 'post-footer'];
        this.ids = ['ad-space', 'fb_comments_div', 'ad-space', 'div-gpt-ad',
            'MarketGidScript', 'MarketGidScriptRoot', 'disqus_comments_div',
            'ScriptRoot', 'Preload', 'MarketGidComposite', 'SC_TBlock'];
    }
    
    isWrappedInLink(node = null) {

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

        return this.isWrappedInLink(node.parentNode);
    }


    extractLink(node) {

        if (node.tagName !== 'A' && !node.parentNode) {
            console.error('SmartInformerCreator.extraxtLink: You must provide image with parent link');
            return;
        }

        return node.tagName === 'A'
            ? node : this.extractLink(node.parentNode);
    }

    isAddLink(node) {

        //let link = node.closest('a');
        let link = this.extractLink(node);
        let result = false;

        this.addDomains.forEach(domain=> {
            if (!result && link.href.search(`/${domain}/i`)!=-1) {
                result = true;
            }
        });
        //console.log(result, link);

        return result;
    }


    hasAddUpward(_element) {

        // by default - thing that there cant be ads inside text node
        if (isTextNode(_element)){
            return false;
        }

        var cantBeCalculated = false;

        this.ids.forEach(id => (!cantBeCalculated && _element.id) && (cantBeCalculated = _element.id.includes(id)));

        this.cssClasses.forEach( cssClass => (!cantBeCalculated && _element.classList) && (cantBeCalculated = _element.classList.contains(cssClass)));

        if (_element.children && _element.children.length){
            [].forEach.call(_element.children, function (node) {

                if (cantBeCalculated) {
                    return;
                }

                this.hasAddUpward(node);
            });
        }

        return cantBeCalculated;
    }
}