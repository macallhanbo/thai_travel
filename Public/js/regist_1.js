var z = {};
z.controls = {};
z.bindings = {};
z.datamodels = {};
z.cache = {};
z.utils = {};
z.data = {};
z.navigate = {
    openWindow: function(e, t) {
        window.open(e, t);
    },
    redirect: function(e) {
        if (e) {
            var t = decodeURIComponent(e);
            window.location.href = t.substring(0, 4) == "http" ? t: "http://user.qunar.com" + t;
        }
    }
};
(function() {
    var e = function(e) {
        z.controls.TextBoxGroup.call(this, e);
        this.initExtend();
    };
    e.prototype = new z.controls.TextBoxGroup;
    e.prototype.constructor = e;
    var t = e.prototype;
    t._classFullName = "TextBoxGroupPassword";
    t.initExtend = function() {
        this.addPasswordValidator();
        this._safeGrade = this.getElementByClassName("safe-grade");
    };
    t.addPasswordValidator = function() {
        this._input = this._input || this.getElementByTagName("input");
        this.addDomEvent(this._input, "keydown", this.onkeydown, this);
        this.addDomEvent(this._input, "keyup", this.onkeyup, this);
        this.addDomEvent(this._input, "blur", this.onblur, this);
    };
    t.onkeydown = function(e) {
        var t = this.getValue();
        e = e || window.event;
        var n = e.keyCode || e.which;
        if (n == 32) {
            e.returnValue = false;
            return false;
        }
    };
    t.onkeyup = function() {
        this.showTooltip(true);
        this.fireEvent("keyup", this.getValue());
    };
    t.onblur = function() {
        this.hideTooltip();
    };
    t.showTooltip = function(e) {
        this.addCss("password-tooltip");
        if (!e) return this.addCss("password-tooltip-hidden");
        else this.removeCss("password-tooltip-hidden");
        var t = this.getElementByTagName("ul");
        if (t == null) {
            t = document.createElement("ul");
            t.innerHTML = "<li data-tip='length'>长度为6-30个字符</li><li data-tip='chars'>建议由数字、字母、符号组成</li><li data-tip='userid'>不宜与注册手机号相同</li>";
            this._el.appendChild(t);
        }
    };
    t.hideTooltip = function() {
        this.addCss("password-tooltip");
        this.addCss("password-tooltip-hidden");
        var e = z.querySelectorAll(this._el, "[data-tip]");
        for (var t = 0; t < e.length; t++) {
            e[t].className = "";
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
                else if (i.textContent != s) i.textContent = s;
            }
        }
    };
    t.setNote = function(e, t) {
        if (e == "yes" && this._note) {
            this._note.className = "note";
            this._note.innerHTML = t || "&nbsp;";
            this.showSafeGrade(t || 0);
            return;
        }
        this.showSafeGrade(false);
        if (!this._note) return;
        if (arguments.length == 0 || arguments.length == 1 && arguments[0] === false) {
            this._note.className = "note";
            this._note.innerHTML = t || "&nbsp;";
            return;
        }
        if (e) {
            this._note.className = "note note-" + e;
            this._note.innerHTML = t || "&nbsp;";
        }
    };
    t.setLevel = function(e, t) {
        this.showSafeGrade(e, t);
    };
    t.showSafeGrade = function(e) {
        if (e < 0 || arguments.length == 0 || arguments.length == 1 && arguments[0] === false) {
            this._safeGrade.className = "safe-grade-hidden";
            return;
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
            i = "中";
        } else if (e == 2) {
            n = s = o = "safe-grade-high";
            r = "text-high";
            i = "高";
        }
        t = t.replace("{left}", n).replace("{middle}", s).replace("{right}", o).replace("{text-color}", r);
        t = t.replace("{text}", i);
        if (this._safeGrade.innerHTML != t) this._safeGrade.innerHTML = t;
    };
    t.validator = {
        isLengthError: function(e) {
            return e == null || e.length < 6 || e.length > 30;
        },
        isContainSomeCharsError: function(e) {
            var t = /[A-Za-z]/.test(e);
            var n = /[0-9]/.test(e);
            var r = /[~!@#$%^&*()\-_=+;:'\",<.>/ ? \\] / .test(e);
            return ! (t && n) || t && r || n && r;
        }
    }; z.controls.TextBoxGroupPassword = e;
})();