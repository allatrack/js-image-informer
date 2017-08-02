function _capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function _getTextNodeHeight(textNode) {
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
 * @param {string} direction - top|bottom|left|right
 * @returns {*}
 */
function getMargin(_element, direction) {

    try {
        var style = _element.currentStyle || window.getComputedStyle(_element);
        var margin = style['margin' + _capitalizeFirstLetter(direction.toLowerCase())].replace('px', '');
        return margin!='auto' ? parseInt(margin) : 0;

    } catch (e) {

        if (_element.nodeName==='#text'){
            return _getTextNodeHeight(_element);
        }
        return 0;
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function getParentFontSize(_element){
    var parent = _element.parentNode;
    var style = _element.currentStyle || window.getComputedStyle(parent);
    var fontSize = style.fontSize.replace('px', '');
    var lineHeight = style.lineHeight.replace('px', '');
    fontSize = isNumeric(fontSize) ? parseInt(fontSize) : 0;
    lineHeight = isNumeric(lineHeight) ? parseInt(lineHeight) : 0;

    return fontSize + lineHeight;
}

export {isTextNode, getMargin, getParentFontSize}