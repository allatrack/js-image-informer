function getNodeHeight(textNode) {
    var height = 0;
    if (document.createRange) {
        var range = document.createRange();
        range.selectNodeContents(textNode);
        if (range.getBoundingClientRect) {
            var rect = range.getBoundingClientRect();
            if (rect) {
                height = rect.bottom - rect.top;
            }
        }
    }
    //console.log(height);
    return height;
}

function isTextNode(node) {
    return node.nodeType=== Node.TEXT_NODE;
}

/**
 * Get element margin
 *
 * @param {HTMLElement} _element - Web Element
 * @param {string} styleType - margin, padding, border
 * @returns {*}
 */
function getStylePx(_element, styleType = 'margin') {

    try {
        var style = window.getComputedStyle(_element);
        var margin = style[styleType].replace('px', '');

        return margin!='auto' ? parseInt(margin) : 0;

    } catch (e) {

        if (_element.nodeName==='#text'){
            return getNodeHeight(_element);
        }
        return 0;
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function getParentFontSize(_element){
    var parent = _element.parentNode;
    var style = _element.currentStyle || window.getComputedStyle(_element);
    var fontSize = style.fontSize.replace('px', '');
    var lineHeight = style.lineHeight.replace('px', '');
    fontSize = isNumeric(fontSize) ? parseInt(fontSize) : 0;
    lineHeight = isNumeric(lineHeight) ? parseInt(lineHeight) : 0;

    return fontSize + lineHeight;
}

function getViewPortSize() {
    let viewportWidth;
    let viewportHeight;

    //Standards compliant browsers (mozilla/netscape/opera/IE7)
    if (typeof window.innerWidth != 'undefined') {
        viewportWidth = window.innerWidth,
            viewportHeight = window.innerHeight
    }

    // IE6
    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0) {
        viewportWidth = document.documentElement.clientWidth,
            viewportHeight = document.documentElement.clientHeight
    }

    //Older IE
    else {
        viewportWidth = document.getElementsByTagName('body')[0].clientWidth,
            viewportHeight = document.getElementsByTagName('body')[0].clientHeight
    }

    return {viewportWidth, viewportHeight};
}

function getStyle(el, styleProp) {
    if (el.currentStyle)
        var y = el.currentStyle[styleProp];
    else if (window.getComputedStyle)
        var y = document.defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    return y;
}

export {isTextNode, getStylePx, getParentFontSize, getViewPortSize, getNodeHeight, getStyle, isNumeric}