"use strict";
var _slicedToArray = function(e, t) {
    if (Array.isArray(e)) return e;
    if (Symbol.iterator in Object(e)) return function(e, t) {
        var i = [],
            n = !0,
            l = !1,
            s = void 0;
        try {
            for (var a, r = e[Symbol.iterator](); !(n = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); n = !0);
        } catch (e) {
            l = !0, s = e
        } finally {
            try {
                !n && r.return && r.return()
            } finally {
                if (l) throw s
            }
        }
        return i
    }(e, t);
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
};

function timeline(e, v) {
    var g = [],
        p = "Timeline:",
        t = window.innerWidth,
        i = void 0,
        o = 0,
        b = {
            forceVerticalMode: { type: "integer", defaultValue: 600 },
            horizontalStartPosition: { type: "string", acceptedValues: ["bottom", "top"], defaultValue: "top" },
            mode: { type: "string", acceptedValues: ["horizontal", "vertical"], defaultValue: "vertical" },
            moveItems: { type: "integer", defaultValue: 1 },
            rtlMode: { type: "boolean", acceptedValues: [!0, !1], defaultValue: !1 },
            startIndex: { type: "integer", defaultValue: 0 },
            verticalStartPosition: { type: "string", acceptedValues: ["left", "right"], defaultValue: "left" },
            verticalTrigger: { type: "string", defaultValue: "15%" },
            visibleItems: { type: "integer", defaultValue: 3 }
        };

    function n(e, t, i) {
        t.classList.add(i), e.parentNode.insertBefore(t, e), t.appendChild(e)
    }

    function l(e, t) {
        var i = e.getBoundingClientRect(),
            n = window.innerHeight || document.documentElement.clientHeight,
            l = b.verticalTrigger.defaultValue.match(/(\d*\.?\d*)(.*)/),
            s = t.unit,
            a = t.value,
            r = n;
        if ("px" === s && n <= a) {
            console.warn('The value entered for the setting "verticalTrigger" is larger than the window height. The default value will be used instead.');
            var o = _slicedToArray(l, 3);
            a = o[1], s = o[2]
        }
        return "px" === s ? r = parseInt(r - a, 10) : "%" === s && (r = parseInt(r * ((100 - a) / 100), 10)), i.top <= r && i.left <= (window.innerWidth || document.documentElement.clientWidth) && 0 <= i.top + i.height && 0 <= i.left + i.width
    }

    function d(e, t) {
        e.style.webkitTransform = t, e.style.msTransform = t, e.style.transform = t
    }

    function c(e) {
        var t = "translate3d(-" + e.items[o].offsetLeft + "px, 0, 0)";
        d(e.scroller, t)
    }

    function s(e) {
        var s, t, i, n, l, a, r;
        o = e.settings.rtlMode ? e.items.length > e.settings.visibleItems ? e.items.length - e.settings.visibleItems : 0 : e.settings.startIndex, e.timelineEl.classList.add("timeline--horizontal"), s = e, window.innerWidth > s.settings.forceVerticalMode && (s.itemWidth = s.wrap.offsetWidth / s.settings.visibleItems, s.items.forEach(function(e) {
            e.style.width = s.itemWidth + "px"
        }), s.scrollerWidth = s.itemWidth * s.items.length, s.scroller.style.width = s.scrollerWidth + "px",
            function() {
                var n = 0,
                    l = 0;
                s.items.forEach(function(e, t) {
                    e.style.height = "auto";
                    var i = e.offsetHeight;
                    t % 2 == 0 ? l = l < i ? i : l : n = n < i ? i : n
                });
                var i = "translateY(" + l + "px)";
                s.items.forEach(function(e, t) {
                    t % 2 == 0 ? (e.style.height = l + "px", "bottom" === s.settings.horizontalStartPosition ? (e.classList.add("timeline__item--bottom"), d(e, i)) : e.classList.add("timeline__item--top")) : (e.style.height = n + "px", "bottom" !== s.settings.horizontalStartPosition ? (e.classList.add("timeline__item--bottom"), d(e, i)) : e.classList.add("timeline__item--top"))
                }), s.scroller.style.height = l + n + "px"
            }()), c(e),
            function(e) {
                if (e.items.length > e.settings.visibleItems) {
                    var t = document.createElement("button"),
                        i = document.createElement("button"),
                        n = e.items[0].offsetHeight;
                    t.className = "timeline-nav-button timeline-nav-button--prev", i.className = "timeline-nav-button timeline-nav-button--next", t.textContent = "Previous", i.textContent = "Next", t.style.top = n + "px", i.style.top = n + "px", 0 === o ? t.disabled = !0 : o === e.items.length - e.settings.visibleItems && (i.disabled = !0), e.timelineEl.appendChild(t), e.timelineEl.appendChild(i)
                }
            }(e),
            function(e) {
                var t = e.timelineEl.querySelector(".timeline-divider");
                t && e.timelineEl.removeChild(t);
                var i = e.items[0].offsetHeight,
                    n = document.createElement("span");
                n.className = "timeline-divider", n.style.top = i + "px", e.timelineEl.appendChild(n)
            }(e), i = (t = e).timelineEl.querySelectorAll(".timeline-nav-button"), n = t.timelineEl.querySelector(".timeline-nav-button--prev"), l = t.timelineEl.querySelector(".timeline-nav-button--next"), a = t.items.length - t.settings.visibleItems, r = parseInt(t.settings.moveItems, 10), [].forEach.call(i, function(e) {
                e.addEventListener("click", function(e) {
                    e.preventDefault(), 0 === (o = this.classList.contains("timeline-nav-button--next") ? o += r : o -= r) || o < 0 ? (o = 0, n.disabled = !0, l.disabled = !1) : o === a || a < o ? (o = a, n.disabled = !1, l.disabled = !0) : (n.disabled = !1, l.disabled = !1), c(t)
                })
            })
    }

    function a() {
        g.forEach(function(e) {
            e.timelineEl.style.opacity = 0, e.timelineEl.classList.contains("timeline--loaded") || e.items.forEach(function(e) {
                n(e.querySelector(".timeline__content"), document.createElement("div"), "timeline__content__wrap"), n(e.querySelector(".timeline__content__wrap"), document.createElement("div"), "timeline__item__inner")
            }),
                function(e) {
                    e.timelineEl.classList.remove("timeline--horizontal", "timeline--mobile"), e.scroller.removeAttribute("style"), e.items.forEach(function(e) {
                        e.removeAttribute("style"), e.classList.remove("animated", "fadeIn", "timeline__item--left", "timeline__item--right")
                    });
                    var t = e.timelineEl.querySelectorAll(".timeline-nav-button");
                    [].forEach.call(t, function(e) {
                        e.parentNode.removeChild(e)
                    })
                }(e), window.innerWidth <= e.settings.forceVerticalMode && e.timelineEl.classList.add("timeline--mobile"), "horizontal" === e.settings.mode && window.innerWidth > e.settings.forceVerticalMode ? s(e) : function(i) {
                    var n = 0;
                    i.items.forEach(function(e, t) {
                        e.classList.remove("animated", "fadeIn"), !l(e, i.settings.verticalTrigger) && 0 < t ? e.classList.add("animated") : n = t, t % 2 == ("left" === i.settings.verticalStartPosition ? 1 : 0) && window.innerWidth > i.settings.forceVerticalMode ? e.classList.add("timeline__item--right") : e.classList.add("timeline__item--left")
                    });
                    for (var e = 0; e < n; e += 1) i.items[e].classList.remove("animated", "fadeIn");
                    window.addEventListener("scroll", function() {
                        i.items.forEach(function(e) {
                            l(e, i.settings.verticalTrigger) && e.classList.add("fadeIn")
                        })
                    })
                }(e), e.timelineEl.classList.add("timeline--loaded"), setTimeout(function() {
                    e.timelineEl.style.opacity = 1
                }, 500)
        })
    }
    e.length && [].forEach.call(e, function(e) {
        var t = e.id ? "#" + e.id : "." + e.className,
            i = "could not be found as a direct descendant of",
            n = e.dataset,
            l = void 0,
            s = void 0,
            a = void 0,
            r = {};
        try {
            if (!(l = e.querySelector(".timeline__wrap"))) throw new Error(p + " .timeline__wrap " + i + " " + t);
            if (!(s = l.querySelector(".timeline__items"))) throw new Error(p + " .timeline__items " + i + " .timeline__wrap");
            a = [].slice.call(s.children, 0)
        } catch (e) {
            return console.warn(e.message), !1
        }
        Object.keys(b).forEach(function(e) {
            var t, i;
            r[e] = b[e].defaultValue, n[e] ? r[e] = n[e] : v && v[e] && (r[e] = v[e]), "integer" === b[e].type ? r[e] && (t = r[e], i = e, "number" == typeof t || t % 1 == 0 || (console.warn(p + ' The value "' + t + '" entered for the setting "' + i + '" is not an integer.'), 0)) || (r[e] = b[e].defaultValue) : "string" === b[e].type && b[e].acceptedValues && -1 === b[e].acceptedValues.indexOf(r[e]) && (console.warn(p + ' The value "' + r[e] + '" entered for the setting "' + e + '" was not recognised.'), r[e] = b[e].defaultValue)
        });
        var o = b.verticalTrigger.defaultValue.match(/(\d*\.?\d*)(.*)/),
            d = r.verticalTrigger.match(/(\d*\.?\d*)(.*)/),
            c = _slicedToArray(d, 3),
            m = c[1],
            u = c[2],
            f = !0;
        if (m || (console.warn(p + " No numercial value entered for the 'verticalTrigger' setting."), f = !1), "px" !== u && "%" !== u && (console.warn(p + " The setting 'verticalTrigger' must be a percentage or pixel value."), f = !1), "%" === u && (100 < m || m < 0) ? (console.warn(p + " The 'verticalTrigger' setting value must be between 0 and 100 if using a percentage value."), f = !1) : "px" === u && m < 0 && (console.warn(p + " The 'verticalTrigger' setting value must be above 0 if using a pixel value."), f = !1), !1 === f) {
            var h = _slicedToArray(o, 3);
            m = h[1], u = h[2]
        }
        r.verticalTrigger = { unit: u, value: m }, r.moveItems > r.visibleItems && (console.warn(p + ' The value of "moveItems" (' + r.moveItems + ') is larger than the number of "visibleItems" (' + r.visibleItems + '). The value of "visibleItems" has been used instead.'), r.moveItems = r.visibleItems), r.startIndex > a.length - r.visibleItems && a.length > r.visibleItems ? (console.warn(p + " The 'startIndex' setting must be between 0 and " + (a.length - r.visibleItems) + " for this timeline. The value of " + (a.length - r.visibleItems) + " has been used instead."), r.startIndex = a.length - r.visibleItems) : a.length <= r.visibleItems ? (console.warn(p + " The number of items in the timeline must exceed the number of visible items to use the 'startIndex' option."), r.startIndex = 0) : r.startIndex < 0 && (console.warn(p + " The 'startIndex' setting must be between 0 and " + (a.length - r.visibleItems) + " for this timeline. The value of 0 has been used instead."), r.startIndex = 0), g.push({ timelineEl: e, wrap: l, scroller: s, items: a, settings: r })
    }), a(), window.addEventListener("resize", function() {
        clearTimeout(i), i = setTimeout(function() {
            var e = window.innerWidth;
            e !== t && (a(), t = e)
        }, 250)
    })
}
window.jQuery && (window.jQuery.fn.timeline = function(e) {
    return timeline(this, e), this
});

timeline(document.querySelectorAll('.timeline'), {
    verticalStartPosition: 'right',
    verticalTrigger: '150px'
});