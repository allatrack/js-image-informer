/*marketgid.comV3*/
if (!this.MarketGidJSON) {
    MarketGidJSON = function () {
        function f(n) {return n < 10 ? '0' + n : n;}

        Date.prototype.toJSON = function () {return this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z';};
        var m = {'\b': '\\b', '\t': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"': '\\"', '\\': '\\\\'};

        function stringify(value, whitelist) {
            var a, i, k, l, r = /["\\\x00-\x1f\x7f-\x9f]/g, v;
            switch (typeof value) {
                case'string':
                    return r.test(value) ? '"' + value.replace(r, function (a) {
                        var c = m[a];
                        if (c) {
                            return c;
                        }
                        c = a.charCodeAt();
                        return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
                    }) + '"' : '"' + value + '"';
                case'number':
                    return isFinite(value) ? String(value) : 'null';
                case'boolean':
                case'null':
                    return String(value);
                case'object':
                    if (!value) {
                        return 'null';
                    }
                    if (typeof value.toJSON === 'function') {
                        return stringify(value.toJSON());
                    }
                    a = [];
                    if (typeof value.length === 'number' && !(value.propertyIsEnumerable('length'))) {
                        l = value.length;
                        for (i = 0; i < l; i += 1) {
                            a.push(stringify(value[i], whitelist) || 'null');
                        }
                        return '[' + a.join(',') + ']';
                    }
                    if (whitelist) {
                        l = whitelist.length;
                        for (i = 0; i < l; i += 1) {
                            k = whitelist[i];
                            if (typeof k === 'string') {
                                v = stringify(value[k], whitelist);
                                if (v) {
                                    a.push(stringify(k) + ':' + v);
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (typeof k === 'string') {
                                v = stringify(value[k], whitelist);
                                if (v) {
                                    a.push(stringify(k) + ':' + v);
                                }
                            }
                        }
                    }
                    return '{' + a.join(',') + '}';
            }
        }

        return {
            stringify: stringify, parse: function (text, filter) {
                var j;

                function walk(k, v) {
                    var i, n;
                    if (v && typeof v === 'object') {
                        for (i in v) {
                            if (Object.prototype.hasOwnProperty.apply(v, [i])) {
                                n = walk(i, v[i]);
                                if (n !== undefined) {
                                    v[i] = n;
                                }
                            }
                        }
                    }
                    return filter(k, v);
                }

                if (/^[\],:{}\s]*$/.test(text.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                    j = eval('(' + text + ')');
                    return typeof filter === 'function' ? walk('', j) : j;
                }
                throw new SyntaxError('parseJSON');
            }
        };
    }();
}
MarketGidBaseBlockC144902 = function (root_id, LG, fallback, containerId) {
    var self = this;
    this.LG = LG;
    this.root = this.LG.document.getElementById(root_id);
    this.containerId = containerId;
    this.CB = fallback;
    this.page = 1;
    this.iteration = 1;
    this.adlink = '';
    this.template = '';
    this.id = 144902;
    this.tickerShow = 0;
    this.BY = [];
    this.DA = {};
    this.JK = {};
    this.GM = [];
    this.QF = [];
    this.RR = [];
    this.TR = "";
    this.UG = "";
    this.ED = 0;
    this.LW = {};
    this.MH = "";
    this.LR = "";
    this.crashStep = 0;
    this.loadedDefault = false;
    this.teaserHashes = {};
    this.VZ = {};
    this.json = [];
    this.servicerData = {};
    this.fakeMode = 0;
    this.requestParams = {};
    this.AV = "mgid.com";
    self.templateText = '<div class="mgbox"> <!--advertPrefix--> {foreach} {if this.iteration != 1}</div>{/if}<div class="mgline"> <div class="image-with-text"> <div class="mcimg"> <a {$target} {$href} > <div class="image-container"> <img class="mcimg" {$src} /> <!--intExchangeWagesImagePlace--> </div> </a> </div> <div class="text-elements"> <div class="text_on_hover"> <div class="mctitle"><a {$target} {$href}>{$title}</a></div> <div class="fake"> <div class="mcdomain"><a {$target} {$href}>{$source}</a></div> </div> <div class="mgtobottom"> <div class="mcdomain"><a {$target} {$href}><!--intExhangeWagesSourcePlace-->{$source}</a></div> </div> </div></div> </div> {/foreach} </div></div>';
    self.styles = ' @font-face { font-family: \'Open Sans\'; font-style: normal; font-weight: 400; src: local(\'Open Sans\'), local(\'OpenSans\'), url(//fonts.gstatic.com/s/opensans/v10/K88pR3goAWT7BTt32Z01m1tXRa8TVwTICgirnJhmVJw.woff2) format(\'woff2\'); unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F; } @font-face { font-family: \'Open Sans\'; font-style: normal; font-weight: 400; src: local(\'Open Sans\'), local(\'OpenSans\'), url(//fonts.gstatic.com/s/opensans/v10/RjgO7rYTmqiVp7vzi-Q5UVtXRa8TVwTICgirnJhmVJw.woff2) format(\'woff2\'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; } @font-face { font-family: \'Open Sans\'; font-style: normal; font-weight: 400; src: local(\'Open Sans\'), local(\'OpenSans\'), url(//fonts.gstatic.com/s/opensans/v10/u-WUoqrET9fUeobQW7jkRVtXRa8TVwTICgirnJhmVJw.woff2) format(\'woff2\'); unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF; } @font-face { font-family: \'Open Sans\'; font-style: normal; font-weight: 400; src: local(\'Open Sans\'), local(\'OpenSans\'), url(//fonts.gstatic.com/s/opensans/v10/cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2) format(\'woff2\'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000; } @font-face { font-family: \'Open Sans\'; font-style: normal; font-weight: 700; src: local(\'Open Sans Bold\'), local(\'OpenSans-Bold\'), url(//fonts.gstatic.com/s/opensans/v10/k3k702ZOKiLJc3WVjuplzCUUniRZcd_wq8DYmIfsw2A.woff2) format(\'woff2\'); unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F; } @font-face { font-family: \'Open Sans\'; font-style: normal; font-weight: 700; src: local(\'Open Sans Bold\'), local(\'OpenSans-Bold\'), url(//fonts.gstatic.com/s/opensans/v10/k3k702ZOKiLJc3WVjuplzOXREeHhJi4GEUJI9ob_ak4.woff2) format(\'woff2\'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; } @font-face { font-family: \'Open Sans\'; font-style: normal; font-weight: 700; src: local(\'Open Sans Bold\'), local(\'OpenSans-Bold\'), url(//fonts.gstatic.com/s/opensans/v10/k3k702ZOKiLJc3WVjuplzBUOjZSKWg4xBWp_C_qQx0o.woff2) format(\'woff2\'); unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF; } @font-face { font-family: \'Open Sans\'; font-style: normal; font-weight: 700; src: local(\'Open Sans Bold\'), local(\'OpenSans-Bold\'), url(//fonts.gstatic.com/s/opensans/v10/k3k702ZOKiLJc3WVjuplzOgdm0LZdjqr5-oayXSOefg.woff2) format(\'woff2\'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000; } .mgresponsive { display: inherit; } .mgbox { padding: 0 !important; position: relative !important; text-align: center; vertical-align: top !important; margin: 0 auto; border-style: solid; border-width: 0px; border-color: ; background-color: ; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; line-height: 100% !important; transition: none !important; box-sizing: border-box; } .mgbox { width: 100%; max-width: 100%; } div.mcimg { padding: 0px; text-align: center; } div.mcimg { float: left; } img.mcimg { border-style: solid; border-color: #ffffff; border-width: 0px; width: 100% !important; height: auto !important; max-width: 200px; max-height: 150px; box-sizing: border-box; display: block; } .mctitle { margin-top: 10px; text-align: left; padding-top: 10px; } .mctitle a { font-weight: bold; font-size: 15px; line-height: 15px; font-style: normal; text-decoration: none; color: #333333; font-family: \'Open Sans\', sans-serif; } .mcdesc { display: none; text-align: center; } .mcdesc a { font-weight: normal; font-size: 12px; line-height: 12px; font-style: normal; text-decoration: none; color: #666666; font-family: \'Open Sans\', sans-serif; } .mcdomain { display: block; text-align: center; } .mcdomain a { font-weight: normal; font-size: 10px; line-height: 10px; font-style: normal; text-decoration: none; color: #bbbbbb; font-family: \'Open Sans\', sans-serif; padding: 4px; display: block; overflow: hidden; } .mcdomain a img.mcimgsrc { vertical-align: bottom; margin-bottom: -3px; height: 20px; width: 20px; display: inline-block; } .mgline { background: none repeat scroll 0 0; background-color: ; cursor: pointer; display: inline-block; _overflow: hidden; *zoom: 1; *display: inline; padding: 0 !important; border-style: solid; border-color: #ffffff; border-width: 0px; width: 99%; max-width: 99%; box-sizing: border-box; margin: 10px 0.5%; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; word-wrap: break-word; } .mgline .image-container { position: relative; } .mgline .image-container .mcimgad { position: absolute; right: 0; bottom: 0; width: 20px; height: 20px; } .mgline { vertical-align: top; } .mgline, .mgbox { min-width: 340px; } img.mcimg { display: block; } .mgline[max-width~="120px"] .mcdesc { display: none !important; } @supports not (flex-wrap: wrap) { .mgbox { display: block !important; } .mgline { display: inline-block !important; } } .text-elements a { text-decoration: none; } div.mcprice { text-align: center; } div.mcprice span { font-weight: bold; font-size: 12px; line-height: 12px; font-style: normal; text-decoration: none; color: #ffffff; font-family: \'Open Sans\', sans-serif; } div.mgbuybox, div.mgarrowbox { display: false; } div.mgbuybox, div.mgarrowbox, div.mcprice { display: none; } span.mcpriceold { text-decoration: line-through !important; } @media (max-width: 480px) { .mgline { width: 48% !important; margin: 1% !important; max-width: 48% !important; } } @media (max-width: 480px) { .mgline { width: 98% !important; margin: 1% !important; max-width: 98% !important; } } .mgpopular { background-color: rgba(255, 0, 0, 0.2) !important; border-color: rgba(255, 90, 0, 0.3) !important; } img.mcimg { margin: 0; opacity: 1 !important; } .mgline { position: relative; } .mgline .fake { visibility: hidden; position: relative; padding-top: 4px; } .mgline:hover .mctitle a { color: #00bfff; text-decoration: underline !important; } .mgline:hover .mcpriceold + .mcprice, .mgline:hover .mcpriceold { visibility: hidden; } .mgline:hover .mcdiscount { display: block; position: absolute; left: 0px; right: 0px; top: 5px; } .mgarrowbox { position: relative; background: #00bfff; width: 55%; height: 22px; margin: 0px; border-color: transparent; border-left-color: #00bfff; display: inline-block; font-family: \'Open Sans\', sans-serif; } .mgarrowbox:after { left: 100%; top: 50%; content: " "; height: 0px; width: 0px; position: absolute; pointer-events: none; margin-top: -11px; border: solid 11px; border-color: inherit; } .mgbuybox { width: 40%; display: inline-block; text-align: right; font-weight: bold; font-family: \'Open Sans\', sans-serif; font-size: 12px; color: #666666; text-decoration: underline; } .mctitle { margin-top: 2px; line-height: 1 !important; } .mctitle a { line-height: 110% !important; } .mcdesc { margin-top: 0; margin-bottom: 2px; } .mcdesc a { line-height: 1.5 !important; } div.mcprice { margin-top: 5px; line-height: 12 px !important; } div.mgbuybox, div.mgarrowbox { display: none; } .mgtobottom { position: absolute; bottom: 0px; width: 100%; text-align: left; } .mgline .mgtobottom, .mgline .fake { display: none; } .mghead { font-family: \'Open Sans\', sans-serif !important; color: #00bfff; font-size: 14px !important; text-transform: uppercase !important; } .mcpriceold { float: left; padding-left: 5px; } .mcdiscount { display: none; } .mcdomain { display: block; overflow: hidden; padding: 4px; } .mcdomain a { padding: 0px; display: block; padding-top: 5px; padding-bottom: 2px; overflow: hidden; } div.mcprice, div.mcriceold { font-weight: bold; font-size: 12px; line-height: 12px; font-style: normal; text-decoration: none; color: #ffffff; font-family: \'Open Sans\', sans-serif; } div.mcpriceold { text-decoration: line-through !important; } .mgline[max-width~="120px"] .mgarrowbox, .mgline[max-width~="120px"] .mgbuybox { display: none !important; } .image-with-text { min-height: 1px; } @media (max-width: 480px) { .mgline { width: 98% !important; margin: 1% !important; max-width: 98% !important; } } .mgline { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); -o-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 5px; overflow: hidden; background: #fff; } .mgline .mctitle { text-align: center; margin-top: 3px; line-height: 1 !important; min-height: 35px; overflow: hidden; padding-right: 5px; padding-left: 5px; } ';
    self.webProtocol = "http:";
    self.clickTracking = "";
    self.GX = '';
    self.funcBlocks = {};
    self.VZ = {};
    self.loadedPopularTeaser = false;
    self.deviceType = "desktop";
    self.hrefAttr = "href";
    self.JM = ["wages"];
    this.IV = function (str, limit) {
        if (str.length <= limit) return str;
        var word = new Array();
        word = str.split(" ");
        var ret = word[0] + ' ';
        var test;
        for (i = 1; i < word.length; i++) {
            test = ret + word[i];
            if (test.length > limit) return ret + '...'; else ret += word[i] + ' ';
        }
        return str;
    };
    this.DZ = function (str, limit) {
        var word = new Array();
        var i;
        var ret = '';
        word = str.split(" ");
        for (i = 0; i < word.length; i++) {
            if (word[i].length > limit && word[i].search(/&\w+;/) < 0) ret += word[i].substr(0, limit) + ' ' + word[i].substr(limit) + ' '; else ret += word[i] + ' ';
        }
        return ret;
    };
    this.WF = function (title) {
        title = this.IV(title, 75);
        return title;
    };
    this.OM = function (desc) {
        desc = this.IV(desc, 75);
        return desc;
    };
    this.isArray = function (o) { return Object.prototype.toString.call(o) === '[object Array]'; };
    self.fixGetElementsByClassNameHandler = function (el) {
        if (el.getElementsByClassName == undefined) {
            el.getElementsByClassName = function (cl) {
                var retnode = [];
                var myclass = new RegExp('\\b' + cl + '\\b');
                var elem = this.getElementsByTagName('*');
                for (var i = 0; i < elem.length; i++) {
                    var classes = elem[i].className;
                    if (myclass.test(classes)) retnode.push(elem[i]);
                }
                return retnode;
            };
        }
    };
    this.MX = function () {
        if (!self.CB) {
            if (self.LG.document.getElementById("MarketGidPreloadC" + this.containerId)) {
                this.LG.document.getElementById("MarketGidPreloadC" + this.containerId).style.display = 'none';
            } else if (self.LG.document.getElementById("M103889PreloadC" + this.containerId)) {
                self.LG.document.getElementById("M103889PreloadC" + this.containerId).style.display = 'none';
            }
        } else if (self.CB && this.ED == 0) {
            self.root.innerHTML = "";
        }
    };
    this.MarketGidLoadNews = function (json, servicerData) {
        this.MX();
        if (typeof servicerData != 'undefined') {
            self.servicerData = servicerData;
            if (typeof servicerData.dt != 'undefined') {
                self.deviceType = servicerData.dt;
            }
        }
        if (self.fakeMode == 0) {
            for (var i = 0; i < self.GM.length; i++) {
                self[self.GM[i]]();
            }
        }
        if (this.isArray(json)) {
            if (json.length == 0) {
                return;
            }
            var template = self["templateFunc"](self, json);
            self.json = json;
            if (this.root && template) {
                if (typeof self.parseAdvertLink == 'function') {
                    template = self.parseAdvertLink(template);
                }
                if (this.CB && this.ED == 0) {
                    this.root.innerHTML = ""
                }
                this.root.innerHTML += this.MH + template + this.LR;
            }
        } else {
            if (this.root && this.ED == 0) {
                this.root.innerHTML = '';
                return;
            }
        }
        this.DA["page"] = this.page;
        this.DA['time'] = (new Date()).getTime();
        this.setCookie();
        var hrefs = this.root.getElementsByTagName("a");
        for (var i = 0; i < hrefs.length; i++) {
            hrefs[i].rel = "nofollow";
        }
        this.HE(self.styles);
        this.ED++;
        if (self.fakeMode == 0) {
            for (var i = 0; i < self.QF.length; i++) {
                self[self.QF[i]]();
            }
        } else {
            if (typeof(self.responsiveInit) == "function") {
                self.responsiveInit();
            }
        }
    };
    this.NB = function () {
        var d = this.LG.document, w = this.LG, dE = 'documentElement', cH = 'clientHeight', cW = 'clientWidth', iH = 'innerHeight', iW = 'innerWidth', sH = 'scrollHeight', sW = 'scrollWidth', oH = 'offsetHeight', oW = 'offsetWidth', oL = 'offsetLeft', oT = 'offsetTop', sT = 'scrollTop', sL = 'scrollLeft';
        if (w[iW]) {
            return {"c": w[iH], "s": w.pageYOffset};
        } else if (d[dE] && d[dE][cW]) {
            return {"c": d[dE][cH], "s": d[dE][sT]};
        } else if (d.body[cW]) {
            return {"c": d.body[cH], "s": d.body[sT]};
        }
        return 0;
    };
    this.crashWorker = function () {
        if (MarketGidInfC144902.template == '' && !MarketGidInfC144902.loadedDefault) {
            MarketGidInfC144902.crashStep = 1;
            MarketGidInfC144902.MarketGidRedirectComposite([]);
        }
    };
    this.renderItem = function (n, callbackText, type) {
        if (self.isArray(n)) {
            var p = self.VG(n, type);
            if (!(p.id in self.LW) && p.id != '') {
                if (typeof p.hash !== 'undefined' && typeof p.id !== 'undefined') {
                    self.teaserHashes[p.id] = p.hash;
                }
                self.LW[p.id] = 1;
                var addClasses = [];
                if (!self.loadedPopularTeaser && typeof(p.other.adc) != 'undefined' && ( p.other.adc.toString().indexOf('mrsadca') >= 0 || p.other.adc.toString().indexOf('mrsadcp') >= 0 )) {
                    addClasses.push('mgpopular');
                    self.loadedPopularTeaser = true;
                }
                addClasses.push('teaser-' + p.id);
                if ('l' in p.other && null != p.other.l.match(/[\?|&]u=/)) {
                    addClasses.push('dsp');
                }
                if ('type' in p.other) {
                    addClasses.push('type-' + p.other.type);
                }
                var vars = [[/\{\*.*?\*\}/, ''], [/\{\$href\}/g, self.hrefAttr + '="' + self.LI(p.hash) + '" data-hash="' + p.hash + '"'], [/\{\$pmc_item\}/, self.id], [/\{\$target\}/g, (typeof p.other.type !== 'undefined' && p.other.type == 'i') ? 'target="_self"' : 'target="_blank"'], [/(class\=\"[^+]?)(mgline)([^+]?\")/, '$1$2 ' + addClasses.join(' ') + '$3'], [/\{\$source\}/g, p.source], [/\{\$src\}/g, 'width="200" height="150"' + ' data-i="' + p.id + '" src="' + p.other["i"] + '"'], [/\{\$title\}/g, self.WF(p.title)], [/\{\$desc\}/g, self.OM(p.desc)], [/\{\$iteration\}/g, self.iteration], [/\$iteration/g, self.iteration], [/this\.iteration/g, self.iteration], [/\{\$price\}/g, p.price], [/\{\$priceold\}/g, p.priceold], [/\{\$discount\}/g, p.discount], [/\{if \$price\}/g, "{if '' != p.price.replace(new RegExp('[^0-9.]'), '')}"], [/\{if !\$price\}/g, "{if '' == p.price.replace(new RegExp('[^0-9.]'), '')}"], [/\{if \$priceold\}/g, "{if '' != p.priceold.replace(new RegExp('[^0-9.]'), '')}"], [/\{if \$price != " "\}/g, "{if p.price != ' '}"], [/\{if \$price == " "\}/g, "{if p.price == ' '}"], [/\$priceold/g, p.priceold], [/\$price/g, p.price], [/\{if \$rep\}/g, "{if p.isReplic}"]];
                for (var i = 0; i < vars.length; i++) {
                    callbackText = callbackText.replace(vars[i][0], vars[i][1]);
                }
                while (true) {
                    var x = callbackText;
                    var r = /\{if ([^\}]*?)\}(((?!\{(?:\/)?if).)*)\{\/if\}/g;
                    callbackText = callbackText.replace(r, function (str, p1, p2) {
                        if (eval(p1)) {
                            return p2;
                        } else {
                            return "";
                        }
                    });
                    if (x == callbackText) break;
                }
                this.iteration++;
                return callbackText;
            } else {
                self.LW[p.id]++;
                return "";
            }
        }
    };
    this.generateTemplate = function (templateText) {
        self["templateText"] = templateText;
        self["templateFunc"] = function (inf, json) {
            var parts = /(.*)?\{foreach\}(.*)?\{\/foreach\}(.*)?/.exec(self["templateText"]);
            if (!parts) {
                return;
            }
            var template = typeof(parts[1]) != 'undefined' ? parts[1] : '';
            for (var i = 0; i < json.length; i++) {
                template += inf.renderItem(json[i], parts[2], 'goods');
            }
            template += typeof(parts[3]) != 'undefined' ? parts[3] : '';
            return template;
        };
        return true;
    };
    this.init = function () {
        if (this.root) {
            this.getCookie();
            var cookiePage = parseInt(this.DA["page"]);
            this.BY = this.root.getElementsByTagName('a');
            var pageOffset = (this.LG['MarketGidPageOffset'] ? parseInt(this.LG['MarketGidPageOffset']) : 0);
            self.addEvent(self.root, 'click', self.hangNiceLinkListener);
            self.addEvent(self.root, "\x63\x6f\x6e\x74\x65\x78\x74menu", self.hangNiceLinkListener);
            self.addEvent(self.root, 'mouseup', self.hangNiceLinkListener);
            self.addEvent(self.root, 'touchstart', self.hangNiceLinkListener);
            var tmpType = this.DA["mg_type"] ? this.DA["mg_type"] : this.RM;
            var pagesCountNews = parseInt('');
            var pagesCountGoods = parseInt('20');
            var pagesCount = (tmpType == 'news') ? pagesCountNews : pagesCountGoods;
            if (cookiePage != null && cookiePage < pagesCount && cookiePage > 0) {
                this.page = cookiePage + 1;
            } else if (cookiePage > (pagesCount - 1) || cookiePage < 1) {
                this.page = 1 + pageOffset;
            }
            if ((new Date()).getTime() - (this.DA['time'] != undefined ? this.DA['time'] : 0) >= 6e5) {
                this.page = 1 + pageOffset;
            }
            if (!this.page) this.page = 1;
            this.pageUnlim = this.page - 1;
            this.DA["page"] = this.page;
            this.setCookie();
            if (!this.LG.document.cookie) {
                var dt = new Date();
                this.page = dt.getSeconds() % pagesCount + 1;
            }
            this.TR = '//servicer.' + this.AV + '/';
            var protocol = self.LG.document.location.protocol;
            self.webProtocol = protocol.indexOf("http") != -1 ? protocol : "http:";
            self.clickTracking = typeof(self.LG.MGClickTracking) != 'undefined' ? self.LG.MGClickTracking : "";
            if (!self.generateTemplate(self.templateText)) {
                return;
            }
            self.LG.onClickExcludes = self.LG.onClickExcludes || [];
            self.LG.onClickExcludes.push(self.root);
            for (var i = 0; i < this.RR.length; i++) {
                this[this.RR[i]]();
            }
        }
    };
    this.getMostTopWindow = function () {
        var w = self.LG;
        while (w != w.parent) {
            try {
                var test = w.parent.document.body;
                w = w.parent;
            } catch (e) {
                break;
            }
        }
        return w;
    };
    this.BB = function (forceShow, refresh) {
        var script = this.LG.document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        var scriptSrc = "";
        var fs = forceShow ? 'fs/' : '';
        scriptSrc += self.TR + fs + '144902/' + this.page;
        if (refresh) {
            self.requestParams.rsh = "rsh=1";
        }
        if (this.LG.MGi != undefined) {
            self.requestParams.geo = "geo=" + this.LG.MGi;
        }
        self.requestParams.pv = "pv=5";
        self.requestParams.cbuster = "cbuster=" + (this.LG.MG_CacheBuster ? this.LG.MG_CacheBuster : ((new Date().getTime()) + '' + Math.floor((Math.random() * 1000000000) + 1)));
        if (JSON.parse('["wages"]').indexOf('int_exchange') >= 0) {
            var ogUrlEl = self.LG.document.querySelector('meta[property="og:url"]');
            if (ogUrlEl) {
                self.requestParams.ogurl = 'ogurl=' + ogUrlEl.getAttribute('content');
            }
            var ogTitleEl = self.LG.document.querySelector('meta[property="og:title"]');
            if (ogTitleEl) {
                self.requestParams.ogtitle = 'ogtitle=' + ogTitleEl.getAttribute('content');
            }
        }
        if (scriptSrc.indexOf('?') == -1) {
            scriptSrc += '?';
        } else {
            scriptSrc += '&';
        }
        var params = [];
        for (var key in self.requestParams) {
            params.push(self.requestParams[key]);
        }
        params.push('ref=' + encodeURIComponent(this.LG.document.referrer));
        var isIframe = self.LG.self !== self.LG.top;
        if (isIframe) {
            params.push('iframe=1');
        }
        try {
            if (!sessionStorage.MG_Session_lastUpdate || Number(sessionStorage.MG_Session_lastUpdate) + 30 * 60 * 1000 < Date.now()) {
                var refererUrl = isIframe ? this.LG.parent.document.referrer : this.LG.document.referrer;
                var matchDomain = refererUrl.match(/:\/\/([^\/:]+)/i);
                sessionStorage.MG_Session_pr = matchDomain && matchDomain[1] ? matchDomain[1] : '';
                sessionStorage.MG_Session_lu = isIframe ? this.LG.parent.location.href : this.LG.location.href;
            }
            sessionStorage.MG_Session_lastUpdate = Date.now();
            if (sessionStorage && sessionStorage.MG_Session_pr) {
                params.push('pr=' + encodeURIComponent(sessionStorage.MG_Session_pr))
            }
            if (sessionStorage && sessionStorage.MG_Session_lu) {
                params.push('lu=' + encodeURIComponent(sessionStorage.MG_Session_lu))
            }
        } catch (err) {
        }
        var w = self.getMostTopWindow();
        if (typeof w._mgPageView103889 == 'undefined') {
            w._mgPageView103889 = (new Date()).getTime().toString(16) + (Math.round(Math.random() * 1000000000) + 2147483648).toString(16);
            params.push('pageView=1');
        } else {
            params.push('pageView=0');
        }
        params.push('pvid=' + w._mgPageView103889);
        scriptSrc += params.join("&");
        script.src = scriptSrc;
        (this.realRoot != undefined ? this.realRoot : this.root).parentNode.appendChild(script);
        script.onerror = function () {
            self.mg_ws.onmessage = self.mg_ws_messageHandler;
            self.sendMessage('gb|' + script.src);
            self.isAdblock = true;
        };
    };
    this.start = function () {
        if (self.root && self.ED == 0) {
            self.BB();

            self.QF.push("mediaStickyWigetInit");

            self.mediaStickyWigetInit = function () {
                var initialMediaStickyWidget = parent.window.document.getElementById('MarketGidComposite' + self.id);

                if (!initialMediaStickyWidget){
                    throw new Error('mediaStickyWigetInit: Cant find initual block for MediaStickyWidget');
                }
                initialMediaStickyWidget.style.display= 'none';

                parent.window.addEventListener('load', function(e) {
                    //parent.window.addEventListener("load", function(){
                    var loc = parent.window.document.location;
                    // For github use
                    // var url = loc.protocol + "//" + loc.host + "/" + loc.pathname.split("/")[1];
                    // for local Server use
                    var url = loc.protocol + "//" + loc.host;

                    var mediaStickyWigetScript = parent.window.document.createElement('script');
                    mediaStickyWigetScript.type = 'text/javascript';
                    mediaStickyWigetScript.charset = 'utf-8';
                    mediaStickyWigetScript.src = url + "/dist/media.sticky.widget.js";
                    (self.realRoot != undefined ? self.realRoot : self.root).parentNode.appendChild(mediaStickyWigetScript);

                    mediaStickyWigetScript.onload = function () {
                        var stickyWidgetsCreator = new parent.window.stickyWidgetLib.ImageInformerCreator('MarketGidComposite', self.id);
                        var articleExtractor = new parent.window.stickyWidgetLib.ArticleExtractor();

                        stickyWidgetsCreator.article = articleExtractor.parseArticle();
                        stickyWidgetsCreator.stickyBlocksToPaste = initialMediaStickyWidget.querySelectorAll('.mgline');
                        stickyWidgetsCreator.findSuitableImages(400, 0.5, 2);
                        stickyWidgetsCreator.styles = self.styles ;
                        stickyWidgetsCreator.insertWidget(stickyWidgetsCreator.stickyBlocksToPaste, 2);
                    }
                })
            }
        }
    };
    this.addEvent = function (elem, type, handler) {
        if (elem.addEventListener) {
            elem.addEventListener(type, handler, false)
        } else {
            elem.attachEvent('on' + type, handler)
        }
    };
    this.removeEvent = function (elem, type, handler) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handler, false)
        } else {
            elem.detachEvent('on' + type, handler)
        }
    };
    this.getMainCssSelector = function () { return "#" + (this.realRoot ? this.realRoot.id : this.root.id); }
};
var mgCanLoad144902 = false;
var mgFallback144902 = false;
if (document.getElementById("MG_ID")) mgCanLoad144902 = true;
if (document.getElementById("MarketGidComposite144902") || document.getElementById("M103889Composite144902")) {
    mgCanLoad144902 = true;
    mgFallback144902 = true;
}
if (this['mgCanLoad144902']) {
    if (!mgFallback144902) {
        var rootId144902 = document.getElementById("MG_ID").innerHTML;
        var div144902 = parent.window.document.createElement('div');
        div144902.id = "MarketGidComposite144902";
        var mgRootId144902 = parent.window.document.getElementById("MarketGidScriptRootC" + rootId144902) ? ("MarketGidScriptRootC" + rootId144902) : ("M103889ScriptRootC" + rootId144902);
        parent.window.document.getElementById(mgRootId144902).appendChild(div144902);
        MarketGidInfC144902 = new MarketGidBaseBlockC144902(div144902.id, parent.window, false, rootId144902);
    } else {
        var mgRootId144902 = document.getElementById("MarketGidComposite144902") ? "MarketGidComposite144902" : "M103889Composite144902";
        MarketGidInfC144902 = new MarketGidBaseBlockC144902(mgRootId144902, window, true, 0);
    }
    this['MarketGidCMainBlock144902'] = function (self) {
        self.mg_ws = typeof(mg_ws144902) == "object" ? mg_ws144902 : {};
        self.mg_ws_location = "wss://wsp.mgid.com/ws";
        self.waitForSocketConnection = function (e, t) { setTimeout(function () { return 1 === e.readyState ? void (null != t && t()) : void self.waitForSocketConnection(e, t) }, 5) };
        self.QF.push("PZ");
        self.BS = function (hash, event, element) {
            var href = "";
            var data = self.VZ[hash];
            if (element && typeof self.LG._mgExternalLinkChanger !== 'undefined' && self.LG._mgExternalLinkChanger == 1) {
                href = element.protocol + "//" + element.hostname + element.pathname;
                var paramsStr = element.search;
                if (paramsStr != '') {
                    paramsStr = paramsStr.replace("?", "");
                    var params = paramsStr.split("&");
                    for (var i = 0; i < params.length; i++) {
                        var param = params[i].split("=");
                        if (param[0] != 'k') {
                            href += (i == 0 ? "?" : "&") + params[i];
                        }
                    }
                }
            } else {
                href = self.clickTracking + self.webProtocol;
                if (data) {
                    if (data.link) {
                        href += data.link;
                    }
                } else {
                    href = "#";
                }
            }
            if (typeof self.QC == 'function' && data && data['coopType'] != 'i') {
                var afParams = self.QC(event, element);
                if (afParams) {
                    var suffix = '144902';
                    href += ((href.indexOf('?') >= 0) ? '&' : '?') + 'k=' + suffix + 'f' + afParams;
                }
            }
            if (true == parseInt('0')) {
                var template = '';
                template = template.replace(/^(\/\/)/, self.LG.location.protocol + '$1');
                template = template.replace(/(%host%)/, self.LG.location.host);
                template = template.replace(/(%title%)/, self.SW(data[3]));
                href = template.replace(/(%rurl%)/, self.WR(href, true));
            }
            return href;
        };
        self.LI = function (hash, event, element) {
            var href;
            var data = self.VZ[hash];
            if (data.other['sdl'] == 1 && data['coopType'] != 'i') {
                href = self.clickTracking;
                if (typeof(data.other['dl']) != 'undefined' && data.other['dl'] != '') {
                    href += data.other['dl'];
                } else {
                    var source = decodeURIComponent(data[0].replace(/[`|',:\/?;$%&\(\)^*!@\s]/g, '')).toLowerCase();
                    var title = decodeURIComponent(data[3].replace(/[`|',:\/?;$%&\(\)^*!@]/g, '')).replace(/\s/g, '_');
                    href += self.webProtocol + '//' + (source ? source + '/' : '') + title;
                }
            } else {
                href = self.BS(hash, event, element);
            }
            return href;
        };
        self.SW = function (str) {
            var a = {
                'РЃ': 'YO',
                'Р™': 'I',
                'Р¦': 'TS',
                'РЈ': 'U',
                'Рљ': 'K',
                'Р•': 'E',
                'Рќ': 'N',
                'Р“': 'G',
                'РЁ': 'SH',
                'Р©': 'SCH',
                'Р—': 'Z',
                'РҐ': 'H',
                'РЄ': '',
                'С‘': 'yo',
                'Р№': 'i',
                'С†': 'ts',
                'Сѓ': 'u',
                'Рє': 'k',
                'Рµ': 'e',
                'РЅ': 'n',
                'Рі': 'g',
                'С€': 'sh',
                'С‰': 'sch',
                'Р·': 'z',
                'С…': 'h',
                'СЉ': '\'',
                'Р¤': 'F',
                'Р«': 'I',
                'Р’': 'V',
                'Рђ': 'a',
                'Рџ': 'P',
                'Р ': 'R',
                'Рћ': 'O',
                'Р›': 'L',
                'Р”': 'D',
                'Р–': 'ZH',
                'Р­': 'E',
                'С„': 'f',
                'С‹': 'i',
                'РІ': 'v',
                'Р°': 'a',
                'Рї': 'p',
                'СЂ': 'r',
                'Рѕ': 'o',
                'Р»': 'l',
                'Рґ': 'd',
                'Р¶': 'zh',
                'СЌ': 'e',
                'РЇ': 'Ya',
                'Р§': 'CH',
                'РЎ': 'S',
                'Рњ': 'M',
                'Р': 'I',
                'Рў': 'T',
                'Р¬': '',
                'Р‘': 'B',
                'Р®': 'YU',
                'СЏ': 'ya',
                'С‡': 'ch',
                'СЃ': 's',
                'Рј': 'm',
                'Рё': 'i',
                'С‚': 't',
                'СЊ': '',
                'Р±': 'b',
                'СЋ': 'yu',
                ' ': '_',
                'С–': 'i',
                'Р†': 'I',
                'С—': 'i',
                'Р‡': 'I'
            };
            return str.split('').map(function (char) {
                if (char.match(/[a-z0-9_\-]/i)) {
                    return char;
                }
                return a[char] || '';
            }).join('');
        };
        self.FP = function (el) {
            while (el.tagName !== 'BODY') {
                if (el.tagName == "A") {
                    return el;
                } else {
                    el = el.parentNode;
                }
            }
            return null;
        };
        self.CM = function (element, selector) {
            var foundElements;
            while (element.parentNode) {
                foundElements = element.parentNode.querySelectorAll(selector);
                for (var i = 0; i < foundElements.length; i++) {
                    if (element.isEqualNode(foundElements[i])) {
                        return foundElements[i];
                    }
                }
                element = element.parentNode;
            }
            return null;
        };
        self.VG = function (data, type) {
            var t = {};
            t.source = data[0];
            t.id = data[1];
            t.title = (typeof data[3] != 'undefined') ? data[3] : "";
            t.desc = (typeof data[4] != 'undefined') ? data[4] : "";
            if (type.toLowerCase() == 'news') {
                t.mirror = data[5] ? data[5] : self.SLs[self.IF];
                t.hash = data[6];
                t.other = data[7];
                t.price = " ";
                t.priceold = t.discount = "";
                t.isReplic = false;
            } else {
                t.mirror = self.SLs[self.IF];
                t.key = data[6];
                t.price = (typeof data[7] != 'undefined') ? data[7].replace(".00", "") : "";
                t.priceold = (typeof data[8] != 'undefined') ? data[8].replace(".00", "") : "";
                t.discount = t.priceold.replace(new RegExp('[^0-9.]'), '') == '' ? '' : Math.floor((1 * /\d+(?:\.\d+)?/.exec(t.priceold) - 1 * /\d+(?:\.\d+)?/.exec(t.price)) * 100 / (/\d+(?:\.\d+)?/).exec(t.priceold)) + '%';
                t.hash = data[9];
                t.other = (typeof data[10] != 'undefined') ? data[10] : {};
                var titleLower = t.title.toLowerCase();
                var descLower = t.desc.toLowerCase();
                var replicWords = ["РєРѕРїРёСЏ", "РїРѕРґРґРµР»РєР°", "СЂРµРїР»РёРєР°", "РєР°Рє РѕСЂРёРіРёРЅР°Р»"];
                var replicInsertWords = ["РљРѕРїРёСЏ. ", "Р РµРїР»РёРєР°. "];
                if (data[5] == '1') {
                    t.isReplic = true;
                    for (var i = 0; i < replicWords.length; i++) {
                        if (self.WF(titleLower).indexOf(replicWords[i]) > -1 || self.OM(descLower).indexOf(replicWords[i]) > -1) {
                            t.isReplic = false;
                            break;
                        }
                    }
                } else {
                    t.isReplic = false;
                }
            }
            if (self.deviceType != 'desktop') {
                t.other.sdl = 0;
            }
            data['other'] = t.other;
            self.VZ[t.hash] = data;
            self.VZ[t.hash]['id'] = t.id;
            self.VZ[t.hash]['img'] = typeof(t.other['i']) != 'undefined' ? t.other['i'] : null;
            self.VZ[t.hash]['source'] = t.source;
            self.VZ[t.hash]['img'] = t.other["i"];
            self.VZ[t.hash]['type'] = type;
            self.VZ[t.hash]['link'] = typeof(t.other['l']) != 'undefined' ? t.other['l'] : null;
            self.VZ[t.hash]['mirror'] = t.mirror;
            self.VZ[t.hash]['coopType'] = typeof(t.other['type']) != 'undefined' ? t.other['type'] : null;
            self.VZ[t.hash]['clicktrackers'] = typeof(t.other['clicktrackers']) != 'undefined' ? t.other['clicktrackers'] : [];
            return t;
        };
        self.WR = function (s, replaceChars) {
            replaceChars = typeof replaceChars == 'undefined' ? replaceChars : false;
            var b64c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            var b64e = '';
            var c1, c2, c3, e1, e2, e3, e4;
            var i = 0;
            while (i < s.length) {
                c1 = s.charCodeAt(i++);
                c2 = s.charCodeAt(i++);
                c3 = s.charCodeAt(i++);
                e1 = c1 >> 2;
                e2 = ((c1 & 3) << 4) | (c2 >> 4);
                e3 = isNaN(c2) ? 64 : (((c2 & 15) << 2) | (c3 >> 6));
                e4 = isNaN(c3) ? 64 : (c3 & 63);
                b64e += b64c.charAt(e1) + b64c.charAt(e2) + b64c.charAt(e3) + b64c.charAt(e4);
            }
            if (true == replaceChars) {
                b64e = b64e.replace('+', '-').replace('/', '_').replace('=', '*');
            }
            return b64e;
        };
        self.hangNiceLinkListener = function (event) {
            if (self.loadedDefault) {
                return;
            }
            if (!event) {
                var event = self.LG.event;
            }
            if (!event.target) {
                event.target = event.srcElement;
            }
            var element = event.target;
            if (element.tagName != 'A') {
                var element = self.FP(element);
                if (null == element) {
                    return;
                }
            }
            var hash = element['data-hash'] || element.getAttribute('data-hash');
            if (hash != undefined) {
                if (typeof self.VZ[hash] != 'undefined' && typeof self.VZ[hash]['other'] != 'undefined' && typeof self.VZ[hash]['other']['sdl'] != 'undefined') {
                    self.VZ[hash]['other']['sdl'] = 0;
                }
                element[self.hrefAttr] = self.BS(hash, event, element);
            }
        };
        self.htmlToElement = function (html) {
            var template = document.createElement('div');
            template.innerHTML = html;
            return template.firstChild;
        };
        self.htmlToElements = function (html) {
            var template = self.LG.document.createElement('div');
            template.innerHTML = html;
            return Array.prototype.slice.call(template.childNodes);
        };
        self.mg_ws_messageHandler = function (evt) {
            if (evt && typeof evt.data != 'undefined' && evt.data != 'ok') {
                self.LG.eval(evt.data)
            }
            ;
        };
        self.sendMessage = function (msg) {
            if (typeof self.mg_ws == 'object' && self.mg_ws.__proto__.toString() == '[object Worker]') {
                self.mg_ws.postMessage(msg);
            } else {
                var h = self.mg_ws.onmessage;
                try {
                    self.mg_ws = new Worker(URL.createObjectURL(new Blob(['eval(atob(\'ZnVuY3Rpb24gc2VuZE1lc3NhZ2UoZSl7dmFyIGg9bWdfd3Mub25tZXNzYWdlOyBtZ193cy5yZWFkeVN0YXRlPT1tZ193cy5DTE9TRUQmJihtZ193cz1uZXcgV2ViU29ja2V0KG1nX3dzX2xvY2F0aW9uKSksbWdfd3Mub25tZXNzYWdlPWgsd2FpdEZvclNvY2tldENvbm5lY3Rpb24obWdfd3MsZnVuY3Rpb24oKXttZ193cy5zZW5kKGUpfSl9ZnVuY3Rpb24gd2FpdEZvclNvY2tldENvbm5lY3Rpb24oZSx0KXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIDE9PT1lLnJlYWR5U3RhdGU/dm9pZChudWxsIT10JiZ0KCkpOnZvaWQgd2FpdEZvclNvY2tldENvbm5lY3Rpb24oZSx0KX0sNSl9OyB2YXIgbWdfd3NfbG9jYXRpb24gPSAid3NzOi8vd3NwLm1naWQuY29tL3dzIjsgbWdfd3MgPSBuZXcgV2ViU29ja2V0KG1nX3dzX2xvY2F0aW9uKSwgbWdfd3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKHQpIHtwb3N0TWVzc2FnZSh0LmRhdGEpO30sIG9ubWVzc2FnZSA9IGZ1bmN0aW9uKGUpe3NlbmRNZXNzYWdlKGUuZGF0YSl9\'))']), {type: "application/javascript"}));
                    self.mg_ws.onmessage = self.mg_ws_messageHandler;
                } catch (err) {
                    self.isAdblock = true;
                    self.initServerSide();
                }
                self.mg_ws.onmessage = h;
                self.mg_ws.postMessage(msg);
            }
        };
        self.PZ = function () {
            setTimeout(function () {
                if (typeof self.mg_ws != "object" || !(self.mg_ws instanceof WebSocket) || !self.YS(self.root)) {
                    return;
                }
                var dt = new Date().toISOString().slice(0, 19).replace('T', ' ');
                var uid = self.blockType == 'news' ? '' : '5590549';
                self.sendMessage('a| ' + dt + ': ' + uid + ' - ' + self.LG.location.href);
            }, 2000);
        };
        self.YS = function (el) {
            while (el.tagName !== 'BODY') {
                if ('fixed' != el.style.position && null == el.offsetParent) {
                    return true;
                }
                if ('hidden' == el.style.visibility) {
                    return true;
                }
                if ('none' == el.style.display) {
                    return true;
                }
                el = el.parentNode;
            }
            return false;
        };
        self.HE = function (style, container) {
            style = style.replace(/(@media \([^(]*\) {)/g, "$1}");
            style = style.replace(/((?:^|}|,)\W*)((?:\w+)?\.(?:mc|mg)[\-\w]+)/g, "$1" + this.getMainCssSelector() + " $2");
            style = style.replace(/((@media \([^(]*\) \{)\})/g, "$2");
            if (style == "") return;
            if (!container) {
                var MGst = container ? container : this.LG.document.createElement('style');
                MGst.className = 'MarketGidC144902';
                MGst.type = 'text/css';
                (this.realRoot != undefined ? this.realRoot : this.root).parentNode.appendChild(MGst);
                if (MGst.styleSheet) {
                    MGst.styleSheet.cssText = style;
                } else {
                    MGst.appendChild(this.LG.document.createTextNode(style));
                }
                ;
            } else {
                var MGst = container;
                MGst.className = 'MarketGidC144902';
                if (MGst.styleSheet) {
                    MGst.styleSheet.cssText = style;
                } else {
                    while (MGst.firstChild) {
                        MGst.removeChild(MGst.firstChild);
                    }
                    MGst.appendChild(this.LG.document.createTextNode(style));
                }
                ;
            }
        };
    };
    this['MarketGidCMainBlock144902'].call(this['MarketGidInfC144902'], this['MarketGidInfC144902']);
    this['MarketGidInfC144902']['funcBlocks']['Main'] = 'MarketGidCMainBlock144902';
    MarketGidCCookieBlock144902 = function (self) {
        this.storageName = "MarketGidStorage" + (this.LG.MarketGidPageOffset ? this.LG.MarketGidPageOffset : "");
        this.OS = function () {
            var matches = this.LG.document.cookie.match(new RegExp("(?:^|; )" + this.storageName + "=([^;]*)"));
            var res = {};
            if (matches) {
                try {
                    res = MarketGidJSON.parse(decodeURIComponent(matches[1]));
                } catch (e) {
                }
                ;
            }
            return res;
        };
        this.getCookie = function () {
            var value = this.OS();
            if (value["C144902"] != undefined) {
                this.DA = value["C144902"];
            } else this.DA = {};
            if (value["0"] != undefined) {
                this.JK = value["0"];
            } else this.JK = {};
        };
        this.setCookie = function () {
            var totalCookie = this.OS();
            totalCookie["C144902"] = this.DA;
            totalCookie["0"] = this.JK;
            var value = encodeURIComponent(MarketGidJSON.stringify(totalCookie));
            this.LG.document.cookie = this.storageName + "=" + value + ";path=/";
        };
    };
    this['MarketGidCCookieBlock144902'].call(this['MarketGidInfC144902'], this['MarketGidInfC144902']);
    this['MarketGidInfC144902']['funcBlocks']['Cookie'] = 'MarketGidCCookieBlock144902';
    MarketGidCSubnetsBlock144902 = function () {
        var self = this;
        self.funcBlocks["Subnets"] = "MarketGidCSubnetsBlock144902";
        this.RR.push("XZ");
        this.IF = "";
        this.SLs = {};
        this.SLServicers = {};
        this.SLsImages = {};
        this.SLsAdvert = {};
        this.SLsAdLinkBlocks = {};
        this.SLsUtm = {};
        this.subnetDashboardDomains = {};
        this.SLNames = {};
        this.SLs['0'] = 'mgid.com';
        this.SLServicers['0'] = 'mgid.com';
        this.SLNames['marketgid'] = parseInt('0');
        this.SLsImages['0'] = 'mgid.com';
        this.SLsAdLinkBlocks['0'] = '<div class="mgheader" data-advert-url="//cdn.mgid.com/advert/mgid/main.html"><span class="mghead">%WIDGET_TITLE%</span><div class="mg_addad%id"><a href="http://mgid.com/advertisers%utm%id" target="_blank"> by <img style="display: inline-block;width: auto!important;" src="//cdn.mgid.com/images/mgid_logo_mini_43x20.png" alt="Mgid" title="Mgid"></a></div></div><style>.mghead{font-weight:700;font-size:14px;text-transform:uppercase;text-align:left;font-family: "Open Sans", sans-serif;color:#4555a7;display:block;margin:0 0 0px 5px;float:left;}.mgheader{ display: table !Important; width: 100% !important;}div.mg_addad%id{text-align: right; opacity: 0.5;margin-right: 10px;display: inline-block;float: right;} div.mg_addad%id:hover{opacity: 1} div.mg_addad%id a{color: #000000; font:normal 10px Myriad Pro; text-decoration: none;} div.mg_addad%id img{margin: 0px -5px 0px 0px; border:0px;float: none;padding:0px;}</style>';
        this.SLsUtm['0'] = '?utm_source=widget&utm_medium=text&utm_campaign=add&utm_content=';
        this.subnetDashboardDomains['0'] = '//dashboard.mgid.com';
        this.SLs['1'] = 'fem.mgid.com';
        this.SLServicers['1'] = 'mgid.com';
        this.SLNames['lady'] = parseInt('1');
        this.SLsImages['1'] = 'mgid.com';
        this.SLsAdLinkBlocks['1'] = '<div class="mgheader"><span class="mghead">%WIDGET_TITLE%</span><div class="mg_addad%id"><a href="http://mgid.com/advertisers%utm%id" target="_blank"> by <img style="display: inherit!important;width: auto!important;" src="//cdn.mgid.com/images/mgid_logo_mini_43x20.png" alt="Mgid" title="Mgid"></a></div></div><style>.mghead{font-weight:700;font-size:14px;text-transform:uppercase;text-align:left;font-family: "Open Sans", sans-serif;color:#4555a7;display:block;margin:0 0 0px 5px;float:left;}.mgheader{ display: table !Important; width: 100% !important;}div.mg_addad%id{text-align: right; opacity: 0.5;margin-right: 10px} div.mg_addad%id:hover{opacity: 1} div.mg_addad%id a{color: #000000; font:normal 10px Myriad Pro; text-decoration: none;} div.mg_addad%id img{margin-bottom: -5px; border:0px}</style>';
        this.SLsUtm['1'] = '?utm_source=widget_fem&utm_medium=text&utm_campaign=add&utm_content=';
        this.subnetDashboardDomains['1'] = '//dashboard.mgid.com';
        this.SLs['2'] = 'adskeeper.co.uk';
        this.SLServicers['2'] = 'adskeeper.co.uk';
        this.SLNames['adskeeper'] = parseInt('2');
        this.SLsImages['2'] = 'adskeeper.co.uk';
        this.SLsAdLinkBlocks['2'] = '<div class="mg_addad%id widgets_logo%id"><a href="http://adskeeper.co.uk/#1" target="_blank"><img src="//cdn.adskeeper.co.uk/images/adskeeper_logo_mini_71x28.png" alt="Adskeeper" title="Adskeeper"></a></div><style type="text/css">div.mg_addad%id{text-align: right; opacity: 0.5;} div.mg_addad%id:hover{opacity: 1} div.mg_addad%id a{color: #000000; font:normal 10px Myriad Pro; text-decoration: none;} div.mg_addad%id img{margin-bottom: -5px; border:0px}</style>';
        this.SLsUtm['2'] = '?utm_source=widget_adskeeper&utm_medium=text&utm_campaign=add&utm_content=';
        this.subnetDashboardDomains['2'] = '//dashboard.adskeeper.co.uk';
        this.SLs['3'] = 'idealmedia.com';
        this.SLServicers['3'] = 'tidealmedia.com';
        this.SLNames['idealmedia'] = parseInt('3');
        this.SLsImages['3'] = 'idealmediam';
        this.SLsAdLinkBlocks['3'] = '';
        this.SLsUtm['3'] = '';
        this.subnetDashboardDomains['3'] = '//dashboard.idealmedia.com';
        this.RR.push("XZ");
        var informerData = [];
        informerData.push({"id": "144902", "protocol": "5", "type": "Goods", "subnet": "0"});
        this.XZ = function () {
            for (var i = 0; i < informerData.length; i++) {
                var tickerId = informerData[i].id;
                if ((informerData[i].subnet !== '1') ^ ('0' === '1')) {
                    (function (type) {
                        self.LG["MarketGidLoad" + type + tickerId] = function (json, awd) {
                            self.GX = type.toLowerCase();
                            self.IF = '0';
                            self["MarketGidLoadNews"](json, awd);
                        };
                        self.LG["MarketGidCReject144902"] = self['MarketGidReject'];
                    })(informerData[i].type);
                }
                if ((informerData[i].subnet !== '1') ^ ('1' === '1')) {
                    (function (type) {
                        self.LG["MarketGidLoad" + type + tickerId] = function (json, awd) {
                            self.GX = type.toLowerCase();
                            self.IF = '1';
                            self["MarketGidLoadNews"](json, awd);
                        };
                        self.LG["MarketGidCReject144902"] = self['MarketGidReject'];
                    })(informerData[i].type);
                }
                if ((informerData[i].subnet !== '1') ^ ('2' === '1')) {
                    (function (type) {
                        self.LG["AdskeeperLoad" + type + tickerId] = function (json, awd) {
                            self.GX = type.toLowerCase();
                            self.IF = '2';
                            self["MarketGidLoadNews"](json, awd);
                        };
                        self.LG["AdskeeperCReject144902"] = self['MarketGidReject'];
                    })(informerData[i].type);
                }
                if ((informerData[i].subnet !== '1') ^ ('3' === '1')) {
                    (function (type) {
                        self.LG["IdealMediaLoad" + type + tickerId] = function (json, awd) {
                            self.GX = type.toLowerCase();
                            self.IF = '3';
                            self["MarketGidLoadNews"](json, awd);
                        };
                        self.LG["IdealMediaCReject144902"] = self['MarketGidReject'];
                    })(informerData[i].type);
                }
            }
        };
        self.getSubnetByMirror = function (mirror) {
            var subnet = 0;
            if (typeof self.SLNames[mirror] != 'undefined') {
                subnet = self.SLNames[mirror];
            }
            return subnet;
        }
    };
    this['MarketGidCSubnetsBlock144902'].call(this['MarketGidInfC144902'], this['MarketGidInfC144902']);
    this['MarketGidInfC144902']['funcBlocks']['Subnets'] = 'MarketGidCSubnetsBlock144902';
    MarketGidCInternalExchangeLoggerBlock144902 = function (self) {
        self.QF.push("iExchangeLoggerInit");
        self.iExchangeLoggerInit = function () {
            self.addEvent(self.root, "click", function (event) {
                if (!event) var event = self.LG.event;
                if (!event.target) {
                    event.target = event.srcElement;
                }
                self.BG = true;
                var element = event.target;
                if (element.tagName != 'A') {
                    var element = self.FP(element);
                    if (null == element) {
                        return;
                    }
                }
                if (!element.hasAttribute('data-hash')) {
                    return;
                }
                var hash = element.getAttribute('data-hash');
                if (self.VZ[hash] && self.VZ[hash]['coopType'] == 'i') {
                    var img = document.createElement('IMG');
                    var data = "cid=144902&tid=" + self.VZ[hash]['id'] + "&h=" + hash;
                    if (typeof self.servicerData['isBot'] !== 'undefined') {
                        data += "&bot=" + self.servicerData['isBot'];
                    }
                    if (typeof self.servicerData['tt'] !== 'undefined') {
                        data += "&tt=" + self.servicerData['tt'];
                    }
                    if (typeof self.servicerData['ts'] !== 'undefined') {
                        data += "&ts=" + self.servicerData['ts'];
                    }
                    var scriptSrc = "//c." + (self.IF == 2 ? "adskeeper.co.uk" : "mgid.com") + "/clie?" + data;
                    img.src = scriptSrc;
                    img.onerror = function () {
                        self.mg_ws.onmessage = self.mg_ws_messageHandler;
                        self.sendMessage('c|' + scriptSrc);
                    };
                }
            });
        };
    };
    this['MarketGidCInternalExchangeLoggerBlock144902'].call(this['MarketGidInfC144902'], this['MarketGidInfC144902']);
    this['MarketGidInfC144902']['funcBlocks']['InternalExchangeLogger'] = 'MarketGidCInternalExchangeLoggerBlock144902';
    MarketGidCInternalExchangeBlock144902 = function (self) {
        self.QF.push("QQ");
        function JP(LG) {
            var VN = [];
            var CP = [LG];
            while (CP.length > 0) {
                var el = CP.pop();
                for (var i = 0; i < el.childNodes.length; i++) {
                    var node = el.childNodes[i];
                    if (node.nodeType === Node.COMMENT_NODE) {
                        VN.push(node);
                    } else {
                        CP.push(node);
                    }
                }
            }
            return VN;
        }

        self.QQ = function () {
            if (self.JM.indexOf('int_exchange') == -1) {
                return;
            }
            var comments = JP(self.root);
            for (var i = 0; i < comments.length; i++) {
                var comment = comments[i];
                var mgline = self.CM(comment, '.mgline');
                if (!mgline) {
                    continue;
                }
                if (mgline.className.indexOf('type-w') == -1) {
                    continue;
                }
                var img = self.LG.document.createElement("IMG");
                img.setAttribute('height', 20);
                if (comment.data == 'intExchangeWagesImagePlace') {
                    img.className = 'mcimgad';
                    img.src = "//cdn.mirs.com/images/mgid/int_exchange_wages_ad.svg";
                }
                var link = mgline.querySelector('a');
                var hash = link['data-hash'] || link.getAttribute('data-hash');
                if (hash && self.VZ[hash] && !!self.VZ[hash]['source']) {
                    if (comment.data == 'intExhangeWagesSourcePlace') {
                        img.className = 'mcimgsrc';
                        img.src = "//cdn.mirs.com/images/mgid/int_exchange_wages_src.svg";
                    }
                }
                if (!img.src) {
                    continue;
                }
                comment.parentNode.replaceChild(img, comment);
            }
        }
    };
    this['MarketGidCInternalExchangeBlock144902'].call(this['MarketGidInfC144902'], this['MarketGidInfC144902']);
    this['MarketGidInfC144902']['funcBlocks']['InternalExchange'] = 'MarketGidCInternalExchangeBlock144902';
    this['MarketGidCAntiAdblockBlock144902'] = function (self) {
        self.isAdblock = false;
        self.isServerSide = typeof loadServerSideAds5590549 == 'function';
        self.RR.push('checkAdblock');
        self.RR.push('initServerSide');
        self.QF.push("initAntiAdblock");
        self.initServerSide = function () {
            if (self.isServerSide && self.isAdblock) {
                self.LG._mgq = self.LG._mgq || [];
                loadServerSideAds5590549(self.LG._mgq);
            }
        };
        self.checkAdblock = function () {
            if (typeof self.LG.getComputedStyle == "function") {
                var a = self.LG.document.createElement("A");
                a.href = "http://mgid.com/ghits/";
                self.LG.document.body.appendChild(a);
                var isAdblock = self.LG.getComputedStyle(a).display == 'none';
                self.LG.document.body.removeChild(a);
                self.isAdblock = isAdblock;
            }
        };
        self.initAntiAdblock = function () {
            if (self.isAdblock) {
                var displayType = "block";
                if (self.root.style.display != "") {
                    displayType = self.root.style.display;
                }
                self.root.style.setProperty("visibility", "visible", "important");
                self.root.style.setProperty("display", displayType, "important");
                self.appendVisibleRecursive(self.root);
                self.root.addEventListener("click", function (t) {
                    t.preventDefault();
                    var e = t.target;
                    var n = '';
                    if (e.tagName == 'A') {
                        return window.location = e.href;
                    } else {
                        while ("A" != e.tagName) {
                            e = e.parentNode;
                            if (e == self.root) {
                                return false;
                            }
                        }
                        n = e.href;
                    }
                    return window.location = n;
                });
            }
        };
        self.appendVisibleRecursive = function (node) {
            for (var i = -1, l = node.childNodes.length; ++i < l;) {
                var el = node.childNodes[i];
                var displayType = "block";
                if (typeof el.style != 'object') {
                    continue;
                }
                if (el.style.display == 'none') {
                    continue;
                }
                if (el.tagName == 'STYLE' || el.tagName == 'SCRIPT') {
                    continue;
                }
                if (el.tagName == 'TD') {
                    displayType = "table-cell";
                }
                if (el.tagName == 'TR') {
                    displayType = "table-row";
                }
                if (el.className.length > 0 && el.className.split(' ').indexOf('mgbox') > -1) {
                    displayType = "flex";
                }
                if (el.className.length > 0 && el.className.split(' ').indexOf('mgline') > -1) {
                    displayType = "inline-block";
                }
                if (el.tagName == 'A' && el.parentNode.className.length > 0 && el.parentNode.className.split(' ').indexOf('submit') > -1) {
                    if (parseInt('1') == 1) {
                        displayType = "inline-block";
                    } else {
                        continue;
                    }
                }
                if (el.className.length > 0 && el.className.split(' ').indexOf('fake') > -1) {
                    continue;
                }
                el.style.setProperty("visibility", "visible", "important");
                el.style.setProperty("display", displayType, "important");
                if (el.childNodes.length > 0) {
                    self.appendVisibleRecursive(el);
                }
            }
        };
    };
    this['MarketGidCAntiAdblockBlock144902'].call(this['MarketGidInfC144902'], this['MarketGidInfC144902']);
    this['MarketGidInfC144902']['funcBlocks']['AntiAdblock'] = 'MarketGidCAntiAdblockBlock144902';
    MarketGidCUtilsBlock144902 = function (self) {
        self.utils = {};
        self.utils.getScroll = function () {
            var w = self.utils.getWindow();
            return {
                top: w.document.body.scrollTop || w.document.documentElement.scrollTop || 0,
                left: w.document.body.scrollLeft || w.document.documentElement.scrollLeft || 0
            }
        };
        self.utils.getRect = function (element, withScroll) {
            var rect = element.getBoundingClientRect();
            var toReturn = {
                top: rect.top,
                bottom: rect.bottom,
                left: rect.left,
                right: rect.right,
                height: (rect.height ? rect.height : rect.bottom - rect.top),
                width: (rect.width ? rect.width : rect.right - rect.left)
            };
            if (self.LG.self !== self.LG.top) {
                var frame = self.utils.getFrame();
                if (frame) {
                    var iframeRect = frame.getBoundingClientRect();
                    toReturn.top += iframeRect.top;
                    toReturn.bottom += iframeRect.top;
                    toReturn.left += iframeRect.left;
                    toReturn.right += iframeRect.left;
                }
            }
            if (withScroll) {
                var scroll = self.utils.getScroll();
                toReturn.top += scroll.top;
                toReturn.bottom += scroll.top;
                toReturn.left += scroll.left;
                toReturn.right += scroll.left;
            }
            return toReturn;
        };
        self.utils.getViewportSize = function () {
            var w = self.utils.getWindow();
            return {
                width: (w.innerWidth || w.document.documentElement.clientWidth),
                height: (w.innerHeight || w.document.documentElement.clientHeight)
            };
        };
        var currentWindow = undefined;
        self.utils.getWindow = function () {
            if (currentWindow === undefined) {
                var w = self.LG;
                if (self.LG.parent != self.LG.self) {
                    try {
                        if (self.LG.top.document != undefined) {
                            w = self.LG.top;
                        }
                    } catch (err) {
                    }
                }
                currentWindow = w;
            }
            return currentWindow;
        };
        var topFrame = undefined;
        self.utils.getFrame = function () {
            if (topFrame === undefined) {
                try {
                    for (var w = self.LG, frame = w.frameElement; w.frameElement; w = w.parent) {
                        frame = w.frameElement;
                    }
                    topFrame = frame;
                } catch (err) {
                    topFrame = null;
                }
            }
            return topFrame;
        }
    };
    this['MarketGidCUtilsBlock144902'].call(this['MarketGidInfC144902'], this['MarketGidInfC144902']);
    this['MarketGidInfC144902']['funcBlocks']['Utils'] = 'MarketGidCUtilsBlock144902';
    MarketGidCRtbBlock144902 = function (self) {
        this.QF.push("cmPixelLoad");
        this.cmPixelLoad = function () {
            var script = MarketGidInfC144902.LG.document.createElement('script');
            script.charset = 'utf-8';
            var scriptSrc = '//cm.mgid.com/i.js';
            script.src = scriptSrc;
            script.type = 'text/javascript';
            script.async = true;
            script.onerror = function () {
                self.mg_ws.onmessage = self.mg_ws_messageHandler;
                self.sendMessage('js|' + script.src);
            };
            var currentRoot = MarketGidInfC144902.realRoot != undefined ? MarketGidInfC144902.realRoot : MarketGidInfC144902.root;
            currentRoot.parentNode.appendChild(script);
        };
    };
    this['MarketGidCRtbBlock144902'].call(this['MarketGidInfC144902'], this['MarketGidInfC144902']);
    this['MarketGidInfC144902']['funcBlocks']['Rtb'] = 'MarketGidCRtbBlock144902';
    MarketGidCMgqBlock144902 = function (self) {
        this.isLongCheck = false;
        this.RR.push("mgqInit");
        this.mgqWorker = function () {
            var length = self.LG._mgq.length;
            var pool = self.LG._mgq.slice(0);
            for (var i = 0; i < length; i++) {
                var el = pool[i];
                if (typeof(self.LG[el[0]]) == 'function') {
                    self.LG[el[0]].apply(self.LG, el.slice(1));
                    self.LG._mgq.splice(i, 1);
                }
            }
            if (!self.LG._mgqi) {
                self.LG._mgqi = self.LG.setInterval(function () { self.mgqWorker(); }, 5);
            }
            if (!self.isLongCheck) {
                if ((new Date()).getTime() - self.LG._mgqt > 10000) {
                    self.isLongCheck = true;
                    self.LG.clearInterval(self.LG._mgqi);
                    self.LG._mgqi = self.LG.setInterval(function () { self.mgqWorker(); }, 100);
                }
            }
        };
        this.mgqInit = function () {
            self.LG._mgq = self.LG._mgq || [];
            if (typeof(self.LG._mgqp) == 'undefined') {
                self.LG._mgqp = self.mgqWorker;
                self.LG._mgqt = (new Date()).getTime();
                self.mgqWorker();
            }
        };
    };
    this['MarketGidCMgqBlock144902'].call(this['MarketGidInfC144902'], this['MarketGidInfC144902']);
    this['MarketGidInfC144902']['funcBlocks']['Mgq'] = 'MarketGidCMgqBlock144902';
    this['MarketGidCAntifraudBlock144902'] = function (self) {
        self.QF.push('TQ');
        self.RR.push('TL');
        self.FM = null;
        self.GY = null;
        self.BG = false;
        self.KB = '';
        self.UD = '';
        self.SV = '';
        self.NJ = '';
        self.ER = '';
        self.ST = '';
        self.YT = '';
        self.EH = '';
        self.AM = '';
        self.TL = function () {
            if (self.JK['svspr'] == undefined) {
                self.SV = self.AT(self.LG.document.referrer, 500);
                self.JK['svspr'] = self.SV;
                self.setCookie();
            } else {
                self.SV = self.JK['svspr'];
            }
            if (self.JK['svsds'] != undefined) {
                self.NJ = self.JK['svsds'];
                self.NJ++;
            } else {
                self.NJ = 1;
            }
            self.JK['svsds'] = self.NJ;
            self.setCookie();
            var d = new Date();
            self.KB = d.getTime() + '144902' + Math.floor(Math.random() * 100) + '' + (2 * Math.floor(Math.random() * 4));
            self.KB += 1;
            self.EH = d.getTime();
            if (self.JK['TejndEEDj'] == undefined) {
                self.JK['TejndEEDj'] = self.x64String(self.KB);
                self.setCookie();
            }
        };
        self.x64String = function (s) {
            s = s.toString();
            s = unescape(encodeURIComponent(s));
            var b64c = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x24\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x2a\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            var b64e = '';
            var c1, c2, c3, c4, e1, e2, e3, e4;
            for (var i = 0; i < s.length;) {
                c1 = s.charCodeAt(i++);
                c2 = 2 << 5;
                e1 = c1 >> (c2 / 32);
                c3 = s.charCodeAt(i++);
                e2 = ((c1 & 3) << (c2 / 16)) | (c3 >> (c2 / 16));
                c4 = s.charCodeAt(i++);
                e3 = isNaN(c3) ? c2 : (((c3 & 15) << (c2 / 32)) | (c4 >> (c2 - 58)));
                e4 = isNaN(c4) ? c2 : (c4 & (c2 - 1));
                b64e += b64c.charAt(e1) + b64c.charAt(e2) + b64c.charAt(e3) + b64c.charAt(e4);
            }
            return b64e;
        };
        self.JO = function (n) { return n ? Math.round(n).toString(16) : ''; };
        self.AT = function (str, n) { return str.length > n ? str.substring(0, n) : str; };
        self.getCoordsElementOfPage = function (element) {
            var offsetLeft = 0, offsetTop = 0;
            do {
                offsetLeft += element.offsetLeft;
                offsetTop += element.offsetTop;
            } while (element = element.offsetParent);
            return {'x': offsetLeft, 'y': offsetTop};
        };
        self.getCoordsClickOfPage = function (event) {
            var x = 0, y = 0;
            if (!event) event = self.LG.event;
            if (event.pageX || event.pageY) {
                x = event.pageX;
                y = event.pageY;
            } else if (event.clientX || event.clientY) {
                x = event.clientX + (self.LG.document.documentElement.scrollLeft || self.LG.document.body.scrollLeft) - self.LG.document.documentElement.clientLeft;
                y = event.clientY + (self.LG.document.documentElement.scrollTop || self.LG.document.body.scrollTop) - self.LG.document.documentElement.clientTop;
            }
            return {'x': x, 'y': y};
        };
        self.ZV = function () {
            var FI = 0;
            if (self.LG.opera) {
                FI += 1;
            }
            if (self.LG.opera && self.LG.opera.buildNumber) {
                FI += 2;
            }
            if (self.LG.document.all || self.LG.MSStream) {
                FI += 4;
            }
            if (!self.LG.btoa || self.LG.navigator.msPointerEnabled) {
                FI += 8;
            }
            if (self.LG.chrome) {
                FI += 16;
            }
            if (self.LG.mozInnerScreenX != undefined) {
                FI += 32;
            }
            if (!self.LG.external) {
                FI += 64;
            }
            return FI;
        };
        self.FA = function () { return self.LG.navigator.javaEnabled() };
        self.CK = function () {
            var flashEnabled = false;
            if (typeof(self.LG.navigator.plugins) != 'undefined' && typeof(self.LG.navigator.plugins["Shockwave Flash"]) == 'object') {
                flashEnabled = true;
            } else if (typeof self.LG.ActiveXObject != 'undefined') {
                try {
                    if (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) {
                        flashEnabled = true;
                    }
                } catch (e) {
                }
            }
            return flashEnabled;
        };
        self.SZ = function (el) {
            while (el.firstChild && el.firstChild.nodeType == 1) {
                el = el.firstChild;
            }
            while (el.parentNode) {
                if (self.LG.getComputedStyle(el).getPropertyValue('opacity') <= 0.2) {
                    return true
                }
                if (el == self.LG.document.body) {
                    break;
                }
                el = el.parentNode;
            }
            return false;
        };
        self.QC = function (event, element) {
            if (false == self.BG) {
                return;
            }
            var element = element || self.LG.document.createElement('A');
            var event = event || self.LG.document.createEvent('MouseEvent');
            var date = new Date();
            var coordClickOfPage = self.getCoordsClickOfPage(event);
            var b = element.getBoundingClientRect();
            var PO = self.getCoordsElementOfPage(element);
            var d = self.LG.document;
            var FI = self.ZV();
            var tsp = self.SZ(element);
            var FH = '';
            for (var i = 1; i <= Math.ceil((FI + 1) / 68) * 34; i++) {
                if ((i % 26 == 0) || ((i % 26 == 6) && (((i % 26) + 5) % 11 == 0))) {
                    continue;
                }
                FH += (i == 1 ? '' : String.fromCharCode(102)) + String.fromCharCode(96 + (i % 26)) + String.fromCharCode(83);
                var PX = '';
                if (i > 34) {
                    break;
                }
                switch (i) {
                    case 1:
                        PX = self.KB;
                        break;
                    case 2:
                        PX = self.JO(b.bottom);
                        break;
                    case 3:
                        PX = self.JO(self.EH);
                        break;
                    case 4:
                        PX = self.JO(date.getTime());
                        break;
                    case 5:
                        PX = self.JO(d.body.clientheight);
                        break;
                    case 7:
                        PX = self.JO(event.clientX);
                        break;
                    case 8:
                        PX = self.JO(event.clientY);
                        break;
                    case 9:
                        PX = self.JO(b.left);
                        break;
                    case 10:
                        PX = self.JO(self.GY);
                        break;
                    case 11:
                        PX = self.JO(b.top);
                        break;
                    case 12:
                        PX = self.JO(d.body.clientheight - event.clientY);
                        break;
                    case 13:
                        PX = self.JO(b.right - b.left);
                        break;
                    case 14:
                        PX = self.JO(b.bottom - b.top);
                        break;
                    case 15:
                        PX = self.YT;
                        break;
                    case 16:
                        PX = self.JO(event.clientY);
                        break;
                    case 17:
                        PX = self.JO(FI);
                        break;
                    case 18:
                        PX = self.JO(element['\x64\x61\x74\x61\x2d\x72\x65\x6C']);
                        break;
                    case 19:
                        PX = self.AT(d.location.href, 500);
                        break;
                    case 20:
                        PX = self.AT(d.referrer, 500);
                        break;
                    case 21:
                        PX = self.SV;
                        break;
                    case 22:
                        PX = self.JO(self.NJ);
                        break;
                    case 23:
                        PX = self.JO(coordClickOfPage.x);
                        break;
                    case 24:
                        PX = self.JO(coordClickOfPage.y);
                        break;
                    case 25:
                        PX = self.JO(PO.x);
                        break;
                    case 27:
                        PX = self.JO(PO.y);
                        break;
                    case 28:
                        PX = self.JO(self.FA());
                        break;
                    case 29:
                        PX = self.JO(self.CK());
                        break;
                    case 30:
                        PX = self.JO(self.LG.screen.width);
                        break;
                    case 31:
                        PX = self.JO(self.LG.screen.height);
                        break;
                    case 33:
                        PX = self.JO(self.AM);
                        break;
                    case 34:
                        PX = self.JO(tsp);
                        break;
                }
                FH += self.x64String(PX);
            }
            return encodeURIComponent(FH);
        };
        self.BH = function (event, element) {
            if (!event) var event = self.LG.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            var hash = element['data-hash'] || element.getAttribute('data-hash');
            if (typeof(hash) == 'undefined' || element.tagName != 'A') {
                return;
            }
            element[self.hrefAttr] = self.LI(hash, event, element);
        };
        self.WG = function (event) {
            if (!event) var event = self.LG.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            self.BG = true;
            var element = event.target;
            if (element.tagName != 'A') {
                var element = self.FP(element);
                if (null == element) {
                    return;
                }
            }
            if (!element.hasAttribute('data-hash')) {
                return;
            }
            self.BH(event, element);
            self.LG.setTimeout(function () {
                self.BG = false;
                self.BH(event, element);
            }, 100);
        };
        self.FN = function (event) {
            if (!event) var event = self.LG.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            self.BG = true;
            var element = event.target;
            if (element.tagName != 'A') {
                var element = self.FP(element);
                if (null == element) {
                    return;
                }
            }
            if (!element.hasAttribute('data-hash')) {
                return;
            }
            var v = 0;
            if (parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C'])) {
                v = parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C']);
            }
            if (v % 2 != 1) {
                element['\x64\x61\x74\x61\x2d\x72\x65\x6C'] = v + 1;
            }
            self.BH(event, element);
        };
        self.AY = function (event) {
            if (!event) var event = self.LG.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            self.GY = 0;
            self.LG.clearInterval(self.FM);
            self.FM = self.LG.setInterval(function () { self.GY++; }, 1000);
        };
        self.LQ = function (event) {
            if (!event) var event = self.LG.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            self.BG = true;
            var element = event.target;
            if (element.tagName != 'A') {
                var element = self.FP(element);
                if (null == element) {
                    return;
                }
            }
            if (!element.hasAttribute('data-hash')) {
                return;
            }
            var v = 0;
            if (parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C'])) {
                v = parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C']);
            }
            if ((v >> 1) % 2 != 1) {
                element['\x64\x61\x74\x61\x2d\x72\x65\x6C'] = v + 2;
            }
            self.BH(event, element);
        };
        self.XS = function () {
            if (!self.AM) {
                self.AM = (new Date()).getTime();
            }
        };
        self.TQ = function (element) {
            if (typeof element == 'undefined') {
                element = self.root;
            }
            self.addEvent(element, "mouseup", self.WG);
            self.addEvent(element, "mouseover", self.FN);
            self.addEvent(element, "mousemove", self.LQ);
            self.addEvent(self.LG.document, "scroll", self.AY);
            var regex = /\/\/img.*\/[\d]+\/([\d]+).*\.(jpg|gif)/;
            var images = self.root.getElementsByTagName('IMG');
            for (var i = 0; i < images.length; i++) {
                if (regex.exec(images[i].src)) {
                    self.addEvent(images[i], "load", self.XS);
                }
            }
        };
    };
    this['MarketGidCAntifraudBlock144902'].call(this['MarketGidInfC144902'], this['MarketGidInfC144902']);
    this['MarketGidInfC144902']['funcBlocks']['Antifraud'] = 'MarketGidCAntifraudBlock144902';
    MarketGidCResponsiveBlock144902 = function (self) {
        self.QF.push("responsiveInit");
        self.responsiveInit = function () {
            self.ElementQueries.init();
            self.fixGetElementsByClassNameHandler(self.root);
            if (!self.fakeMode) {
                self.fixPrices();
                setTimeout(function () { self.fixFlexbox(); }, 100);
            }
        };
        self.fixElementPrice = function (element) {
            self.fixGetElementsByClassNameHandler(element);
            var priceArray = element.getElementsByClassName("mcpriceouter");
            for (var i = 0; i < priceArray.length; i++) {
                var parent = priceArray[i].parentNode;
                self.fixGetElementsByClassNameHandler(parent);
                var oldPriceArray = parent.getElementsByClassName("mcpriceold");
                if (priceArray[i].getBoundingClientRect()['bottom'] >= parent.getBoundingClientRect()['bottom']) {
                    for (var j = 0; j < oldPriceArray.length; j++) {
                        oldPriceArray[j].style.display = 'none';
                    }
                } else {
                    for (var j = 0; j < oldPriceArray.length; j++) {
                        oldPriceArray[j].style.display = 'inline-block';
                        if (priceArray[i].getBoundingClientRect()['bottom'] >= parent.getBoundingClientRect()['bottom']) {
                            oldPriceArray[j].style.display = 'none';
                        }
                    }
                }
            }
        };
        self.fixPrices = function () {
            var elements = self.root.getElementsByClassName("mgline");
            for (var i = 0; i < elements.length; i++) {
                (function (element) {
                    self.fixElementPrice(element);
                    element.resizeSensor = new self.ResizeSensor(element, function () { self.fixElementPrice(element); });
                })(elements[i]);
            }
        };
        self.fixFlexbox = function () {
            var s = self.LG.document.body || self.LG.document.documentElement, s = s.style;
            if (s.webkitFlexWrap == '' || s.msFlexWrap == '' || s.flexWrap == '') return true;
            var elements = self.root.getElementsByClassName("mgline");
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.height = "auto";
            }
            setTimeout(function () {
                var maxH = 0;
                for (var i = 0; i < elements.length; i++) {
                    var rect = elements[i].getBoundingClientRect();
                    var elH = rect.bottom - rect.top;
                    if (elH > maxH) {
                        maxH = elH;
                    }
                }
                if (elH != 0) {
                    for (var i = 0; i < elements.length; i++) {
                        elements[i].style.height = maxH + "px";
                    }
                }
                self.fixImages();
            }, 0);
        };
        self.fixImages = function () {
            setTimeout(function () {
                var needToRefresh = false;
                var els = self.root.getElementsByClassName("mcimg");
                for (var i = 0; i < els.length; i++) {
                    if (els[i].tagName == "DIV") {
                        var rect = els[i].getBoundingClientRect();
                        if (rect.bottom - rect.top <= 25) {
                            needToRefresh = true;
                            els[i].style.display = "none";
                            (function (el) { setTimeout(function () { el.style.display = "block"; }, 0); })(els[i]);
                        }
                    }
                }
                if (needToRefresh) {
                    self.fixFlexbox();
                }
            }, 200);
        };
        function generateHash(str) {
            var hash = 0, i, chr, len;
            if (str.length == 0) {
                return hash;
            }
            for (i = 0, len = str.length; i < len; i++) {
                chr = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + chr;
                hash |= 0;
            }
            return hash;
        }

        /*! Copyright (c) 2013 Marc J. Schmidt Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. */
        self.ElementQueries = function () {
            function SetupInformation(element) {
                this.element = element;
                this.options = {};
                var key, option, width = 0, height = 0, value, actualValue, attrValues, attrValue, attrName;
                this.addOption = function (option) {
                    var idx = [option.mode, option.property, option.value].join(',');
                    this.options[idx] = option;
                };
                var attributes = ['min-width', 'min-height', 'max-width', 'max-height'];
                this.call = function () {
                    width = this.element.offsetWidth;
                    height = this.element.offsetHeight;
                    attrValues = {};
                    for (key in this.options) {
                        if (!this.options.hasOwnProperty(key)) {
                            continue;
                        }
                        option = this.options[key];
                        value = parseFloat(option.value);
                        actualValue = option.property == 'width' ? width : height;
                        attrName = option.mode + '-' + option.property;
                        attrValue = '';
                        if (option.mode == 'min' && actualValue >= value) {
                            attrValue += option.value;
                        }
                        if (option.mode == 'max' && actualValue <= value) {
                            attrValue += option.value;
                        }
                        if (!attrValues[attrName]) attrValues[attrName] = '';
                        if (attrValue && -1 === (' ' + attrValues[attrName] + ' ').indexOf(' ' + attrValue + ' ')) {
                            attrValues[attrName] += ' ' + attrValue;
                        }
                    }
                    for (var k in attributes) {
                        if (attrValues[attributes[k]]) {
                            this.element.setAttribute(attributes[k], attrValues[attributes[k]].substr(1));
                        } else {
                            this.element.removeAttribute(attributes[k]);
                        }
                    }
                };
            }

            function setupElement(element, options, queryHash) {
                if (element.elementQueriesSetupInformation) {
                    element.elementQueriesSetupInformation.addOption(options);
                } else {
                    element.elementQueriesSetupInformation = new SetupInformation(element);
                    element.elementQueriesSetupInformation.addOption(options);
                    element.elementQueriesSensor = new self.ResizeSensor(element, function () { element.elementQueriesSetupInformation.call(); }, queryHash);
                }
                element.elementQueriesSetupInformation.call();
            }

            function queueQuery(selector, mode, property, value) {
                var query;
                var queryHash = generateHash(selector + mode + property + value);
                if (self.root.querySelectorAll && self.root.querySelectorAll.bind) query = self.root.querySelectorAll.bind(self.root);
                if (!query) {
                    return;
                }
                var elements = query(selector);
                for (var i = 0, j = elements.length; i < j; i++) {
                    setupElement(elements[i], {mode: mode, property: property, value: value}, queryHash);
                }
            }

            var regex = /,?([^,\n]*)\[[\s\t]*(min|max)-(width|height)[\s\t]*[~$\^]?=[\s\t]*"([^"]*)"[\s\t]*]([^\n\s\{]*)/mgi;

            function extractQuery(css) {
                var match;
                css = css.replace(/'/g, '"').replace(/(\[.*?\])([A-z\.-]*)/g, "$2$1");
                while (null !== (match = regex.exec(css))) {
                    if (5 < match.length) {
                        queueQuery(match[1] || match[5], match[2], match[3], match[4]);
                    }
                }
            }

            function readRules(rules) {
                var selector = '';
                if (!rules) {
                    return;
                }
                if ('string' === typeof rules) {
                    rules = rules.toLowerCase();
                    if (-1 !== rules.indexOf('min-width') || -1 !== rules.indexOf('max-width')) {
                        extractQuery(rules);
                    }
                } else {
                    for (var i = 0, j = rules.length; i < j; i++) {
                        if (1 === rules[i].type) {
                            selector = rules[i].selectorText || rules[i].cssText;
                            if (-1 !== selector.indexOf('min-height') || -1 !== selector.indexOf('max-height')) {
                                extractQuery(selector);
                            } else if (-1 !== selector.indexOf('min-width') || -1 !== selector.indexOf('max-width')) {
                                extractQuery(selector);
                            }
                        } else if (4 === rules[i].type) {
                            readRules(rules[i].cssRules || rules[i].rules);
                        }
                    }
                }
            }

            this.init = function () {
                var sSheets = self.LG.document.styleSheets;
                for (var i = 0, j = sSheets.length; i < j; i++) {
                    try {
                        if (sSheets[i].ownerNode && sSheets[i].ownerNode.className == 'MarketGidC144902') {
                            readRules(sSheets[i].cssRules || sSheets[i].cssText || sSheets[i].rules);
                        }
                    } catch (err) {
                        continue;
                    }
                }
            };
            this.update = function () { this.init(); };
        };
        self.ElementQueries.update = function () { self.ElementQueries.instance.update(); };
        self.ElementQueries.init = function () {
            if (!self.ElementQueries.instance) {
                self.ElementQueries.instance = new self.ElementQueries();
            }
            self.ElementQueries.instance.init();
        };
        self.initElementQueries = function () { self.addEvent(self.LG, "load", function () { self.ElementQueries.init(); }); };
        self.ResizeSensor = function (element, callback, queryHash) {
            function EventQueue() {
                this.q = [];
                this.add = function (ev) { this.q.push(ev); };
                var i, j;
                this.call = function () {
                    for (i = 0, j = this.q.length; i < j; i++) {
                        this.q[i].call();
                    }
                };
            }

            function getComputedStyle(element, prop) {
                if (element.currentStyle) {
                    return element.currentStyle[prop];
                } else if (self.LG.getComputedStyle) {
                    return self.LG.getComputedStyle(element, null).getPropertyValue(prop);
                } else {
                    return element.style[prop];
                }
            }

            function attachResizeEvent(element, resized, queryHash) {
                if (!element.resizedAttached) {
                    element.resizedAttached = new EventQueue();
                    element.resizedAttached.add(resized);
                } else if (element.resizedAttached) {
                    element.resizedAttached.add(resized);
                    return;
                }
                if (!self.LG.document.querySelector) return;
                var resizeSensorElement = self.LG.document.querySelector('.resize-sensor.hash_' + queryHash);
                if (null == resizeSensorElement || !queryHash) {
                    element.resizeSensor = self.LG.document.createElement('div');
                    if (queryHash) {
                        element.resizeSensor.className = 'resize-sensor hash_' + queryHash;
                    } else {
                        element.resizeSensor.className = 'resize-sensor';
                    }
                    var style = 'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;';
                    var styleChild = 'position: absolute; left: 0; top: 0;';
                    element.resizeSensor.style.cssText = style;
                    element.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + style + '">' + '<div style="' + styleChild + '"></div>' + '</div>' + '<div class="resize-sensor-shrink" style="' + style + '">' + '<div style="' + styleChild + ' width: 200%; height: 200%"></div>' + '</div>';
                    element.appendChild(element.resizeSensor);
                    var resizeSensorElement = element.resizeSensor
                }
                if (!{fixed: 1, absolute: 1}[getComputedStyle(element, 'position')]) {
                    element.style.position = 'relative';
                }
                var expand = resizeSensorElement.childNodes[0];
                var expandChild = expand.childNodes[0];
                var shrink = resizeSensorElement.childNodes[1];
                var lastWidth, lastHeight;
                var reset = function () {
                    expandChild.style.width = expand.offsetWidth + 10 + 'px';
                    expandChild.style.height = expand.offsetHeight + 10 + 'px';
                    expand.scrollLeft = expand.scrollWidth;
                    expand.scrollTop = expand.scrollHeight;
                    shrink.scrollLeft = shrink.scrollWidth;
                    shrink.scrollTop = shrink.scrollHeight;
                    lastWidth = element.offsetWidth;
                    lastHeight = element.offsetHeight;
                };
                reset();
                var changed = function () {
                    if (element.resizedAttached) {
                        element.resizedAttached.call();
                    }
                };
                self.addEvent(expand, 'scroll', function () {
                    if (element.offsetWidth > lastWidth || element.offsetHeight > lastHeight) {
                        changed();
                    }
                    reset();
                });
                self.addEvent(shrink, 'scroll', function () {
                    if (element.offsetWidth < lastWidth || element.offsetHeight < lastHeight) {
                        changed();
                    }
                    reset();
                });
            }

            if ("[object Array]" === Object.prototype.toString.call(element) || ('undefined' !== typeof jQuery && element instanceof jQuery) || ('undefined' !== typeof Elements && element instanceof Elements)) {
                var i = 0, j = element.length;
                for (; i < j; i++) {
                    attachResizeEvent(element[i], callback, queryHash);
                }
            } else {
                attachResizeEvent(element, callback, queryHash);
            }
        };
    };
    this['MarketGidCResponsiveBlock144902'].call(this['MarketGidInfC144902'], this['MarketGidInfC144902']);
    this['MarketGidInfC144902']['funcBlocks']['Responsive'] = 'MarketGidCResponsiveBlock144902';
    MarketGidCCountersBlock144902 = function (self) {
        this.RR.push("LJ");
        this.LJ = function () { };
        this.QF.push("compositeComscoreCountersLoad");
        this.compositeComscoreCountersLoad = function () {
            if (!this.comscoreCompositeCounter) {
                this.comscoreCompositeCounter = true;
                this.LG._comscore = this.LG._comscore || [];
                var mirrorStr = ((this.GX == 'news') ? ('0' + '0') : ('1' + '10'));
                this.LG._comscore.push({c1: "7", c2: "15208452", c3: mirrorStr, c4: this.blockId});
                (function () {
                    var s = MarketGidInfC144902.LG.document.createElement("script"), el = MarketGidInfC144902.LG.document.getElementsByTagName("script")[0];
                    s.async = true;
                    var scriptSrc = (MarketGidInfC144902.LG.document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
                    s.src = scriptSrc;
                    el.parentNode.insertBefore(s, el);
                })();
            }
        };
    };
    this['MarketGidCCountersBlock144902'].call(this['MarketGidInfC144902'], this['MarketGidInfC144902']);
    this['MarketGidInfC144902']['funcBlocks']['Counters'] = 'MarketGidCCountersBlock144902';
    this['MarketGidCAdvertLinkBlock144902'] = function (self) {
        self.GM.push("refreshAdvertLink");
        self.QF.push("initAdvertPopup");
        self.refreshAdvertLink = function () {
            if (parseInt('1')) {
                try {
                    var adLinkBlock = self.SLsAdLinkBlocks[self.IF].replace(/%id/g, '144902');
                    var widgetTitle = "Promoted Content" || "";
                    adLinkBlock = adLinkBlock.replace("%WIDGET_TITLE%", widgetTitle);
                    var utm = '';
                    if (utm == '') {
                        utm = self.SLsUtm[self.IF];
                    }
                    self.UG = adLinkBlock.replace(/%utm/, utm);
                } catch (e) {
                }
            } else {
                self.UG = '';
            }
        };
        self.parseAdvertLink = function (template) {
            var marker = '<!--advertPrefix-->';
            var isMarkerInTheSecondPart = template.indexOf(marker) > (template.length / 2);
            if (isMarkerInTheSecondPart) {
                self.fixGetElementsByClassNameHandler(self.root);
                var elements = self.root.getElementsByClassName('mg_addad144902');
                for (var i = 0; i < elements.length; i++) {
                    elements[i].parentNode.removeChild(elements[i]);
                }
            }
            if (isMarkerInTheSecondPart || self.ED == 0) {
                if (template.indexOf(marker) >= 0) {
                    template = template.replace(marker, this.UG);
                } else {
                    template = self.UG + template;
                }
            }
            return template;
        };
        self.initAdvertPopup = function () {
            if (self.LG.top != self.LG.self) {
                return;
            }
            if ('under-article-widget' == 'banner') {
                return;
            }
            if ('under-article-widget' == 'exit-pop-up' || parseInt('0') > 0) {
                return;
            }
            if (['tablet', 'desktop'].indexOf(self.deviceType) == -1) {
                return;
            }
            if (typeof self.LG._mgDisableAdvertPopup != 'undefined') {
                return;
            }
            if (typeof MarketGidCConstructorBlock144902 == 'function') {
                return;
            }
            var adEl = self.root.querySelector('.mg_addad144902');
            if (adEl) {
                adEl.addEventListener("click", self.showAdvertPopup);
            }
        };
        self.showAdvertPopup = function (event) {
            var srcEl = self.CM(event.target, '[data-advert-url]');
            if (!srcEl) {
                return null;
            }
            event.preventDefault();
            var root = (self.realRoot != undefined ? self.realRoot : self.root).parentNode;
            var container = root.querySelector('._mgAdvertPopupC144902');
            var innerEl = root.querySelector('._mgPopupInner');
            var scrollTo = function (element, to, duration) {
                if (duration <= 0) return;
                var difference = to - element.scrollTop;
                var perTick = difference / duration * 10;
                setTimeout(function () {
                    element.scrollTop = element.scrollTop + perTick;
                    if (element.scrollTop === to) return;
                    scrollTo(element, to, duration - 10);
                }, 10);
            };
            if (!container) {
                var template = '<style> ._mgAdvertPopupC144902 { position: fixed; width: 100%; height: 100%; top: 0px; left: 0px; font-family: "PTSans", Arial, sans-serif; font-size: 16px; color: #696969; line-height: 1.3; z-index: 999; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; } ._mgAdvertPopupC144902 iframe { width: 100%; height: 377px; } ._mgAdvertPopupC144902 ._mgPopupShadow { position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-color: #000; opacity: 0.4; -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)"; z-index: 1; } ._mgAdvertPopupC144902 ._mgPopupInner { position: relative; top: 50%; margin-left: -375px; left: 50%; padding: 36px; width: 750px; background-color: #f8f8f8; z-index: 2; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; } ._mgAdvertPopupC144902 ._mgPopupInner.fixPop { position: absolute!important; top: 30px!important; margin-top: 0!important; } ._mgAdvertPopupC144902 ._mgClosePopup { position: absolute; overflow: hidden; top: 5px; right: 5px; height: 21px; width: 21px; text-indent: -9999px; background: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALAgMAAADUwp+1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVmZmZmZmb///+E1CFqAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAlSURBVAjXY3BgYGEQAEIWBgcGRkYGBgYXIBaA0CA+SBwkD1QHACp2Ae2BHO8IAAAAAElFTkSuQmCC\') no-repeat center center; background-color: transparent; } ._mgAdvertPopupC144902 ._mgClosePopup:hover { background-color: #dfdfdf; }</style><div class="_mgAdvertPopupC144902"> <div class="_mgPopupShadow"></div> <div class="_mgPopupInner"> <a href="#" class="_mgClosePopup" title="Close"></a> <iframe frameborder="0"></iframe> </div></div>';
                var elements = self.htmlToElements(template);
                for (var i = 0; i < elements.length; i++) {
                    root.appendChild(elements[i]);
                }
                container = root.querySelector('._mgAdvertPopupC144902');
                if (!container) {
                    return false;
                }
                innerEl = container.querySelector('._mgPopupInner');
                var shadowEl = container.querySelector('._mgPopupShadow');
                innerEl.style.marginTop = -(innerEl.clientHeight / 2) + 'px';
                shadowEl.addEventListener('click', function (event) {
                    if (null == self.CM(event.target, '._mgPopupInner')) {
                        container.setAttribute('style', 'display: none');
                    }
                });
                var closeButton = container.querySelector('._mgClosePopup');
                if (closeButton) {
                    closeButton.addEventListener('click', function (event) { container.setAttribute('style', 'display: none'); })
                }
                var iframe = container.querySelector('iframe');
                iframe.setAttribute('src', srcEl.getAttribute('data-advert-url'));
                var eventMethod = self.LG.addEventListener ? "addEventListener" : "attachEvent";
                var eventer = self.LG[eventMethod];
                var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
                eventer(messageEvent, function (e) {
                    var key = e.message ? "message" : "data";
                    var data = JSON.parse(e[key]);
                    if (typeof data.target == 'undefined' || data.target != 'correct-popup-height') {
                        return true;
                    }
                    iframe.style.height = data.height + 'px';
                    if (data.safariIPad) {
                        if (data.keyboard) {
                            scrollTo(self.LG.document.body, 0, 500);
                            innerEl.classList.add('fixPop');
                        } else {
                            innerEl.classList.remove('fixPop');
                        }
                    }
                    innerEl.style.marginTop = -(innerEl.clientHeight / 2) + 'px';
                }, false);
            }
            container.setAttribute('style', 'display: block');
            if (innerEl.className.indexOf('fixPop') >= 0) {
                scrollTo(self.LG.document.body, 0, 500);
            }
        };
    };
    this['MarketGidCAdvertLinkBlock144902'].call(this['MarketGidInfC144902'], this['MarketGidInfC144902']);
    this['MarketGidInfC144902']['funcBlocks']['AdvertLink'] = 'MarketGidCAdvertLinkBlock144902';
    this['MarketGidCRejectBlock144902'] = function (self) {
        self.isInsertedRejectStyles = false;
        self['MarketGidReject'] = function () {
            var baseUrl = self.subnetDashboardDomains[self.getSubnetByMirror('marketgid')];
            self.fixGetElementsByClassNameHandler(self.root);
            var mglines = self.root.getElementsByClassName('mgline');
            for (var i = 0; i < mglines.length; i++) {
                (function (mgline) {
                    if (mgline.className.indexOf('dsp') >= 0) {
                        return;
                    }
                    self.fixGetElementsByClassNameHandler(mgline);
                    var imgList = mgline.getElementsByClassName('mcimg');
                    var img = false;
                    for (var j = 0; j < imgList.length; j++) {
                        if (imgList[j].tagName == "DIV") {
                            img = imgList[j];
                            break;
                        }
                    }
                    if (!img) {
                        return;
                    }
                    self.fixGetElementsByClassNameHandler(img);
                    var el = img.getElementsByClassName('close-informer');
                    var matchId = mgline.className.match(/teaser-([0-9]+)/);
                    if (null == matchId) {
                        return;
                    }
                    var matchType = mgline.className.match(/type-(w|e|i)/);
                    if (null == matchType || matchType[1] == 'i') {
                        return;
                    }
                    if (el.length == 0) {
                        var url = baseUrl;
                        url += '/publisher/blocked';
                        var a = self.LG.document.createElement('a');
                        var imgStyles = self.LG.getComputedStyle(img);
                        a.className = "close-informer";
                        a.href = url + '/teaser/' + matchId[1] + '/widget/' + (matchType[1] == 'w' ? '5590549/type/goods' : '/type/news');
                        a.target = '_blank';
                        a.rel = "nofollow";
                        a.style.top = (parseInt(imgStyles.borderTopWidth) + 3) + 'px';
                        a.style.right = (parseInt(imgStyles.borderRightWidth) + 3) + 'px';
                        img.style.position = "relative";
                        img.appendChild(a);
                    }
                })(mglines[i]);
            }
        };
        self.initRejectStyles = function () {
            if (self.isInsertedRejectStyles) {
                return;
            }
            var rejectStyles = '\ div.mcimg a.close-informer {\ width: 14px;\ height: 14px;\ background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NzI0ODBDMzY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NzI0ODBDNDY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk3MjQ4MEMxNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk3MjQ4MEMyNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uNcpEQAAAHxJREFUeNqckgEKwCAIRe3fYjfKc2zX6hydaLRbbDnGkLDIPggl/5lKIcbIRJRqbDSnUmOHE6LPm+CEfhj6lnN+o5WVh1VOm6xColCXc/cgLWYev9gaejnQojCab5RDzyDt6RantqoBaz5zq54ZywJ3CXjIwQGd8skfAQYALdQqftYulocAAAAASUVORK5CYIJ0ZW50Ij4NCiA8ZGl2IGNsYXNzPSJjb250ZW50LWNvbnRhaW5lciI+PGZpZWxkc2V0Pg0KICA8aDI+NTAyIC0gV2ViIHNlcnZlciByZWNlaXZlZCBhbiBpbnZhbGlkIHJlc3BvbnNlIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHkgc2VydmVyLjwvaDI+DQogIDxoMz5UaGVyZSBpcyBhIHByb2JsZW0gd2l0aCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yLCBhbmQgaXQgY2Fubm90IGJlIGRpc3BsYXllZC4gV2hlbiB0aGUgV2ViIHNlcnZlciAod2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSkgY29udGFjdGVkIHRoZSB1cHN0cmVhbSBjb250ZW50IHNlcnZlciwgaXQgcmVjZWl2ZWQgYW4gaW52YWxpZCByZXNwb25zZSBmcm9tIHRoZSBjb250ZW50IHNlcnZlci48L2gzPg0KIDwvZmllbGRzZXQ+PC9kaXY+DQo8L2Rpdj4NCjwvYm9keT4NCjwvaHRtbD4NCg==");\ display: block;\ opacity: 0;\ position: absolute;\ right: 3px;\ top: 3px;\ z-index: 1;\ cursor: pointer;\ }\ div.mgline:hover a.close-informer {\ opacity: 0.7;\ -moz-transition: all 0.3s ease-out;\ -o-transition: all 0.3s ease-out;\ -webkit-transition: all 0.3s ease-out;\ -ms-transition: all 0.3s ease-out;\ transition: all 0.3s ease-out;\ }\ div.mgline a.close-informer:hover {\ opacity: 1;\ -moz-transition: all 0.3s ease-out;\ -o-transition: all 0.3s ease-out;\ -webkit-transition: all 0.3s ease-out;\ -ms-transition: all 0.3s ease-out;\ transition: all 0.3s ease-out;\ }\ div.mcimg {\ position: relative;\ display: inline-block\ }\ div.image-with-price {\ position: relative;\ }\ .mgline .image-container {\ width: auto;\ margin: 0 auto;\ display: table;\ position: relative;\ }';
            self.styles += rejectStyles;
            self.isInsertedRejectStyles = true;
        };
        self.GM.push('initRejectStyles');
    };
    this['MarketGidCRejectBlock144902'].call(this['MarketGidInfC144902'], this['MarketGidInfC144902']);
    this['MarketGidInfC144902']['funcBlocks']['Reject'] = 'MarketGidCRejectBlock144902';
    this['MarketGidCExternalCountersBlock144902'] = function (self) {
        self.SP;
        self.QF.push("PE");
        var IC = function (event) {
            if (self.SP && event.target.className.indexOf('Button') === -1) {
                return;
            }
            if (!event) {
                event = self.LG.event;
            }
            if (!event.target) {
                event.target = event.srcElement;
            }
            var element = event.target;
            if (element.tagName != 'A') {
                element = self.FP(element);
                if (null == element) {
                    return;
                }
            }
            if (!element.hasAttribute('data-hash')) {
                return;
            }
            var hash = element.getAttribute('data-hash');
            if (!self.VZ[hash]) {
                return;
            }
            if (!Array.isArray(self.VZ[hash]['clicktrackers'])) {
                return;
            }
            var clicktrackers = self.VZ[hash]['clicktrackers'];
            if (!clicktrackers.length) {
                return;
            }
            for (var i = 0; i < clicktrackers.length; i++) {
                var img = self.LG.document.createElement('IMG');
                img.src = clicktrackers[i];
            }
        };
        self.PE = function (element) {
            if (typeof element == 'undefined') {
                element = self.root;
            }
            self.addEvent(element, 'click', IC);
        };
    };
    this['MarketGidCExternalCountersBlock144902'].call(this['MarketGidInfC144902'], this['MarketGidInfC144902']);
    this['MarketGidInfC144902']['funcBlocks']['ExternalCounters'] = 'MarketGidCExternalCountersBlock144902';
    MarketGidCCriteoBlock144902 = function (self) {
        self.LG.LoadCriteoAllPlaces = function (params) {
            self.criteoNurl = params.l;
            var s = self.LG.document.createElement('script');
            self.criteoParams = params.pos;
            s.type = 'text/javascript';
            s.src = '//cas.criteo.com/delivery/0.1/napi.jsonp?zoneid=' + params.z + '&callback=ProcessCriteo&publisherid=' + self.blockId;
            var h = self.LG.document.getElementsByTagName('script')[0];
            h.parentNode.insertBefore(s, h);
        };
        self.LG.ProcessCriteo = function (response) {
            if (response.response_status === 0 && response.products.length >= self.json.length) {
                self.ED = 0;
                self.root.innerHTML = '';
                self.iteration = 1;
                self.LW = [];
                var data = self.json;
                var advDomain = "";
                if ("advertiser" in response && "domain" in response.advertiser) {
                    advDomain = response.advertiser.domain;
                }
                var host = 7 === 1 ? 'marketgid' : 'mgid';
                var placements = response.products.length;
                for (var k = 0; k <= placements; k++) {
                    self.criteoPlacement = k;
                    if (data[k] == undefined) {
                        continue;
                    }
                    data[self.criteoPlacement][0] = advDomain;
                    data[self.criteoPlacement][1] = k + 1;
                    data[self.criteoPlacement][3] = response.products[k].title;
                    data[self.criteoPlacement][4] = response.products[k].description;
                    data[self.criteoPlacement][7] = response.products[k].price;
                    data[self.criteoPlacement][8] = "";
                    data[self.criteoPlacement][10].i = "//imggprx." + host + ".com/i/resize?img=" + encodeURIComponent(response.products[k].image.url) + "&size=17";
                    data[self.criteoPlacement][10].l = self.criteoParams[k] + "&u=" + self.WR(response.products[k].click_url);
                    data[self.criteoPlacement][10].adc = [];
                }
                self.MarketGidLoadNews(data);
                for (var k = 0; k <= placements; k++) {
                    self.criteoPlacement = k;
                    if (data[k] == undefined) {
                        continue;
                    }
                    if (response.hasOwnProperty('privacy') && response.privacy.hasOwnProperty('optout_click_url') && response.privacy.hasOwnProperty('optout_image_url')) {
                        var imgElement = self.root.getElementsByClassName('mgline')[self.criteoPlacement].getElementsByClassName('mcimg')[0];
                        var privacyDiv = self.LG.document.createElement('DIV');
                        privacyDiv.style.position = 'absolute';
                        privacyDiv.style.zIndex = '100';
                        privacyDiv.style.left = '90%';
                        privacyDiv.style.top = '0';
                        var privacyHref = self.LG.document.createElement('A');
                        privacyHref.setAttribute('href', response.privacy.optout_click_url);
                        privacyHref.setAttribute('target', "_blank");
                        var privacyImg = self.LG.document.createElement('IMG');
                        privacyImg.setAttribute('src', response.privacy.optout_image_url);
                        privacyHref.appendChild(privacyImg);
                        privacyDiv.appendChild(privacyHref);
                        imgElement.appendChild(privacyDiv);
                        if (response.hasOwnProperty('impression_pixels')) {
                            for (var i in response.impression_pixels) {
                                if (response.impression_pixels[i].hasOwnProperty('url')) {
                                    var im = self.LG.document.createElement('IMG');
                                    im.src = response.impression_pixels[i].url;
                                    self.LG.document.body.appendChild(im)
                                }
                            }
                        }
                        var n = self.LG.document.createElement('IMG');
                        n.src = self.criteoNurl;
                        self.LG.document.body.appendChild(n);
                    }
                }
            }
        };
    };
    this['MarketGidCCriteoBlock144902'].call(this['MarketGidInfC144902'], this['MarketGidInfC144902']);
    this['MarketGidInfC144902']['funcBlocks']['Criteo'] = 'MarketGidCCriteoBlock144902';
    MarketGidCSendDimensionsBlock144902 = function (self) {
        self.blankImage = "data:image/gif;base64,R0lGODlhyACWAPAAAAAAAAAAACH5BAEAAAAALAAAAADIAJYAAALbhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+PL1cAADs=";
        self.precalcRect = {};
        self.updatePrecalcRect = function () {
            self.GX = "goods";
            self.IF = '0';
            self.fakeMode = true;
            var realRoot = self.root;
            var cnt = self.LG.document.createElement('div');
            var newRoot = self.LG.document.createElement('div');
            newRoot.id = self.root.id;
            self.root.id += "_";
            cnt.appendChild(newRoot);
            self.root.appendChild(cnt);
            self.root = newRoot;
            realRoot.style.height = "0px";
            realRoot.style.overflow = "hidden";
            var countNews = 6;
            var lorem = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet";
            var data = [];
            for (var i = 1; i <= countNews; i++) {
                data.push(['', i, '', lorem, lorem, '', '', '', '', '', {i: self.blankImage}]);
            }
            self.MarketGidLoadNews(data);
            var h = self.NB();
            self.fixGetElementsByClassNameHandler(self.root);
            var widgetRect = self.root.getBoundingClientRect();
            if (self.root.getElementsByClassName("mgbox")[0]) {
                widgetRect = self.root.getElementsByClassName("mgbox")[0].getBoundingClientRect();
            }
            self.precalcRect.width = parseInt(widgetRect.width ? widgetRect.width : widgetRect.right - widgetRect.left);
            self.precalcRect.height = parseInt(widgetRect.height ? widgetRect.height : widgetRect.bottom - widgetRect.top);
            self.precalcRect.top = widgetRect.top;
            self.precalcRect.bottom = widgetRect.bottom;
            self.requestParams.w = "w=" + self.precalcRect.width;
            self.requestParams.h = "h=" + self.precalcRect.height;
            var cols = 0;
            var elx = self.root.getElementsByClassName('mgline');
            for (i = 0; i < elx.length; i++) {
                var rect = elx[i].getBoundingClientRect();
                if (prepTop != undefined && prepTop < rect.top) {
                    cols = i;
                    break;
                }
                var prepTop = rect.top;
            }
            if (cols == 0) {
                cols = elx.length;
            }
            self.requestParams.cols = "cols=" + cols;
            self.fakeMode = false;
            self.root = realRoot;
            self.root.removeChild(cnt);
            self.root.id = self.root.id.substr(0, self.root.id.length - 1);
            self.root.style.height = "auto";
            self.root.style.overflow = "visible";
            self.GX = "";
            self.IF = "";
            self.ED = 0;
            self.template = "";
            self.iteration = 1;
            self.LW = {};
        };
        this.RR.push("updatePrecalcRect");
    };
    this['MarketGidCSendDimensionsBlock144902'].call(this['MarketGidInfC144902'], this['MarketGidInfC144902']);
    this['MarketGidInfC144902']['funcBlocks']['SendDimensions'] = 'MarketGidCSendDimensionsBlock144902';
    MarketGidCMonitorBlock144902 = function (self) {
        this.QF.push("monitorInit");
        this.shownBlocks = {};
        this.monitorTimeout = null;
        this.isFirstCappingRequest = true;
        this.isFirstByType = {};
        this.monitorInit = function () {
            var regex = /\/\/img.*\/[\d]+\/([\d]+).*\.(jpg|gif)/;
            if (!this.monitorTimeout) {
                (function () {
                    var newBlocks = {};
                    var viewportSize = self.utils.getViewportSize();
                    var images = self.root.getElementsByTagName('IMG');
                    for (var i = 0; i < images.length; i++) {
                        if (self.isElementInViewport(images[i])) {
                            var res = regex.exec(images[i].src);
                            if (!res) {
                                if (images[i].dataset.i) {
                                    res = [];
                                    res[1] = images[i].dataset.i;
                                }
                            }
                            if (res && res[1] && !self.shownBlocks[res[1]]) {
                                var teaserBlock = self.getParentTeaserBlock(images[i]);
                                var imageRect = self.utils.getRect(images[i], true);
                                if (teaserBlock) {
                                    var teaserDims = self.utils.getRect(teaserBlock, true);
                                    newBlocks[res[1]] = {
                                        width: Math.round(imageRect.width),
                                        height: Math.round(imageRect.height),
                                        atf: teaserDims.top < viewportSize.height,
                                        align: self.getTeaserAlign(teaserDims),
                                        desc: self.isTeaserElementVisible(teaserBlock, 'mcdesc'),
                                        price: self.isTeaserElementVisible(teaserBlock, 'mcprice'),
                                        domain: self.isTeaserElementVisible(teaserBlock, 'mcdomain')
                                    };
                                } else {
                                    newBlocks[res[1]] = {
                                        width: Math.round(imageRect.width),
                                        height: Math.round(imageRect.height),
                                        desc: false,
                                        price: false,
                                        domain: false
                                    };
                                }
                                self.shownBlocks[res[1]] = 1;
                            }
                        }
                    }
                    self.prepareCappingData(newBlocks);
                    self.monitorTimeout = setTimeout(arguments.callee, 1000);
                })();
            }
        };
        this.prepareCappingData = function (blocks) {
            var typePrefix = "&t=" + (self.GX == 'news' ? "N" : "G");
            var data = "";
            var counter = 0;
            for (var i in blocks) {
                var prefix = blocks[i].width + "|" + blocks[i].height + "|" + ( (blocks[i].desc ? 1 : 0) + (blocks[i].price ? 2 : 0) + (blocks[i].domain ? 4 : 0) + (blocks[i].atf ? 8 : 0) + (blocks[i].align == 'right' ? 16 : 0) + (blocks[i].align == 'left' ? 32 : 0)) + "|";
                var showHash = self.teaserHashes[i];
                data += "&v=" + prefix + showHash;
                if (self.VZ[showHash] && self.VZ[showHash]['coopType']) {
                    var type = self.VZ[showHash]['coopType'];
                    if (!self.isFirstByType[type]) {
                        data += '&f' + type + "=1";
                        self.isFirstByType[type] = 1;
                    }
                }
                counter++;
                if (counter > 20) {
                    self.sendCappingData(typePrefix + data);
                    data = "";
                    counter = 0;
                }
            }
            if (data != "") {
                self.sendCappingData(typePrefix + data);
            }
        };
        this.sendCappingData = function (data) {
            var img = document.createElement('IMG');
            if (self.isFirstCappingRequest) {
                data = "&f=1" + data;
                self.isFirstCappingRequest = false;
                if (self.servicerData && self.servicerData.tt) {
                    data += '&tt=' + self.servicerData.tt;
                }
                if (self.servicerData && self.servicerData.ts) {
                    data += '&ts=' + self.servicerData.ts;
                }
            }
            data += "&cid=" + '144902';
            if (self.servicerData && self.servicerData.h2) {
                data += '&h2=' + self.servicerData.h2;
            }
            var scriptSrc = "//c." + (self.IF == 2 ? "adskeeper.co.uk" : "mgid.com") + "/c?pv=2" + data;
            img.src = scriptSrc;
            img.onerror = function () {
                self.mg_ws.onmessage = self.mg_ws_messageHandler;
                self.sendMessage('c|' + scriptSrc);
            };
        };
        this.isElementInViewport = function (el) {
            var rect = self.utils.getRect(el, false);
            var viewport = self.utils.getViewportSize();
            return ( rect.height > 0 && rect.width > 0 && rect.top >= 0 && rect.left >= 0 && rect.bottom <= viewport.height && rect.right <= viewport.width );
        };
        this.getParentTeaserBlock = function (el) {
            var current = el;
            while (current != self.root && current != self.LG) {
                if (current.className.indexOf("mgline") >= 0) {
                    return current;
                } else {
                    current = current.parentNode;
                }
            }
            return null;
        };
        this.isTeaserElementVisible = function (el, className) {
            self.fixGetElementsByClassNameHandler(el);
            var elements = el.getElementsByClassName(className);
            if (elements.length > 0) {
                var dims = elements[0].getBoundingClientRect();
                if (dims.right - dims == 0 || dims.bottom - dims.top == 0) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        };
        this.getTeaserAlign = function (teaserDims) {
            var bodyWidth = self.LG.document.body.scrollWidth;
            if (teaserDims.right < 0.3 * bodyWidth) {
                return 'left';
            } else if (teaserDims.left >= 0.7 * bodyWidth) {
                return 'right'
            } else {
                return 'center';
            }
        };
    };
    this['MarketGidCMonitorBlock144902'].call(this['MarketGidInfC144902'], this['MarketGidInfC144902']);
    this['MarketGidInfC144902']['funcBlocks']['Monitor'] = 'MarketGidCMonitorBlock144902';
    MarketGidInfC144902.init();
    MarketGidInfC144902.start();
}