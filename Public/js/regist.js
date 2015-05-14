function domainURI(e) {
    var t = window.location.protocol;
    if (t === "https:") {
        var n = /^(https|http|ftp|rtsp|mms):\/\/([^\/]+)(.qunar.com|.qunarzz.com)\//i;
        var r = e.match(n);
        return e.replace(r[0], "https://qcommons.qunar.com/" + r[2] + "/")
    } else {
        return e
    }
}
if (typeof QNR === "undefined") {
    QNR = {}
}
QNR.ips = function(e) {
    function o(e, n) {
        s.push(e);
        if (i) {
            return
        }
        var o = t.createElement("script");
        a.callback = function(e) {
            if (r !== null) {
                return
            }
            r = e.city || "";
            u();
            o.parentNode.removeChild(o)
        };
        o.type = "text/javascript";
        o.charset = "utf-8";
        o.src = domainURI("http://ws.qunar.com/ips.jcp?callback=QNR.ips.callback&_=" + +(new Date));
        o.async = true;
        var f = t.getElementsByTagName("head");
        container = f ? f[0] : document.documentElement;
        container.insertBefore(o, container.firstChild);
        i = 1;
        setTimeout(function() {
            a.callback({})
        },
        n || 2e3)
    }
    function u() {
        for (var e = 0,
        t = s.length; e < t; e++) {
            s[e].call(null, r)
        }
        s.length = 0
    }
    function a(e, t) {
        e = e ||
        function() {};
        if (r !== null) {
            e.call(null, r)
        } else {
            o(e, t)
        }
    }
    var t = e.document,
    n = location.search.match(/debug=city=([^&#]+)/),
    r = n ? decodeURI(n[1]) : null,
    i = 0,
    s = [];
    return a
} (this);
if (typeof QNR === "undefined") {
    QNR = {}
}
if (typeof QNR === "undefined") {
    QNR = {}
} (function(e) {
    "$doc:nomunge, $head:nomunge";
    function y(e, t, n, r) {
        var i, s = t.document,
        o = s.getElementById(e);
        if (o) {
            n.id = e;
            if (/MSIE/i.test(navigator.appVersion)) {
                var u = [];
                u.push('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
                for (var a in n) {
                    if (n.hasOwnProperty(a)) {
                        a = a.toLowerCase();
                        if (a === "data") {
                            r.movie = n[a]
                        } else if (a === "styleclass") {
                            u.push(' class="', n[a], '"')
                        } else if (a !== "classid") {
                            u.push(" ", a, '="', n[a], '"')
                        }
                    }
                }
                u.push(">");
                for (var f in r) {
                    if (r.hasOwnProperty(f)) {
                        u.push('<param name="', f, '" value="', r[f], '" />')
                    }
                }
                u.push("</object>");
                o.outerHTML = u.join("");
                i = s.getElementById(n.id)
            } else {
                var l = s.createElement("object");
                l.style.outline = "none";
                l.setAttribute("type", "application/x-shockwave-flash");
                for (var c in n) {
                    if (n.hasOwnProperty(c)) {
                        c = c.toLowerCase();
                        if (c === "styleclass") {
                            l.setAttribute("class", n[c])
                        } else if (c !== "classid") {
                            l.setAttribute(c, n[c])
                        }
                    }
                }
                for (var h in r) {
                    if (r.hasOwnProperty(h) && h.toLowerCase() !== "movie") {
                        var p = s.createElement("param");
                        p.setAttribute("name", h);
                        p.setAttribute("value", r[h]);
                        l.appendChild(p)
                    }
                }
                o.parentNode.replaceChild(l, o);
                i = l
            }
        }
        return i
    }
    function b(e, t, n, r) {
        if (!g()) return null;
        return y(e, t, n, r)
    }
    function w(e) {
        return r.getElementById(e)
    }
    function E(e, t) {
        return e.getAttribute("data-" + t)
    }
    function C(e) {
        var t = [];
        for (var n in e) {
            t.push(n + "=" + encodeURIComponent(e[n]))
        }
        return t.join("&")
    }
    function k(e) {
        var t = x,
        n = "/js.ng/";
        if (e.type === "qde_text") {
            n = e.adurl ? "/" + e.adurl + "?": "/qadjs12_css.nghtml?"
        }
        var r = ["http://", t, n, "framId=", e.id, "&", e.query, "&tile=", N];
        if (d) {
            r.push("&city=", d)
        }
        if (u) {
            r.push("&adtest=beta")
        }
        if (h) {
            r.push(h)
        }
        return r.join("")
    }
    function L(e) {
        return ft(e.id).urlPath(e)
    }
    function A(e) {
        var t = "";
        switch (e.type) {
        case "qde":
        case "qde_text":
            t = k(e);
            break;
        case "qad":
            t = L(e);
            break;
        default:
            break
        }
        return t
    }
    function O() {
        return r.createElement("div")
    }
    function M() {
        var e = r.createElement("iframe");
        e.setAttribute("height", 0);
        e.setAttribute("frameBorder", 0);
        e.setAttribute("scrolling", "no");
        e.style.display = "none";
        return e
    }
    function _(e, t) {
        if (t && t.parentNode) {
            t.parentNode.insertBefore(e, t)
        }
    }
    function D(e, t) {
        var n = e === "div" ? O() : M();
        if (t && t.style) {
            n.style.cssText = t.style
        }
        if (e === "iframe") {
            n.style.display = "none"
        }
        return n
    }
    function P(e, t) {
        t = t || "div";
        var n = S(e),
        r = D(t, n);
        return r
    }
    function H(e) {
        var t = P(e, "div"),
        n = w(e);
        n.parentNode.insertBefore(t, n);
        return t
    }
    function B(e) {
        var t = r.createElement("script");
        t.charset = "utf-8";
        t.async = true;
        t.src = domainURI(e);
        s.insertBefore(t, s.lastChild)
    }
    function F(e) {
        if (!j) {
            j = O();
            j.style.display = "none";
            document.body.insertBefore(j, document.body.lastChild)
        }
        j.appendChild(e)
    }
    function I() {
        var e = r[t]("abbr"),
        n = [];
        for (var i = 0,
        s = e.length; i < s; i++) {
            if (E(e[i], "type") && E(e[i], "lazyAD") !== "1") {
                n.push(e[i])
            }
        }
        return n
    }
    function q(e, t) {
        e = e || [];
        t = t || {};
        var n = {},
        r, i, s, u = /chan=([a-z_]+)/,
        a;
        for (var f = 0,
        c = e.length; f < c; f++) {
            r = e[f];
            i = S(r);
            if (i.type === "qad") {
                i.callback = QNR.AD.getCallbackName(i.id, true)
            }
            s = A(i);
            if (!l && i.type === "qde") {
                a = u.exec(s);
                if (a && a[1]) l = a[1]
            }
            if (s) {
                n[i.id] = s
            }
        }
        return {
            ads: n,
            domain: o
        }
    }
    function U() {
        if (R) {
            setTimeout(function() {
                if (R) {
                    R.parentNode.removeChild(R);
                    R = null
                }
            },
            0)
        }
    }
    function z(e) {
        var t = r.createElement("div");
        t.style.display = "none";
        var n = [];
        f = "http://vata.qunar.com/vata?chan=" + (l || ""),
        n.push('<form name="vata_main_form" target="vata_main_frame" action="' + domainURI(f) + '" method="POST">');
        e.ads = e.ads || {};
        for (var i in e.ads) {
            if (e.ads.hasOwnProperty(i)) {
                n.push('<input type="text" name="', i, '" value="', e.ads[i], '" />')
            }
        }
        n.push("</form>");
        n.push("<iframe src='' name='vata_main_frame' id='vata_main_frame'></iframe>");
        t.innerHTML = n.join("");
        R = t;
        F(t);
        if (/MSIE/i.test(navigator.appVersion)) {
            w("vata_main_frame").src = "javascript:'<script>window.onload=function(){document.write(\\'<script>document.domain=\\\"" + o + "\\\";parent.document.vata_main_form.submit();<\\\\/script>\\');document.close();};</script>'"
        } else {
            r.vata_main_form.submit()
        }
    }
    function W(e) {
        var t = I();
        var n = [],
        r,
        i = function(t) {
            r = E(t, "type");
            if (r === "qde_auto") {
                rt(t)
            } else if (a === 1 || r === "qde_text") {
                it(t, e || {})
            } else {
                n.push(t)
            }
        };
        for (var s = 0,
        o = t.length; s < o; s++) {
            i(t[s])
        }
        var u = n.length;
        if (u == 1) {
            it(n[0], e || {})
        } else if (u > 1) {
            z(q(n, e))
        }
    }
    function X(e, t) {
        if (e.attachEvent) {
            e.attachEvent("onload", t)
        } else {
            e.onload = t
        }
    }
    function V(e, t) {
        if (e == null || e != e.window) {
            return false
        }
        var n = e.frameElement;
        var r = e.document.body;
        var i = function(s) {
            n.style.display = "";
            var o = r.offsetHeight;
            if (!s) {
                X(e,
                function() {
                    i(true)
                })
            }
            if (o == 0) {
                n.style.display = "none"
            } else {
                n.style.height = o + "px";
                t && t()
            }
        };
        i()
    }
    function K(e, t) {
        var n = $[t];
        var r = n && n.join("") || "";
        if (r) {
            n.length = 0;
            e.write(r)
        } else {
            ot(t, false)
        }
    }
    function G(e, t) {
        var n = Q[t] || 0;
        Q[t] = "";
        n && e.write(n)
    }
    function Y(e, t) {
        e = e || "ad_queue_all";
        if (!$[e]) {
            $[e] = []
        }
        $[e].push(t)
    }
    function Z(e) {
        return c + (J ? "&rnd=" + e: "") + "#" + e
    }
    function et(e, t, n, r) {
        var i = [];
        if (e) {
            i[i.length] = "<style>" + e + "</style>"
        }
        if (t) {
            i[i.length] = t.replace(/(scr)_(ipt)/gi, "$1$2")
        }
        if (n) {
            i[i.length] = '<script type="text/javascript">' + n + "</script>"
        }
        if (r) {
            i[i.length] = '<script type="text/javascript" src="' + domainURI(r) + '"></script>'
        }
        return i.join("")
    }
    function tt(e, t) {
        var n = Z(e),
        r = P(e, "iframe");
        r.src = n;
        if (t == 1) {
            F(r)
        } else {
            var i = w(e);
            _(r, i)
        }
    }
    function nt(e, t, n) {
        var r = w(e),
        i = P(e, "iframe");
        i.style.display = "";
        i.src = t;
        i.id = n || e;
        r.parentNode.replaceChild(i, r)
    }
    function rt(e) {
        var t = e.getAttribute("data-src");
        if (t) {
            nt(e.id, t)
        }
    }
    function it(e) {
        var t = S(e),
        n = t.id,
        r,
        i,
        s = "";
        if (!n) {
            return
        }
        if (t.type === "qad") {
            t.callback = QNR.AD.getCallbackName(n);
            i = A(t);
            if (i) B(i)
        } else {
            i = A(t);
            if (!i) return;
            if (t.type === "qde_text") {
                s = "call_show=1;";
                r = et("", "", s, i);
                Y(n, r)
            } else {
                r = '<script type="text/javascript" src="' + domainURI(i) + '"></script>';
                Q[n] = r
            }
            tt(n, 0)
        }
    }
    function st(e, t, n, r, i, s) {
        if (n === '<div style="display:none"></div>') {
            return
        }
        var o = w(e),
        u = "",
        f = false;
        if (!o) return;
        f = n && /top.QNR.AD.run_in_content/.test(n);
        if (f) s = 1;
        if (!f) {
            ot(e, true)
        }
        if (a === 1) {
            if (s != 1) {
                r = r || "";
                r = "call_show = 1;" + r
            }
            u = et(t, n, r, i);
            if (f) {
                u = u + "<script>writeContent(document,Current_ad_id);</script>"
            }
            Y(e, u);
            return
        }
        if (s == 1) {
            u = et(t, n, r, i);
            if (u) {
                u = '<script type="text/javascript">Current_ad_id = "' + e + '";</script>' + u
            }
        } else {
            r = "call_show=1;" + r;
            u = et(t, n, r, i);
            s = 0
        }
        Y(e, u);
        tt(e, s)
    }
    function ot(e, t) {
        var n = QNR.AD._DE;
        if (e) {
            if (n[e]) {
                n[e](t);
                delete n[e]
            }
            return
        }
        for (var r in n) {
            n[r](false)
        }
        QNR.AD._DE = {}
    }
    function ut(e) {
        this.$aid = e;
        this.params = {}
    }
    function ft(e, t) {
        if (!at[e]) {
            at[e] = new ut(e)
        }
        t && t(at[e]);
        return at[e]
    }
    QNR._AD = {};
    var t = "getElementsByTagName";
    var n = e,
    r = n.document,
    i = r.body,
    s = r[t]("head")[0],
    o = "qunar.com",
    u = false,
    a = 0,
    f,
    l,
    c,
    h,
    p,
    d,
    v;
    try {
        r.domain = o
    } catch(m) {}
    var g = function() {
        var e = n.navigator,
        t = "application/x-shockwave-flash";
        var r = false,
        i, s;
        var o = e.mimeTypes && e.mimeTypes[t] ? e.mimeTypes[t].enabledPlugin: 0;
        if (o) {
            s = o.description;
            if (parseInt(s.substring(s.indexOf(".") - 2), 10) >= 8) {
                r = true
            }
        } else if (n.ActiveXObject) {
            try {
                i = new n.ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                if (i) {
                    r = true
                }
            } catch(u) {}
        }
        g = function() {
            return r
        };
        o = i = s = e = null;
        return r
    };
    var S = function() {
        function n(t) {
            var n = {},
            r;
            if (!t) return {};
            n.id = t.id;
            for (var i = 0,
            s = e.length; i < s; i++) {
                r = e[i];
                n[r] = E(t, r)
            }
            if (n.type === "qde_text") {
                n["adurl"] = E(t, "adurl")
            }
            return n
        }
        var e = ["type", "style", "query", "main"],
        t = {};
        return function(e) {
            var r, i;
            if (typeof e === "string") {
                r = e
            } else {
                r = e.id;
                i = e
            }
            if (!t[r]) t[r] = n(i || w(r));
            return t[r]
        }
    } ();
    var x = "qde.qunar.com",
    T = "a.qunar.com";
    var N = String( + (new Date)) + parseInt(Math.random() * 1e7, 10);
    var j;
    var R;
    var $ = {};
    var J = /MSIE 6\.0/.test(navigator.userAgent);
    var Q = {};
    ut.prototype = {
        constructor: ut,
        createCall: function(e) {
            var t = this;
            QNR._AD[this.$aid] = function(n) {
                e(n, t)
            }
        },
        createDiv: function() {
            return H(this.$aid)
        },
        set: function(e, t) {
            this.params[e] = t;
            return this
        },
        getId: function() {
            return this.$aid
        },
        run_in_iframe: function(e, t) {
            if (typeof t == "undefined") {
                t = 1
            }
            QNR.AD.add_AD_iframe(this.$aid, e, t)
        },
        urlPath: function(e) {
            var t = ["http://", T, "/vataplan?", "framId=", e.id, "&", e.query, "&callback=", e.callback, "&tile=", N];
            if (p) {
                t.push(p)
            }
            var n = C(this.params);
            n && t.push("&", n);
            if (d) {
                t.push("&city=", d)
            }
            return t.join("")
        },
        load: function() {
            QNR.AD.loadOneAD(this.$aid)
        }
    };
    var at = {};
    QNR.AD = {
        version: "4.2",
        _AD: {},
        _DE: {},
        run_in_content: st,
        run_queue_list: function() {
            var e = "ad_queue_all";
            var t = $[e];
            var n = t && t.join("") || "";
            if (n) {
                t.length = 0;
                n += '<script type="text/javascript">writeContent(document,"ad_queue_all");</script>';
                Y(e, n);
                tt(e, 1)
            }
            U();
            ot()
        },
        writeHeadScript: G,
        create_div_container: H,
        writeContent: K,
        $inject_flash: b,
        createAdFrame: nt,
        createQAd: ft,
        add_AD_iframe: function(e, t, n) {
            if (!t) return;
            if (n) t = t + '<script type="text/javascript">call_show=1;</script>';
            Y(e, t);
            tt(e, 0)
        },
        init: function(e) {
            u = e.debug || false;
            a = e.type || "";
            if (J) {
                a = 1
            }
            d = e.ip || "";
            h = e.qde_plus || "";
            p = e.qad_plus || "";
            c = e.blank_html || "";
            v = e;
            if (u) {
                x = "qdebeta.qunar.com"
            }
            W(e)
        },
        show: function(e, t) {
            V(e,
            function() {
                QNR.AD.callWinShowFun(t, e)
            })
        },
        getCallbackName: function(e, t) {
            return (t ? "parent.": "") + "QNR._AD." + e
        },
        callWinShowFun: function(e, t) {
            var n = e + "_win_",
            r = QNR._AD[n];
            if (r) r(e, t)
        },
        createWinShowCall: function(e, t) {
            var n = e + "_win_";
            QNR._AD[n] = t
        },
        createCallback: function(e, t) {
            var n = ft(e);
            n.createCall(function(e) {
                var r = n.createDiv();
                t(r, e)
            })
        },
        createQdeCallback: function(e, t) {
            QNR.AD._DE[e] = function(n) {
                t(n, e)
            }
        },
        callBackQDE: ot,
        change_one_async: function() {
            var e = v;
            e.type = 1;
            QNR.AD.init(e);
            U()
        },
        loadOneAD: function(e) {
            var t = w(e);
            if (t) {
                it(t)
            }
        }
    }
})(this); (function() {
    function e(e) {
        return document.getElementById(e)
    }
    function t(e) {
        return ["http://clk.qunar.com/q?k=", e.s || "", "&e=", e.e].join("")
    }
    function n(e) {
        var n = t(e);
        return ['<div class="un_ct">', '<dl class="hn_dl">', '<dt><a target="_blank" href="', n, '">', '<img src="', domainURI(e.img), '"></a>', "</dt>", '<dd><a target="_blank" href="', n, '" class="hn_d2">', e.title, "</a></dd>", '<dd><a target="_blank" href="', n, '" class="hn_d3">', e.description, "</a></dd>", '<dd><a target="_blank" href="', n, '">', e.show, "</a></dd>", '</dl><div class="clr"></div></div>'].join("")
    }
    function r(e) {
        var n = t(e);
        return ['<div class="un_ct">', '<dl class="hn_dl">', '<dt><a target="_blank" href="', n, '">', '<img src="', domainURI(e.img), '"></a>', "</dt>", '</dl><div class="clr"></div></div>'].join("")
    }
    function i(e) {
        e("")
    }
    function s(e) {
        e("")
    }
    function u(e) {
        return~location.search.indexOf(e)
    }
    QNR.AD.getIpAddress = function(e) {
        QNR.ips(e)
    };
    QNR.AD.createCallback("banner_left_bottom",
    function(e, t) {
        e.style.display = "none";
        var n = t && t.key_data && t.key_data.length;
        if (!n) return;
        var i = r(t.key_data[0]);
        QNR.AD.add_AD_iframe("banner_left_bottom", i, 1)
    });
    QNR.AD.createCallback("banner_reg_left",
    function(e, t) {
        e.style.display = "none";
        var n = t && t.key_data && t.key_data.length;
        if (!n) return;
        var i = r(t.key_data[0]);
        QNR.AD.add_AD_iframe("banner_reg_left", i, 1)
    });
    QNR.AD.createCallback("banner_reg_top",
    function(e, t) {
        e.style.display = "none";
        var n = t && t.key_data && t.key_data.length;
        if (!n) return;
        var i = r(t.key_data[0]);
        QNR.AD.add_AD_iframe("banner_reg_top", i, 1)
    });
    var o = {};
    o.type = u("debug=type=open") ? 1 : 0;
    o.debug = u("adtest=beta");
    var a = window.location.protocol;
    if (a === "https:") {
        o.blank_html = "https://user.qunar.com/webApi/ad.jsp?_=20120808"
    } else {
        o.blank_html = "http://www.qunar.com/vataframe/b.html?_=20120808"
    }
    o.qde_plus = ""; (QNR.AD.getIpAddress || i)(function(e) {
        o.ip = e; (QNR.AD.getAdsQuery || s)(function(e) {
            o.qde_plus = e;
            if (u("debug=charge=true")) {
                o.qde_plus += "&cm=charged"
            }
            QNR.AD.init(o)
        })
    })
})(); (function() {
    var e = {
        version: "1.1",
        _COOKIEHASH: null,
        $: function(e) {
            return document.getElementById(e)
        },
        _escapeHTML: function(e) {
            return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;").replace(/ /g, "&nbsp;")
        },
        _cookie: function(e) {
            this._COOKIEHASH = {};
            var t = document.cookie.split(";");
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                var i = r.split("=");
                if (r.indexOf("=") != -1) this._COOKIEHASH[this._trim(i[0])] = this._trim(i[1])
            }
            return this._COOKIEHASH[e]
        },
        _trim: function(e) {
            if (String.prototype.trim) {
                return e.trim()
            }
            return e.replace(/^\s+/, "").replace(/\s+$/, "")
        },
        _getinfo: function() {
            var e = {
                from: window["__qunarglobal_from"] || ""
            };
            var t = "";
            var n = "";
            var r = "";
            var i = this._cookie("QN16");
            var s = this._cookie("QN42");
            var o = this._cookie("QN15");
            if (typeof i !== "undefined") {
                switch (i) {
                case "1":
                    t = this._getQunarNickName();
                    n = this._getQunarNickName();
                    r = this._getQunarUserName();
                    break;
                case "0":
                    t = s;
                    n = o;
                    r = o;
                    break;
                default:
                    t = this._getQunarNickName();
                    n = this._getQunarNickName();
                    r = this._getQunarUserName()
                }
            } else {
                t = this._getQunarNickName();
                n = this._getQunarNickName();
                r = this._getQunarUserName()
            }
            e.displayName = this._escapeHTML(decodeURIComponent(t).replace(/<(.*?)>/ig, "")).replace(/\"/g, "");
            e.username = decodeURIComponent(n).replace(/\"/g, "");
            e.uname = decodeURIComponent(r).replace(/\"/g, "");
            return e
        },
        _getQunarNickName: function() {
            var e = "";
            var t = this._cookie("_a");
            var n = this._cookie("QN42");
            if (!n) {
                n = this._cookie("_q");
                if (n) {
                    n = n.replace("U.", "")
                }
            }
            if (n) {
                if (t) {
                    e = this._trim(n + "(未激活)")
                } else {
                    e = this._trim(n)
                }
            }
            return e
        },
        _getQunarUserName: function() {
            var e = "";
            var t = this._cookie("_q");
            var n = this._cookie("_a");
            if (t) {
                if (n) {
                    e = this._trim(t.replace("U.", "") + "(未激活)")
                } else {
                    e = this._trim(t.replace("U.", ""))
                }
            }
            return e
        },
        _run: function(e) {
            this.userNameEle = this.$(e["u"]);
            this.userTitleEle = this.$(e["t"]);
            this.userListEle = this.$(e["l"]);
            this.userRegEle = this.$(e["r"])
        },
        _html: function() {
            var e = arguments[0];
            var t = [];
            for (var n = 1,
            r = arguments.length; n < r; n++) {
                t.push(arguments[n])
            }
            e.innerHTML = t.join("")
        }
    };
    var t = {
        _regEvent: function() {
            var t = e.userTitleEle.className;
            e.userTitleEle.onmouseover = function() {
                e.userTitleEle.className = t + " q_header_tnav_menu_hover"
            };
            e.userTitleEle.onmouseout = function() {
                e.userTitleEle.className = t
            }
        },
        _isLogin: function() {
            if (e._cookie("_t") && e._cookie("_q") && e._cookie("_q").indexOf("G.") < 0) {
                return true
            } else if (e._cookie("QN42")) {
                return true
            } else {
                return false
            }
        },
        _render: function() {
            var n = e._getinfo();
            var r = encodeURIComponent(window.location.href);
            var i = "http://user.qunar.com";
            var s = e.userTitleEle ? e.userTitleEle.getAttribute("data-header-alwayshow") : false;
            var o = s && s === "true";
            if (t._isLogin()) {
                e._html(e.userNameEle, '<a href="', i, '/index.jsp#home" title="', n.displayName, '" hidefocus="on" class="q_header_uname" rel="nofollow">', n.displayName, "</a>");
                if (e.userListEle) {
                    e.userTitleEle.style.display = "";
                    var u = e.userListEle.getElementsByTagName("a");
                    for (var a = 0,
                    f = u.length; a < f; a++) {
                        u[a].href = u[a].href.replace(/#\[\[username\]\]/g, n.uname)
                    }
                }
                e._html(e.userRegEle, '<a id="__headerInfo_logout__" href="', i, "/passport/logout.jsp?ret=", r, '" hidefocus="on" rel="nofollow">退出</a>')
            } else {
                e._html(e.userNameEle, '<a id="__headerInfo_login__" href="', i, "/passport/login.jsp?ret=", r, '" hidefocus="on" rel="nofollow">登录</a>');
                e._html(e.userRegEle, '<a id="__headerInfo_reg__" href="', i, "/passport/register.jsp?ret=", r, '" hidefocus="on" rel="nofollow">注册</a>');
                if (e.userListEle && !o) {
                    e.userTitleEle.style.display = "none"
                }
            }
        },
        _addItem: function(t, n) {
            var r = n || "";
            var i = document.createElement("DD");
            i.innerHTML = t;
            i.className = i.className + " " + r;
            e.userListEle.appendChild(i)
        },
        _getUserName: function() {
            if (!t._isLogin()) return {};
            var n = e._getinfo();
            return {
                username: n.username,
                displayName: n.displayName,
                uname: n.uname
            }
        },
        _run: function(n) {
            e._run(n);
            t._render();
            if (e.userTitleEle) {
                t._regEvent()
            }
            t._checkCookieExpire();
            t._plantCsrfToken()
        },
        _checkCookieExpire: function() {
            if (!e._cookie("_t")) {
                return
            }
            var n = (new Date((e._cookie("_t") || 0) * 6e4)).getTime(),
            r = (new Date).getTime();
            if (n > r || r > n + 12096e5) {
                if (window.QNR && window.QNR.hfUtils) {
                    window["___void"] = function() {
                        try {
                            t._plantCsrfToken()
                        } catch(e) {}
                    };
                    var i = document.createElement("script");
                    var s = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
                    i.onload = i.onreadystatechange = function() {
                        t._render();
                        if (i.parentNode) {
                            s.removeChild(i)
                        }
                        return false
                    };
                    i.src = QNR.hfUtils.httpsFilter("http://user.qunar.com/webApi/forcelogout.jsp?format=js&callback=___void");
                    if (s.firstChild) {
                        s.insertBefore(i, s.firstChild)
                    } else {
                        s.appendChild(i)
                    }
                }
                setTimeout(function() {
                    t._render()
                },
                15e3)
            }
        },
        _plantCsrfToken: function() {
            var t = function(e) {
                var t = "123456789poiuytrewqasdfghjklmnbvcxzQWERTYUIPLKJHGFDSAZXCVBNM";
                var n = "";
                for (var r = 0; r < e; r++) {
                    n += t.charAt(Math.ceil(Math.random() * 1e8) % t.length)
                }
                return n
            };
            var n = e._cookie("csrfToken");
            if (!n) {
                n = t(32);
                try {
                    document.cookie = "csrfToken=" + n + ";domain=qunar.com;path=/;"
                } catch(r) {}
            }
        },
        _getFixNickName: function(e, n) {
            var r = t._getUserName().displayName || "";
            e = typeof e == "number" ? e: 7;
            return r.length > e ? r.substr(0, e) + (n || "...") : r
        }
    };
    var n = {};
    n["isLogin"] = t._isLogin;
    n["render"] = t._render;
    n["addItem"] = t._addItem;
    n["getUserName"] = t._getUserName;
    n["run"] = t._run;
    n["getFixNickName"] = t._getFixNickName;
    if (typeof QNR === "undefined") {
        window["QNR"] = {}
    }
    QNR["QUstatus"] = n
})();
var Hogan = {}; (function(e, t) {
    function a(e) {
        return String(e === null || e === undefined ? "": e)
    }
    function f(e) {
        e = a(e);
        return u.test(e) ? e.replace(n, "&amp;").replace(r, "&lt;").replace(i, "&gt;").replace(s, "&#39;").replace(o, "&quot;") : e
    }
    e.Template = function(e, n, r, i) {
        this.r = e || this.r;
        this.c = r;
        this.options = i;
        this.text = n || "";
        this.buf = t ? [] : ""
    };
    e.Template.prototype = {
        r: function(e, t, n) {
            return ""
        },
        v: f,
        t: a,
        render: function(t, n, r) {
            return this.ri([t], n || {},
            r)
        },
        ri: function(e, t, n) {
            return this.r(e, t, n)
        },
        rp: function(e, t, n, r) {
            var i = n[e];
            if (!i) {
                return ""
            }
            if (this.c && typeof i == "string") {
                i = this.c.compile(i, this.options)
            }
            return i.ri(t, n, r)
        },
        rs: function(e, t, n) {
            var r = e[e.length - 1];
            if (!l(r)) {
                n(e, t, this);
                return
            }
            for (var i = 0; i < r.length; i++) {
                e.push(r[i]);
                n(e, t, this);
                e.pop()
            }
        },
        s: function(e, t, n, r, i, s, o) {
            var u;
            if (l(e) && e.length === 0) {
                return false
            }
            if (typeof e == "function") {
                e = this.ls(e, t, n, r, i, s, o)
            }
            u = e === "" || !!e;
            if (!r && u && t) {
                t.push(typeof e == "object" ? e: t[t.length - 1])
            }
            return u
        },
        d: function(e, t, n, r) {
            var i = e.split("."),
            s = this.f(i[0], t, n, r),
            o = null;
            if (e === "." && l(t[t.length - 2])) {
                return t[t.length - 1]
            }
            for (var u = 1; u < i.length; u++) {
                if (s && typeof s == "object" && i[u] in s) {
                    o = s;
                    s = s[i[u]]
                } else {
                    s = ""
                }
            }
            if (r && !s) {
                return false
            }
            if (!r && typeof s == "function") {
                t.push(o);
                s = this.lv(s, t, n);
                t.pop()
            }
            return s
        },
        f: function(e, t, n, r) {
            var i = false,
            s = null,
            o = false;
            for (var u = t.length - 1; u >= 0; u--) {
                s = t[u];
                if (s && typeof s == "object" && e in s) {
                    i = s[e];
                    o = true;
                    break
                }
            }
            if (!o) {
                return r ? false: ""
            }
            if (!r && typeof i == "function") {
                i = this.lv(i, t, n)
            }
            return i
        },
        ho: function(e, t, n, r, i) {
            var s = this.c;
            var o = this.options;
            o.delimiters = i;
            var r = e.call(t, r);
            r = r == null ? String(r) : r.toString();
            this.b(s.compile(r, o).render(t, n));
            return false
        },
        b: t ?
        function(e) {
            this.buf.push(e)
        }: function(e) {
            this.buf += e
        },
        fl: t ?
        function() {
            var e = this.buf.join("");
            this.buf = [];
            return e
        }: function() {
            var e = this.buf;
            this.buf = "";
            return e
        },
        ls: function(e, t, n, r, i, s, o) {
            var u = t[t.length - 1],
            a = null;
            if (!r && this.c && e.length > 0) {
                return this.ho(e, u, n, this.text.substring(i, s), o)
            }
            a = e.call(u);
            if (typeof a == "function") {
                if (r) {
                    return true
                } else if (this.c) {
                    return this.ho(a, u, n, this.text.substring(i, s), o)
                }
            }
            return a
        },
        lv: function(e, t, n) {
            var r = t[t.length - 1];
            var i = e.call(r);
            if (typeof i == "function") {
                i = a(i.call(r));
                if (this.c && ~i.indexOf("{{")) {
                    return this.c.compile(i, this.options).render(r, n)
                }
            }
            return a(i)
        }
    };
    var n = /&/g,
    r = /</g,
    i = />/g,
    s = /\'/g,
    o = /\"/g,
    u = /[&<>\"\']/;
    var l = Array.isArray ||
    function(e) {
        return Object.prototype.toString.call(e) === "[object Array]"
    }
})(typeof exports !== "undefined" ? exports: Hogan); (function(e) {
    function u(e) {
        if (e.n.substr(e.n.length - 1) === "}") {
            e.n = e.n.substring(0, e.n.length - 1)
        }
    }
    function a(e) {
        if (e.trim) {
            return e.trim()
        }
        return e.replace(/^\s*|\s*$/g, "")
    }
    function f(e, t, n) {
        if (t.charAt(n) != e.charAt(0)) {
            return false
        }
        for (var r = 1,
        i = e.length; r < i; r++) {
            if (t.charAt(n + r) != e.charAt(r)) {
                return false
            }
        }
        return true
    }
    function l(e, t, n, r) {
        var i = [],
        s = null,
        o = null;
        while (e.length > 0) {
            o = e.shift();
            if (o.tag == "#" || o.tag == "^" || c(o, r)) {
                n.push(o);
                o.nodes = l(e, o.tag, n, r);
                i.push(o)
            } else if (o.tag == "/") {
                if (n.length === 0) {
                    throw new Error("Closing tag without opener: /" + o.n)
                }
                s = n.pop();
                if (o.n != s.n && !h(o.n, s.n, r)) {
                    throw new Error("Nesting error: " + s.n + " vs. " + o.n)
                }
                s.end = o.i;
                return i
            } else {
                i.push(o)
            }
        }
        if (n.length > 0) {
            throw new Error("missing closing tag: " + n.pop().n)
        }
        return i
    }
    function c(e, t) {
        for (var n = 0,
        r = t.length; n < r; n++) {
            if (t[n].o == e.n) {
                e.tag = "#";
                return true
            }
        }
    }
    function h(e, t, n) {
        for (var r = 0,
        i = n.length; r < i; r++) {
            if (n[r].c == e && n[r].o == t) {
                return true
            }
        }
    }
    function p(e) {
        return e.replace(s, "\\\\").replace(n, '\\"').replace(r, "\\n").replace(i, "\\r")
    }
    function d(e) {
        return~e.indexOf(".") ? "d": "f"
    }
    function v(e) {
        var t = "";
        for (var n = 0,
        r = e.length; n < r; n++) {
            var i = e[n].tag;
            if (i == "#") {
                t += m(e[n].nodes, e[n].n, d(e[n].n), e[n].i, e[n].end, e[n].otag + " " + e[n].ctag)
            } else if (i == "^") {
                t += g(e[n].nodes, e[n].n, d(e[n].n))
            } else if (i == "<" || i == ">") {
                t += y(e[n])
            } else if (i == "{" || i == "&") {
                t += b(e[n].n, d(e[n].n))
            } else if (i == "\n") {
                t += E('"\\n"' + (e.length - 1 == n ? "": " + i"))
            } else if (i == "_v") {
                t += w(e[n].n, d(e[n].n))
            } else if (i === undefined) {
                t += E('"' + p(e[n]) + '"')
            }
        }
        return t
    }
    function m(e, t, n, r, i, s) {
        return "if(_.s(_." + n + '("' + p(t) + '",c,p,1),' + "c,p,0," + r + "," + i + ',"' + s + '")){' + "_.rs(c,p," + "function(c,p,_){" + v(e) + "});c.pop();}"
    }
    function g(e, t, n) {
        return "if(!_.s(_." + n + '("' + p(t) + '",c,p,1),c,p,1,0,0,"")){' + v(e) + "};"
    }
    function y(e) {
        return '_.b(_.rp("' + p(e.n) + '",c,p,"' + (e.indent || "") + '"));'
    }
    function b(e, t) {
        return "_.b(_.t(_." + t + '("' + p(e) + '",c,p,0)));'
    }
    function w(e, t) {
        return "_.b(_.v(_." + t + '("' + p(e) + '",c,p,0)));'
    }
    function E(e) {
        return "_.b(" + e + ");"
    }
    var t = /\S/,
    n = /\"/g,
    r = /\n/g,
    i = /\r/g,
    s = /\\/g,
    o = {
        "#": 1,
        "^": 2,
        "/": 3,
        "!": 4,
        ">": 5,
        "<": 6,
        "=": 7,
        _v: 8,
        "{": 9,
        "&": 10
    };
    e.scan = function(n, r) {
        function S() {
            if (v.length > 0) {
                m.push(new String(v));
                v = ""
            }
        }
        function x() {
            var e = true;
            for (var n = b; n < m.length; n++) {
                e = m[n].tag && o[m[n].tag] < o["_v"] || !m[n].tag && m[n].match(t) === null;
                if (!e) {
                    return false
                }
            }
            return e
        }
        function T(e, t) {
            S();
            if (e && x()) {
                for (var n = b,
                r; n < m.length; n++) {
                    if (!m[n].tag) {
                        if ((r = m[n + 1]) && r.tag == ">") {
                            r.indent = m[n].toString()
                        }
                        m.splice(n, 1)
                    }
                }
            } else if (!t) {
                m.push({
                    tag: "\n"
                })
            }
            g = false;
            b = m.length
        }
        function N(e, t) {
            var n = "=" + E,
            r = e.indexOf(n, t),
            i = a(e.substring(e.indexOf("=", t) + 1, r)).split(" ");
            w = i[0];
            E = i[1];
            return r + n.length - 1
        }
        var i = n.length,
        s = 0,
        l = 1,
        c = 2,
        h = s,
        p = null,
        d = null,
        v = "",
        m = [],
        g = false,
        y = 0,
        b = 0,
        w = "{{",
        E = "}}";
        if (r) {
            r = r.split(" ");
            w = r[0];
            E = r[1]
        }
        for (y = 0; y < i; y++) {
            if (h == s) {
                if (f(w, n, y)) {--y;
                    S();
                    h = l
                } else {
                    if (n.charAt(y) == "\n") {
                        T(g)
                    } else {
                        v += n.charAt(y)
                    }
                }
            } else if (h == l) {
                y += w.length - 1;
                d = o[n.charAt(y + 1)];
                p = d ? n.charAt(y + 1) : "_v";
                if (p == "=") {
                    y = N(n, y);
                    h = s
                } else {
                    if (d) {
                        y++
                    }
                    h = c
                }
                g = y
            } else {
                if (f(E, n, y)) {
                    m.push({
                        tag: p,
                        n: a(v),
                        otag: w,
                        ctag: E,
                        i: p == "/" ? g - E.length: y + w.length
                    });
                    v = "";
                    y += E.length - 1;
                    h = s;
                    if (p == "{") {
                        if (E == "}}") {
                            y++
                        } else {
                            u(m[m.length - 1])
                        }
                    }
                } else {
                    v += n.charAt(y)
                }
            }
        }
        T(g, true);
        return m
    };
    e.generate = function(t, n, r) {
        var i = 'var _=this;_.b(i=i||"");' + v(t) + "return _.fl();";
        if (r.asString) {
            return "function(c,p,i){" + i + ";}"
        }
        return new e.Template(new Function("c", "p", "i", i), n, e, r)
    };
    e.parse = function(e, t, n) {
        n = n || {};
        return l(e, "", [], n.sectionTags || [])
    },
    e.cache = {};
    e.compile = function(e, t) {
        t = t || {};
        var n = e + "||" + !!t.asString;
        var r = this.cache[n];
        if (r) {
            return r
        }
        r = this.generate(this.parse(this.scan(e, t.delimiters), e, t), e, t);
        return this.cache[n] = r
    }
})(typeof exports !== "undefined" ? exports: Hogan);
if (typeof define === "function" && define.amd) {
    define(Hogan)
} (function(e) {
    function n(t) {
        var n = {};
        e("[data-tab]", t).each(function() {
            var i = e(this);
            var s = i.data("tab");
            if (!n[s]) {
                r(t, s, i.data("tab-id"), i.data("tab-active"));
                n[s] = true
            }
        })
    }
    function r(t, n, r, i) {
        if (!n || !r) return;
        var s = i || "active";
        var o = t.find("[data-tab='" + n + "'][data-tab-id='" + r + "']");
        var u = t.find("[data-panel='" + n + "'][data-panel-id='" + r + "']");
        if (o.hasClass(s) && u.is(":visible")) return;
        var a; (a = t.find("[data-tab='" + n + "']")).removeClass(s);
        o.addClass(s);
        t.find("[data-panel='" + n + "']").hide().removeClass("js-transition-after js-transition-before");
        u.addClass("js-transition-before");
        u.show();
        setTimeout(function() {
            u.addClass("js-transition-after")
        },
        20);
        var f = t.find("[data-tab='" + n + "'][data-tab-id='" + r + "']:radio");
        if (f.length) {
            f.attr("checked", "checked")
        }
        e.tabs[n] = r;
        e(e.tabs).trigger(n + "-change", [r, o, u, a])
    }
    e.tabs = {};
    var t = e(document.body);
    e.tabs.changeTab = r;
    e.tabs.init = function(i, s) {
        var o = i || t;
        var s = s || "click";
        n(o);
        o.delegate("[data-tab]", s,
        function(t) {
            var n = e(this).data("tab");
            var i = e(this).data("tab-id");
            var s = e(this).data("tab-active");
            r(o, n, i, s);
            t.stopPropagation()
        })
    }
})(jQuery); (function(e) {
    function i(e) {
        if (typeof e == "string") {
            if (r.test(e)) {
                return parseInt(e, 10)
            }
        }
        return e
    }
    function s(e, t) {
        if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
        if (e.contains && t.nodeType === 1) {
            return e.contains(t) && e !== t
        }
        while (t = t.parentNode) if (t === e) return true;
        return false
    }
    if (!e.bui) {
        e.bui = {}
    }
    var t = {};
    var n = {};
    var r = /^\d+$/;
    jQuery.expr[":"].focus = function(e) {
        return e === document.activeElement && (e.type || e.href)
    };
    e.RegisterUI = function(n, r) {
        if (t[n]) return;
        r = r || {};
        t[n] = function(t) {
            var n = this;
            this.el = t;
            this.$el = e(t);
            this._options = {};
            this._plugins = {};
            e.each(r.propertychange || {},
            function(e, t) {
                n.on(e + "_changed", t)
            });
            e.each(r.properties || {},
            function(e, t) {
                n._options[e] = t
            })
        };
        t[n].prototype = e.extend({
            options: function(t) {
                var n = this;
                e.each(t,
                function(e, t) {
                    n.set(e, t)
                })
            },
            dom: function() {
                return this.el
            },
            plugins: function(e, t) {
                if (t) {
                    this._plugins[e] = t
                } else {
                    return this._plugins[e]
                }
            },
            data: function(e, t) {
                if (arguments.length == 1) {
                    return this.get(e) || this.$el.data(n + "-" + e)
                } else {
                    this.$el.data(n + "-" + e, t);
                    this.set(e, t)
                }
            },
            set: function(t, n, r) {
                n = i(n);
                var s = {
                    name: t,
                    new_value: n,
                    old_value: this.get(t)
                };
                if (r != true) {
                    e(this).trigger(t + "_before_change", [s])
                }
                this._options[t] = s.new_value;
                if (r != true) {
                    e(this).trigger(t + "_changed", [n])
                }
            },
            get: function(e) {
                return this._options[e]
            },
            on: function(t, n) {
                e(this).bind(t, n)
            },
            un: function(t) {
                e(this).unbind(t)
            },
            fire: function() {
                var t = e(this);
                t.trigger.apply(t, Array.prototype.slice.apply(arguments))
            }
        },
        r);
        e.fn[n] = function(r) {
            r = r || {};
            if (e.isPlainObject(r)) {
                return e.each(this,
                function() {
                    var i = e(this).data(n);
                    if (!i) {
                        var s = new t[n](this);
                        e(this).data(n, s);
                        s.options(r);
                        s.initialize()
                    } else {
                        e(this).data(n).options(r)
                    }
                })
            } else if (typeof r == "string") {
                var i = arguments[0];
                var s = Array.prototype.slice.call(arguments, 1);
                var o = e(this).data(n);
                if (e.isFunction(o[i])) {
                    return o[i].apply(o, s)
                }
            }
            return this
        }
    };
    e.RegisterPlugin = function(e, r, i, s) {
        if (!t[e]) {
            alert("not found UI[" + e + "]");
            return
        }
        var o = n[e] = n[e] || {};
        var u = o[r] = o[r] || {};
        u[i] = s
    };
    e.usePlugin = function(t, r) {
        e.each(n[r],
        function(n, r) {
            e.each(r,
            function(e, r) {
                if (t.data(n) === e) {
                    var i = function() {
                        this.ui = t;
                        this.initialize()
                    };
                    i.prototype = r;
                    t.plugins(n, new i)
                }
            })
        })
    };
    var o = e.fn.val;
    jQuery.fn.val = function(t) {
        var n = this[0];
        if (n && n.qcbox) {
            if (t != null) {
                if (e.trim(t) == "") {
                    n.qcbox.showPlaceHolder()
                } else {
                    n.qcbox.hidePlaceHolder()
                }
            }
        }
        return o.apply(this, Array.prototype.slice.apply(arguments))
    };
    e.RegisterUI("qcbox", {
        initialize: function() {
            var t = this;
            var n = this.$el;
            n[0].qcbox = this;
            var r = null;
            var i = this.data("customclass");
            var s = this.$wrap = n.wrap('<div class="qunar-qcbox' + (i ? " " + i: "") + '"></div>').before('<div class="qcbox-placeholder"></div>').before('<div class="qcbox-prefix"></div><div class="qcbox-info"><b /></div>').after('<div class="qcbox-fixed"></div>').parent();
            var o = this.$fixed = s.find(".qcbox-fixed");
            var u = this.$handler = s.find(".qcbox-info b");
            n.addClass("textbox");
            if (this.data("hideicon")) {
                u.hide()
            }
            s.click(function(e) {
                t.fire("qcbox-focus")
            });
            e(document.body).bind("mouseup",
            function(n) {
                if (e(n.target).closest(".qunar-qcbox").length == 0) {
                    t.fire("qcbox-blur")
                }
            });
            s.mouseup(function(e) {
                n.focus()
            });
            n.bind("blur",
            function() {
                t.resetPlaceHolder()
            });
            n.bind("focus",
            function() {
                t.hidePlaceHolder();
                this.select()
            });
            n.keyup(function(e) {
                switch (e.keyCode) {
                case 9:
                    s.find(".qcbox-placeholder").hide();
                    break;
                default:
                    break
                }
            });
            this._resetWidth();
            e.usePlugin(t, "qcbox");
            this._resetHotcity();
            this._resetPlaceHolder()
        },
        _resetHotcity: function() {
            function o() {
                var i = r.$el;
                var s = r.$fixed;
                s.empty();
                t.$hotcity = s.append("<div class='hotcity'><div>").find(".hotcity");
                t.initializeStruct();
                e(t).trigger("hotcity-preshow", [t]);
                t.$hotcity.show();
                n = 1;
                e(t).trigger("hotcity-show")
            }
            function u() {
                if (typeof t == "undefined" || !t.$hotcity) return;
                t.$hotcity.hide();
                n = 0;
                e(t).trigger("hotcity-hide")
            }
            var t = this.plugins("hotcity");
            if (!t) return;
            var n = 0;
            var r = this;
            var i = this.$el;
            var s = this.$wrap;
            t.attachedEl = t.attachedEl || new e;
            this.$el.keydown(function(e) {
                u()
            });
            t.attachedEl = t.attachedEl.add(s.find(".qcbox-info > b , .qcbox-info")).add(s.find(".qcbox-info > b , .qcbox-info > .qcbox-text ").add(s.find(".qcbox-placeholder")));
            e(document).bind("mouseup",
            function(n) {
                var r;
                if (i[0] === n.target && (r = 1) || ~t.attachedEl.index(n.target) && (r = 2)) {
                    if (!t.$hotcity || !t.$hotcity.is(":visible")) {
                        o()
                    } else {
                        u()
                    }
                    if (r == 2) i.focus();
                    return
                }
                if (!e(n.target).data("hotcity-nogo") && e(n.target).parents("[data-hotcity-nogo]").length == 0) u()
            });
            t.showHotcity = o;
            t.hideHotcity = u
        },
        _resetPlaceHolder: function() {
            function r() {
                var n = t.$el.val();
                if (e.trim(n) == "") {
                    i()
                } else {
                    s()
                }
            }
            function i() {
                n.text(t.data("placeholder"));
                n.show()
            }
            function s() {
                n.hide()
            }
            var t = this;
            var n = this.$wrap.find(".qcbox-placeholder");
            r();
            this.showPlaceHolder = i;
            this.hidePlaceHolder = s;
            this.resetPlaceHolder = r
        },
        _resetWidth: function() {
            var e = this.$el;
            var t = this.$wrap;
            var n = this.data("prefix");
            if (n) {
                t.find(".qcbox-prefix").text(n);
                e.css({
                    left: t.find(".qcbox-prefix").outerWidth(true) + "px"
                })
            } else {
                t.find(".qcbox-prefix").remove()
            }
            t.find(".qcbox-placeholder").css({
                width: e.width(),
                left: e.css("left"),
                "padding-left": e.css("padding-left"),
                height: e.height(),
                "line-height": e.height() + "px"
            })
        }
    })
})(jQuery); (function(e) {
    function s(e) {
        var t = e.offset();
        t["top"] += e.outerHeight();
        return t
    }
    function o(e) {
        return e.closest("table").data("data")[e.attr("data-ind") * 1]
    }
    function u(e) {
        var t = this;
        var n = t.visible();
        var r = e.keyCode;
        if (r === 40 && !n) {
            t.show();
            return
        }
        var i = t.el.find("tr");
        var s = i.filter(".active");
        switch (r) {
        case 38:
        case 40:
            if (n) {
                t._excludeEl = t._mouseFocus;
                s.removeClass("active");
                var u = e.keyCode === 38 ? s.prev() : s.next();
                if (u.size() === 0) u = i.filter(r === 38 ? ":last": ":first");
                var a = t.args.getData || o;
                var f = a(u);
                t.setValue(f);
                u.addClass("active");
                e.preventDefault();
                t._trigger("q-suggest-user-action", [e.type, f, r])
            }
            break;
        case 13:
        case 27:
            if (n) {
                t.hide();
                t._trigger("q-suggest-user-action", [e.type, t.getValue(), r])
            }
            break;
        case 18:
        case 9:
            break;
        default:
        }
    }
    function a(e, t) {
        if (!this.init) return new qsuggest(e, t);
        else return this.init(e, t)
    }
    var t = function() {
        var t = "data-detect-oninput",
        n = {},
        r = {},
        i = 1,
        s = 1;
        var o = function(t, r, i, s) {
            e(t).on(r, i); (n[s] || (n[s] = [])).push({
                t: r,
                h: i
            })
        };
        var u = function(e, t) {
            if (!n[t]) return;
            for (var r = 0,
            i; i = n[t][r]; r++) if (e.removeEventListener) e.removeEventListener(i["t"], i["h"], false);
            else if (e.detachEvent) e.detachEvent("on" + i["t"], i["h"]);
            delete n[t]
        };
        var a = function(e, t) {
            var n = e.value;
            var r = function() {
                var i;
                if ((i = e.value) !== n) {
                    if (r._sleep !== true) t.call(e, i, n);
                    n = e.value
                }
            };
            return r
        };
        var f = navigator.userAgent.toLowerCase();
        return {
            version: "1.3",
            bind: function(e, n) {
                var u, f = n[t];
                if (!f) n[t] = f = i++;
                if (! (u = e.getAttribute(t))) e.setAttribute(t, u = "" + s++);
                var l = a(e, n);
                o(e, "keyup", l, f);
                r[f] = {
                    eid: u,
                    checker: l
                };
                return e
            },
            unbind: function(e, n) {
                if (n[t]) {
                    u(e, n[t]);
                    delete r[n[t]]
                }
                return e
            },
            set: function(e, n) {
                var i = e.getAttribute(t);
                if (i) {
                    var s = [];
                    for (var o in r) if (r[o]["eid"] === i) {
                        s.push(r[o]["checker"]);
                        r[o]["checker"]._sleep = true
                    }
                    e.value = n;
                    for (var u = 0,
                    a = s.length; u < a; u++) {
                        s[u].call(e);
                        s[u]._sleep = false
                    }
                } else e.value = n
            }
        }
    } ();
    e.qsuggest = {
        version: "1.2"
    };
    var n = e.qsuggest.ROOT_KEY = "q-suggest";
    var r = 0;
    var i = {
        ajax: {
            url: null,
            cache: false,
            success: function() {}
        },
        reader: function(e) {
            return e
        },
        loader: function(e) {
            return e
        },
        max: 10,
        min: 1,
        container: null,
        delay: 100,
        rdelay: 1e3,
        requestWithNothing: false,
        trimQuery: true,
        autoSelect: true,
        css: {
            "z-index": 500
        },
        setValue: function(e) {
            return e
        },
        render: function(e) {
            return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        },
        exattr: function(e) {
            return e
        }
    };
    e.extend(a.prototype, {
        init: function(s, a) {
            this.key = ++r;
            var f = this.ns = n + this.key;
            a = this.args = e.extend(true, {},
            i, a || {});
            var l = this.activeEl = e(s);
            var c = this;
            this.el = e('<div class="' + n + (a.customClass ? " " + a.customClass: "") + '"></div>').appendTo(a["container"] || document.body).hide();
            this.el.data(n, this);
            this._handler = null;
            this._ajaxHandler = null;
            this._excludeEl = null;
            this._mouseFocus = null;
            this._last = [];
            this._cache = {};
            this._value = null;
            e.each(a["on"] || {},
            function(e, t) {
                l.bind(e + "." + f, t)
            });
            if (a["css"]) this.el.css(c.args["css"]);
            var c = this;
            var h = false;
            l.bind("keydown." + f,
            function(e) {
                var t = e.keyCode;
                if (t >= 229) {
                    h = true
                }
            });
            t.bind(l[0],
            function() {
                c._trigger("q-suggest-inputChange");
                c.show()
            });
            l.bind("keydown." + f,
            function(e) {
                if (h) {
                    h = false;
                    return
                }
                var t = c.args.keyevent || u;
                t.call(c, e);
                h = false
            });
            l.bind("blur." + f,
            function(e) {
                if (c.visible()) {
                    var t = c.el.find(a.ACT_CLASS || "tr.active");
                    if (t.length > 0) {
                        var n = c.args.getData || o;
                        if (c.args.autoSelect) {
                            var r = n(t);
                            r && c.setValue(r)
                        }
                    } else {
                        c._trigger("q-suggest-noresult", [l])
                    }
                    c.hide()
                }
            });
            e("tr", this.el[0]).live("mouseover." + f + " mouseout." + f + " mousedown." + f,
            function(t) {
                var n = e.nodeName(t.target, "tr") ? e(t.target) : e(t.target).parents("tr").eq(0);
                if (e(n[0]).attr("data-sug_type") == 1) {
                    t.preventDefault();
                    return
                }
                var r = n[0] != c._excludeEl;
                if (t.type === "mouseover") {
                    if (r) {
                        n.parents().children().removeClass("active");
                        n.addClass("active");
                        c._excludeEl = null
                    }
                    c._mouseFocus = n[0]
                } else if (t.type === "mouseout") {
                    c._mouseFocus = null
                } else {
                    var i = c.args.getData || o;
                    c.setValue(i(n));
                    c.hide();
                    c._trigger("q-suggest-user-action", [t.type, c.getValue(), n.index(), null])
                }
            });
            this._trigger("q-suggest-init", [this]);
            return this
        },
        req: function() {
            var t = this;
            if (t._handler) clearTimeout(t._handler);
            if (t._timeoutHandler) {
                clearTimeout(t._timeoutHandler);
                t._timeoutHandler = null
            }
            if (t._ajaxHandler) {
                t._ajaxHandler = null
            }
            t._handler = setTimeout(function() {
                var n = t.activeEl.val(),
                r = t.args.loader(n),
                i = null,
                s;
                var o = function() { (t.args.draw || t.draw).apply(t, [].slice.call(arguments))
                };
                if (t.args.trimQuery) r = e.trim(r);
                if (!r && !t.args.requestWithNothing) {
                    o(null);
                    return
                }
                if (t._last && t._last[0] === r) {
                    o(t._last[1]);
                    return
                }
                if (t._last && t._last[0] == r) i = t._last;
                else if (t.args.cache && t._cache[r]) i = t._cache[r];
                var u = typeof t.args.ajax.url == "function" ? t.args.ajax.url() : t.args.ajax.url;
                if (i) o((t._last = i)[1]);
                else if (!u) o(null);
                else {
                    u = u.replace(/\*([^*]+)$/, encodeURIComponent(r) + "$1");
                    var a = t.args.ajax.success;
                    t._timeoutHandler = setTimeout(function() {
                        t.hide()
                    },
                    t.args.rdelay);
                    t._ajaxHandler = e.ajax(e.extend({},
                    t.args.ajax, {
                        url: u,
                        success: function(e, i) {
                            clearTimeout(t._timeoutHandler);
                            t._timeoutHandler = null;
                            t._ajaxHandler = null;
                            if (n !== t.activeEl.val()) return;
                            var s = t.args.reader.call(t, e, i);
                            if (t.type(s) === "Array") {
                                o(s, e);
                                t._last = t._cache[r] = [r, s, i]
                            }
                            a.apply(this, arguments)
                        }
                    }))
                }
            },
            t.args.delay)
        },
        type: function(e) {
            return Object.prototype.toString.call(e).slice(8, -1)
        },
        show: function() {
            this.req()
        },
        hide: function() {
            if (this.visible()) {
                this.el.hide();
                this._trigger("q-suggest-hide")
            }
        },
        draw: function(t, n) {
            this.el.empty();
            var r = this.args.min,
            i = this.args.max,
            o = t ? t.length: 0;
            if (!t || !o || o < r) {
                this.hide();
                return
            }
            var u = t[0].country;
            var a = {
                country: "中国",
                txt: "所有地点",
                val: "所有地点",
                type: 0
            };
            var f = {
                country: u,
                txt: u,
                val: u,
                type: 0
            };
            if (this.args.allPlace && t[o - 1].val != a.val) {
                t.push(a)
            }
            var l = [],
            c = this.args.render,
            h = this.args.exattr,
            p = true;
            l.push('<table cellspacing="0" cellpadding="2"><tbody>');
            e.each(t,
            function(e, t) {
                if (e >= i) return false;
                var n = "";
                if (t.type !== 1 && p) {
                    p = false;
                    n = ' class="active'
                }
                if (t.exClass) {
                    n = n ? n + " " + t.exClass + '" ': ' class="' + t.exClass + '" '
                } else {
                    n = n ? n + '" ': ""
                }
                l.push("<tr", n, ' data-ind="', e, '" ', h(t), "><td>", c(t), "</td></tr>")
            });
            l.push("</tbody></table>");
            this._trigger("q-suggest-beforeshow", [this.el, n]);
            var d = e(l.join("")).appendTo(this.el).data("data", t);
            if (!this.args["container"]) this.el.css(s(this.activeEl));
            this.el.show();
            this._trigger("q-suggest-show", [t])
        },
        dispose: function() {
            this._trigger("q-suggest-dispose");
            this.activeEl.unbind("." + this.ns);
            e(window).unbind("." + this.ns);
            this.el.remove()
        },
        visible: function() {
            return this.el.is(":visible")
        },
        _trigger: function() {
            this.activeEl.triggerHandler.apply(this.activeEl, arguments)
        },
        setValue: function(e) {
            if (typeof e == "object" && typeof e.val == "string") t.set(this.activeEl[0], e.val);
            else t.set(this.activeEl[0], e);
            this._value = e;
            this._setExtData();
            this._trigger("q-suggest-setvalue", [e, this.activeEl])
        },
        _setExtData: function() {
            var e = this.args.getExtData ? this.args.getExtData(this.el.find("tr.active")) : {};
            this._trigger("q-suggest-setextdata", [e, this.activeEl])
        },
        getValue: function() {
            return this._value
        },
        set: function(e, t) {
            var n = false;
            switch (e) {
            case "container":
                this.el.appendTo(t || document.body);
                this.el.css({
                    top: "",
                    left: ""
                });
                break
            }
            if (!n) for (var r = 0,
            i = e.split("."), s = i.length, o = this.args; r < s && (r !== s - 1 && (o[i[r]] || (o[i[r]] = {})) || (o[i[r]] = t)); o = o[i[r]], r++) {}
            return t
        },
        get: function(e) {
            for (var t = 0,
            n = this.args,
            r = e.split("."), i = r.length; t < i && (n = n[r[t]]); t++) {}
            return n
        }
    });
    e.fn.qsuggest = function() {
        var t = arguments;
        if (arguments.length > 1 && this.data(n)) {
            var r = null;
            if (arguments[0] === "option" || arguments[0] === "setting") this.each(function(i, s) {
                var o = e(s);
                var u = this.data(n);
                if (u) r = r || (t.length > 2 ? u.set(t[1], t[2]) : u.get(t[1]))
            });
            return r
        } else if (arguments.length <= 1) {
            this.each(function(r, i) {
                var s = e(i);
                if (s.data(n)) {
                    s.data(n).dispose();
                    s.removeData(n)
                }
                var o = new a(i, t[0]);
                s.data(n, o)
            })
        }
        return this
    }
})(jQuery);
if (typeof QNR == "undefined") QNR = {};
QNR.countryCodeData = {};
QNR.countryCodeData.tabs = [{
    title: "热门",
    key: "hot"
},
{
    title: "A",
    key: "A"
},
{
    title: "B",
    key: "B"
},
{
    title: "C",
    key: "C"
},
{
    title: "D",
    key: "D"
},
{
    title: "E",
    key: "E"
},
{
    title: "F",
    key: "F"
},
{
    title: "G",
    key: "G"
},
{
    title: "H",
    key: "H"
},
{
    title: "J",
    key: "J"
},
{
    title: "K",
    key: "K"
},
{
    title: "L",
    key: "L"
},
{
    title: "M",
    key: "M"
},
{
    title: "N",
    key: "N"
},
{
    title: "P",
    key: "P"
},
{
    title: "R",
    key: "R"
},
{
    title: "S",
    key: "S"
},
{
    title: "T",
    key: "T"
},
{
    title: "W",
    key: "W"
},
{
    title: "X",
    key: "X"
},
{
    title: "Y",
    key: "Y"
},
{
    title: "Z",
    key: "Z"
}];
QNR.countryCodeData.groups = {
    AB: {
        charSort: true,
        group: [{
            "char": "A",
            list: [{
                code: 20,
                zh: "埃及",
                en_short: "EG",
                py: "AiJi",
                py_short: "AJ",
                en: "Egypt",
                zh_disp: "埃及",
                en_disp: "Egypt"
            },
            {
                code: 251,
                zh: "埃塞俄比亚",
                en_short: "ET",
                py: "AiSaiEBiYa",
                py_short: "ASEBY",
                en: "Ethiopia",
                zh_disp: "埃塞俄比亚",
                en_disp: "Ethiopia"
            },
            {
                code: 358,
                zh: "奥兰群岛",
                en_short: "AX",
                py: "AoLanQunDao",
                py_short: "ALQD",
                en: "Aland Islands",
                zh_disp: "奥兰群岛",
                en_disp: "Aland Is..."
            },
            {
                code: 43,
                zh: "奥地利",
                en_short: "AT",
                py: "AoDiLi",
                py_short: "ADL",
                en: "Austria",
                zh_disp: "奥地利",
                en_disp: "Austria"
            },
            {
                code: 244,
                zh: "安哥拉",
                en_short: "AO",
                py: "AnGeLa",
                py_short: "AGL",
                en: "Angola",
                zh_disp: "安哥拉",
                en_disp: "Angola"
            },
            {
                code: 1,
                zh: "安圭拉",
                en_short: "AI",
                py: "AnGuiLa",
                py_short: "AGL",
                en: "Anguilla",
                zh_disp: "安圭拉",
                en_disp: "Anguilla"
            },
            {
                code: 1,
                zh: "安提瓜和巴布达",
                en_short: "AG",
                py: "AnTiGuaHeBaBuDa",
                py_short: "ATGHBBD",
                en: "Antigua and Barbuda",
                zh_disp: "安提瓜和...",
                en_disp: "Antigua ..."
            },
            {
                code: 376,
                zh: "安道尔",
                en_short: "AD",
                py: "AnDaoEr",
                py_short: "ADE",
                en: "Andorra",
                zh_disp: "安道尔",
                en_disp: "Andorra"
            },
            {
                code: 61,
                zh: "澳大利亚",
                en_short: "AU",
                py: "AoDaLiYa",
                py_short: "ADLY",
                en: "Australia",
                zh_disp: "澳大利亚",
                en_disp: "Australia"
            },
            {
                code: 853,
                zh: "澳门",
                en_short: "MO",
                py: "AoMen",
                py_short: "AM",
                en: "Macao",
                zh_disp: "澳门",
                en_disp: "Macao"
            },
            {
                code: 353,
                zh: "爱尔兰",
                en_short: "IE",
                py: "AiErLan",
                py_short: "AEL",
                en: "Ireland",
                zh_disp: "爱尔兰",
                en_disp: "Ireland"
            },
            {
                code: 372,
                zh: "爱沙尼亚",
                en_short: "EE",
                py: "AiShaNiYa",
                py_short: "ASNY",
                en: "Estonia",
                zh_disp: "爱沙尼亚",
                en_disp: "Estonia"
            },
            {
                code: 994,
                zh: "阿塞拜疆",
                en_short: "AZ",
                py: "ASaiBaiJiang",
                py_short: "ASBJ",
                en: "Azerbaijan",
                zh_disp: "阿塞拜疆",
                en_disp: "Azerbaijan"
            },
            {
                code: 93,
                zh: "阿富汗",
                en_short: "AF",
                py: "AFuHan",
                py_short: "AFH",
                en: "Afghanistan",
                zh_disp: "阿富汗",
                en_disp: "Afghanis..."
            },
            {
                code: 213,
                zh: "阿尔及利亚",
                en_short: "DZ",
                py: "AErJiLiYa",
                py_short: "AEJLY",
                en: "Algeria",
                zh_disp: "阿尔及利亚",
                en_disp: "Algeria"
            },
            {
                code: 355,
                zh: "阿尔巴尼亚",
                en_short: "AL",
                py: "AErBaNiYa",
                py_short: "AEBNY",
                en: "Albania",
                zh_disp: "阿尔巴尼亚",
                en_disp: "Albania"
            },
            {
                code: 971,
                zh: "阿拉伯联合酋长国",
                en_short: "AE",
                py: "ALaBoLianHeQiuChangGuo",
                py_short: "ALBLHQCG",
                en: "Arabia",
                zh_disp: "阿拉伯联...",
                en_disp: "Arabia"
            },
            {
                code: 968,
                zh: "阿曼",
                en_short: "OM",
                py: "AMan",
                py_short: "AM",
                en: "Oman",
                zh_disp: "阿曼",
                en_disp: "Oman"
            },
            {
                code: 54,
                zh: "阿根廷",
                en_short: "AR",
                py: "AGenTing",
                py_short: "AGT",
                en: "Argentina",
                zh_disp: "阿根廷",
                en_disp: "Argentina"
            },
            {
                code: 247,
                zh: "阿森松岛",
                en_short: "AC",
                py: "ASenSongDao",
                py_short: "ASSD",
                en: "Ascension Island",
                zh_disp: "阿森松岛",
                en_disp: "Ascensio..."
            },
            {
                code: 297,
                zh: "阿鲁巴",
                en_short: "AW",
                py: "ALuBa",
                py_short: "ALB",
                en: "Aruba",
                zh_disp: "阿鲁巴",
                en_disp: "Aruba"
            }]
        },
        {
            "char": "B",
            list: [{
                code: 975,
                zh: "不丹",
                en_short: "BT",
                py: "BuDan",
                py_short: "BD",
                en: "Bhutan",
                zh_disp: "不丹",
                en_disp: "Bhutan"
            },
            {
                code: 501,
                zh: "伯利兹",
                en_short: "BZ",
                py: "BoLiZi",
                py_short: "BLZ",
                en: "Belize",
                zh_disp: "伯利兹",
                en_disp: "Belize"
            },
            {
                code: 359,
                zh: "保加利亚",
                en_short: "BG",
                py: "BaoJiaLiYa",
                py_short: "BJLY",
                en: "Bulgaria",
                zh_disp: "保加利亚",
                en_disp: "Bulgaria"
            },
            {
                code: 354,
                zh: "冰岛",
                en_short: "IS",
                py: "BingDao",
                py_short: "BD",
                en: "Iceland",
                zh_disp: "冰岛",
                en_disp: "Iceland"
            },
            {
                code: 1,
                zh: "北马里亚纳群岛",
                en_short: "MP",
                py: "BeiMaLiYaNaQunDao",
                py_short: "BMLYNQD",
                en: "Northern Mariana Islands",
                zh_disp: "北马里亚...",
                en_disp: "Northern..."
            },
            {
                code: 267,
                zh: "博茨瓦纳",
                en_short: "BW",
                py: "BoCiWaNa",
                py_short: "BCWN",
                en: "Botswana",
                zh_disp: "博茨瓦纳",
                en_disp: "Botswana"
            },
            {
                code: 970,
                zh: "巴勒斯坦",
                en_short: "PS",
                py: "BaLeSiTan",
                py_short: "BLST",
                en: "Palestinian",
                zh_disp: "巴勒斯坦",
                en_disp: "Palestin..."
            },
            {
                code: 1,
                zh: "巴哈马",
                en_short: "BS",
                py: "BaHaMa",
                py_short: "BHM",
                en: "Bahamas",
                zh_disp: "巴哈马",
                en_disp: "Bahamas"
            },
            {
                code: 92,
                zh: "巴基斯坦",
                en_short: "PK",
                py: "BaJiSiTan",
                py_short: "BJST",
                en: "Pakistan",
                zh_disp: "巴基斯坦",
                en_disp: "Pakistan"
            },
            {
                code: 1,
                zh: "巴巴多斯",
                en_short: "BB",
                py: "BaBaDuoSi",
                py_short: "BBDS",
                en: "Barbados",
                zh_disp: "巴巴多斯",
                en_disp: "Barbados"
            },
            {
                code: 675,
                zh: "巴布亚新几内亚",
                en_short: "PG",
                py: "BaBuYaXinJiNaYa",
                py_short: "BBYXJNY",
                en: "Papua New Guinea",
                zh_disp: "巴布亚新...",
                en_disp: "Papua Ne..."
            },
            {
                code: 595,
                zh: "巴拉圭",
                en_short: "PY",
                py: "BaLaGui",
                py_short: "BLG",
                en: "Paraguay",
                zh_disp: "巴拉圭",
                en_disp: "Paraguay"
            },
            {
                code: 507,
                zh: "巴拿马",
                en_short: "PA",
                py: "BaNaMa",
                py_short: "BNM",
                en: "Panama",
                zh_disp: "巴拿马",
                en_disp: "Panama"
            },
            {
                code: 973,
                zh: "巴林",
                en_short: "BH",
                py: "BaLin",
                py_short: "BL",
                en: "Bahrain",
                zh_disp: "巴林",
                en_disp: "Bahrain"
            },
            {
                code: 55,
                zh: "巴西",
                en_short: "BR",
                py: "BaXi",
                py_short: "BX",
                en: "Brazil",
                zh_disp: "巴西",
                en_disp: "Brazil"
            },
            {
                code: 226,
                zh: "布基纳法索",
                en_short: "BF",
                py: "BuJiNaFaSuo",
                py_short: "BJNFS",
                en: "Burkina Faso",
                zh_disp: "布基纳法索",
                en_disp: "Burkina ..."
            },
            {
                code: 257,
                zh: "布隆迪",
                en_short: "BI",
                py: "BuLongDi",
                py_short: "BLD",
                en: "Burundi",
                zh_disp: "布隆迪",
                en_disp: "Burundi"
            },
            {
                code: 32,
                zh: "比利时",
                en_short: "BE",
                py: "BiLiShi",
                py_short: "BLS",
                en: "Belgium",
                zh_disp: "比利时",
                en_disp: "Belgium"
            },
            {
                code: 48,
                zh: "波兰",
                en_short: "PL",
                py: "BoLan",
                py_short: "BL",
                en: "Poland",
                zh_disp: "波兰",
                en_disp: "Poland"
            },
            {
                code: 1,
                zh: "波多黎各",
                en_short: "PR",
                py: "BoDuoLiGe",
                py_short: "BDLG",
                en: "Puerto Rico",
                zh_disp: "波多黎各",
                en_disp: "Puerto R..."
            },
            {
                code: 387,
                zh: "波斯尼亚和黑塞哥维那",
                en_short: "BA",
                py: "BoSiNiYaHeHeiSaiGeWeiNa",
                py_short: "BSNYHHSGWN",
                en: "Bosnia and Herzegovina",
                zh_disp: "波斯尼亚...",
                en_disp: "Bosnia a..."
            },
            {
                code: 591,
                zh: "玻利维亚",
                en_short: "BO",
                py: "BoLiWeiYa",
                py_short: "BLWY",
                en: "Bolivia",
                zh_disp: "玻利维亚",
                en_disp: "Bolivia"
            },
            {
                code: 375,
                zh: "白俄罗斯",
                en_short: "BY",
                py: "BaiELuoSi",
                py_short: "BELS",
                en: "Belarus",
                zh_disp: "白俄罗斯",
                en_disp: "Belarus"
            },
            {
                code: 1,
                zh: "百慕大",
                en_short: "BM",
                py: "BaiMuDa",
                py_short: "BMD",
                en: "Bermuda",
                zh_disp: "百慕大",
                en_disp: "Bermuda"
            },
            {
                code: 229,
                zh: "贝宁",
                en_short: "BJ",
                py: "BeiNing",
                py_short: "BN",
                en: "Benin",
                zh_disp: "贝宁",
                en_disp: "Benin"
            }]
        }]
    },
    CDE: {
        charSort: true,
        group: [{
            "char": "C",
            list: [{
                code: 850,
                zh: "朝鲜",
                en_short: "KP",
                py: "ChaoXian",
                py_short: "CX",
                en: "North Korea",
                zh_disp: "朝鲜",
                en_disp: "North Ko..."
            },
            {
                code: 240,
                zh: "赤道几内亚",
                en_short: "GQ",
                py: "ChiDaoJiNaYa",
                py_short: "CDJNY",
                en: "Guinea Ecuatorial",
                zh_disp: "赤道几内亚",
                en_disp: "Guinea E..."
            }]
        },
        {
            "char": "D",
            list: [{
                code: 670,
                zh: "东帝汶",
                en_short: "TL",
                py: "DongDiWen",
                py_short: "DDW",
                en: "Timor-Leste",
                zh_disp: "东帝汶",
                en_disp: "Timor-Le..."
            },
            {
                code: 45,
                zh: "丹麦",
                en_short: "DK",
                py: "DanMai",
                py_short: "DM",
                en: "Danmark",
                zh_disp: "丹麦",
                en_disp: "Danmark"
            },
            {
                code: 228,
                zh: "多哥",
                en_short: "TG",
                py: "DuoGe",
                py_short: "DG",
                en: "Togo",
                zh_disp: "多哥",
                en_disp: "Togo"
            },
            {
                code: 1,
                zh: "多米尼克",
                en_short: "DM",
                py: "DuoMiNiKe",
                py_short: "DMNK",
                en: "Dominica",
                zh_disp: "多米尼克",
                en_disp: "Dominica"
            },
            {
                code: 1,
                zh: "多米尼加共和国",
                en_short: "DO",
                py: "DuoMiNiJiaGongHeGuo",
                py_short: "DMNJGHG",
                en: "Dominican Republic",
                zh_disp: "多米尼加...",
                en_disp: "Dominica..."
            },
            {
                code: 49,
                zh: "德国",
                en_short: "DE",
                py: "DeGuo",
                py_short: "DG",
                en: "Germany",
                zh_disp: "德国",
                en_disp: "Germany"
            }]
        },
        {
            "char": "E",
            list: [{
                code: 7,
                zh: "俄罗斯",
                en_short: "RU",
                py: "ELuoSi",
                py_short: "ELS",
                en: "Russia",
                zh_disp: "俄罗斯",
                en_disp: "Russia"
            },
            {
                code: 593,
                zh: "厄瓜多尔",
                en_short: "EC",
                py: "EGuaDuoEr",
                py_short: "EGDE",
                en: "Ecuador",
                zh_disp: "厄瓜多尔",
                en_disp: "Ecuador"
            },
            {
                code: 291,
                zh: "厄立特里亚",
                en_short: "ER",
                py: "ELiTeLiYa",
                py_short: "ELTLY",
                en: "Eritrea",
                zh_disp: "厄立特里亚",
                en_disp: "Eritrea"
            }]
        }]
    },
    FGH: {
        charSort: true,
        group: [{
            "char": "F",
            list: [{
                code: 238,
                zh: "佛得角",
                en_short: "CV",
                py: "FuDeJiao",
                py_short: "FDJ",
                en: "Cape Verde",
                zh_disp: "佛得角",
                en_disp: "Cape Verde"
            },
            {
                code: 679,
                zh: "斐济",
                en_short: "FJ",
                py: "FeiJi",
                py_short: "FJ",
                en: "Fiji",
                zh_disp: "斐济",
                en_disp: "Fiji"
            },
            {
                code: 379,
                zh: "梵蒂冈",
                en_short: "VA",
                py: "FanDiGang",
                py_short: "FDG",
                en: "Vatican",
                zh_disp: "梵蒂冈",
                en_disp: "Vatican"
            },
            {
                code: 33,
                zh: "法国",
                en_short: "FR",
                py: "FaGuo",
                py_short: "FG",
                en: "France",
                zh_disp: "法国",
                en_disp: "France"
            },
            {
                code: 590,
                zh: "法属圣马丁",
                en_short: "MF",
                py: "FaShuShengMaDing",
                py_short: "FSSMD",
                en: "Saint-Martin",
                zh_disp: "法属圣马丁",
                en_disp: "Saint-Ma..."
            },
            {
                code: 594,
                zh: "法属圭亚那",
                en_short: "GF",
                py: "FaShuGuiYaNa",
                py_short: "FSGYN",
                en: "French Guiana",
                zh_disp: "法属圭亚那",
                en_disp: "French G..."
            },
            {
                code: 689,
                zh: "法属波利尼西亚",
                en_short: "PF",
                py: "FaShuBoLiNiXiYa",
                py_short: "FSBLNXY",
                en: "French Polynesia",
                zh_disp: "法属波利...",
                en_disp: "French P..."
            },
            {
                code: 298,
                zh: "法罗群岛",
                en_short: "FO",
                py: "FaLuoQunDao",
                py_short: "FLQD",
                en: "Faroe Islands",
                zh_disp: "法罗群岛",
                en_disp: "Faroe Is..."
            },
            {
                code: 500,
                zh: "福克兰群岛",
                en_short: "FK",
                py: "FuKeLanQunDao",
                py_short: "FKLQD",
                en: "Falkland Islands",
                zh_disp: "福克兰群岛",
                en_disp: "Falkland..."
            },
            {
                code: 358,
                zh: "芬兰",
                en_short: "FI",
                py: "FenLan",
                py_short: "FL",
                en: "Finland",
                zh_disp: "芬兰",
                en_disp: "Finland"
            },
            {
                code: 63,
                zh: "菲律宾",
                en_short: "PH",
                py: "FeiLvBin",
                py_short: "FLB",
                en: "Philippines",
                zh_disp: "菲律宾",
                en_disp: "Philippi..."
            }]
        },
        {
            "char": "G",
            list: [{
                code: 1,
                zh: "关岛",
                en_short: "GU",
                py: "GuanDao",
                py_short: "GD",
                en: "Guam",
                zh_disp: "关岛",
                en_disp: "Guam"
            },
            {
                code: 220,
                zh: "冈比亚",
                en_short: "GM",
                py: "GangBiYa",
                py_short: "GBY",
                en: "Gambia",
                zh_disp: "冈比亚",
                en_disp: "Gambia"
            },
            {
                code: 242,
                zh: "刚果（布）",
                en_short: "CG",
                py: "GangGuoBu",
                py_short: "GGB",
                en: "Congo (cloth)",
                zh_disp: "刚果（布）",
                en_disp: "Congo (c..."
            },
            {
                code: 243,
                zh: "刚果（金）",
                en_short: "CD",
                py: "GangGuoJin",
                py_short: "GGJ",
                en: "Congo (gold)",
                zh_disp: "刚果（金）",
                en_disp: "Congo (g..."
            },
            {
                code: 53,
                zh: "古巴",
                en_short: "CU",
                py: "GuBa",
                py_short: "GB",
                en: "Cuba",
                zh_disp: "古巴",
                en_disp: "Cuba"
            },
            {
                code: 57,
                zh: "哥伦比亚",
                en_short: "CO",
                py: "GeLunBiYa",
                py_short: "GLBY",
                en: "Columbia",
                zh_disp: "哥伦比亚",
                en_disp: "Columbia"
            },
            {
                code: 506,
                zh: "哥斯达黎加",
                en_short: "CR",
                py: "GeSiDaLiJia",
                py_short: "GSDLJ",
                en: "Costa Rica",
                zh_disp: "哥斯达黎加",
                en_disp: "Costa Rica"
            },
            {
                code: 592,
                zh: "圭亚那",
                en_short: "GY",
                py: "GuiYaNa",
                py_short: "GYN",
                en: "Guyana",
                zh_disp: "圭亚那",
                en_disp: "Guyana"
            },
            {
                code: 44,
                zh: "根西岛",
                en_short: "GG",
                py: "GenXiDao",
                py_short: "GXD",
                en: "Guernsey",
                zh_disp: "根西岛",
                en_disp: "Guernsey"
            },
            {
                code: 1,
                zh: "格林纳达",
                en_short: "GD",
                py: "GeLinNaDa",
                py_short: "GLND",
                en: "Grenada",
                zh_disp: "格林纳达",
                en_disp: "Grenada"
            },
            {
                code: 299,
                zh: "格陵兰",
                en_short: "GL",
                py: "GeLingLan",
                py_short: "GLL",
                en: "Greenland",
                zh_disp: "格陵兰",
                en_disp: "Greenland"
            },
            {
                code: 995,
                zh: "格鲁吉亚",
                en_short: "GE",
                py: "GeLuJiYa",
                py_short: "GLJY",
                en: "Georgia",
                zh_disp: "格鲁吉亚",
                en_disp: "Georgia"
            },
            {
                code: 590,
                zh: "瓜德罗普岛",
                en_short: "GP",
                py: "GuaDeLuoPuDao",
                py_short: "GDLPD",
                en: "Guadeloupe",
                zh_disp: "瓜德罗普岛",
                en_disp: "Guadeloupe"
            }]
        },
        {
            "char": "H",
            list: [{
                code: 7,
                zh: "哈萨克斯坦",
                en_short: "KZ",
                py: "HaSaKeSiTan",
                py_short: "HSKST",
                en: "Kazakhstan",
                zh_disp: "哈萨克斯坦",
                en_disp: "Kazakhstan"
            },
            {
                code: 504,
                zh: "洪都拉斯",
                en_short: "HN",
                py: "HongDuLaSi",
                py_short: "HDLS",
                en: "Honduras",
                zh_disp: "洪都拉斯",
                en_disp: "Honduras"
            },
            {
                code: 509,
                zh: "海地",
                en_short: "HT",
                py: "HaiDi",
                py_short: "HD",
                en: "Haiti",
                zh_disp: "海地",
                en_disp: "Haiti"
            },
            {
                code: 31,
                zh: "荷兰",
                en_short: "NL",
                py: "HeLan",
                py_short: "HL",
                en: "Nederland",
                zh_disp: "荷兰",
                en_disp: "Nederland"
            },
            {
                code: 599,
                zh: "荷兰加勒比",
                en_short: "BQ",
                py: "HeLanJiaLeBi",
                py_short: "HLJLB",
                en: "Caribbean Netherlands",
                zh_disp: "荷兰加勒比",
                en_disp: "Caribbea..."
            },
            {
                code: 1,
                zh: "荷属圣马丁",
                en_short: "SX",
                py: "HeShuShengMaDing",
                py_short: "HSSMD",
                en: "Sint Maarten",
                zh_disp: "荷属圣马丁",
                en_disp: "Sint Maa..."
            },
            {
                code: 82,
                zh: "韩国",
                en_short: "KR",
                py: "HanGuo",
                py_short: "HG",
                en: "Korea",
                zh_disp: "韩国",
                en_disp: "Korea"
            },
            {
                code: 382,
                zh: "黑山共和国",
                en_short: "ME",
                py: "HeiShanGongHeGuo",
                py_short: "HSGHG",
                en: "Montenegro",
                zh_disp: "黑山共和国",
                en_disp: "Montenegro"
            }]
        }]
    },
    KLM: {
        charSort: true,
        group: [{
            "char": "K",
            list: [{
                code: 385,
                zh: "克罗地亚",
                en_short: "HR",
                py: "KeLuoDiYa",
                py_short: "KLDY",
                en: "Croatia",
                zh_disp: "克罗地亚",
                en_disp: "Croatia"
            },
            {
                code: 974,
                zh: "卡塔尔",
                en_short: "QA",
                py: "KaTaEr",
                py_short: "KTE",
                en: "Qatar",
                zh_disp: "卡塔尔",
                en_disp: "Qatar"
            },
            {
                code: 237,
                zh: "喀麦隆",
                en_short: "CM",
                py: "KaMaiLong",
                py_short: "KML",
                en: "Cameroun",
                zh_disp: "喀麦隆",
                en_disp: "Cameroun"
            },
            {
                code: 682,
                zh: "库克群岛",
                en_short: "CK",
                py: "KuKeQunDao",
                py_short: "KKQD",
                en: "Cook Islands",
                zh_disp: "库克群岛",
                en_disp: "Cook Isl..."
            },
            {
                code: 599,
                zh: "库拉索",
                en_short: "CW",
                py: "KuLaSuo",
                py_short: "KLS",
                en: "Kuraso",
                zh_disp: "库拉索",
                en_disp: "Kuraso"
            },
            {
                code: 1,
                zh: "开曼群岛",
                en_short: "KY",
                py: "KaiManQunDao",
                py_short: "KMQD",
                en: "Cayman Islands",
                zh_disp: "开曼群岛",
                en_disp: "Cayman I..."
            },
            {
                code: 965,
                zh: "科威特",
                en_short: "KW",
                py: "KeWeiTe",
                py_short: "KWT",
                en: "Kuwait",
                zh_disp: "科威特",
                en_disp: "Kuwait"
            },
            {
                code: 269,
                zh: "科摩罗",
                en_short: "KM",
                py: "KeMoLuo",
                py_short: "KML",
                en: "Comoros",
                zh_disp: "科摩罗",
                en_disp: "Comoros"
            },
            {
                code: 225,
                zh: "科特迪瓦",
                en_short: "CI",
                py: "KeTeDiWa",
                py_short: "KTDW",
                en: "Ivory Coast",
                zh_disp: "科特迪瓦",
                en_disp: "Ivory Co..."
            },
            {
                code: 61,
                zh: "科科斯群岛",
                en_short: "CC",
                py: "KeKeSiQunDao",
                py_short: "KKSQD",
                en: "Cocos Islands",
                zh_disp: "科科斯群岛",
                en_disp: "Cocos Is..."
            },
            {
                code: 254,
                zh: "肯尼亚",
                en_short: "KE",
                py: "KenNiYa",
                py_short: "KNY",
                en: "Kenya",
                zh_disp: "肯尼亚",
                en_disp: "Kenya"
            }]
        },
        {
            "char": "L",
            list: [{
                code: 423,
                zh: "列支敦士登",
                en_short: "LI",
                py: "LieZhiDunShiDeng",
                py_short: "LZDSD",
                en: "Liechtenstein",
                zh_disp: "列支敦士登",
                en_disp: "Liechten..."
            },
            {
                code: 218,
                zh: "利比亚",
                en_short: "LY",
                py: "LiBiYa",
                py_short: "LBY",
                en: "Libya",
                zh_disp: "利比亚",
                en_disp: "Libya"
            },
            {
                code: 231,
                zh: "利比里亚",
                en_short: "LR",
                py: "LiBiLiYa",
                py_short: "LBLY",
                en: "Liberia",
                zh_disp: "利比里亚",
                en_disp: "Liberia"
            },
            {
                code: 250,
                zh: "卢旺达",
                en_short: "RW",
                py: "LuWangDa",
                py_short: "LWD",
                en: "Rwanda",
                zh_disp: "卢旺达",
                en_disp: "Rwanda"
            },
            {
                code: 352,
                zh: "卢森堡",
                en_short: "LU",
                py: "LuSenBao",
                py_short: "LSB",
                en: "Luxemburg",
                zh_disp: "卢森堡",
                en_disp: "Luxemburg"
            },
            {
                code: 371,
                zh: "拉脱维亚",
                en_short: "LV",
                py: "LaTuoWeiYa",
                py_short: "LTWY",
                en: "Latvia",
                zh_disp: "拉脱维亚",
                en_disp: "Latvia"
            },
            {
                code: 262,
                zh: "留尼汪",
                en_short: "RE",
                py: "LiuNiWang",
                py_short: "LNW",
                en: "Reunion",
                zh_disp: "留尼汪",
                en_disp: "Reunion"
            },
            {
                code: 370,
                zh: "立陶宛",
                en_short: "LT",
                py: "LiTaoWan",
                py_short: "LTW",
                en: "Lithuania",
                zh_disp: "立陶宛",
                en_disp: "Lithuania"
            },
            {
                code: 40,
                zh: "罗马尼亚",
                en_short: "RO",
                py: "LuoMaNiYa",
                py_short: "LMNY",
                en: "Romania",
                zh_disp: "罗马尼亚",
                en_disp: "Romania"
            },
            {
                code: 856,
                zh: "老挝",
                en_short: "LA",
                py: "LaoWo",
                py_short: "LW",
                en: "Laos",
                zh_disp: "老挝",
                en_disp: "Laos"
            },
            {
                code: 266,
                zh: "莱索托",
                en_short: "LS",
                py: "LaiSuoTuo",
                py_short: "LST",
                en: "Lesotho",
                zh_disp: "莱索托",
                en_disp: "Lesotho"
            },
            {
                code: 961,
                zh: "黎巴嫩",
                en_short: "LB",
                py: "LiBaNen",
                py_short: "LBN",
                en: "Lebanon",
                zh_disp: "黎巴嫩",
                en_disp: "Lebanon"
            }]
        },
        {
            "char": "M",
            list: [{
                code: 52,
                zh: "墨西哥",
                en_short: "MX",
                py: "MoXiGe",
                py_short: "MXG",
                en: "Mexico",
                zh_disp: "墨西哥",
                en_disp: "Mexico"
            },
            {
                code: 880,
                zh: "孟加拉国",
                en_short: "BD",
                py: "MengJiaLaGuo",
                py_short: "MJLG",
                en: "Bangladesh",
                zh_disp: "孟加拉国",
                en_disp: "Bangladesh"
            },
            {
                code: 691,
                zh: "密克罗尼西亚联邦",
                en_short: "FM",
                py: "MiKeLuoNiXiYaLianBang",
                py_short: "MKLNXYLB",
                en: "Micronesia",
                zh_disp: "密克罗尼...",
                en_disp: "Micronesia"
            },
            {
                code: 373,
                zh: "摩尔多瓦",
                en_short: "MD",
                py: "MoErDuoWa",
                py_short: "MEDW",
                en: "Moldova",
                zh_disp: "摩尔多瓦",
                en_disp: "Moldova"
            },
            {
                code: 212,
                zh: "摩洛哥",
                en_short: "MA",
                py: "MoLuoGe",
                py_short: "MLG",
                en: "Morocco",
                zh_disp: "摩洛哥",
                en_disp: "Morocco"
            },
            {
                code: 377,
                zh: "摩纳哥",
                en_short: "MC",
                py: "MoNaGe",
                py_short: "MNG",
                en: "Monaco",
                zh_disp: "摩纳哥",
                en_disp: "Monaco"
            },
            {
                code: 44,
                zh: "曼岛",
                en_short: "IM",
                py: "ManDao",
                py_short: "MD",
                en: "Isle of man",
                zh_disp: "曼岛",
                en_disp: "Isle of ..."
            },
            {
                code: 222,
                zh: "毛里塔尼亚",
                en_short: "MR",
                py: "MaoLiTaNiYa",
                py_short: "MLTNY",
                en: "Mauritania",
                zh_disp: "毛里塔尼亚",
                en_disp: "Mauritania"
            },
            {
                code: 230,
                zh: "毛里求斯",
                en_short: "MU",
                py: "MaoLiQiuSi",
                py_short: "MLQS",
                en: "Mauritius",
                zh_disp: "毛里求斯",
                en_disp: "Mauritius"
            },
            {
                code: 51,
                zh: "秘鲁",
                en_short: "PE",
                py: "MiLu",
                py_short: "ML",
                en: "Peru",
                zh_disp: "秘鲁",
                en_disp: "Peru"
            },
            {
                code: 95,
                zh: "缅甸",
                en_short: "MM",
                py: "MianDian",
                py_short: "MD",
                en: "Burma",
                zh_disp: "缅甸",
                en_disp: "Burma"
            },
            {
                code: 1,
                zh: "美国",
                en_short: "US",
                py: "MeiGuo",
                py_short: "MG",
                en: "USA",
                zh_disp: "美国",
                en_disp: "USA"
            },
            {
                code: 1,
                zh: "美属维京群岛",
                en_short: "VI",
                py: "MeiShuWeiJingQunDao",
                py_short: "MSWJQD",
                en: "U.S.Virgin Islands",
                zh_disp: "美属维京...",
                en_disp: "U.S.Virg..."
            },
            {
                code: 1,
                zh: "美属萨摩亚",
                en_short: "AS",
                py: "MeiShuSaMoYa",
                py_short: "MSSMY",
                en: "American Samoa",
                zh_disp: "美属萨摩亚",
                en_disp: "American..."
            },
            {
                code: 258,
                zh: "莫桑比克",
                en_short: "MZ",
                py: "MoSangBiKe",
                py_short: "MSBK",
                en: "Mozambique",
                zh_disp: "莫桑比克",
                en_disp: "Mozambique"
            },
            {
                code: 976,
                zh: "蒙古",
                en_short: "MN",
                py: "MengGu",
                py_short: "MG",
                en: "Mongolia",
                zh_disp: "蒙古",
                en_disp: "Mongolia"
            },
            {
                code: 1,
                zh: "蒙塞拉特",
                en_short: "MS",
                py: "MengSaiLaTe",
                py_short: "MSLT",
                en: "Montserrat",
                zh_disp: "蒙塞拉特",
                en_disp: "Montserrat"
            },
            {
                code: 389,
                zh: "马其顿",
                en_short: "MK",
                py: "MaQiDun",
                py_short: "MQD",
                en: "Macedonia",
                zh_disp: "马其顿",
                en_disp: "Macedonia"
            },
            {
                code: 960,
                zh: "马尔代夫",
                en_short: "MV",
                py: "MaErDaiFu",
                py_short: "MEDF",
                en: "Maldives",
                zh_disp: "马尔代夫",
                en_disp: "Maldives"
            },
            {
                code: 265,
                zh: "马拉维",
                en_short: "MW",
                py: "MaLaWei",
                py_short: "MLW",
                en: "Mawlawi",
                zh_disp: "马拉维",
                en_disp: "Mawlawi"
            },
            {
                code: 596,
                zh: "马提尼克",
                en_short: "MQ",
                py: "MaTiNiKe",
                py_short: "MTNK",
                en: "Martinique",
                zh_disp: "马提尼克",
                en_disp: "Martinique"
            },
            {
                code: 60,
                zh: "马来西亚",
                en_short: "MY",
                py: "MaLaiXiYa",
                py_short: "MLXY",
                en: "Malaysia",
                zh_disp: "马来西亚",
                en_disp: "Malaysia"
            },
            {
                code: 262,
                zh: "马约特",
                en_short: "YT",
                py: "MaYueTe",
                py_short: "MYT",
                en: "Mayotte",
                zh_disp: "马约特",
                en_disp: "Mayotte"
            },
            {
                code: 692,
                zh: "马绍尔群岛",
                en_short: "MH",
                py: "MaShaoErQunDao",
                py_short: "MSEQD",
                en: "Marshall Islands",
                zh_disp: "马绍尔群岛",
                en_disp: "Marshall..."
            },
            {
                code: 356,
                zh: "马耳他",
                en_short: "MT",
                py: "MaErTa",
                py_short: "MET",
                en: "Malta",
                zh_disp: "马耳他",
                en_disp: "Malta"
            },
            {
                code: 261,
                zh: "马达加斯加",
                en_short: "MG",
                py: "MaDaJiaSiJia",
                py_short: "MDJSJ",
                en: "Madagascar",
                zh_disp: "马达加斯加",
                en_disp: "Madagascar"
            },
            {
                code: 223,
                zh: "马里",
                en_short: "ML",
                py: "MaLi",
                py_short: "ML",
                en: "Mali",
                zh_disp: "马里",
                en_disp: "Mali"
            }]
        }]
    },
    NPR: {
        charSort: true,
        group: [{
            "char": "N",
            list: [{
                code: 211,
                zh: "南苏丹",
                en_short: "SS",
                py: "NanSuDan",
                py_short: "NSD",
                en: "South Sultan",
                zh_disp: "南苏丹",
                en_disp: "South Su..."
            },
            {
                code: 27,
                zh: "南非",
                en_short: "ZA",
                py: "NanFei",
                py_short: "NF",
                en: "South Africa",
                zh_disp: "南非",
                en_disp: "South Af..."
            },
            {
                code: 505,
                zh: "尼加拉瓜",
                en_short: "NI",
                py: "NiJiaLaGua",
                py_short: "NJLG",
                en: "Nicaragua",
                zh_disp: "尼加拉瓜",
                en_disp: "Nicaragua"
            },
            {
                code: 234,
                zh: "尼日利亚",
                en_short: "NG",
                py: "NiRiLiYa",
                py_short: "NRLY",
                en: "Nigeria",
                zh_disp: "尼日利亚",
                en_disp: "Nigeria"
            },
            {
                code: 227,
                zh: "尼日尔",
                en_short: "NE",
                py: "NiRiEr",
                py_short: "NRE",
                en: "Niger",
                zh_disp: "尼日尔",
                en_disp: "Niger"
            },
            {
                code: 977,
                zh: "尼泊尔",
                en_short: "NP",
                py: "NiBoEr",
                py_short: "NBE",
                en: "Nepal",
                zh_disp: "尼泊尔",
                en_disp: "Nepal"
            },
            {
                code: 47,
                zh: "挪威",
                en_short: "NO",
                py: "NuoWei",
                py_short: "NW",
                en: "Norway",
                zh_disp: "挪威",
                en_disp: "Norway"
            },
            {
                code: 674,
                zh: "瑙鲁",
                en_short: "NR",
                py: "NaoLu",
                py_short: "NL",
                en: "Nauru",
                zh_disp: "瑙鲁",
                en_disp: "Nauru"
            },
            {
                code: 264,
                zh: "纳米比亚",
                en_short: "NA",
                py: "NaMiBiYa",
                py_short: "NMBY",
                en: "Namibia",
                zh_disp: "纳米比亚",
                en_disp: "Namibia"
            },
            {
                code: 683,
                zh: "纽埃",
                en_short: "NU",
                py: "NiuAi",
                py_short: "NA",
                en: "Niue",
                zh_disp: "纽埃",
                en_disp: "Niue"
            },
            {
                code: 672,
                zh: "诺福克岛",
                en_short: "NF",
                py: "NuoFuKeDao",
                py_short: "NFKD",
                en: "Norfolk Island",
                zh_disp: "诺福克岛",
                en_disp: "Norfolk ..."
            }]
        },
        {
            "char": "P",
            list: [{
                code: 680,
                zh: "帕劳",
                en_short: "PW",
                py: "PaLao",
                py_short: "PL",
                en: "Palau",
                zh_disp: "帕劳",
                en_disp: "Palau"
            },
            {
                code: 351,
                zh: "葡萄牙",
                en_short: "PT",
                py: "PuTaoYa",
                py_short: "PTY",
                en: "Portugal",
                zh_disp: "葡萄牙",
                en_disp: "Portugal"
            }]
        },
        {
            "char": "R",
            list: [{
                code: 81,
                zh: "日本",
                en_short: "JP",
                py: "RiBen",
                py_short: "RB",
                en: "Japan",
                zh_disp: "日本",
                en_disp: "Japan"
            },
            {
                code: 46,
                zh: "瑞典",
                en_short: "SE",
                py: "RuiDian",
                py_short: "RD",
                en: "Sweden",
                zh_disp: "瑞典",
                en_disp: "Sweden"
            },
            {
                code: 41,
                zh: "瑞士",
                en_short: "CH",
                py: "RuiShi",
                py_short: "RS",
                en: "Switzerland",
                zh_disp: "瑞士",
                en_disp: "Switzerl..."
            }]
        }]
    },
    STW: {
        charSort: true,
        group: [{
            "char": "S",
            list: [{
                code: 1,
                zh: "圣卢西亚",
                en_short: "LC",
                py: "ShengLuXiYa",
                py_short: "SLXY",
                en: "Saint Lucia",
                zh_disp: "圣卢西亚",
                en_disp: "Saint Lu..."
            },
            {
                code: 1,
                zh: "圣基茨和尼维斯",
                en_short: "KN",
                py: "ShengJiCiHeNiWeiSi",
                py_short: "SJCHNWS",
                en: "Saint Kitts and Nevis",
                zh_disp: "圣基茨和...",
                en_disp: "Saint Ki..."
            },
            {
                code: 239,
                zh: "圣多美和普林西比",
                en_short: "ST",
                py: "ShengDuoMeiHePuLinXiBi",
                py_short: "SDMHPLXB",
                en: "Sao Tome and Principe",
                zh_disp: "圣多美和...",
                en_disp: "Sao Tome..."
            },
            {
                code: 590,
                zh: "圣巴泰勒米",
                en_short: "BL",
                py: "ShengBaTaiLeMi",
                py_short: "SBTLM",
                en: "San Barthelemy",
                zh_disp: "圣巴泰勒米",
                en_disp: "San Bart..."
            },
            {
                code: 1,
                zh: "圣文森特和格林纳丁斯",
                en_short: "VC",
                py: "ShengWenSenTeHeGeLinNaDingSi",
                py_short: "SWSTHGLNDS",
                en: "Saint Vincent and the Grenadines",
                zh_disp: "圣文森特...",
                en_disp: "Saint Vi..."
            },
            {
                code: 508,
                zh: "圣皮埃尔和密克隆群岛",
                en_short: "PM",
                py: "ShengPiAiErHeMiKeLongQunDao",
                py_short: "SPAEHMKLQD",
                en: "Saint Pierre and Miquelon",
                zh_disp: "圣皮埃尔...",
                en_disp: "Saint Pi..."
            },
            {
                code: 61,
                zh: "圣诞岛",
                en_short: "CX",
                py: "ShengDanDao",
                py_short: "SDD",
                en: "Christmas Island",
                zh_disp: "圣诞岛",
                en_disp: "Christma..."
            },
            {
                code: 290,
                zh: "圣赫勒拿",
                en_short: "SH",
                py: "ShengHeLeNa",
                py_short: "SHLN",
                en: "Saint Helena",
                zh_disp: "圣赫勒拿",
                en_disp: "Saint He..."
            },
            {
                code: 378,
                zh: "圣马力诺",
                en_short: "SM",
                py: "ShengMaLiNuo",
                py_short: "SMLN",
                en: "San Marino",
                zh_disp: "圣马力诺",
                en_disp: "San Marino"
            },
            {
                code: 221,
                zh: "塞内加尔",
                en_short: "SN",
                py: "SaiNaJiaEr",
                py_short: "SNJE",
                en: "Senegal",
                zh_disp: "塞内加尔",
                en_disp: "Senegal"
            },
            {
                code: 381,
                zh: "塞尔维亚",
                en_short: "RS",
                py: "SaiErWeiYa",
                py_short: "SEWY",
                en: "Serbia",
                zh_disp: "塞尔维亚",
                en_disp: "Serbia"
            },
            {
                code: 232,
                zh: "塞拉利昂",
                en_short: "SL",
                py: "SaiLaLiAng",
                py_short: "SLLA",
                en: "Sierra Leone",
                zh_disp: "塞拉利昂",
                en_disp: "Sierra L..."
            },
            {
                code: 357,
                zh: "塞浦路斯",
                en_short: "CY",
                py: "SaiPuLuSi",
                py_short: "SPLS",
                en: "Cyprus",
                zh_disp: "塞浦路斯",
                en_disp: "Cyprus"
            },
            {
                code: 248,
                zh: "塞舌尔",
                en_short: "SC",
                py: "SaiSheEr",
                py_short: "SSE",
                en: "Seychelles",
                zh_disp: "塞舌尔",
                en_disp: "Seychelles"
            },
            {
                code: 677,
                zh: "所罗门群岛",
                en_short: "SB",
                py: "SuoLuoMenQunDao",
                py_short: "SLMQD",
                en: "Solomon Islands",
                zh_disp: "所罗门群岛",
                en_disp: "Solomon ..."
            },
            {
                code: 268,
                zh: "斯威士兰",
                en_short: "SZ",
                py: "SiWeiShiLan",
                py_short: "SWSL",
                en: "Swaziland",
                zh_disp: "斯威士兰",
                en_disp: "Swaziland"
            },
            {
                code: 421,
                zh: "斯洛伐克",
                en_short: "SK",
                py: "SiLuoFaKe",
                py_short: "SLFK",
                en: "Slovakia",
                zh_disp: "斯洛伐克",
                en_disp: "Slovakia"
            },
            {
                code: 386,
                zh: "斯洛文尼亚",
                en_short: "SI",
                py: "SiLuoWenNiYa",
                py_short: "SLWNY",
                en: "Slovenia",
                zh_disp: "斯洛文尼亚",
                en_disp: "Slovenia"
            },
            {
                code: 47,
                zh: "斯瓦尔巴特和扬马延",
                en_short: "SJ",
                py: "SiWaErBaTeHeYangMaYan",
                py_short: "SWEBTHYMY",
                en: "Svalbard og Jan Mayen",
                zh_disp: "斯瓦尔巴...",
                en_disp: "Svalbard..."
            },
            {
                code: 94,
                zh: "斯里兰卡",
                en_short: "LK",
                py: "SiLiLanKa",
                py_short: "SLLK",
                en: "Sri Lanka",
                zh_disp: "斯里兰卡",
                en_disp: "Sri Lanka"
            },
            {
                code: 966,
                zh: "沙特阿拉伯",
                en_short: "SA",
                py: "ShaTeALaBo",
                py_short: "STALB",
                en: "Saudi Arabia",
                zh_disp: "沙特阿拉伯",
                en_disp: "Saudi Ar..."
            },
            {
                code: 252,
                zh: "索马里",
                en_short: "SO",
                py: "SuoMaLi",
                py_short: "SML",
                en: "Somalia",
                zh_disp: "索马里",
                en_disp: "Somalia"
            },
            {
                code: 249,
                zh: "苏丹",
                en_short: "SD",
                py: "SuDan",
                py_short: "SD",
                en: "Sultan",
                zh_disp: "苏丹",
                en_disp: "Sultan"
            },
            {
                code: 597,
                zh: "苏里南",
                en_short: "SR",
                py: "SuLiNan",
                py_short: "SLN",
                en: "Suriname",
                zh_disp: "苏里南",
                en_disp: "Suriname"
            },
            {
                code: 503,
                zh: "萨尔瓦多",
                en_short: "SV",
                py: "SaErWaDuo",
                py_short: "SEWD",
                en: "Salvatore",
                zh_disp: "萨尔瓦多",
                en_disp: "Salvatore"
            },
            {
                code: 685,
                zh: "萨摩亚",
                en_short: "WS",
                py: "SaMoYa",
                py_short: "SMY",
                en: "Samoa",
                zh_disp: "萨摩亚",
                en_disp: "Samoa"
            }]
        },
        {
            "char": "T",
            list: [{
                code: 886,
                zh: "台湾",
                en_short: "TW",
                py: "TaiWan",
                py_short: "TW",
                en: "Taiwan",
                zh_disp: "台湾",
                en_disp: "Taiwan"
            },
            {
                code: 688,
                zh: "图瓦卢",
                en_short: "TV",
                py: "TuWaLu",
                py_short: "TWL",
                en: "Tuvalu",
                zh_disp: "图瓦卢",
                en_disp: "Tuvalu"
            },
            {
                code: 993,
                zh: "土库曼斯坦",
                en_short: "TM",
                py: "TuKuManSiTan",
                py_short: "TKMST",
                en: "Turkmenistan",
                zh_disp: "土库曼斯坦",
                en_disp: "Turkmeni..."
            },
            {
                code: 90,
                zh: "土耳其",
                en_short: "TR",
                py: "TuErQi",
                py_short: "TEQ",
                en: "Turkey",
                zh_disp: "土耳其",
                en_disp: "Turkey"
            },
            {
                code: 255,
                zh: "坦桑尼亚",
                en_short: "TZ",
                py: "TanSangNiYa",
                py_short: "TSNY",
                en: "Tanzania",
                zh_disp: "坦桑尼亚",
                en_disp: "Tanzania"
            },
            {
                code: 992,
                zh: "塔吉克斯坦",
                en_short: "TJ",
                py: "TaJiKeSiTan",
                py_short: "TJKST",
                en: "Tajikistan",
                zh_disp: "塔吉克斯坦",
                en_disp: "Tajikistan"
            },
            {
                code: 690,
                zh: "托克劳",
                en_short: "TK",
                py: "TuoKeLao",
                py_short: "TKL",
                en: "Stockerau",
                zh_disp: "托克劳",
                en_disp: "Stockerau"
            },
            {
                code: 676,
                zh: "汤加",
                en_short: "TO",
                py: "TangJia",
                py_short: "TJ",
                en: "Tonga",
                zh_disp: "汤加",
                en_disp: "Tonga"
            },
            {
                code: 66,
                zh: "泰国",
                en_short: "TH",
                py: "TaiGuo",
                py_short: "TG",
                en: "Thailand",
                zh_disp: "泰国",
                en_disp: "Thailand"
            },
            {
                code: 1,
                zh: "特克斯和凯科斯群岛",
                en_short: "TC",
                py: "TeKeSiHeKaiKeSiQunDao",
                py_short: "TKSHKKSQD",
                en: "Turks and Caicos Islands",
                zh_disp: "特克斯和...",
                en_disp: "Turks an..."
            },
            {
                code: 1,
                zh: "特立尼达和多巴哥",
                en_short: "TT",
                py: "TeLiNiDaHeDuoBaGe",
                py_short: "TLNDHDBG",
                en: "Trinidad and Tobago",
                zh_disp: "特立尼达...",
                en_disp: "Trinidad..."
            },
            {
                code: 290,
                zh: "特里斯坦-达库尼亚群岛",
                en_short: "TA",
                py: "TeLiSiTan-DaKuNiYaQunDao",
                py_short: "TLST-DKNYQD",
                en: "Tristan da Cunha",
                zh_disp: "特里斯坦...",
                en_disp: "Tristan ..."
            },
            {
                code: 216,
                zh: "突尼斯",
                en_short: "TN",
                py: "TuNiSi",
                py_short: "TNS",
                en: "Tunisia",
                zh_disp: "突尼斯",
                en_disp: "Tunisia"
            }]
        },
        {
            "char": "W",
            list: [{
                code: 380,
                zh: "乌克兰",
                en_short: "UA",
                py: "WuKeLan",
                py_short: "WKL",
                en: "Ukraine ",
                zh_disp: "乌克兰",
                en_disp: "Ukraine "
            },
            {
                code: 998,
                zh: "乌兹别克斯坦",
                en_short: "UZ",
                py: "WuZiBieKeSiTan",
                py_short: "WZBKST",
                en: "Uzbekistan",
                zh_disp: "乌兹别克...",
                en_disp: "Uzbekistan"
            },
            {
                code: 256,
                zh: "乌干达",
                en_short: "UG",
                py: "WuGanDa",
                py_short: "WGD",
                en: "Uganda",
                zh_disp: "乌干达",
                en_disp: "Uganda"
            },
            {
                code: 598,
                zh: "乌拉圭",
                en_short: "UY",
                py: "WuLaGui",
                py_short: "WLG",
                en: "Uruguay",
                zh_disp: "乌拉圭",
                en_disp: "Uruguay"
            },
            {
                code: 502,
                zh: "危地马拉",
                en_short: "GT",
                py: "WeiDiMaLa",
                py_short: "WDML",
                en: "Guatemala",
                zh_disp: "危地马拉",
                en_disp: "Guatemala"
            },
            {
                code: 58,
                zh: "委内瑞拉",
                en_short: "VE",
                py: "WeiNaRuiLa",
                py_short: "WNRL",
                en: "Venezuela",
                zh_disp: "委内瑞拉",
                en_disp: "Venezuela"
            },
            {
                code: 673,
                zh: "文莱",
                en_short: "BN",
                py: "WenLai",
                py_short: "WL",
                en: "Brunei",
                zh_disp: "文莱",
                en_disp: "Brunei"
            },
            {
                code: 681,
                zh: "瓦利斯和富图纳",
                en_short: "WF",
                py: "WaLiSiHeFuTuNa",
                py_short: "WLSHFTN",
                en: "Wallis and Futuna",
                zh_disp: "瓦利斯和...",
                en_disp: "Wallis a..."
            },
            {
                code: 678,
                zh: "瓦努阿图",
                en_short: "VU",
                py: "WaNuATu",
                py_short: "WNAT",
                en: "Vanuatu",
                zh_disp: "瓦努阿图",
                en_disp: "Vanuatu"
            }]
        }]
    },
    XYZ: {
        charSort: true,
        group: [{
            "char": "X",
            list: [{
                code: 36,
                zh: "匈牙利",
                en_short: "HU",
                py: "XiongYaLi",
                py_short: "XYL",
                en: "Hungary",
                zh_disp: "匈牙利",
                en_disp: "Hungary"
            },
            {
                code: 963,
                zh: "叙利亚",
                en_short: "SY",
                py: "XuLiYa",
                py_short: "XLY",
                en: "Syria",
                zh_disp: "叙利亚",
                en_disp: "Syria"
            },
            {
                code: 30,
                zh: "希腊",
                en_short: "GR",
                py: "XiLa",
                py_short: "XL",
                en: "Greece",
                zh_disp: "希腊",
                en_disp: "Greece"
            },
            {
                code: 65,
                zh: "新加坡",
                en_short: "SG",
                py: "XinJiaPo",
                py_short: "XJP",
                en: "Singapore",
                zh_disp: "新加坡",
                en_disp: "Singapore"
            },
            {
                code: 687,
                zh: "新喀里多尼亚",
                en_short: "NC",
                py: "XinKaLiDuoNiYa",
                py_short: "XKLDNY",
                en: "New Caledonia",
                zh_disp: "新喀里多...",
                en_disp: "New Cale..."
            },
            {
                code: 64,
                zh: "新西兰",
                en_short: "NZ",
                py: "XinXiLan",
                py_short: "XXL",
                en: "New Zealand",
                zh_disp: "新西兰",
                en_disp: "New Zeal..."
            },
            {
                code: 212,
                zh: "西撒哈拉",
                en_short: "EH",
                py: "XiSaHaLa",
                py_short: "XSHL",
                en: "Western Sahara",
                zh_disp: "西撒哈拉",
                en_disp: "Western ..."
            },
            {
                code: 34,
                zh: "西班牙",
                en_short: "ES",
                py: "XiBanYa",
                py_short: "XBY",
                en: "Spain",
                zh_disp: "西班牙",
                en_disp: "Spain"
            },
            {
                code: 852,
                zh: "香港",
                en_short: "HK",
                py: "XiangGang",
                py_short: "XG",
                en: "HongKong",
                zh_disp: "香港",
                en_disp: "HongKong"
            }]
        },
        {
            "char": "Y",
            list: [{
                code: 967,
                zh: "也门",
                en_short: "YE",
                py: "YeMen",
                py_short: "YM",
                en: "Yemen",
                zh_disp: "也门",
                en_disp: "Yemen"
            },
            {
                code: 374,
                zh: "亚美尼亚",
                en_short: "AM",
                py: "YaMeiNiYa",
                py_short: "YMNY",
                en: "Armenia",
                zh_disp: "亚美尼亚",
                en_disp: "Armenia"
            },
            {
                code: 972,
                zh: "以色列",
                en_short: "IL",
                py: "YiSeLie",
                py_short: "YSL",
                en: "Israel",
                zh_disp: "以色列",
                en_disp: "Israel"
            },
            {
                code: 964,
                zh: "伊拉克",
                en_short: "IQ",
                py: "YiLaKe",
                py_short: "YLK",
                en: "Iraq",
                zh_disp: "伊拉克",
                en_disp: "Iraq"
            },
            {
                code: 98,
                zh: "伊朗",
                en_short: "IR",
                py: "YiLang",
                py_short: "YL",
                en: "Iran",
                zh_disp: "伊朗",
                en_disp: "Iran"
            },
            {
                code: 91,
                zh: "印度",
                en_short: "IN",
                py: "YinDu",
                py_short: "YD",
                en: "India",
                zh_disp: "印度",
                en_disp: "India"
            },
            {
                code: 62,
                zh: "印度尼西亚",
                en_short: "ID",
                py: "YinDuNiXiYa",
                py_short: "YDNXY",
                en: "Indonesia",
                zh_disp: "印度尼西亚",
                en_disp: "Indonesia"
            },
            {
                code: 39,
                zh: "意大利",
                en_short: "IT",
                py: "YiDaLi",
                py_short: "YDL",
                en: "Italy",
                zh_disp: "意大利",
                en_disp: "Italy"
            },
            {
                code: 1,
                zh: "牙买加",
                en_short: "JM",
                py: "YaMaiJia",
                py_short: "YMJ",
                en: "Jamaica",
                zh_disp: "牙买加",
                en_disp: "Jamaica"
            },
            {
                code: 962,
                zh: "约旦",
                en_short: "JO",
                py: "YueDan",
                py_short: "YD",
                en: "Jordan",
                zh_disp: "约旦",
                en_disp: "Jordan"
            },
            {
                code: 44,
                zh: "英国",
                en_short: "GB",
                py: "YingGuo",
                py_short: "YG",
                en: "United Kingdom",
                zh_disp: "英国",
                en_disp: "United K..."
            },
            {
                code: 246,
                zh: "英属印度洋领地",
                en_short: "IO",
                py: "YingShuYinDuYangLingDi",
                py_short: "YSYDYLD",
                en: "British Indian Ocean Territory",
                zh_disp: "英属印度...",
                en_disp: "British ..."
            },
            {
                code: 1,
                zh: "英属维京群岛",
                en_short: "VG",
                py: "YingShuWeiJingQunDao",
                py_short: "YSWJQD",
                en: "British Virgin Islands",
                zh_disp: "英属维京...",
                en_disp: "British ..."
            },
            {
                code: 84,
                zh: "越南",
                en_short: "VN",
                py: "YueNan",
                py_short: "YN",
                en: "Vietnam",
                zh_disp: "越南",
                en_disp: "Vietnam"
            }]
        },
        {
            "char": "Z",
            list: [{
                code: 86,
                zh: "中国",
                en_short: "CN",
                py: "ZhongGuo",
                py_short: "ZG",
                en: "China",
                zh_disp: "中国",
                en_disp: "China"
            },
            {
                code: 236,
                zh: "中非共和国",
                en_short: "CF",
                py: "ZhongFeiGongHeGuo",
                py_short: "ZFGHG",
                en: "Central African Republic",
                zh_disp: "中非共和国",
                en_disp: "Central ..."
            },
            {
                code: 235,
                zh: "乍得",
                en_short: "TD",
                py: "ZhaDe",
                py_short: "ZD",
                en: "Tchad",
                zh_disp: "乍得",
                en_disp: "Tchad"
            },
            {
                code: 56,
                zh: "智利",
                en_short: "CL",
                py: "ZhiLi",
                py_short: "ZL",
                en: "Chile",
                zh_disp: "智利",
                en_disp: "Chile"
            },
            {
                code: 44,
                zh: "泽西岛",
                en_short: "JE",
                py: "ZeXiDao",
                py_short: "ZXD",
                en: "Jersey",
                zh_disp: "泽西岛",
                en_disp: "Jersey"
            },
            {
                code: 350,
                zh: "直布罗陀",
                en_short: "GI",
                py: "ZhiBuLuoTuo",
                py_short: "ZBLT",
                en: "Gibraltar",
                zh_disp: "直布罗陀",
                en_disp: "Gibraltar"
            },
            {
                code: 260,
                zh: "赞比亚",
                en_short: "ZM",
                py: "ZanBiYa",
                py_short: "ZBY",
                en: "Zambia",
                zh_disp: "赞比亚",
                en_disp: "Zambia"
            }]
        }]
    }
};
QNR.countryCodeData.list = [{
    code: 86,
    zh: "中国",
    en_short: "CN",
    py: "ZhongGuo",
    py_short: "ZG",
    en: "China",
    zh_disp: "中国",
    en_disp: "China"
},
{
    code: 1,
    zh: "美国",
    en_short: "US",
    py: "MeiGuo",
    py_short: "MG",
    en: "USA",
    zh_disp: "美国",
    en_disp: "USA"
},
{
    code: 7,
    zh: "俄罗斯",
    en_short: "RU",
    py: "ELuoSi",
    py_short: "ELS",
    en: "Russia",
    zh_disp: "俄罗斯",
    en_disp: "Russia"
},
{
    code: 44,
    zh: "英国",
    en_short: "GB",
    py: "YingGuo",
    py_short: "YG",
    en: "United Kingdom",
    zh_disp: "英国",
    en_disp: "United K..."
},
{
    code: 47,
    zh: "挪威",
    en_short: "NO",
    py: "NuoWei",
    py_short: "NW",
    en: "Norway",
    zh_disp: "挪威",
    en_disp: "Norway"
},
{
    code: 61,
    zh: "澳大利亚",
    en_short: "AU",
    py: "AoDaLiYa",
    py_short: "ADLY",
    en: "Australia",
    zh_disp: "澳大利亚",
    en_disp: "Australia"
},
{
    code: 212,
    zh: "摩洛哥",
    en_short: "MA",
    py: "MoLuoGe",
    py_short: "MLG",
    en: "Morocco",
    zh_disp: "摩洛哥",
    en_disp: "Morocco"
},
{
    code: 358,
    zh: "芬兰",
    en_short: "FI",
    py: "FenLan",
    py_short: "FL",
    en: "Finland",
    zh_disp: "芬兰",
    en_disp: "Finland"
},
{
    code: 590,
    zh: "圣巴泰勒米",
    en_short: "BL",
    py: "ShengBaTaiLeMi",
    py_short: "SBTLM",
    en: "San Barthelemy",
    zh_disp: "圣巴泰勒米",
    en_disp: "San Bart..."
},
{
    code: 261,
    zh: "马达加斯加",
    en_short: "MG",
    py: "MaDaJiaSiJia",
    py_short: "MDJSJ",
    en: "Madagascar",
    zh_disp: "马达加斯加",
    en_disp: "Madagascar"
},
{
    code: 975,
    zh: "不丹",
    en_short: "BT",
    py: "BuDan",
    py_short: "BD",
    en: "Bhutan",
    zh_disp: "不丹",
    en_disp: "Bhutan"
},
{
    code: 670,
    zh: "东帝汶",
    en_short: "TL",
    py: "DongDiWen",
    py_short: "DDW",
    en: "Timor-Leste",
    zh_disp: "东帝汶",
    en_disp: "Timor-Le..."
},
{
    code: 236,
    zh: "中非共和国",
    en_short: "CF",
    py: "ZhongFeiGongHeGuo",
    py_short: "ZFGHG",
    en: "Central African Republic",
    zh_disp: "中非共和国",
    en_disp: "Central ..."
},
{
    code: 45,
    zh: "丹麦",
    en_short: "DK",
    py: "DanMai",
    py_short: "DM",
    en: "Danmark",
    zh_disp: "丹麦",
    en_disp: "Danmark"
},
{
    code: 380,
    zh: "乌克兰",
    en_short: "UA",
    py: "WuKeLan",
    py_short: "WKL",
    en: "Ukraine ",
    zh_disp: "乌克兰",
    en_disp: "Ukraine "
},
{
    code: 998,
    zh: "乌兹别克斯坦",
    en_short: "UZ",
    py: "WuZiBieKeSiTan",
    py_short: "WZBKST",
    en: "Uzbekistan",
    zh_disp: "乌兹别克...",
    en_disp: "Uzbekistan"
},
{
    code: 256,
    zh: "乌干达",
    en_short: "UG",
    py: "WuGanDa",
    py_short: "WGD",
    en: "Uganda",
    zh_disp: "乌干达",
    en_disp: "Uganda"
},
{
    code: 598,
    zh: "乌拉圭",
    en_short: "UY",
    py: "WuLaGui",
    py_short: "WLG",
    en: "Uruguay",
    zh_disp: "乌拉圭",
    en_disp: "Uruguay"
},
{
    code: 235,
    zh: "乍得",
    en_short: "TD",
    py: "ZhaDe",
    py_short: "ZD",
    en: "Tchad",
    zh_disp: "乍得",
    en_disp: "Tchad"
},
{
    code: 967,
    zh: "也门",
    en_short: "YE",
    py: "YeMen",
    py_short: "YM",
    en: "Yemen",
    zh_disp: "也门",
    en_disp: "Yemen"
},
{
    code: 374,
    zh: "亚美尼亚",
    en_short: "AM",
    py: "YaMeiNiYa",
    py_short: "YMNY",
    en: "Armenia",
    zh_disp: "亚美尼亚",
    en_disp: "Armenia"
},
{
    code: 972,
    zh: "以色列",
    en_short: "IL",
    py: "YiSeLie",
    py_short: "YSL",
    en: "Israel",
    zh_disp: "以色列",
    en_disp: "Israel"
},
{
    code: 964,
    zh: "伊拉克",
    en_short: "IQ",
    py: "YiLaKe",
    py_short: "YLK",
    en: "Iraq",
    zh_disp: "伊拉克",
    en_disp: "Iraq"
},
{
    code: 98,
    zh: "伊朗",
    en_short: "IR",
    py: "YiLang",
    py_short: "YL",
    en: "Iran",
    zh_disp: "伊朗",
    en_disp: "Iran"
},
{
    code: 501,
    zh: "伯利兹",
    en_short: "BZ",
    py: "BoLiZi",
    py_short: "BLZ",
    en: "Belize",
    zh_disp: "伯利兹",
    en_disp: "Belize"
},
{
    code: 238,
    zh: "佛得角",
    en_short: "CV",
    py: "FuDeJiao",
    py_short: "FDJ",
    en: "Cape Verde",
    zh_disp: "佛得角",
    en_disp: "Cape Verde"
},
{
    code: 359,
    zh: "保加利亚",
    en_short: "BG",
    py: "BaoJiaLiYa",
    py_short: "BJLY",
    en: "Bulgaria",
    zh_disp: "保加利亚",
    en_disp: "Bulgaria"
},
{
    code: 385,
    zh: "克罗地亚",
    en_short: "HR",
    py: "KeLuoDiYa",
    py_short: "KLDY",
    en: "Croatia",
    zh_disp: "克罗地亚",
    en_disp: "Croatia"
},
{
    code: 1,
    zh: "关岛",
    en_short: "GU",
    py: "GuanDao",
    py_short: "GD",
    en: "Guam",
    zh_disp: "关岛",
    en_disp: "Guam"
},
{
    code: 220,
    zh: "冈比亚",
    en_short: "GM",
    py: "GangBiYa",
    py_short: "GBY",
    en: "Gambia",
    zh_disp: "冈比亚",
    en_disp: "Gambia"
},
{
    code: 354,
    zh: "冰岛",
    en_short: "IS",
    py: "BingDao",
    py_short: "BD",
    en: "Iceland",
    zh_disp: "冰岛",
    en_disp: "Iceland"
},
{
    code: 224,
    zh: "几内亚",
    en_short: "GN",
    py: "JiNaYa",
    py_short: "JNY",
    en: "Guinea",
    zh_disp: "几内亚",
    en_disp: "Guinea"
},
{
    code: 245,
    zh: "几内亚比绍",
    en_short: "GW",
    py: "JiNaYaBiShao",
    py_short: "JNYBS",
    en: "Guinea Bissau",
    zh_disp: "几内亚比绍",
    en_disp: "Guinea B..."
},
{
    code: 423,
    zh: "列支敦士登",
    en_short: "LI",
    py: "LieZhiDunShiDeng",
    py_short: "LZDSD",
    en: "Liechtenstein",
    zh_disp: "列支敦士登",
    en_disp: "Liechten..."
},
{
    code: 242,
    zh: "刚果（布）",
    en_short: "CG",
    py: "GangGuoBu",
    py_short: "GGB",
    en: "Congo",
    zh_disp: "刚果（布）",
    en_disp: "Congo"
},
{
    code: 243,
    zh: "刚果（金）",
    en_short: "CD",
    py: "GangGuoJin",
    py_short: "GGJ",
    en: "DRCongo",
    zh_disp: "刚果（金）",
    en_disp: "DRCongo"
},
{
    code: 218,
    zh: "利比亚",
    en_short: "LY",
    py: "LiBiYa",
    py_short: "LBY",
    en: "Libya",
    zh_disp: "利比亚",
    en_disp: "Libya"
},
{
    code: 231,
    zh: "利比里亚",
    en_short: "LR",
    py: "LiBiLiYa",
    py_short: "LBLY",
    en: "Liberia",
    zh_disp: "利比里亚",
    en_disp: "Liberia"
},
{
    code: 1,
    zh: "加拿大",
    en_short: "CA",
    py: "JiaNaDa",
    py_short: "JND",
    en: "Canada",
    zh_disp: "加拿大",
    en_disp: "Canada"
},
{
    code: 233,
    zh: "加纳",
    en_short: "GH",
    py: "JiaNa",
    py_short: "JN",
    en: "Garner",
    zh_disp: "加纳",
    en_disp: "Garner"
},
{
    code: 241,
    zh: "加蓬",
    en_short: "GA",
    py: "JiaPeng",
    py_short: "JP",
    en: "Gabon",
    zh_disp: "加蓬",
    en_disp: "Gabon"
},
{
    code: 36,
    zh: "匈牙利",
    en_short: "HU",
    py: "XiongYaLi",
    py_short: "XYL",
    en: "Hungary",
    zh_disp: "匈牙利",
    en_disp: "Hungary"
},
{
    code: 1,
    zh: "北马里亚纳群岛",
    en_short: "MP",
    py: "BeiMaLiYaNaQunDao",
    py_short: "BMLYNQD",
    en: "Northern Mariana Islands",
    zh_disp: "北马里亚...",
    en_disp: "Northern..."
},
{
    code: 211,
    zh: "南苏丹",
    en_short: "SS",
    py: "NanSuDan",
    py_short: "NSD",
    en: "South Sultan",
    zh_disp: "南苏丹",
    en_disp: "South Su..."
},
{
    code: 27,
    zh: "南非",
    en_short: "ZA",
    py: "NanFei",
    py_short: "NF",
    en: "South Africa",
    zh_disp: "南非",
    en_disp: "South Af..."
},
{
    code: 267,
    zh: "博茨瓦纳",
    en_short: "BW",
    py: "BoCiWaNa",
    py_short: "BCWN",
    en: "Botswana",
    zh_disp: "博茨瓦纳",
    en_disp: "Botswana"
},
{
    code: 974,
    zh: "卡塔尔",
    en_short: "QA",
    py: "KaTaEr",
    py_short: "KTE",
    en: "Qatar",
    zh_disp: "卡塔尔",
    en_disp: "Qatar"
},
{
    code: 250,
    zh: "卢旺达",
    en_short: "RW",
    py: "LuWangDa",
    py_short: "LWD",
    en: "Rwanda",
    zh_disp: "卢旺达",
    en_disp: "Rwanda"
},
{
    code: 352,
    zh: "卢森堡",
    en_short: "LU",
    py: "LuSenBao",
    py_short: "LSB",
    en: "Luxemburg",
    zh_disp: "卢森堡",
    en_disp: "Luxemburg"
},
{
    code: 91,
    zh: "印度",
    en_short: "IN",
    py: "YinDu",
    py_short: "YD",
    en: "India",
    zh_disp: "印度",
    en_disp: "India"
},
{
    code: 62,
    zh: "印度尼西亚",
    en_short: "ID",
    py: "YinDuNiXiYa",
    py_short: "YDNXY",
    en: "Indonesia",
    zh_disp: "印度尼西亚",
    en_disp: "Indonesia"
},
{
    code: 502,
    zh: "危地马拉",
    en_short: "GT",
    py: "WeiDiMaLa",
    py_short: "WDML",
    en: "Guatemala",
    zh_disp: "危地马拉",
    en_disp: "Guatemala"
},
{
    code: 593,
    zh: "厄瓜多尔",
    en_short: "EC",
    py: "EGuaDuoEr",
    py_short: "EGDE",
    en: "Ecuador",
    zh_disp: "厄瓜多尔",
    en_disp: "Ecuador"
},
{
    code: 291,
    zh: "厄立特里亚",
    en_short: "ER",
    py: "ELiTeLiYa",
    py_short: "ELTLY",
    en: "Eritrea",
    zh_disp: "厄立特里亚",
    en_disp: "Eritrea"
},
{
    code: 963,
    zh: "叙利亚",
    en_short: "SY",
    py: "XuLiYa",
    py_short: "XLY",
    en: "Syria",
    zh_disp: "叙利亚",
    en_disp: "Syria"
},
{
    code: 53,
    zh: "古巴",
    en_short: "CU",
    py: "GuBa",
    py_short: "GB",
    en: "Cuba",
    zh_disp: "古巴",
    en_disp: "Cuba"
},
{
    code: 886,
    zh: "台湾",
    en_short: "TW",
    py: "TaiWan",
    py_short: "TW",
    en: "Taiwan",
    zh_disp: "台湾",
    en_disp: "Taiwan"
},
{
    code: 996,
    zh: "吉尔吉斯斯坦",
    en_short: "KG",
    py: "JiErJiSiSiTan",
    py_short: "JEJSST",
    en: "Kyrgyzstan",
    zh_disp: "吉尔吉斯...",
    en_disp: "Kyrgyzstan"
},
{
    code: 253,
    zh: "吉布提",
    en_short: "DJ",
    py: "JiBuTi",
    py_short: "JBT",
    en: "Djibouti",
    zh_disp: "吉布提",
    en_disp: "Djibouti"
},
{
    code: 7,
    zh: "哈萨克斯坦",
    en_short: "KZ",
    py: "HaSaKeSiTan",
    py_short: "HSKST",
    en: "Kazakhstan",
    zh_disp: "哈萨克斯坦",
    en_disp: "Kazakhstan"
},
{
    code: 57,
    zh: "哥伦比亚",
    en_short: "CO",
    py: "GeLunBiYa",
    py_short: "GLBY",
    en: "Columbia",
    zh_disp: "哥伦比亚",
    en_disp: "Columbia"
},
{
    code: 506,
    zh: "哥斯达黎加",
    en_short: "CR",
    py: "GeSiDaLiJia",
    py_short: "GSDLJ",
    en: "Costa Rica",
    zh_disp: "哥斯达黎加",
    en_disp: "Costa Rica"
},
{
    code: 237,
    zh: "喀麦隆",
    en_short: "CM",
    py: "KaMaiLong",
    py_short: "KML",
    en: "Cameroun",
    zh_disp: "喀麦隆",
    en_disp: "Cameroun"
},
{
    code: 688,
    zh: "图瓦卢",
    en_short: "TV",
    py: "TuWaLu",
    py_short: "TWL",
    en: "Tuvalu",
    zh_disp: "图瓦卢",
    en_disp: "Tuvalu"
},
{
    code: 993,
    zh: "土库曼斯坦",
    en_short: "TM",
    py: "TuKuManSiTan",
    py_short: "TKMST",
    en: "Turkmenistan",
    zh_disp: "土库曼斯坦",
    en_disp: "Turkmeni..."
},
{
    code: 90,
    zh: "土耳其",
    en_short: "TR",
    py: "TuErQi",
    py_short: "TEQ",
    en: "Turkey",
    zh_disp: "土耳其",
    en_disp: "Turkey"
},
{
    code: 1,
    zh: "圣卢西亚",
    en_short: "LC",
    py: "ShengLuXiYa",
    py_short: "SLXY",
    en: "Saint Lucia",
    zh_disp: "圣卢西亚",
    en_disp: "Saint Lu..."
},
{
    code: 1,
    zh: "圣基茨和尼维斯",
    en_short: "KN",
    py: "ShengJiCiHeNiWeiSi",
    py_short: "SJCHNWS",
    en: "Saint Kitts and Nevis",
    zh_disp: "圣基茨和...",
    en_disp: "Saint Ki..."
},
{
    code: 239,
    zh: "圣多美和普林西比",
    en_short: "ST",
    py: "ShengDuoMeiHePuLinXiBi",
    py_short: "SDMHPLXB",
    en: "Sao Tome and Principe",
    zh_disp: "圣多美和...",
    en_disp: "Sao Tome..."
},
{
    code: 1,
    zh: "圣文森特和格林纳丁斯",
    en_short: "VC",
    py: "ShengWenSenTeHeGeLinNaDingSi",
    py_short: "SWSTHGLNDS",
    en: "Saint Vincent and the Grenadines",
    zh_disp: "圣文森特...",
    en_disp: "Saint Vi..."
},
{
    code: 508,
    zh: "圣皮埃尔和密克隆群岛",
    en_short: "PM",
    py: "ShengPiAiErHeMiKeLongQunDao",
    py_short: "SPAEHMKLQD",
    en: "Saint Pierre and Miquelon",
    zh_disp: "圣皮埃尔...",
    en_disp: "Saint Pi..."
},
{
    code: 61,
    zh: "圣诞岛",
    en_short: "CX",
    py: "ShengDanDao",
    py_short: "SDD",
    en: "Christmas Island",
    zh_disp: "圣诞岛",
    en_disp: "Christma..."
},
{
    code: 290,
    zh: "圣赫勒拿",
    en_short: "SH",
    py: "ShengHeLeNa",
    py_short: "SHLN",
    en: "Saint Helena",
    zh_disp: "圣赫勒拿",
    en_disp: "Saint He..."
},
{
    code: 378,
    zh: "圣马力诺",
    en_short: "SM",
    py: "ShengMaLiNuo",
    py_short: "SMLN",
    en: "San Marino",
    zh_disp: "圣马力诺",
    en_disp: "San Marino"
},
{
    code: 592,
    zh: "圭亚那",
    en_short: "GY",
    py: "GuiYaNa",
    py_short: "GYN",
    en: "Guyana",
    zh_disp: "圭亚那",
    en_disp: "Guyana"
},
{
    code: 255,
    zh: "坦桑尼亚",
    en_short: "TZ",
    py: "TanSangNiYa",
    py_short: "TSNY",
    en: "Tanzania",
    zh_disp: "坦桑尼亚",
    en_disp: "Tanzania"
},
{
    code: 20,
    zh: "埃及",
    en_short: "EG",
    py: "AiJi",
    py_short: "AJ",
    en: "Egypt",
    zh_disp: "埃及",
    en_disp: "Egypt"
},
{
    code: 251,
    zh: "埃塞俄比亚",
    en_short: "ET",
    py: "AiSaiEBiYa",
    py_short: "ASEBY",
    en: "Ethiopia",
    zh_disp: "埃塞俄比亚",
    en_disp: "Ethiopia"
},
{
    code: 686,
    zh: "基里巴斯",
    en_short: "KI",
    py: "JiLiBaSi",
    py_short: "JLBS",
    en: "Kiribati",
    zh_disp: "基里巴斯",
    en_disp: "Kiribati"
},
{
    code: 992,
    zh: "塔吉克斯坦",
    en_short: "TJ",
    py: "TaJiKeSiTan",
    py_short: "TJKST",
    en: "Tajikistan",
    zh_disp: "塔吉克斯坦",
    en_disp: "Tajikistan"
},
{
    code: 221,
    zh: "塞内加尔",
    en_short: "SN",
    py: "SaiNaJiaEr",
    py_short: "SNJE",
    en: "Senegal",
    zh_disp: "塞内加尔",
    en_disp: "Senegal"
},
{
    code: 381,
    zh: "塞尔维亚",
    en_short: "RS",
    py: "SaiErWeiYa",
    py_short: "SEWY",
    en: "Serbia",
    zh_disp: "塞尔维亚",
    en_disp: "Serbia"
},
{
    code: 232,
    zh: "塞拉利昂",
    en_short: "SL",
    py: "SaiLaLiAng",
    py_short: "SLLA",
    en: "Sierra Leone",
    zh_disp: "塞拉利昂",
    en_disp: "Sierra L..."
},
{
    code: 357,
    zh: "塞浦路斯",
    en_short: "CY",
    py: "SaiPuLuSi",
    py_short: "SPLS",
    en: "Cyprus",
    zh_disp: "塞浦路斯",
    en_disp: "Cyprus"
},
{
    code: 248,
    zh: "塞舌尔",
    en_short: "SC",
    py: "SaiSheEr",
    py_short: "SSE",
    en: "Seychelles",
    zh_disp: "塞舌尔",
    en_disp: "Seychelles"
},
{
    code: 52,
    zh: "墨西哥",
    en_short: "MX",
    py: "MoXiGe",
    py_short: "MXG",
    en: "Mexico",
    zh_disp: "墨西哥",
    en_disp: "Mexico"
},
{
    code: 228,
    zh: "多哥",
    en_short: "TG",
    py: "DuoGe",
    py_short: "DG",
    en: "Togo",
    zh_disp: "多哥",
    en_disp: "Togo"
},
{
    code: 1,
    zh: "多米尼克",
    en_short: "DM",
    py: "DuoMiNiKe",
    py_short: "DMNK",
    en: "Dominica",
    zh_disp: "多米尼克",
    en_disp: "Dominica"
},
{
    code: 1,
    zh: "多米尼加共和国",
    en_short: "DO",
    py: "DuoMiNiJiaGongHeGuo",
    py_short: "DMNJGHG",
    en: "Dominican Republic",
    zh_disp: "多米尼加...",
    en_disp: "Dominica..."
},
{
    code: 358,
    zh: "奥兰群岛",
    en_short: "AX",
    py: "AoLanQunDao",
    py_short: "ALQD",
    en: "Aland Islands",
    zh_disp: "奥兰群岛",
    en_disp: "Aland Is..."
},
{
    code: 43,
    zh: "奥地利",
    en_short: "AT",
    py: "AoDiLi",
    py_short: "ADL",
    en: "Austria",
    zh_disp: "奥地利",
    en_disp: "Austria"
},
{
    code: 58,
    zh: "委内瑞拉",
    en_short: "VE",
    py: "WeiNaRuiLa",
    py_short: "WNRL",
    en: "Venezuela",
    zh_disp: "委内瑞拉",
    en_disp: "Venezuela"
},
{
    code: 880,
    zh: "孟加拉国",
    en_short: "BD",
    py: "MengJiaLaGuo",
    py_short: "MJLG",
    en: "Bangladesh",
    zh_disp: "孟加拉国",
    en_disp: "Bangladesh"
},
{
    code: 244,
    zh: "安哥拉",
    en_short: "AO",
    py: "AnGeLa",
    py_short: "AGL",
    en: "Angola",
    zh_disp: "安哥拉",
    en_disp: "Angola"
},
{
    code: 1,
    zh: "安圭拉",
    en_short: "AI",
    py: "AnGuiLa",
    py_short: "AGL",
    en: "Anguilla",
    zh_disp: "安圭拉",
    en_disp: "Anguilla"
},
{
    code: 1,
    zh: "安提瓜和巴布达",
    en_short: "AG",
    py: "AnTiGuaHeBaBuDa",
    py_short: "ATGHBBD",
    en: "Antigua and Barbuda",
    zh_disp: "安提瓜和...",
    en_disp: "Antigua ..."
},
{
    code: 376,
    zh: "安道尔",
    en_short: "AD",
    py: "AnDaoEr",
    py_short: "ADE",
    en: "Andorra",
    zh_disp: "安道尔",
    en_disp: "Andorra"
},
{
    code: 691,
    zh: "密克罗尼西亚联邦",
    en_short: "FM",
    py: "MiKeLuoNiXiYaLianBang",
    py_short: "MKLNXYLB",
    en: "Micronesia",
    zh_disp: "密克罗尼...",
    en_disp: "Micronesia"
},
{
    code: 505,
    zh: "尼加拉瓜",
    en_short: "NI",
    py: "NiJiaLaGua",
    py_short: "NJLG",
    en: "Nicaragua",
    zh_disp: "尼加拉瓜",
    en_disp: "Nicaragua"
},
{
    code: 234,
    zh: "尼日利亚",
    en_short: "NG",
    py: "NiRiLiYa",
    py_short: "NRLY",
    en: "Nigeria",
    zh_disp: "尼日利亚",
    en_disp: "Nigeria"
},
{
    code: 227,
    zh: "尼日尔",
    en_short: "NE",
    py: "NiRiEr",
    py_short: "NRE",
    en: "Niger",
    zh_disp: "尼日尔",
    en_disp: "Niger"
},
{
    code: 977,
    zh: "尼泊尔",
    en_short: "NP",
    py: "NiBoEr",
    py_short: "NBE",
    en: "Nepal",
    zh_disp: "尼泊尔",
    en_disp: "Nepal"
},
{
    code: 970,
    zh: "巴勒斯坦",
    en_short: "PS",
    py: "BaLeSiTan",
    py_short: "BLST",
    en: "Palestinian",
    zh_disp: "巴勒斯坦",
    en_disp: "Palestin..."
},
{
    code: 1,
    zh: "巴哈马",
    en_short: "BS",
    py: "BaHaMa",
    py_short: "BHM",
    en: "Bahamas",
    zh_disp: "巴哈马",
    en_disp: "Bahamas"
},
{
    code: 92,
    zh: "巴基斯坦",
    en_short: "PK",
    py: "BaJiSiTan",
    py_short: "BJST",
    en: "Pakistan",
    zh_disp: "巴基斯坦",
    en_disp: "Pakistan"
},
{
    code: 1,
    zh: "巴巴多斯",
    en_short: "BB",
    py: "BaBaDuoSi",
    py_short: "BBDS",
    en: "Barbados",
    zh_disp: "巴巴多斯",
    en_disp: "Barbados"
},
{
    code: 675,
    zh: "巴布亚新几内亚",
    en_short: "PG",
    py: "BaBuYaXinJiNaYa",
    py_short: "BBYXJNY",
    en: "Papua New Guinea",
    zh_disp: "巴布亚新...",
    en_disp: "Papua Ne..."
},
{
    code: 595,
    zh: "巴拉圭",
    en_short: "PY",
    py: "BaLaGui",
    py_short: "BLG",
    en: "Paraguay",
    zh_disp: "巴拉圭",
    en_disp: "Paraguay"
},
{
    code: 507,
    zh: "巴拿马",
    en_short: "PA",
    py: "BaNaMa",
    py_short: "BNM",
    en: "Panama",
    zh_disp: "巴拿马",
    en_disp: "Panama"
},
{
    code: 973,
    zh: "巴林",
    en_short: "BH",
    py: "BaLin",
    py_short: "BL",
    en: "Bahrain",
    zh_disp: "巴林",
    en_disp: "Bahrain"
},
{
    code: 55,
    zh: "巴西",
    en_short: "BR",
    py: "BaXi",
    py_short: "BX",
    en: "Brazil",
    zh_disp: "巴西",
    en_disp: "Brazil"
},
{
    code: 226,
    zh: "布基纳法索",
    en_short: "BF",
    py: "BuJiNaFaSuo",
    py_short: "BJNFS",
    en: "Burkina Faso",
    zh_disp: "布基纳法索",
    en_disp: "Burkina ..."
},
{
    code: 257,
    zh: "布隆迪",
    en_short: "BI",
    py: "BuLongDi",
    py_short: "BLD",
    en: "Burundi",
    zh_disp: "布隆迪",
    en_disp: "Burundi"
},
{
    code: 30,
    zh: "希腊",
    en_short: "GR",
    py: "XiLa",
    py_short: "XL",
    en: "Greece",
    zh_disp: "希腊",
    en_disp: "Greece"
},
{
    code: 680,
    zh: "帕劳",
    en_short: "PW",
    py: "PaLao",
    py_short: "PL",
    en: "Palau",
    zh_disp: "帕劳",
    en_disp: "Palau"
},
{
    code: 682,
    zh: "库克群岛",
    en_short: "CK",
    py: "KuKeQunDao",
    py_short: "KKQD",
    en: "Cook Islands",
    zh_disp: "库克群岛",
    en_disp: "Cook Isl..."
},
{
    code: 599,
    zh: "库拉索",
    en_short: "CW",
    py: "KuLaSuo",
    py_short: "KLS",
    en: "Kuraso",
    zh_disp: "库拉索",
    en_disp: "Kuraso"
},
{
    code: 1,
    zh: "开曼群岛",
    en_short: "KY",
    py: "KaiManQunDao",
    py_short: "KMQD",
    en: "Cayman Islands",
    zh_disp: "开曼群岛",
    en_disp: "Cayman I..."
},
{
    code: 49,
    zh: "德国",
    en_short: "DE",
    py: "DeGuo",
    py_short: "DG",
    en: "Germany",
    zh_disp: "德国",
    en_disp: "Germany"
},
{
    code: 39,
    zh: "意大利",
    en_short: "IT",
    py: "YiDaLi",
    py_short: "YDL",
    en: "Italy",
    zh_disp: "意大利",
    en_disp: "Italy"
},
{
    code: 677,
    zh: "所罗门群岛",
    en_short: "SB",
    py: "SuoLuoMenQunDao",
    py_short: "SLMQD",
    en: "Solomon Islands",
    zh_disp: "所罗门群岛",
    en_disp: "Solomon ..."
},
{
    code: 690,
    zh: "托克劳",
    en_short: "TK",
    py: "TuoKeLao",
    py_short: "TKL",
    en: "Stockerau",
    zh_disp: "托克劳",
    en_disp: "Stockerau"
},
{
    code: 371,
    zh: "拉脱维亚",
    en_short: "LV",
    py: "LaTuoWeiYa",
    py_short: "LTWY",
    en: "Latvia",
    zh_disp: "拉脱维亚",
    en_disp: "Latvia"
},
{
    code: 420,
    zh: "捷克共和国",
    en_short: "CZ",
    py: "JieKeGongHeGuo",
    py_short: "JKGHG",
    en: "Czech Republic",
    zh_disp: "捷克共和国",
    en_disp: "Czech Re..."
},
{
    code: 373,
    zh: "摩尔多瓦",
    en_short: "MD",
    py: "MoErDuoWa",
    py_short: "MEDW",
    en: "Moldova",
    zh_disp: "摩尔多瓦",
    en_disp: "Moldova"
},
{
    code: 377,
    zh: "摩纳哥",
    en_short: "MC",
    py: "MoNaGe",
    py_short: "MNG",
    en: "Monaco",
    zh_disp: "摩纳哥",
    en_disp: "Monaco"
},
{
    code: 673,
    zh: "文莱",
    en_short: "BN",
    py: "WenLai",
    py_short: "WL",
    en: "Brunei",
    zh_disp: "文莱",
    en_disp: "Brunei"
},
{
    code: 679,
    zh: "斐济",
    en_short: "FJ",
    py: "FeiJi",
    py_short: "FJ",
    en: "Fiji",
    zh_disp: "斐济",
    en_disp: "Fiji"
},
{
    code: 268,
    zh: "斯威士兰",
    en_short: "SZ",
    py: "SiWeiShiLan",
    py_short: "SWSL",
    en: "Swaziland",
    zh_disp: "斯威士兰",
    en_disp: "Swaziland"
},
{
    code: 421,
    zh: "斯洛伐克",
    en_short: "SK",
    py: "SiLuoFaKe",
    py_short: "SLFK",
    en: "Slovakia",
    zh_disp: "斯洛伐克",
    en_disp: "Slovakia"
},
{
    code: 386,
    zh: "斯洛文尼亚",
    en_short: "SI",
    py: "SiLuoWenNiYa",
    py_short: "SLWNY",
    en: "Slovenia",
    zh_disp: "斯洛文尼亚",
    en_disp: "Slovenia"
},
{
    code: 47,
    zh: "斯瓦尔巴特和扬马延",
    en_short: "SJ",
    py: "SiWaErBaTeHeYangMaYan",
    py_short: "SWEBTHYMY",
    en: "Svalbard og Jan Mayen",
    zh_disp: "斯瓦尔巴...",
    en_disp: "Svalbard..."
},
{
    code: 94,
    zh: "斯里兰卡",
    en_short: "LK",
    py: "SiLiLanKa",
    py_short: "SLLK",
    en: "Sri Lanka",
    zh_disp: "斯里兰卡",
    en_disp: "Sri Lanka"
},
{
    code: 65,
    zh: "新加坡",
    en_short: "SG",
    py: "XinJiaPo",
    py_short: "XJP",
    en: "Singapore",
    zh_disp: "新加坡",
    en_disp: "Singapore"
},
{
    code: 687,
    zh: "新喀里多尼亚",
    en_short: "NC",
    py: "XinKaLiDuoNiYa",
    py_short: "XKLDNY",
    en: "New Caledonia",
    zh_disp: "新喀里多...",
    en_disp: "New Cale..."
},
{
    code: 64,
    zh: "新西兰",
    en_short: "NZ",
    py: "XinXiLan",
    py_short: "XXL",
    en: "New Zealand",
    zh_disp: "新西兰",
    en_disp: "New Zeal..."
},
{
    code: 81,
    zh: "日本",
    en_short: "JP",
    py: "RiBen",
    py_short: "RB",
    en: "Japan",
    zh_disp: "日本",
    en_disp: "Japan"
},
{
    code: 56,
    zh: "智利",
    en_short: "CL",
    py: "ZhiLi",
    py_short: "ZL",
    en: "Chile",
    zh_disp: "智利",
    en_disp: "Chile"
},
{
    code: 44,
    zh: "曼岛",
    en_short: "IM",
    py: "ManDao",
    py_short: "MD",
    en: "Isle of man",
    zh_disp: "曼岛",
    en_disp: "Isle of ..."
},
{
    code: 850,
    zh: "朝鲜",
    en_short: "KP",
    py: "ChaoXian",
    py_short: "CX",
    en: "North Korea",
    zh_disp: "朝鲜",
    en_disp: "North Ko..."
},
{
    code: 855,
    zh: "柬埔寨",
    en_short: "KH",
    py: "JianPuZhai",
    py_short: "JPZ",
    en: "Kampuchea",
    zh_disp: "柬埔寨",
    en_disp: "Kampuchea"
},
{
    code: 44,
    zh: "根西岛",
    en_short: "GG",
    py: "GenXiDao",
    py_short: "GXD",
    en: "Guernsey",
    zh_disp: "根西岛",
    en_disp: "Guernsey"
},
{
    code: 1,
    zh: "格林纳达",
    en_short: "GD",
    py: "GeLinNaDa",
    py_short: "GLND",
    en: "Grenada",
    zh_disp: "格林纳达",
    en_disp: "Grenada"
},
{
    code: 299,
    zh: "格陵兰",
    en_short: "GL",
    py: "GeLingLan",
    py_short: "GLL",
    en: "Greenland",
    zh_disp: "格陵兰",
    en_disp: "Greenland"
},
{
    code: 995,
    zh: "格鲁吉亚",
    en_short: "GE",
    py: "GeLuJiYa",
    py_short: "GLJY",
    en: "Georgia",
    zh_disp: "格鲁吉亚",
    en_disp: "Georgia"
},
{
    code: 379,
    zh: "梵蒂冈",
    en_short: "VA",
    py: "FanDiGang",
    py_short: "FDG",
    en: "Vatican",
    zh_disp: "梵蒂冈",
    en_disp: "Vatican"
},
{
    code: 32,
    zh: "比利时",
    en_short: "BE",
    py: "BiLiShi",
    py_short: "BLS",
    en: "Belgium",
    zh_disp: "比利时",
    en_disp: "Belgium"
},
{
    code: 222,
    zh: "毛里塔尼亚",
    en_short: "MR",
    py: "MaoLiTaNiYa",
    py_short: "MLTNY",
    en: "Mauritania",
    zh_disp: "毛里塔尼亚",
    en_disp: "Mauritania"
},
{
    code: 230,
    zh: "毛里求斯",
    en_short: "MU",
    py: "MaoLiQiuSi",
    py_short: "MLQS",
    en: "Mauritius",
    zh_disp: "毛里求斯",
    en_disp: "Mauritius"
},
{
    code: 676,
    zh: "汤加",
    en_short: "TO",
    py: "TangJia",
    py_short: "TJ",
    en: "Tonga",
    zh_disp: "汤加",
    en_disp: "Tonga"
},
{
    code: 966,
    zh: "沙特阿拉伯",
    en_short: "SA",
    py: "ShaTeALaBo",
    py_short: "STALB",
    en: "Saudi Arabia",
    zh_disp: "沙特阿拉伯",
    en_disp: "Saudi Ar..."
},
{
    code: 33,
    zh: "法国",
    en_short: "FR",
    py: "FaGuo",
    py_short: "FG",
    en: "France",
    zh_disp: "法国",
    en_disp: "France"
},
{
    code: 590,
    zh: "法属圣马丁",
    en_short: "MF",
    py: "FaShuShengMaDing",
    py_short: "FSSMD",
    en: "Saint-Martin",
    zh_disp: "法属圣马丁",
    en_disp: "Saint-Ma..."
},
{
    code: 594,
    zh: "法属圭亚那",
    en_short: "GF",
    py: "FaShuGuiYaNa",
    py_short: "FSGYN",
    en: "French Guiana",
    zh_disp: "法属圭亚那",
    en_disp: "French G..."
},
{
    code: 689,
    zh: "法属波利尼西亚",
    en_short: "PF",
    py: "FaShuBoLiNiXiYa",
    py_short: "FSBLNXY",
    en: "French Polynesia",
    zh_disp: "法属波利...",
    en_disp: "French P..."
},
{
    code: 298,
    zh: "法罗群岛",
    en_short: "FO",
    py: "FaLuoQunDao",
    py_short: "FLQD",
    en: "Faroe Islands",
    zh_disp: "法罗群岛",
    en_disp: "Faroe Is..."
},
{
    code: 48,
    zh: "波兰",
    en_short: "PL",
    py: "BoLan",
    py_short: "BL",
    en: "Poland",
    zh_disp: "波兰",
    en_disp: "Poland"
},
{
    code: 1,
    zh: "波多黎各",
    en_short: "PR",
    py: "BoDuoLiGe",
    py_short: "BDLG",
    en: "Puerto Rico",
    zh_disp: "波多黎各",
    en_disp: "Puerto R..."
},
{
    code: 387,
    zh: "波斯尼亚和黑塞哥维那",
    en_short: "BA",
    py: "BoSiNiYaHeHeiSaiGeWeiNa",
    py_short: "BSNYHHSGWN",
    en: "Bosnia and Herzegovina",
    zh_disp: "波斯尼亚...",
    en_disp: "Bosnia a..."
},
{
    code: 66,
    zh: "泰国",
    en_short: "TH",
    py: "TaiGuo",
    py_short: "TG",
    en: "Thailand",
    zh_disp: "泰国",
    en_disp: "Thailand"
},
{
    code: 44,
    zh: "泽西岛",
    en_short: "JE",
    py: "ZeXiDao",
    py_short: "ZXD",
    en: "Jersey",
    zh_disp: "泽西岛",
    en_disp: "Jersey"
},
{
    code: 263,
    zh: "津巴布韦",
    en_short: "ZW",
    py: "JinBaBuWei",
    py_short: "JBBW",
    en: "Zimbabwe",
    zh_disp: "津巴布韦",
    en_disp: "Zimbabwe"
},
{
    code: 504,
    zh: "洪都拉斯",
    en_short: "HN",
    py: "HongDuLaSi",
    py_short: "HDLS",
    en: "Honduras",
    zh_disp: "洪都拉斯",
    en_disp: "Honduras"
},
{
    code: 509,
    zh: "海地",
    en_short: "HT",
    py: "HaiDi",
    py_short: "HD",
    en: "Haiti",
    zh_disp: "海地",
    en_disp: "Haiti"
},
{
    code: 853,
    zh: "澳门",
    en_short: "MO",
    py: "AoMen",
    py_short: "AM",
    en: "Macao",
    zh_disp: "澳门",
    en_disp: "Macao"
},
{
    code: 353,
    zh: "爱尔兰",
    en_short: "IE",
    py: "AiErLan",
    py_short: "AEL",
    en: "Ireland",
    zh_disp: "爱尔兰",
    en_disp: "Ireland"
},
{
    code: 372,
    zh: "爱沙尼亚",
    en_short: "EE",
    py: "AiShaNiYa",
    py_short: "ASNY",
    en: "Estonia",
    zh_disp: "爱沙尼亚",
    en_disp: "Estonia"
},
{
    code: 1,
    zh: "牙买加",
    en_short: "JM",
    py: "YaMaiJia",
    py_short: "YMJ",
    en: "Jamaica",
    zh_disp: "牙买加",
    en_disp: "Jamaica"
},
{
    code: 1,
    zh: "特克斯和凯科斯群岛",
    en_short: "TC",
    py: "TeKeSiHeKaiKeSiQunDao",
    py_short: "TKSHKKSQD",
    en: "Turks and Caicos Islands",
    zh_disp: "特克斯和...",
    en_disp: "Turks an..."
},
{
    code: 1,
    zh: "特立尼达和多巴哥",
    en_short: "TT",
    py: "TeLiNiDaHeDuoBaGe",
    py_short: "TLNDHDBG",
    en: "Trinidad and Tobago",
    zh_disp: "特立尼达...",
    en_disp: "Trinidad..."
},
{
    code: 290,
    zh: "特里斯坦-达库尼亚群岛",
    en_short: "TA",
    py: "TeLiSiTan-DaKuNiYaQunDao",
    py_short: "TLST-DKNYQD",
    en: "Tristan da Cunha",
    zh_disp: "特里斯坦...",
    en_disp: "Tristan ..."
},
{
    code: 591,
    zh: "玻利维亚",
    en_short: "BO",
    py: "BoLiWeiYa",
    py_short: "BLWY",
    en: "Bolivia",
    zh_disp: "玻利维亚",
    en_disp: "Bolivia"
},
{
    code: 674,
    zh: "瑙鲁",
    en_short: "NR",
    py: "NaoLu",
    py_short: "NL",
    en: "Nauru",
    zh_disp: "瑙鲁",
    en_disp: "Nauru"
},
{
    code: 46,
    zh: "瑞典",
    en_short: "SE",
    py: "RuiDian",
    py_short: "RD",
    en: "Sweden",
    zh_disp: "瑞典",
    en_disp: "Sweden"
},
{
    code: 41,
    zh: "瑞士",
    en_short: "CH",
    py: "RuiShi",
    py_short: "RS",
    en: "Switzerland",
    zh_disp: "瑞士",
    en_disp: "Switzerl..."
},
{
    code: 590,
    zh: "瓜德罗普岛",
    en_short: "GP",
    py: "GuaDeLuoPuDao",
    py_short: "GDLPD",
    en: "Guadeloupe",
    zh_disp: "瓜德罗普岛",
    en_disp: "Guadeloupe"
},
{
    code: 681,
    zh: "瓦利斯和富图纳",
    en_short: "WF",
    py: "WaLiSiHeFuTuNa",
    py_short: "WLSHFTN",
    en: "Wallis and Futuna",
    zh_disp: "瓦利斯和...",
    en_disp: "Wallis a..."
},
{
    code: 678,
    zh: "瓦努阿图",
    en_short: "VU",
    py: "WaNuATu",
    py_short: "WNAT",
    en: "Vanuatu",
    zh_disp: "瓦努阿图",
    en_disp: "Vanuatu"
},
{
    code: 262,
    zh: "留尼汪",
    en_short: "RE",
    py: "LiuNiWang",
    py_short: "LNW",
    en: "Reunion",
    zh_disp: "留尼汪",
    en_disp: "Reunion"
},
{
    code: 375,
    zh: "白俄罗斯",
    en_short: "BY",
    py: "BaiELuoSi",
    py_short: "BELS",
    en: "Belarus",
    zh_disp: "白俄罗斯",
    en_disp: "Belarus"
},
{
    code: 1,
    zh: "百慕大",
    en_short: "BM",
    py: "BaiMuDa",
    py_short: "BMD",
    en: "Bermuda",
    zh_disp: "百慕大",
    en_disp: "Bermuda"
},
{
    code: 350,
    zh: "直布罗陀",
    en_short: "GI",
    py: "ZhiBuLuoTuo",
    py_short: "ZBLT",
    en: "Gibraltar",
    zh_disp: "直布罗陀",
    en_disp: "Gibraltar"
},
{
    code: 500,
    zh: "福克兰群岛",
    en_short: "FK",
    py: "FuKeLanQunDao",
    py_short: "FKLQD",
    en: "Falkland Islands",
    zh_disp: "福克兰群岛",
    en_disp: "Falkland..."
},
{
    code: 965,
    zh: "科威特",
    en_short: "KW",
    py: "KeWeiTe",
    py_short: "KWT",
    en: "Kuwait",
    zh_disp: "科威特",
    en_disp: "Kuwait"
},
{
    code: 269,
    zh: "科摩罗",
    en_short: "KM",
    py: "KeMoLuo",
    py_short: "KML",
    en: "Comoros",
    zh_disp: "科摩罗",
    en_disp: "Comoros"
},
{
    code: 225,
    zh: "科特迪瓦",
    en_short: "CI",
    py: "KeTeDiWa",
    py_short: "KTDW",
    en: "Ivory Coast",
    zh_disp: "科特迪瓦",
    en_disp: "Ivory Co..."
},
{
    code: 61,
    zh: "科科斯群岛",
    en_short: "CC",
    py: "KeKeSiQunDao",
    py_short: "KKSQD",
    en: "Cocos Islands",
    zh_disp: "科科斯群岛",
    en_disp: "Cocos Is..."
},
{
    code: 51,
    zh: "秘鲁",
    en_short: "PE",
    py: "MiLu",
    py_short: "ML",
    en: "Peru",
    zh_disp: "秘鲁",
    en_disp: "Peru"
},
{
    code: 216,
    zh: "突尼斯",
    en_short: "TN",
    py: "TuNiSi",
    py_short: "TNS",
    en: "Tunisia",
    zh_disp: "突尼斯",
    en_disp: "Tunisia"
},
{
    code: 370,
    zh: "立陶宛",
    en_short: "LT",
    py: "LiTaoWan",
    py_short: "LTW",
    en: "Lithuania",
    zh_disp: "立陶宛",
    en_disp: "Lithuania"
},
{
    code: 252,
    zh: "索马里",
    en_short: "SO",
    py: "SuoMaLi",
    py_short: "SML",
    en: "Somalia",
    zh_disp: "索马里",
    en_disp: "Somalia"
},
{
    code: 962,
    zh: "约旦",
    en_short: "JO",
    py: "YueDan",
    py_short: "YD",
    en: "Jordan",
    zh_disp: "约旦",
    en_disp: "Jordan"
},
{
    code: 264,
    zh: "纳米比亚",
    en_short: "NA",
    py: "NaMiBiYa",
    py_short: "NMBY",
    en: "Namibia",
    zh_disp: "纳米比亚",
    en_disp: "Namibia"
},
{
    code: 683,
    zh: "纽埃",
    en_short: "NU",
    py: "NiuAi",
    py_short: "NA",
    en: "Niue",
    zh_disp: "纽埃",
    en_disp: "Niue"
},
{
    code: 95,
    zh: "缅甸",
    en_short: "MM",
    py: "MianDian",
    py_short: "MD",
    en: "Burma",
    zh_disp: "缅甸",
    en_disp: "Burma"
},
{
    code: 40,
    zh: "罗马尼亚",
    en_short: "RO",
    py: "LuoMaNiYa",
    py_short: "LMNY",
    en: "Romania",
    zh_disp: "罗马尼亚",
    en_disp: "Romania"
},
{
    code: 1,
    zh: "美属维京群岛",
    en_short: "VI",
    py: "MeiShuWeiJingQunDao",
    py_short: "MSWJQD",
    en: "U.S.Virgin Islands",
    zh_disp: "美属维京...",
    en_disp: "U.S.Virg..."
},
{
    code: 1,
    zh: "美属萨摩亚",
    en_short: "AS",
    py: "MeiShuSaMoYa",
    py_short: "MSSMY",
    en: "American Samoa",
    zh_disp: "美属萨摩亚",
    en_disp: "American..."
},
{
    code: 856,
    zh: "老挝",
    en_short: "LA",
    py: "LaoWo",
    py_short: "LW",
    en: "Laos",
    zh_disp: "老挝",
    en_disp: "Laos"
},
{
    code: 254,
    zh: "肯尼亚",
    en_short: "KE",
    py: "KenNiYa",
    py_short: "KNY",
    en: "Kenya",
    zh_disp: "肯尼亚",
    en_disp: "Kenya"
},
{
    code: 249,
    zh: "苏丹",
    en_short: "SD",
    py: "SuDan",
    py_short: "SD",
    en: "Sultan",
    zh_disp: "苏丹",
    en_disp: "Sultan"
},
{
    code: 597,
    zh: "苏里南",
    en_short: "SR",
    py: "SuLiNan",
    py_short: "SLN",
    en: "Suriname",
    zh_disp: "苏里南",
    en_disp: "Suriname"
},
{
    code: 246,
    zh: "英属印度洋领地",
    en_short: "IO",
    py: "YingShuYinDuYangLingDi",
    py_short: "YSYDYLD",
    en: "British Indian Ocean Territory",
    zh_disp: "英属印度...",
    en_disp: "British ..."
},
{
    code: 1,
    zh: "英属维京群岛",
    en_short: "VG",
    py: "YingShuWeiJingQunDao",
    py_short: "YSWJQD",
    en: "British Virgin Islands",
    zh_disp: "英属维京...",
    en_disp: "British ..."
},
{
    code: 31,
    zh: "荷兰",
    en_short: "NL",
    py: "HeLan",
    py_short: "HL",
    en: "Nederland",
    zh_disp: "荷兰",
    en_disp: "Nederland"
},
{
    code: 599,
    zh: "荷兰加勒比",
    en_short: "BQ",
    py: "HeLanJiaLeBi",
    py_short: "HLJLB",
    en: "Caribbean Netherlands",
    zh_disp: "荷兰加勒比",
    en_disp: "Caribbea..."
},
{
    code: 1,
    zh: "荷属圣马丁",
    en_short: "SX",
    py: "HeShuShengMaDing",
    py_short: "HSSMD",
    en: "Sint Maarten",
    zh_disp: "荷属圣马丁",
    en_disp: "Sint Maa..."
},
{
    code: 258,
    zh: "莫桑比克",
    en_short: "MZ",
    py: "MoSangBiKe",
    py_short: "MSBK",
    en: "Mozambique",
    zh_disp: "莫桑比克",
    en_disp: "Mozambique"
},
{
    code: 266,
    zh: "莱索托",
    en_short: "LS",
    py: "LaiSuoTuo",
    py_short: "LST",
    en: "Lesotho",
    zh_disp: "莱索托",
    en_disp: "Lesotho"
},
{
    code: 63,
    zh: "菲律宾",
    en_short: "PH",
    py: "FeiLvBin",
    py_short: "FLB",
    en: "Philippines",
    zh_disp: "菲律宾",
    en_disp: "Philippi..."
},
{
    code: 503,
    zh: "萨尔瓦多",
    en_short: "SV",
    py: "SaErWaDuo",
    py_short: "SEWD",
    en: "Salvatore",
    zh_disp: "萨尔瓦多",
    en_disp: "Salvatore"
},
{
    code: 685,
    zh: "萨摩亚",
    en_short: "WS",
    py: "SaMoYa",
    py_short: "SMY",
    en: "Samoa",
    zh_disp: "萨摩亚",
    en_disp: "Samoa"
},
{
    code: 351,
    zh: "葡萄牙",
    en_short: "PT",
    py: "PuTaoYa",
    py_short: "PTY",
    en: "Portugal",
    zh_disp: "葡萄牙",
    en_disp: "Portugal"
},
{
    code: 976,
    zh: "蒙古",
    en_short: "MN",
    py: "MengGu",
    py_short: "MG",
    en: "Mongolia",
    zh_disp: "蒙古",
    en_disp: "Mongolia"
},
{
    code: 1,
    zh: "蒙塞拉特",
    en_short: "MS",
    py: "MengSaiLaTe",
    py_short: "MSLT",
    en: "Montserrat",
    zh_disp: "蒙塞拉特",
    en_disp: "Montserrat"
},
{
    code: 212,
    zh: "西撒哈拉",
    en_short: "EH",
    py: "XiSaHaLa",
    py_short: "XSHL",
    en: "Western Sahara",
    zh_disp: "西撒哈拉",
    en_disp: "Western ..."
},
{
    code: 34,
    zh: "西班牙",
    en_short: "ES",
    py: "XiBanYa",
    py_short: "XBY",
    en: "Spain",
    zh_disp: "西班牙",
    en_disp: "Spain"
},
{
    code: 672,
    zh: "诺福克岛",
    en_short: "NF",
    py: "NuoFuKeDao",
    py_short: "NFKD",
    en: "Norfolk Island",
    zh_disp: "诺福克岛",
    en_disp: "Norfolk ..."
},
{
    code: 229,
    zh: "贝宁",
    en_short: "BJ",
    py: "BeiNing",
    py_short: "BN",
    en: "Benin",
    zh_disp: "贝宁",
    en_disp: "Benin"
},
{
    code: 260,
    zh: "赞比亚",
    en_short: "ZM",
    py: "ZanBiYa",
    py_short: "ZBY",
    en: "Zambia",
    zh_disp: "赞比亚",
    en_disp: "Zambia"
},
{
    code: 240,
    zh: "赤道几内亚",
    en_short: "GQ",
    py: "ChiDaoJiNaYa",
    py_short: "CDJNY",
    en: "Guinea Ecuatorial",
    zh_disp: "赤道几内亚",
    en_disp: "Guinea E..."
},
{
    code: 84,
    zh: "越南",
    en_short: "VN",
    py: "YueNan",
    py_short: "YN",
    en: "Vietnam",
    zh_disp: "越南",
    en_disp: "Vietnam"
},
{
    code: 994,
    zh: "阿塞拜疆",
    en_short: "AZ",
    py: "ASaiBaiJiang",
    py_short: "ASBJ",
    en: "Azerbaijan",
    zh_disp: "阿塞拜疆",
    en_disp: "Azerbaijan"
},
{
    code: 93,
    zh: "阿富汗",
    en_short: "AF",
    py: "AFuHan",
    py_short: "AFH",
    en: "Afghanistan",
    zh_disp: "阿富汗",
    en_disp: "Afghanis..."
},
{
    code: 213,
    zh: "阿尔及利亚",
    en_short: "DZ",
    py: "AErJiLiYa",
    py_short: "AEJLY",
    en: "Algeria",
    zh_disp: "阿尔及利亚",
    en_disp: "Algeria"
},
{
    code: 355,
    zh: "阿尔巴尼亚",
    en_short: "AL",
    py: "AErBaNiYa",
    py_short: "AEBNY",
    en: "Albania",
    zh_disp: "阿尔巴尼亚",
    en_disp: "Albania"
},
{
    code: 971,
    zh: "阿拉伯联合酋长国",
    en_short: "AE",
    py: "ALaBoLianHeQiuChangGuo",
    py_short: "ALBLHQCG",
    en: "Arabia",
    zh_disp: "阿拉伯联...",
    en_disp: "Arabia"
},
{
    code: 968,
    zh: "阿曼",
    en_short: "OM",
    py: "AMan",
    py_short: "AM",
    en: "Oman",
    zh_disp: "阿曼",
    en_disp: "Oman"
},
{
    code: 54,
    zh: "阿根廷",
    en_short: "AR",
    py: "AGenTing",
    py_short: "AGT",
    en: "Argentina",
    zh_disp: "阿根廷",
    en_disp: "Argentina"
},
{
    code: 247,
    zh: "阿森松岛",
    en_short: "AC",
    py: "ASenSongDao",
    py_short: "ASSD",
    en: "Ascension Island",
    zh_disp: "阿森松岛",
    en_disp: "Ascensio..."
},
{
    code: 297,
    zh: "阿鲁巴",
    en_short: "AW",
    py: "ALuBa",
    py_short: "ALB",
    en: "Aruba",
    zh_disp: "阿鲁巴",
    en_disp: "Aruba"
},
{
    code: 82,
    zh: "韩国",
    en_short: "KR",
    py: "HanGuo",
    py_short: "HG",
    en: "Korea",
    zh_disp: "韩国",
    en_disp: "Korea"
},
{
    code: 852,
    zh: "香港",
    en_short: "HK",
    py: "XiangGang",
    py_short: "XG",
    en: "HongKong",
    zh_disp: "香港",
    en_disp: "HongKong"
},
{
    code: 389,
    zh: "马其顿",
    en_short: "MK",
    py: "MaQiDun",
    py_short: "MQD",
    en: "Macedonia",
    zh_disp: "马其顿",
    en_disp: "Macedonia"
},
{
    code: 960,
    zh: "马尔代夫",
    en_short: "MV",
    py: "MaErDaiFu",
    py_short: "MEDF",
    en: "Maldives",
    zh_disp: "马尔代夫",
    en_disp: "Maldives"
},
{
    code: 265,
    zh: "马拉维",
    en_short: "MW",
    py: "MaLaWei",
    py_short: "MLW",
    en: "Mawlawi",
    zh_disp: "马拉维",
    en_disp: "Mawlawi"
},
{
    code: 596,
    zh: "马提尼克",
    en_short: "MQ",
    py: "MaTiNiKe",
    py_short: "MTNK",
    en: "Martinique",
    zh_disp: "马提尼克",
    en_disp: "Martinique"
},
{
    code: 60,
    zh: "马来西亚",
    en_short: "MY",
    py: "MaLaiXiYa",
    py_short: "MLXY",
    en: "Malaysia",
    zh_disp: "马来西亚",
    en_disp: "Malaysia"
},
{
    code: 262,
    zh: "马约特",
    en_short: "YT",
    py: "MaYueTe",
    py_short: "MYT",
    en: "Mayotte",
    zh_disp: "马约特",
    en_disp: "Mayotte"
},
{
    code: 692,
    zh: "马绍尔群岛",
    en_short: "MH",
    py: "MaShaoErQunDao",
    py_short: "MSEQD",
    en: "Marshall Islands",
    zh_disp: "马绍尔群岛",
    en_disp: "Marshall..."
},
{
    code: 356,
    zh: "马耳他",
    en_short: "MT",
    py: "MaErTa",
    py_short: "MET",
    en: "Malta",
    zh_disp: "马耳他",
    en_disp: "Malta"
},
{
    code: 223,
    zh: "马里",
    en_short: "ML",
    py: "MaLi",
    py_short: "ML",
    en: "Mali",
    zh_disp: "马里",
    en_disp: "Mali"
},
{
    code: 961,
    zh: "黎巴嫩",
    en_short: "LB",
    py: "LiBaNen",
    py_short: "LBN",
    en: "Lebanon",
    zh_disp: "黎巴嫩",
    en_disp: "Lebanon"
},
{
    code: 382,
    zh: "黑山共和国",
    en_short: "ME",
    py: "HeiShanGongHeGuo",
    py_short: "HSGHG",
    en: "Montenegro",
    zh_disp: "黑山共和国",
    en_disp: "Montenegro"
}];
if (typeof QNR == "undefined") QNR = {};
QNR.countryCodeDataEn = {};
QNR.countryCodeDataEn.tabs = [{
    title: "HOT",
    key: "hot"
},
{
    title: "A",
    key: "A"
},
{
    title: "B",
    key: "B"
},
{
    title: "C",
    key: "C"
},
{
    title: "D",
    key: "D"
},
{
    title: "E",
    key: "E"
},
{
    title: "F",
    key: "F"
},
{
    title: "G",
    key: "G"
},
{
    title: "H",
    key: "H"
},
{
    title: "I",
    key: "I"
},
{
    title: "J",
    key: "J"
},
{
    title: "K",
    key: "K"
},
{
    title: "L",
    key: "L"
},
{
    title: "M",
    key: "M"
},
{
    title: "N",
    key: "N"
},
{
    title: "O",
    key: "O"
},
{
    title: "P",
    key: "P"
},
{
    title: "Q",
    key: "Q"
},
{
    title: "R",
    key: "R"
},
{
    title: "S",
    key: "S"
},
{
    title: "T",
    key: "T"
},
{
    title: "U",
    key: "U"
},
{
    title: "V",
    key: "V"
},
{
    title: "W",
    key: "W"
},
{
    title: "Y",
    key: "Y"
},
{
    title: "Z",
    key: "Z"
}];
if (typeof window.QTMPL === "undefined") window.QTMPL = {};
window.QTMPL["box"] = new window.Hogan.Template(function(e, t, n) {
    var r = this;
    r.b(n = n || "");
    r.b('<div class="ui-city-sug"');
    if (r.s(r.f("width", e, t, 1), e, t, 0, 34, 60, "{{ }}")) {
        r.rs(e, t,
        function(e, t, n) {
            n.b(' style="width:');
            n.b(n.v(n.f("width", e, t, 0)));
            n.b('px"')
        });
        e.pop()
    }
    r.b(' data-hotcity-nogo="true">');
    r.b("\n" + n);
    r.b('    <i class="ico-close js_close_flight_hotcity" id="closeXI20"></i>');
    r.b("\n" + n);
    r.b('    <div class="m-hct-nav">');
    r.b("\n" + n);
    if (r.s(r.f("sort", e, t, 1), e, t, 0, 211, 327, "{{ }}")) {
        r.rs(e, t,
        function(e, t, n) {
            n.b('        <span data-key="');
            n.b(n.v(n.f("key", e, t, 0)));
            n.b('" data-tab="country-code-');
            n.b(n.v(n.f("type", e, t, 0)));
            n.b('" data-tab-id="dfh-');
            n.b(n.v(n.f("tab", e, t, 0)));
            n.b('">');
            n.b(n.v(n.f("tab", e, t, 0)));
            n.b("</span>");
            n.b("\n")
        });
        e.pop()
    }
    r.b("    </div>");
    r.b("\n" + n);
    if (r.s(r.f("sort", e, t, 1), e, t, 0, 361, 463, "{{ }}")) {
        r.rs(e, t,
        function(e, t, n) {
            n.b('    <div data-panel="country-code-');
            n.b(n.v(n.f("type", e, t, 0)));
            n.b('" data-panel-id="dfh-');
            n.b(n.v(n.f("tab", e, t, 0)));
            n.b('" class="m-hct-lst"></div>');
            n.b("\n")
        });
        e.pop()
    }
    r.b("</div>");
    return r.fl();
});
if (typeof module !== "undefined") module.exports = window.QTMPL["box"];
if (typeof window.QTMPL === "undefined") window.QTMPL = {};
window.QTMPL["list"] = new window.Hogan.Template(function(e, t, n) {
    var r = this;
    r.b(n = n || "");
    r.b('<dl class="e-hct-lst">');
    r.b("\n" + n);
    r.b("	<dd>");
    r.b("\n" + n);
    r.b("		<ul>");
    r.b("\n" + n);
    if (r.s(r.f("list", e, t, 1), e, t, 0, 48, 547, "{{ }}")) {
        r.rs(e, t,
        function(e, t, r) {
            r.b('		   		<li><a title="');
            r.b(r.v(r.f("zh", e, t, 0)));
            r.b(" ");
            r.b(r.v(r.f("en", e, t, 0)));
            r.b(" ");
            if (r.s(r.f("code", e, t, 1), e, t, 0, 93, 101, "{{ }}")) {
                r.rs(e, t,
                function(e, t, n) {
                    n.b(n.v(n.f("code", e, t, 0)))
                });
                e.pop()
            }
            if (!r.s(r.f("code", e, t, 1), e, t, 1, 0, 0, "")) {
                r.b(r.v(r.f("prenum", e, t, 0)))
            }
            r.b('" ');
            r.b("\n" + n);
            r.b('		   			class="js-hotcitylist" data-zh="');
            r.b(r.v(r.f("zh", e, t, 0)));
            r.b('" ');
            r.b("\n" + n);
            r.b('		   			data-code="');
            if (r.s(r.f("code", e, t, 1), e, t, 0, 218, 226, "{{ }}")) {
                r.rs(e, t,
                function(e, t, n) {
                    n.b(n.v(n.f("code", e, t, 0)))
                });
                e.pop()
            }
            if (!r.s(r.f("code", e, t, 1), e, t, 1, 0, 0, "")) {
                r.b(r.v(r.f("prenum", e, t, 0)))
            }
            r.b('" data-en="');
            r.b(r.v(r.f("en", e, t, 0)));
            r.b('" ');
            r.b("\n" + n);
            r.b('		   			data-country="');
            if (!r.s(r.f("isEnglish", e, t, 1), e, t, 1, 0, 0, "")) {
                r.b(r.v(r.f("zh", e, t, 0)))
            }
            if (r.s(r.f("isEnglish", e, t, 1), e, t, 0, 353, 359, "{{ }}")) {
                r.rs(e, t,
                function(e, t, n) {
                    n.b(n.v(n.f("en", e, t, 0)))
                });
                e.pop()
            }
            r.b('" href="#">');
            r.b("\n" + n);
            r.b("		   			");
            if (!r.s(r.f("isEnglish", e, t, 1), e, t, 1, 0, 0, "")) {
                r.b(r.v(r.f("zh_disp", e, t, 0)))
            }
            if (r.s(r.f("isEnglish", e, t, 1), e, t, 0, 446, 457, "{{ }}")) {
                r.rs(e, t,
                function(e, t, n) {
                    n.b(n.v(n.f("en_disp", e, t, 0)))
                });
                e.pop()
            }
            r.b(" ");
            if (r.s(r.f("code", e, t, 1), e, t, 0, 481, 489, "{{ }}")) {
                r.rs(e, t,
                function(e, t, n) {
                    n.b(n.v(n.f("code", e, t, 0)))
                });
                e.pop()
            }
            if (!r.s(r.f("code", e, t, 1), e, t, 1, 0, 0, "")) {
                r.b(r.v(r.f("prenum", e, t, 0)))
            }
            r.b("\n" + n);
            r.b("		   		</a></li>");
            r.b("\n")
        });
        e.pop()
    }
    r.b("		</ul>");
    r.b("\n" + n);
    r.b("	</dd>");
    r.b("\n" + n);
    r.b("</dl>");
    return r.fl();
});
if (typeof module !== "undefined") module.exports = window.QTMPL["list"]; (function(e) {
    function s(t, n, r, i, s, o, u, a) {
        var f;
        if (e.isPlainObject(t)) {
            r = t.lang;
            i = t.flushRight;
            s = t.nextTarget;
            o = t.defaultValue;
            u = t.onSelect;
            a = t.hotLength;
            f = t.placeholder;
            t = t.target
        }
        if (f) {
            e(t).attr("data-qcbox-placeholder", f)
        }
        n = "c" + (new Date).getTime() % 1e7 + "" + parseInt(Math.random() * 1e5);
        e(t).attr("data-qcbox-hotcity", n).attr("data-qcbox-suggest", n);
        this.lang = /en(glish)?/i.test(r) ? "en": "zh";
        this.isEnglish = this.lang == "en";
        this.tabs = this.lang == "en" ? QNR.countryCodeDataEn.tabs: QNR.countryCodeData.tabs;
        this.data = this.lang == "en" ? QNR.countryCodeDataEn.groups: QNR.countryCodeData.groups;
        this.type = n;
        this.flushRight = i;
        this.nextTarget = s;
        this._onSelect = u ||
        function() {};
        this._initHostList(a);
        this._initQcbox();
        this._initSuggest();
        e(t).qcbox();
        this._optimizeElements();
        this._bindExtraEvents();
        this.fixPosition();
        if (o) this.setValue(o)
    }
    function o(e, t) {
        t = t || 8;
        var n = "";
        var r = (t - 1) * 2;
        var i = "";
        var s = 0,
        o = 0;
        var u = /^[\u2E80-\u9FFF]+$/;
        while (s < r) {
            var a = e.substr(o++, 1) || "";
            s += u.test(a) ? 2 : 1;
            n += a
        }
        var f = e.replace(n, "");
        if (f.length > 2) {
            n += "..."
        } else if (f.length <= 1) {
            n += f
        } else {
            if (u.test(f.charAt(0)) || u.test(f.charAt(1))) n += "...";
            else n += f
        }
        return n
    }
    var t = "https://user.qunar.com/ajax/prenumQuery.jsp?input=*&format=js&callback=?";
    var n = "https://user.qunar.com/ajax/prenumHot.jsp?format=js&callback=?";
    var r = 6;
    var i = 6;
    s.prototype = {
        hotListHtml: "",
        countryList: QNR.countryCodeData.list,
        _initHostList: function(t) {
            var s = this;
            e.ajax({
                url: n,
                dataType: "jsonp",
                success: function(n) {
                    if (!n || !n.ret) return;
                    var u = n.data || [];
                    if (t && t > 0) u = u.slice(0, t);
                    n.data = u;
                    e.each(u,
                    function(e, t) {
                        t.zh_disp = o(t.zh, r);
                        t.en_disp = o(t.en, i)
                    });
                    n = {
                        list: n.data,
                        isEnglish: s.isEnglish
                    };
                    s.hotListHtml = QTMPL.list.render(n)
                }
            })
        },
        _initQcbox: function() {
            var t = this;
            e.RegisterPlugin("qcbox", "hotcity", t.type, {
                initialize: function() {
                    t.box = this
                },
                initializeStruct: function() {
                    var n = this.ui.$el,
                    r = this.ui,
                    i = this;
                    var s = t._getBoxHtml(t.type);
                    this.$hotcity.append(s);
                    s.find(".js_close_flight_hotcity").click(function() {
                        i.hideHotcity()
                    });
                    t._bindEvent(i, t.type);
                    e.tabs.init(s);
                    if (t.lang == "en") {
                        s.addClass("ui-city-sug-en")
                    }
                }
            })
        },
        _getBoxHtml: function() {
            var t = [];
            var n = this;
            e.each(this.tabs,
            function(e, n) {
                var r = {
                    key: n.key,
                    tab: n.title,
                    title: n.title
                };
                t.push(r)
            });
            var r = QTMPL.box.render({
                sort: t,
                type: this.type,
                cityType: "",
                width: this.lang == "en" ? 530 : 500
            });
            return e(r)
        },
        _bindEvent: function(t) {
            var n = this;
            var r = "country-code-" + this.type;
            e(e.tabs).bind(r + "-change",
            function(e, t, r, i) {
                var s = r.data("key");
                var o = i;
                n._renderCountryList(s, o)
            });
            this._bindListClick(t)
        },
        _renderCountryList: function(e, t) {
            if (t.html()) return;
            if (e == "hot") return t.html(this.hotListHtml);
            var n = this.isEnglish ? "en": "py";
            var s = this.countryList;
            var u = [];
            for (var a = 0,
            f = s.length; a < f; a++) {
                var l = s[a];
                if (l[n].substr(0, 1) == e) {
                    l.zh_disp = o(l.zh, r);
                    l.en_disp = o(l.en, i);
                    u.push(l)
                }
            }
            var c = {
                list: u,
                isEnglish: this.isEnglish
            };
            t.html(QTMPL.list.render(c))
        },
        _bindListClick: function(t) {
            var n = this;
            t.$hotcity.delegate("a.js-hotcitylist", "click",
            function(r) {
                r.preventDefault();
                var i = e(this),
                s = t.ui.$el;
                var o = i.data("code");
                var u = i.data("country");
                var a = i.data("zh");
                var f = s.data("q-suggest");
                if (f) {
                    f.setValue(u + " " + o)
                } else {
                    s.val(u + " " + o)
                }
                s.data("zh", a);
                s.data("country", u);
                s.data("code", o);
                s.data("valided", true);
                t.hideHotcity();
                if (n.nextTarget) e(n.nextTarget).focus();
                n._onSelect(s, s.data())
            })
        },
        _initSuggest: function() {
            var n = this;
            var r;
            e.RegisterPlugin("qcbox", "suggest", this.type, {
                initialize: function() {
                    var i = this.ui.$el;
                    var s = e("<div>").addClass("qsuggest-contaier");
                    n.$suggestCtn = s;
                    n.box.ui.$wrap.after(s);
                    i.qsuggest({
                        ajax: {
                            beforeSend: function() {},
                            url: t,
                            dataType: "jsonp",
                            cache: false
                        },
                        trimQuery: false,
                        autoSelect: true,
                        render: function(e) {
                            return e.txt
                        },
                        setValue: function(e) {
                            return e.val
                        },
                        reader: function(e) {
                            return n._suggestReader(e)
                        },
                        container: s,
                        exattr: function(e) {
                            return "data-sug_type=" + e.type
                        },
                        keyevent: function(e) {
                            if (!n.qsuggest) n.qsuggest = this;
                            n._suggestKeyEvent(e, this)
                        },
                        getData: function(e) {
                            var t = e.closest("table").data("data"),
                            n = t[e.attr("data-ind") * 1];
                            return n.val
                        },
                        on: {
                            "q-suggest-show": function() {
                                n.box.ui.$wrap.next().find("table").css("min-width", n._boxWidth + 1).css("width", "auto");
                                i.bind("keydown.kd",
                                function(t) {
                                    if (t.keyCode == 13) {
                                        if (i[0] && i[0].name != "q") {
                                            t.preventDefault()
                                        }
                                        e(self).trigger("hotsug-select", i.val())
                                    }
                                })
                            },
                            "q-suggest-setextdata": function(e, t, n) {
                                n.data("valided", true)
                            },
                            "q-suggest-setvalue": function(t, r, i) {
                                if (!r) {
                                    n.setValue("")
                                } else {
                                    var s = r.match(/(.+)\s(.+)/).slice(1, 3);
                                    n.setValue(s[1], s[0]);
                                    i.data("valided", true)
                                }
                                e(self).trigger("setvalue", [i])
                            },
                            "q-suggest-noresult": function(t, n) {
                                n.data("valided", false);
                                n.removeData("code en zh");
                                n.val("");
                                e;
                                e(self).trigger("setvalue", [n]);
                                r = true
                            },
                            "q-suggest-hide": function(t) {
                                var s = e(t.target);
                                i.unbind("keydown.kd");
                                if (n.nextTarget && s.val()) setTimeout(function() {
                                    e(n.nextTarget).focus()
                                },
                                1);
                                if (t.target.value) n._onSelect(s, s.data());
                                r = false
                            },
                            "q-suggest-user-action": function(t, n) {
                                t.preventDefault();
                                if (n == "mousedown") {
                                    e(self).trigger("hotsug-select", i.val())
                                }
                            },
                            "q-suggest-inputChange": function() {
                                if (!this.value) {
                                    n.setValue(null)
                                }
                            }
                        }
                    })
                }
            })
        },
        _suggestReader: function(e) {
            var t = this;
            var e = e.data;
            var n = [],
            r;
            var i = function(e) {
                if (t.lang == "en") var n = e.en + " (" + e.en_short + "," + e.zh + "," + e.py_short + ") " + e.prenum;
                else var n = e.zh + " (" + e.py_short + "," + e.en + "," + e.en_short + ") " + e.prenum;
                return n.replace(r, '<span class="keyString">$1</span>')
            };
            var s = function(e) {
                var s = 0;
                var o = null;
                if (e) o = e.data || e.result;
                var u = e.input;
                if (!o) {
                    n.push({
                        txt: '<span style="color: red">对不起，出现网络错误</span>',
                        val: "",
                        type: 1,
                        exClass: "errMsg"
                    });
                    return
                }
                u = u.replace(/[\\\/\.\*\?\+\$\&\^\[\]\(\)]/g, "");
                r = new RegExp("(" + u + ")", "i");
                for (var a = 0,
                f = o.length; a < f; a += 1) {
                    var l = o[a];
                    s++;
                    n.push({
                        txt: i(l),
                        val: l[t.lang] + " " + l.prenum,
                        type: 0
                    })
                }
                if (s <= 0) {
                    n.push({
                        txt: '<span style="color: red">对不起，没有找到结果</span>',
                        val: "",
                        type: 1,
                        exClass: "errMsg"
                    })
                }
            };
            s(e);
            return n
        },
        _getData: function(e) {
            var t = e.closest("table").data("data"),
            n = t[e.attr("data-ind") * 1];
            return n
        },
        _suggestKeyEvent: function(e, t) {
            var n = this;
            var r = t.visible();
            var i = e.keyCode;
            if (i === 40 && !r) {
                t.show();
                return
            }
            if (!r) return;
            var s = t.el.find("tr");
            var o = s.filter(".active");
            switch (i) {
            case 38:
            case 40:
                t._excludeEl = t._mouseFocus;
                var u = s.index(o);
                u = e.keyCode === 38 ? u - 1 : u + 1;
                if (u >= s.length) u = 0;
                if (u < 0) u = s.length - 1;
                o.removeClass("active");
                o = s.eq(u);
                var a = "";
                if (o.length > 0) {
                    a = n._getData(o);
                    t.setValue(a.val);
                    o.addClass("active")
                }
                e.preventDefault();
                t._trigger("q-suggest-user-action", [e.type, t.getValue(), i]);
                break;
            case 13:
                if (t.activeEl[0].name === "q") {
                    return
                }
                if (o.length > 0) {
                    var a = "";
                    a = n._getData(o);
                    t.setValue(a.val)
                };
            case 27:
                t.hide();
                t._trigger("q-suggest-user-action", [e.type, t.getValue(), i]);
                break;
            case 18:
            case 9:
                break
            }
        },
        _optimizeElements: function() {
            if (!this.box) return;
            var t = this.box.ui.$wrap;
            var n = t.find("input.textbox");
            var r = n.attr("name");
            n.removeAttr("name");
            this.$fieldInput = e('<input type="hidden">').attr("name", r).appendTo(t)
        },
        _bindExtraEvents: function() {
            if (!this.box) return;
            var e = this;
            var t = this.box.ui.$wrap.find("input.textbox");
            t.on("keyup",
            function(t) {
                if (t.keyCode != 8 || this.value.replace(/(^\s*)|(\s*$)/, "")) return;
                e.setValue(null)
            }).on("click",
            function() {
                var t = e.box.ui.$wrap.next().children();
                if (t.css("display") === "none") return;
                var n = t.find("tr.active");
                value = n.length ? e._getData(n).val: "";
                e.qsuggest.setValue(value);
                t.hide()
            })
        },
        fixPosition: function() {
            if (!this.box) return;
            var e = this.box.ui.$wrap;
            var t = e.find("input.textbox");
            var n = e.find(".qcbox-placeholder");
            var r = e.find(".qcbox-info");
            var i = e.find(".qcbox-fixed");
            var o = e.parent().find(".q-suggest");
            var u = parseInt(e.innerHeight());
            var a = parseInt(e.innerWidth()) || parseInt(e.parent().css("width"));
            this._boxWidth = a;
            t.css({
                height: u,
                "line-height": u + "px",
                width: a - 35,
                "margin-left": 5,
                padding: 0,
                border: "none 0"
            });
            n.css({
                "margin-left": 5,
                height: u,
                "line-height": u + "px",
                left: "0px"
            });
            r.css("top", parseInt((u - 15) / 2));
            i.css("top", u);
            if (this.flushRight) {
                i.css({
                    left: "auto",
                    right: -1
                })
            }
            if (/MSIE\s[567]/.test(navigator.appVersion)) {
                e.css("z-index", s.currZIndex);
                this.$suggestCtn.css("z-index", s.currZIndex);
                s.currZIndex--
            }
        },
        setValue: function(e, t) {
            if (!this.box) return;
            this.$fieldInput.val(e || "");
            var n = this.box.ui.$wrap.find("input.textbox");
            var r = this.countryList;
            var i = {};
            var e = parseInt(e);
            if (e) for (var s = 0; s < r.length; s++) {
                if (e == r[s].code) {
                    if (t) {
                        var o = r[s][this.lang];
                        if (t == o || t.indexOf(o) > -1 || o.indexOf(t) > -1) {
                            i = r[s];
                            break
                        }
                    } else {
                        i = r[s];
                        break
                    }
                }
            }
            n.data("country", i[this.lang] || "");
            n.data("zh", i.zh || "");
            n.data("en", i.en || "");
            n.data("code", i.code || "");
            var u = i[this.lang] + " " + i.code;
            if (i.code) {
                var a = n.val();
                if (!a || a.match(/\d+/)[0] != e) n.val(u);
                n.data("code", i.code || e)
            }
        },
        getCode: function() {
            if (this.box && this.box.ui) return this.box.ui.$wrap.find("input.textbox").data("code")
        },
        validate: function() {
            return !! this.getCode()
        }
    };
    s.currZIndex = 300;
    window.QNR.CountryCodeInputer = s
})(jQuery);
window.BEACON = new
function() {
    function e(e) {
        if (!this.sid) return;
        var t = new Image;
        var n = ["s=" + this.sid];
        for (var r = 1; r < arguments.length; r++) {
            n.push(String.fromCharCode(96 + r) + "=" + encodeURIComponent(arguments[r]))
        }
        n.push("n=" + Math.random());
        if (window.location.protocol == "https:") {
            t.src = ["https://qcommons.qunar.com/bc/", e, "?", n.join("&")].join("")
        } else {
            t.src = ["http://bc.qunar.com/", e, "?", n.join("&")].join("")
        }
    }
    this.sid = "";
    this.f = function() {
        e.apply(this, ["f"].concat(Array.prototype.slice.call(arguments, 0)))
    };
    this.w = function() {
        e.apply(this, ["w"].concat(Array.prototype.slice.call(arguments, 0)))
    };
    this.w = function() {
        e.apply(this, ["w"].concat(Array.prototype.slice.call(arguments, 0)))
    };
    this.click = this.clk = function() {
        e.apply(this, ["clk"].concat(Array.prototype.slice.call(arguments, 0)))
    }
};
var z = {};
z.controls = {};
z.bindings = {};
z.datamodels = {};
z.cache = {};
z.utils = {};
z.data = {};
z.navigate = {
    openWindow: function(e, t) {
        window.open(e, t)
    },
    redirect: function(e) {
        if (e) {
            var t = decodeURIComponent(e);
            window.location.href = t.substring(0, 4) == "http" ? t: "http://user.qunar.com" + t
        }
    }
}; (function() {
    z.extend = function(e, t) {
        if (!e || !t || !(typeof e == "function")) return;
        if (typeof t == "function") {
            var n = e.prototype;
            e.prototype = new t;
            e.prototype.constructor = e;
            for (var r in n) {
                e.prototype[r] = n[r]
            }
            e.supr = t
        } else if (typeof t == "object") {
            var i = e.prototype;
            for (var s in t) i[s] = t[s]
        }
    };
    z.create = function(e) {
        if (typeof e != "function") return null;
        return new e
    };
    z.findControlById = function(e) {
        return z.cache.controls[e]
    };
    z.getId = function(e) {
        e = e || "global";
        var t = z.cache.newIds = z.cache.newIds || {};
        t[e] = t[e] ? t[e] + 1 : 1;
        return e + t[e]
    };
    z.globalEval = function() {};
    z.getElementById = function(e) {
        return e && document.getElementById(e)
    };
    z.querySelector = function(e, t) {
        if (arguments.length == 1) {
            t = arguments[0];
            e = document
        }
        return e.querySelector ? e.querySelector(t) : $(e).find(t)[0]
    };
    z.querySelectorAll = function(e, t) {
        if (arguments.length == 1) {
            t = arguments[0];
            e = document
        }
        return e.querySelectorAll ? e.querySelectorAll(t) : $(e).find(t)
    };
    z.addEvent = function() {
        if (document.addEventListener) {
            return function(e, t, n) {
                if (e.length) for (var r = 0; r < e.length; r++) z.addEvent(e[r], t, n);
                else e.addEventListener(t, n, false)
            }
        } else {
            return function(e, t, n) {
                if (e.length) for (var r = 0; r < e.length; r++) z.addEvent(e[r], t, n);
                else e.attachEvent("on" + t,
                function() {
                    return n.call(e, window.event)
                })
            }
        }
    } ();
    z.removeEvent = function() {
        if (document.removeEventListener) {
            return function(e, t, n) {
                if (e.length) for (var r = 0; r < e.length; r++) z.removeEvent(e[r], t, n);
                else e.removeEventListener(t, n)
            }
        } else {
            return function(e, t, n) {
                if (e.length) for (var r = 0; r < e.length; r++) z.removeEvent(e[r], t, n);
                else e.detachEvent("on" + t,
                function() {
                    return n.call(e, window.event)
                })
            }
        }
    } ();
    z.logger = function() {
        var e = ["error", "warn", "info", "log", "debug", "clear", "group", "groupEnd", "groupCollapsed", "memory", "profile", "profileEnd", "time", "timeEnd", "timeline", "timelineEnd", "markTimeline", "trace", "assert", "count", "timeStamp", "dir", "dirxml", "table"];
        var t = e.length;
        var n = {};
        for (var r = 0; r < t; r++) {
            var i = e[r];
            n[i] = function(e) {
                return function() {
                    if (!z.debug && e != "warn" && e != "error") return;
                    if (window.console && console[e] && console[e].apply) console[e].apply(console, arguments)
                }
            } (i)
        }
        return n
    } ();
    z.aop = {};
    z.aop.injectAll = function(e, t, n) {
        for (var r in e) {
            if (typeof e[r] == "function") {
                z.aop.inject(e, r, t, n)
            }
        }
        for (var r in e.prototype) {
            if (typeof e.prototype[r] == "function") {
                z.aop.inject(e.prototype, r, t, n)
            }
        }
    };
    z.aop.inject = function(e, t, n, r) {
        if (!t) {
            this.injectAll(e, n, r);
            return
        }
        var i = e[t];
        if (!i && typeof e == "function") {
            i = e.prototype[t];
            e = e.prototype
        }
        if (!i && typeof i != "function") return;
        e[t] = function() {
            z.logger.log("inject before: " + t, arguments);
            if (n && typeof n == "function") n.apply(this, arguments);
            var e = i.apply(this, arguments);
            if (r && typeof r == "function") r.apply(this, arguments);
            z.logger.log("inject after: " + t, arguments);
            return e
        }
    }
})(); (function() {
    Object.create = Object.create ||
    function(e) {
        function t() {}
        if (arguments.length > 1) {
            throw new Error("Object.create implementation only accepts the first parameter.")
        }
        t.prototype = e;
        return new t
    };
    if (! ("bind" in Function.prototype)) {
        Function.prototype.bind = function(e) {
            var t = this;
            if (arguments.length <= 1) {
                return function() {
                    return t.apply(e, arguments)
                }
            } else {
                var n = Array.prototype.slice.call(arguments, 1);
                return function() {
                    return t.apply(e, arguments.length === 0 ? n: n.concat(Array.prototype.slice.call(arguments)))
                }
            }
        }
    }
    if (! ("trim" in String.prototype)) {
        String.prototype.trim = function() {
            return this.replace(/^\s+/, "").replace(/\s+$/, "")
        }
    }
    if (! ("indexOf" in Array.prototype)) {
        Array.prototype.indexOf = function(e, t) {
            if (t === undefined) t = 0;
            if (t < 0) t += this.length;
            if (t < 0) t = 0;
            for (var n = this.length; t < n; t++) if (t in this && this[t] === e) return t;
            return - 1
        }
    }
    if (! ("lastIndexOf" in Array.prototype)) {
        Array.prototype.lastIndexOf = function(e, t) {
            if (t === undefined) t = this.length - 1;
            if (t < 0) t += this.length;
            if (t > this.length - 1) t = this.length - 1;
            for (t++; t-->0;) if (t in this && this[t] === e) return t;
            return - 1
        }
    }
    if (! ("forEach" in Array.prototype)) {
        Array.prototype.forEach = function(e, t) {
            for (var n = 0,
            r = this.length; n < r; n++) if (n in this) e.call(t, this[n], n, this)
        }
    }
    if (! ("map" in Array.prototype)) {
        Array.prototype.map = function(e, t) {
            var n = new Array(this.length);
            for (var r = 0,
            i = this.length; r < i; r++) if (r in this) n[r] = e.call(t, this[r], r, this);
            return n
        }
    }
    if (! ("filter" in Array.prototype)) {
        Array.prototype.filter = function(e, t) {
            var n = [],
            r;
            for (var i = 0,
            s = this.length; i < s; i++) if (i in this && e.call(t, r = this[i], i, this)) n.push(r);
            return n
        }
    }
    if (! ("every" in Array.prototype)) {
        Array.prototype.every = function(e, t) {
            for (var n = 0,
            r = this.length; n < r; n++) if (n in this && !e.call(t, this[n], n, this)) return false;
            return true
        }
    }
    if (! ("some" in Array.prototype)) {
        Array.prototype.some = function(e, t) {
            for (var n = 0,
            r = this.length; n < r; n++) if (n in this && e.call(t, this[n], n, this)) return true;
            return false
        }
    }
    Array.prototype.remove = function(e, t) {
        var n = this.slice((t || e) + 1 || this.length);
        this.length = e < 0 ? this.length + e: e;
        return this.push.apply(this, n)
    };
    Array.prototype.contain = function(e) {
        return this.indexOf(e) !== -1
    };
    Array.prototype.removeAt = function(e) {
        if (e < 0 || e >= this.length) return null;
        var t = this[e];
        for (var n = e,
        r = this.length - 2; n < r; n++) this[n] = this[n + 1];
        this.length--;
        return t
    };
    Array.prototype.removeItem = function(e) {
        var t = this.indexOf(e);
        if (t >= 0) this.removeAt(t);
        return this
    };
    Array.isArray = Array.isArray ||
    function(e) {
        Object.prototype.toString.call(e) === "[object Array]"
    };
    z.placeHolder = function(e, t, n) {
        if (!e.getAttribute("placeholder")) return;
        var r = t === true ? true: false;
        var i = "placeholder" in document.createElement("input");
        if (i) return;
        var s = e.getAttribute("placeholder");
        if (!r) {
            e.onfocus = function() {
                e.value == s && (e.value = "");
                e.style.color = ""
            };
            e.onblur = function() {
                if (e.value == s || e.value == "") {
                    e.style.color = "#ccc";
                    e.value = s
                } else e.style.color = ""
            };
            e.onblur()
        } else {
            if (e.style.display == "none") return;
            var o = document.createTextNode(s);
            var u = document.createElement("span");
            if (n) {
                u.className = n
            } else {
                var a = "position:absolute; color:#ccc; display:inline-block; overflow:hidden";
                a += ";font-family:" + l(e, "fontFamily");
                a += ";font-size:" + l(e, "fontSize");
                a += ";margin-left:" + parseInt(l(e, "marginLeft")) ? parseInt(l(e, "marginLeft")) + 3 + "px": 3 + "px";
                a += ";margin-top:" + parseInt(l(e, "marginTop")) ? l(e, "marginTop") : 1 + "px";
                a += ";padding-left:" + l(e, "paddingLeft");
                a += ";width" + e.offsetWidth - parseInt(l(e, "marginLeft")) + "px";
                a += ";height" + e.offsetHeight + "px";
                a += ";line-height" + e.nodeName.toLowerCase() == "textarea" ? "": e.offsetHeight + "px";
                u.className = "wrap-placeholder";
                u.style.cssText = a
            }
            u.appendChild(o);
            e.parentNode.insertBefore(u, e);
            u.onclick = function() {
                e.focus()
            };
            e.onfocus = function() {
                u.style.display = "none"
            };
            e.onblur = function() {
                f()
            };
            e.onblur();
            function f() {
                u.style.display = e.value != "" ? "none": "inline-block"
            }
            function l(e, t) {
                var n = null;
                if (e.currentStyle) n = e.currentStyle[t];
                else if (window.getComputedStyle) n = window.getComputedStyle(e, null)[t];
                return n
            }
        }
    }
})(); (function() {
    var e = {
        _events: {},
        on: function(e, t, n) {
            var e = arguments[0];
            var t = arguments[1];
            var n = arguments[2];
            if (!e || !t) return this;
            if (typeof e != "string" || typeof t != "function") return this;
            if (this._events == null) this._events = {};
            var r = this._events[e] = this._events[e] || [];
            if (z.events.hasEvent.call(this, e, t)) {
                z.logger.log("重复注册事件！", arguments);
                return this
            }
            var i = {
                fn: t,
                scope: n
            };
            if (arguments.length > 3) i.params = Array.prototype.slice.call(arguments, 3);
            r.push(i);
            return this
        },
        un: function(e, t) {
            if (arguments.length == 0) {
                this._events = {};
                return this
            }
            if (!e || !this._events) return false;
            var n = this._events[e];
            if (!n || n.length <= 0) return this;
            if (!t) {
                this._events[e] = []
            } else {
                var r = null;
                var i = n.length;
                for (var s = 0; s < i; s++) if (n[s].fn == t) {
                    r = s;
                    break
                }
                if (r >= 0) n.removeAt(r)
            }
            return this
        },
        hasEvent: function(e, t) {
            if (!e || !this._events) return false;
            var n = this._events[e];
            if (!n || n.length <= 0) return false;
            if (!t && n.length > 0) return true;
            var r = n.length;
            for (var i = 0; i < r; i++) if (n[i].fn == t) return true;
            return false
        },
        excute: function(e, t, n, r) {
            if (!e || !this._events) return;
            var i = this._events[e];
            if (!i || i.length <= 0) return;
            var s = Array.prototype.slice.call(arguments, 1);
            var o = i.length;
            z.logger.log(e + "事件开始执行,事件数：" + o);
            for (var u = 0; u < o; u++) {
                try {
                    var s = i[u].params ? i[u].params.concat(s) : s;
                    if (false === i[u].fn.apply(i[u].scope, s)) {
                        z.logger.log("第" + (u + 1) + "个返回值为false，控制了事件中断执行");
                        return false
                    }
                } catch(a) {
                    z.logger.error("第" + (u + 1) + "个函数执行出错", a)
                }
            }
            z.logger.log(e + "事件开始执行完成")
        }
    };
    z.events = e
})(); (function() {
    var e = function(e) {
        if (!e) return null;
        this._el = typeof e == "object" ? e: z.getElementById(e);
        if (this.init) this.init()
    };
    z.cache.controls = {};
    z.controls.create = function(e, t) {
        if (!t) return null;
        var n = z.controls[e || "BaseControl"];
        if (!n) {
            z.logger.log("找不到控件类型：" + e);
            return null
        }
        var r = new n(t);
        z.cache.controls[t] = r;
        return r
    };
    z.controls.createExtend = function(e) {
        if (!e) return null;
        var t = function() {};
        z.extend(t, z.controls.BaseControl);
        z.controls[e + "Control"] = t;
        return t
    };
    var t = e.prototype;
    t._namespace = "z.controls";
    t._className = "BaseControl";
    t._baseCls = "base";
    t._hoverCls = t._baseCls + "-hover";
    t._focusCls = t._baseCls + "-focus";
    t._disabledCls = t._baseCls + "-disable";
    t._readOnlyCls = t._baseCls + "-readonly";
    t._hiddenCls = t._baseCls + "-hidden";
    t.init = function() {
        if (!this._el) return
    };
    t.destory = function() {
        this.un();
        this._el = null
    };
    t.get = function(e) {
        if (e && e.length <= 0) return;
        var t = this["set" + e.substring(0, 1).toUpperCase() + e.substring(1, e.length)];
        return t ? t.call(this, e) : this._el.getAttribute(e)
    };
    t.set = function(e, t) {
        if (e && e.length <= 0) return;
        var n = this["set" + e.substring(0, 1).toUpperCase() + e.substring(1, e.length)];
        if (n) n.apply(this, Array.prototype.slice.call(arguments, 1));
        else this._el.setAttribute(e, t);
        return this
    };
    t.setData = function(e) {};
    t.getValue = function() {
        return ("value" in this._el ? this._el.value: this._el.innerText || this._el.textContent) || ""
    };
    t.setValue = function(e) {
        e = e == null ? "": e;
        if ("value" in this._el && this._el.value !== e) this._el.value = e;
        else if ("textContent" in this._el && this._el.textContent != e) this._el.textContent = e;
        else if (this._el.innerText !== e) this._el.innerText = e;
        return this
    };
    t.setReadOnly = function(e) {
        if (this._el.readOnly == e) return this;
        this._el.readOnly = e;
        return e ? this.addCss(this._readOnlyCls) : this.removeCss(this._readOnlyCls)
    };
    t.getReadOnly = function() {
        return this._el.readOnly || this.hasCss(this._readOnlyCls)
    };
    t.setDisabled = function(e) {
        if (this._el.disabled == e) return this;
        this._el.disabled = e;
        return e ? this.addCss(this._disabledCls) : this.removeCss(this._disabledCls)
    };
    t.getDisabled = function() {
        return this._el.disabled || this.hasCss(this._disabledCls)
    };
    t.setVisible = function(e) {
        return e == false ? this.addCss(this._hiddenCls) : this.removeCss(this._hiddenCls)
    };
    t.getVisible = function() {
        return this.hasCss(this._visibleCls)
    };
    t.setTitle = function(e) {
        this._el.title = e;
        return this
    };
    t.getTitle = function() {
        return this._el.title
    };
    t.setInnerText = function(e) {
        this._el.innerText = e;
        this._el.textContent = e;
        return this
    };
    t.getInnerText = function() {
        return this._el.innerText || this._el.textContent
    };
    t.hasCss = function(e) {
        if (!e) return false;
        var t = this._el.className.split(" ");
        return t.indexOf(e) >= 0
    };
    t.addCss = function(e) {
        e = e && e.trim();
        if (!e) return this;
        if (!this.hasCss(e)) this._el.className = this._el.className + " " + e;
        return this
    };
    t.removeCss = function(e) {
        e = e && e.trim();
        if (!e) return this;
        var t = this._el.className.split(" ");
        var n = t.length;
        for (var r = 0; r < n; r++) if (t[r].trim() === e) t[r] = "";
        this._el.className = t.join(" ");
        return this
    };
    t.on = z.events.on;
    t.un = z.events.un;
    t.fireEvent = z.events.excute;
    t.addDomEvent = function(e, t, n, r) {
        if (!e || !t || !n || !typeof n == "function") return;
        var i = function(e, t) {
            return function(r, i, s, o, u) {
                if (arguments[0] == "removDomEvent") {
                    z.removeEvent(this, t, arguments.callee);
                    return
                }
                n.apply(e, arguments)
            }
        } (r || this, t);
        z.addEvent(e, t, i)
    };
    t.removeDomEvent = function(e, t, n) {};
    t.getElementByClassName = function(e) {
        return this._el && e && z.querySelector(this._el, "." + e)
    };
    t.getElementByTagName = function(e) {
        return this._el && e && z.querySelector(this._el, e)
    };
    return z.controls.BaseControl = e
})(); (function() {
    var e = function(e) {
        z.controls.BaseControl.call(this, e)
    };
    z.extend(e, z.controls.BaseControl);
    var t = e.prototype;
    t._namespace = "z.controls";
    t._className = "BaseView";
    t._baseCls = "view";
    t._disabledCls = t._baseCls + "-disable";
    t._readOnlyCls = t._baseCls + "-readonly";
    t._hiddenCls = t._baseCls + "-hidden";
    t.init = function() {
        if (!this._el) return
    };
    t.destory = function() {
        this.un();
        this._el = null
    };
    t.setVisible = function(e) {
        this._el.style.display = e ? "block": "none"
    };
    return z.controls.BaseView = e
})(); (function() {
    z.bindings.create = function(e) {
        if (!e) return;
        var t = e.controlType;
        var n = t ? t + "Binding": "Base";
        var r = z.bindings[n];
        if (!r) {
            z.logger.log(n + ",这种类型的绑定器为空,所以使用基本绑定器z.bindings.Base！");
            r = z.bindings.Base
        }
        return new r(e)
    };
    z.bindings.syncTimeSpan = 15;
    z.bindings.asyncSpan = -1;
    z.bindings.mergeChanges = function(e, t) {
        if (!e || !t || t.length <= 0) return;
        var n = t[0];
        if (!n) return;
        var r = z.bindings._delayChanges = z.bindings._delayChanges || [];
        if (r.length == 0) {
            var i = z.bindings.syncTimeSpan;
            if (i == -1 || i == false) return;
            if (i == null) i = 0;
            r.push({
                binding: e,
                property: n,
                args: t
            });
            if (z.bindings.asyncSpan < 0 || z.bindings.asyncSpan == false) setTimeout(z.bindings.syncToUI, i);
            else setTimeout(z.bindings.asyncToUI, i);
            return
        }
        var s;
        var o;
        for (var u = 0; u < r.length; u++) {
            o = r[u];
            if (o.binding == e && o.property == n) {
                s = r[u];
                break
            }
        }
        if (s) s.args = t;
        else r.push({
            binding: e,
            property: n,
            args: t
        })
    };
    z.bindings.syncToUI = function() {
        var e = z.bindings._delayChanges;
        var t = e.length;
        z.bindings._delayChanges = [];
        z.logger.debug("----------sync To UI start------------:Changes-length:", t);
        var n;
        for (var r = 0; r < t; r++) {
            z.logger.debug("sync update: ", e[r].binding._mapping, e[r].args);
            n = e[r].binding;
            n.syncToUI.apply(n, e[r].args)
        }
        z.logger.debug("----------sync To UI end-------------")
    };
    z.bindings.asyncToUI = function() {
        setTimeout(function() {
            var e = z.bindings._delayChanges;
            var t = e.length;
            z.logger.debug("----------async To UI start------------Changes-length:", t);
            if (!t || t <= 0) return;
            z.bindings._delayChanges = [];
            var n = z.bindings.asyncSpan || 10;
            var r = z.bindings.syncTimeSpan || 0;
            z.bindings._asyncToUIInternal(e, 0, n, r)
        },
        z.bindings.syncTimeSpan || 0)
    };
    z.bindings._asyncToUIInternal = function(e, t, n, r) {
        var i = e.length;
        if (!i || i <= 0) return;
        t = t || 0;
        var s = t + (n || 10);
        s = s >= i ? i: s;
        if (s < t) return;
        z.logger.debug("_asyncToUIInternal——start:", t, ",end:" + s, ",timeSpan:" + r);
        var o;
        for (var u = t; u < s; u++) {
            z.logger.debug("async update: ", e[u].binding._mapping, e[u].args);
            o = e[u].binding;
            o.syncToUI.apply(o, e[u].args)
        }
        if (s >= i) {
            z.logger.debug("----------async To UI end------------");
            e = null;
            t = null;
            n = null;
            r = null;
            return
        }
        t = s;
        setTimeout(function() {
            z.bindings._asyncToUIInternal(e, t, n, r)
        },
        r || 0)
    };
    var e = function(e) {
        this._mapping = e
    };
    var t = e.prototype;
    t.bindData = function() {
        var e = this.getControl();
        if (!e) return;
        var t = this.getModel();
        if (t && e.setData) e.setData(t._data)
    };
    t.init = function() {
        this.applyBindings()
    };
    t.applyBindings = function() {
        var e = this.getControl();
        var t = this.getModel();
        if (t) {
            t.addListener(this);
            if (t._events) {
                for (var n in t._events) {
                    var r = n.replace("before", "").replace("after", "");
                    this["_on" + r] = this["_on" + r] ||
                    function(e) {
                        var t = this.getModel();
                        var n = t && (t[e] || t.fireEvent);
                        return n && n.apply(t, arguments)
                    };
                    var i = this["_on" + r];
                    if (!i.isBinded) {
                        e.on(r, i, this, r);
                        i.isBinded = true
                    }
                }
            }
            if (e) {
                e.on("change", this._onchange, this);
                e.on("click", this._onclick, this)
            }
        }
    };
    t._onclick = function() {
        var e = this.getModel();
        if (e) e.click()
    };
    t._onchange = function() {
        var e = this.getControl().getValue();
        var t = this.getModel();
        if (t.getValue() != e) {
            t.change(e)
        }
    };
    t.getModel = function() {
        if (this._parent) return this._parent.getModel(this._mapping.modelName)
    };
    t.getControl = function() {
        return z.findControlById(this._mapping.controlId)
    };
    t.changeModel = function(e) {
        var t = this.getModel();
        if (t.getValue() != e) t.change(e)
    };
    t.syncToUI = function(e, t) {
        var n = this.getControl();
        var r = this.getMethod(n, e);
        if (r) r.apply(this, arguments)
    };
    t.changeUI = t.propertyChange = function(e, t) {
        z.bindings.mergeChanges(this, arguments)
    };
    t.getMethod = function(e, t) {
        if (!e || !t) return null;
        var n = "set" + t.substring(0, 1).toUpperCase() + t.substring(1);
        var r = this[n];
        if (!r && (e[n] || e["set"])) {
            r = this[n] = function(t, r) {
                if (e[n]) e[n].apply(e, Array.prototype.slice.call(arguments, 1));
                else e["set"].apply(e, arguments)
            }
        }
        return r
    };
    z.bindings.Base = e;
    var n = function(e) {
        z.bindings.Base.call(this, e)
    };
    z.extend(n, z.bindings.Base);
    var t = n.prototype;
    t.init = function(e, t) {
        if (!e) return;
        this._viewModel = e;
        this._viewModel._before("init");
        this._viewModel.addListener(this);
        this._childMappings = t;
        this._childBindings = [];
        var n = this._childMappings.length;
        for (var r = 0; r < n; r++) {
            var i = z.bindings.create(this._childMappings[r]);
            if (i) {
                i._parent = this;
                this._childBindings.push(i);
                i.init()
            }
        }
        this.bindData();
        this._viewModel._after("init")
    };
    t.bindData = function() {
        this.getModel()._before("bindding");
        for (var e = 0; e < this._childBindings.length; e++) {
            this._childBindings[e].bindData()
        }
        this.getModel()._after("bindding")
    };
    t.getModel = function(e) {
        return e && this._viewModel ? this._viewModel[e] : this._viewModel
    };
    z.bindings.ContainerBinding = n
})(); (function() {
    z.datamodels = {};
    var e = function(e) {
        this._listeners = [];
        this._data = e || {}
    };
    var t = e.prototype;
    t.addListener = function(e) {
        if (this._listeners.indexOf(e) < 0) this._listeners.push(e);
        return this
    };
    t.removeListener = function(e) {
        this._listeners.removeItem(e)
    };
    t.propertyChange = function(e, t) {
        var n = this._listeners.length;
        for (var r = 0; r < n; r++) this._listeners[r].propertyChange.apply(this._listeners[r], arguments);
        return this
    };
    t.on = z.events.on;
    t.un = z.events.un;
    t.fireEvent = function(e, t) {
        if (false != this._before.apply(this, arguments)) {
            this._after.apply(this, arguments)
        }
    };
    t._before = function(e, t) {
        if (!e) return;
        e = "before" + e;
        z.events.excute.apply(this, arguments)
    };
    t._after = function(e, t) {
        if (!e) return;
        e = "after" + e;
        z.events.excute.apply(this, arguments)
    };
    t.get = function(e) {
        if (e && e.length <= 0) return this;
        var t = this["get" + e.substring(0, 1).toUpperCase() + e.substring(1, e.length)];
        return t ? t.call(this) : this._data[e]
    };
    t.set = function(e, t) {
        if (e && e.length <= 0) return this;
        if (arguments.length <= 2 && e != "note" && e != "error" && e != "level") {
            var n = this._data[e];
            if (n !== undefined && n === t) return this
        }
        var r = this["set" + e.substring(0, 1).toUpperCase() + e.substring(1, e.length)];
        if (r) {
            r.apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            this._data[e] = t;
            this.propertyChange.apply(this, arguments)
        }
        return this
    };
    t.setData = function(e, t) {
        if (e) this._data[e] = t
    };
    t.getData = function(e) {
        if (arguments.length == 0) return this._data;
        else if (e) return this._data[e];
        return null
    };
    t.setReadOnly = function(e) {
        if (this._data.readOnly != e) {
            this._data.readOnly = e;
            this.propertyChange("readOnly", e)
        }
        return this
    };
    t.getReadOnly = function() {
        return this._data.readOnly
    };
    t.setVisible = function(e) {
        if (this._data.visible != e) {
            this._data.visible = e;
            this.propertyChange("visible", e)
        }
        return this
    };
    t.getVisible = function() {
        return this._data.visible
    };
    t.getValue = function() {
        return "value" in this._data ? this._data.value: null
    };
    t.setValue = function(e) {
        if (this._data.value != e) {
            var t = {
                oldValue: this._data.value,
                value: e
            };
            if (false !== this._before("valuechange", t)) {
                this._data.value = e;
                this._after("valuechange", t);
                this.propertyChange("value", e)
            }
        }
        return this
    };
    t.change = function(e, t) {
        if (this._data.value != e) {
            var n = {
                oldValue: this._data.value,
                value: e
            };
            if (false !== this._before("change", n)) {
                if (false !== this._before("valuechange", n)) {
                    this._data.value = e;
                    this._after("valuechange", n);
                    if (t) this.propertyChange("value", e)
                }
                this._after("change", n)
            }
        }
        return this
    };
    t.click = function(e, t) {
        if (false !== this._before("click")) {
            this._after("click")
        }
        return this
    };
    z.datamodels.Base = e
})();
z.viewmodels = {}; (function() {
    z.cache.viewmodels = {};
    z.viewmodels.create = function(e, t) {
        if (e && z.viewmodels[e]) {
            if (z.cache.viewmodels[t] != null) {
                z.logger.warn("已经存在id未" + t + "的ViewModel！创建失败");
                return
            }
            z.cache.viewmodels[t] = new z.viewmodels[e](t);
            return z.cache.viewmodels[t]
        }
    };
    var e = function(e) {
        z.datamodels.Base.call(this);
        this._name = e || z.getId("dy_viewmodel_");
        if (this.init) this.init()
    };
    z.extend(e, z.datamodels.Base);
    e.create = function(e) {
        var e = z.getId("dy_viewmodel_");
        var t = new z.datamodels.ContainerModel(e)
    };
    var t = e.prototype;
    t.getData = t.collectData = function() {
        var e = {};
        for (var t in this) {
            if (this[t] instanceof z.datamodels.Base) {
                e[t] = this[t].getValue()
            }
        }
        return e
    };
    z.datamodels.ContainerModel = e
})();
z.viewmodels.define = function(e, t) {
    var n = function() {
        z.datamodels.ContainerModel.call(this)
    };
    n.prototype = new z.datamodels.ContainerModel;
    n.prototype.constructor = n;
    if (typeof t == "function") n.prototype.init = t;
    z.viewmodels[e] = n;
    return n
};
z.viewbinding = {};
z.viewbinding.init = function(e) {
    e = e && typeof e == "string" ? document.getElementById(e) : e;
    if (!e) return;
    var t = e.id = e.id || z.getId("_view_");
    var n = e.getAttribute("data-viewmodel");
    if (!n) {
        z.logger.warn("vmodel未绑定！");
        return
    }
    var r = z.getId(t + "_viewmodel_");
    var i = z.viewmodels.create(n, r);
    if (!i) {
        z.logger.warn(n + "未创建成功！");
        return
    }
    i.pageId = t;
    z.cache.viewmodels[t] = i;
    var s = z.querySelectorAll(e, "[data-model]");
    var o = s.length;
    var u = [];
    for (var a = 0; a < o; a++) {
        var f = s[a].getAttribute("data-model");
        var l = s[a].getAttribute("data-controlType");
        var c = s[a].id;
        if (!c) {
            c = z.getId(t + "_" + (f || "control") + "_");
            s[a].id = c;
            z.logger.log("创建控件ID： " + c)
        }
        var h = z.controls.create(l, c);
        if (!h) {
            z.logger.error("控件未创建成功！", "控件类型：" + l, "控件id：" + c, "data-model：" + f)
        }
        u.push({
            controlId: c,
            controlType: l,
            modelName: f
        })
    }
    var p = z.controls.create("BaseView", t);
    if (i.isNeedSync) {
        z.logger.log("UI反向同步开始");
        i.fireEvent("beforeSync");
        var o = u.length;
        var f;
        var d;
        var v;
        for (var a = 0; a < o; a++) {
            z.logger.log("同步：" + f);
            f = u[a].modelName;
            v = u[a].controlId;
            d = z.cache.controls[v];
            if (!i[f]) i[f] = new z.datamodels.Base;
            if (u[a].controlType !== "BaseView") {
                if (d && d.getValue && i[f]._data) i[f]._data.value = d.getValue()
            }
        }
        i.fireEvent("afterSync");
        z.logger.log("UI反向同步结束")
    }
    var m = new z.bindings.ContainerBinding({
        controlId: t,
        controlType: null,
        modelName: r
    });
    m.init(i, u)
}; (function() {
    z.data.ServiceProxy = function(e) {
        if (!e) return;
        this._config = e;
        for (var t in e) {
            if (typeof e[t] == "string") {
                e[t] = {
                    url: e[t],
                    method: "post"
                }
            }
            this[t] = this.createAction(t)
        }
    };
    z.data.ServiceProxy.create = function(e) {
        return new z.data.ServiceProxy(e)
    };
    var e = z.data.ServiceProxy.prototype;
    e.createAction = function(e) {
        return function(t, n, r) {
            this.doAction(e, t, n, r)
        }
    };
    e.doAction = function(e, t, n, r) {
        var i = this._config[e];
        if (!i) return;
        var s = i.url;
        var o = i.method || "post";
        this.ajax(s, o, t, n, r)
    };
    e.ajax = function(e, t, n, r, i) {
        $.ajax({
            url: e,
            type: t,
            dataType: "json",
            data: n,
            success: function(e) {
                if ( !! r) {
                    r.call(i, e)
                }
            }
        })
    }
})(); (function() {
    var e = function(e) {
        z.controls.BaseControl.call(this, e);
        this.initExtend()
    };
    z.extend(e, z.controls.BaseControl);
    var t = e.prototype;
    t._className = "Button";
    t._baseCls = "btn";
    t._hoverCls = t._baseCls + "-hover";
    t._focusCls = t._baseCls + "-focus";
    t._disabledCls = t._baseCls + "-disable";
    t._readOnlyCls = t._baseCls + "-readonly";
    t._hiddenCls = t._baseCls + "-hidden";
    t.initExtend = function(e, t) {
        if (!this._el) return;
        this.addDomEvent(this._el, "click", this.click, this);
        this._oldText = this.getInnerText()
    };
    t.click = function() {
        if (this._lockHandle) return;
        this.fireEvent("click")
    };
    t.setLock = function(e, t) {
        if (!e) return this.unlock();
        this.lock(e, t ||
        function(e) {
            return e + "秒后可再获取"
        })
    };
    t.lock = function(e, t) {
        if (this._lockHandle != null) return;
        e = parseInt(e);
        if (!e) return this.unlock();
        this.setInnerText(t(e));
        this.setReadOnly(true);
        var n = function(e, n) {
            return function() {
                n--;
                if (!n) {
                    e.unlock(t(n))
                } else {
                    e.setInnerText(t(n));
                    e.setReadOnly(true);
                    e._lockHandle = setTimeout(arguments.callee, 1e3)
                }
            }
        } (this, e);
        this._lockHandle = setTimeout(n, 1e3)
    };
    t.unlock = function(e) {
        if (this._lockHandle) {
            clearTimeout(this._lockHandle);
            delete this._lockHandle
        }
        this.setReadOnly(false);
        this.setInnerText(e || this._oldText)
    };
    t.setData = function(e) {
        if (!e) return;
        if (e.visible != null) {
            this.setVisible(e.visible)
        }
    };
    z.controls.Button = e
})(); (function() {
    var e = function(e) {
        z.controls.BaseControl.call(this, e)
    };
    z.extend(e, z.controls.BaseControl);
    var t = e.prototype;
    t._classFullName = "TextBox";
    t._baseCls = "textbox";
    t._hoverCls = t._baseCls + "-hover";
    t._focusCls = t._baseCls + "-focus";
    t._disabledCls = t._baseCls + "-disable";
    t._readOnlyCls = t._baseCls + "-readonly";
    t._hiddenCls = t._baseCls + "-hidden";
    t._placeholderCls = t._baseCls + "-placeholder";
    t.init = function() {
        if (!this._el) return;
        this.addDomEvent(this._el, "change",
        function() {
            this.fireEvent("change")
        },
        this);
        if (this.initExtend) this.initExtend();
        z.placeHolder(this._el, this._el.type == "password", this._placeholderCls)
    };
    t.setFocus = function(e) {
        this._el.focus();
        this.addCss(this._focusCls);
        this.addDomEvent(this._el, "blur")
    };
    z.controls.TextBox = e
})(); (function() {
    var e = function(e) {
        z.controls.BaseControl.call(this, e)
    };
    z.extend(e, z.controls.BaseControl);
    var t = e.prototype;
    t._classFullName = "CheckBox";
    t._baseCls = "checkbox";
    t._hoverCls = t._baseCls + "-hover";
    t._focusCls = t._baseCls + "-focus";
    t._disabledCls = t._baseCls + "-disable";
    t._readOnlyCls = t._baseCls + "-readonly";
    t._hiddenCls = t._baseCls + "-hidden";
    t.init = function() {
        if (!this._el) return;
        this.addDomEvent(this._el, "click",
        function() {
            this.fireEvent("change")
        },
        this)
    };
    t.setFocus = function(e) {
        this._el.focus()
    };
    t.getValue = function() {
        return this._el.checked
    };
    t.setValue = function(e) {
        if (this._el.checked != e) {
            return this._el.checked = e
        }
    };
    z.controls.CheckBox = e
})(); (function() {
    var e = function(e) {
        if (!e) return;
        z.controls.BaseControl.call(this, e)
    };
    z.extend(e, z.controls.BaseControl);
    var t = e.prototype;
    t._classFullName = "TextBoxGroup";
    t._baseCls = "textbox-group";
    t._hoverCls = t._baseCls + "-hover";
    t._focusCls = t._baseCls + "-focus";
    t._disabledCls = t._baseCls + "-disable";
    t._readOnlyCls = t._baseCls + "-readonly";
    t._hiddenCls = t._baseCls + "-hidden";
    t._errorCls = t._baseCls + "-error";
    t._placeholderCls = "textbox-placeholder";
    t.init = function() {
        this._label = this.getElementByClassName("label");
        this._note = this.getElementByClassName("note");
        this._input = this.getElementByClassName("textbox");
        if (this._input) {
            var e = "ActiveXObject" in window && !window.XMLHttpRequest;
            var t = "ActiveXObject" in window && window.XMLHttpRequest && (!document.documentMode || document.documentMode == 7);
            z.placeHolder(this._input, true, this._placeholderCls);
            this.addDomEvent(this._input, "change",
            function() {
                if (this._floatButtonMouseDown === true && this._input.type != "password") return;
                this.fireEvent("change")
            },
            this);
            this.addTextBoxFloatButtonEvent()
        }
        this._hasDefaultPlaceholder = "placeholder" in document.createElement("input")
    };
    t.getLabelText = function() {
        var e = this._label && this._label.innerText;
        return e == null || e == undefined ? "": e
    };
    t.setLabelText = function(e) {
        if (this._label) this._label.innerText = e;
        return this
    };
    t.getValue = function() {
        if (!this._input) return "";
        if (this._input.value == this._input.getAttribute("placeholder")) return "";
        return this._input.value
    };
    t.setValue = function(e) {
        if (!this._input) return;
        if (this._input.value !== e) {
            this._input.value = e;
            if (!this._hasDefaultPlaceholder && this._input.onblur) this._input.onblur()
        }
        return this
    };
    t.setReadOnly = function(e) {
        if (this._el.readOnly == e) return this;
        this._el.readOnly = e;
        if (this._input) this._input.readOnly = e;
        return e ? this.addCss(this._readOnlyCls) : this.removeCss(this._readOnlyCls)
    };
    t.setFocus = function() {
        this._input.focus()
    };
    t.setData = function(e) {
        for (var t in e) {
            this.set(t, e[t])
        }
        return this
    };
    t.setNote = function(e, t) {
        if (!this._note) return;
        if (arguments.length == 0 || arguments.length == 1 && arguments[0] === false) {
            this._note.className = "note";
            this._note.innerHTML = t || "&nbsp;";
            return
        }
        if (e) {
            this._note.className = "note note-" + e;
            if (this._note.innerHTML != t) this._note.innerHTML = t || "&nbsp;";
            this.setWrapError()
        }
    };
    t.setWrapError = function(e) {
        this._wraperror = e != undefined ? e: this._wraperror;
        if (this._wraperror == undefined) this._wraperror = this._el.getAttribute("wrap-error") || this._note.getAttribute("wrap-error") == "true" || false;
        if (this._wraperror) this.addCss("textbox-group-wrap-error");
        else this.removeCss("textbox-group-wrap-error")
    };
    t.setInfo = function(e) {
        this.setNote(e)
    };
    t.setError = function(e) {
        return e ? this.setNote("no", e) : this.setNote(false)
    };
    t.setMaxlength = function(e) {
        if (e == -1) {
            this._input.removeAttribute("maxLength");
            return
        }
        this._input.setAttribute("maxLength", e)
    };
    t.addTextBoxFloatButtonEvent = function() {
        if (!this._input) return;
        if (this.floatButton === false || this._el.getAttribute("floatbutton") === "false" || this._input.getAttribute("floatbutton") === "false") return;
        this.addDomEvent(this._input, "focus",
        function() {
            this.showFloatButton()
        },
        this);
        this.addDomEvent(this._input, "keyup",
        function() {
            this.showFloatButton()
        },
        this);
        this.addDomEvent(this._input, "blur",
        function() {
            var e = this;
            setTimeout(function() {
                if (!e._floatButtonMouseDown) e.hideFloatBntton();
                e = null
            },
            50);
            this.fireEvent("blur")
        },
        this)
    };
    t._getFloatButton = function() {
        var e = this.getElementByClassName(this._floatBtnCls);
        if (e == null) {
            e = document.createElement("b");
            e.className = this._floatBtnCls;
            this._el.insertBefore(e, this._input && this._input.nextSibling)
        }
        return e
    };
    t.onFloatButtonMouseLeave = function() {
        var e = this;
        setTimeout(function() {
            delete e._floatButtonMouseDown;
            e = null
        },
        60);
        this.fireEvent("floatbutton_mouseup")
    };
    t._initFloatButton = function() {
        if (!this._input) return;
        var e = this._input.type == "password";
        this._floatBtnCls = this._floatBtnCls || (e ? "textbox-eye": "textbox-clear");
        this._floatBtn = this._getFloatButton();
        this.addDomEvent(this._floatBtn, "mousedown",
        function() {
            this._floatButtonMouseDown = true;
            this.fireEvent("floatbutton_mousedown")
        },
        this);
        this.addDomEvent(this._floatBtn, "mouseup", this.onFloatButtonMouseLeave, this);
        this.addDomEvent(this._floatBtn, "mouseleave",
        function() {
            if (this._floatButtonMouseDown) this.onFloatButtonMouseLeave()
        },
        this);
        if (e) {
            this.on("floatbutton_mousedown",
            function() {
                this.showTextBoxPreViewBox(true)
            },
            this);
            this.on("floatbutton_mouseup",
            function() {
                this.showTextBoxPreViewBox(false);
                this._input.focus()
            },
            this)
        } else {
            this.on("floatbutton_mouseup",
            function() {
                var e = this.getValue();
                if (e == "" || e == null || e == this._input.getAttribute("placeholder")) return;
                this._input.value = "";
                this._input.focus();
                this.fireEvent("change");
                this.hideFloatBntton()
            },
            this)
        }
    };
    t.showFloatButton = function() {
        if (this.getValue() != "") {
            if (this._floatBtn == null) this._initFloatButton();
            if (this._floatBtn) this._floatBtn.style.display = "inline"
        } else {
            this.hideFloatBntton()
        }
    };
    t.hideFloatBntton = function() {
        if (this._floatBtn) this._floatBtn.style.display = "none"
    };
    t.showTextBoxPreViewBox = function(e) {
        if (this._input && this._input.type == "password" && this.getValue() != "") {
            this._previewBox = this._previewBox || this.getElementByClassName("textbox-preview");
            if (!this._previewBox && e === false) return;
            if (!this._previewBox) {
                this._previewBox = document.createElement("input");
                this._previewBox.className = "textbox-preview";
                this._el.insertBefore(this._previewBox, this._input)
            }
            var t = !(e === false || this._previewBox.className == "textbox-preview-show");
            var n = t ? "textbox-preview-show": "textbox-preview";
            this._previewBox.value = this._input.value;
            this._input.className = t ? "textbox-hidden": "textbox";
            this._previewBox.className = n
        }
    };
    z.controls.TextBoxGroup = e
})(); (function() {
    var e = function(e) {
        z.controls.TextBoxGroup.call(this, e);
        this.initExtend()
    };
    e.prototype = new z.controls.TextBoxGroup;
    e.prototype.constructor = e;
    var t = e.prototype;
    t._classFullName = "TextBoxGroupPassword";
    t.initExtend = function() {
        this.addPasswordValidator();
        this._safeGrade = this.getElementByClassName("safe-grade")
    };
    t.addPasswordValidator = function() {
        this._input = this._input || this.getElementByTagName("input");
        this.addDomEvent(this._input, "keydown", this.onkeydown, this);
        this.addDomEvent(this._input, "keyup", this.onkeyup, this);
        this.addDomEvent(this._input, "blur", this.onblur, this)
    };
    t.onkeydown = function(e) {
        var t = this.getValue();
        e = e || window.event;
        var n = e.keyCode || e.which;
        if (n == 32) {
            e.returnValue = false;
            return false
        }
    };
    t.onkeyup = function() {
        this.showTooltip(true);
        this.fireEvent("keyup", this.getValue())
    };
    t.onblur = function() {
        this.hideTooltip()
    };
    t.showTooltip = function(e) {
        this.addCss("password-tooltip");
        if (!e) return this.addCss("password-tooltip-hidden");
        else this.removeCss("password-tooltip-hidden");
        var t = this.getElementByTagName("ul");
        if (t == null) {
            t = document.createElement("ul");
            t.innerHTML = "<li data-tip='length'>长度为6-30个字符</li><li data-tip='chars'>建议由数字、字母、符号组成</li><li data-tip='userid'>不宜与注册手机号相同</li>";
            this._el.appendChild(t)
        }
    };
    t.hideTooltip = function() {
        this.addCss("password-tooltip");
        this.addCss("password-tooltip-hidden");
        var e = z.querySelectorAll(this._el, "[data-tip]");
        for (var t = 0; t < e.length; t++) {
            e[t].className = ""
        }
    };
    t.setTooltip = function(e) {
        if (!e) return this.hideTooltip();
        var t = e.isEmail;
        var n = e.errorTips || {};
        for (var r in n) {
            var i = z.querySelector(this._el, "[data-tip=" + r + "]");
            i.className = n[r] ? "error": "right";
            if (r == "userid") {
                var s = t ? "不宜与注册邮箱名相同": "不宜与注册手机号相同";
                if ("innerText" in i) if (i.innerText != s) i.innerText = s;
                else if (i.textContent != s) i.textContent = s
            }
        }
    };
    t.setNote = function(e, t) {
        if (e == "yes" && this._note) {
            this._note.className = "note";
            this._note.innerHTML = t || "&nbsp;";
            this.showSafeGrade(t || 0);
            return
        }
        this.showSafeGrade(false);
        if (!this._note) return;
        if (arguments.length == 0 || arguments.length == 1 && arguments[0] === false) {
            this._note.className = "note";
            this._note.innerHTML = t || "&nbsp;";
            return
        }
        if (e) {
            this._note.className = "note note-" + e;
            this._note.innerHTML = t || "&nbsp;"
        }
    };
    t.setLevel = function(e, t) {
        this.showSafeGrade(e, t)
    };
    t.showSafeGrade = function(e) {
        if (e < 0 || arguments.length == 0 || arguments.length == 1 && arguments[0] === false) {
            this._safeGrade.className = "safe-grade-hidden";
            return
        }
        if (e >= 0) this._safeGrade.className = "safe-grade";
        var t = '<i class="{left}"></i><i class="{middle}"></i><i class="{right}"></i><span class="{text-color}">{text}</span>';
        var n = "safe-grade-low";
        var r = "text-low";
        var i = "低";
        var s = "";
        var o = "";
        if (e == 1) {
            n = s = "safe-grade-middle";
            r = "text-middle";
            i = "中"
        } else if (e == 2) {
            n = s = o = "safe-grade-high";
            r = "text-high";
            i = "高"
        }
        t = t.replace("{left}", n).replace("{middle}", s).replace("{right}", o).replace("{text-color}", r);
        t = t.replace("{text}", i);
        if (this._safeGrade.innerHTML != t) this._safeGrade.innerHTML = t
    };
    t.validator = {
        isLengthError: function(e) {
            return e == null || e.length < 6 || e.length > 30
        },
        isContainSomeCharsError: function(e) {
            var t = /[A-Za-z]/.test(e);
            var n = /[0-9]/.test(e);
            var r = /[~!@#$%^&*()\-_=+;:'\",<.>/ ? \\] / .test(e);
            return ! (t && n) || t && r || n && r
        }
    }; z.controls.TextBoxGroupPassword = e
})(); (function() {
    var e = function(e) {
        this.floatButton = false;
        z.controls.TextBoxGroup.call(this, e);
        this.initExtend()
    };
    e.prototype = new z.controls.TextBoxGroup;
    e.prototype.constructor = e;
    var t = e.prototype;
    t._classFullName = "TextBoxGroupVCode";
    t.initExtend = function() {
        this.addVCodeImgChangeEvent();
        this.addMCodeClickEvent()
    };
    t.addVCodeImgChangeEvent = function() {
        this._vcodeImg = this.getElementByClassName("vcodeimg");
        if (this._vcodeImg) this.addDomEvent(this._vcodeImg, "click", this.setVcodeImg, this);
        this._changeVCodeImgBtn = this.getElementByClassName("vcodeimg-changebtn");
        if (this._changeVCodeImgBtn) this.addDomEvent(this._changeVCodeImgBtn, "click", this.setVcodeImg, this)
    };
    t.setVcodeImg = function() {
        this._vcodeImg = this._vcodeImg || this.getElementByClassName("vcodeimg");
        if (this._vcodeImg) {
            var e = "//user.qunar.com/captcha//api/image?k={en7mni(z&amp;p=ucenter_register&amp;c=99b054becba8690183f1f7f57e27a690";
            this._vcodeImg.src = e + "&amp;t=" + (new Date).getTime()
        }
    };
    t.addMCodeClickEvent = function() {
        this._mcode = this.getElementByClassName("btn-mcode");
        if (!this._mcode) return;
        this.addDomEvent(this._mcode, "click",
        function() {
            this.fireEvent("mcodeclick")
        },
        this)
    };
    z.controls.TextBoxGroupVCode = e
})(); (function() {
    var e = function(e) {
        z.controls.TextBoxGroup.call(this, e);
        this.initExtendPhone()
    };
    e.prototype = new z.controls.TextBoxGroup;
    e.prototype.constructor = e;
    var t = e.prototype;
    t._classFullName = "TextBoxGroupPhone";
    t.initExtendPhone = function() {
        this.addPhoneValidator()
    };
    t.addPhoneValidator = function() {
        this._input = this._input || this.getElementByTagName("input");
        this.addDomEvent(this._input, "keydown", this.onkeydown, this);
        this.addDomEvent(this._input, "keyup",
        function() {
            var e = this.getValue();
            if (e != null && e.length > 0 && !this.validator.isInt(e.trim())) {
                this.showPopupTip(false);
                return false
            }
            this.showPopupTip(e)
        },
        this);
        this.addDomEvent(this._input, "blur",
        function() {
            this.showPopupTip(false)
        },
        this)
    };
    t.onkeydown = function(e) {
        var t = this.getValue();
        e = e || window.event;
        var n = e.keyCode || e.which;
        if (n == 32) {
            e.returnValue = false;
            return false
        }
    };
    t.showPopupTip = function(e) {
        this.addCss("phone-tooltip");
        if (!e) {
            this.addCss("phone-tooltip-hidden");
            return
        } else this.removeCss("phone-tooltip-hidden");
        var t = this.getElementByTagName("ul");
        if (t == null) {
            t = document.createElement("ul");
            for (var n = 1; n <= 11; n++) t.appendChild(document.createElement("li"));
            this._el.appendChild(t)
        }
        var r = t.getElementsByTagName("li");
        var i = e.slice( - 11).split("");
        for (var n = 0; n < r.length; n++) {
            r[n].innerHTML = i[n] == undefined ? "&nbsp": i[n]
        }
    };
    t.validator = {
        isInt: function(e) {
            return /^\d{1,15}$/.test(e)
        }
    };
    z.controls.TextBoxGroupPhone = e
})(); (function() {
    var e = function(e) {
        z.controls.BaseControl.call(this, e);
        this.initExtend(e)
    };
    e.prototype = new z.controls.BaseControl;
    e.prototype.constructor = e;
    var t = e.prototype;
    t._classFullName = "CountryCodeInputerAdapter";
    t._baseCls = "textbox-group";
    t._hoverCls = t._baseCls + "-hover";
    t._focusCls = t._baseCls + "-focus";
    t._disabledCls = t._baseCls + "-disable";
    t._readOnlyCls = t._baseCls + "-readonly";
    t._hiddenCls = t._baseCls + "-hidden";
    t.initExtend = function(e) {
        this._id = e;
        var t = $("#" + e + " .qunar-countrycode .textbox");
        var n = $("#mobile");
        var r = function(e) {
            return function(t, n) {
                e.change.apply(e, arguments)
            }
        } (this);
        this._prenumInputer = new QNR.CountryCodeInputer({
            target: t,
            id: "regmobile",
            nextTarget: n,
            defaultValue: 86,
            onSelect: r
        });
        var i = z.querySelector(".qunar-qcbox .textbox");
        if (i) {
            i.style.marginLeft = "10px";
            i.style.width = i.clientWidth - 5 + "px"
        }
    };
    t.change = function(e, t) {
        this.fireEvent("change")
    };
    t.getValue = function() {
        return this._prenumInputer && this._prenumInputer.getCode() || 86
    };
    t.setReadOnly = function(e) {
        $("#" + this._id + " .qunar-countrycode").attr("readOnly", e)
    };
    t.addDomEvent = t.removeDomEvent = function() {};
    z.controls.CountryCodeInputerAdapter = e
})();
z.viewmodels.define("RegisterViewModel",
function() {
    this.usertype = new z.datamodels.Base({
        value: 1
    });
    this.ref = new z.datamodels.Base({
        sync: true
    });
    this.prenum = new z.datamodels.Base({
        value: 86
    });
    this.mobile = new z.datamodels.Base;
    this.email = new z.datamodels.Base;
    this.password = new z.datamodels.Base;
    this.vcode = new z.datamodels.Base;
    this.mcode = new z.datamodels.Base;
    this.registerType = new z.datamodels.Base;
    this.btnMcode = new z.datamodels.Base;
    this.submitBtn = new z.datamodels.Base;
    this.agreeRule = new z.datamodels.Base({
        value: true
    });
    var e = {
        validatorMobile: {
            method: "get",
            url: "https://user.qunar.com/ajax/validatorMobile.jsp"
        },
        sendCode: "https://user.qunar.com/passport/regverify.jsp",
        validator: {
            method: "post",
            url: "https://user.qunar.com/ajax/validator.jsp"
        },
        checkRegPwdStrengthLevel: "https://user.qunar.com/ajax/checkRegPwdStrengthLevel.jsp",
        registerx: "https://user.qunar.com/passport/registerx.jsp"
    };
    this.proxy = z.data.ServiceProxy.create(e);
    this.on("beforeinit",
    function() {
        this.registerType.on("afterclick", this.registerTypeClick, this);
        this.prenum.on("afterchange", this.prenumChange, this);
        this.mobile.on("afterchange", this.mobileChange, this);
        this.email.on("afterchange", this.emailChange, this);
        this.password.on("afterchange", this.passwordChange, this);
        this.vcode.on("afterchange", this.vcodeChange, this);
        this.vcode.on("beforevcodeclick",
        function() {},
        this);
        this.btnMcode.on("beforeclick", this.mcodeClick, this);
        this.submitBtn.on("beforeclick", this.submitBtnClick, this);
        this.agreeRule.on("afterchange",
        function() {
            var e = this.agreeRule.getValue();
            this.submitBtn.set("disabled", !e)
        },
        this);
        this.password.set("maxlength", 30);
        this.password.on("afterkeyup",
        function(e) {
            var t = this.getData();
            var n = {
                length: this.validator.isLengthError(e),
                chars: this.validator.isContainSomeCharsError(e),
                userid: (t.usertype == 2 ? t.email: t.mobile) == e
            };
            this.password.set("tooltip", {
                isEmail: t.usertype == 2,
                errorTips: n
            })
        },
        this);
        this.submitBtn.on("beforeclick",
        function() {
            var e = this.usertype.getValue();
            var t = e == 1 ? "同意协议并注册-手机注册": "同意协议并注册-邮箱注册";
            BEACON.sid = 1616;
            BEACON.clk(t)
        },
        this)
    },
    this);
    this.registerTypeClick = function() {
        var e = this.usertype.getValue() != 2;
        this.email.setVisible(e);
        this.registerType.setValue(e ? "手机注册": "邮箱注册");
        this.usertype.setValue(e ? 2 : 1);
        this.mobile.setVisible(!e);
        this.prenum.setVisible(!e);
        e ? this.email.set("focus", true) : this.mobile.set("focus", true);
        this.clearData()
    };
    this.clearData = function() {
        this.password.setValue("");
        this.password.set("error", false);
        this.mcode.setValue("");
        this.mcode.set("note", false);
        this.btnMcode.set("lock", false)
    };
    this.prenumChange = function() {
        var e = this.prenum.getValue();
        this.mobile.set("maxlength", e != "86" ? 15 : 11);
        if ((this.mobile.getValue() || "") == "") return;
        this.mobileChange()
    };
    this.mobileChange = function() {
        this.validateMobile(function() {
            this.validatorByService()
        });
        this.clearData()
    };
    this.emailChange = function() {
        this.validateEmail(function() {
            this.validatorByService()
        });
        this.clearData()
    };
    this.passwordChange = function() {
        this.validatePassword()
    };
    this.vcodeChange = function() {
        this.vcode.set("error", false);
        return this.validateVCode()
    };
    this.mcodeClick = function() {
        this.validateData(this.sendCode)
    };
    this.submitBtnClick = function() {
        if (this.agreeRule.getValue() == false) return;
        this.validateData(this.submitRegister)
    };
    this.validateData = function(e) {
        var t = this.getData();
        this.mcode.set("error", false);
        var n = function() {
            this.mobile.set("note", "yes");
            this.email.set("note", "yes");
            this.validatePassword(function() {
                this.vcode.set("error", false);
                if (this.validateVCode()) {
                    this.validatorByService(e)
                }
            })
        };
        var r = t.usertype == 2 ? this.validateEmail(n) : this.validateMobile(n)
    };
    this.validateMobile = function(e) {
        var t = this.getData();
        if (t.usertype == 2) return true;
        if (t.mobile == null || t.mobile == "") {
            this.mobile.set("error", "手机号不能为空");
            return false
        }
        if (!this.validator.isInt(t.mobile)) {
            this.mobile.set("error", "请输入有效的手机号码");
            return false
        }
        var n = {
            prenum: t.prenum,
            mobile: t.mobile
        };
        this.proxy.validatorMobile(n,
        function(t) {
            if (t.errCode != 1 && t.ret !== true) {
                this.mobile.set("error", t.errMsg);
                return
            }
            if (e) {
                e.call(this)
            }
        },
        this)
    };
    this.validateEmail = function(e) {
        var t = this.getData();
        if (t.usertype == 1) return true;
        var n = t.email || "";
        if (n == null || n == "") {
            this.email.set("error", "邮箱不能为空");
            return false
        }
        var r = n.length >= 5 && n.length <= 80 && this.validator.isEmail(n);
        if (!r) {
            this.email.set("error", "请输入有效的邮件地址");
            return false
        }
        if (this.validator.isYahooEmail(n)) {
            this.email.set("error", "请不要使用雅虎中国邮箱，以免带来不便。");
            return false
        }
        if (e) e.call(this)
    };
    this.validatePassword = function(e) {
        var t = this.password.getValue();
        this.password.set("error", "");
        if (this.validator.isLengthError(t)) {
            this.password.set("error", "长度为6-30个字符");
            return false
        }
        this.proxy.checkRegPwdStrengthLevel({
            password: t
        },
        function(t) {
            if (t.result > -1) {
                this.password.set("level", t.result, t.msg);
                if (e) e.call(this)
            } else if (t.result == -1) {
                this.password.set("error", "不可为常见密码")
            } else {
                this.password.set("error", t.msg);
                return false
            }
        },
        this);
        return true
    };
    this.validateVCode = function() {
        var e = this.vcode.getValue();
        if (e == "" || e == null) {
            this.vcode.set("error", "请填写验证码");
            return false
        }
        return true
    };
    this.validateMCode = function() {
        var e = this.mcode.getValue();
        if (e == "" || e == null) {
            this.mcode.set("error", "请填写激活码");
            return false
        }
        return true
    };
    this.validatorByService = function(e) {
        var t = this.getData();
        var n = t.usertype == 2 ? {
            method: t.email,
            vcode: t.vcode
        }: {
            method: t.mobile,
            prenum: t.prenum,
            vcode: t.vcode
        };
        this.proxy.validator(n,
        function(t) {
            var n = this.usertype.getValue();
            var r = n == 1 ? this.mobile: this.email;
            if (t.errCode == 11009) {
                var i = n == 1 ? this.mobile.set("error", "该手机号已注册去哪儿网") : this.email.set("error", "该邮箱已注册去哪儿网");
                return false
            } else if (t.errCode == 21006) { (n == 1 ? this.mobile: this.email).set("note", "yes")
            } else if (t.errCode > 1 && t.errMsg) { (n == 1 ? this.mobile: this.email).set("error", t.errMsg);
                return false
            }
            if (e) e.call(this)
        },
        this)
    };
    this.sendCode = function() {
        var e = this.getData();
        var t = e.usertype == 2 ? {
            email: e.email,
            vcode: e.vcode
        }: {
            mobile: e.mobile,
            prenum: e.prenum,
            vcode: e.vcode
        };
        this.proxy.sendCode(t, this.sendCodeCallBack, this)
    };
    this.sendCodeCallBack = function(e) {
        var t = this.getData();
        if (e.errCode == 1) {
            if (t.usertype == 2) {
                var n = t.email.split("@");
                var r = n.slice( - 1).join("").trim();
                if (this.validator.isCommonEmail(r)) {
                    var i = "http://mail." + (r === "gmail.com" ? "google.com": r);
                    this.route.openWindow(i, "_blank")
                }
            }
            this.mcode.set("note", "none", "激活码已发送，请查收(2小时有效)");
            var s = this.mcode;
            this.btnMcode.set("lock", 60,
            function(e) {
                if (e == 0) {
                    s.set("note", false);
                    s = null;
                    return "没收到?再获取"
                }
                return e + "秒后可再获取"
            })
        } else {
            this.vcode.set("vcodeImg", (new Date).getTime());
            this.mcode.set("error", e.errMsg)
        }
    };
    this.submitRegister = function() {
        var e = this.getData();
        var t = e.usertype == 2 ? {
            email: e.email
        }: {
            mobile: e.mobile,
            prenum: e.prenum
        };
        t.usertype = e.usertype;
        t.password = e.password;
        t.verifypass = e.password;
        t.verifycode = e.mcode || "";
        t.ref = e.ref || "";
        var n = this.getQueryString("ret");
        var r = this.getQueryString("origin");
        if (n) t.ret = n;
        if (r) t.origin = r;
        this.registerBySecurityProtect(t)
    };
    this.registerPost = function(e) {
        this.registerByHttps(e)
    };
    this.registerByHttps = function(e) {
        this.proxy.registerx(e,
        function(e) {
            if (e.ret) {
                this.route.redirect(e.data && e.data.redirect)
            } else if (e.errmsg) this.mcode.set("error", e.errmsg)
        },
        this)
    };
    this.registerByProxy = function(e) {};
    this.registerBySecurityProtect = function(e) {
        var t = this;
        var n = jQuery.ajax({
            url: "https://secapi.qunar.com/api/noCaptcha/get.json",
            callback: "callback",
            dataType: "jsonp"
        });
        n.done(function(n) {
            e.answer = n || "";
            t.registerPost(e)
        });
        n.fail(function(n) {
            e.answer = n || "";
            t.registerPost(e)
        })
    };
    this.clearError = function() {
        this.mobile.set("error", null);
        this.email.set("error", null);
        this.password.set("error", null);
        this.vcode.set("error", null);
        this.mcode.set("error", null)
    };
    this.validator = {
        isEmail: function(e) {
            return /^[a-zA-Z0-9_+.-]+@([a-zA-Z0-9-]+\.)+[a-z0-9]{2,4}$/i.test(e)
        },
        isInt: function(e) {
            return /^\d{1,15}$/.test(e)
        },
        isYahooEmail: function(e) {
            return /^[a-zA-Z0-9_+.-]+@(yahoo.com.cn)|(yahoo.cn)$/.test(e)
        },
        validPassword: function(e) {
            return /^[0-9a-zA-Z\~\!\@\#\$%\^&\*\(\)\-\_\=\+\;\:\'\"\,\<\.\>\/\?\\]{6,30}$/.test(e)
        },
        isCommonEmail: function(e) {
            return /^(qq.com)|(126.com)|(sina.com)|(sohu.com)|(163.com)|(gmail.com)|(hotmail.com)|(yahoo.com)|(msn.com)|(tom.com)|(21cn.com)|(aliyun.com)$/.test(e)
        },
        isLengthError: function(e) {
            return e == null || e.length < 6 || e.length > 30
        },
        isContainSomeCharsError: function(e) {
            var t = /[A-Za-z]/.test(e);
            var n = /[0-9]/.test(e);
            var r = /[~!@#$%^&*()\-_=+;:'\",<.>/ ? \\] / .test(e);
            return ! (t && n || t && r || n && r)
        }
    }; this.getQueryString = function(e) {
        var t = location.search;
        var n = new RegExp("(^|&|\\?)" + e + "=([^&]*)(&|$)");
        var r = t.match(n);
        return r ? unescape(r[2]) : null
    }; this.route = {}; this.route.openWindow = function(e, t) {
        window.open(e, t)
    }; this.route.redirect = function(e) {
        if (e) {
            var t = decodeURIComponent(e);
            window.location.href = t.substring(0, 4) == "http" ? t: "http://user.qunar.com" + t
        }
    }
});$(document).ready(function() {
    BEACON.sid = 1616;
    BEACON.w("用户中心-注册页");
    z.viewbinding.init("registerPage");
    var e = document.getElementById("user_login");
    if (typeof QNR === "object" && QNR.QUstatus && QNR.QUstatus.isLogin()) {
        var t = QNR.QUstatus.getUserName();
        var n = t.displayName;
        e.innerHTML = '<a href="http://user.qunar.com/index.jsp#home" hidefocus="on" class="q_header_a q_header_uname">' + n + '</a><a href="http://user.qunar.com/passport/logout.jsp?ret=http%3A%2F%2Fuser.qunar.com%2Fuserinfo%2Findex.jsp" hidefocus="on" class="q_header_a">退出</a>|'
    }
})