!function(t, e) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
    if (!t.document)
      throw new Error("jQuery requires a window with a document");
    return e(t)
  }
  : e(t)
}("undefined" != typeof window ? window : this, function(S, e) {
  function f(t) {
    var e = !!t && "length"in t && t.length
      , i = dt.type(t);
    return "function" !== i && !dt.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
  }
  function i(t, i, n) {
    if (dt.isFunction(i))
      return dt.grep(t, function(t, e) {
        return !!i.call(t, e, t) !== n
      });
    if (i.nodeType)
      return dt.grep(t, function(t) {
        return t === i !== n
      });
    if ("string" == typeof i) {
      if (wt.test(i))
        return dt.filter(i, t, n);
      i = dt.filter(i, t)
    }
    return dt.grep(t, function(t) {
      return -1 < dt.inArray(t, i) !== n
    })
  }
  function n(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; )
      ;
    return t
  }
  function u(t) {
    var i = {};
    return dt.each(t.match(At) || [], function(t, e) {
      i[e] = !0
    }),
    i
  }
  function r() {
    it.addEventListener ? (it.removeEventListener("DOMContentLoaded", o),
    S.removeEventListener("load", o)) : (it.detachEvent("onreadystatechange", o),
    S.detachEvent("onload", o))
  }
  function o() {
    (it.addEventListener || "load" === S.event.type || "complete" === it.readyState) && (r(),
    dt.ready())
  }
  function a(t, e, i) {
    if (void 0 === i && 1 === t.nodeType) {
      var n = "data-" + e.replace(Dt, "-$1").toLowerCase();
      if ("string" == typeof (i = t.getAttribute(n))) {
        try {
          i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Lt.test(i) ? dt.parseJSON(i) : i)
        } catch (nt) {}
        dt.data(t, e, i)
      } else
        i = void 0
    }
    return i
  }
  function l(t) {
    var e;
    for (e in t)
      if (("data" !== e || !dt.isEmptyObject(t[e])) && "toJSON" !== e)
        return !1;
    return !0
  }
  function s(t, e, i, n) {
    if (Nt(t)) {
      var r, o, s = dt.expando, a = t.nodeType, l = a ? dt.cache : t, c = a ? t[s] : t[s] && s;
      if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof e)
        return c || (c = a ? t[s] = et.pop() || dt.guid++ : s),
        l[c] || (l[c] = a ? {} : {
          toJSON: dt.noop
        }),
        "object" != typeof e && "function" != typeof e || (n ? l[c] = dt.extend(l[c], e) : l[c].data = dt.extend(l[c].data, e)),
        o = l[c],
        n || (o.data || (o.data = {}),
        o = o.data),
        void 0 !== i && (o[dt.camelCase(e)] = i),
        "string" == typeof e ? null == (r = o[e]) && (r = o[dt.camelCase(e)]) : r = o,
        r
    }
  }
  function c(t, e, i) {
    if (Nt(t)) {
      var n, r, o = t.nodeType, s = o ? dt.cache : t, a = o ? t[dt.expando] : dt.expando;
      if (s[a]) {
        if (e && (n = i ? s[a] : s[a].data)) {
          dt.isArray(e) ? e = e.concat(dt.map(e, dt.camelCase)) : e in n ? e = [e] : e = (e = dt.camelCase(e))in n ? [e] : e.split(" "),
          r = e.length;
          for (; r--; )
            delete n[e[r]];
          if (i ? !l(n) : !dt.isEmptyObject(n))
            return
        }
        (i || (delete s[a].data,
        l(s[a]))) && (o ? dt.cleanData([t], !0) : ut.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
      }
    }
  }
  function h(t, e, i, n) {
    var r, o = 1, s = 20, a = n ? function() {
      return n.cur()
    }
    : function() {
      return dt.css(t, e, "")
    }
    , l = a(), c = i && i[3] || (dt.cssNumber[e] ? "" : "px"), u = (dt.cssNumber[e] || "px" !== c && +l) && Wt.exec(dt.css(t, e));
    if (u && u[3] !== c)
      for (c = c || u[3],
      i = i || [],
      u = +l || 1; u /= o = o || ".5",
      dt.style(t, e, u + c),
      o !== (o = a() / l) && 1 !== o && --s; )
        ;
    return i && (u = +u || +l || 0,
    r = i[1] ? u + (i[1] + 1) * i[2] : +i[2],
    n && (n.unit = c,
    n.start = u,
    n.end = r)),
    r
  }
  function m(t) {
    var e = Ut.split("|")
      , i = t.createDocumentFragment();
    if (i.createElement)
      for (; e.length; )
        i.createElement(e.pop());
    return i
  }
  function St(t, e) {
    var i, n, r = 0, o = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
    if (!o)
      for (o = [],
      i = t.childNodes || t; null != (n = i[r]); r++)
        !e || dt.nodeName(n, e) ? o.push(n) : dt.merge(o, St(n, e));
    return void 0 === e || e && dt.nodeName(t, e) ? dt.merge([t], o) : o
  }
  function v(t, e) {
    for (var i, n = 0; null != (i = t[n]); n++)
      dt._data(i, "globalEval", !e || dt._data(e[n], "globalEval"))
  }
  function y(t) {
    zt.test(t.type) && (t.defaultChecked = t.checked)
  }
  function g(t, e, i, n, r) {
    for (var o, s, a, l, c, u, h, d = t.length, p = m(e), f = [], g = 0; g < d; g++)
      if ((s = t[g]) || 0 === s)
        if ("object" === dt.type(s))
          dt.merge(f, s.nodeType ? [s] : s);
        else if (Gt.test(s)) {
          for (l = l || p.appendChild(e.createElement("div")),
          c = (Ft.exec(s) || ["", ""])[1].toLowerCase(),
          h = Vt[c] || Vt._default,
          l.innerHTML = h[1] + dt.htmlPrefilter(s) + h[2],
          o = h[0]; o--; )
            l = l.lastChild;
          if (!ut.leadingWhitespace && qt.test(s) && f.push(e.createTextNode(qt.exec(s)[0])),
          !ut.tbody)
            for (o = (s = "table" !== c || Jt.test(s) ? "<table>" !== h[1] || Jt.test(s) ? 0 : l : l.firstChild) && s.childNodes.length; o--; )
              dt.nodeName(u = s.childNodes[o], "tbody") && !u.childNodes.length && s.removeChild(u);
          for (dt.merge(f, l.childNodes),
          l.textContent = ""; l.firstChild; )
            l.removeChild(l.firstChild);
          l = p.lastChild
        } else
          f.push(e.createTextNode(s));
    for (l && p.removeChild(l),
    ut.appendChecked || dt.grep(St(f, "input"), y),
    g = 0; s = f[g++]; )
      if (n && -1 < dt.inArray(s, n))
        r && r.push(s);
      else if (a = dt.contains(s.ownerDocument, s),
      l = St(p.appendChild(s), "script"),
      a && v(l),
      i)
        for (o = 0; s = l[o++]; )
          $t.test(s.type || "") && i.push(s);
    return l = null,
    p
  }
  function d() {
    return !0
  }
  function p() {
    return !1
  }
  function t() {
    try {
      return it.activeElement
    } catch (S) {}
  }
  function b(t, e, i, n, r, o) {
    var s, a;
    if ("object" == typeof e) {
      for (a in "string" != typeof i && (n = n || i,
      i = void 0),
      e)
        b(t, a, i, n, e[a], o);
      return t
    }
    if (null == n && null == r ? (r = i,
    n = i = void 0) : null == r && ("string" == typeof i ? (r = n,
    n = void 0) : (r = n,
    n = i,
    i = void 0)),
    !1 === r)
      r = p;
    else if (!r)
      return t;
    return 1 === o && (s = r,
    (r = function(t) {
      return dt().off(t),
      s.apply(this, arguments)
    }
    ).guid = s.guid || (s.guid = dt.guid++)),
    t.each(function() {
      dt.event.add(this, e, r, n, i)
    })
  }
  function _(t, e) {
    return dt.nodeName(t, "table") && dt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
  }
  function x(t) {
    return t.type = (null !== dt.find.attr(t, "type")) + "/" + t.type,
    t
  }
  function w(t) {
    var e = ae.exec(t.type);
    return e ? t.type = e[1] : t.removeAttribute("type"),
    t
  }
  function T(t, e) {
    if (1 === e.nodeType && dt.hasData(t)) {
      var i, n, r, o = dt._data(t), s = dt._data(e, o), a = o.events;
      if (a)
        for (i in delete s.handle,
        s.events = {},
        a)
          for (n = 0,
          r = a[i].length; n < r; n++)
            dt.event.add(e, i, a[i][n]);
      s.data && (s.data = dt.extend({}, s.data))
    }
  }
  function k(t, e) {
    var i, n, r;
    if (1 === e.nodeType) {
      if (i = e.nodeName.toLowerCase(),
      !ut.noCloneEvent && e[dt.expando]) {
        for (n in (r = dt._data(e)).events)
          dt.removeEvent(e, n, r.handle);
        e.removeAttribute(dt.expando)
      }
      "script" === i && e.text !== t.text ? (x(e).text = t.text,
      w(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML),
      ut.html5Clone && t.innerHTML && !dt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && zt.test(t.type) ? (e.defaultChecked = e.checked = t.checked,
      e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
    }
  }
  function M(i, n, r, o) {
    n = rt.apply([], n);
    var t, e, s, a, l, c, u = 0, h = i.length, d = h - 1, p = n[0], f = dt.isFunction(p);
    if (f || 1 < h && "string" == typeof p && !ut.checkClone && se.test(p))
      return i.each(function(t) {
        var e = i.eq(t);
        f && (n[0] = p.call(this, t, e.html())),
        M(e, n, r, o)
      });
    if (h && (t = (c = g(n, i[0].ownerDocument, !1, i, o)).firstChild,
    1 === c.childNodes.length && (c = t),
    t || o)) {
      for (s = (a = dt.map(St(c, "script"), x)).length; u < h; u++)
        e = c,
        u !== d && (e = dt.clone(e, !0, !0),
        s && dt.merge(a, St(e, "script"))),
        r.call(i[u], e, u);
      if (s)
        for (l = a[a.length - 1].ownerDocument,
        dt.map(a, w),
        u = 0; u < s; u++)
          e = a[u],
          $t.test(e.type || "") && !dt._data(e, "globalEval") && dt.contains(l, e) && (e.src ? dt._evalUrl && dt._evalUrl(e.src) : dt.globalEval((e.text || e.textContent || e.innerHTML || "").replace(le, "")));
      c = t = null
    }
    return i
  }
  function E(t, e, i) {
    for (var n, r = e ? dt.filter(e, t) : t, o = 0; null != (n = r[o]); o++)
      i || 1 !== n.nodeType || dt.cleanData(St(n)),
      n.parentNode && (i && dt.contains(n.ownerDocument, n) && v(St(n, "script")),
      n.parentNode.removeChild(n));
    return t
  }
  function B(t, e) {
    var i = dt(e.createElement(t)).appendTo(e.body)
      , n = dt.css(i[0], "display");
    return i.detach(),
    n
  }
  function C(t) {
    var e = it
      , i = he[t];
    return i || ("none" !== (i = B(t, e)) && i || ((e = ((ue = (ue || dt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || ue[0].contentDocument).document).write(),
    e.close(),
    i = B(t, e),
    ue.detach()),
    he[t] = i),
    i
  }
  function A(t, e) {
    return {
      get: function() {
        return t() ? void delete this.get : (this.get = e).apply(this, arguments)
      }
    }
  }
  function P(t) {
    if (t in Me)
      return t;
    for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = ke.length; i--; )
      if ((t = ke[i] + e)in Me)
        return t
  }
  function N(t, e) {
    for (var i, n, r, o = [], s = 0, a = t.length; s < a; s++)
      (n = t[s]).style && (o[s] = dt._data(n, "olddisplay"),
      i = n.style.display,
      e ? (o[s] || "none" !== i || (n.style.display = ""),
      "" === n.style.display && It(n) && (o[s] = dt._data(n, "olddisplay", C(n.nodeName)))) : (r = It(n),
      (i && "none" !== i || !r) && dt._data(n, "olddisplay", r ? i : dt.css(n, "display"))));
    for (s = 0; s < a; s++)
      (n = t[s]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[s] || "" : "none"));
    return t
  }
  function L(t, e, i) {
    var n = we.exec(e);
    return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
  }
  function D(t, e, i, n, r) {
    for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; o < 4; o += 2)
      "margin" === i && (s += dt.css(t, i + Xt[o], !0, r)),
      n ? ("content" === i && (s -= dt.css(t, "padding" + Xt[o], !0, r)),
      "margin" !== i && (s -= dt.css(t, "border" + Xt[o] + "Width", !0, r))) : (s += dt.css(t, "padding" + Xt[o], !0, r),
      "padding" !== i && (s += dt.css(t, "border" + Xt[o] + "Width", !0, r)));
    return s
  }
  function j(t, e, i) {
    var n = !0
      , r = "width" === e ? t.offsetWidth : t.offsetHeight
      , o = me(t)
      , s = ut.boxSizing && "border-box" === dt.css(t, "boxSizing", !1, o);
    if (r <= 0 || null == r) {
      if (((r = ve(t, e, o)) < 0 || null == r) && (r = t.style[e]),
      pe.test(r))
        return r;
      n = s && (ut.boxSizingReliable() || r === t.style[e]),
      r = parseFloat(r) || 0
    }
    return r + D(t, e, i || (s ? "border" : "content"), n, o) + "px"
  }
  function R(t, e, i, n, r) {
    return new R.prototype.init(t,e,i,n,r)
  }
  function H() {
    return S.setTimeout(function() {
      Ee = void 0
    }),
    Ee = dt.now()
  }
  function O(t, e) {
    var i, n = {
      height: t
    }, r = 0;
    for (e = e ? 1 : 0; r < 4; r += 2 - e)
      n["margin" + (i = Xt[r])] = n["padding" + i] = t;
    return e && (n.opacity = n.width = t),
    n
  }
  function W(t, e, i) {
    for (var n, r = (Y.tweeners[e] || []).concat(Y.tweeners["*"]), o = 0, s = r.length; o < s; o++)
      if (n = r[o].call(i, e, t))
        return n
  }
  function X(e, t, i) {
    var n, r, o, s, a, l, c, u = this, h = {}, d = e.style, p = e.nodeType && It(e), f = dt._data(e, "fxshow");
    for (n in i.queue || (null == (a = dt._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
    l = a.empty.fire,
    a.empty.fire = function() {
      a.unqueued || l()
    }
    ),
    a.unqueued++,
    u.always(function() {
      u.always(function() {
        a.unqueued--,
        dt.queue(e, "fx").length || a.empty.fire()
      })
    })),
    1 === e.nodeType && ("height"in t || "width"in t) && (i.overflow = [d.overflow, d.overflowX, d.overflowY],
    "inline" === ("none" === (c = dt.css(e, "display")) ? dt._data(e, "olddisplay") || C(e.nodeName) : c) && "none" === dt.css(e, "float") && (ut.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
    i.overflow && (d.overflow = "hidden",
    ut.shrinkWrapBlocks() || u.always(function() {
      d.overflow = i.overflow[0],
      d.overflowX = i.overflow[1],
      d.overflowY = i.overflow[2]
    })),
    t)
      if (r = t[n],
      De.exec(r)) {
        if (delete t[n],
        o = o || "toggle" === r,
        r === (p ? "hide" : "show")) {
          if ("show" !== r || !f || void 0 === f[n])
            continue;
          p = !0
        }
        h[n] = f && f[n] || dt.style(e, n)
      } else
        c = void 0;
    if (dt.isEmptyObject(h))
      "inline" === ("none" === c ? C(e.nodeName) : c) && (d.display = c);
    else
      for (n in f ? "hidden"in f && (p = f.hidden) : f = dt._data(e, "fxshow", {}),
      o && (f.hidden = !p),
      p ? dt(e).show() : u.done(function() {
        dt(e).hide()
      }),
      u.done(function() {
        var t;
        for (t in dt._removeData(e, "fxshow"),
        h)
          dt.style(e, t, h[t])
      }),
      h)
        s = W(p ? f[n] : 0, n, u),
        n in f || (f[n] = s.start,
        p && (s.end = s.start,
        s.start = "width" === n || "height" === n ? 1 : 0))
  }
  function I(t, e) {
    var i, n, r, o, s;
    for (i in t)
      if (r = e[n = dt.camelCase(i)],
      o = t[i],
      dt.isArray(o) && (r = o[1],
      o = t[i] = o[0]),
      i !== n && (t[n] = o,
      delete t[i]),
      (s = dt.cssHooks[n]) && "expand"in s)
        for (i in o = s.expand(o),
        delete t[n],
        o)
          i in t || (t[i] = o[i],
          e[i] = r);
      else
        e[n] = r
  }
  function Y(o, t, e) {
    var i, s, n = 0, r = Y.prefilters.length, a = dt.Deferred().always(function() {
      delete l.elem
    }), l = function() {
      if (s)
        return !1;
      for (var t = Ee || H(), e = Math.max(0, c.startTime + c.duration - t), i = 1 - (e / c.duration || 0), n = 0, r = c.tweens.length; n < r; n++)
        c.tweens[n].run(i);
      return a.notifyWith(o, [c, i, e]),
      i < 1 && r ? e : (a.resolveWith(o, [c]),
      !1)
    }, c = a.promise({
      elem: o,
      props: dt.extend({}, t),
      opts: dt.extend(!0, {
        specialEasing: {},
        easing: dt.easing._default
      }, e),
      originalProperties: t,
      originalOptions: e,
      startTime: Ee || H(),
      duration: e.duration,
      tweens: [],
      createTween: function(t, e) {
        var i = dt.Tween(o, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
        return c.tweens.push(i),
        i
      },
      stop: function(t) {
        var e = 0
          , i = t ? c.tweens.length : 0;
        if (s)
          return this;
        for (s = !0; e < i; e++)
          c.tweens[e].run(1);
        return t ? (a.notifyWith(o, [c, 1, 0]),
        a.resolveWith(o, [c, t])) : a.rejectWith(o, [c, t]),
        this
      }
    }), u = c.props;
    for (I(u, c.opts.specialEasing); n < r; n++)
      if (i = Y.prefilters[n].call(c, o, u, c.opts))
        return dt.isFunction(i.stop) && (dt._queueHooks(c.elem, c.opts.queue).stop = dt.proxy(i.stop, i)),
        i;
    return dt.map(u, W, c),
    dt.isFunction(c.opts.start) && c.opts.start.call(o, c),
    dt.fx.timer(dt.extend(l, {
      elem: o,
      anim: c,
      queue: c.opts.queue
    })),
    c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
  }
  function z(t) {
    return dt.attr(t, "class") || ""
  }
  function F(o) {
    return function(t, e) {
      "string" != typeof t && (e = t,
      t = "*");
      var i, n = 0, r = t.toLowerCase().match(At) || [];
      if (dt.isFunction(e))
        for (; i = r[n++]; )
          "+" === i.charAt(0) ? (i = i.slice(1) || "*",
          (o[i] = o[i] || []).unshift(e)) : (o[i] = o[i] || []).push(e)
    }
  }
  function $(e, r, o, s) {
    function a(t) {
      var n;
      return l[t] = !0,
      dt.each(e[t] || [], function(t, e) {
        var i = e(r, o, s);
        return "string" != typeof i || c || l[i] ? c ? !(n = i) : void 0 : (r.dataTypes.unshift(i),
        a(i),
        !1)
      }),
      n
    }
    var l = {}
      , c = e === oi;
    return a(r.dataTypes[0]) || !l["*"] && a("*")
  }
  function q(t, e) {
    var i, n, r = dt.ajaxSettings.flatOptions || {};
    for (n in e)
      void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
    return i && dt.extend(!0, t, i),
    t
  }
  function U(t, e, i) {
    for (var n, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0]; )
      l.shift(),
      void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
    if (r)
      for (s in a)
        if (a[s] && a[s].test(r)) {
          l.unshift(s);
          break
        }
    if (l[0]in i)
      o = l[0];
    else {
      for (s in i) {
        if (!l[0] || t.converters[s + " " + l[0]]) {
          o = s;
          break
        }
        n || (n = s)
      }
      o = o || n
    }
    return o ? (o !== l[0] && l.unshift(o),
    i[o]) : void 0
  }
  function V(t, e, i, n) {
    var r, o, s, a, l, c = {}, u = t.dataTypes.slice();
    if (u[1])
      for (s in t.converters)
        c[s.toLowerCase()] = t.converters[s];
    for (o = u.shift(); o; )
      if (t.responseFields[o] && (i[t.responseFields[o]] = e),
      !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
      l = o,
      o = u.shift())
        if ("*" === o)
          o = l;
        else if ("*" !== l && l !== o) {
          if (!(s = c[l + " " + o] || c["* " + o]))
            for (r in c)
              if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0],
                u.unshift(a[1]));
                break
              }
          if (!0 !== s)
            if (s && t["throws"])
              e = s(e);
            else
              try {
                e = s(e)
              } catch (ut) {
                return {
                  state: "parsererror",
                  error: s ? ut : "No conversion from " + l + " to " + o
                }
              }
        }
    return {
      state: "success",
      data: e
    }
  }
  function G(t) {
    return t.style && t.style.display || dt.css(t, "display")
  }
  function J(t) {
    if (!dt.contains(t.ownerDocument || it, t))
      return !0;
    for (; t && 1 === t.nodeType; ) {
      if ("none" === G(t) || "hidden" === t.type)
        return !0;
      t = t.parentNode
    }
    return !1
  }
  function K(i, t, n, r) {
    var e;
    if (dt.isArray(t))
      dt.each(t, function(t, e) {
        n || ui.test(i) ? r(i, e) : K(i + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, n, r)
      });
    else if (n || "object" !== dt.type(t))
      r(i, t);
    else
      for (e in t)
        K(i + "[" + e + "]", t[e], n, r)
  }
  function Q() {
    try {
      return new S.XMLHttpRequest
    } catch (e) {}
  }
  function Z() {
    try {
      return new S.ActiveXObject("Microsoft.XMLHTTP")
    } catch (e) {}
  }
  function tt(t) {
    return dt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
  }
  var et = []
    , it = S.document
    , nt = et.slice
    , rt = et.concat
    , ot = et.push
    , st = et.indexOf
    , at = {}
    , lt = at.toString
    , ct = at.hasOwnProperty
    , ut = {}
    , ht = "1.12.4"
    , dt = function(t, e) {
    return new dt.fn.init(t,e)
  }
    , pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
    , ft = /^-ms-/
    , gt = /-([\da-z])/gi
    , mt = function(t, e) {
    return e.toUpperCase()
  };
  dt.fn = dt.prototype = {
    jquery: ht,
    constructor: dt,
    selector: "",
    length: 0,
    toArray: function() {
      return nt.call(this)
    },
    get: function(t) {
      return null != t ? t < 0 ? this[t + this.length] : this[t] : nt.call(this)
    },
    pushStack: function(t) {
      var e = dt.merge(this.constructor(), t);
      return e.prevObject = this,
      e.context = this.context,
      e
    },
    each: function(t) {
      return dt.each(this, t)
    },
    map: function(i) {
      return this.pushStack(dt.map(this, function(t, e) {
        return i.call(t, e, t)
      }))
    },
    slice: function() {
      return this.pushStack(nt.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(t) {
      var e = this.length
        , i = +t + (t < 0 ? e : 0);
      return this.pushStack(0 <= i && i < e ? [this[i]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor()
    },
    push: ot,
    sort: et.sort,
    splice: et.splice
  },
  dt.extend = dt.fn.extend = function(t) {
    var e, i, n, r, o, s, a = t || {}, l = 1, c = arguments.length, u = !1;
    for ("boolean" == typeof a && (u = a,
    a = arguments[l] || {},
    l++),
    "object" == typeof a || dt.isFunction(a) || (a = {}),
    l === c && (a = this,
    l--); l < c; l++)
      if (null != (o = arguments[l]))
        for (r in o)
          e = a[r],
          a !== (n = o[r]) && (u && n && (dt.isPlainObject(n) || (i = dt.isArray(n))) ? (i ? (i = !1,
          s = e && dt.isArray(e) ? e : []) : s = e && dt.isPlainObject(e) ? e : {},
          a[r] = dt.extend(u, s, n)) : void 0 !== n && (a[r] = n));
    return a
  }
  ,
  dt.extend({
    expando: "jQuery" + (ht + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(t) {
      throw new Error(t)
    },
    noop: function() {},
    isFunction: function(t) {
      return "function" === dt.type(t)
    },
    isArray: Array.isArray || function(t) {
      return "array" === dt.type(t)
    }
    ,
    isWindow: function(t) {
      return null != t && t == t.window
    },
    isNumeric: function(t) {
      var e = t && t.toString();
      return !dt.isArray(t) && 0 <= e - parseFloat(e) + 1
    },
    isEmptyObject: function(t) {
      var e;
      for (e in t)
        return !1;
      return !0
    },
    isPlainObject: function(t) {
      var e;
      if (!t || "object" !== dt.type(t) || t.nodeType || dt.isWindow(t))
        return !1;
      try {
        if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf"))
          return !1
      } catch (et) {
        return !1
      }
      if (!ut.ownFirst)
        for (e in t)
          return ct.call(t, e);
      for (e in t)
        ;
      return void 0 === e || ct.call(t, e)
    },
    type: function(t) {
      return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? at[lt.call(t)] || "object" : typeof t
    },
    globalEval: function(t) {
      t && dt.trim(t) && (S.execScript || function(t) {
        S.eval.call(S, t)
      }
      )(t)
    },
    camelCase: function(t) {
      return t.replace(ft, "ms-").replace(gt, mt)
    },
    nodeName: function(t, e) {
      return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    },
    each: function(t, e) {
      var i, n = 0;
      if (f(t))
        for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++)
          ;
      else
        for (n in t)
          if (!1 === e.call(t[n], n, t[n]))
            break;
      return t
    },
    trim: function(t) {
      return null == t ? "" : (t + "").replace(pt, "")
    },
    makeArray: function(t, e) {
      var i = e || [];
      return null != t && (f(Object(t)) ? dt.merge(i, "string" == typeof t ? [t] : t) : ot.call(i, t)),
      i
    },
    inArray: function(t, e, i) {
      var n;
      if (e) {
        if (st)
          return st.call(e, t, i);
        for (n = e.length,
        i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++)
          if (i in e && e[i] === t)
            return i
      }
      return -1
    },
    merge: function(t, e) {
      for (var i = +e.length, n = 0, r = t.length; n < i; )
        t[r++] = e[n++];
      if (i != i)
        for (; void 0 !== e[n]; )
          t[r++] = e[n++];
      return t.length = r,
      t
    },
    grep: function(t, e, i) {
      for (var n = [], r = 0, o = t.length, s = !i; r < o; r++)
        !e(t[r], r) !== s && n.push(t[r]);
      return n
    },
    map: function(t, e, i) {
      var n, r, o = 0, s = [];
      if (f(t))
        for (n = t.length; o < n; o++)
          null != (r = e(t[o], o, i)) && s.push(r);
      else
        for (o in t)
          null != (r = e(t[o], o, i)) && s.push(r);
      return rt.apply([], s)
    },
    guid: 1,
    proxy: function(t, e) {
      var i, n, r;
      return "string" == typeof e && (r = t[e],
      e = t,
      t = r),
      dt.isFunction(t) ? (i = nt.call(arguments, 2),
      (n = function() {
        return t.apply(e || this, i.concat(nt.call(arguments)))
      }
      ).guid = t.guid = t.guid || dt.guid++,
      n) : void 0
    },
    now: function() {
      return +new Date
    },
    support: ut
  }),
  "function" == typeof Symbol && (dt.fn[Symbol.iterator] = et[Symbol.iterator]),
  dt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
    at["[object " + e + "]"] = e.toLowerCase()
  });
  var vt = function(i) {
    function _(t, e, i, n) {
      var r, o, s, a, l, c, u, h, d = e && e.ownerDocument, p = e ? e.nodeType : 9;
      if (i = i || [],
      "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
        return i;
      if (!n && ((e ? e.ownerDocument || e : X) !== N && P(e),
      e = e || N,
      D)) {
        if (11 !== p && (c = vt.exec(t)))
          if (r = c[1]) {
            if (9 === p) {
              if (!(s = e.getElementById(r)))
                return i;
              if (s.id === r)
                return i.push(s),
                i
            } else if (d && (s = d.getElementById(r)) && O(e, s) && s.id === r)
              return i.push(s),
              i
          } else {
            if (c[2])
              return Q.apply(i, e.getElementsByTagName(t)),
              i;
            if ((r = c[3]) && v.getElementsByClassName && e.getElementsByClassName)
              return Q.apply(i, e.getElementsByClassName(r)),
              i
          }
        if (v.qsa && !$[t + " "] && (!j || !j.test(t))) {
          if (1 !== p)
            d = e,
            h = t;
          else if ("object" !== e.nodeName.toLowerCase()) {
            for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = W),
            o = (u = k(t)).length,
            l = dt.test(a) ? "#" + a : "[id='" + a + "']"; o--; )
              u[o] = l + " " + g(u[o]);
            h = u.join(","),
            d = yt.test(t) && f(e.parentNode) || e
          }
          if (h)
            try {
              return Q.apply(i, d.querySelectorAll(h)),
              i
            } catch (z) {} finally {
              a === W && e.removeAttribute("id")
            }
        }
      }
      return E(t.replace(at, "$1"), e, i, n)
    }
    function t() {
      function i(t, e) {
        return n.push(t + " ") > w.cacheLength && delete i[n.shift()],
        i[t + " "] = e
      }
      var n = [];
      return i
    }
    function l(t) {
      return t[W] = !0,
      t
    }
    function r(t) {
      var e = N.createElement("div");
      try {
        return !!t(e)
      } catch (v) {
        return !1
      } finally {
        e.parentNode && e.parentNode.removeChild(e),
        e = null
      }
    }
    function e(t, e) {
      for (var i = t.split("|"), n = i.length; n--; )
        w.attrHandle[i[n]] = e
    }
    function c(t, e) {
      var i = e && t
        , n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
      if (n)
        return n;
      if (i)
        for (; i = i.nextSibling; )
          if (i === e)
            return -1;
      return t ? 1 : -1
    }
    function n(e) {
      return function(t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e
      }
    }
    function o(i) {
      return function(t) {
        var e = t.nodeName.toLowerCase();
        return ("input" === e || "button" === e) && t.type === i
      }
    }
    function s(s) {
      return l(function(o) {
        return o = +o,
        l(function(t, e) {
          for (var i, n = s([], t.length, o), r = n.length; r--; )
            t[i = n[r]] && (t[i] = !(e[i] = t[i]))
        })
      })
    }
    function f(t) {
      return t && "undefined" != typeof t.getElementsByTagName && t
    }
    function a() {}
    function g(t) {
      for (var e = 0, i = t.length, n = ""; e < i; e++)
        n += t[e].value;
      return n
    }
    function h(a, t, e) {
      var l = t.dir
        , c = e && "parentNode" === l
        , u = Y++;
      return t.first ? function(t, e, i) {
        for (; t = t[l]; )
          if (1 === t.nodeType || c)
            return a(t, e, i)
      }
      : function(t, e, i) {
        var n, r, o, s = [I, u];
        if (i) {
          for (; t = t[l]; )
            if ((1 === t.nodeType || c) && a(t, e, i))
              return !0
        } else
          for (; t = t[l]; )
            if (1 === t.nodeType || c) {
              if ((n = (r = (o = t[W] || (t[W] = {}))[t.uniqueID] || (o[t.uniqueID] = {}))[l]) && n[0] === I && n[1] === u)
                return s[2] = n[2];
              if ((r[l] = s)[2] = a(t, e, i))
                return !0
            }
      }
    }
    function d(r) {
      return 1 < r.length ? function(t, e, i) {
        for (var n = r.length; n--; )
          if (!r[n](t, e, i))
            return !1;
        return !0
      }
      : r[0]
    }
    function y(t, e, i) {
      for (var n = 0, r = e.length; n < r; n++)
        _(t, e[n], i);
      return i
    }
    function x(t, e, i, n, r) {
      for (var o, s = [], a = 0, l = t.length, c = null != e; a < l; a++)
        (o = t[a]) && (i && !i(o, n, r) || (s.push(o),
        c && e.push(a)));
      return s
    }
    function b(p, f, g, m, v, t) {
      return m && !m[W] && (m = b(m)),
      v && !v[W] && (v = b(v, t)),
      l(function(t, e, i, n) {
        var r, o, s, a = [], l = [], c = e.length, u = t || y(f || "*", i.nodeType ? [i] : i, []), h = !p || !t && f ? u : x(u, a, p, i, n), d = g ? v || (t ? p : c || m) ? [] : e : h;
        if (g && g(h, d, i, n),
        m)
          for (r = x(d, l),
          m(r, [], i, n),
          o = r.length; o--; )
            (s = r[o]) && (d[l[o]] = !(h[l[o]] = s));
        if (t) {
          if (v || p) {
            if (v) {
              for (r = [],
              o = d.length; o--; )
                (s = d[o]) && r.push(h[o] = s);
              v(null, d = [], r, n)
            }
            for (o = d.length; o--; )
              (s = d[o]) && -1 < (r = v ? tt(t, s) : a[o]) && (t[r] = !(e[r] = s))
          }
        } else
          d = x(d === e ? d.splice(c, d.length) : d),
          v ? v(null, e, d, n) : Q.apply(e, d)
      })
    }
    function p(t) {
      for (var r, e, i, n = t.length, o = w.relative[t[0].type], s = o || w.relative[" "], a = o ? 1 : 0, l = h(function(t) {
        return t === r
      }, s, !0), c = h(function(t) {
        return -1 < tt(r, t)
      }, s, !0), u = [function(t, e, i) {
        var n = !o && (i || e !== B) || ((r = e).nodeType ? l(t, e, i) : c(t, e, i));
        return r = null,
        n
      }
      ]; a < n; a++)
        if (e = w.relative[t[a].type])
          u = [h(d(u), e)];
        else {
          if ((e = w.filter[t[a].type].apply(null, t[a].matches))[W]) {
            for (i = ++a; i < n && !w.relative[t[i].type]; i++)
              ;
            return b(1 < a && d(u), 1 < a && g(t.slice(0, a - 1).concat({
              value: " " === t[a - 2].type ? "*" : ""
            })).replace(at, "$1"), e, a < i && p(t.slice(a, i)), i < n && p(t = t.slice(i)), i < n && g(t))
          }
          u.push(e)
        }
      return d(u)
    }
    function u(m, v) {
      var y = 0 < v.length
        , b = 0 < m.length
        , t = function(t, e, i, n, r) {
        var o, s, a, l = 0, c = "0", u = t && [], h = [], d = B, p = t || b && w.find.TAG("*", r), f = I += null == d ? 1 : Math.random() || .1, g = p.length;
        for (r && (B = e === N || e || r); c !== g && null != (o = p[c]); c++) {
          if (b && o) {
            for (s = 0,
            e || o.ownerDocument === N || (P(o),
            i = !D); a = m[s++]; )
              if (a(o, e || N, i)) {
                n.push(o);
                break
              }
            r && (I = f)
          }
          y && ((o = !a && o) && l--,
          t && u.push(o))
        }
        if (l += c,
        y && c !== l) {
          for (s = 0; a = v[s++]; )
            a(u, h, e, i);
          if (t) {
            if (0 < l)
              for (; c--; )
                u[c] || h[c] || (h[c] = J.call(n));
            h = x(h)
          }
          Q.apply(n, h),
          r && !t && 0 < h.length && 1 < l + v.length && _.uniqueSort(n)
        }
        return r && (I = f,
        B = d),
        u
      };
      return y ? l(t) : t
    }
    var m, v, w, S, T, k, M, E, B, C, A, P, N, L, D, j, R, H, O, W = "sizzle" + 1 * new Date, X = i.document, I = 0, Y = 0, z = t(), F = t(), $ = t(), q = function(t, e) {
      return t === e && (A = !0),
      0
    }, U = 1 << 31, V = {}.hasOwnProperty, G = [], J = G.pop, K = G.push, Q = G.push, Z = G.slice, tt = function(t, e) {
      for (var i = 0, n = t.length; i < n; i++)
        if (t[i] === e)
          return i;
      return -1
    }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", it = "[\\x20\\t\\r\\n\\f]", nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", rt = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]", ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)", st = new RegExp(it + "+","g"), at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$","g"), lt = new RegExp("^" + it + "*," + it + "*"), ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"), ut = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]","g"), ht = new RegExp(ot), dt = new RegExp("^" + nt + "$"), pt = {
      ID: new RegExp("^#(" + nt + ")"),
      CLASS: new RegExp("^\\.(" + nt + ")"),
      TAG: new RegExp("^(" + nt + "|[*])"),
      ATTR: new RegExp("^" + rt),
      PSEUDO: new RegExp("^" + ot),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)","i"),
      bool: new RegExp("^(?:" + et + ")$","i"),
      needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)","i")
    }, ft = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, mt = /^[^{]+\{\s*\[native \w/, vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/, bt = /'|\\/g, _t = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)","ig"), xt = function(t, e, i) {
      var n = "0x" + e - 65536;
      return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
    }, wt = function() {
      P()
    };
    try {
      Q.apply(G = Z.call(X.childNodes), X.childNodes),
      G[X.childNodes.length].nodeType
    } catch (St) {
      Q = {
        apply: G.length ? function(t, e) {
          K.apply(t, Z.call(e))
        }
        : function(t, e) {
          for (var i = t.length, n = 0; t[i++] = e[n++]; )
            ;
          t.length = i - 1
        }
      }
    }
    for (m in v = _.support = {},
    T = _.isXML = function(t) {
      var e = t && (t.ownerDocument || t).documentElement;
      return !!e && "HTML" !== e.nodeName
    }
    ,
    P = _.setDocument = function(t) {
      var e, i, n = t ? t.ownerDocument || t : X;
      return n !== N && 9 === n.nodeType && n.documentElement && (L = (N = n).documentElement,
      D = !T(N),
      (i = N.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", wt, !1) : i.attachEvent && i.attachEvent("onunload", wt)),
      v.attributes = r(function(t) {
        return t.className = "i",
        !t.getAttribute("className")
      }),
      v.getElementsByTagName = r(function(t) {
        return t.appendChild(N.createComment("")),
        !t.getElementsByTagName("*").length
      }),
      v.getElementsByClassName = mt.test(N.getElementsByClassName),
      v.getById = r(function(t) {
        return L.appendChild(t).id = W,
        !N.getElementsByName || !N.getElementsByName(W).length
      }),
      v.getById ? (w.find.ID = function(t, e) {
        if ("undefined" != typeof e.getElementById && D) {
          var i = e.getElementById(t);
          return i ? [i] : []
        }
      }
      ,
      w.filter.ID = function(t) {
        var e = t.replace(_t, xt);
        return function(t) {
          return t.getAttribute("id") === e
        }
      }
      ) : (delete w.find.ID,
      w.filter.ID = function(t) {
        var i = t.replace(_t, xt);
        return function(t) {
          var e = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
          return e && e.value === i
        }
      }
      ),
      w.find.TAG = v.getElementsByTagName ? function(t, e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : v.qsa ? e.querySelectorAll(t) : void 0
      }
      : function(t, e) {
        var i, n = [], r = 0, o = e.getElementsByTagName(t);
        if ("*" === t) {
          for (; i = o[r++]; )
            1 === i.nodeType && n.push(i);
          return n
        }
        return o
      }
      ,
      w.find.CLASS = v.getElementsByClassName && function(t, e) {
        return "undefined" != typeof e.getElementsByClassName && D ? e.getElementsByClassName(t) : void 0
      }
      ,
      R = [],
      j = [],
      (v.qsa = mt.test(N.querySelectorAll)) && (r(function(t) {
        L.appendChild(t).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>",
        t.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + it + "*(?:''|\"\")"),
        t.querySelectorAll("[selected]").length || j.push("\\[" + it + "*(?:value|" + et + ")"),
        t.querySelectorAll("[id~=" + W + "-]").length || j.push("~="),
        t.querySelectorAll(":checked").length || j.push(":checked"),
        t.querySelectorAll("a#" + W + "+*").length || j.push(".#.+[+~]")
      }),
      r(function(t) {
        var e = N.createElement("input");
        e.setAttribute("type", "hidden"),
        t.appendChild(e).setAttribute("name", "D"),
        t.querySelectorAll("[name=d]").length && j.push("name" + it + "*[*^$|!~]?="),
        t.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"),
        t.querySelectorAll("*,:x"),
        j.push(",.*:")
      })),
      (v.matchesSelector = mt.test(H = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(t) {
        v.disconnectedMatch = H.call(t, "div"),
        H.call(t, "[s!='']:x"),
        R.push("!=", ot)
      }),
      j = j.length && new RegExp(j.join("|")),
      R = R.length && new RegExp(R.join("|")),
      e = mt.test(L.compareDocumentPosition),
      O = e || mt.test(L.contains) ? function(t, e) {
        var i = 9 === t.nodeType ? t.documentElement : t
          , n = e && e.parentNode;
        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
      }
      : function(t, e) {
        if (e)
          for (; e = e.parentNode; )
            if (e === t)
              return !0;
        return !1
      }
      ,
      q = e ? function(t, e) {
        if (t === e)
          return A = !0,
          0;
        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
        return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !v.sortDetached && e.compareDocumentPosition(t) === i ? t === N || t.ownerDocument === X && O(X, t) ? -1 : e === N || e.ownerDocument === X && O(X, e) ? 1 : C ? tt(C, t) - tt(C, e) : 0 : 4 & i ? -1 : 1)
      }
      : function(t, e) {
        if (t === e)
          return A = !0,
          0;
        var i, n = 0, r = t.parentNode, o = e.parentNode, s = [t], a = [e];
        if (!r || !o)
          return t === N ? -1 : e === N ? 1 : r ? -1 : o ? 1 : C ? tt(C, t) - tt(C, e) : 0;
        if (r === o)
          return c(t, e);
        for (i = t; i = i.parentNode; )
          s.unshift(i);
        for (i = e; i = i.parentNode; )
          a.unshift(i);
        for (; s[n] === a[n]; )
          n++;
        return n ? c(s[n], a[n]) : s[n] === X ? -1 : a[n] === X ? 1 : 0
      }
      ),
      N
    }
    ,
    _.matches = function(t, e) {
      return _(t, null, null, e)
    }
    ,
    _.matchesSelector = function(t, e) {
      if ((t.ownerDocument || t) !== N && P(t),
      e = e.replace(ut, "='$1']"),
      v.matchesSelector && D && !$[e + " "] && (!R || !R.test(e)) && (!j || !j.test(e)))
        try {
          var i = H.call(t, e);
          if (i || v.disconnectedMatch || t.document && 11 !== t.document.nodeType)
            return i
        } catch (S) {}
      return 0 < _(e, N, null, [t]).length
    }
    ,
    _.contains = function(t, e) {
      return (t.ownerDocument || t) !== N && P(t),
      O(t, e)
    }
    ,
    _.attr = function(t, e) {
      (t.ownerDocument || t) !== N && P(t);
      var i = w.attrHandle[e.toLowerCase()]
        , n = i && V.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !D) : void 0;
      return void 0 !== n ? n : v.attributes || !D ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
    }
    ,
    _.error = function(t) {
      throw new Error("Syntax error, unrecognized expression: " + t)
    }
    ,
    _.uniqueSort = function(t) {
      var e, i = [], n = 0, r = 0;
      if (A = !v.detectDuplicates,
      C = !v.sortStable && t.slice(0),
      t.sort(q),
      A) {
        for (; e = t[r++]; )
          e === t[r] && (n = i.push(r));
        for (; n--; )
          t.splice(i[n], 1)
      }
      return C = null,
      t
    }
    ,
    S = _.getText = function(t) {
      var e, i = "", n = 0, r = t.nodeType;
      if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof t.textContent)
            return t.textContent;
          for (t = t.firstChild; t; t = t.nextSibling)
            i += S(t)
        } else if (3 === r || 4 === r)
          return t.nodeValue
      } else
        for (; e = t[n++]; )
          i += S(e);
      return i
    }
    ,
    (w = _.selectors = {
      cacheLength: 50,
      createPseudo: l,
      match: pt,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(t) {
          return t[1] = t[1].replace(_t, xt),
          t[3] = (t[3] || t[4] || t[5] || "").replace(_t, xt),
          "~=" === t[2] && (t[3] = " " + t[3] + " "),
          t.slice(0, 4)
        },
        CHILD: function(t) {
          return t[1] = t[1].toLowerCase(),
          "nth" === t[1].slice(0, 3) ? (t[3] || _.error(t[0]),
          t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
          t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && _.error(t[0]),
          t
        },
        PSEUDO: function(t) {
          var e, i = !t[6] && t[2];
          return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ht.test(i) && (e = k(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e),
          t[2] = i.slice(0, e)),
          t.slice(0, 3))
        }
      },
      filter: {
        TAG: function(t) {
          var e = t.replace(_t, xt).toLowerCase();
          return "*" === t ? function() {
            return !0
          }
          : function(t) {
            return t.nodeName && t.nodeName.toLowerCase() === e
          }
        },
        CLASS: function(t) {
          var e = z[t + " "];
          return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && z(t, function(t) {
            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
          })
        },
        ATTR: function(i, n, r) {
          return function(t) {
            var e = _.attr(t, i);
            return null == e ? "!=" === n : !n || (e += "",
            "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(st, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
          }
        },
        CHILD: function(f, t, e, g, m) {
          var v = "nth" !== f.slice(0, 3)
            , y = "last" !== f.slice(-4)
            , b = "of-type" === t;
          return 1 === g && 0 === m ? function(t) {
            return !!t.parentNode
          }
          : function(t, e, i) {
            var n, r, o, s, a, l, c = v !== y ? "nextSibling" : "previousSibling", u = t.parentNode, h = b && t.nodeName.toLowerCase(), d = !i && !b, p = !1;
            if (u) {
              if (v) {
                for (; c; ) {
                  for (s = t; s = s[c]; )
                    if (b ? s.nodeName.toLowerCase() === h : 1 === s.nodeType)
                      return !1;
                  l = c = "only" === f && !l && "nextSibling"
                }
                return !0
              }
              if (l = [y ? u.firstChild : u.lastChild],
              y && d) {
                for (p = (a = (n = (r = (o = (s = u)[W] || (s[W] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[f] || [])[0] === I && n[1]) && n[2],
                s = a && u.childNodes[a]; s = ++a && s && s[c] || (p = a = 0) || l.pop(); )
                  if (1 === s.nodeType && ++p && s === t) {
                    r[f] = [I, a, p];
                    break
                  }
              } else if (d && (p = a = (n = (r = (o = (s = t)[W] || (s[W] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[f] || [])[0] === I && n[1]),
              !1 === p)
                for (; (s = ++a && s && s[c] || (p = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== h : 1 !== s.nodeType) || !++p || (d && ((r = (o = s[W] || (s[W] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[f] = [I, p]),
                s !== t)); )
                  ;
              return (p -= m) === g || p % g == 0 && 0 <= p / g
            }
          }
        },
        PSEUDO: function(t, o) {
          var e, s = w.pseudos[t] || w.setFilters[t.toLowerCase()] || _.error("unsupported pseudo: " + t);
          return s[W] ? s(o) : 1 < s.length ? (e = [t, t, "", o],
          w.setFilters.hasOwnProperty(t.toLowerCase()) ? l(function(t, e) {
            for (var i, n = s(t, o), r = n.length; r--; )
              t[i = tt(t, n[r])] = !(e[i] = n[r])
          }) : function(t) {
            return s(t, 0, e)
          }
          ) : s
        }
      },
      pseudos: {
        not: l(function(t) {
          var n = []
            , r = []
            , a = M(t.replace(at, "$1"));
          return a[W] ? l(function(t, e, i, n) {
            for (var r, o = a(t, null, n, []), s = t.length; s--; )
              (r = o[s]) && (t[s] = !(e[s] = r))
          }) : function(t, e, i) {
            return n[0] = t,
            a(n, null, i, r),
            n[0] = null,
            !r.pop()
          }
        }),
        has: l(function(e) {
          return function(t) {
            return 0 < _(e, t).length
          }
        }),
        contains: l(function(e) {
          return e = e.replace(_t, xt),
          function(t) {
            return -1 < (t.textContent || t.innerText || S(t)).indexOf(e)
          }
        }),
        lang: l(function(i) {
          return dt.test(i || "") || _.error("unsupported lang: " + i),
          i = i.replace(_t, xt).toLowerCase(),
          function(t) {
            var e;
            do {
              if (e = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1
          }
        }),
        target: function(t) {
          var e = i.location && i.location.hash;
          return e && e.slice(1) === t.id
        },
        root: function(t) {
          return t === L
        },
        focus: function(t) {
          return t === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
        },
        enabled: function(t) {
          return !1 === t.disabled
        },
        disabled: function(t) {
          return !0 === t.disabled
        },
        checked: function(t) {
          var e = t.nodeName.toLowerCase();
          return "input" === e && !!t.checked || "option" === e && !!t.selected
        },
        selected: function(t) {
          return t.parentNode && t.parentNode.selectedIndex,
          !0 === t.selected
        },
        empty: function(t) {
          for (t = t.firstChild; t; t = t.nextSibling)
            if (t.nodeType < 6)
              return !1;
          return !0
        },
        parent: function(t) {
          return !w.pseudos.empty(t)
        },
        header: function(t) {
          return gt.test(t.nodeName)
        },
        input: function(t) {
          return ft.test(t.nodeName)
        },
        button: function(t) {
          var e = t.nodeName.toLowerCase();
          return "input" === e && "button" === t.type || "button" === e
        },
        text: function(t) {
          var e;
          return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
        },
        first: s(function() {
          return [0]
        }),
        last: s(function(t, e) {
          return [e - 1]
        }),
        eq: s(function(t, e, i) {
          return [i < 0 ? i + e : i]
        }),
        even: s(function(t, e) {
          for (var i = 0; i < e; i += 2)
            t.push(i);
          return t
        }),
        odd: s(function(t, e) {
          for (var i = 1; i < e; i += 2)
            t.push(i);
          return t
        }),
        lt: s(function(t, e, i) {
          for (var n = i < 0 ? i + e : i; 0 <= --n; )
            t.push(n);
          return t
        }),
        gt: s(function(t, e, i) {
          for (var n = i < 0 ? i + e : i; ++n < e; )
            t.push(n);
          return t
        })
      }
    }).pseudos.nth = w.pseudos.eq,
    {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    })
      w.pseudos[m] = n(m);
    for (m in {
      submit: !0,
      reset: !0
    })
      w.pseudos[m] = o(m);
    return a.prototype = w.filters = w.pseudos,
    w.setFilters = new a,
    k = _.tokenize = function(t, e) {
      var i, n, r, o, s, a, l, c = F[t + " "];
      if (c)
        return e ? 0 : c.slice(0);
      for (s = t,
      a = [],
      l = w.preFilter; s; ) {
        for (o in i && !(n = lt.exec(s)) || (n && (s = s.slice(n[0].length) || s),
        a.push(r = [])),
        i = !1,
        (n = ct.exec(s)) && (i = n.shift(),
        r.push({
          value: i,
          type: n[0].replace(at, " ")
        }),
        s = s.slice(i.length)),
        w.filter)
          !(n = pt[o].exec(s)) || l[o] && !(n = l[o](n)) || (i = n.shift(),
          r.push({
            value: i,
            type: o,
            matches: n
          }),
          s = s.slice(i.length));
        if (!i)
          break
      }
      return e ? s.length : s ? _.error(t) : F(t, a).slice(0)
    }
    ,
    M = _.compile = function(t, e) {
      var i, n = [], r = [], o = $[t + " "];
      if (!o) {
        for (e || (e = k(t)),
        i = e.length; i--; )
          (o = p(e[i]))[W] ? n.push(o) : r.push(o);
        (o = $(t, u(r, n))).selector = t
      }
      return o
    }
    ,
    E = _.select = function(t, e, i, n) {
      var r, o, s, a, l, c = "function" == typeof t && t, u = !n && k(t = c.selector || t);
      if (i = i || [],
      1 === u.length) {
        if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (s = o[0]).type && v.getById && 9 === e.nodeType && D && w.relative[o[1].type]) {
          if (!(e = (w.find.ID(s.matches[0].replace(_t, xt), e) || [])[0]))
            return i;
          c && (e = e.parentNode),
          t = t.slice(o.shift().value.length)
        }
        for (r = pt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r],
        !w.relative[a = s.type]); )
          if ((l = w.find[a]) && (n = l(s.matches[0].replace(_t, xt), yt.test(o[0].type) && f(e.parentNode) || e))) {
            if (o.splice(r, 1),
            !(t = n.length && g(o)))
              return Q.apply(i, n),
              i;
            break
          }
      }
      return (c || M(t, u))(n, e, !D, i, !e || yt.test(t) && f(e.parentNode) || e),
      i
    }
    ,
    v.sortStable = W.split("").sort(q).join("") === W,
    v.detectDuplicates = !!A,
    P(),
    v.sortDetached = r(function(t) {
      return 1 & t.compareDocumentPosition(N.createElement("div"))
    }),
    r(function(t) {
      return t.innerHTML = "<a href='#'></a>",
      "#" === t.firstChild.getAttribute("href")
    }) || e("type|href|height|width", function(t, e, i) {
      return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
    }),
    v.attributes && r(function(t) {
      return t.innerHTML = "<input/>",
      t.firstChild.setAttribute("value", ""),
      "" === t.firstChild.getAttribute("value")
    }) || e("value", function(t, e, i) {
      return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
    }),
    r(function(t) {
      return null == t.getAttribute("disabled")
    }) || e(et, function(t, e, i) {
      var n;
      return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
    }),
    _
  }(S);
  dt.find = vt,
  dt.expr = vt.selectors,
  dt.expr[":"] = dt.expr.pseudos,
  dt.uniqueSort = dt.unique = vt.uniqueSort,
  dt.text = vt.getText,
  dt.isXMLDoc = vt.isXML,
  dt.contains = vt.contains;
  var yt = function(t, e, i) {
    for (var n = [], r = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
      if (1 === t.nodeType) {
        if (r && dt(t).is(i))
          break;
        n.push(t)
      }
    return n
  }
    , bt = function(t, e) {
    for (var i = []; t; t = t.nextSibling)
      1 === t.nodeType && t !== e && i.push(t);
    return i
  }
    , _t = dt.expr.match.needsContext
    , xt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
    , wt = /^.[^:#\[\.,]*$/;
  dt.filter = function(t, e, i) {
    var n = e[0];
    return i && (t = ":not(" + t + ")"),
    1 === e.length && 1 === n.nodeType ? dt.find.matchesSelector(n, t) ? [n] : [] : dt.find.matches(t, dt.grep(e, function(t) {
      return 1 === t.nodeType
    }))
  }
  ,
  dt.fn.extend({
    find: function(t) {
      var e, i = [], n = this, r = n.length;
      if ("string" != typeof t)
        return this.pushStack(dt(t).filter(function() {
          for (e = 0; e < r; e++)
            if (dt.contains(n[e], this))
              return !0
        }));
      for (e = 0; e < r; e++)
        dt.find(t, n[e], i);
      return (i = this.pushStack(1 < r ? dt.unique(i) : i)).selector = this.selector ? this.selector + " " + t : t,
      i
    },
    filter: function(t) {
      return this.pushStack(i(this, t || [], !1))
    },
    not: function(t) {
      return this.pushStack(i(this, t || [], !0))
    },
    is: function(t) {
      return !!i(this, "string" == typeof t && _t.test(t) ? dt(t) : t || [], !1).length
    }
  });
  var Tt, kt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (dt.fn.init = function(t, e, i) {
    var n, r;
    if (!t)
      return this;
    if (i = i || Tt,
    "string" == typeof t) {
      if (!(n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && 3 <= t.length ? [null, t, null] : kt.exec(t)) || !n[1] && e)
        return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
      if (n[1]) {
        if (e = e instanceof dt ? e[0] : e,
        dt.merge(this, dt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : it, !0)),
        xt.test(n[1]) && dt.isPlainObject(e))
          for (n in e)
            dt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
        return this
      }
      if ((r = it.getElementById(n[2])) && r.parentNode) {
        if (r.id !== n[2])
          return Tt.find(t);
        this.length = 1,
        this[0] = r
      }
      return this.context = it,
      this.selector = t,
      this
    }
    return t.nodeType ? (this.context = this[0] = t,
    this.length = 1,
    this) : dt.isFunction(t) ? "undefined" != typeof i.ready ? i.ready(t) : t(dt) : (void 0 !== t.selector && (this.selector = t.selector,
    this.context = t.context),
    dt.makeArray(t, this))
  }
  ).prototype = dt.fn,
  Tt = dt(it);
  var Mt = /^(?:parents|prev(?:Until|All))/
    , Et = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  dt.fn.extend({
    has: function(t) {
      var e, i = dt(t, this), n = i.length;
      return this.filter(function() {
        for (e = 0; e < n; e++)
          if (dt.contains(this, i[e]))
            return !0
      })
    },
    closest: function(t, e) {
      for (var i, n = 0, r = this.length, o = [], s = _t.test(t) || "string" != typeof t ? dt(t, e || this.context) : 0; n < r; n++)
        for (i = this[n]; i && i !== e; i = i.parentNode)
          if (i.nodeType < 11 && (s ? -1 < s.index(i) : 1 === i.nodeType && dt.find.matchesSelector(i, t))) {
            o.push(i);
            break
          }
      return this.pushStack(1 < o.length ? dt.uniqueSort(o) : o)
    },
    index: function(t) {
      return t ? "string" == typeof t ? dt.inArray(this[0], dt(t)) : dt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(t, e) {
      return this.pushStack(dt.uniqueSort(dt.merge(this.get(), dt(t, e))))
    },
    addBack: function(t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }
  }),
  dt.each({
    parent: function(t) {
      var e = t.parentNode;
      return e && 11 !== e.nodeType ? e : null
    },
    parents: function(t) {
      return yt(t, "parentNode")
    },
    parentsUntil: function(t, e, i) {
      return yt(t, "parentNode", i)
    },
    next: function(t) {
      return n(t, "nextSibling")
    },
    prev: function(t) {
      return n(t, "previousSibling")
    },
    nextAll: function(t) {
      return yt(t, "nextSibling")
    },
    prevAll: function(t) {
      return yt(t, "previousSibling")
    },
    nextUntil: function(t, e, i) {
      return yt(t, "nextSibling", i)
    },
    prevUntil: function(t, e, i) {
      return yt(t, "previousSibling", i)
    },
    siblings: function(t) {
      return bt((t.parentNode || {}).firstChild, t)
    },
    children: function(t) {
      return bt(t.firstChild)
    },
    contents: function(t) {
      return dt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : dt.merge([], t.childNodes)
    }
  }, function(n, r) {
    dt.fn[n] = function(t, e) {
      var i = dt.map(this, r, t);
      return "Until" !== n.slice(-5) && (e = t),
      e && "string" == typeof e && (i = dt.filter(e, i)),
      1 < this.length && (Et[n] || (i = dt.uniqueSort(i)),
      Mt.test(n) && (i = i.reverse())),
      this.pushStack(i)
    }
  });
  var Bt, Ct, At = /\S+/g;
  for (Ct in dt.Callbacks = function(n) {
    n = "string" == typeof n ? u(n) : dt.extend({}, n);
    var r, t, e, i, o = [], s = [], a = -1, l = function() {
      for (i = n.once,
      e = r = !0; s.length; a = -1)
        for (t = s.shift(); ++a < o.length; )
          !1 === o[a].apply(t[0], t[1]) && n.stopOnFalse && (a = o.length,
          t = !1);
      n.memory || (t = !1),
      r = !1,
      i && (o = t ? [] : "")
    }, c = {
      add: function() {
        return o && (t && !r && (a = o.length - 1,
        s.push(t)),
        function i(t) {
          dt.each(t, function(t, e) {
            dt.isFunction(e) ? n.unique && c.has(e) || o.push(e) : e && e.length && "string" !== dt.type(e) && i(e)
          })
        }(arguments),
        t && !r && l()),
        this
      },
      remove: function() {
        return dt.each(arguments, function(t, e) {
          for (var i; -1 < (i = dt.inArray(e, o, i)); )
            o.splice(i, 1),
            i <= a && a--
        }),
        this
      },
      has: function(t) {
        return t ? -1 < dt.inArray(t, o) : 0 < o.length
      },
      empty: function() {
        return o && (o = []),
        this
      },
      disable: function() {
        return i = s = [],
        o = t = "",
        this
      },
      disabled: function() {
        return !o
      },
      lock: function() {
        return i = !0,
        t || c.disable(),
        this
      },
      locked: function() {
        return !!i
      },
      fireWith: function(t, e) {
        return i || (e = [t, (e = e || []).slice ? e.slice() : e],
        s.push(e),
        r || l()),
        this
      },
      fire: function() {
        return c.fireWith(this, arguments),
        this
      },
      fired: function() {
        return !!e
      }
    };
    return c
  }
  ,
  dt.extend({
    Deferred: function(t) {
      var o = [["resolve", "done", dt.Callbacks("once memory"), "resolved"], ["reject", "fail", dt.Callbacks("once memory"), "rejected"], ["notify", "progress", dt.Callbacks("memory")]]
        , r = "pending"
        , s = {
        state: function() {
          return r
        },
        always: function() {
          return a.done(arguments).fail(arguments),
          this
        },
        then: function() {
          var r = arguments;
          return dt.Deferred(function(n) {
            dt.each(o, function(t, e) {
              var i = dt.isFunction(r[t]) && r[t];
              a[e[1]](function() {
                var t = i && i.apply(this, arguments);
                t && dt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[e[0] + "With"](this === s ? n.promise() : this, i ? [t] : arguments)
              })
            }),
            r = null
          }).promise()
        },
        promise: function(t) {
          return null != t ? dt.extend(t, s) : s
        }
      }
        , a = {};
      return s.pipe = s.then,
      dt.each(o, function(t, e) {
        var i = e[2]
          , n = e[3];
        s[e[1]] = i.add,
        n && i.add(function() {
          r = n
        }, o[1 ^ t][2].disable, o[2][2].lock),
        a[e[0]] = function() {
          return a[e[0] + "With"](this === a ? s : this, arguments),
          this
        }
        ,
        a[e[0] + "With"] = i.fireWith
      }),
      s.promise(a),
      t && t.call(a, a),
      a
    },
    when: function(t) {
      var r, e, i, n = 0, o = nt.call(arguments), s = o.length, a = 1 !== s || t && dt.isFunction(t.promise) ? s : 0, l = 1 === a ? t : dt.Deferred(), c = function(e, i, n) {
        return function(t) {
          i[e] = this,
          n[e] = 1 < arguments.length ? nt.call(arguments) : t,
          n === r ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
        }
      };
      if (1 < s)
        for (r = new Array(s),
        e = new Array(s),
        i = new Array(s); n < s; n++)
          o[n] && dt.isFunction(o[n].promise) ? o[n].promise().progress(c(n, e, r)).done(c(n, i, o)).fail(l.reject) : --a;
      return a || l.resolveWith(i, o),
      l.promise()
    }
  }),
  dt.fn.ready = function(t) {
    return dt.ready.promise().done(t),
    this
  }
  ,
  dt.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(t) {
      t ? dt.readyWait++ : dt.ready(!0)
    },
    ready: function(t) {
      (!0 === t ? --dt.readyWait : dt.isReady) || ((dt.isReady = !0) !== t && 0 < --dt.readyWait || (Bt.resolveWith(it, [dt]),
      dt.fn.triggerHandler && (dt(it).triggerHandler("ready"),
      dt(it).off("ready"))))
    }
  }),
  dt.ready.promise = function(e) {
    if (!Bt)
      if (Bt = dt.Deferred(),
      "complete" === it.readyState || "loading" !== it.readyState && !it.documentElement.doScroll)
        S.setTimeout(dt.ready);
      else if (it.addEventListener)
        it.addEventListener("DOMContentLoaded", o),
        S.addEventListener("load", o);
      else {
        it.attachEvent("onreadystatechange", o),
        S.attachEvent("onload", o);
        var i = !1;
        try {
          i = null == S.frameElement && it.documentElement
        } catch (nt) {}
        i && i.doScroll && function t() {
          if (!dt.isReady) {
            try {
              i.doScroll("left")
            } catch (e) {
              return S.setTimeout(t, 50)
            }
            r(),
            dt.ready()
          }
        }()
      }
    return Bt.promise(e)
  }
  ,
  dt.ready.promise(),
  dt(ut))
    break;
  ut.ownFirst = "0" === Ct,
  ut.inlineBlockNeedsLayout = !1,
  dt(function() {
    var t, e, i, n;
    (i = it.getElementsByTagName("body")[0]) && i.style && (e = it.createElement("div"),
    (n = it.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
    i.appendChild(n).appendChild(e),
    "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
    ut.inlineBlockNeedsLayout = t = 3 === e.offsetWidth,
    t && (i.style.zoom = 1)),
    i.removeChild(n))
  }),
  function() {
    var t = it.createElement("div");
    ut.deleteExpando = !0;
    try {
      delete t.test
    } catch (e) {
      ut.deleteExpando = !1
    }
    t = null
  }();
  var Pt, Nt = function(t) {
    var e = dt.noData[(t.nodeName + " ").toLowerCase()]
      , i = +t.nodeType || 1;
    return (1 === i || 9 === i) && (!e || !0 !== e && t.getAttribute("classid") === e)
  }, Lt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Dt = /([A-Z])/g;
  dt.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(t) {
      return !!(t = t.nodeType ? dt.cache[t[dt.expando]] : t[dt.expando]) && !l(t)
    },
    data: function(t, e, i) {
      return s(t, e, i)
    },
    removeData: function(t, e) {
      return c(t, e)
    },
    _data: function(t, e, i) {
      return s(t, e, i, !0)
    },
    _removeData: function(t, e) {
      return c(t, e, !0)
    }
  }),
  dt.fn.extend({
    data: function(t, e) {
      var i, n, r, o = this[0], s = o && o.attributes;
      if (void 0 === t) {
        if (this.length && (r = dt.data(o),
        1 === o.nodeType && !dt._data(o, "parsedAttrs"))) {
          for (i = s.length; i--; )
            s[i] && (0 === (n = s[i].name).indexOf("data-") && a(o, n = dt.camelCase(n.slice(5)), r[n]));
          dt._data(o, "parsedAttrs", !0)
        }
        return r
      }
      return "object" == typeof t ? this.each(function() {
        dt.data(this, t)
      }) : 1 < arguments.length ? this.each(function() {
        dt.data(this, t, e)
      }) : o ? a(o, t, dt.data(o, t)) : void 0
    },
    removeData: function(t) {
      return this.each(function() {
        dt.removeData(this, t)
      })
    }
  }),
  dt.extend({
    queue: function(t, e, i) {
      var n;
      return t ? (e = (e || "fx") + "queue",
      n = dt._data(t, e),
      i && (!n || dt.isArray(i) ? n = dt._data(t, e, dt.makeArray(i)) : n.push(i)),
      n || []) : void 0
    },
    dequeue: function(t, e) {
      e = e || "fx";
      var i = dt.queue(t, e)
        , n = i.length
        , r = i.shift()
        , o = dt._queueHooks(t, e)
        , s = function() {
        dt.dequeue(t, e)
      };
      "inprogress" === r && (r = i.shift(),
      n--),
      r && ("fx" === e && i.unshift("inprogress"),
      delete o.stop,
      r.call(t, s, o)),
      !n && o && o.empty.fire()
    },
    _queueHooks: function(t, e) {
      var i = e + "queueHooks";
      return dt._data(t, i) || dt._data(t, i, {
        empty: dt.Callbacks("once memory").add(function() {
          dt._removeData(t, e + "queue"),
          dt._removeData(t, i)
        })
      })
    }
  }),
  dt.fn.extend({
    queue: function(e, i) {
      var t = 2;
      return "string" != typeof e && (i = e,
      e = "fx",
      t--),
      arguments.length < t ? dt.queue(this[0], e) : void 0 === i ? this : this.each(function() {
        var t = dt.queue(this, e, i);
        dt._queueHooks(this, e),
        "fx" === e && "inprogress" !== t[0] && dt.dequeue(this, e)
      })
    },
    dequeue: function(t) {
      return this.each(function() {
        dt.dequeue(this, t)
      })
    },
    clearQueue: function(t) {
      return this.queue(t || "fx", [])
    },
    promise: function(t, e) {
      var i, n = 1, r = dt.Deferred(), o = this, s = this.length, a = function() {
        --n || r.resolveWith(o, [o])
      };
      for ("string" != typeof t && (e = t,
      t = void 0),
      t = t || "fx"; s--; )
        (i = dt._data(o[s], t + "queueHooks")) && i.empty && (n++,
        i.empty.add(a));
      return a(),
      r.promise(e)
    }
  }),
  ut.shrinkWrapBlocks = function() {
    return null != Pt ? Pt : (Pt = !1,
    (e = it.getElementsByTagName("body")[0]) && e.style ? (t = it.createElement("div"),
    (i = it.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
    e.appendChild(i).appendChild(t),
    "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
    t.appendChild(it.createElement("div")).style.width = "5px",
    Pt = 3 !== t.offsetWidth),
    e.removeChild(i),
    Pt) : void 0);
    var t, e, i
  }
  ;
  var jt, Rt, Ht, Ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Wt = new RegExp("^(?:([+-])=|)(" + Ot + ")([a-z%]*)$","i"), Xt = ["Top", "Right", "Bottom", "Left"], It = function(t, e) {
    return t = e || t,
    "none" === dt.css(t, "display") || !dt.contains(t.ownerDocument, t)
  }, Yt = function(t, e, i, n, r, o, s) {
    var a = 0
      , l = t.length
      , c = null == i;
    if ("object" === dt.type(i))
      for (a in r = !0,
      i)
        Yt(t, e, a, i[a], !0, o, s);
    else if (void 0 !== n && (r = !0,
    dt.isFunction(n) || (s = !0),
    c && (s ? (e.call(t, n),
    e = null) : (c = e,
    e = function(t, e, i) {
      return c.call(dt(t), i)
    }
    )),
    e))
      for (; a < l; a++)
        e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
    return r ? t : c ? e.call(t) : l ? e(t[0], i) : o
  }, zt = /^(?:checkbox|radio)$/i, Ft = /<([\w:-]+)/, $t = /^$|\/(?:java|ecma)script/i, qt = /^\s+/, Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  jt = it.createElement("div"),
  Rt = it.createDocumentFragment(),
  Ht = it.createElement("input"),
  jt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
  ut.leadingWhitespace = 3 === jt.firstChild.nodeType,
  ut.tbody = !jt.getElementsByTagName("tbody").length,
  ut.htmlSerialize = !!jt.getElementsByTagName("link").length,
  ut.html5Clone = "<:nav></:nav>" !== it.createElement("nav").cloneNode(!0).outerHTML,
  Ht.type = "checkbox",
  Ht.checked = !0,
  Rt.appendChild(Ht),
  ut.appendChecked = Ht.checked,
  jt.innerHTML = "<textarea>x</textarea>",
  ut.noCloneChecked = !!jt.cloneNode(!0).lastChild.defaultValue,
  Rt.appendChild(jt),
  (Ht = it.createElement("input")).setAttribute("type", "radio"),
  Ht.setAttribute("checked", "checked"),
  Ht.setAttribute("name", "t"),
  jt.appendChild(Ht),
  ut.checkClone = jt.cloneNode(!0).cloneNode(!0).lastChild.checked,
  ut.noCloneEvent = !!jt.addEventListener,
  jt[dt.expando] = 1,
  ut.attributes = !jt.getAttribute(dt.expando);
  var Vt = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: ut.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  };
  Vt.optgroup = Vt.option,
  Vt.tbody = Vt.tfoot = Vt.colgroup = Vt.caption = Vt.thead,
  Vt.th = Vt.td;
  var Gt = /<|&#?\w+;/
    , Jt = /<tbody/i;
  !function() {
    var t, e, i = it.createElement("div");
    for (t in {
      submit: !0,
      change: !0,
      focusin: !0
    })
      e = "on" + t,
      (ut[t] = e in S) || (i.setAttribute(e, "t"),
      ut[t] = !1 === i.attributes[e].expando);
    i = null
  }();
  var Kt = /^(?:input|select|textarea)$/i
    , Qt = /^key/
    , Zt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
    , te = /^(?:focusinfocus|focusoutblur)$/
    , ee = /^([^.]*)(?:\.(.+)|)/;
  dt.event = {
    global: {},
    add: function(t, e, i, n, r) {
      var o, s, a, l, c, u, h, d, p, f, g, m = dt._data(t);
      if (m) {
        for (i.handler && (i = (l = i).handler,
        r = l.selector),
        i.guid || (i.guid = dt.guid++),
        (s = m.events) || (s = m.events = {}),
        (u = m.handle) || ((u = m.handle = function(t) {
          return void 0 === dt || t && dt.event.triggered === t.type ? void 0 : dt.event.dispatch.apply(u.elem, arguments)
        }
        ).elem = t),
        a = (e = (e || "").match(At) || [""]).length; a--; )
          p = g = (o = ee.exec(e[a]) || [])[1],
          f = (o[2] || "").split(".").sort(),
          p && (c = dt.event.special[p] || {},
          p = (r ? c.delegateType : c.bindType) || p,
          c = dt.event.special[p] || {},
          h = dt.extend({
            type: p,
            origType: g,
            data: n,
            handler: i,
            guid: i.guid,
            selector: r,
            needsContext: r && dt.expr.match.needsContext.test(r),
            namespace: f.join(".")
          }, l),
          (d = s[p]) || ((d = s[p] = []).delegateCount = 0,
          c.setup && !1 !== c.setup.call(t, n, f, u) || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))),
          c.add && (c.add.call(t, h),
          h.handler.guid || (h.handler.guid = i.guid)),
          r ? d.splice(d.delegateCount++, 0, h) : d.push(h),
          dt.event.global[p] = !0);
        t = null
      }
    },
    remove: function(t, e, i, n, r) {
      var o, s, a, l, c, u, h, d, p, f, g, m = dt.hasData(t) && dt._data(t);
      if (m && (u = m.events)) {
        for (c = (e = (e || "").match(At) || [""]).length; c--; )
          if (p = g = (a = ee.exec(e[c]) || [])[1],
          f = (a[2] || "").split(".").sort(),
          p) {
            for (h = dt.event.special[p] || {},
            d = u[p = (n ? h.delegateType : h.bindType) || p] || [],
            a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
            l = o = d.length; o--; )
              s = d[o],
              !r && g !== s.origType || i && i.guid !== s.guid || a && !a.test(s.namespace) || n && n !== s.selector && ("**" !== n || !s.selector) || (d.splice(o, 1),
              s.selector && d.delegateCount--,
              h.remove && h.remove.call(t, s));
            l && !d.length && (h.teardown && !1 !== h.teardown.call(t, f, m.handle) || dt.removeEvent(t, p, m.handle),
            delete u[p])
          } else
            for (p in u)
              dt.event.remove(t, p + e[c], i, n, !0);
        dt.isEmptyObject(u) && (delete m.handle,
        dt._removeData(t, "events"))
      }
    },
    trigger: function(t, e, i, n) {
      var r, o, s, a, l, c, u, h = [i || it], d = ct.call(t, "type") ? t.type : t, p = ct.call(t, "namespace") ? t.namespace.split(".") : [];
      if (s = c = i = i || it,
      3 !== i.nodeType && 8 !== i.nodeType && !te.test(d + dt.event.triggered) && (-1 < d.indexOf(".") && (d = (p = d.split(".")).shift(),
      p.sort()),
      o = d.indexOf(":") < 0 && "on" + d,
      (t = t[dt.expando] ? t : new dt.Event(d,"object" == typeof t && t)).isTrigger = n ? 2 : 3,
      t.namespace = p.join("."),
      t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
      t.result = void 0,
      t.target || (t.target = i),
      e = null == e ? [t] : dt.makeArray(e, [t]),
      l = dt.event.special[d] || {},
      n || !l.trigger || !1 !== l.trigger.apply(i, e))) {
        if (!n && !l.noBubble && !dt.isWindow(i)) {
          for (a = l.delegateType || d,
          te.test(a + d) || (s = s.parentNode); s; s = s.parentNode)
            h.push(s),
            c = s;
          c === (i.ownerDocument || it) && h.push(c.defaultView || c.parentWindow || S)
        }
        for (u = 0; (s = h[u++]) && !t.isPropagationStopped(); )
          t.type = 1 < u ? a : l.bindType || d,
          (r = (dt._data(s, "events") || {})[t.type] && dt._data(s, "handle")) && r.apply(s, e),
          (r = o && s[o]) && r.apply && Nt(s) && (t.result = r.apply(s, e),
          !1 === t.result && t.preventDefault());
        if (t.type = d,
        !n && !t.isDefaultPrevented() && (!l._default || !1 === l._default.apply(h.pop(), e)) && Nt(i) && o && i[d] && !dt.isWindow(i)) {
          (c = i[o]) && (i[o] = null),
          dt.event.triggered = d;
          try {
            i[d]()
          } catch (f) {}
          dt.event.triggered = void 0,
          c && (i[o] = c)
        }
        return t.result
      }
    },
    dispatch: function(t) {
      t = dt.event.fix(t);
      var e, i, n, r, o, s = [], a = nt.call(arguments), l = (dt._data(this, "events") || {})[t.type] || [], c = dt.event.special[t.type] || {};
      if ((a[0] = t).delegateTarget = this,
      !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        for (s = dt.event.handlers.call(this, t, l),
        e = 0; (r = s[e++]) && !t.isPropagationStopped(); )
          for (t.currentTarget = r.elem,
          i = 0; (o = r.handlers[i++]) && !t.isImmediatePropagationStopped(); )
            t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o,
            t.data = o.data,
            void 0 !== (n = ((dt.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (t.result = n) && (t.preventDefault(),
            t.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, t),
        t.result
      }
    },
    handlers: function(t, e) {
      var i, n, r, o, s = [], a = e.delegateCount, l = t.target;
      if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
        for (; l != this; l = l.parentNode || this)
          if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
            for (n = [],
            i = 0; i < a; i++)
              void 0 === n[r = (o = e[i]).selector + " "] && (n[r] = o.needsContext ? -1 < dt(r, this).index(l) : dt.find(r, this, null, [l]).length),
              n[r] && n.push(o);
            n.length && s.push({
              elem: l,
              handlers: n
            })
          }
      return a < e.length && s.push({
        elem: this,
        handlers: e.slice(a)
      }),
      s
    },
    fix: function(t) {
      if (t[dt.expando])
        return t;
      var e, i, n, r = t.type, o = t, s = this.fixHooks[r];
      for (s || (this.fixHooks[r] = s = Zt.test(r) ? this.mouseHooks : Qt.test(r) ? this.keyHooks : {}),
      n = s.props ? this.props.concat(s.props) : this.props,
      t = new dt.Event(o),
      e = n.length; e--; )
        t[i = n[e]] = o[i];
      return t.target || (t.target = o.srcElement || it),
      3 === t.target.nodeType && (t.target = t.target.parentNode),
      t.metaKey = !!t.metaKey,
      s.filter ? s.filter(t, o) : t
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(t, e) {
        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
        t
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(t, e) {
        var i, n, r, o = e.button, s = e.fromElement;
        return null == t.pageX && null != e.clientX && (r = (n = t.target.ownerDocument || it).documentElement,
        i = n.body,
        t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
        t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
        !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s),
        t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
        t
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== t() && this.focus)
            try {
              return this.focus(),
              !1
            } catch (S) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === t() && this.blur ? (this.blur(),
          !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return dt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
          !1) : void 0
        },
        _default: function(t) {
          return dt.nodeName(t.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(t) {
          void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
        }
      }
    },
    simulate: function(t, e, i) {
      var n = dt.extend(new dt.Event, i, {
        type: t,
        isSimulated: !0
      });
      dt.event.trigger(n, null, e),
      n.isDefaultPrevented() && i.preventDefault()
    }
  },
  dt.removeEvent = it.removeEventListener ? function(t, e, i) {
    t.removeEventListener && t.removeEventListener(e, i)
  }
  : function(t, e, i) {
    var n = "on" + e;
    t.detachEvent && ("undefined" == typeof t[n] && (t[n] = null),
    t.detachEvent(n, i))
  }
  ,
  dt.Event = function(t, e) {
    return this instanceof dt.Event ? (t && t.type ? (this.originalEvent = t,
    this.type = t.type,
    this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? d : p) : this.type = t,
    e && dt.extend(this, e),
    this.timeStamp = t && t.timeStamp || dt.now(),
    void (this[dt.expando] = !0)) : new dt.Event(t,e)
  }
  ,
  dt.Event.prototype = {
    constructor: dt.Event,
    isDefaultPrevented: p,
    isPropagationStopped: p,
    isImmediatePropagationStopped: p,
    preventDefault: function() {
      var t = this.originalEvent;
      this.isDefaultPrevented = d,
      t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
    },
    stopPropagation: function() {
      var t = this.originalEvent;
      this.isPropagationStopped = d,
      t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(),
      t.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
      var t = this.originalEvent;
      this.isImmediatePropagationStopped = d,
      t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
      this.stopPropagation()
    }
  },
  dt.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(t, o) {
    dt.event.special[t] = {
      delegateType: o,
      bindType: o,
      handle: function(t) {
        var e, i = this, n = t.relatedTarget, r = t.handleObj;
        return n && (n === i || dt.contains(i, n)) || (t.type = r.origType,
        e = r.handler.apply(this, arguments),
        t.type = o),
        e
      }
    }
  }),
  ut.submit || (dt.event.special.submit = {
    setup: function() {
      return !dt.nodeName(this, "form") && void dt.event.add(this, "click._submit keypress._submit", function(t) {
        var e = t.target
          , i = dt.nodeName(e, "input") || dt.nodeName(e, "button") ? dt.prop(e, "form") : void 0;
        i && !dt._data(i, "submit") && (dt.event.add(i, "submit._submit", function(t) {
          t._submitBubble = !0
        }),
        dt._data(i, "submit", !0))
      })
    },
    postDispatch: function(t) {
      t._submitBubble && (delete t._submitBubble,
      this.parentNode && !t.isTrigger && dt.event.simulate("submit", this.parentNode, t))
    },
    teardown: function() {
      return !dt.nodeName(this, "form") && void dt.event.remove(this, "._submit")
    }
  }),
  ut.change || (dt.event.special.change = {
    setup: function() {
      return Kt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (dt.event.add(this, "propertychange._change", function(t) {
        "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
      }),
      dt.event.add(this, "click._change", function(t) {
        this._justChanged && !t.isTrigger && (this._justChanged = !1),
        dt.event.simulate("change", this, t)
      })),
      !1) : void dt.event.add(this, "beforeactivate._change", function(t) {
        var e = t.target;
        Kt.test(e.nodeName) && !dt._data(e, "change") && (dt.event.add(e, "change._change", function(t) {
          !this.parentNode || t.isSimulated || t.isTrigger || dt.event.simulate("change", this.parentNode, t)
        }),
        dt._data(e, "change", !0))
      })
    },
    handle: function(t) {
      var e = t.target;
      return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
    },
    teardown: function() {
      return dt.event.remove(this, "._change"),
      !Kt.test(this.nodeName)
    }
  }),
  ut.focusin || dt.each({
    focus: "focusin",
    blur: "focusout"
  }, function(i, n) {
    var r = function(t) {
      dt.event.simulate(n, t.target, dt.event.fix(t))
    };
    dt.event.special[n] = {
      setup: function() {
        var t = this.ownerDocument || this
          , e = dt._data(t, n);
        e || t.addEventListener(i, r, !0),
        dt._data(t, n, (e || 0) + 1)
      },
      teardown: function() {
        var t = this.ownerDocument || this
          , e = dt._data(t, n) - 1;
        e ? dt._data(t, n, e) : (t.removeEventListener(i, r, !0),
        dt._removeData(t, n))
      }
    }
  }),
  dt.fn.extend({
    on: function(t, e, i, n) {
      return b(this, t, e, i, n)
    },
    one: function(t, e, i, n) {
      return b(this, t, e, i, n, 1)
    },
    off: function(t, e, i) {
      var n, r;
      if (t && t.preventDefault && t.handleObj)
        return n = t.handleObj,
        dt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
        this;
      if ("object" == typeof t) {
        for (r in t)
          this.off(r, e, t[r]);
        return this
      }
      return !1 !== e && "function" != typeof e || (i = e,
      e = void 0),
      !1 === i && (i = p),
      this.each(function() {
        dt.event.remove(this, t, i, e)
      })
    },
    trigger: function(t, e) {
      return this.each(function() {
        dt.event.trigger(t, e, this)
      })
    },
    triggerHandler: function(t, e) {
      var i = this[0];
      return i ? dt.event.trigger(t, e, i, !0) : void 0
    }
  });
  var ie = / jQuery\d+="(?:null|\d+)"/g
    , ne = new RegExp("<(?:" + Ut + ")[\\s/>]","i")
    , re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
    , oe = /<script|<style|<link/i
    , se = /checked\s*(?:[^=]|=\s*.checked.)/i
    , ae = /^true\/(.*)/
    , le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
    , ce = m(it).appendChild(it.createElement("div"));
  dt.extend({
    htmlPrefilter: function(t) {
      return t.replace(re, "<$1></$2>")
    },
    clone: function(t, e, i) {
      var n, r, o, s, a, l = dt.contains(t.ownerDocument, t);
      if (ut.html5Clone || dt.isXMLDoc(t) || !ne.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (ce.innerHTML = t.outerHTML,
      ce.removeChild(o = ce.firstChild)),
      !(ut.noCloneEvent && ut.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || dt.isXMLDoc(t)))
        for (n = St(o),
        a = St(t),
        s = 0; null != (r = a[s]); ++s)
          n[s] && k(r, n[s]);
      if (e)
        if (i)
          for (a = a || St(t),
          n = n || St(o),
          s = 0; null != (r = a[s]); s++)
            T(r, n[s]);
        else
          T(t, o);
      return 0 < (n = St(o, "script")).length && v(n, !l && St(t, "script")),
      n = a = r = null,
      o
    },
    cleanData: function(t, e) {
      for (var i, n, r, o, s = 0, a = dt.expando, l = dt.cache, c = ut.attributes, u = dt.event.special; null != (i = t[s]); s++)
        if ((e || Nt(i)) && (o = (r = i[a]) && l[r])) {
          if (o.events)
            for (n in o.events)
              u[n] ? dt.event.remove(i, n) : dt.removeEvent(i, n, o.handle);
          l[r] && (delete l[r],
          c || "undefined" == typeof i.removeAttribute ? i[a] = void 0 : i.removeAttribute(a),
          et.push(r))
        }
    }
  }),
  dt.fn.extend({
    domManip: M,
    detach: function(t) {
      return E(this, t, !0)
    },
    remove: function(t) {
      return E(this, t)
    },
    text: function(t) {
      return Yt(this, function(t) {
        return void 0 === t ? dt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || it).createTextNode(t))
      }, null, t, arguments.length)
    },
    append: function() {
      return M(this, arguments, function(t) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || _(this, t).appendChild(t)
      })
    },
    prepend: function() {
      return M(this, arguments, function(t) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var e = _(this, t);
          e.insertBefore(t, e.firstChild)
        }
      })
    },
    before: function() {
      return M(this, arguments, function(t) {
        this.parentNode && this.parentNode.insertBefore(t, this)
      })
    },
    after: function() {
      return M(this, arguments, function(t) {
        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
      })
    },
    empty: function() {
      for (var t, e = 0; null != (t = this[e]); e++) {
        for (1 === t.nodeType && dt.cleanData(St(t, !1)); t.firstChild; )
          t.removeChild(t.firstChild);
        t.options && dt.nodeName(t, "select") && (t.options.length = 0)
      }
      return this
    },
    clone: function(t, e) {
      return t = null != t && t,
      e = null == e ? t : e,
      this.map(function() {
        return dt.clone(this, t, e)
      })
    },
    html: function(t) {
      return Yt(this, function(t) {
        var e = this[0] || {}
          , i = 0
          , n = this.length;
        if (void 0 === t)
          return 1 === e.nodeType ? e.innerHTML.replace(ie, "") : void 0;
        if ("string" == typeof t && !oe.test(t) && (ut.htmlSerialize || !ne.test(t)) && (ut.leadingWhitespace || !qt.test(t)) && !Vt[(Ft.exec(t) || ["", ""])[1].toLowerCase()]) {
          t = dt.htmlPrefilter(t);
          try {
            for (; i < n; i++)
              1 === (e = this[i] || {}).nodeType && (dt.cleanData(St(e, !1)),
              e.innerHTML = t);
            e = 0
          } catch (nt) {}
        }
        e && this.empty().append(t)
      }, null, t, arguments.length)
    },
    replaceWith: function() {
      var i = [];
      return M(this, arguments, function(t) {
        var e = this.parentNode;
        dt.inArray(this, i) < 0 && (dt.cleanData(St(this)),
        e && e.replaceChild(t, this))
      }, i)
    }
  }),
  dt.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(t, s) {
    dt.fn[t] = function(t) {
      for (var e, i = 0, n = [], r = dt(t), o = r.length - 1; i <= o; i++)
        e = i === o ? this : this.clone(!0),
        dt(r[i])[s](e),
        ot.apply(n, e.get());
      return this.pushStack(n)
    }
  });
  var ue, he = {
    HTML: "block",
    BODY: "block"
  }, de = /^margin/, pe = new RegExp("^(" + Ot + ")(?!px)[a-z%]+$","i"), fe = function(t, e, i, n) {
    var r, o, s = {};
    for (o in e)
      s[o] = t.style[o],
      t.style[o] = e[o];
    for (o in r = i.apply(t, n || []),
    e)
      t.style[o] = s[o];
    return r
  }, ge = it.documentElement;
  !function() {
    function t() {
      var t, e, i = it.documentElement;
      i.appendChild(c),
      u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
      n = o = l = !1,
      r = a = !0,
      S.getComputedStyle && (e = S.getComputedStyle(u),
      n = "1%" !== (e || {}).top,
      l = "2px" === (e || {}).marginLeft,
      o = "4px" === (e || {
        width: "4px"
      }).width,
      u.style.marginRight = "50%",
      r = "4px" === (e || {
        marginRight: "4px"
      }).marginRight,
      (t = u.appendChild(it.createElement("div"))).style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
      t.style.marginRight = t.style.width = "0",
      u.style.width = "1px",
      a = !parseFloat((S.getComputedStyle(t) || {}).marginRight),
      u.removeChild(t)),
      u.style.display = "none",
      (s = 0 === u.getClientRects().length) && (u.style.display = "",
      u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
      u.childNodes[0].style.borderCollapse = "separate",
      (t = u.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none",
      (s = 0 === t[0].offsetHeight) && (t[0].style.display = "",
      t[1].style.display = "none",
      s = 0 === t[0].offsetHeight)),
      i.removeChild(c)
    }
    var n, r, o, s, a, l, c = it.createElement("div"), u = it.createElement("div");
    u.style && (u.style.cssText = "float:left;opacity:.5",
    ut.opacity = "0.5" === u.style.opacity,
    ut.cssFloat = !!u.style.cssFloat,
    u.style.backgroundClip = "content-box",
    u.cloneNode(!0).style.backgroundClip = "",
    ut.clearCloneStyle = "content-box" === u.style.backgroundClip,
    (c = it.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
    u.innerHTML = "",
    c.appendChild(u),
    ut.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing,
    dt.extend(ut, {
      reliableHiddenOffsets: function() {
        return null == n && t(),
        s
      },
      boxSizingReliable: function() {
        return null == n && t(),
        o
      },
      pixelMarginRight: function() {
        return null == n && t(),
        r
      },
      pixelPosition: function() {
        return null == n && t(),
        n
      },
      reliableMarginRight: function() {
        return null == n && t(),
        a
      },
      reliableMarginLeft: function() {
        return null == n && t(),
        l
      }
    }))
  }();
  var me, ve, ye = /^(top|right|bottom|left)$/;
  S.getComputedStyle ? (me = function(t) {
    var e = t.ownerDocument.defaultView;
    return e && e.opener || (e = S),
    e.getComputedStyle(t)
  }
  ,
  ve = function(t, e, i) {
    var n, r, o, s, a = t.style;
    return "" !== (s = (i = i || me(t)) ? i.getPropertyValue(e) || i[e] : void 0) && void 0 !== s || dt.contains(t.ownerDocument, t) || (s = dt.style(t, e)),
    i && !ut.pixelMarginRight() && pe.test(s) && de.test(e) && (n = a.width,
    r = a.minWidth,
    o = a.maxWidth,
    a.minWidth = a.maxWidth = a.width = s,
    s = i.width,
    a.width = n,
    a.minWidth = r,
    a.maxWidth = o),
    void 0 === s ? s : s + ""
  }
  ) : ge.currentStyle && (me = function(t) {
    return t.currentStyle
  }
  ,
  ve = function(t, e, i) {
    var n, r, o, s, a = t.style;
    return null == (s = (i = i || me(t)) ? i[e] : void 0) && a && a[e] && (s = a[e]),
    pe.test(s) && !ye.test(e) && (n = a.left,
    (o = (r = t.runtimeStyle) && r.left) && (r.left = t.currentStyle.left),
    a.left = "fontSize" === e ? "1em" : s,
    s = a.pixelLeft + "px",
    a.left = n,
    o && (r.left = o)),
    void 0 === s ? s : s + "" || "auto"
  }
  );
  var be = /alpha\([^)]*\)/i
    , _e = /opacity\s*=\s*([^)]*)/i
    , xe = /^(none|table(?!-c[ea]).+)/
    , we = new RegExp("^(" + Ot + ")(.*)$","i")
    , Se = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  }
    , Te = {
    letterSpacing: "0",
    fontWeight: "400"
  }
    , ke = ["Webkit", "O", "Moz", "ms"]
    , Me = it.createElement("div").style;
  dt.extend({
    cssHooks: {
      opacity: {
        get: function(t, e) {
          if (e) {
            var i = ve(t, "opacity");
            return "" === i ? "1" : i
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": ut.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(t, e, i, n) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var r, o, s, a = dt.camelCase(e), l = t.style;
        if (e = dt.cssProps[a] || (dt.cssProps[a] = P(a) || a),
        s = dt.cssHooks[e] || dt.cssHooks[a],
        void 0 === i)
          return s && "get"in s && void 0 !== (r = s.get(t, !1, n)) ? r : l[e];
        if ("string" === (o = typeof i) && (r = Wt.exec(i)) && r[1] && (i = h(t, e, r),
        o = "number"),
        null != i && i == i && ("number" === o && (i += r && r[3] || (dt.cssNumber[a] ? "" : "px")),
        ut.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"),
        !(s && "set"in s && void 0 === (i = s.set(t, i, n)))))
          try {
            l[e] = i
          } catch (lt) {}
      }
    },
    css: function(t, e, i, n) {
      var r, o, s, a = dt.camelCase(e);
      return e = dt.cssProps[a] || (dt.cssProps[a] = P(a) || a),
      (s = dt.cssHooks[e] || dt.cssHooks[a]) && "get"in s && (o = s.get(t, !0, i)),
      void 0 === o && (o = ve(t, e, n)),
      "normal" === o && e in Te && (o = Te[e]),
      "" === i || i ? (r = parseFloat(o),
      !0 === i || isFinite(r) ? r || 0 : o) : o
    }
  }),
  dt.each(["height", "width"], function(t, r) {
    dt.cssHooks[r] = {
      get: function(t, e, i) {
        return e ? xe.test(dt.css(t, "display")) && 0 === t.offsetWidth ? fe(t, Se, function() {
          return j(t, r, i)
        }) : j(t, r, i) : void 0
      },
      set: function(t, e, i) {
        var n = i && me(t);
        return L(t, e, i ? D(t, r, i, ut.boxSizing && "border-box" === dt.css(t, "boxSizing", !1, n), n) : 0)
      }
    }
  }),
  ut.opacity || (dt.cssHooks.opacity = {
    get: function(t, e) {
      return _e.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
    },
    set: function(t, e) {
      var i = t.style
        , n = t.currentStyle
        , r = dt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : ""
        , o = n && n.filter || i.filter || "";
      ((i.zoom = 1) <= e || "" === e) && "" === dt.trim(o.replace(be, "")) && i.removeAttribute && (i.removeAttribute("filter"),
      "" === e || n && !n.filter) || (i.filter = be.test(o) ? o.replace(be, r) : o + " " + r)
    }
  }),
  dt.cssHooks.marginRight = A(ut.reliableMarginRight, function(t, e) {
    return e ? fe(t, {
      display: "inline-block"
    }, ve, [t, "marginRight"]) : void 0
  }),
  dt.cssHooks.marginLeft = A(ut.reliableMarginLeft, function(t, e) {
    return e ? (parseFloat(ve(t, "marginLeft")) || (dt.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - fe(t, {
      marginLeft: 0
    }, function() {
      return t.getBoundingClientRect().left
    }) : 0)) + "px" : void 0
  }),
  dt.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(r, o) {
    dt.cssHooks[r + o] = {
      expand: function(t) {
        for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++)
          i[r + Xt[e] + o] = n[e] || n[e - 2] || n[0];
        return i
      }
    },
    de.test(r) || (dt.cssHooks[r + o].set = L)
  }),
  dt.fn.extend({
    css: function(t, e) {
      return Yt(this, function(t, e, i) {
        var n, r, o = {}, s = 0;
        if (dt.isArray(e)) {
          for (n = me(t),
          r = e.length; s < r; s++)
            o[e[s]] = dt.css(t, e[s], !1, n);
          return o
        }
        return void 0 !== i ? dt.style(t, e, i) : dt.css(t, e)
      }, t, e, 1 < arguments.length)
    },
    show: function() {
      return N(this, !0)
    },
    hide: function() {
      return N(this)
    },
    toggle: function(t) {
      return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
        It(this) ? dt(this).show() : dt(this).hide()
      })
    }
  }),
  (dt.Tween = R).prototype = {
    constructor: R,
    init: function(t, e, i, n, r, o) {
      this.elem = t,
      this.prop = i,
      this.easing = r || dt.easing._default,
      this.options = e,
      this.start = this.now = this.cur(),
      this.end = n,
      this.unit = o || (dt.cssNumber[i] ? "" : "px")
    },
    cur: function() {
      var t = R.propHooks[this.prop];
      return t && t.get ? t.get(this) : R.propHooks._default.get(this)
    },
    run: function(t) {
      var e, i = R.propHooks[this.prop];
      return this.options.duration ? this.pos = e = dt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
      this.now = (this.end - this.start) * e + this.start,
      this.options.step && this.options.step.call(this.elem, this.now, this),
      i && i.set ? i.set(this) : R.propHooks._default.set(this),
      this
    }
  },
  R.prototype.init.prototype = R.prototype,
  R.propHooks = {
    _default: {
      get: function(t) {
        var e;
        return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = dt.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
      },
      set: function(t) {
        dt.fx.step[t.prop] ? dt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[dt.cssProps[t.prop]] && !dt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : dt.style(t.elem, t.prop, t.now + t.unit)
      }
    }
  },
  R.propHooks.scrollTop = R.propHooks.scrollLeft = {
    set: function(t) {
      t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
    }
  },
  dt.easing = {
    linear: function(t) {
      return t
    },
    swing: function(t) {
      return .5 - Math.cos(t * Math.PI) / 2
    },
    _default: "swing"
  },
  dt.fx = R.prototype.init,
  dt.fx.step = {};
  var Ee, Be, Ce, Ae, Pe, Ne, Le, De = /^(?:toggle|show|hide)$/, je = /queueHooks$/;
  dt.Animation = dt.extend(Y, {
    tweeners: {
      "*": [function(t, e) {
        var i = this.createTween(t, e);
        return h(i.elem, t, Wt.exec(e), i),
        i
      }
      ]
    },
    tweener: function(t, e) {
      dt.isFunction(t) ? (e = t,
      t = ["*"]) : t = t.match(At);
      for (var i, n = 0, r = t.length; n < r; n++)
        i = t[n],
        Y.tweeners[i] = Y.tweeners[i] || [],
        Y.tweeners[i].unshift(e)
    },
    prefilters: [X],
    prefilter: function(t, e) {
      e ? Y.prefilters.unshift(t) : Y.prefilters.push(t)
    }
  }),
  dt.speed = function(t, e, i) {
    var n = t && "object" == typeof t ? dt.extend({}, t) : {
      complete: i || !i && e || dt.isFunction(t) && t,
      duration: t,
      easing: i && e || e && !dt.isFunction(e) && e
    };
    return n.duration = dt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in dt.fx.speeds ? dt.fx.speeds[n.duration] : dt.fx.speeds._default,
    null != n.queue && !0 !== n.queue || (n.queue = "fx"),
    n.old = n.complete,
    n.complete = function() {
      dt.isFunction(n.old) && n.old.call(this),
      n.queue && dt.dequeue(this, n.queue)
    }
    ,
    n
  }
  ,
  dt.fn.extend({
    fadeTo: function(t, e, i, n) {
      return this.filter(It).css("opacity", 0).show().end().animate({
        opacity: e
      }, t, i, n)
    },
    animate: function(e, t, i, n) {
      var r = dt.isEmptyObject(e)
        , o = dt.speed(t, i, n)
        , s = function() {
        var t = Y(this, dt.extend({}, e), o);
        (r || dt._data(this, "finish")) && t.stop(!0)
      };
      return s.finish = s,
      r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
    },
    stop: function(r, t, o) {
      var s = function(t) {
        var e = t.stop;
        delete t.stop,
        e(o)
      };
      return "string" != typeof r && (o = t,
      t = r,
      r = void 0),
      t && !1 !== r && this.queue(r || "fx", []),
      this.each(function() {
        var t = !0
          , e = null != r && r + "queueHooks"
          , i = dt.timers
          , n = dt._data(this);
        if (e)
          n[e] && n[e].stop && s(n[e]);
        else
          for (e in n)
            n[e] && n[e].stop && je.test(e) && s(n[e]);
        for (e = i.length; e--; )
          i[e].elem !== this || null != r && i[e].queue !== r || (i[e].anim.stop(o),
          t = !1,
          i.splice(e, 1));
        !t && o || dt.dequeue(this, r)
      })
    },
    finish: function(s) {
      return !1 !== s && (s = s || "fx"),
      this.each(function() {
        var t, e = dt._data(this), i = e[s + "queue"], n = e[s + "queueHooks"], r = dt.timers, o = i ? i.length : 0;
        for (e.finish = !0,
        dt.queue(this, s, []),
        n && n.stop && n.stop.call(this, !0),
        t = r.length; t--; )
          r[t].elem === this && r[t].queue === s && (r[t].anim.stop(!0),
          r.splice(t, 1));
        for (t = 0; t < o; t++)
          i[t] && i[t].finish && i[t].finish.call(this);
        delete e.finish
      })
    }
  }),
  dt.each(["toggle", "show", "hide"], function(t, n) {
    var r = dt.fn[n];
    dt.fn[n] = function(t, e, i) {
      return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(O(n, !0), t, e, i)
    }
  }),
  dt.each({
    slideDown: O("show"),
    slideUp: O("hide"),
    slideToggle: O("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function(t, n) {
    dt.fn[t] = function(t, e, i) {
      return this.animate(n, t, e, i)
    }
  }),
  dt.timers = [],
  dt.fx.tick = function() {
    var t, e = dt.timers, i = 0;
    for (Ee = dt.now(); i < e.length; i++)
      (t = e[i])() || e[i] !== t || e.splice(i--, 1);
    e.length || dt.fx.stop(),
    Ee = void 0
  }
  ,
  dt.fx.timer = function(t) {
    dt.timers.push(t),
    t() ? dt.fx.start() : dt.timers.pop()
  }
  ,
  dt.fx.interval = 13,
  dt.fx.start = function() {
    Be || (Be = S.setInterval(dt.fx.tick, dt.fx.interval))
  }
  ,
  dt.fx.stop = function() {
    S.clearInterval(Be),
    Be = null
  }
  ,
  dt.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  },
  dt.fn.delay = function(n, t) {
    return n = dt.fx && dt.fx.speeds[n] || n,
    t = t || "fx",
    this.queue(t, function(t, e) {
      var i = S.setTimeout(t, n);
      e.stop = function() {
        S.clearTimeout(i)
      }
    })
  }
  ,
  Ae = it.createElement("input"),
  Pe = it.createElement("div"),
  Ne = it.createElement("select"),
  Le = Ne.appendChild(it.createElement("option")),
  (Pe = it.createElement("div")).setAttribute("className", "t"),
  Pe.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
  Ce = Pe.getElementsByTagName("a")[0],
  Ae.setAttribute("type", "checkbox"),
  Pe.appendChild(Ae),
  (Ce = Pe.getElementsByTagName("a")[0]).style.cssText = "top:1px",
  ut.getSetAttribute = "t" !== Pe.className,
  ut.style = /top/.test(Ce.getAttribute("style")),
  ut.hrefNormalized = "/a" === Ce.getAttribute("href"),
  ut.checkOn = !!Ae.value,
  ut.optSelected = Le.selected,
  ut.enctype = !!it.createElement("form").enctype,
  Ne.disabled = !0,
  ut.optDisabled = !Le.disabled,
  (Ae = it.createElement("input")).setAttribute("value", ""),
  ut.input = "" === Ae.getAttribute("value"),
  Ae.value = "t",
  Ae.setAttribute("type", "radio"),
  ut.radioValue = "t" === Ae.value;
  var Re = /\r/g
    , He = /[\x20\t\r\n\f]+/g;
  dt.fn.extend({
    val: function(i) {
      var n, t, r, e = this[0];
      return arguments.length ? (r = dt.isFunction(i),
      this.each(function(t) {
        var e;
        1 === this.nodeType && (null == (e = r ? i.call(this, t, dt(this).val()) : i) ? e = "" : "number" == typeof e ? e += "" : dt.isArray(e) && (e = dt.map(e, function(t) {
          return null == t ? "" : t + ""
        })),
        (n = dt.valHooks[this.type] || dt.valHooks[this.nodeName.toLowerCase()]) && "set"in n && void 0 !== n.set(this, e, "value") || (this.value = e))
      })) : e ? (n = dt.valHooks[e.type] || dt.valHooks[e.nodeName.toLowerCase()]) && "get"in n && void 0 !== (t = n.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(Re, "") : null == t ? "" : t : void 0
    }
  }),
  dt.extend({
    valHooks: {
      option: {
        get: function(t) {
          var e = dt.find.attr(t, "value");
          return null != e ? e : dt.trim(dt.text(t)).replace(He, " ")
        }
      },
      select: {
        get: function(t) {
          for (var e, i, n = t.options, r = t.selectedIndex, o = "select-one" === t.type || r < 0, s = o ? null : [], a = o ? r + 1 : n.length, l = r < 0 ? a : o ? r : 0; l < a; l++)
            if (((i = n[l]).selected || l === r) && (ut.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !dt.nodeName(i.parentNode, "optgroup"))) {
              if (e = dt(i).val(),
              o)
                return e;
              s.push(e)
            }
          return s
        },
        set: function(t, e) {
          for (var i, n, r = t.options, o = dt.makeArray(e), s = r.length; s--; )
            if (n = r[s],
            -1 < dt.inArray(dt.valHooks.option.get(n), o))
              try {
                n.selected = i = !0
              } catch (st) {
                n.scrollHeight
              }
            else
              n.selected = !1;
          return i || (t.selectedIndex = -1),
          r
        }
      }
    }
  }),
  dt.each(["radio", "checkbox"], function() {
    dt.valHooks[this] = {
      set: function(t, e) {
        return dt.isArray(e) ? t.checked = -1 < dt.inArray(dt(t).val(), e) : void 0
      }
    },
    ut.checkOn || (dt.valHooks[this].get = function(t) {
      return null === t.getAttribute("value") ? "on" : t.value
    }
    )
  });
  var Oe, We, Xe = dt.expr.attrHandle, Ie = /^(?:checked|selected)$/i, Ye = ut.getSetAttribute, ze = ut.input;
  dt.fn.extend({
    attr: function(t, e) {
      return Yt(this, dt.attr, t, e, 1 < arguments.length)
    },
    removeAttr: function(t) {
      return this.each(function() {
        dt.removeAttr(this, t)
      })
    }
  }),
  dt.extend({
    attr: function(t, e, i) {
      var n, r, o = t.nodeType;
      if (3 !== o && 8 !== o && 2 !== o)
        return "undefined" == typeof t.getAttribute ? dt.prop(t, e, i) : (1 === o && dt.isXMLDoc(t) || (e = e.toLowerCase(),
        r = dt.attrHooks[e] || (dt.expr.match.bool.test(e) ? We : Oe)),
        void 0 !== i ? null === i ? void dt.removeAttr(t, e) : r && "set"in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""),
        i) : r && "get"in r && null !== (n = r.get(t, e)) ? n : null == (n = dt.find.attr(t, e)) ? void 0 : n)
    },
    attrHooks: {
      type: {
        set: function(t, e) {
          if (!ut.radioValue && "radio" === e && dt.nodeName(t, "input")) {
            var i = t.value;
            return t.setAttribute("type", e),
            i && (t.value = i),
            e
          }
        }
      }
    },
    removeAttr: function(t, e) {
      var i, n, r = 0, o = e && e.match(At);
      if (o && 1 === t.nodeType)
        for (; i = o[r++]; )
          n = dt.propFix[i] || i,
          dt.expr.match.bool.test(i) ? ze && Ye || !Ie.test(i) ? t[n] = !1 : t[dt.camelCase("default-" + i)] = t[n] = !1 : dt.attr(t, i, ""),
          t.removeAttribute(Ye ? i : n)
    }
  }),
  We = {
    set: function(t, e, i) {
      return !1 === e ? dt.removeAttr(t, i) : ze && Ye || !Ie.test(i) ? t.setAttribute(!Ye && dt.propFix[i] || i, i) : t[dt.camelCase("default-" + i)] = t[i] = !0,
      i
    }
  },
  dt.each(dt.expr.match.bool.source.match(/\w+/g), function(t, e) {
    var o = Xe[e] || dt.find.attr;
    ze && Ye || !Ie.test(e) ? Xe[e] = function(t, e, i) {
      var n, r;
      return i || (r = Xe[e],
      Xe[e] = n,
      n = null != o(t, e, i) ? e.toLowerCase() : null,
      Xe[e] = r),
      n
    }
    : Xe[e] = function(t, e, i) {
      return i ? void 0 : t[dt.camelCase("default-" + e)] ? e.toLowerCase() : null
    }
  }),
  ze && Ye || (dt.attrHooks.value = {
    set: function(t, e, i) {
      return dt.nodeName(t, "input") ? void (t.defaultValue = e) : Oe && Oe.set(t, e, i)
    }
  }),
  Ye || (Oe = {
    set: function(t, e, i) {
      var n = t.getAttributeNode(i);
      return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)),
      n.value = e += "",
      "value" === i || e === t.getAttribute(i) ? e : void 0
    }
  },
  Xe.id = Xe.name = Xe.coords = function(t, e, i) {
    var n;
    return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
  }
  ,
  dt.valHooks.button = {
    get: function(t, e) {
      var i = t.getAttributeNode(e);
      return i && i.specified ? i.value : void 0
    },
    set: Oe.set
  },
  dt.attrHooks.contenteditable = {
    set: function(t, e, i) {
      Oe.set(t, "" !== e && e, i)
    }
  },
  dt.each(["width", "height"], function(t, i) {
    dt.attrHooks[i] = {
      set: function(t, e) {
        return "" === e ? (t.setAttribute(i, "auto"),
        e) : void 0
      }
    }
  })),
  ut.style || (dt.attrHooks.style = {
    get: function(t) {
      return t.style.cssText || void 0
    },
    set: function(t, e) {
      return t.style.cssText = e + ""
    }
  });
  var Fe = /^(?:input|select|textarea|button|object)$/i
    , $e = /^(?:a|area)$/i;
  dt.fn.extend({
    prop: function(t, e) {
      return Yt(this, dt.prop, t, e, 1 < arguments.length)
    },
    removeProp: function(t) {
      return t = dt.propFix[t] || t,
      this.each(function() {
        try {
          this[t] = void 0,
          delete this[t]
        } catch (e) {}
      })
    }
  }),
  dt.extend({
    prop: function(t, e, i) {
      var n, r, o = t.nodeType;
      if (3 !== o && 8 !== o && 2 !== o)
        return 1 === o && dt.isXMLDoc(t) || (e = dt.propFix[e] || e,
        r = dt.propHooks[e]),
        void 0 !== i ? r && "set"in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get"in r && null !== (n = r.get(t, e)) ? n : t[e]
    },
    propHooks: {
      tabIndex: {
        get: function(t) {
          var e = dt.find.attr(t, "tabindex");
          return e ? parseInt(e, 10) : Fe.test(t.nodeName) || $e.test(t.nodeName) && t.href ? 0 : -1
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }),
  ut.hrefNormalized || dt.each(["href", "src"], function(t, e) {
    dt.propHooks[e] = {
      get: function(t) {
        return t.getAttribute(e, 4)
      }
    }
  }),
  ut.optSelected || (dt.propHooks.selected = {
    get: function(t) {
      var e = t.parentNode;
      return e && (e.selectedIndex,
      e.parentNode && e.parentNode.selectedIndex),
      null
    },
    set: function(t) {
      var e = t.parentNode;
      e && (e.selectedIndex,
      e.parentNode && e.parentNode.selectedIndex)
    }
  }),
  dt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    dt.propFix[this.toLowerCase()] = this
  }),
  ut.enctype || (dt.propFix.enctype = "encoding");
  var qe = /[\t\r\n\f]/g;
  dt.fn.extend({
    addClass: function(e) {
      var t, i, n, r, o, s, a, l = 0;
      if (dt.isFunction(e))
        return this.each(function(t) {
          dt(this).addClass(e.call(this, t, z(this)))
        });
      if ("string" == typeof e && e)
        for (t = e.match(At) || []; i = this[l++]; )
          if (r = z(i),
          n = 1 === i.nodeType && (" " + r + " ").replace(qe, " ")) {
            for (s = 0; o = t[s++]; )
              n.indexOf(" " + o + " ") < 0 && (n += o + " ");
            r !== (a = dt.trim(n)) && dt.attr(i, "class", a)
          }
      return this
    },
    removeClass: function(e) {
      var t, i, n, r, o, s, a, l = 0;
      if (dt.isFunction(e))
        return this.each(function(t) {
          dt(this).removeClass(e.call(this, t, z(this)))
        });
      if (!arguments.length)
        return this.attr("class", "");
      if ("string" == typeof e && e)
        for (t = e.match(At) || []; i = this[l++]; )
          if (r = z(i),
          n = 1 === i.nodeType && (" " + r + " ").replace(qe, " ")) {
            for (s = 0; o = t[s++]; )
              for (; -1 < n.indexOf(" " + o + " "); )
                n = n.replace(" " + o + " ", " ");
            r !== (a = dt.trim(n)) && dt.attr(i, "class", a)
          }
      return this
    },
    toggleClass: function(r, e) {
      var o = typeof r;
      return "boolean" == typeof e && "string" === o ? e ? this.addClass(r) : this.removeClass(r) : dt.isFunction(r) ? this.each(function(t) {
        dt(this).toggleClass(r.call(this, t, z(this), e), e)
      }) : this.each(function() {
        var t, e, i, n;
        if ("string" === o)
          for (e = 0,
          i = dt(this),
          n = r.match(At) || []; t = n[e++]; )
            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
        else
          void 0 !== r && "boolean" !== o || ((t = z(this)) && dt._data(this, "__className__", t),
          dt.attr(this, "class", t || !1 === r ? "" : dt._data(this, "__className__") || ""))
      })
    },
    hasClass: function(t) {
      var e, i, n = 0;
      for (e = " " + t + " "; i = this[n++]; )
        if (1 === i.nodeType && -1 < (" " + z(i) + " ").replace(qe, " ").indexOf(e))
          return !0;
      return !1
    }
  }),
  dt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, i) {
    dt.fn[i] = function(t, e) {
      return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
    }
  }),
  dt.fn.extend({
    hover: function(t, e) {
      return this.mouseenter(t).mouseleave(e || t)
    }
  });
  var Ue = S.location
    , Ve = dt.now()
    , Ge = /\?/
    , Je = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  dt.parseJSON = function(t) {
    if (S.JSON && S.JSON.parse)
      return S.JSON.parse(t + "");
    var r, o = null, e = dt.trim(t + "");
    return e && !dt.trim(e.replace(Je, function(t, e, i, n) {
      return r && e && (o = 0),
      0 === o ? t : (r = i || e,
      o += !n - !i,
      "")
    })) ? Function("return " + e)() : dt.error("Invalid JSON: " + t)
  }
  ,
  dt.parseXML = function(t) {
    var e;
    if (!t || "string" != typeof t)
      return null;
    try {
      S.DOMParser ? e = (new S.DOMParser).parseFromString(t, "text/xml") : ((e = new S.ActiveXObject("Microsoft.XMLDOM")).async = "false",
      e.loadXML(t))
    } catch (nt) {
      e = void 0
    }
    return e && e.documentElement && !e.getElementsByTagName("parsererror").length || dt.error("Invalid XML: " + t),
    e
  }
  ;
  var Ke = /#.*$/
    , Qe = /([?&])_=[^&]*/
    , Ze = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
    , ti = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
    , ei = /^(?:GET|HEAD)$/
    , ii = /^\/\//
    , ni = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
    , ri = {}
    , oi = {}
    , si = "*/".concat("*")
    , ai = Ue.href
    , li = ni.exec(ai.toLowerCase()) || [];
  dt.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ai,
      type: "GET",
      isLocal: ti.test(li[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": si,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": dt.parseJSON,
        "text xml": dt.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(t, e) {
      return e ? q(q(t, dt.ajaxSettings), e) : q(dt.ajaxSettings, t)
    },
    ajaxPrefilter: F(ri),
    ajaxTransport: F(oi),
    ajax: function(t, e) {
      function i(t, e, i, n) {
        var r, o, s, a, l, c = e;
        2 !== x && (x = 2,
        d && S.clearTimeout(d),
        f = void 0,
        h = n || "",
        w.readyState = 0 < t ? 4 : 0,
        r = 200 <= t && t < 300 || 304 === t,
        i && (a = U(g, w, i)),
        a = V(g, a, w, r),
        r ? (g.ifModified && ((l = w.getResponseHeader("Last-Modified")) && (dt.lastModified[u] = l),
        (l = w.getResponseHeader("etag")) && (dt.etag[u] = l)),
        204 === t || "HEAD" === g.type ? c = "nocontent" : 304 === t ? c = "notmodified" : (c = a.state,
        o = a.data,
        r = !(s = a.error))) : (s = c,
        !t && c || (c = "error",
        t < 0 && (t = 0))),
        w.status = t,
        w.statusText = (e || c) + "",
        r ? y.resolveWith(m, [o, c, w]) : y.rejectWith(m, [w, c, s]),
        w.statusCode(_),
        _ = void 0,
        p && v.trigger(r ? "ajaxSuccess" : "ajaxError", [w, g, r ? o : s]),
        b.fireWith(m, [w, c]),
        p && (v.trigger("ajaxComplete", [w, g]),
        --dt.active || dt.event.trigger("ajaxStop")))
      }
      "object" == typeof t && (e = t,
      t = void 0),
      e = e || {};
      var n, r, u, h, d, p, f, o, g = dt.ajaxSetup({}, e), m = g.context || g, v = g.context && (m.nodeType || m.jquery) ? dt(m) : dt.event, y = dt.Deferred(), b = dt.Callbacks("once memory"), _ = g.statusCode || {}, s = {}, a = {}, x = 0, l = "canceled", w = {
        readyState: 0,
        getResponseHeader: function(t) {
          var e;
          if (2 === x) {
            if (!o)
              for (o = {}; e = Ze.exec(h); )
                o[e[1].toLowerCase()] = e[2];
            e = o[t.toLowerCase()]
          }
          return null == e ? null : e
        },
        getAllResponseHeaders: function() {
          return 2 === x ? h : null
        },
        setRequestHeader: function(t, e) {
          var i = t.toLowerCase();
          return x || (t = a[i] = a[i] || t,
          s[t] = e),
          this
        },
        overrideMimeType: function(t) {
          return x || (g.mimeType = t),
          this
        },
        statusCode: function(t) {
          var e;
          if (t)
            if (x < 2)
              for (e in t)
                _[e] = [_[e], t[e]];
            else
              w.always(t[w.status]);
          return this
        },
        abort: function(t) {
          var e = t || l;
          return f && f.abort(e),
          i(0, e),
          this
        }
      };
      if (y.promise(w).complete = b.add,
      w.success = w.done,
      w.error = w.fail,
      g.url = ((t || g.url || ai) + "").replace(Ke, "").replace(ii, li[1] + "//"),
      g.type = e.method || e.type || g.method || g.type,
      g.dataTypes = dt.trim(g.dataType || "*").toLowerCase().match(At) || [""],
      null == g.crossDomain && (n = ni.exec(g.url.toLowerCase()),
      g.crossDomain = !(!n || n[1] === li[1] && n[2] === li[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (li[3] || ("http:" === li[1] ? "80" : "443")))),
      g.data && g.processData && "string" != typeof g.data && (g.data = dt.param(g.data, g.traditional)),
      $(ri, g, e, w),
      2 === x)
        return w;
      for (r in (p = dt.event && g.global) && 0 == dt.active++ && dt.event.trigger("ajaxStart"),
      g.type = g.type.toUpperCase(),
      g.hasContent = !ei.test(g.type),
      u = g.url,
      g.hasContent || (g.data && (u = g.url += (Ge.test(u) ? "&" : "?") + g.data,
      delete g.data),
      !1 === g.cache && (g.url = Qe.test(u) ? u.replace(Qe, "$1_=" + Ve++) : u + (Ge.test(u) ? "&" : "?") + "_=" + Ve++)),
      g.ifModified && (dt.lastModified[u] && w.setRequestHeader("If-Modified-Since", dt.lastModified[u]),
      dt.etag[u] && w.setRequestHeader("If-None-Match", dt.etag[u])),
      (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && w.setRequestHeader("Content-Type", g.contentType),
      w.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + si + "; q=0.01" : "") : g.accepts["*"]),
      g.headers)
        w.setRequestHeader(r, g.headers[r]);
      if (g.beforeSend && (!1 === g.beforeSend.call(m, w, g) || 2 === x))
        return w.abort();
      for (r in l = "abort",
      {
        success: 1,
        error: 1,
        complete: 1
      })
        w[r](g[r]);
      if (f = $(oi, g, e, w)) {
        if (w.readyState = 1,
        p && v.trigger("ajaxSend", [w, g]),
        2 === x)
          return w;
        g.async && 0 < g.timeout && (d = S.setTimeout(function() {
          w.abort("timeout")
        }, g.timeout));
        try {
          x = 1,
          f.send(s, i)
        } catch (xt) {
          if (!(x < 2))
            throw xt;
          i(-1, xt)
        }
      } else
        i(-1, "No Transport");
      return w
    },
    getJSON: function(t, e, i) {
      return dt.get(t, e, i, "json")
    },
    getScript: function(t, e) {
      return dt.get(t, void 0, e, "script")
    }
  }),
  dt.each(["get", "post"], function(t, r) {
    dt[r] = function(t, e, i, n) {
      return dt.isFunction(e) && (n = n || i,
      i = e,
      e = void 0),
      dt.ajax(dt.extend({
        url: t,
        type: r,
        dataType: n,
        data: e,
        success: i
      }, dt.isPlainObject(t) && t))
    }
  }),
  dt._evalUrl = function(t) {
    return dt.ajax({
      url: t,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    })
  }
  ,
  dt.fn.extend({
    wrapAll: function(e) {
      if (dt.isFunction(e))
        return this.each(function(t) {
          dt(this).wrapAll(e.call(this, t))
        });
      if (this[0]) {
        var t = dt(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]),
        t.map(function() {
          for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
            t = t.firstChild;
          return t
        }).append(this)
      }
      return this
    },
    wrapInner: function(i) {
      return dt.isFunction(i) ? this.each(function(t) {
        dt(this).wrapInner(i.call(this, t))
      }) : this.each(function() {
        var t = dt(this)
          , e = t.contents();
        e.length ? e.wrapAll(i) : t.append(i)
      })
    },
    wrap: function(e) {
      var i = dt.isFunction(e);
      return this.each(function(t) {
        dt(this).wrapAll(i ? e.call(this, t) : e)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        dt.nodeName(this, "body") || dt(this).replaceWith(this.childNodes)
      }).end()
    }
  }),
  dt.expr.filters.hidden = function(t) {
    return ut.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : J(t)
  }
  ,
  dt.expr.filters.visible = function(t) {
    return !dt.expr.filters.hidden(t)
  }
  ;
  var ci = /%20/g
    , ui = /\[\]$/
    , hi = /\r?\n/g
    , di = /^(?:submit|button|image|reset|file)$/i
    , pi = /^(?:input|select|textarea|keygen)/i;
  dt.param = function(t, e) {
    var i, n = [], r = function(t, e) {
      e = dt.isFunction(e) ? e() : null == e ? "" : e,
      n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
    };
    if (void 0 === e && (e = dt.ajaxSettings && dt.ajaxSettings.traditional),
    dt.isArray(t) || t.jquery && !dt.isPlainObject(t))
      dt.each(t, function() {
        r(this.name, this.value)
      });
    else
      for (i in t)
        K(i, t[i], e, r);
    return n.join("&").replace(ci, "+")
  }
  ,
  dt.fn.extend({
    serialize: function() {
      return dt.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var t = dt.prop(this, "elements");
        return t ? dt.makeArray(t) : this
      }).filter(function() {
        var t = this.type;
        return this.name && !dt(this).is(":disabled") && pi.test(this.nodeName) && !di.test(t) && (this.checked || !zt.test(t))
      }).map(function(t, e) {
        var i = dt(this).val();
        return null == i ? null : dt.isArray(i) ? dt.map(i, function(t) {
          return {
            name: e.name,
            value: t.replace(hi, "\r\n")
          }
        }) : {
          name: e.name,
          value: i.replace(hi, "\r\n")
        }
      }).get()
    }
  }),
  dt.ajaxSettings.xhr = void 0 !== S.ActiveXObject ? function() {
    return this.isLocal ? Z() : 8 < it.documentMode ? Q() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Q() || Z()
  }
  : Q;
  var fi = 0
    , gi = {}
    , mi = dt.ajaxSettings.xhr();
  S.attachEvent && S.attachEvent("onunload", function() {
    for (var t in gi)
      gi[t](void 0, !0)
  }),
  ut.cors = !!mi && "withCredentials"in mi,
  (mi = ut.ajax = !!mi) && dt.ajaxTransport(function(l) {
    var c;
    if (!l.crossDomain || ut.cors)
      return {
        send: function(t, o) {
          var e, s = l.xhr(), a = ++fi;
          if (s.open(l.type, l.url, l.async, l.username, l.password),
          l.xhrFields)
            for (e in l.xhrFields)
              s[e] = l.xhrFields[e];
          for (e in l.mimeType && s.overrideMimeType && s.overrideMimeType(l.mimeType),
          l.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"),
          t)
            void 0 !== t[e] && s.setRequestHeader(e, t[e] + "");
          s.send(l.hasContent && l.data || null),
          c = function(t, e) {
            var i, n, r;
            if (c && (e || 4 === s.readyState))
              if (delete gi[a],
              c = void 0,
              s.onreadystatechange = dt.noop,
              e)
                4 !== s.readyState && s.abort();
              else {
                r = {},
                i = s.status,
                "string" == typeof s.responseText && (r.text = s.responseText);
                try {
                  n = s.statusText
                } catch (ct) {
                  n = ""
                }
                i || !l.isLocal || l.crossDomain ? 1223 === i && (i = 204) : i = r.text ? 200 : 404
              }
            r && o(i, n, r, s.getAllResponseHeaders())
          }
          ,
          l.async ? 4 === s.readyState ? S.setTimeout(c) : s.onreadystatechange = gi[a] = c : c()
        },
        abort: function() {
          c && c(void 0, !0)
        }
      }
  }),
  dt.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(t) {
        return dt.globalEval(t),
        t
      }
    }
  }),
  dt.ajaxPrefilter("script", function(t) {
    void 0 === t.cache && (t.cache = !1),
    t.crossDomain && (t.type = "GET",
    t.global = !1)
  }),
  dt.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var n, r = it.head || dt("head")[0] || it.documentElement;
      return {
        send: function(t, i) {
          (n = it.createElement("script")).async = !0,
          e.scriptCharset && (n.charset = e.scriptCharset),
          n.src = e.url,
          n.onload = n.onreadystatechange = function(t, e) {
            (e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null,
            n.parentNode && n.parentNode.removeChild(n),
            n = null,
            e || i(200, "success"))
          }
          ,
          r.insertBefore(n, r.firstChild)
        },
        abort: function() {
          n && n.onload(void 0, !0)
        }
      }
    }
  });
  var vi = []
    , yi = /(=)\?(?=&|$)|\?\?/;
  dt.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var t = vi.pop() || dt.expando + "_" + Ve++;
      return this[t] = !0,
      t
    }
  }),
  dt.ajaxPrefilter("json jsonp", function(t, e, i) {
    var n, r, o, s = !1 !== t.jsonp && (yi.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && yi.test(t.data) && "data");
    return s || "jsonp" === t.dataTypes[0] ? (n = t.jsonpCallback = dt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
    s ? t[s] = t[s].replace(yi, "$1" + n) : !1 !== t.jsonp && (t.url += (Ge.test(t.url) ? "&" : "?") + t.jsonp + "=" + n),
    t.converters["script json"] = function() {
      return o || dt.error(n + " was not called"),
      o[0]
    }
    ,
    t.dataTypes[0] = "json",
    r = S[n],
    S[n] = function() {
      o = arguments
    }
    ,
    i.always(function() {
      void 0 === r ? dt(S).removeProp(n) : S[n] = r,
      t[n] && (t.jsonpCallback = e.jsonpCallback,
      vi.push(n)),
      o && dt.isFunction(r) && r(o[0]),
      o = r = void 0
    }),
    "script") : void 0
  }),
  dt.parseHTML = function(t, e, i) {
    if (!t || "string" != typeof t)
      return null;
    "boolean" == typeof e && (i = e,
    e = !1),
    e = e || it;
    var n = xt.exec(t)
      , r = !i && [];
    return n ? [e.createElement(n[1])] : (n = g([t], e, r),
    r && r.length && dt(r).remove(),
    dt.merge([], n.childNodes))
  }
  ;
  var bi = dt.fn.load;
  dt.fn.load = function(t, e, i) {
    if ("string" != typeof t && bi)
      return bi.apply(this, arguments);
    var n, r, o, s = this, a = t.indexOf(" ");
    return -1 < a && (n = dt.trim(t.slice(a, t.length)),
    t = t.slice(0, a)),
    dt.isFunction(e) ? (i = e,
    e = void 0) : e && "object" == typeof e && (r = "POST"),
    0 < s.length && dt.ajax({
      url: t,
      type: r || "GET",
      dataType: "html",
      data: e
    }).done(function(t) {
      o = arguments,
      s.html(n ? dt("<div>").append(dt.parseHTML(t)).find(n) : t)
    }).always(i && function(t, e) {
      s.each(function() {
        i.apply(this, o || [t.responseText, e, t])
      })
    }
    ),
    this
  }
  ,
  dt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
    dt.fn[e] = function(t) {
      return this.on(e, t)
    }
  }),
  dt.expr.filters.animated = function(e) {
    return dt.grep(dt.timers, function(t) {
      return e === t.elem
    }).length
  }
  ,
  dt.offset = {
    setOffset: function(t, e, i) {
      var n, r, o, s, a, l, c = dt.css(t, "position"), u = dt(t), h = {};
      "static" === c && (t.style.position = "relative"),
      a = u.offset(),
      o = dt.css(t, "top"),
      l = dt.css(t, "left"),
      ("absolute" === c || "fixed" === c) && -1 < dt.inArray("auto", [o, l]) ? (s = (n = u.position()).top,
      r = n.left) : (s = parseFloat(o) || 0,
      r = parseFloat(l) || 0),
      dt.isFunction(e) && (e = e.call(t, i, dt.extend({}, a))),
      null != e.top && (h.top = e.top - a.top + s),
      null != e.left && (h.left = e.left - a.left + r),
      "using"in e ? e.using.call(t, h) : u.css(h)
    }
  },
  dt.fn.extend({
    offset: function(e) {
      if (arguments.length)
        return void 0 === e ? this : this.each(function(t) {
          dt.offset.setOffset(this, e, t)
        });
      var t, i, n = {
        top: 0,
        left: 0
      }, r = this[0], o = r && r.ownerDocument;
      return o ? (t = o.documentElement,
      dt.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (n = r.getBoundingClientRect()),
      i = tt(o),
      {
        top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
        left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
      }) : n) : void 0
    },
    position: function() {
      if (this[0]) {
        var t, e, i = {
          top: 0,
          left: 0
        }, n = this[0];
        return "fixed" === dt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(),
        e = this.offset(),
        dt.nodeName(t[0], "html") || (i = t.offset()),
        i.top += dt.css(t[0], "borderTopWidth", !0),
        i.left += dt.css(t[0], "borderLeftWidth", !0)),
        {
          top: e.top - i.top - dt.css(n, "marginTop", !0),
          left: e.left - i.left - dt.css(n, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var t = this.offsetParent; t && !dt.nodeName(t, "html") && "static" === dt.css(t, "position"); )
          t = t.offsetParent;
        return t || ge
      })
    }
  }),
  dt.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, r) {
    var o = /Y/.test(r);
    dt.fn[e] = function(t) {
      return Yt(this, function(t, e, i) {
        var n = tt(t);
        return void 0 === i ? n ? r in n ? n[r] : n.document.documentElement[e] : t[e] : void (n ? n.scrollTo(o ? dt(n).scrollLeft() : i, o ? i : dt(n).scrollTop()) : t[e] = i)
      }, e, t, arguments.length, null)
    }
  }),
  dt.each(["top", "left"], function(t, i) {
    dt.cssHooks[i] = A(ut.pixelPosition, function(t, e) {
      return e ? (e = ve(t, i),
      pe.test(e) ? dt(t).position()[i] + "px" : e) : void 0
    })
  }),
  dt.each({
    Height: "height",
    Width: "width"
  }, function(o, s) {
    dt.each({
      padding: "inner" + o,
      content: s,
      "": "outer" + o
    }, function(n, t) {
      dt.fn[t] = function(t, e) {
        var i = arguments.length && (n || "boolean" != typeof t)
          , r = n || (!0 === t || !0 === e ? "margin" : "border");
        return Yt(this, function(t, e, i) {
          var n;
          return dt.isWindow(t) ? t.document.documentElement["client" + o] : 9 === t.nodeType ? (n = t.documentElement,
          Math.max(t.body["scroll" + o], n["scroll" + o], t.body["offset" + o], n["offset" + o], n["client" + o])) : void 0 === i ? dt.css(t, e, r) : dt.style(t, e, i, r)
        }, s, i ? t : void 0, i, null)
      }
    })
  }),
  dt.fn.extend({
    bind: function(t, e, i) {
      return this.on(t, null, e, i)
    },
    unbind: function(t, e) {
      return this.off(t, null, e)
    },
    delegate: function(t, e, i, n) {
      return this.on(e, t, i, n)
    },
    undelegate: function(t, e, i) {
      return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
    }
  }),
  dt.fn.size = function() {
    return this.length
  }
  ,
  dt.fn.andSelf = dt.fn.addBack,
  "function" == typeof define && define.amd && define("jquery", [], function() {
    return dt
  });
  var _i = S.jQuery
    , xi = S.$;
  return dt.noConflict = function(t) {
    return S.$ === dt && (S.$ = xi),
    t && S.jQuery === dt && (S.jQuery = _i),
    dt
  }
  ,
  e || (S.jQuery = S.$ = dt),
  dt
}),
function() {
  $.extend({
    nextTick: function(t) {
      return window.requestAnimationFrame(function() {
        return window.requestAnimationFrame(function() {
          return window.requestAnimationFrame(function() {
            return t()
          })
        })
      })
    }
  }),
  $.fn.extend({
    transitionEnd: function(t) {
      return this.one("transitionend", t)
    },
    disableTransition: function() {
      return this.css("transition", "none").css("transition")
    },
    enableTransition: function(t) {
      return this.css("transition", "all " + t + " ease-in-out").css("transition")
    },
    zindex: function(t) {
      return this.css("z-index", t)
    },
    translateX: function(t) {
      return this.css("transform", "translateX(" + t + "px)")
    },
    translateY: function(t) {
      return this.css("transform", "translateY(" + t + "px)")
    },
    translate: function(t, e) {
      return this.css("transform", "translate(" + t + "px, " + e + "px)")
    },
    onScroll: function(t) {
      var e;
      return e = !!MB.supportsPassive && {
        passive: !0
      },
      this[0].removeEventListener("scroll", t, e),
      this[0].addEventListener("scroll", t, e)
    }
  })
}
.call(this),
function(t) {
  "use strict";
  function h(t, e) {
    var i = (65535 & t) + (65535 & e);
    return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i
  }
  function s(t, e) {
    return t << e | t >>> 32 - e
  }
  function a(t, e, i, n, r, o) {
    return h(s(h(h(e, t), h(n, o)), r), i)
  }
  function d(t, e, i, n, r, o, s) {
    return a(e & i | ~e & n, t, e, r, o, s)
  }
  function p(t, e, i, n, r, o, s) {
    return a(e & n | i & ~n, t, e, r, o, s)
  }
  function f(t, e, i, n, r, o, s) {
    return a(e ^ i ^ n, t, e, r, o, s)
  }
  function g(t, e, i, n, r, o, s) {
    return a(i ^ (e | ~n), t, e, r, o, s)
  }
  function l(t, e) {
    t[e >> 5] |= 128 << e % 32,
    t[14 + (e + 64 >>> 9 << 4)] = e;
    var i, n, r, o, s, a = 1732584193, l = -271733879, c = -1732584194, u = 271733878;
    for (i = 0; i < t.length; i += 16)
      l = g(l = g(l = g(l = g(l = f(l = f(l = f(l = f(l = p(l = p(l = p(l = p(l = d(l = d(l = d(l = d(r = l, c = d(o = c, u = d(s = u, a = d(n = a, l, c, u, t[i], 7, -680876936), l, c, t[i + 1], 12, -389564586), a, l, t[i + 2], 17, 606105819), u, a, t[i + 3], 22, -1044525330), c = d(c, u = d(u, a = d(a, l, c, u, t[i + 4], 7, -176418897), l, c, t[i + 5], 12, 1200080426), a, l, t[i + 6], 17, -1473231341), u, a, t[i + 7], 22, -45705983), c = d(c, u = d(u, a = d(a, l, c, u, t[i + 8], 7, 1770035416), l, c, t[i + 9], 12, -1958414417), a, l, t[i + 10], 17, -42063), u, a, t[i + 11], 22, -1990404162), c = d(c, u = d(u, a = d(a, l, c, u, t[i + 12], 7, 1804603682), l, c, t[i + 13], 12, -40341101), a, l, t[i + 14], 17, -1502002290), u, a, t[i + 15], 22, 1236535329), c = p(c, u = p(u, a = p(a, l, c, u, t[i + 1], 5, -165796510), l, c, t[i + 6], 9, -1069501632), a, l, t[i + 11], 14, 643717713), u, a, t[i], 20, -373897302), c = p(c, u = p(u, a = p(a, l, c, u, t[i + 5], 5, -701558691), l, c, t[i + 10], 9, 38016083), a, l, t[i + 15], 14, -660478335), u, a, t[i + 4], 20, -405537848), c = p(c, u = p(u, a = p(a, l, c, u, t[i + 9], 5, 568446438), l, c, t[i + 14], 9, -1019803690), a, l, t[i + 3], 14, -187363961), u, a, t[i + 8], 20, 1163531501), c = p(c, u = p(u, a = p(a, l, c, u, t[i + 13], 5, -1444681467), l, c, t[i + 2], 9, -51403784), a, l, t[i + 7], 14, 1735328473), u, a, t[i + 12], 20, -1926607734), c = f(c, u = f(u, a = f(a, l, c, u, t[i + 5], 4, -378558), l, c, t[i + 8], 11, -2022574463), a, l, t[i + 11], 16, 1839030562), u, a, t[i + 14], 23, -35309556), c = f(c, u = f(u, a = f(a, l, c, u, t[i + 1], 4, -1530992060), l, c, t[i + 4], 11, 1272893353), a, l, t[i + 7], 16, -155497632), u, a, t[i + 10], 23, -1094730640), c = f(c, u = f(u, a = f(a, l, c, u, t[i + 13], 4, 681279174), l, c, t[i], 11, -358537222), a, l, t[i + 3], 16, -722521979), u, a, t[i + 6], 23, 76029189), c = f(c, u = f(u, a = f(a, l, c, u, t[i + 9], 4, -640364487), l, c, t[i + 12], 11, -421815835), a, l, t[i + 15], 16, 530742520), u, a, t[i + 2], 23, -995338651), c = g(c, u = g(u, a = g(a, l, c, u, t[i], 6, -198630844), l, c, t[i + 7], 10, 1126891415), a, l, t[i + 14], 15, -1416354905), u, a, t[i + 5], 21, -57434055), c = g(c, u = g(u, a = g(a, l, c, u, t[i + 12], 6, 1700485571), l, c, t[i + 3], 10, -1894986606), a, l, t[i + 10], 15, -1051523), u, a, t[i + 1], 21, -2054922799), c = g(c, u = g(u, a = g(a, l, c, u, t[i + 8], 6, 1873313359), l, c, t[i + 15], 10, -30611744), a, l, t[i + 6], 15, -1560198380), u, a, t[i + 13], 21, 1309151649), c = g(c, u = g(u, a = g(a, l, c, u, t[i + 4], 6, -145523070), l, c, t[i + 11], 10, -1120210379), a, l, t[i + 2], 15, 718787259), u, a, t[i + 9], 21, -343485551),
      a = h(a, n),
      l = h(l, r),
      c = h(c, o),
      u = h(u, s);
    return [a, l, c, u]
  }
  function c(t) {
    var e, i = "";
    for (e = 0; e < 32 * t.length; e += 8)
      i += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
    return i
  }
  function u(t) {
    var e, i = [];
    for (i[(t.length >> 2) - 1] = void 0,
    e = 0; e < i.length; e += 1)
      i[e] = 0;
    for (e = 0; e < 8 * t.length; e += 8)
      i[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
    return i
  }
  function e(t) {
    return c(l(u(t), 8 * t.length))
  }
  function i(t, e) {
    var i, n, r = u(t), o = [], s = [];
    for (o[15] = s[15] = void 0,
    16 < r.length && (r = l(r, 8 * t.length)),
    i = 0; i < 16; i += 1)
      o[i] = 909522486 ^ r[i],
      s[i] = 1549556828 ^ r[i];
    return n = l(o.concat(u(e)), 512 + 8 * e.length),
    c(l(s.concat(n), 640))
  }
  function n(t) {
    var e, i, n = "0123456789abcdef", r = "";
    for (i = 0; i < t.length; i += 1)
      e = t.charCodeAt(i),
      r += n.charAt(e >>> 4 & 15) + n.charAt(15 & e);
    return r
  }
  function r(t) {
    return unescape(encodeURIComponent(t))
  }
  function o(t) {
    return e(r(t))
  }
  function m(t) {
    return n(o(t))
  }
  function v(t, e) {
    return i(r(t), r(e))
  }
  function y(t, e) {
    return n(v(t, e))
  }
  function b(t, e, i) {
    return e ? i ? v(e, t) : y(e, t) : i ? o(t) : m(t)
  }
  "function" == typeof define && define.amd ? define(function() {
    return b
  }) : t.md5 = b
}(this),
function(f) {
  f.fn.qrcode = function(c) {
    function e(t) {
      this.mode = i,
      this.data = t
    }
    function u(t, e) {
      this.typeNumber = t,
      this.errorCorrectLevel = e,
      this.modules = null,
      this.moduleCount = 0,
      this.dataCache = null,
      this.dataList = []
    }
    function h(t, e) {
      if (null == t.length)
        throw Error(t.length + "/" + e);
      for (var i = 0; i < t.length && 0 == t[i]; )
        i++;
      this.num = Array(t.length - i + e);
      for (var n = 0; n < t.length - i; n++)
        this.num[n] = t[n + i]
    }
    function d(t, e) {
      this.totalCount = t,
      this.dataCount = e
    }
    function s() {
      this.buffer = [],
      this.length = 0
    }
    var i;
    e.prototype = {
      getLength: function() {
        return this.data.length
      },
      write: function(t) {
        for (var e = 0; e < this.data.length; e++)
          t.put(this.data.charCodeAt(e), 8)
      }
    },
    u.prototype = {
      addData: function(t) {
        this.dataList.push(new e(t)),
        this.dataCache = null
      },
      isDark: function(t, e) {
        if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
          throw Error(t + "," + e);
        return this.modules[t][e]
      },
      getModuleCount: function() {
        return this.moduleCount
      },
      make: function() {
        if (this.typeNumber < 1) {
          var t = 1;
          for (t = 1; t < 40; t++) {
            for (var e = d.getRSBlocks(t, this.errorCorrectLevel), i = new s, n = 0, r = 0; r < e.length; r++)
              n += e[r].dataCount;
            for (r = 0; r < this.dataList.length; r++)
              e = this.dataList[r],
              i.put(e.mode, 4),
              i.put(e.getLength(), p.getLengthInBits(e.mode, t)),
              e.write(i);
            if (i.getLengthInBits() <= 8 * n)
              break
          }
          this.typeNumber = t
        }
        this.makeImpl(!1, this.getBestMaskPattern())
      },
      makeImpl: function(t, e) {
        this.moduleCount = 4 * this.typeNumber + 17,
        this.modules = Array(this.moduleCount);
        for (var i = 0; i < this.moduleCount; i++) {
          this.modules[i] = Array(this.moduleCount);
          for (var n = 0; n < this.moduleCount; n++)
            this.modules[i][n] = null
        }
        this.setupPositionProbePattern(0, 0),
        this.setupPositionProbePattern(this.moduleCount - 7, 0),
        this.setupPositionProbePattern(0, this.moduleCount - 7),
        this.setupPositionAdjustPattern(),
        this.setupTimingPattern(),
        this.setupTypeInfo(t, e),
        7 <= this.typeNumber && this.setupTypeNumber(t),
        null == this.dataCache && (this.dataCache = u.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
        this.mapData(this.dataCache, e)
      },
      setupPositionProbePattern: function(t, e) {
        for (var i = -1; i <= 7; i++)
          if (!(t + i <= -1 || this.moduleCount <= t + i))
            for (var n = -1; n <= 7; n++)
              e + n <= -1 || this.moduleCount <= e + n || (this.modules[t + i][e + n] = 0 <= i && i <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == i || 6 == i) || 2 <= i && i <= 4 && 2 <= n && n <= 4)
      },
      getBestMaskPattern: function() {
        for (var t = 0, e = 0, i = 0; i < 8; i++) {
          this.makeImpl(!0, i);
          var n = p.getLostPoint(this);
          (0 == i || n < t) && (t = n,
          e = i)
        }
        return e
      },
      createMovieClip: function(t, e, i) {
        for (t = t.createEmptyMovieClip(e, i),
        this.make(),
        e = 0; e < this.modules.length; e++) {
          i = 1 * e;
          for (var n = 0; n < this.modules[e].length; n++) {
            var r = 1 * n;
            this.modules[e][n] && (t.beginFill(0, 100),
            t.moveTo(r, i),
            t.lineTo(r + 1, i),
            t.lineTo(r + 1, i + 1),
            t.lineTo(r, i + 1),
            t.endFill())
          }
        }
        return t
      },
      setupTimingPattern: function() {
        for (var t = 8; t < this.moduleCount - 8; t++)
          null == this.modules[t][6] && (this.modules[t][6] = 0 == t % 2);
        for (t = 8; t < this.moduleCount - 8; t++)
          null == this.modules[6][t] && (this.modules[6][t] = 0 == t % 2)
      },
      setupPositionAdjustPattern: function() {
        for (var t = p.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
          for (var i = 0; i < t.length; i++) {
            var n = t[e]
              , r = t[i];
            if (null == this.modules[n][r])
              for (var o = -2; o <= 2; o++)
                for (var s = -2; s <= 2; s++)
                  this.modules[n + o][r + s] = -2 == o || 2 == o || -2 == s || 2 == s || 0 == o && 0 == s
          }
      },
      setupTypeNumber: function(t) {
        for (var e = p.getBCHTypeNumber(this.typeNumber), i = 0; i < 18; i++) {
          var n = !t && 1 == (e >> i & 1);
          this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = n
        }
        for (i = 0; i < 18; i++)
          n = !t && 1 == (e >> i & 1),
          this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = n
      },
      setupTypeInfo: function(t, e) {
        for (var i = p.getBCHTypeInfo(this.errorCorrectLevel << 3 | e), n = 0; n < 15; n++) {
          var r = !t && 1 == (i >> n & 1);
          n < 6 ? this.modules[n][8] = r : n < 8 ? this.modules[n + 1][8] = r : this.modules[this.moduleCount - 15 + n][8] = r
        }
        for (n = 0; n < 15; n++)
          r = !t && 1 == (i >> n & 1),
          n < 8 ? this.modules[8][this.moduleCount - n - 1] = r : n < 9 ? this.modules[8][15 - n - 1 + 1] = r : this.modules[8][15 - n - 1] = r;
        this.modules[this.moduleCount - 8][8] = !t
      },
      mapData: function(t, e) {
        for (var i = -1, n = this.moduleCount - 1, r = 7, o = 0, s = this.moduleCount - 1; 0 < s; s -= 2)
          for (6 == s && s--; ; ) {
            for (var a = 0; a < 2; a++)
              if (null == this.modules[n][s - a]) {
                var l = !1;
                o < t.length && (l = 1 == (t[o] >>> r & 1)),
                p.getMask(e, n, s - a) && (l = !l),
                this.modules[n][s - a] = l,
                -1 == --r && (o++,
                r = 7)
              }
            if ((n += i) < 0 || this.moduleCount <= n) {
              n -= i,
              i = -i;
              break
            }
          }
      }
    },
    u.PAD0 = 236,
    u.PAD1 = 17,
    u.createData = function(t, e, i) {
      e = d.getRSBlocks(t, e);
      for (var n = new s, r = 0; r < i.length; r++) {
        var o = i[r];
        n.put(o.mode, 4),
        n.put(o.getLength(), p.getLengthInBits(o.mode, t)),
        o.write(n)
      }
      for (r = t = 0; r < e.length; r++)
        t += e[r].dataCount;
      if (n.getLengthInBits() > 8 * t)
        throw Error("code length overflow. (" + n.getLengthInBits() + ">" + 8 * t + ")");
      for (n.getLengthInBits() + 4 <= 8 * t && n.put(0, 4); 0 != n.getLengthInBits() % 8; )
        n.putBit(!1);
      for (; !(n.getLengthInBits() >= 8 * t) && (n.put(u.PAD0, 8),
      !(n.getLengthInBits() >= 8 * t)); )
        n.put(u.PAD1, 8);
      return u.createBytes(n, e)
    }
    ,
    u.createBytes = function(t, e) {
      for (var i = 0, n = 0, r = 0, o = Array(e.length), s = Array(e.length), a = 0; a < e.length; a++) {
        var l = e[a].dataCount
          , c = e[a].totalCount - l;
        n = Math.max(n, l),
        r = Math.max(r, c);
        o[a] = Array(l);
        for (var u = 0; u < o[a].length; u++)
          o[a][u] = 255 & t.buffer[u + i];
        for (i += l,
        u = p.getErrorCorrectPolynomial(c),
        l = new h(o[a],u.getLength() - 1).mod(u),
        s[a] = Array(u.getLength() - 1),
        u = 0; u < s[a].length; u++)
          c = u + l.getLength() - s[a].length,
          s[a][u] = 0 <= c ? l.get(c) : 0
      }
      for (u = a = 0; u < e.length; u++)
        a += e[u].totalCount;
      for (i = Array(a),
      u = l = 0; u < n; u++)
        for (a = 0; a < e.length; a++)
          u < o[a].length && (i[l++] = o[a][u]);
      for (u = 0; u < r; u++)
        for (a = 0; a < e.length; a++)
          u < s[a].length && (i[l++] = s[a][u]);
      return i
    }
    ,
    i = 4;
    for (var p = {
      PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
      G15: 1335,
      G18: 7973,
      G15_MASK: 21522,
      getBCHTypeInfo: function(t) {
        for (var e = t << 10; 0 <= p.getBCHDigit(e) - p.getBCHDigit(p.G15); )
          e ^= p.G15 << p.getBCHDigit(e) - p.getBCHDigit(p.G15);
        return (t << 10 | e) ^ p.G15_MASK
      },
      getBCHTypeNumber: function(t) {
        for (var e = t << 12; 0 <= p.getBCHDigit(e) - p.getBCHDigit(p.G18); )
          e ^= p.G18 << p.getBCHDigit(e) - p.getBCHDigit(p.G18);
        return t << 12 | e
      },
      getBCHDigit: function(t) {
        for (var e = 0; 0 != t; )
          e++,
          t >>>= 1;
        return e
      },
      getPatternPosition: function(t) {
        return p.PATTERN_POSITION_TABLE[t - 1]
      },
      getMask: function(t, e, i) {
        switch (t) {
        case 0:
          return 0 == (e + i) % 2;
        case 1:
          return 0 == e % 2;
        case 2:
          return 0 == i % 3;
        case 3:
          return 0 == (e + i) % 3;
        case 4:
          return 0 == (Math.floor(e / 2) + Math.floor(i / 3)) % 2;
        case 5:
          return 0 == e * i % 2 + e * i % 3;
        case 6:
          return 0 == (e * i % 2 + e * i % 3) % 2;
        case 7:
          return 0 == (e * i % 3 + (e + i) % 2) % 2;
        default:
          throw Error("bad maskPattern:" + t)
        }
      },
      getErrorCorrectPolynomial: function(t) {
        for (var e = new h([1],0), i = 0; i < t; i++)
          e = e.multiply(new h([1, r.gexp(i)],0));
        return e
      },
      getLengthInBits: function(t, e) {
        if (1 <= e && e < 10)
          switch (t) {
          case 1:
            return 10;
          case 2:
            return 9;
          case i:
          case 8:
            return 8;
          default:
            throw Error("mode:" + t)
          }
        else if (e < 27)
          switch (t) {
          case 1:
            return 12;
          case 2:
            return 11;
          case i:
            return 16;
          case 8:
            return 10;
          default:
            throw Error("mode:" + t)
          }
        else {
          if (!(e < 41))
            throw Error("type:" + e);
          switch (t) {
          case 1:
            return 14;
          case 2:
            return 13;
          case i:
            return 16;
          case 8:
            return 12;
          default:
            throw Error("mode:" + t)
          }
        }
      },
      getLostPoint: function(t) {
        for (var e = t.getModuleCount(), i = 0, n = 0; n < e; n++)
          for (var r = 0; r < e; r++) {
            for (var o = 0, s = t.isDark(n, r), a = -1; a <= 1; a++)
              if (!(n + a < 0 || e <= n + a))
                for (var l = -1; l <= 1; l++)
                  r + l < 0 || e <= r + l || 0 == a && 0 == l || s == t.isDark(n + a, r + l) && o++;
            5 < o && (i += 3 + o - 5)
          }
        for (n = 0; n < e - 1; n++)
          for (r = 0; r < e - 1; r++)
            o = 0,
            t.isDark(n, r) && o++,
            t.isDark(n + 1, r) && o++,
            t.isDark(n, r + 1) && o++,
            t.isDark(n + 1, r + 1) && o++,
            (0 == o || 4 == o) && (i += 3);
        for (n = 0; n < e; n++)
          for (r = 0; r < e - 6; r++)
            t.isDark(n, r) && !t.isDark(n, r + 1) && t.isDark(n, r + 2) && t.isDark(n, r + 3) && t.isDark(n, r + 4) && !t.isDark(n, r + 5) && t.isDark(n, r + 6) && (i += 40);
        for (r = 0; r < e; r++)
          for (n = 0; n < e - 6; n++)
            t.isDark(n, r) && !t.isDark(n + 1, r) && t.isDark(n + 2, r) && t.isDark(n + 3, r) && t.isDark(n + 4, r) && !t.isDark(n + 5, r) && t.isDark(n + 6, r) && (i += 40);
        for (r = o = 0; r < e; r++)
          for (n = 0; n < e; n++)
            t.isDark(n, r) && o++;
        return i + 10 * (t = Math.abs(100 * o / e / e - 50) / 5)
      }
    }, r = {
      glog: function(t) {
        if (t < 1)
          throw Error("glog(" + t + ")");
        return r.LOG_TABLE[t]
      },
      gexp: function(t) {
        for (; t < 0; )
          t += 255;
        for (; 256 <= t; )
          t -= 255;
        return r.EXP_TABLE[t]
      },
      EXP_TABLE: Array(256),
      LOG_TABLE: Array(256)
    }, t = 0; t < 8; t++)
      r.EXP_TABLE[t] = 1 << t;
    for (t = 8; t < 256; t++)
      r.EXP_TABLE[t] = r.EXP_TABLE[t - 4] ^ r.EXP_TABLE[t - 5] ^ r.EXP_TABLE[t - 6] ^ r.EXP_TABLE[t - 8];
    for (t = 0; t < 255; t++)
      r.LOG_TABLE[r.EXP_TABLE[t]] = t;
    return h.prototype = {
      get: function(t) {
        return this.num[t]
      },
      getLength: function() {
        return this.num.length
      },
      multiply: function(t) {
        for (var e = Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++)
          for (var n = 0; n < t.getLength(); n++)
            e[i + n] ^= r.gexp(r.glog(this.get(i)) + r.glog(t.get(n)));
        return new h(e,0)
      },
      mod: function(t) {
        if (this.getLength() - t.getLength() < 0)
          return this;
        for (var e = r.glog(this.get(0)) - r.glog(t.get(0)), i = Array(this.getLength()), n = 0; n < this.getLength(); n++)
          i[n] = this.get(n);
        for (n = 0; n < t.getLength(); n++)
          i[n] ^= r.gexp(r.glog(t.get(n)) + e);
        return new h(i,0).mod(t)
      }
    },
    d.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
    d.getRSBlocks = function(t, e) {
      var i = d.getRsBlockTable(t, e);
      if (null == i)
        throw Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
      for (var n = i.length / 3, r = [], o = 0; o < n; o++)
        for (var s = i[3 * o + 0], a = i[3 * o + 1], l = i[3 * o + 2], c = 0; c < s; c++)
          r.push(new d(a,l));
      return r
    }
    ,
    d.getRsBlockTable = function(t, e) {
      switch (e) {
      case 1:
        return d.RS_BLOCK_TABLE[4 * (t - 1) + 0];
      case 0:
        return d.RS_BLOCK_TABLE[4 * (t - 1) + 1];
      case 3:
        return d.RS_BLOCK_TABLE[4 * (t - 1) + 2];
      case 2:
        return d.RS_BLOCK_TABLE[4 * (t - 1) + 3]
      }
    }
    ,
    s.prototype = {
      get: function(t) {
        return 1 == (this.buffer[Math.floor(t / 8)] >>> 7 - t % 8 & 1)
      },
      put: function(t, e) {
        for (var i = 0; i < e; i++)
          this.putBit(1 == (t >>> e - i - 1 & 1))
      },
      getLengthInBits: function() {
        return this.length
      },
      putBit: function(t) {
        var e = Math.floor(this.length / 8);
        this.buffer.length <= e && this.buffer.push(0),
        t && (this.buffer[e] |= 128 >>> this.length % 8),
        this.length++
      }
    },
    "string" == typeof c && (c = {
      text: c
    }),
    c = f.extend({}, {
      render: "canvas",
      width: 256,
      height: 256,
      typeNumber: -1,
      correctLevel: 2,
      background: "#ffffff",
      foreground: "#000000"
    }, c),
    this.each(function() {
      var t;
      if ("canvas" == c.render) {
        (t = new u(c.typeNumber,c.correctLevel)).addData(c.text),
        t.make();
        var e = document.createElement("canvas");
        e.width = c.width,
        e.height = c.height;
        for (var i = e.getContext("2d"), n = c.width / t.getModuleCount(), r = c.height / t.getModuleCount(), o = 0; o < t.getModuleCount(); o++)
          for (var s = 0; s < t.getModuleCount(); s++) {
            i.fillStyle = t.isDark(o, s) ? c.foreground : c.background;
            var a = Math.ceil((s + 1) * n) - Math.floor(s * n)
              , l = Math.ceil((o + 1) * n) - Math.floor(o * n);
            i.fillRect(Math.round(s * n), Math.round(o * r), a, l)
          }
      } else
        for ((t = new u(c.typeNumber,c.correctLevel)).addData(c.text),
        t.make(),
        e = f("<table></table>").css("width", c.width + "px").css("height", c.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", c.background),
        i = c.width / t.getModuleCount(),
        n = c.height / t.getModuleCount(),
        r = 0; r < t.getModuleCount(); r++)
          for (o = f("<tr></tr>").css("height", n + "px").appendTo(e),
          s = 0; s < t.getModuleCount(); s++)
            f("<td></td>").css("width", i + "px").css("background-color", t.isDark(r, s) ? c.foreground : c.background).appendTo(o);
      t = e,
      jQuery(t).appendTo(this)
    })
  }
}(jQuery),
function() {
  var s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  Math.uuid = function(t, e) {
    var i, n, r = s, o = [];
    if (e = e || r.length,
    t)
      for (i = 0; i < t; i++)
        o[i] = r[0 | Math.random() * e];
    else
      for (o[8] = o[13] = o[18] = o[23] = "-",
      o[14] = "4",
      i = 0; i < 36; i++)
        o[i] || (n = 0 | 16 * Math.random(),
        o[i] = r[19 == i ? 3 & n | 8 : n]);
    return o.join("")
  }
  ,
  Math.uuidFast = function() {
    for (var t, e = s, i = new Array(36), n = 0, r = 0; r < 36; r++)
      8 == r || 13 == r || 18 == r || 23 == r ? i[r] = "-" : 14 == r ? i[r] = "4" : (n <= 2 && (n = 33554432 + 16777216 * Math.random() | 0),
      t = 15 & n,
      n >>= 4,
      i[r] = e[19 == r ? 3 & t | 8 : t]);
    return i.join("")
  }
  ,
  Math.uuidCompact = function() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
      var e = 16 * Math.random() | 0;
      return ("x" == t ? e : 3 & e | 8).toString(16)
    })
  }
}(),
$(function() {
  jQuery.timeago.settings.strings["zh-CN"] = {
    prefixAgo: null,
    prefixFromNow: "\u4ece\u73b0\u5728\u5f00\u59cb",
    suffixAgo: "\u4e4b\u524d",
    suffixFromNow: null,
    seconds: "\u4e0d\u5230 1 \u5206\u949f",
    minute: "\u5927\u7ea6 1 \u5206\u949f",
    minutes: "%d \u5206\u949f",
    hour: "\u5927\u7ea6 1 \u5c0f\u65f6",
    hours: "\u5927\u7ea6 %d \u5c0f\u65f6",
    day: "1 \u5929",
    days: "%d \u5929",
    month: "\u5927\u7ea6 1 \u4e2a\u6708",
    months: "%d \u6708",
    year: "\u5927\u7ea6 1 \u5e74",
    years: "%d \u5e74",
    numbers: [],
    wordSeparator: ""
  }
}),
function o(s, a, l) {
  function c(i, t) {
    if (!a[i]) {
      if (!s[i]) {
        var e = "function" == typeof require && require;
        if (!t && e)
          return e(i, !0);
        if (u)
          return u(i, !0);
        var n = new Error("Cannot find module '" + i + "'");
        throw n.code = "MODULE_NOT_FOUND",
        n
      }
      var r = a[i] = {
        exports: {}
      };
      s[i][0].call(r.exports, function(t) {
        var e = s[i][1][t];
        return c(e || t)
      }, r, r.exports, o, s, a, l)
    }
    return a[i].exports
  }
  for (var u = "function" == typeof require && require, t = 0; t < l.length; t++)
    c(l[t]);
  return c
}({
  1: [function(t, e) {
    "use strict";
    function i(t) {
      t.fn.perfectScrollbar = function(i) {
        return this.each(function() {
          if ("object" == typeof i || void 0 === i) {
            var t = i;
            r.get(this) || n.initialize(this, t)
          } else {
            var e = i;
            "update" === e ? n.update(this) : "destroy" === e && n.destroy(this)
          }
        })
      }
    }
    var n = t("../main")
      , r = t("../plugin/instances");
    if ("function" == typeof define && define.amd)
      define(["jquery"], i);
    else {
      var o = window.jQuery ? window.jQuery : window.$;
      void 0 !== o && i(o)
    }
    e.exports = i
  }
  , {
    "../main": 7,
    "../plugin/instances": 18
  }],
  2: [function(t, e, i) {
    "use strict";
    function n(t, e) {
      var i = t.className.split(" ");
      i.indexOf(e) < 0 && i.push(e),
      t.className = i.join(" ")
    }
    function r(t, e) {
      var i = t.className.split(" ")
        , n = i.indexOf(e);
      0 <= n && i.splice(n, 1),
      t.className = i.join(" ")
    }
    i.add = function(t, e) {
      t.classList ? t.classList.add(e) : n(t, e)
    }
    ,
    i.remove = function(t, e) {
      t.classList ? t.classList.remove(e) : r(t, e)
    }
    ,
    i.list = function(t) {
      return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ")
    }
  }
  , {}],
  3: [function(t, e) {
    "use strict";
    function n(t, e) {
      return window.getComputedStyle(t)[e]
    }
    function r(t, e, i) {
      return "number" == typeof i && (i = i.toString() + "px"),
      t.style[e] = i,
      t
    }
    function o(t, e) {
      for (var i in e) {
        var n = e[i];
        "number" == typeof n && (n = n.toString() + "px"),
        t.style[i] = n
      }
      return t
    }
    var i = {
      e: function(t, e) {
        var i = document.createElement(t);
        return i.className = e,
        i
      },
      appendTo: function(t, e) {
        return e.appendChild(t),
        t
      },
      css: function(t, e, i) {
        return "object" == typeof e ? o(t, e) : void 0 === i ? n(t, e) : r(t, e, i)
      },
      matches: function(t, e) {
        return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0
      },
      remove: function(t) {
        "undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
      },
      queryChildren: function(t, e) {
        return Array.prototype.filter.call(t.childNodes, function(t) {
          return i.matches(t, e)
        })
      }
    };
    e.exports = i
  }
  , {}],
  4: [function(t, e) {
    "use strict";
    var i = function(t) {
      this.element = t,
      this.events = {}
    };
    i.prototype.bind = function(t, e) {
      "undefined" == typeof this.events[t] && (this.events[t] = []),
      this.events[t].push(e),
      this.element.addEventListener(t, e, !1)
    }
    ,
    i.prototype.unbind = function(e, i) {
      var n = void 0 !== i;
      this.events[e] = this.events[e].filter(function(t) {
        return !(!n || t === i) || (this.element.removeEventListener(e, t, !1),
        !1)
      }, this)
    }
    ,
    i.prototype.unbindAll = function() {
      for (var t in this.events)
        this.unbind(t)
    }
    ;
    var n = function() {
      this.eventElements = []
    };
    n.prototype.eventElement = function(e) {
      var t = this.eventElements.filter(function(t) {
        return t.element === e
      })[0];
      return void 0 === t && (t = new i(e),
      this.eventElements.push(t)),
      t
    }
    ,
    n.prototype.bind = function(t, e, i) {
      this.eventElement(t).bind(e, i)
    }
    ,
    n.prototype.unbind = function(t, e, i) {
      this.eventElement(t).unbind(e, i)
    }
    ,
    n.prototype.unbindAll = function() {
      for (var t = 0; t < this.eventElements.length; t++)
        this.eventElements[t].unbindAll()
    }
    ,
    n.prototype.once = function(t, e, i) {
      var n = this.eventElement(t)
        , r = function(t) {
        n.unbind(e, r),
        i(t)
      };
      n.bind(e, r)
    }
    ,
    e.exports = n
  }
  , {}],
  5: [function(t, e) {
    "use strict";
    e.exports = function() {
      function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
      }
      return function() {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
      }
    }()
  }
  , {}],
  6: [function(t, e, i) {
    "use strict";
    var r = t("./class")
      , n = t("./dom")
      , o = i.toInt = function(t) {
      return parseInt(t, 10) || 0
    }
      , s = i.clone = function(t) {
      if (null === t)
        return null;
      if (t.constructor === Array)
        return t.map(s);
      if ("object" == typeof t) {
        var e = {};
        for (var i in t)
          e[i] = s(t[i]);
        return e
      }
      return t
    }
    ;
    i.extend = function(t, e) {
      var i = s(t);
      for (var n in e)
        i[n] = s(e[n]);
      return i
    }
    ,
    i.isEditable = function(t) {
      return n.matches(t, "input,[contenteditable]") || n.matches(t, "select,[contenteditable]") || n.matches(t, "textarea,[contenteditable]") || n.matches(t, "button,[contenteditable]")
    }
    ,
    i.removePsClasses = function(t) {
      for (var e = r.list(t), i = 0; i < e.length; i++) {
        var n = e[i];
        0 === n.indexOf("ps-") && r.remove(t, n)
      }
    }
    ,
    i.outerWidth = function(t) {
      return o(n.css(t, "width")) + o(n.css(t, "paddingLeft")) + o(n.css(t, "paddingRight")) + o(n.css(t, "borderLeftWidth")) + o(n.css(t, "borderRightWidth"))
    }
    ,
    i.startScrolling = function(t, e) {
      r.add(t, "ps-in-scrolling"),
      void 0 !== e ? r.add(t, "ps-" + e) : (r.add(t, "ps-x"),
      r.add(t, "ps-y"))
    }
    ,
    i.stopScrolling = function(t, e) {
      r.remove(t, "ps-in-scrolling"),
      void 0 !== e ? r.remove(t, "ps-" + e) : (r.remove(t, "ps-x"),
      r.remove(t, "ps-y"))
    }
    ,
    i.env = {
      isWebKit: "WebkitAppearance"in document.documentElement.style,
      supportsTouch: "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch,
      supportsIePointer: null !== window.navigator.msMaxTouchPoints
    }
  }
  , {
    "./class": 2,
    "./dom": 3
  }],
  7: [function(t, e) {
    "use strict";
    var i = t("./plugin/destroy")
      , n = t("./plugin/initialize")
      , r = t("./plugin/update");
    e.exports = {
      initialize: n,
      update: r,
      destroy: i
    }
  }
  , {
    "./plugin/destroy": 9,
    "./plugin/initialize": 17,
    "./plugin/update": 21
  }],
  8: [function(t, e) {
    "use strict";
    e.exports = {
      handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      stopPropagationOnClick: !0,
      suppressScrollX: !1,
      suppressScrollY: !1,
      swipePropagation: !0,
      useBothWheelAxes: !1,
      wheelPropagation: !1,
      wheelSpeed: 1,
      theme: "default"
    }
  }
  , {}],
  9: [function(t, e) {
    "use strict";
    var i = t("../lib/helper")
      , n = t("../lib/dom")
      , r = t("./instances");
    e.exports = function(t) {
      var e = r.get(t);
      e && (e.event.unbindAll(),
      n.remove(e.scrollbarX),
      n.remove(e.scrollbarY),
      n.remove(e.scrollbarXRail),
      n.remove(e.scrollbarYRail),
      i.removePsClasses(t),
      r.remove(t))
    }
  }
  , {
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18
  }],
  10: [function(t, e) {
    "use strict";
    function i(n, r) {
      function o(t) {
        return t.getBoundingClientRect()
      }
      var t = function(t) {
        t.stopPropagation()
      };
      r.settings.stopPropagationOnClick && r.event.bind(r.scrollbarY, "click", t),
      r.event.bind(r.scrollbarYRail, "click", function(t) {
        var e = s.toInt(r.scrollbarYHeight / 2)
          , i = r.railYRatio * (t.pageY - window.pageYOffset - o(r.scrollbarYRail).top - e) / (r.railYRatio * (r.railYHeight - r.scrollbarYHeight));
        i < 0 ? i = 0 : 1 < i && (i = 1),
        l(n, "top", (r.contentHeight - r.containerHeight) * i),
        a(n),
        t.stopPropagation()
      }),
      r.settings.stopPropagationOnClick && r.event.bind(r.scrollbarX, "click", t),
      r.event.bind(r.scrollbarXRail, "click", function(t) {
        var e = s.toInt(r.scrollbarXWidth / 2)
          , i = r.railXRatio * (t.pageX - window.pageXOffset - o(r.scrollbarXRail).left - e) / (r.railXRatio * (r.railXWidth - r.scrollbarXWidth));
        i < 0 ? i = 0 : 1 < i && (i = 1),
        l(n, "left", (r.contentWidth - r.containerWidth) * i - r.negativeScrollAdjustment),
        a(n),
        t.stopPropagation()
      })
    }
    var s = t("../../lib/helper")
      , n = t("../instances")
      , a = t("../update-geometry")
      , l = t("../update-scroll");
    e.exports = function(t) {
      i(t, n.get(t))
    }
  }
  , {
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  11: [function(t, e) {
    "use strict";
    function i(r, o) {
      function e(t) {
        var e = s + t * o.railXRatio
          , i = Math.max(0, o.scrollbarXRail.getBoundingClientRect().left) + o.railXRatio * (o.railXWidth - o.scrollbarXWidth);
        o.scrollbarXLeft = e < 0 ? 0 : i < e ? i : e;
        var n = l.toInt(o.scrollbarXLeft * (o.contentWidth - o.containerWidth) / (o.containerWidth - o.railXRatio * o.scrollbarXWidth)) - o.negativeScrollAdjustment;
        h(r, "left", n)
      }
      var s = null
        , i = null
        , n = function(t) {
        e(t.pageX - i),
        u(r),
        t.stopPropagation(),
        t.preventDefault()
      }
        , a = function() {
        l.stopScrolling(r, "x"),
        o.event.unbind(o.ownerDocument, "mousemove", n)
      };
      o.event.bind(o.scrollbarX, "mousedown", function(t) {
        i = t.pageX,
        s = l.toInt(c.css(o.scrollbarX, "left")) * o.railXRatio,
        l.startScrolling(r, "x"),
        o.event.bind(o.ownerDocument, "mousemove", n),
        o.event.once(o.ownerDocument, "mouseup", a),
        t.stopPropagation(),
        t.preventDefault()
      })
    }
    function n(r, o) {
      function e(t) {
        var e = s + t * o.railYRatio
          , i = Math.max(0, o.scrollbarYRail.getBoundingClientRect().top) + o.railYRatio * (o.railYHeight - o.scrollbarYHeight);
        o.scrollbarYTop = e < 0 ? 0 : i < e ? i : e;
        var n = l.toInt(o.scrollbarYTop * (o.contentHeight - o.containerHeight) / (o.containerHeight - o.railYRatio * o.scrollbarYHeight));
        h(r, "top", n)
      }
      var s = null
        , i = null
        , n = function(t) {
        e(t.pageY - i),
        u(r),
        t.stopPropagation(),
        t.preventDefault()
      }
        , a = function() {
        l.stopScrolling(r, "y"),
        o.event.unbind(o.ownerDocument, "mousemove", n)
      };
      o.event.bind(o.scrollbarY, "mousedown", function(t) {
        i = t.pageY,
        s = l.toInt(c.css(o.scrollbarY, "top")) * o.railYRatio,
        l.startScrolling(r, "y"),
        o.event.bind(o.ownerDocument, "mousemove", n),
        o.event.once(o.ownerDocument, "mouseup", a),
        t.stopPropagation(),
        t.preventDefault()
      })
    }
    var l = t("../../lib/helper")
      , c = t("../../lib/dom")
      , r = t("../instances")
      , u = t("../update-geometry")
      , h = t("../update-scroll");
    e.exports = function(t) {
      var e = r.get(t);
      i(t, e),
      n(t, e)
    }
  }
  , {
    "../../lib/dom": 3,
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  12: [function(t, e) {
    "use strict";
    function i(o, s) {
      function a(t, e) {
        var i = o.scrollTop;
        if (0 === t) {
          if (!s.scrollbarYActive)
            return !1;
          if (0 === i && 0 < e || i >= s.contentHeight - s.containerHeight && e < 0)
            return !s.settings.wheelPropagation
        }
        var n = o.scrollLeft;
        if (0 === e) {
          if (!s.scrollbarXActive)
            return !1;
          if (0 === n && t < 0 || n >= s.contentWidth - s.containerWidth && 0 < t)
            return !s.settings.wheelPropagation
        }
        return !0
      }
      var l = !1;
      s.event.bind(o, "mouseenter", function() {
        l = !0
      }),
      s.event.bind(o, "mouseleave", function() {
        l = !1
      });
      s.event.bind(s.ownerDocument, "keydown", function(t) {
        if (!t.isDefaultPrevented || !t.isDefaultPrevented()) {
          var e = u.matches(s.scrollbarX, ":focus") || u.matches(s.scrollbarY, ":focus");
          if (l || e) {
            var i = document.activeElement ? document.activeElement : s.ownerDocument.activeElement;
            if (i) {
              if ("IFRAME" === i.tagName)
                i = i.contentDocument.activeElement;
              else
                for (; i.shadowRoot; )
                  i = i.shadowRoot.activeElement;
              if (c.isEditable(i))
                return
            }
            var n = 0
              , r = 0;
            switch (t.which) {
            case 37:
              n = -30;
              break;
            case 38:
              r = 30;
              break;
            case 39:
              n = 30;
              break;
            case 40:
              r = -30;
              break;
            case 33:
              r = 90;
              break;
            case 32:
              r = t.shiftKey ? 90 : -90;
              break;
            case 34:
              r = -90;
              break;
            case 35:
              r = t.ctrlKey ? -s.contentHeight : -s.containerHeight;
              break;
            case 36:
              r = t.ctrlKey ? o.scrollTop : s.containerHeight;
              break;
            default:
              return
            }
            d(o, "top", o.scrollTop - r),
            d(o, "left", o.scrollLeft + n),
            h(o),
            a(n, r) && t.preventDefault()
          }
        }
      })
    }
    var c = t("../../lib/helper")
      , u = t("../../lib/dom")
      , n = t("../instances")
      , h = t("../update-geometry")
      , d = t("../update-scroll");
    e.exports = function(t) {
      i(t, n.get(t))
    }
  }
  , {
    "../../lib/dom": 3,
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  13: [function(t, e) {
    "use strict";
    function i(o, r) {
      function s(t, e) {
        var i = o.scrollTop;
        if (0 === t) {
          if (!r.scrollbarYActive)
            return !1;
          if (0 === i && 0 < e || i >= r.contentHeight - r.containerHeight && e < 0)
            return !r.settings.wheelPropagation
        }
        var n = o.scrollLeft;
        if (0 === e) {
          if (!r.scrollbarXActive)
            return !1;
          if (0 === n && t < 0 || n >= r.contentWidth - r.containerWidth && 0 < t)
            return !r.settings.wheelPropagation
        }
        return !0
      }
      function a(t) {
        var e = t.deltaX
          , i = -1 * t.deltaY;
        return void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6,
        i = t.wheelDeltaY / 6),
        t.deltaMode && 1 === t.deltaMode && (e *= 10,
        i *= 10),
        e != e && i != i && (e = 0,
        i = t.wheelDelta),
        [e, i]
      }
      function l(t, e) {
        var i = o.querySelector("textarea:hover, .ps-child:hover");
        if (i) {
          if ("TEXTAREA" !== i.tagName && !window.getComputedStyle(i).overflow.match(/(scroll|auto)/))
            return !1;
          var n = i.scrollHeight - i.clientHeight;
          if (0 < n && !(0 === i.scrollTop && 0 < e || i.scrollTop === n && e < 0))
            return !0;
          var r = i.scrollLeft - i.clientWidth;
          if (0 < r && !(0 === i.scrollLeft && t < 0 || i.scrollLeft === r && 0 < t))
            return !0
        }
        return !1
      }
      function t(t) {
        var e = a(t)
          , i = e[0]
          , n = e[1];
        l(i, n) || (c = !1,
        r.settings.useBothWheelAxes ? r.scrollbarYActive && !r.scrollbarXActive ? (h(o, "top", n ? o.scrollTop - n * r.settings.wheelSpeed : o.scrollTop + i * r.settings.wheelSpeed),
        c = !0) : r.scrollbarXActive && !r.scrollbarYActive && (h(o, "left", i ? o.scrollLeft + i * r.settings.wheelSpeed : o.scrollLeft - n * r.settings.wheelSpeed),
        c = !0) : (h(o, "top", o.scrollTop - n * r.settings.wheelSpeed),
        h(o, "left", o.scrollLeft + i * r.settings.wheelSpeed)),
        u(o),
        (c = c || s(i, n)) && (t.stopPropagation(),
        t.preventDefault()))
      }
      var c = !1;
      "undefined" != typeof window.onwheel ? r.event.bind(o, "wheel", t) : "undefined" != typeof window.onmousewheel && r.event.bind(o, "mousewheel", t)
    }
    var n = t("../instances")
      , u = t("../update-geometry")
      , h = t("../update-scroll");
    e.exports = function(t) {
      i(t, n.get(t))
    }
  }
  , {
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  14: [function(t, e) {
    "use strict";
    function i(t, e) {
      e.event.bind(t, "scroll", function() {
        r(t)
      })
    }
    var n = t("../instances")
      , r = t("../update-geometry");
    e.exports = function(t) {
      i(t, n.get(t))
    }
  }
  , {
    "../instances": 18,
    "../update-geometry": 19
  }],
  15: [function(t, e) {
    "use strict";
    function i(n, t) {
      function e() {
        var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
        return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer
      }
      function r() {
        i || (i = setInterval(function() {
          c.get(n) ? (h(n, "top", n.scrollTop + s.top),
          h(n, "left", n.scrollLeft + s.left),
          u(n)) : clearInterval(i)
        }, 50))
      }
      function o() {
        i && (clearInterval(i),
        i = null),
        l.stopScrolling(n)
      }
      var i = null
        , s = {
        top: 0,
        left: 0
      }
        , a = !1;
      t.event.bind(t.ownerDocument, "selectionchange", function() {
        n.contains(e()) ? a = !0 : (a = !1,
        o())
      }),
      t.event.bind(window, "mouseup", function() {
        a && (a = !1,
        o())
      }),
      t.event.bind(window, "mousemove", function(t) {
        if (a) {
          var e = {
            x: t.pageX,
            y: t.pageY
          }
            , i = {
            left: n.offsetLeft,
            right: n.offsetLeft + n.offsetWidth,
            top: n.offsetTop,
            bottom: n.offsetTop + n.offsetHeight
          };
          e.x < i.left + 3 ? (s.left = -5,
          l.startScrolling(n, "x")) : e.x > i.right - 3 ? (s.left = 5,
          l.startScrolling(n, "x")) : s.left = 0,
          e.y < i.top + 3 ? (i.top + 3 - e.y < 5 ? s.top = -5 : s.top = -20,
          l.startScrolling(n, "y")) : e.y > i.bottom - 3 ? (e.y - i.bottom + 3 < 5 ? s.top = 5 : s.top = 20,
          l.startScrolling(n, "y")) : s.top = 0,
          0 === s.top && 0 === s.left ? o() : r()
        }
      })
    }
    var l = t("../../lib/helper")
      , c = t("../instances")
      , u = t("../update-geometry")
      , h = t("../update-scroll");
    e.exports = function(t) {
      i(t, c.get(t))
    }
  }
  , {
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  16: [function(t, e) {
    "use strict";
    function i(s, a, t, e) {
      function l(t, e) {
        var i = s.scrollTop
          , n = s.scrollLeft
          , r = Math.abs(t)
          , o = Math.abs(e);
        if (r < o) {
          if (e < 0 && i === a.contentHeight - a.containerHeight || 0 < e && 0 === i)
            return !a.settings.swipePropagation
        } else if (o < r && (t < 0 && n === a.contentWidth - a.containerWidth || 0 < t && 0 === n))
          return !a.settings.swipePropagation;
        return !0
      }
      function c(t, e) {
        x(s, "top", s.scrollTop - e),
        x(s, "left", s.scrollLeft - t),
        _(s)
      }
      function i() {
        v = !0
      }
      function n() {
        v = !1
      }
      function u(t) {
        return t.targetTouches ? t.targetTouches[0] : t
      }
      function h(t) {
        return !(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE)
      }
      function d(t) {
        if (h(t)) {
          y = !0;
          var e = u(t);
          p.pageX = e.pageX,
          p.pageY = e.pageY,
          f = (new Date).getTime(),
          null !== m && clearInterval(m),
          t.stopPropagation()
        }
      }
      function r(t) {
        if (!y && a.settings.swipePropagation && d(t),
        !v && y && h(t)) {
          var e = u(t)
            , i = {
            pageX: e.pageX,
            pageY: e.pageY
          }
            , n = i.pageX - p.pageX
            , r = i.pageY - p.pageY;
          c(n, r),
          p = i;
          var o = (new Date).getTime()
            , s = o - f;
          0 < s && (g.x = n / s,
          g.y = r / s,
          f = o),
          l(n, r) && (t.stopPropagation(),
          t.preventDefault())
        }
      }
      function o() {
        !v && y && (y = !1,
        clearInterval(m),
        m = setInterval(function() {
          b.get(s) ? Math.abs(g.x) < .01 && Math.abs(g.y) < .01 ? clearInterval(m) : (c(30 * g.x, 30 * g.y),
          g.x *= .8,
          g.y *= .8) : clearInterval(m)
        }, 10))
      }
      var p = {}
        , f = 0
        , g = {}
        , m = null
        , v = !1
        , y = !1;
      t && (a.event.bind(window, "touchstart", i),
      a.event.bind(window, "touchend", n),
      a.event.bind(s, "touchstart", d),
      a.event.bind(s, "touchmove", r),
      a.event.bind(s, "touchend", o)),
      e && (window.PointerEvent ? (a.event.bind(window, "pointerdown", i),
      a.event.bind(window, "pointerup", n),
      a.event.bind(s, "pointerdown", d),
      a.event.bind(s, "pointermove", r),
      a.event.bind(s, "pointerup", o)) : window.MSPointerEvent && (a.event.bind(window, "MSPointerDown", i),
      a.event.bind(window, "MSPointerUp", n),
      a.event.bind(s, "MSPointerDown", d),
      a.event.bind(s, "MSPointerMove", r),
      a.event.bind(s, "MSPointerUp", o)))
    }
    var n = t("../../lib/helper")
      , b = t("../instances")
      , _ = t("../update-geometry")
      , x = t("../update-scroll");
    e.exports = function(t) {
      (n.env.supportsTouch || n.env.supportsIePointer) && i(t, b.get(t), n.env.supportsTouch, n.env.supportsIePointer)
    }
  }
  , {
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  17: [function(t, e) {
    "use strict";
    var n = t("../lib/helper")
      , r = t("../lib/class")
      , o = t("./instances")
      , s = t("./update-geometry")
      , a = {
      "click-rail": t("./handler/click-rail"),
      "drag-scrollbar": t("./handler/drag-scrollbar"),
      keyboard: t("./handler/keyboard"),
      wheel: t("./handler/mouse-wheel"),
      touch: t("./handler/touch"),
      selection: t("./handler/selection")
    }
      , l = t("./handler/native-scroll");
    e.exports = function(e, t) {
      t = "object" == typeof t ? t : {},
      r.add(e, "ps-container");
      var i = o.add(e);
      i.settings = n.extend(i.settings, t),
      r.add(e, "ps-theme-" + i.settings.theme),
      i.settings.handlers.forEach(function(t) {
        a[t](e)
      }),
      l(e),
      s(e)
    }
  }
  , {
    "../lib/class": 2,
    "../lib/helper": 6,
    "./handler/click-rail": 10,
    "./handler/drag-scrollbar": 11,
    "./handler/keyboard": 12,
    "./handler/mouse-wheel": 13,
    "./handler/native-scroll": 14,
    "./handler/selection": 15,
    "./handler/touch": 16,
    "./instances": 18,
    "./update-geometry": 19
  }],
  18: [function(t, e, i) {
    "use strict";
    function n(t) {
      function e() {
        l.add(t, "ps-focus")
      }
      function i() {
        l.remove(t, "ps-focus")
      }
      var n, r, o = this;
      o.settings = a.clone(c),
      o.containerWidth = null,
      o.containerHeight = null,
      o.contentWidth = null,
      o.contentHeight = null,
      o.isRtl = "rtl" === u.css(t, "direction"),
      o.isNegativeScroll = (n = t.scrollLeft,
      r = null,
      t.scrollLeft = -1,
      r = t.scrollLeft < 0,
      t.scrollLeft = n,
      r),
      o.negativeScrollAdjustment = o.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0,
      o.event = new h,
      o.ownerDocument = t.ownerDocument || document,
      o.scrollbarXRail = u.appendTo(u.e("div", "ps-scrollbar-x-rail"), t),
      o.scrollbarX = u.appendTo(u.e("div", "ps-scrollbar-x"), o.scrollbarXRail),
      o.scrollbarX.setAttribute("tabindex", 0),
      o.event.bind(o.scrollbarX, "focus", e),
      o.event.bind(o.scrollbarX, "blur", i),
      o.scrollbarXActive = null,
      o.scrollbarXWidth = null,
      o.scrollbarXLeft = null,
      o.scrollbarXBottom = a.toInt(u.css(o.scrollbarXRail, "bottom")),
      o.isScrollbarXUsingBottom = o.scrollbarXBottom == o.scrollbarXBottom,
      o.scrollbarXTop = o.isScrollbarXUsingBottom ? null : a.toInt(u.css(o.scrollbarXRail, "top")),
      o.railBorderXWidth = a.toInt(u.css(o.scrollbarXRail, "borderLeftWidth")) + a.toInt(u.css(o.scrollbarXRail, "borderRightWidth")),
      u.css(o.scrollbarXRail, "display", "block"),
      o.railXMarginWidth = a.toInt(u.css(o.scrollbarXRail, "marginLeft")) + a.toInt(u.css(o.scrollbarXRail, "marginRight")),
      u.css(o.scrollbarXRail, "display", ""),
      o.railXWidth = null,
      o.railXRatio = null,
      o.scrollbarYRail = u.appendTo(u.e("div", "ps-scrollbar-y-rail"), t),
      o.scrollbarY = u.appendTo(u.e("div", "ps-scrollbar-y"), o.scrollbarYRail),
      o.scrollbarY.setAttribute("tabindex", 0),
      o.event.bind(o.scrollbarY, "focus", e),
      o.event.bind(o.scrollbarY, "blur", i),
      o.scrollbarYActive = null,
      o.scrollbarYHeight = null,
      o.scrollbarYTop = null,
      o.scrollbarYRight = a.toInt(u.css(o.scrollbarYRail, "right")),
      o.isScrollbarYUsingRight = o.scrollbarYRight == o.scrollbarYRight,
      o.scrollbarYLeft = o.isScrollbarYUsingRight ? null : a.toInt(u.css(o.scrollbarYRail, "left")),
      o.scrollbarYOuterWidth = o.isRtl ? a.outerWidth(o.scrollbarY) : null,
      o.railBorderYWidth = a.toInt(u.css(o.scrollbarYRail, "borderTopWidth")) + a.toInt(u.css(o.scrollbarYRail, "borderBottomWidth")),
      u.css(o.scrollbarYRail, "display", "block"),
      o.railYMarginHeight = a.toInt(u.css(o.scrollbarYRail, "marginTop")) + a.toInt(u.css(o.scrollbarYRail, "marginBottom")),
      u.css(o.scrollbarYRail, "display", ""),
      o.railYHeight = null,
      o.railYRatio = null
    }
    function r(t) {
      return t.getAttribute("data-ps-id")
    }
    function o(t, e) {
      t.setAttribute("data-ps-id", e)
    }
    function s(t) {
      t.removeAttribute("data-ps-id")
    }
    var a = t("../lib/helper")
      , l = t("../lib/class")
      , c = t("./default-setting")
      , u = t("../lib/dom")
      , h = t("../lib/event-manager")
      , d = t("../lib/guid")
      , p = {};
    i.add = function(t) {
      var e = d();
      return o(t, e),
      p[e] = new n(t),
      p[e]
    }
    ,
    i.remove = function(t) {
      delete p[r(t)],
      s(t)
    }
    ,
    i.get = function(t) {
      return p[r(t)]
    }
  }
  , {
    "../lib/class": 2,
    "../lib/dom": 3,
    "../lib/event-manager": 4,
    "../lib/guid": 5,
    "../lib/helper": 6,
    "./default-setting": 8
  }],
  19: [function(t, e) {
    "use strict";
    function n(t, e) {
      return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)),
      t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)),
      e
    }
    function r(t, e) {
      var i = {
        width: e.railXWidth
      };
      e.isRtl ? i.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : i.left = t.scrollLeft,
      e.isScrollbarXUsingBottom ? i.bottom = e.scrollbarXBottom - t.scrollTop : i.top = e.scrollbarXTop + t.scrollTop,
      a.css(e.scrollbarXRail, i);
      var n = {
        top: t.scrollTop,
        height: e.railYHeight
      };
      e.isScrollbarYUsingRight ? e.isRtl ? n.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : n.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : n.left = e.scrollbarYLeft + t.scrollLeft,
      a.css(e.scrollbarYRail, n),
      a.css(e.scrollbarX, {
        left: e.scrollbarXLeft,
        width: e.scrollbarXWidth - e.railBorderXWidth
      }),
      a.css(e.scrollbarY, {
        top: e.scrollbarYTop,
        height: e.scrollbarYHeight - e.railBorderYWidth
      })
    }
    var o = t("../lib/helper")
      , s = t("../lib/class")
      , a = t("../lib/dom")
      , l = t("./instances")
      , c = t("./update-scroll");
    e.exports = function(t) {
      var e, i = l.get(t);
      i.containerWidth = t.clientWidth,
      i.containerHeight = t.clientHeight,
      i.contentWidth = t.scrollWidth,
      i.contentHeight = t.scrollHeight,
      t.contains(i.scrollbarXRail) || (0 < (e = a.queryChildren(t, ".ps-scrollbar-x-rail")).length && e.forEach(function(t) {
        a.remove(t)
      }),
      a.appendTo(i.scrollbarXRail, t)),
      t.contains(i.scrollbarYRail) || (0 < (e = a.queryChildren(t, ".ps-scrollbar-y-rail")).length && e.forEach(function(t) {
        a.remove(t)
      }),
      a.appendTo(i.scrollbarYRail, t)),
      !i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth ? (i.scrollbarXActive = !0,
      i.railXWidth = i.containerWidth - i.railXMarginWidth,
      i.railXRatio = i.containerWidth / i.railXWidth,
      i.scrollbarXWidth = n(i, o.toInt(i.railXWidth * i.containerWidth / i.contentWidth)),
      i.scrollbarXLeft = o.toInt((i.negativeScrollAdjustment + t.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth))) : i.scrollbarXActive = !1,
      !i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight ? (i.scrollbarYActive = !0,
      i.railYHeight = i.containerHeight - i.railYMarginHeight,
      i.railYRatio = i.containerHeight / i.railYHeight,
      i.scrollbarYHeight = n(i, o.toInt(i.railYHeight * i.containerHeight / i.contentHeight)),
      i.scrollbarYTop = o.toInt(t.scrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight))) : i.scrollbarYActive = !1,
      i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth && (i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth),
      i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight && (i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight),
      r(t, i),
      i.scrollbarXActive ? s.add(t, "ps-active-x") : (s.remove(t, "ps-active-x"),
      i.scrollbarXWidth = 0,
      i.scrollbarXLeft = 0,
      c(t, "left", 0)),
      i.scrollbarYActive ? s.add(t, "ps-active-y") : (s.remove(t, "ps-active-y"),
      i.scrollbarYHeight = 0,
      i.scrollbarYTop = 0,
      c(t, "top", 0))
    }
  }
  , {
    "../lib/class": 2,
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18,
    "./update-scroll": 20
  }],
  20: [function(t, e) {
    "use strict";
    var r, o, s = t("./instances"), a = document.createEvent("Event"), l = document.createEvent("Event"), c = document.createEvent("Event"), u = document.createEvent("Event"), h = document.createEvent("Event"), d = document.createEvent("Event"), p = document.createEvent("Event"), f = document.createEvent("Event"), g = document.createEvent("Event"), m = document.createEvent("Event");
    a.initEvent("ps-scroll-up", !0, !0),
    l.initEvent("ps-scroll-down", !0, !0),
    c.initEvent("ps-scroll-left", !0, !0),
    u.initEvent("ps-scroll-right", !0, !0),
    h.initEvent("ps-scroll-y", !0, !0),
    d.initEvent("ps-scroll-x", !0, !0),
    p.initEvent("ps-x-reach-start", !0, !0),
    f.initEvent("ps-x-reach-end", !0, !0),
    g.initEvent("ps-y-reach-start", !0, !0),
    m.initEvent("ps-y-reach-end", !0, !0),
    e.exports = function(t, e, i) {
      if (void 0 === t)
        throw "You must provide an element to the update-scroll function";
      if (void 0 === e)
        throw "You must provide an axis to the update-scroll function";
      if (void 0 === i)
        throw "You must provide a value to the update-scroll function";
      "top" === e && i <= 0 && (t.scrollTop = i = 0,
      t.dispatchEvent(g)),
      "left" === e && i <= 0 && (t.scrollLeft = i = 0,
      t.dispatchEvent(p));
      var n = s.get(t);
      "top" === e && i >= n.contentHeight - n.containerHeight && ((i = n.contentHeight - n.containerHeight) - t.scrollTop <= 1 ? i = t.scrollTop : t.scrollTop = i,
      t.dispatchEvent(m)),
      "left" === e && i >= n.contentWidth - n.containerWidth && ((i = n.contentWidth - n.containerWidth) - t.scrollLeft <= 1 ? i = t.scrollLeft : t.scrollLeft = i,
      t.dispatchEvent(f)),
      r || (r = t.scrollTop),
      o || (o = t.scrollLeft),
      "top" === e && i < r && t.dispatchEvent(a),
      "top" === e && r < i && t.dispatchEvent(l),
      "left" === e && i < o && t.dispatchEvent(c),
      "left" === e && o < i && t.dispatchEvent(u),
      "top" === e && (t.scrollTop = r = i,
      t.dispatchEvent(h)),
      "left" === e && (t.scrollLeft = o = i,
      t.dispatchEvent(d))
    }
  }
  , {
    "./instances": 18
  }],
  21: [function(t, e) {
    "use strict";
    var i = t("../lib/helper")
      , n = t("../lib/dom")
      , r = t("./instances")
      , o = t("./update-geometry")
      , s = t("./update-scroll");
    e.exports = function(t) {
      var e = r.get(t);
      e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0,
      n.css(e.scrollbarXRail, "display", "block"),
      n.css(e.scrollbarYRail, "display", "block"),
      e.railXMarginWidth = i.toInt(n.css(e.scrollbarXRail, "marginLeft")) + i.toInt(n.css(e.scrollbarXRail, "marginRight")),
      e.railYMarginHeight = i.toInt(n.css(e.scrollbarYRail, "marginTop")) + i.toInt(n.css(e.scrollbarYRail, "marginBottom")),
      n.css(e.scrollbarXRail, "display", "none"),
      n.css(e.scrollbarYRail, "display", "none"),
      o(t),
      s(t, "top", t.scrollTop),
      s(t, "left", t.scrollLeft),
      n.css(e.scrollbarXRail, "display", ""),
      n.css(e.scrollbarYRail, "display", ""))
    }
  }
  , {
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18,
    "./update-geometry": 19,
    "./update-scroll": 20
  }]
}, {}, [1]),
function(t, e) {
  "function" == typeof define && define.amd ? define(function() {
    return e(t, t.document)
  }) : "undefined" != typeof module && module.exports ? module.exports = e(t, t.document) : t.Shake = e(t, t.document)
}("undefined" != typeof window ? window : this, function(o, i) {
  "use strict";
  function t(t) {
    if (this.hasDeviceMotion = "ondevicemotion"in o,
    this.options = {
      threshold: 15,
      timeout: 1e3
    },
    "object" == typeof t)
      for (var e in t)
        t.hasOwnProperty(e) && (this.options[e] = t[e]);
    if (this.lastTime = new Date,
    this.lastX = null,
    this.lastY = null,
    this.lastZ = null,
    "function" == typeof i.CustomEvent)
      this.event = new i.CustomEvent("shake",{
        bubbles: !0,
        cancelable: !0
      });
    else {
      if ("function" != typeof i.createEvent)
        return !1;
      this.event = i.createEvent("Event"),
      this.event.initEvent("shake", !0, !0)
    }
  }
  return t.prototype.reset = function() {
    this.lastTime = new Date,
    this.lastX = null,
    this.lastY = null,
    this.lastZ = null
  }
  ,
  t.prototype.start = function() {
    this.reset(),
    this.hasDeviceMotion && o.addEventListener("devicemotion", this, !1)
  }
  ,
  t.prototype.stop = function() {
    this.hasDeviceMotion && o.removeEventListener("devicemotion", this, !1),
    this.reset()
  }
  ,
  t.prototype.devicemotion = function(t) {
    var e = t.accelerationIncludingGravity;
    if (e) {
      var i = 0
        , n = 0
        , r = 0;
      if (null === this.lastX && null === this.lastY && null === this.lastZ)
        return this.lastX = e.x,
        this.lastY = e.y,
        void (this.lastZ = e.z);
      i = Math.abs(this.lastX - e.x),
      n = Math.abs(this.lastY - e.y),
      r = Math.abs(this.lastZ - e.z),
      (i > this.options.threshold && n > this.options.threshold || i > this.options.threshold && r > this.options.threshold || n > this.options.threshold && r > this.options.threshold) && (new Date).getTime() - this.lastTime.getTime() > this.options.timeout && (o.dispatchEvent(this.event),
      this.lastTime = new Date),
      this.lastX = e.x,
      this.lastY = e.y,
      this.lastZ = e.z
    }
  }
  ,
  t.prototype.handleEvent = function(t) {
    if ("function" == typeof this[t.type])
      return this[t.type](t)
  }
  ,
  t
}),
function(o, s, d) {
  function t(t, e) {
    for (var i in this.wrapper = "string" == typeof t ? s.querySelector(t) : t,
    this.scroller = this.wrapper.children[0],
    this.scrollerStyle = this.scroller.style,
    this.options = {
      resizeScrollbars: !0,
      mouseWheelSpeed: 20,
      snapThreshold: .334,
      disablePointer: !g.hasPointer,
      disableTouch: g.hasPointer || !g.hasTouch,
      disableMouse: g.hasPointer || g.hasTouch,
      startX: 0,
      startY: 0,
      scrollY: !0,
      directionLockThreshold: 5,
      momentum: !0,
      bounce: !0,
      bounceTime: 600,
      bounceEasing: "",
      preventDefault: !0,
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
      },
      HWCompositing: !0,
      useTransition: !0,
      useTransform: !0,
      bindToWrapper: "undefined" == typeof o.onmousedown
    },
    e)
      this.options[i] = e[i];
    this.translateZ = this.options.HWCompositing && g.hasPerspective ? " translateZ(0)" : "",
    this.options.useTransition = g.hasTransition && this.options.useTransition,
    this.options.useTransform = g.hasTransform && this.options.useTransform,
    this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough,
    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
    this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY,
    this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX,
    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
    this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? g.ease[this.options.bounceEasing] || g.ease.circular : this.options.bounceEasing,
    this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling,
    !0 === this.options.tap && (this.options.tap = "tap"),
    this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"),
    "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1),
    this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1,
    3 == this.options.probeType && (this.options.useTransition = !1),
    this.x = 0,
    this.y = 0,
    this.directionX = 0,
    this.directionY = 0,
    this._events = {},
    this._init(),
    this.refresh(),
    this.scrollTo(this.options.startX, this.options.startY),
    this.enable()
  }
  function a(t, e, i) {
    var n = s.createElement("div")
      , r = s.createElement("div");
    return !0 === i && (n.style.cssText = "position:absolute;z-index:9999",
    r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),
    r.className = "iScrollIndicator",
    "h" == t ? (!0 === i && (n.style.cssText += ";height:7px;left:2px;right:2px;bottom:0",
    r.style.height = "100%"),
    n.className = "iScrollHorizontalScrollbar") : (!0 === i && (n.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px",
    r.style.width = "100%"),
    n.className = "iScrollVerticalScrollbar"),
    n.style.cssText += ";overflow:hidden",
    e || (n.style.pointerEvents = "none"),
    n.appendChild(r),
    n
  }
  function l(t, e) {
    for (var i in this.wrapper = "string" == typeof e.el ? s.querySelector(e.el) : e.el,
    this.wrapperStyle = this.wrapper.style,
    this.indicator = this.wrapper.children[0],
    this.indicatorStyle = this.indicator.style,
    this.scroller = t,
    this.options = {
      listenX: !0,
      listenY: !0,
      interactive: !1,
      resize: !0,
      defaultScrollbars: !1,
      shrink: !1,
      fade: !1,
      speedRatioX: 0,
      speedRatioY: 0
    },
    e)
      this.options[i] = e[i];
    if (this.sizeRatioX = 1,
    this.sizeRatioY = 1,
    this.maxPosX = 0,
    this.maxPosY = 0,
    this.options.interactive && (this.options.disableTouch || (g.addEvent(this.indicator, "touchstart", this),
    g.addEvent(o, "touchend", this)),
    this.options.disablePointer || (g.addEvent(this.indicator, g.prefixPointerEvent("pointerdown"), this),
    g.addEvent(o, g.prefixPointerEvent("pointerup"), this)),
    this.options.disableMouse || (g.addEvent(this.indicator, "mousedown", this),
    g.addEvent(o, "mouseup", this))),
    this.options.fade) {
      this.wrapperStyle[g.style.transform] = this.scroller.translateZ;
      var n = g.style.transitionDuration;
      if (!n)
        return;
      this.wrapperStyle[n] = g.isBadAndroid ? "0.0001ms" : "0ms";
      var r = this;
      g.isBadAndroid && f(function() {
        "0.0001ms" === r.wrapperStyle[n] && (r.wrapperStyle[n] = "0s")
      }),
      this.wrapperStyle.opacity = "0"
    }
  }
  var f = o.requestAnimationFrame || o.webkitRequestAnimationFrame || o.mozRequestAnimationFrame || o.oRequestAnimationFrame || o.msRequestAnimationFrame || function(t) {
    o.setTimeout(t, 1e3 / 60)
  }
    , g = function() {
    function t(t) {
      return !1 !== e && ("" === e ? t : e + t.charAt(0).toUpperCase() + t.substr(1))
    }
    var n = {}
      , r = s.createElement("div").style
      , e = function() {
      for (var t = ["t", "webkitT", "MozT", "msT", "OT"], e = 0, i = t.length; e < i; e++)
        if (t[e] + "ransform"in r)
          return t[e].substr(0, t[e].length - 1);
      return !1
    }();
    n.getTime = Date.now || function() {
      return (new Date).getTime()
    }
    ,
    n.extend = function(t, e) {
      for (var i in e)
        t[i] = e[i]
    }
    ,
    n.addEvent = function(t, e, i, n) {
      t.addEventListener(e, i, !!n)
    }
    ,
    n.removeEvent = function(t, e, i, n) {
      t.removeEventListener(e, i, !!n)
    }
    ,
    n.prefixPointerEvent = function(t) {
      return o.MSPointerEvent ? "MSPointer" + t.charAt(7).toUpperCase() + t.substr(8) : t
    }
    ,
    n.momentum = function(t, e, i, n, r, o) {
      var s, a, l = t - e, c = d.abs(l) / i;
      return a = c / (o = o === undefined ? 6e-4 : o),
      (s = t + c * c / (2 * o) * (l < 0 ? -1 : 1)) < n ? (s = r ? n - r / 2.5 * (c / 8) : n,
      a = (l = d.abs(s - t)) / c) : 0 < s && (s = r ? r / 2.5 * (c / 8) : 0,
      a = (l = d.abs(t) + s) / c),
      {
        destination: d.round(s),
        duration: a
      }
    }
    ;
    var i = t("transform");
    return n.extend(n, {
      hasTransform: !1 !== i,
      hasPerspective: t("perspective")in r,
      hasTouch: "ontouchstart"in o,
      hasPointer: !(!o.PointerEvent && !o.MSPointerEvent),
      hasTransition: t("transition")in r
    }),
    n.isBadAndroid = function() {
      var t = o.navigator.appVersion;
      if (/Android/.test(t) && !/Chrome\/\d/.test(t)) {
        var e = t.match(/Safari\/(\d+.\d)/);
        return !(e && "object" == typeof e && 2 <= e.length) || parseFloat(e[1]) < 535.19
      }
      return !1
    }(),
    n.extend(n.style = {}, {
      transform: i,
      transitionTimingFunction: t("transitionTimingFunction"),
      transitionDuration: t("transitionDuration"),
      transitionDelay: t("transitionDelay"),
      transformOrigin: t("transformOrigin"),
      touchAction: t("touchAction")
    }),
    n.hasClass = function(t, e) {
      return new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
    }
    ,
    n.addClass = function(t, e) {
      if (!n.hasClass(t, e)) {
        var i = t.className.split(" ");
        i.push(e),
        t.className = i.join(" ")
      }
    }
    ,
    n.removeClass = function(t, e) {
      if (n.hasClass(t, e)) {
        var i = new RegExp("(^|\\s)" + e + "(\\s|$)","g");
        t.className = t.className.replace(i, " ")
      }
    }
    ,
    n.offset = function(t) {
      for (var e = -t.offsetLeft, i = -t.offsetTop; t = t.offsetParent; )
        e -= t.offsetLeft,
        i -= t.offsetTop;
      return {
        left: e,
        top: i
      }
    }
    ,
    n.preventDefaultException = function(t, e) {
      for (var i in e)
        if (e[i].test(t[i]))
          return !0;
      return !1
    }
    ,
    n.extend(n.eventType = {}, {
      touchstart: 1,
      touchmove: 1,
      touchend: 1,
      mousedown: 2,
      mousemove: 2,
      mouseup: 2,
      pointerdown: 3,
      pointermove: 3,
      pointerup: 3,
      MSPointerDown: 3,
      MSPointerMove: 3,
      MSPointerUp: 3
    }),
    n.extend(n.ease = {}, {
      quadratic: {
        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        fn: function(t) {
          return t * (2 - t)
        }
      },
      circular: {
        style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
        fn: function(t) {
          return d.sqrt(1 - --t * t)
        }
      },
      back: {
        style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        fn: function(t) {
          var e = 4;
          return (t -= 1) * t * ((e + 1) * t + e) + 1
        }
      },
      bounce: {
        style: "",
        fn: function(t) {
          return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }
      },
      elastic: {
        style: "",
        fn: function(t) {
          var e = .22;
          return 0 === t ? 0 : 1 == t ? 1 : .4 * d.pow(2, -10 * t) * d.sin((t - e / 4) * (2 * d.PI) / e) + 1
        }
      }
    }),
    n.tap = function(t, e) {
      var i = s.createEvent("Event");
      i.initEvent(e, !0, !0),
      i.pageX = t.pageX,
      i.pageY = t.pageY,
      t.target.dispatchEvent(i)
    }
    ,
    n.click = function(t) {
      var e, i = t.target;
      /(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) || ((e = s.createEvent(o.MouseEvent ? "MouseEvents" : "Event")).initEvent("click", !0, !0),
      e.view = t.view || o,
      e.detail = 1,
      e.screenX = i.screenX || 0,
      e.screenY = i.screenY || 0,
      e.clientX = i.clientX || 0,
      e.clientY = i.clientY || 0,
      e.ctrlKey = !!t.ctrlKey,
      e.altKey = !!t.altKey,
      e.shiftKey = !!t.shiftKey,
      e.metaKey = !!t.metaKey,
      e.button = 0,
      e.relatedTarget = null,
      e._constructed = !0,
      i.dispatchEvent(e))
    }
    ,
    n.getTouchAction = function(t, e) {
      var i = "none";
      return "vertical" === t ? i = "pan-y" : "horizontal" === t && (i = "pan-x"),
      e && "none" != i && (i += " pinch-zoom"),
      i
    }
    ,
    n.getRect = function(t) {
      if (t instanceof SVGElement) {
        var e = t.getBoundingClientRect();
        return {
          top: e.top,
          left: e.left,
          width: e.width,
          height: e.height
        }
      }
      return {
        top: t.offsetTop,
        left: t.offsetLeft,
        width: t.offsetWidth,
        height: t.offsetHeight
      }
    }
    ,
    n
  }();
  t.prototype = {
    version: "5.2.0-snapshot",
    _init: function() {
      this._initEvents(),
      (this.options.scrollbars || this.options.indicators) && this._initIndicators(),
      this.options.mouseWheel && this._initWheel(),
      this.options.snap && this._initSnap(),
      this.options.keyBindings && this._initKeys()
    },
    destroy: function() {
      this._initEvents(!0),
      clearTimeout(this.resizeTimeout),
      this.resizeTimeout = null,
      this._execEvent("destroy")
    },
    _transitionEnd: function(t) {
      t.target == this.scroller && this.isInTransition && (this._transitionTime(),
      this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1,
      this._execEvent("scrollEnd")))
    },
    _start: function(t) {
      if (1 != g.eventType[t.type] && 0 !== (t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2))
        return;
      if (this.enabled && (!this.initiated || g.eventType[t.type] === this.initiated) && (!this.options.ignoreEventException || !this.options.ignoreEventException(t))) {
        !this.options.preventDefault || g.isBadAndroid || g.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
        var e, i = t.touches ? t.touches[0] : t;
        this.initiated = g.eventType[t.type],
        this.moved = !1,
        this.distX = 0,
        this.distY = 0,
        this.directionX = 0,
        this.directionY = 0,
        this.directionLocked = 0,
        this.startTime = g.getTime(),
        this.options.useTransition && this.isInTransition ? (this._transitionTime(),
        this.isInTransition = !1,
        e = this.getComputedPosition(),
        this._translate(d.round(e.x), d.round(e.y)),
        this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1,
        this._execEvent("scrollEnd")),
        this.startX = this.x,
        this.startY = this.y,
        this.absStartX = this.x,
        this.absStartY = this.y,
        this.pointX = i.pageX,
        this.pointY = i.pageY,
        this._execEvent("beforeScrollStart")
      }
    },
    _move: function(t) {
      if (this.enabled && g.eventType[t.type] === this.initiated && (!this.options.ignoreEventException || !this.options.ignoreEventException(t))) {
        this.options.preventDefault && t.preventDefault();
        var e, i, n, r, o = t.touches ? t.touches[0] : t, s = o.pageX - this.pointX, a = o.pageY - this.pointY, l = g.getTime();
        if (this.pointX = o.pageX,
        this.pointY = o.pageY,
        this.distX += s,
        this.distY += a,
        n = d.abs(this.distX),
        r = d.abs(this.distY),
        !(300 < l - this.endTime && n < 10 && r < 10)) {
          if (this.directionLocked || this.options.freeScroll || (n > r + this.options.directionLockThreshold ? this.directionLocked = "h" : r >= n + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"),
          "h" == this.directionLocked) {
            if ("vertical" == this.options.eventPassthrough)
              t.preventDefault();
            else if ("horizontal" == this.options.eventPassthrough)
              return void (this.initiated = !1);
            a = 0
          } else if ("v" == this.directionLocked) {
            if ("horizontal" == this.options.eventPassthrough)
              t.preventDefault();
            else if ("vertical" == this.options.eventPassthrough)
              return void (this.initiated = !1);
            s = 0
          }
          s = this.hasHorizontalScroll ? s : 0,
          a = this.hasVerticalScroll ? a : 0,
          e = this.x + s,
          i = this.y + a,
          (0 < e || e < this.maxScrollX) && (e = this.options.bounce ? this.x + s / 3 : 0 < e ? 0 : this.maxScrollX),
          (0 < i || i < this.maxScrollY) && (i = this.options.bounce ? this.y + a / 3 : 0 < i ? 0 : this.maxScrollY),
          this.directionX = 0 < s ? -1 : s < 0 ? 1 : 0,
          this.directionY = 0 < a ? -1 : a < 0 ? 1 : 0,
          this.moved || this._execEvent("scrollStart"),
          this.moved = !0,
          this._translate(e, i),
          300 < l - this.startTime && (this.startTime = l,
          this.startX = this.x,
          this.startY = this.y,
          1 == this.options.probeType && this._execEvent("scroll")),
          1 < this.options.probeType && this._execEvent("scroll")
        }
      }
    },
    _end: function(t) {
      if (this.enabled && g.eventType[t.type] === this.initiated) {
        this.options.preventDefault && !g.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
        t.changedTouches && t.changedTouches[0];
        var e, i, n = g.getTime() - this.startTime, r = d.round(this.x), o = d.round(this.y), s = d.abs(r - this.startX), a = d.abs(o - this.startY), l = 0, c = "";
        if (this.isInTransition = 0,
        this.initiated = 0,
        this.endTime = g.getTime(),
        !this.resetPosition(this.options.bounceTime)) {
          if (this.scrollTo(r, o),
          !this.moved)
            return this.options.tap && g.tap(t, this.options.tap),
            this.options.click && g.click(t),
            void this._execEvent("scrollCancel");
          if (this._events.flick && n < 200 && s < 100 && a < 100)
            this._execEvent("flick");
          else {
            if (this.options.momentum && n < 300 && (e = this.hasHorizontalScroll ? g.momentum(this.x, this.startX, n, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
              destination: r,
              duration: 0
            },
            i = this.hasVerticalScroll ? g.momentum(this.y, this.startY, n, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
              destination: o,
              duration: 0
            },
            r = e.destination,
            o = i.destination,
            l = d.max(e.duration, i.duration),
            this.isInTransition = 1),
            this.options.snap) {
              var u = this._nearestSnap(r, o);
              this.currentPage = u,
              l = this.options.snapSpeed || d.max(d.max(d.min(d.abs(r - u.x), 1e3), d.min(d.abs(o - u.y), 1e3)), 300),
              r = u.x,
              o = u.y,
              this.directionX = 0,
              this.directionY = 0,
              c = this.options.bounceEasing
            }
            if (r != this.x || o != this.y)
              return (0 < r || r < this.maxScrollX || 0 < o || o < this.maxScrollY) && (c = g.ease.quadratic),
              void this.scrollTo(r, o, l, c);
            this._execEvent("scrollEnd")
          }
        }
      }
    },
    _resize: function() {
      var t = this;
      clearTimeout(this.resizeTimeout),
      this.resizeTimeout = setTimeout(function() {
        t.refresh()
      }, this.options.resizePolling)
    },
    resetPosition: function(t) {
      var e = this.x
        , i = this.y;
      return t = t || 0,
      !this.hasHorizontalScroll || 0 < this.x ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX),
      !this.hasVerticalScroll || 0 < this.y ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY),
      (e != this.x || i != this.y) && (this.scrollTo(e, i, t, this.options.bounceEasing),
      !0)
    },
    disable: function() {
      this.enabled = !1
    },
    enable: function() {
      this.enabled = !0
    },
    refresh: function() {
      g.getRect(this.wrapper),
      this.wrapperWidth = this.wrapper.clientWidth,
      this.wrapperHeight = this.wrapper.clientHeight;
      var t = g.getRect(this.scroller);
      this.scrollerWidth = t.width,
      this.scrollerHeight = t.height,
      this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
      this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
      this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
      this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
      this.hasHorizontalScroll || (this.maxScrollX = 0,
      this.scrollerWidth = this.wrapperWidth),
      this.hasVerticalScroll || (this.maxScrollY = 0,
      this.scrollerHeight = this.wrapperHeight),
      this.endTime = 0,
      this.directionX = 0,
      this.directionY = 0,
      g.hasPointer && !this.options.disablePointer && (this.wrapper.style[g.style.touchAction] = g.getTouchAction(this.options.eventPassthrough, !0),
      this.wrapper.style[g.style.touchAction] || (this.wrapper.style[g.style.touchAction] = g.getTouchAction(this.options.eventPassthrough, !1))),
      this.wrapperOffset = g.offset(this.wrapper),
      this._execEvent("refresh"),
      this.resetPosition()
    },
    on: function(t, e) {
      this._events[t] || (this._events[t] = []),
      this._events[t].push(e)
    },
    off: function(t, e) {
      if (this._events[t]) {
        var i = this._events[t].indexOf(e);
        -1 < i && this._events[t].splice(i, 1)
      }
    },
    _execEvent: function(t) {
      if (this._events[t]) {
        var e = 0
          , i = this._events[t].length;
        if (i)
          for (; e < i; e++)
            this._events[t][e].apply(this, [].slice.call(arguments, 1))
      }
    },
    scrollBy: function(t, e, i, n) {
      t = this.x + t,
      e = this.y + e,
      i = i || 0,
      this.scrollTo(t, e, i, n)
    },
    scrollTo: function(t, e, i, n) {
      n = n || g.ease.circular,
      this.isInTransition = this.options.useTransition && 0 < i;
      var r = this.options.useTransition && n.style;
      !i || r ? (r && (this._transitionTimingFunction(n.style),
      this._transitionTime(i)),
      this._translate(t, e)) : this._animate(t, e, i, n.fn)
    },
    scrollToElement: function(t, e, i, n, r) {
      if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
        var o = g.offset(t);
        o.left -= this.wrapperOffset.left,
        o.top -= this.wrapperOffset.top;
        var s = g.getRect(t)
          , a = g.getRect(this.wrapper);
        !0 === i && (i = d.round(s.width / 2 - a.width / 2)),
        !0 === n && (n = d.round(s.height / 2 - a.height / 2)),
        o.left -= i || 0,
        o.top -= n || 0,
        o.left = 0 < o.left ? 0 : o.left < this.maxScrollX ? this.maxScrollX : o.left,
        o.top = 0 < o.top ? 0 : o.top < this.maxScrollY ? this.maxScrollY : o.top,
        e = e === undefined || null === e || "auto" === e ? d.max(d.abs(this.x - o.left), d.abs(this.y - o.top)) : e,
        this.scrollTo(o.left, o.top, e, r)
      }
    },
    _transitionTime: function(t) {
      if (this.options.useTransition) {
        t = t || 0;
        var e = g.style.transitionDuration;
        if (e) {
          if (this.scrollerStyle[e] = t + "ms",
          !t && g.isBadAndroid) {
            this.scrollerStyle[e] = "0.0001ms";
            var i = this;
            f(function() {
              "0.0001ms" === i.scrollerStyle[e] && (i.scrollerStyle[e] = "0s")
            })
          }
          if (this.indicators)
            for (var n = this.indicators.length; n--; )
              this.indicators[n].transitionTime(t)
        }
      }
    },
    _transitionTimingFunction: function(t) {
      if (this.scrollerStyle[g.style.transitionTimingFunction] = t,
      this.indicators)
        for (var e = this.indicators.length; e--; )
          this.indicators[e].transitionTimingFunction(t)
    },
    _translate: function(t, e) {
      if (this.options.useTransform ? this.scrollerStyle[g.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = d.round(t),
      e = d.round(e),
      this.scrollerStyle.left = t + "px",
      this.scrollerStyle.top = e + "px"),
      this.x = t,
      this.y = e,
      this.indicators)
        for (var i = this.indicators.length; i--; )
          this.indicators[i].updatePosition()
    },
    _initEvents: function(t) {
      var e = t ? g.removeEvent : g.addEvent
        , i = this.options.bindToWrapper ? this.wrapper : o;
      e(o, "orientationchange", this),
      e(o, "resize", this),
      this.options.click && e(this.wrapper, "click", this, !0),
      this.options.disableMouse || (e(this.wrapper, "mousedown", this),
      e(i, "mousemove", this),
      e(i, "mousecancel", this),
      e(i, "mouseup", this)),
      g.hasPointer && !this.options.disablePointer && (e(this.wrapper, g.prefixPointerEvent("pointerdown"), this),
      e(i, g.prefixPointerEvent("pointermove"), this),
      e(i, g.prefixPointerEvent("pointercancel"), this),
      e(i, g.prefixPointerEvent("pointerup"), this)),
      g.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this),
      e(i, "touchmove", this),
      e(i, "touchcancel", this),
      e(i, "touchend", this)),
      e(this.scroller, "transitionend", this),
      e(this.scroller, "webkitTransitionEnd", this),
      e(this.scroller, "oTransitionEnd", this),
      e(this.scroller, "MSTransitionEnd", this)
    },
    getComputedPosition: function() {
      var t, e, i = o.getComputedStyle(this.scroller, null);
      return this.options.useTransform ? (t = +((i = i[g.style.transform].split(")")[0].split(", "))[12] || i[4]),
      e = +(i[13] || i[5])) : (t = +i.left.replace(/[^-\d.]/g, ""),
      e = +i.top.replace(/[^-\d.]/g, "")),
      {
        x: t,
        y: e
      }
    },
    _initIndicators: function() {
      function t(t) {
        if (o.indicators)
          for (var e = o.indicators.length; e--; )
            t.call(o.indicators[e])
      }
      var e, i = this.options.interactiveScrollbars, n = "string" != typeof this.options.scrollbars, r = [], o = this;
      this.indicators = [],
      this.options.scrollbars && (this.options.scrollY && (e = {
        el: a("v", i, this.options.scrollbars),
        interactive: i,
        defaultScrollbars: !0,
        customStyle: n,
        resize: this.options.resizeScrollbars,
        shrink: this.options.shrinkScrollbars,
        fade: this.options.fadeScrollbars,
        listenX: !1
      },
      this.wrapper.appendChild(e.el),
      r.push(e)),
      this.options.scrollX && (e = {
        el: a("h", i, this.options.scrollbars),
        interactive: i,
        defaultScrollbars: !0,
        customStyle: n,
        resize: this.options.resizeScrollbars,
        shrink: this.options.shrinkScrollbars,
        fade: this.options.fadeScrollbars,
        listenY: !1
      },
      this.wrapper.appendChild(e.el),
      r.push(e))),
      this.options.indicators && (r = r.concat(this.options.indicators));
      for (var s = r.length; s--; )
        this.indicators.push(new l(this,r[s]));
      this.options.fadeScrollbars && (this.on("scrollEnd", function() {
        t(function() {
          this.fade()
        })
      }),
      this.on("scrollCancel", function() {
        t(function() {
          this.fade()
        })
      }),
      this.on("scrollStart", function() {
        t(function() {
          this.fade(1)
        })
      }),
      this.on("beforeScrollStart", function() {
        t(function() {
          this.fade(1, !0)
        })
      })),
      this.on("refresh", function() {
        t(function() {
          this.refresh()
        })
      }),
      this.on("destroy", function() {
        t(function() {
          this.destroy()
        }),
        delete this.indicators
      })
    },
    _initWheel: function() {
      g.addEvent(this.wrapper, "wheel", this),
      g.addEvent(this.wrapper, "mousewheel", this),
      g.addEvent(this.wrapper, "DOMMouseScroll", this),
      this.on("destroy", function() {
        clearTimeout(this.wheelTimeout),
        this.wheelTimeout = null,
        g.removeEvent(this.wrapper, "wheel", this),
        g.removeEvent(this.wrapper, "mousewheel", this),
        g.removeEvent(this.wrapper, "DOMMouseScroll", this)
      })
    },
    _wheel: function(t) {
      if (this.enabled) {
        t.preventDefault();
        var e, i, n, r, o = this;
        if (this.wheelTimeout === undefined && o._execEvent("scrollStart"),
        clearTimeout(this.wheelTimeout),
        this.wheelTimeout = setTimeout(function() {
          o.options.snap || o._execEvent("scrollEnd"),
          o.wheelTimeout = undefined
        }, 400),
        "deltaX"in t)
          1 === t.deltaMode ? (e = -t.deltaX * this.options.mouseWheelSpeed,
          i = -t.deltaY * this.options.mouseWheelSpeed) : (e = -t.deltaX,
          i = -t.deltaY);
        else if ("wheelDeltaX"in t)
          e = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed,
          i = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
        else if ("wheelDelta"in t)
          e = i = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
        else {
          if (!("detail"in t))
            return;
          e = i = -t.detail / 3 * this.options.mouseWheelSpeed
        }
        if (e *= this.options.invertWheelDirection,
        i *= this.options.invertWheelDirection,
        this.hasVerticalScroll || (e = i,
        i = 0),
        this.options.snap)
          return n = this.currentPage.pageX,
          r = this.currentPage.pageY,
          0 < e ? n-- : e < 0 && n++,
          0 < i ? r-- : i < 0 && r++,
          void this.goToPage(n, r);
        n = this.x + d.round(this.hasHorizontalScroll ? e : 0),
        r = this.y + d.round(this.hasVerticalScroll ? i : 0),
        this.directionX = 0 < e ? -1 : e < 0 ? 1 : 0,
        this.directionY = 0 < i ? -1 : i < 0 ? 1 : 0,
        0 < n ? n = 0 : n < this.maxScrollX && (n = this.maxScrollX),
        0 < r ? r = 0 : r < this.maxScrollY && (r = this.maxScrollY),
        this.scrollTo(n, r, 0),
        1 < this.options.probeType && this._execEvent("scroll")
      }
    },
    _initSnap: function() {
      this.currentPage = {},
      "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
      this.on("refresh", function() {
        var t, e, i, n, r, o, s, a = 0, l = 0, c = 0, u = this.options.snapStepX || this.wrapperWidth, h = this.options.snapStepY || this.wrapperHeight;
        if (this.pages = [],
        this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
          if (!0 === this.options.snap)
            for (i = d.round(u / 2),
            n = d.round(h / 2); c > -this.scrollerWidth; ) {
              for (this.pages[a] = [],
              r = t = 0; r > -this.scrollerHeight; )
                this.pages[a][t] = {
                  x: d.max(c, this.maxScrollX),
                  y: d.max(r, this.maxScrollY),
                  width: u,
                  height: h,
                  cx: c - i,
                  cy: r - n
                },
                r -= h,
                t++;
              c -= u,
              a++
            }
          else
            for (t = (o = this.options.snap).length,
            e = -1; a < t; a++)
              s = g.getRect(o[a]),
              (0 === a || s.left <= g.getRect(o[a - 1]).left) && (l = 0,
              e++),
              this.pages[l] || (this.pages[l] = []),
              c = d.max(-s.left, this.maxScrollX),
              r = d.max(-s.top, this.maxScrollY),
              i = c - d.round(s.width / 2),
              n = r - d.round(s.height / 2),
              this.pages[l][e] = {
                x: c,
                y: r,
                width: s.width,
                height: s.height,
                cx: i,
                cy: n
              },
              c > this.maxScrollX && l++;
          this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0),
          this.options.snapThreshold % 1 == 0 ? (this.snapThresholdX = this.options.snapThreshold,
          this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = d.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold),
          this.snapThresholdY = d.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
        }
      }),
      this.on("flick", function() {
        var t = this.options.snapSpeed || d.max(d.max(d.min(d.abs(this.x - this.startX), 1e3), d.min(d.abs(this.y - this.startY), 1e3)), 300);
        this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
      })
    },
    _nearestSnap: function(t, e) {
      if (!this.pages.length)
        return {
          x: 0,
          y: 0,
          pageX: 0,
          pageY: 0
        };
      var i = 0
        , n = this.pages.length
        , r = 0;
      if (d.abs(t - this.absStartX) < this.snapThresholdX && d.abs(e - this.absStartY) < this.snapThresholdY)
        return this.currentPage;
      for (0 < t ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX),
      0 < e ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY); i < n; i++)
        if (t >= this.pages[i][0].cx) {
          t = this.pages[i][0].x;
          break
        }
      for (n = this.pages[i].length; r < n; r++)
        if (e >= this.pages[0][r].cy) {
          e = this.pages[0][r].y;
          break
        }
      return i == this.currentPage.pageX && ((i += this.directionX) < 0 ? i = 0 : i >= this.pages.length && (i = this.pages.length - 1),
      t = this.pages[i][0].x),
      r == this.currentPage.pageY && ((r += this.directionY) < 0 ? r = 0 : r >= this.pages[0].length && (r = this.pages[0].length - 1),
      e = this.pages[0][r].y),
      {
        x: t,
        y: e,
        pageX: i,
        pageY: r
      }
    },
    goToPage: function(t, e, i, n) {
      n = n || this.options.bounceEasing,
      t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0),
      e >= this.pages[t].length ? e = this.pages[t].length - 1 : e < 0 && (e = 0);
      var r = this.pages[t][e].x
        , o = this.pages[t][e].y;
      i = i === undefined ? this.options.snapSpeed || d.max(d.max(d.min(d.abs(r - this.x), 1e3), d.min(d.abs(o - this.y), 1e3)), 300) : i,
      this.currentPage = {
        x: r,
        y: o,
        pageX: t,
        pageY: e
      },
      this.scrollTo(r, o, i, n)
    },
    next: function(t, e) {
      var i = this.currentPage.pageX
        , n = this.currentPage.pageY;
      ++i >= this.pages.length && this.hasVerticalScroll && (i = 0,
      n++),
      this.goToPage(i, n, t, e)
    },
    prev: function(t, e) {
      var i = this.currentPage.pageX
        , n = this.currentPage.pageY;
      --i < 0 && this.hasVerticalScroll && (i = 0,
      n--),
      this.goToPage(i, n, t, e)
    },
    _initKeys: function() {
      var t, e = {
        pageUp: 33,
        pageDown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40
      };
      if ("object" == typeof this.options.keyBindings)
        for (t in this.options.keyBindings)
          "string" == typeof this.options.keyBindings[t] && (this.options.keyBindings[t] = this.options.keyBindings[t].toUpperCase().charCodeAt(0));
      else
        this.options.keyBindings = {};
      for (t in e)
        this.options.keyBindings[t] = this.options.keyBindings[t] || e[t];
      g.addEvent(o, "keydown", this),
      this.on("destroy", function() {
        g.removeEvent(o, "keydown", this)
      })
    },
    _key: function(t) {
      if (this.enabled) {
        var e, i = this.options.snap, n = i ? this.currentPage.pageX : this.x, r = i ? this.currentPage.pageY : this.y, o = g.getTime(), s = this.keyTime || 0, a = .25;
        switch (this.options.useTransition && this.isInTransition && (e = this.getComputedPosition(),
        this._translate(d.round(e.x), d.round(e.y)),
        this.isInTransition = !1),
        this.keyAcceleration = o - s < 200 ? d.min(this.keyAcceleration + a, 50) : 0,
        t.keyCode) {
        case this.options.keyBindings.pageUp:
          this.hasHorizontalScroll && !this.hasVerticalScroll ? n += i ? 1 : this.wrapperWidth : r += i ? 1 : this.wrapperHeight;
          break;
        case this.options.keyBindings.pageDown:
          this.hasHorizontalScroll && !this.hasVerticalScroll ? n -= i ? 1 : this.wrapperWidth : r -= i ? 1 : this.wrapperHeight;
          break;
        case this.options.keyBindings.end:
          n = i ? this.pages.length - 1 : this.maxScrollX,
          r = i ? this.pages[0].length - 1 : this.maxScrollY;
          break;
        case this.options.keyBindings.home:
          r = n = 0;
          break;
        case this.options.keyBindings.left:
          n += i ? -1 : 5 + this.keyAcceleration >> 0;
          break;
        case this.options.keyBindings.up:
          r += i ? 1 : 5 + this.keyAcceleration >> 0;
          break;
        case this.options.keyBindings.right:
          n -= i ? -1 : 5 + this.keyAcceleration >> 0;
          break;
        case this.options.keyBindings.down:
          r -= i ? 1 : 5 + this.keyAcceleration >> 0;
          break;
        default:
          return
        }
        i ? this.goToPage(n, r) : (0 < n ? (n = 0,
        this.keyAcceleration = 0) : n < this.maxScrollX && (n = this.maxScrollX,
        this.keyAcceleration = 0),
        0 < r ? (r = 0,
        this.keyAcceleration = 0) : r < this.maxScrollY && (r = this.maxScrollY,
        this.keyAcceleration = 0),
        this.scrollTo(n, r, 0),
        this.keyTime = o)
      }
    },
    _animate: function(r, o, s, a) {
      function l() {
        var t, e, i, n = g.getTime();
        if (p <= n)
          return c.isAnimating = !1,
          c._translate(r, o),
          void (c.resetPosition(c.options.bounceTime) || c._execEvent("scrollEnd"));
        i = a(n = (n - d) / s),
        t = (r - u) * i + u,
        e = (o - h) * i + h,
        c._translate(t, e),
        c.isAnimating && f(l),
        3 == c.options.probeType && c._execEvent("scroll")
      }
      var c = this
        , u = this.x
        , h = this.y
        , d = g.getTime()
        , p = d + s;
      this.isAnimating = !0,
      l()
    },
    handleEvent: function(t) {
      switch (t.type) {
      case "touchstart":
      case "pointerdown":
      case "MSPointerDown":
      case "mousedown":
        this._start(t);
        break;
      case "touchmove":
      case "pointermove":
      case "MSPointerMove":
      case "mousemove":
        this._move(t);
        break;
      case "touchend":
      case "pointerup":
      case "MSPointerUp":
      case "mouseup":
      case "touchcancel":
      case "pointercancel":
      case "MSPointerCancel":
      case "mousecancel":
        this._end(t);
        break;
      case "orientationchange":
      case "resize":
        this._resize();
        break;
      case "transitionend":
      case "webkitTransitionEnd":
      case "oTransitionEnd":
      case "MSTransitionEnd":
        this._transitionEnd(t);
        break;
      case "wheel":
      case "DOMMouseScroll":
      case "mousewheel":
        this._wheel(t);
        break;
      case "keydown":
        this._key(t);
        break;
      case "click":
        this.enabled && !t._constructed && (t.preventDefault(),
        t.stopPropagation())
      }
    }
  },
  l.prototype = {
    handleEvent: function(t) {
      switch (t.type) {
      case "touchstart":
      case "pointerdown":
      case "MSPointerDown":
      case "mousedown":
        this._start(t);
        break;
      case "touchmove":
      case "pointermove":
      case "MSPointerMove":
      case "mousemove":
        this._move(t);
        break;
      case "touchend":
      case "pointerup":
      case "MSPointerUp":
      case "mouseup":
      case "touchcancel":
      case "pointercancel":
      case "MSPointerCancel":
      case "mousecancel":
        this._end(t)
      }
    },
    destroy: function() {
      this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout),
      this.fadeTimeout = null),
      this.options.interactive && (g.removeEvent(this.indicator, "touchstart", this),
      g.removeEvent(this.indicator, g.prefixPointerEvent("pointerdown"), this),
      g.removeEvent(this.indicator, "mousedown", this),
      g.removeEvent(o, "touchmove", this),
      g.removeEvent(o, g.prefixPointerEvent("pointermove"), this),
      g.removeEvent(o, "mousemove", this),
      g.removeEvent(o, "touchend", this),
      g.removeEvent(o, g.prefixPointerEvent("pointerup"), this),
      g.removeEvent(o, "mouseup", this)),
      this.options.defaultScrollbars && this.wrapper.parentNode && this.wrapper.parentNode.removeChild(this.wrapper)
    },
    _start: function(t) {
      var e = t.touches ? t.touches[0] : t;
      t.preventDefault(),
      t.stopPropagation(),
      this.transitionTime(),
      this.initiated = !0,
      this.moved = !1,
      this.lastPointX = e.pageX,
      this.lastPointY = e.pageY,
      this.startTime = g.getTime(),
      this.options.disableTouch || g.addEvent(o, "touchmove", this),
      this.options.disablePointer || g.addEvent(o, g.prefixPointerEvent("pointermove"), this),
      this.options.disableMouse || g.addEvent(o, "mousemove", this),
      this.scroller._execEvent("beforeScrollStart")
    },
    _move: function(t) {
      var e, i, n, r, o = t.touches ? t.touches[0] : t, s = g.getTime();
      this.moved || this.scroller._execEvent("scrollStart"),
      this.moved = !0,
      e = o.pageX - this.lastPointX,
      this.lastPointX = o.pageX,
      i = o.pageY - this.lastPointY,
      this.lastPointY = o.pageY,
      n = this.x + e,
      r = this.y + i,
      this._pos(n, r),
      1 == this.scroller.options.probeType && 300 < s - this.startTime ? (this.startTime = s,
      this.scroller._execEvent("scroll")) : 1 < this.scroller.options.probeType && this.scroller._execEvent("scroll"),
      t.preventDefault(),
      t.stopPropagation()
    },
    _end: function(t) {
      if (this.initiated) {
        if (this.initiated = !1,
        t.preventDefault(),
        t.stopPropagation(),
        g.removeEvent(o, "touchmove", this),
        g.removeEvent(o, g.prefixPointerEvent("pointermove"), this),
        g.removeEvent(o, "mousemove", this),
        this.scroller.options.snap) {
          var e = this.scroller._nearestSnap(this.scroller.x, this.scroller.y)
            , i = this.options.snapSpeed || d.max(d.max(d.min(d.abs(this.scroller.x - e.x), 1e3), d.min(d.abs(this.scroller.y - e.y), 1e3)), 300);
          this.scroller.x == e.x && this.scroller.y == e.y || (this.scroller.directionX = 0,
          this.scroller.directionY = 0,
          this.scroller.currentPage = e,
          this.scroller.scrollTo(e.x, e.y, i, this.scroller.options.bounceEasing))
        }
        this.moved && this.scroller._execEvent("scrollEnd")
      }
    },
    transitionTime: function(t) {
      t = t || 0;
      var e = g.style.transitionDuration;
      if (e && (this.indicatorStyle[e] = t + "ms",
      !t && g.isBadAndroid)) {
        this.indicatorStyle[e] = "0.0001ms";
        var i = this;
        f(function() {
          "0.0001ms" === i.indicatorStyle[e] && (i.indicatorStyle[e] = "0s")
        })
      }
    },
    transitionTimingFunction: function(t) {
      this.indicatorStyle[g.style.transitionTimingFunction] = t
    },
    refresh: function() {
      this.transitionTime(),
      this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none",
      this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (g.addClass(this.wrapper, "iScrollBothScrollbars"),
      g.removeClass(this.wrapper, "iScrollLoneScrollbar"),
      this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (g.removeClass(this.wrapper, "iScrollBothScrollbars"),
      g.addClass(this.wrapper, "iScrollLoneScrollbar"),
      this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px")),
      g.getRect(this.wrapper),
      this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth,
      this.options.resize ? (this.indicatorWidth = d.max(d.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8),
      this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth,
      this.maxPosX = this.wrapperWidth - this.indicatorWidth,
      "clip" == this.options.shrink ? (this.minBoundaryX = 8 - this.indicatorWidth,
      this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0,
      this.maxBoundaryX = this.maxPosX),
      this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX),
      this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight,
      this.options.resize ? (this.indicatorHeight = d.max(d.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8),
      this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight,
      this.maxPosY = this.wrapperHeight - this.indicatorHeight,
      "clip" == this.options.shrink ? (this.minBoundaryY = 8 - this.indicatorHeight,
      this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0,
      this.maxBoundaryY = this.maxPosY),
      this.maxPosY = this.wrapperHeight - this.indicatorHeight,
      this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY),
      this.updatePosition()
    },
    updatePosition: function() {
      var t = this.options.listenX && d.round(this.sizeRatioX * this.scroller.x) || 0
        , e = this.options.listenY && d.round(this.sizeRatioY * this.scroller.y) || 0;
      this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = d.max(this.indicatorWidth + t, 8),
      this.indicatorStyle.width = this.width + "px"),
      t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = d.max(this.indicatorWidth - (t - this.maxPosX), 8),
      this.indicatorStyle.width = this.width + "px",
      t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth,
      this.indicatorStyle.width = this.width + "px"),
      e < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = d.max(this.indicatorHeight + 3 * e, 8),
      this.indicatorStyle.height = this.height + "px"),
      e = this.minBoundaryY) : e > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = d.max(this.indicatorHeight - 3 * (e - this.maxPosY), 8),
      this.indicatorStyle.height = this.height + "px",
      e = this.maxPosY + this.indicatorHeight - this.height) : e = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight,
      this.indicatorStyle.height = this.height + "px")),
      this.x = t,
      this.y = e,
      this.scroller.options.useTransform ? this.indicatorStyle[g.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px",
      this.indicatorStyle.top = e + "px")
    },
    _pos: function(t, e) {
      t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX),
      e < 0 ? e = 0 : e > this.maxPosY && (e = this.maxPosY),
      t = this.options.listenX ? d.round(t / this.sizeRatioX) : this.scroller.x,
      e = this.options.listenY ? d.round(e / this.sizeRatioY) : this.scroller.y,
      this.scroller.scrollTo(t, e)
    },
    fade: function(t, e) {
      if (!e || this.visible) {
        clearTimeout(this.fadeTimeout),
        this.fadeTimeout = null;
        var i = t ? 250 : 500
          , n = t ? 0 : 300;
        t = t ? "1" : "0",
        this.wrapperStyle[g.style.transitionDuration] = i + "ms",
        this.fadeTimeout = setTimeout(function(t) {
          this.wrapperStyle.opacity = t,
          this.visible = +t
        }
        .bind(this, t), n)
      }
    }
  },
  t.utils = g,
  "undefined" != typeof module && module.exports ? module.exports = t : "function" == typeof define && define.amd ? define(function() {
    return t
  }) : o.IScroll = t
}(window, document, Math),
function(u, l) {
  "use strict";
  var c;
  u.rails !== l && u.error("jquery-ujs has already been loaded!");
  var t = u(document);
  u.rails = c = {
    linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
    buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
    inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
    formSubmitSelector: "form",
    formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
    disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
    enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
    requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
    fileInputSelector: "input[name][type=file]:not([disabled])",
    linkDisableSelector: "a[data-disable-with], a[data-disable]",
    buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
    csrfToken: function() {
      return u("meta[name=csrf-token]").attr("content")
    },
    csrfParam: function() {
      return u("meta[name=csrf-param]").attr("content")
    },
    CSRFProtection: function(t) {
      var e = c.csrfToken();
      e && t.setRequestHeader("X-CSRF-Token", e)
    },
    refreshCSRFTokens: function() {
      u('form input[name="' + c.csrfParam() + '"]').val(c.csrfToken())
    },
    fire: function(t, e, i) {
      var n = u.Event(e);
      return t.trigger(n, i),
      !1 !== n.result
    },
    confirm: function(t) {
      return confirm(t)
    },
    ajax: function(t) {
      return u.ajax(t)
    },
    href: function(t) {
      return t[0].href
    },
    isRemote: function(t) {
      return t.data("remote") !== l && !1 !== t.data("remote")
    },
    handleRemote: function(n) {
      var t, e, i, r, o, s;
      if (c.fire(n, "ajax:before")) {
        if (r = n.data("with-credentials") || null,
        o = n.data("type") || u.ajaxSettings && u.ajaxSettings.dataType,
        n.is("form")) {
          t = n.data("ujs:submit-button-formmethod") || n.attr("method"),
          e = n.data("ujs:submit-button-formaction") || n.attr("action"),
          i = u(n[0]).serializeArray();
          var a = n.data("ujs:submit-button");
          a && (i.push(a),
          n.data("ujs:submit-button", null)),
          n.data("ujs:submit-button-formmethod", null),
          n.data("ujs:submit-button-formaction", null)
        } else
          n.is(c.inputChangeSelector) ? (t = n.data("method"),
          e = n.data("url"),
          i = n.serialize(),
          n.data("params") && (i = i + "&" + n.data("params"))) : n.is(c.buttonClickSelector) ? (t = n.data("method") || "get",
          e = n.data("url"),
          i = n.serialize(),
          n.data("params") && (i = i + "&" + n.data("params"))) : (t = n.data("method"),
          e = c.href(n),
          i = n.data("params") || null);
        return s = {
          type: t || "GET",
          data: i,
          dataType: o,
          beforeSend: function(t, e) {
            if (e.dataType === l && t.setRequestHeader("accept", "*/*;q=0.5, " + e.accepts.script),
            !c.fire(n, "ajax:beforeSend", [t, e]))
              return !1;
            n.trigger("ajax:send", t)
          },
          success: function(t, e, i) {
            n.trigger("ajax:success", [t, e, i])
          },
          complete: function(t, e) {
            n.trigger("ajax:complete", [t, e])
          },
          error: function(t, e, i) {
            n.trigger("ajax:error", [t, e, i])
          },
          crossDomain: c.isCrossDomain(e)
        },
        r && (s.xhrFields = {
          withCredentials: r
        }),
        e && (s.url = e),
        c.ajax(s)
      }
      return !1
    },
    isCrossDomain: function(t) {
      var e = document.createElement("a");
      e.href = location.href;
      var i = document.createElement("a");
      try {
        return i.href = t,
        i.href = i.href,
        !((!i.protocol || ":" === i.protocol) && !i.host || e.protocol + "//" + e.host == i.protocol + "//" + i.host)
      } catch (n) {
        return !0
      }
    },
    handleMethod: function(t) {
      var e = c.href(t)
        , i = t.data("method")
        , n = t.attr("target")
        , r = c.csrfToken()
        , o = c.csrfParam()
        , s = u('<form method="post" action="' + e + '"></form>')
        , a = '<input name="_method" value="' + i + '" type="hidden" />';
      o === l || r === l || c.isCrossDomain(e) || (a += '<input name="' + o + '" value="' + r + '" type="hidden" />'),
      n && s.attr("target", n),
      s.hide().append(a).appendTo("body"),
      s.submit()
    },
    formElements: function(t, e) {
      return t.is("form") ? u(t[0].elements).filter(e) : t.find(e)
    },
    disableFormElements: function(t) {
      c.formElements(t, c.disableSelector).each(function() {
        c.disableFormElement(u(this))
      })
    },
    disableFormElement: function(t) {
      var e, i;
      e = t.is("button") ? "html" : "val",
      (i = t.data("disable-with")) !== l && (t.data("ujs:enable-with", t[e]()),
      t[e](i)),
      t.prop("disabled", !0),
      t.data("ujs:disabled", !0)
    },
    enableFormElements: function(t) {
      c.formElements(t, c.enableSelector).each(function() {
        c.enableFormElement(u(this))
      })
    },
    enableFormElement: function(t) {
      var e = t.is("button") ? "html" : "val";
      t.data("ujs:enable-with") !== l && (t[e](t.data("ujs:enable-with")),
      t.removeData("ujs:enable-with")),
      t.prop("disabled", !1),
      t.removeData("ujs:disabled")
    },
    allowAction: function(t) {
      var e, i = t.data("confirm"), n = !1;
      if (!i)
        return !0;
      if (c.fire(t, "confirm")) {
        try {
          n = c.confirm(i)
        } catch (r) {
          (console.error || console.log).call(console, r.stack || r)
        }
        e = c.fire(t, "confirm:complete", [n])
      }
      return n && e
    },
    blankInputs: function(t, e, i) {
      var n, r, o, s = u(), a = e || "input,textarea", l = t.find(a), c = {};
      return l.each(function() {
        (n = u(this)).is("input[type=radio]") ? (o = n.attr("name"),
        c[o] || (0 === t.find('input[type=radio]:checked[name="' + o + '"]').length && (r = t.find('input[type=radio][name="' + o + '"]'),
        s = s.add(r)),
        c[o] = o)) : (n.is("input[type=checkbox],input[type=radio]") ? n.is(":checked") : !!n.val()) === i && (s = s.add(n))
      }),
      !!s.length && s
    },
    nonBlankInputs: function(t, e) {
      return c.blankInputs(t, e, !0)
    },
    stopEverything: function(t) {
      return u(t.target).trigger("ujs:everythingStopped"),
      t.stopImmediatePropagation(),
      !1
    },
    disableElement: function(t) {
      var e = t.data("disable-with");
      e !== l && (t.data("ujs:enable-with", t.html()),
      t.html(e)),
      t.bind("click.railsDisable", function(t) {
        return c.stopEverything(t)
      }),
      t.data("ujs:disabled", !0)
    },
    enableElement: function(t) {
      t.data("ujs:enable-with") !== l && (t.html(t.data("ujs:enable-with")),
      t.removeData("ujs:enable-with")),
      t.unbind("click.railsDisable"),
      t.removeData("ujs:disabled")
    }
  },
  c.fire(t, "rails:attachBindings") && (u.ajaxPrefilter(function(t, e, i) {
    t.crossDomain || c.CSRFProtection(i)
  }),
  u(window).on("pageshow.rails", function() {
    u(u.rails.enableSelector).each(function() {
      var t = u(this);
      t.data("ujs:disabled") && u.rails.enableFormElement(t)
    }),
    u(u.rails.linkDisableSelector).each(function() {
      var t = u(this);
      t.data("ujs:disabled") && u.rails.enableElement(t)
    })
  }),
  t.on("ajax:complete", c.linkDisableSelector, function() {
    c.enableElement(u(this))
  }),
  t.on("ajax:complete", c.buttonDisableSelector, function() {
    c.enableFormElement(u(this))
  }),
  t.on("click.rails", c.linkClickSelector, function(t) {
    var e = u(this)
      , i = e.data("method")
      , n = e.data("params")
      , r = t.metaKey || t.ctrlKey;
    if (!c.allowAction(e))
      return c.stopEverything(t);
    if (!r && e.is(c.linkDisableSelector) && c.disableElement(e),
    c.isRemote(e)) {
      if (r && (!i || "GET" === i) && !n)
        return !0;
      var o = c.handleRemote(e);
      return !1 === o ? c.enableElement(e) : o.fail(function() {
        c.enableElement(e)
      }),
      !1
    }
    return i ? (c.handleMethod(e),
    !1) : void 0
  }),
  t.on("click.rails", c.buttonClickSelector, function(t) {
    var e = u(this);
    if (!c.allowAction(e) || !c.isRemote(e))
      return c.stopEverything(t);
    e.is(c.buttonDisableSelector) && c.disableFormElement(e);
    var i = c.handleRemote(e);
    return !1 === i ? c.enableFormElement(e) : i.fail(function() {
      c.enableFormElement(e)
    }),
    !1
  }),
  t.on("change.rails", c.inputChangeSelector, function(t) {
    var e = u(this);
    return c.allowAction(e) && c.isRemote(e) ? (c.handleRemote(e),
    !1) : c.stopEverything(t)
  }),
  t.on("submit.rails", c.formSubmitSelector, function(t) {
    var e, i, n = u(this), r = c.isRemote(n);
    if (!c.allowAction(n))
      return c.stopEverything(t);
    if (n.attr("novalidate") === l)
      if (n.data("ujs:formnovalidate-button") === l) {
        if ((e = c.blankInputs(n, c.requiredInputSelector, !1)) && c.fire(n, "ajax:aborted:required", [e]))
          return c.stopEverything(t)
      } else
        n.data("ujs:formnovalidate-button", l);
    if (r) {
      if (i = c.nonBlankInputs(n, c.fileInputSelector)) {
        setTimeout(function() {
          c.disableFormElements(n)
        }, 13);
        var o = c.fire(n, "ajax:aborted:file", [i]);
        return o || setTimeout(function() {
          c.enableFormElements(n)
        }, 13),
        o
      }
      return c.handleRemote(n),
      !1
    }
    setTimeout(function() {
      c.disableFormElements(n)
    }, 13)
  }),
  t.on("click.rails", c.formInputClickSelector, function(t) {
    var e = u(this);
    if (!c.allowAction(e))
      return c.stopEverything(t);
    var i = e.attr("name")
      , n = i ? {
      name: i,
      value: e.val()
    } : null
      , r = e.closest("form");
    0 === r.length && (r = u("#" + e.attr("form"))),
    r.data("ujs:submit-button", n),
    r.data("ujs:formnovalidate-button", e.attr("formnovalidate")),
    r.data("ujs:submit-button-formaction", e.attr("formaction")),
    r.data("ujs:submit-button-formmethod", e.attr("formmethod"))
  }),
  t.on("ajax:send.rails", c.formSubmitSelector, function(t) {
    this === t.target && c.disableFormElements(u(this))
  }),
  t.on("ajax:complete.rails", c.formSubmitSelector, function(t) {
    this === t.target && c.enableFormElements(u(this))
  }),
  u(function() {
    c.refreshCSRFTokens()
  }))
}(jQuery),
function(v) {
  "use strict";
  var r = function(t, e) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
    this.init("tooltip", t, e)
  };
  r.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1
  },
  r.prototype.init = function(t, e, i) {
    this.enabled = !0,
    this.type = t,
    this.$element = v(e),
    this.options = this.getOptions(i);
    for (var n = this.options.trigger.split(" "), r = n.length; r--; ) {
      var o = n[r];
      if ("click" == o)
        this.$element.on("click." + this.type, this.options.selector, v.proxy(this.toggle, this));
      else if ("manual" != o) {
        var s = "hover" == o ? "mouseenter" : "focusin"
          , a = "hover" == o ? "mouseleave" : "focusout";
        this.$element.on(s + "." + this.type, this.options.selector, v.proxy(this.enter, this)),
        this.$element.on(a + "." + this.type, this.options.selector, v.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = v.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }
  ,
  r.prototype.getDefaults = function() {
    return r.DEFAULTS
  }
  ,
  r.prototype.getOptions = function(t) {
    return (t = v.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
      show: t.delay,
      hide: t.delay
    }),
    t
  }
  ,
  r.prototype.getDelegateOptions = function() {
    var i = {}
      , n = this.getDefaults();
    return this._options && v.each(this._options, function(t, e) {
      n[t] != e && (i[t] = e)
    }),
    i
  }
  ,
  r.prototype.enter = function(t) {
    var e = t instanceof this.constructor ? t : v(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
    if (clearTimeout(e.timeout),
    e.hoverState = "in",
    !e.options.delay || !e.options.delay.show)
      return e.show();
    e.timeout = setTimeout(function() {
      "in" == e.hoverState && e.show()
    }, e.options.delay.show)
  }
  ,
  r.prototype.leave = function(t) {
    var e = t instanceof this.constructor ? t : v(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
    if (clearTimeout(e.timeout),
    e.hoverState = "out",
    !e.options.delay || !e.options.delay.hide)
      return e.hide();
    e.timeout = setTimeout(function() {
      "out" == e.hoverState && e.hide()
    }, e.options.delay.hide)
  }
  ,
  r.prototype.show = function() {
    var t = v.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      if (this.$element.trigger(t),
      t.isDefaultPrevented())
        return;
      var e = this
        , i = this.tip();
      this.setContent(),
      this.options.animation && i.addClass("fade");
      var n = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement
        , r = /\s?auto?\s?/i
        , o = r.test(n);
      o && (n = n.replace(r, "") || "top"),
      i.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(n),
      this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
      var s = this.getPosition()
        , a = i[0].offsetWidth
        , l = i[0].offsetHeight;
      if (o) {
        var c = this.$element.parent()
          , u = n
          , h = document.documentElement.scrollTop || document.body.scrollTop
          , d = "body" == this.options.container ? window.innerWidth : c.outerWidth()
          , p = "body" == this.options.container ? window.innerHeight : c.outerHeight()
          , f = "body" == this.options.container ? 0 : c.offset().left;
        n = "bottom" == n && s.top + s.height + l - h > p ? "top" : "top" == n && s.top - h - l < 0 ? "bottom" : "right" == n && s.right + a > d ? "left" : "left" == n && s.left - a < f ? "right" : n,
        i.removeClass(u).addClass(n)
      }
      var g = this.getCalculatedOffset(n, s, a, l);
      this.applyPlacement(g, n),
      this.hoverState = null;
      var m = function() {
        e.$element.trigger("shown.bs." + e.type)
      };
      v.support.transition && this.$tip.hasClass("fade") ? i.one(v.support.transition.end, m).emulateTransitionEnd(150) : m()
    }
  }
  ,
  r.prototype.applyPlacement = function(t, e) {
    var i, n = this.tip(), r = n[0].offsetWidth, o = n[0].offsetHeight, s = parseInt(n.css("margin-top"), 10), a = parseInt(n.css("margin-left"), 10);
    isNaN(s) && (s = 0),
    isNaN(a) && (a = 0),
    t.top = t.top + s,
    t.left = t.left + a,
    v.offset.setOffset(n[0], v.extend({
      using: function(t) {
        n.css({
          top: Math.round(t.top),
          left: Math.round(t.left)
        })
      }
    }, t), 0),
    n.addClass("in");
    var l = n[0].offsetWidth
      , c = n[0].offsetHeight;
    if ("top" == e && c != o && (i = !0,
    t.top = t.top + o - c),
    /bottom|top/.test(e)) {
      var u = 0;
      t.left < 0 && (u = -2 * t.left,
      t.left = 0,
      n.offset(t),
      l = n[0].offsetWidth,
      c = n[0].offsetHeight),
      this.replaceArrow(u - r + l, l, "left")
    } else
      this.replaceArrow(c - o, c, "top");
    i && n.offset(t)
  }
  ,
  r.prototype.replaceArrow = function(t, e, i) {
    this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
  }
  ,
  r.prototype.setContent = function() {
    var t = this.tip()
      , e = this.getTitle();
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
    t.removeClass("fade in top bottom left right")
  }
  ,
  r.prototype.hide = function() {
    function t() {
      "in" != e.hoverState && i.detach(),
      e.$element.trigger("hidden.bs." + e.type)
    }
    var e = this
      , i = this.tip()
      , n = v.Event("hide.bs." + this.type);
    if (this.$element.trigger(n),
    !n.isDefaultPrevented())
      return i.removeClass("in"),
      v.support.transition && this.$tip.hasClass("fade") ? i.one(v.support.transition.end, t).emulateTransitionEnd(150) : t(),
      this.hoverState = null,
      this
  }
  ,
  r.prototype.fixTitle = function() {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
  }
  ,
  r.prototype.hasContent = function() {
    return this.getTitle()
  }
  ,
  r.prototype.getPosition = function() {
    var t = this.$element[0];
    return v.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
      width: t.offsetWidth,
      height: t.offsetHeight
    }, this.$element.offset())
  }
  ,
  r.prototype.getCalculatedOffset = function(t, e, i, n) {
    return "bottom" == t ? {
      top: e.top + e.height,
      left: e.left + e.width / 2 - i / 2
    } : "top" == t ? {
      top: e.top - n,
      left: e.left + e.width / 2 - i / 2
    } : "left" == t ? {
      top: e.top + e.height / 2 - n / 2,
      left: e.left - i
    } : {
      top: e.top + e.height / 2 - n / 2,
      left: e.left + e.width
    }
  }
  ,
  r.prototype.getTitle = function() {
    var t = this.$element
      , e = this.options;
    return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
  }
  ,
  r.prototype.tip = function() {
    return this.$tip = this.$tip || v(this.options.template)
  }
  ,
  r.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }
  ,
  r.prototype.validate = function() {
    this.$element[0].parentNode || (this.hide(),
    this.$element = null,
    this.options = null)
  }
  ,
  r.prototype.enable = function() {
    this.enabled = !0
  }
  ,
  r.prototype.disable = function() {
    this.enabled = !1
  }
  ,
  r.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
  }
  ,
  r.prototype.toggle = function(t) {
    var e = t ? v(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
    e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
  }
  ,
  r.prototype.destroy = function() {
    clearTimeout(this.timeout),
    this.hide().$element.off("." + this.type).removeData("bs." + this.type)
  }
  ;
  var t = v.fn.tooltip;
  v.fn.tooltip = function(n) {
    return this.each(function() {
      var t = v(this)
        , e = t.data("bs.tooltip")
        , i = "object" == typeof n && n;
      (e || "destroy" != n) && (e || t.data("bs.tooltip", e = new r(this,i)),
      "string" == typeof n && e[n]())
    })
  }
  ,
  v.fn.tooltip.Constructor = r,
  v.fn.tooltip.noConflict = function() {
    return v.fn.tooltip = t,
    this
  }
}(jQuery),
function(t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && "object" == typeof module.exports ? t(require("jquery")) : t(jQuery)
}(function(p) {
  function i() {
    var t = s.settings;
    if (t.autoDispose && !p.contains(document.documentElement, this))
      return p(this).timeago("dispose"),
      this;
    var e = n(this);
    return isNaN(e.datetime) || (0 === t.cutoff || Math.abs(o(e.datetime)) < t.cutoff ? p(this).text(r(e.datetime, p(this).attr("lang") ? p(this).attr("lang") : s.settings.lang)) : 0 < p(this).attr("title").length && p(this).text(p(this).attr("title"))),
    this
  }
  function n(t) {
    if (!(t = p(t)).data("timeago")) {
      t.data("timeago", {
        datetime: s.datetime(t)
      });
      var e = p.trim(t.text());
      s.settings.localeTitle ? t.attr("title", t.data("timeago").datetime.toLocaleString()) : !(0 < e.length) || s.isTime(t) && t.attr("title") || t.attr("title", e)
    }
    return t.data("timeago")
  }
  function r(t, e) {
    return s.inWords(o(t), e)
  }
  function o(t) {
    return (new Date).getTime() - t.getTime()
  }
  p.timeago = function(t) {
    return t instanceof Date ? r(t) : r("string" == typeof t ? p.timeago.parse(t) : "number" == typeof t ? new Date(t) : p.timeago.datetime(t))
  }
  ;
  var s = p.timeago;
  p.extend(p.timeago, {
    settings: {
      refreshMillis: 6e4,
      allowPast: !0,
      allowFuture: !1,
      localeTitle: !1,
      cutoff: 0,
      autoDispose: !0,
      lang: "en",
      strings: {
        en: {
          prefixAgo: null,
          prefixFromNow: null,
          suffixAgo: "ago",
          suffixFromNow: "from now",
          inPast: "any moment now",
          seconds: "less than a minute",
          minute: "about a minute",
          minutes: "%d minutes",
          hour: "about an hour",
          hours: "about %d hours",
          day: "a day",
          days: "%d days",
          month: "about a month",
          months: "%d months",
          year: "about a year",
          years: "%d years",
          wordSeparator: " ",
          numbers: []
        }
      }
    },
    inWords: function(r, t) {
      function e(t, e) {
        var i = p.isFunction(t) ? t(e, r) : t
          , n = o.numbers && o.numbers[e] || e;
        return i.replace(/%d/i, n)
      }
      if (!this.settings.allowPast && !this.settings.allowFuture)
        throw "timeago allowPast and allowFuture settings can not both be set to false.";
      var o = this.settings.strings[t] || this.settings.strings[this.settings.lang] || this.settings.strings.en
        , i = o.prefixAgo
        , n = o.suffixAgo;
      if (this.settings.allowFuture && r < 0 && (i = o.prefixFromNow,
      n = o.suffixFromNow),
      !this.settings.allowPast && 0 <= r)
        return o.inPast;
      var s = Math.abs(r) / 1e3
        , a = s / 60
        , l = a / 60
        , c = l / 24
        , u = c / 365
        , h = s < 45 && e(o.seconds, Math.round(s)) || s < 90 && e(o.minute, 1) || a < 45 && e(o.minutes, Math.round(a)) || a < 90 && e(o.hour, 1) || l < 24 && e(o.hours, Math.round(l)) || l < 42 && e(o.day, 1) || c < 30 && e(o.days, Math.round(c)) || c < 45 && e(o.month, 1) || c < 365 && e(o.months, Math.round(c / 30)) || u < 1.5 && e(o.year, 1) || e(o.years, Math.round(u))
        , d = o.wordSeparator || "";
      return o.wordSeparator === undefined && (d = " "),
      p.trim([i, h, n].join(d))
    },
    parse: function(t) {
      var e = p.trim(t);
      return e = (e = (e = (e = (e = e.replace(/\.\d+/, "")).replace(/-/, "/").replace(/-/, "/")).replace(/T/, " ").replace(/Z/, " UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2")).replace(/([\+\-]\d\d)$/, " $100"),
      new Date(e)
    },
    datetime: function(t) {
      var e = s.isTime(t) ? p(t).attr("datetime") : p(t).attr("title");
      return s.parse(e)
    },
    isTime: function(t) {
      return "time" === p(t).get(0).tagName.toLowerCase()
    }
  });
  var a = {
    init: function() {
      a.dispose.call(this);
      var t = p.proxy(i, this);
      t();
      var e = s.settings;
      0 < e.refreshMillis && (this._timeagoInterval = setInterval(t, e.refreshMillis))
    },
    update: function(t) {
      var e = t instanceof Date ? t : s.parse(t);
      p(this).data("timeago", {
        datetime: e
      }),
      s.settings.localeTitle && p(this).attr("title", e.toLocaleString()),
      i.apply(this)
    },
    updateFromDOM: function() {
      p(this).data("timeago", {
        datetime: s.parse(s.isTime(this) ? p(this).attr("datetime") : p(this).attr("title"))
      }),
      i.apply(this)
    },
    dispose: function() {
      this._timeagoInterval && (window.clearInterval(this._timeagoInterval),
      this._timeagoInterval = null)
    }
  };
  p.fn.timeago = function(t, e) {
    var i = t ? a[t] : a.init;
    if (!i)
      throw new Error("Unknown function name '" + t + "' for timeago");
    return this.each(function() {
      i.call(this, e)
    }),
    this
  }
  ,
  document.createElement("abbr"),
  document.createElement("time")
}),
function(t) {
  var e = function() {
    t("time[data-time-ago]").timeago()
  };
  t(e),
  t(document).on("turbolinks:load page:load ajax:success", e)
}(jQuery),
function() {
  var x, t, i, e, n, r, o, s, a, l, c = [].slice, w = [].indexOf || function(t) {
    for (var e = 0, i = this.length; e < i; e++)
      if (e in this && this[e] === t)
        return e;
    return -1
  }
  , u = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      h.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }, h = {}.hasOwnProperty, d = function(t, e) {
    return function() {
      return t.apply(e, arguments)
    }
  };
  (i = {
    bind: function(t, e) {
      var i, n, r, o, s;
      for (n = t.split(" "),
      this.hasOwnProperty("_callbacks") || this._callbacks || (this._callbacks = {}),
      r = 0,
      o = n.length; r < o; r++)
        s = n[r],
        (i = this._callbacks)[s] || (i[s] = []),
        this._callbacks[s].push(e);
      return this
    },
    one: function(t, e) {
      var i;
      return this.bind(t, i = function() {
        return this.unbind(t, i),
        e.apply(this, arguments)
      }
      )
    },
    trigger: function() {
      var t, e, i, n, r, o;
      if (e = (t = 1 <= arguments.length ? c.call(arguments, 0) : []).shift(),
      r = null != (o = this._callbacks) ? o[e] : void 0) {
        for (i = 0,
        n = r.length; i < n && !1 !== r[i].apply(this, t); i++)
          ;
        return !0
      }
    },
    listenTo: function(t, e, i) {
      return t.bind(e, i),
      this.listeningTo || (this.listeningTo = []),
      this.listeningTo.push({
        obj: t,
        ev: e,
        callback: i
      }),
      this
    },
    listenToOnce: function(o, s, a) {
      var l, c;
      return c = this.listeningToOnce || (this.listeningToOnce = []),
      o.bind(s, l = function() {
        var t, e, i, n, r;
        for (e = -1,
        t = i = 0,
        n = c.length; i < n; t = ++i)
          (r = c[t]).obj === o && r.ev === s && r.callback === l && (e = t);
        return o.unbind(s, l),
        -1 !== e && c.splice(e, 1),
        a.apply(this, arguments)
      }
      ),
      c.push({
        obj: o,
        ev: s,
        callback: l
      }),
      this
    },
    stopListening: function(t, e, i) {
      var n, r, o, s, a, l, c, u, h, d, p, f, g, m, v, y, b, _;
      if (0 === arguments.length) {
        for (a = 0,
        u = (y = [this.listeningTo, this.listeningToOnce]).length; a < u; a++)
          if (null != (f = y[a]) ? f.length : void 0)
            for (l = 0,
            h = f.length; l < h; l++)
              (g = f[l]).obj.unbind(g.ev, g.callback);
        this.listeningTo = void 0,
        this.listeningToOnce = void 0
      } else if (t)
        for (e = e ? e.split(" ") : [void 0],
        c = 0,
        d = (b = [this.listeningTo, this.listeningToOnce]).length; c < d; c++)
          if (f = b[c])
            for (m = 0,
            p = e.length; m < p; m++)
              for (r = e[m],
              s = v = _ = f.length - 1; _ <= 0 ? v <= 0 : 0 <= v; s = _ <= 0 ? ++v : --v)
                (g = f[s]).obj === t && (i && g.callback !== i || (r && r !== g.ev ? r && (o = g.ev.split(" "),
                0 <= w.call(o, r) && (o = function() {
                  var t, e, i;
                  for (i = [],
                  e = 0,
                  t = o.length; e < t; e++)
                    (n = o[e]) !== r && i.push(n);
                  return i
                }(),
                g.ev = x.trim(o.join(" ")),
                g.obj.unbind(r, g.callback))) : (g.obj.unbind(g.ev, g.callback),
                -1 !== s && f.splice(s, 1))));
      return this
    },
    unbind: function(t, e) {
      var i, n, r, o, s, a, l, c, u;
      if (0 === arguments.length)
        return this._callbacks = {},
        this;
      if (!t)
        return this;
      for (r = 0,
      s = (i = t.split(" ")).length; r < s; r++)
        if (c = i[r],
        l = null != (u = this._callbacks) ? u[c] : void 0)
          if (e) {
            for (n = o = 0,
            a = l.length; o < a; n = ++o)
              if (l[n] === e) {
                (l = l.slice()).splice(n, 1),
                this._callbacks[c] = l;
                break
              }
          } else
            delete this._callbacks[c];
      return this
    }
  }).on = i.bind,
  i.off = i.unbind,
  e = {
    trace: !0,
    logPrefix: "(App)",
    log: function() {
      var t;
      if (t = 1 <= arguments.length ? c.call(arguments, 0) : [],
      this.trace)
        return this.logPrefix && t.unshift(this.logPrefix),
        "undefined" != typeof console && null !== console && "function" == typeof console.log && console.log.apply(console, t),
        this
    }
  },
  l = ["included", "extended"],
  r = function() {
    function t() {
      "function" == typeof this.init && this.init.apply(this, arguments)
    }
    return t.include = function(t) {
      var e, i, n;
      if (!t)
        throw new Error("include(obj) requires obj");
      for (e in t)
        n = t[e],
        w.call(l, e) < 0 && (this.prototype[e] = n);
      return null != (i = t.included) && i.apply(this),
      this
    }
    ,
    t.extend = function(t) {
      var e, i, n;
      if (!t)
        throw new Error("extend(obj) requires obj");
      for (e in t)
        n = t[e],
        w.call(l, e) < 0 && (this[e] = n);
      return null != (i = t.extended) && i.apply(this),
      this
    }
    ,
    t.proxy = function(t) {
      return e = this,
      function() {
        return t.apply(e, arguments)
      }
      ;
      var e
    }
    ,
    t.prototype.proxy = function(t) {
      return e = this,
      function() {
        return t.apply(e, arguments)
      }
      ;
      var e
    }
    ,
    t
  }(),
  (n = function() {
    function e(t) {
      e.__super__.constructor.apply(this, arguments),
      null != this.constructor.uuid && "function" == typeof this.constructor.uuid ? (this.cid = this.constructor.uuid(),
      this.id || (this.id = this.cid)) : this.cid = (null != t ? t.cid : void 0) || this.constructor.uid("c-"),
      t && this.load(t)
    }
    return u(e, r),
    e.extend(i),
    e.include(i),
    e.records = [],
    e.irecords = {},
    e.attributes = [],
    e.configure = function(t) {
      var e, i;
      return i = t,
      e = 2 <= arguments.length ? c.call(arguments, 1) : [],
      this.className = i,
      this.deleteAll(),
      e.length && (this.attributes = e),
      this.attributes && (this.attributes = a(this.attributes)),
      this.attributes || (this.attributes = []),
      this.unbind(),
      this
    }
    ,
    e.toString = function() {
      return this.className + "(" + this.attributes.join(", ") + ")"
    }
    ,
    e.find = function(t, e) {
      var i;
      return null == e && (e = this.notFound),
      (null != (i = this.irecords[t]) ? i.clone() : void 0) || ("function" == typeof e ? e(t) : void 0)
    }
    ,
    e.findAll = function(t, e) {
      var i, n, r, o;
      for (o = [],
      n = 0,
      r = t.length; n < r; n++)
        i = t[n],
        this.find(i, e) && o.push(this.find(i));
      return o
    }
    ,
    e.notFound = function() {
      return null
    }
    ,
    e.exists = function(t) {
      return Boolean(this.irecords[t])
    }
    ,
    e.addRecord = function(t, e) {
      var i;
      return (i = this.irecords[t.id || t.cid]) ? i.refresh(t) : (t.id || (t.id = t.cid),
      this.irecords[t.id] = this.irecords[t.cid] = t,
      void 0 !== e ? this.records.splice(e, 0, t) : this.records.push(t)),
      t
    }
    ,
    e.refresh = function(t, e) {
      var i, n, r, o, s;
      for (null == e && (e = {}),
      e.clear && this.deleteAll(),
      o = this.fromJSON(t),
      Array.isArray(o) || (o = [o]),
      i = 0,
      n = o.length; i < n; i++)
        r = o[i],
        this.addRecord(r);
      return this.sort(),
      s = this.cloneArray(o),
      this.trigger("refresh", s, e),
      s
    }
    ,
    e.select = function(t) {
      var e, i, n, r, o;
      for (o = [],
      e = 0,
      i = (r = this.records).length; e < i; e++)
        t(n = r[e]) && o.push(n.clone());
      return o
    }
    ,
    e.findByAttribute = function(t, e) {
      var i, n, r, o;
      for (i = 0,
      n = (o = this.records).length; i < n; i++)
        if ((r = o[i])[t] === e)
          return r.clone();
      return null
    }
    ,
    e.findAllByAttribute = function(e, i) {
      return this.select(function(t) {
        return t[e] === i
      })
    }
    ,
    e.each = function(t) {
      var e, i, n, r, o;
      for (o = [],
      e = 0,
      i = (r = this.records).length; e < i; e++)
        n = r[e],
        o.push(t(n.clone()));
      return o
    }
    ,
    e.all = function() {
      return this.cloneArray(this.records)
    }
    ,
    e.slice = function(t, e) {
      return null == t && (t = 0),
      this.cloneArray(this.records.slice(t, e))
    }
    ,
    e.first = function(t) {
      var e;
      return null == t && (t = 1),
      1 < t ? this.cloneArray(this.records.slice(0, t)) : null != (e = this.records[0]) ? e.clone() : void 0
    }
    ,
    e.last = function(t) {
      var e;
      return "number" == typeof t ? this.cloneArray(this.records.slice(-t)) : null != (e = this.records[this.records.length - 1]) ? e.clone() : void 0
    }
    ,
    e.count = function() {
      return this.records.length
    }
    ,
    e.deleteAll = function() {
      return this.records = [],
      this.irecords = {}
    }
    ,
    e.destroyAll = function(t) {
      var e, i, n, r, o;
      for (o = [],
      e = 0,
      i = (r = this.records).length; e < i; e++)
        n = r[e],
        o.push(n.destroy(t));
      return o
    }
    ,
    e.update = function(t, e, i) {
      return this.find(t).updateAttributes(e, i)
    }
    ,
    e.create = function(t, e) {
      return new this(t).save(e)
    }
    ,
    e.destroy = function(t, e) {
      return this.find(t).destroy(e)
    }
    ,
    e.change = function(t) {
      return "function" == typeof t ? this.bind("change", t) : this.trigger.apply(this, ["change"].concat(c.call(arguments)))
    }
    ,
    e.fetch = function(t) {
      return "function" == typeof t ? this.bind("fetch", t) : this.trigger.apply(this, ["fetch"].concat(c.call(arguments)))
    }
    ,
    e.toJSON = function() {
      return this.records
    }
    ,
    e.beforeFromJSON = function(t) {
      return t
    }
    ,
    e.fromJSON = function(t) {
      var e, i, n, r;
      if (t) {
        if ("string" == typeof t && (t = JSON.parse(t)),
        t = this.beforeFromJSON(t),
        Array.isArray(t)) {
          for (n = [],
          e = 0,
          i = t.length; e < i; e++)
            (r = t[e])instanceof this ? n.push(r) : n.push(new this(r));
          return n
        }
        return t instanceof this ? t : new this(t)
      }
    }
    ,
    e.fromForm = function() {
      var t;
      return (t = new this).fromForm.apply(t, arguments)
    }
    ,
    e.sort = function() {
      return this.comparator && this.records.sort(this.comparator),
      this
    }
    ,
    e.cloneArray = function(t) {
      var e, i, n, r;
      for (n = [],
      e = 0,
      i = t.length; e < i; e++)
        r = t[e],
        n.push(r.clone());
      return n
    }
    ,
    e.idCounter = 0,
    e.uid = function(t) {
      var e;
      return null == t && (t = ""),
      e = t + this.idCounter++,
      this.exists(e) && (e = this.uid(t)),
      e
    }
    ,
    e.prototype.isNew = function() {
      return !this.exists()
    }
    ,
    e.prototype.isValid = function() {
      return !this.validate()
    }
    ,
    e.prototype.validate = function() {}
    ,
    e.prototype.load = function(t) {
      var e, i;
      for (e in t.id && (this.id = t.id),
      t)
        if (i = t[e],
        "function" == typeof this[e]) {
          if ("function" == typeof i)
            continue;
          this[e](i)
        } else
          this[e] = i;
      return this
    }
    ,
    e.prototype.attributes = function() {
      var t, e, i, n, r;
      for (r = {},
      t = 0,
      i = (n = this.constructor.attributes).length; t < i; t++)
        (e = n[t])in this && ("function" == typeof this[e] ? r[e] = this[e]() : r[e] = this[e]);
      return this.id && (r.id = this.id),
      r
    }
    ,
    e.prototype.eql = function(t) {
      return t && t.constructor === this.constructor && (t.cid === this.cid || t.id && t.id === this.id)
    }
    ,
    e.prototype.save = function(t) {
      var e, i;
      return null == t && (t = {}),
      !1 !== t.validate && (e = this.validate()) ? (this.trigger("error", this, e),
      !1) : (this.trigger("beforeSave", this, t),
      i = this.isNew() ? this.create(t) : this.update(t),
      this.stripCloneAttrs(),
      this.trigger("save", i, t),
      i)
    }
    ,
    e.prototype.stripCloneAttrs = function() {
      var t, e;
      if (!this.hasOwnProperty("cid")) {
        for (t in e = this)
          h.call(e, t) && (e[t],
          0 <= w.call(this.constructor.attributes, t) && delete this[t]);
        return this
      }
    }
    ,
    e.prototype.updateAttribute = function(t, e, i) {
      var n;
      return (n = {})[t] = e,
      this.updateAttributes(n, i)
    }
    ,
    e.prototype.updateAttributes = function(t, e) {
      return this.load(t),
      this.save(e)
    }
    ,
    e.prototype.changeID = function(t) {
      var e;
      if (t !== this.id)
        return (e = this.constructor.irecords)[t] = e[this.id],
        this.cid !== this.id && delete e[this.id],
        this.id = t,
        this.save()
    }
    ,
    e.prototype.remove = function(t) {
      var e, i, n, r, o;
      for (null == t && (t = {}),
      e = i = 0,
      n = (o = this.constructor.records.slice(0)).length; i < n; e = ++i)
        if (r = o[e],
        this.eql(r)) {
          o.splice(e, 1);
          break
        }
      if (this.constructor.records = o,
      t.clear)
        return delete this.constructor.irecords[this.id],
        delete this.constructor.irecords[this.cid]
    }
    ,
    e.prototype.destroy = function(t) {
      return null == t && (t = {}),
      null == t.clear && (t.clear = !0),
      this.trigger("beforeDestroy", this, t),
      this.remove(t),
      this.destroyed = !0,
      this.trigger("destroy", this, t),
      this.trigger("change", this, "destroy", t),
      this.listeningTo && this.stopListening(),
      this.unbind(),
      this
    }
    ,
    e.prototype.dup = function(t) {
      var e, i;
      return null == t && (t = !0),
      e = this.attributes(),
      t ? delete e.id : e.cid = this.cid,
      i = new this.constructor(e),
      t || this._callbacks && (i._callbacks = this._callbacks),
      i
    }
    ,
    e.prototype.clone = function() {
      return s(this)
    }
    ,
    e.prototype.reload = function() {
      var t;
      return this.isNew() ? this : (t = this.constructor.find(this.id),
      this.load(t.attributes()),
      t)
    }
    ,
    e.prototype.refresh = function(t) {
      return (t = this.constructor.fromJSON(t)).id && this.id !== t.id && this.changeID(t.id),
      this.constructor.irecords[this.id].load(t),
      this.trigger("refresh", this),
      this.trigger("change", this, "refresh"),
      this
    }
    ,
    e.prototype.toJSON = function() {
      return this.attributes()
    }
    ,
    e.prototype.toString = function() {
      return "<" + this.constructor.className + " (" + JSON.stringify(this) + ")>"
    }
    ,
    e.prototype.fromForm = function(t) {
      var e, i, n, r, o, s, a, l, c, u, h, d, p, f;
      for (f = {},
      i = 0,
      s = (h = x(t).find("[type=checkbox]:not([value])")).length; i < s; i++)
        f[(e = h[i]).name] = x(e).prop("checked");
      for (n = 0,
      a = (d = x(t).find('[type=checkbox][name$="[]"]')).length; n < a; n++)
        f[c = (e = d[n]).name.replace(/\[\]$/, "")] || (f[c] = []),
        x(e).prop("checked") && f[c].push(e.value);
      for (o = 0,
      l = (p = x(t).serializeArray()).length; o < l; o++)
        f[u = (r = p[o]).name] || (f[u] = r.value);
      return this.load(f)
    }
    ,
    e.prototype.exists = function() {
      return this.constructor.exists(this.id)
    }
    ,
    e.prototype.update = function(t) {
      var e, i;
      return this.trigger("beforeUpdate", this, t),
      (i = this.constructor.irecords)[this.id].load(this.attributes()),
      this.constructor.sort(),
      (e = i[this.id].clone()).trigger("update", e, t),
      e.trigger("change", e, "update", t),
      e
    }
    ,
    e.prototype.create = function(t) {
      var e, i;
      return this.trigger("beforeCreate", this, t),
      this.id || (this.id = this.cid),
      i = this.dup(!1),
      this.constructor.addRecord(i, t.idx),
      this.constructor.sort(),
      (e = i.clone()).trigger("create", e, t),
      e.trigger("change", e, "create", t),
      e
    }
    ,
    e.prototype.bind = function() {
      var t;
      return t = this.constructor.irecords[this.id] || this,
      i.bind.apply(t, arguments)
    }
    ,
    e.prototype.one = function() {
      var t;
      return t = this.constructor.irecords[this.id] || this,
      i.one.apply(t, arguments)
    }
    ,
    e.prototype.unbind = function() {
      var t;
      return t = this.constructor.irecords[this.id] || this,
      i.unbind.apply(t, arguments)
    }
    ,
    e.prototype.trigger = function(t) {
      var e;
      return i.trigger.apply(this, arguments),
      "refresh" === t || (e = this.constructor).trigger.apply(e, arguments)
    }
    ,
    e
  }()).prototype.on = n.prototype.bind,
  n.prototype.off = n.prototype.unbind,
  t = function() {
    function s(t) {
      var e, i, n, r, o;
      for (i in this.release = d(this.release, this),
      this.options = t,
      r = this.options)
        o = r[i],
        this[i] = o;
      for (this.el || (this.el = document.createElement(this.tag)),
      this.el = x(this.el),
      this.className && this.el.addClass(this.className),
      this.attributes && this.el.attr(this.attributes),
      this.events || (this.events = this.constructor.events),
      this.elements || (this.elements = this.constructor.elements),
      e = this; n = e.constructor.__super__; )
        n.events && (this.events = x.extend({}, n.events, this.events)),
        n.elements && (this.elements = x.extend({}, n.elements, this.elements)),
        e = n;
      this.events && this.delegateEvents(this.events),
      this.elements && this.refreshElements(),
      s.__super__.constructor.apply(this, arguments)
    }
    return u(s, r),
    s.include(i),
    s.include(e),
    s.prototype.eventSplitter = /^(\S+)\s*(.*)$/,
    s.prototype.tag = "div",
    s.prototype.release = function() {
      return this.trigger("release", this),
      this.el.remove(),
      this.unbind(),
      this.stopListening()
    }
    ,
    s.prototype.$ = function(t) {
      return this.el.find(t)
    }
    ,
    s.prototype.delegateEvents = function(t) {
      var e, i, n, r, o, s;
      for (i in o = [],
      t) {
        if ("function" == typeof (r = t[i]))
          r = function(e) {
            return function(t) {
              return function() {
                return t.apply(e, arguments),
                !0
              }
            }
          }(this)(r);
        else {
          if (!this[r])
            throw new Error(r + " doesn't exist");
          r = function(e) {
            return function(t) {
              return function() {
                return e[t].apply(e, arguments),
                !0
              }
            }
          }(this)(r)
        }
        e = (n = i.match(this.eventSplitter))[1],
        "" === (s = n[2]) ? o.push(this.el.bind(e, r)) : o.push(this.el.on(e, s, r))
      }
      return o
    }
    ,
    s.prototype.refreshElements = function() {
      var t, e, i, n;
      for (t in i = [],
      e = this.elements)
        n = e[t],
        i.push(this[n] = this.$(t));
      return i
    }
    ,
    s.prototype.delay = function(t, e) {
      return setTimeout(this.proxy(t), e || 0)
    }
    ,
    s.prototype.html = function(t) {
      return this.el.html(t.el || t),
      this.refreshElements(),
      this.el
    }
    ,
    s.prototype.append = function() {
      var n, r, t;
      return r = 1 <= arguments.length ? c.call(arguments, 0) : [],
      r = function() {
        var t, e, i;
        for (i = [],
        t = 0,
        e = r.length; t < e; t++)
          n = r[t],
          i.push(n.el || n);
        return i
      }(),
      (t = this.el).append.apply(t, r),
      this.refreshElements(),
      this.el
    }
    ,
    s.prototype.appendTo = function(t) {
      return this.el.appendTo(t.el || t),
      this.refreshElements(),
      this.el
    }
    ,
    s.prototype.prepend = function() {
      var n, r, t;
      return r = 1 <= arguments.length ? c.call(arguments, 0) : [],
      r = function() {
        var t, e, i;
        for (i = [],
        t = 0,
        e = r.length; t < e; t++)
          n = r[t],
          i.push(n.el || n);
        return i
      }(),
      (t = this.el).prepend.apply(t, r),
      this.refreshElements(),
      this.el
    }
    ,
    s.prototype.replace = function(t) {
      var e, i, n;
      return "string" == typeof (t = t.el || t) && (t = x.trim(t)),
      e = (n = [this.el, x((null != (i = x.parseHTML(t)) ? i[0] : void 0) || t)])[0],
      this.el = n[1],
      e.replaceWith(this.el),
      this.delegateEvents(this.events),
      this.refreshElements(),
      this.el
    }
    ,
    s
  }(),
  x = ("undefined" != typeof window && null !== window ? window.jQuery : void 0) || ("undefined" != typeof window && null !== window ? window.Zepto : void 0) || function(t) {
    return t
  }
  ,
  s = Object.create || function(t) {
    var e;
    return (e = function() {}
    ).prototype = t,
    new e
  }
  ,
  a = function(t) {
    return Array.prototype.slice.call(t, 0)
  }
  ,
  o = this.Spine = {},
  "undefined" != typeof module && null !== module && (module.exports = o),
  o.version = "1.6.0",
  o.$ = x,
  o.Events = i,
  o.Log = e,
  o.Module = r,
  o.Controller = t,
  o.Model = n,
  r.extend.call(o, i),
  r.create = r.sub = t.create = t.sub = n.sub = function(t, e) {
    var i;
    return i = function(t) {
      function e() {
        return e.__super__.constructor.apply(this, arguments)
      }
      return u(e, t),
      e
    }(this),
    t && i.include(t),
    e && i.extend(e),
    "function" == typeof i.unbind && i.unbind(),
    i
  }
  ,
  n.setup = function(t, e) {
    var i;
    return null == e && (e = []),
    (i = function(t) {
      function e() {
        return e.__super__.constructor.apply(this, arguments)
      }
      return u(e, t),
      e
    }(this)).configure.apply(i, [t].concat(c.call(e))),
    i
  }
  ,
  o.Class = r
}
.call(this),
function() {
  var l, i = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }, r = {}.hasOwnProperty, a = [].slice, c = function(t, e) {
    return function() {
      return t.apply(e, arguments)
    }
  };
  (l = this.Spine || require("spine")).$,
  l.Manager = function(t) {
    function e() {
      this.controllers = [],
      this.bind("change", this.change),
      this.add.apply(this, arguments)
    }
    return i(e, t),
    e.include(l.Events),
    e.prototype.add = function() {
      var t, e, i, n, r;
      for (r = [],
      i = 0,
      n = (e = 1 <= arguments.length ? a.call(arguments, 0) : []).length; i < n; i++)
        t = e[i],
        r.push(this.addOne(t));
      return r
    }
    ,
    e.prototype.addOne = function(o) {
      var e, t;
      return o.bind("active", (e = this,
      function() {
        var t;
        return t = 1 <= arguments.length ? a.call(arguments, 0) : [],
        e.trigger.apply(e, ["change", o].concat(a.call(t)))
      }
      )),
      o.bind("release", (t = this,
      function() {
        var r;
        return t.controllers = function() {
          var t, e, i, n;
          for (n = [],
          t = 0,
          e = (i = this.controllers).length; t < e; t++)
            (r = i[t]) !== o && n.push(r);
          return n
        }
        .call(t)
      }
      )),
      this.controllers.push(o)
    }
    ,
    e.prototype.deactivate = function() {
      return this.trigger.apply(this, ["change", !1].concat(a.call(arguments)))
    }
    ,
    e.prototype.change = function(t) {
      var e, i, n, r, o, s;
      for (n = t,
      e = 2 <= arguments.length ? a.call(arguments, 1) : [],
      r = 0,
      o = (s = this.controllers).length; r < o; r++)
        (i = s[r]) !== n && i.deactivate.apply(i, e);
      if (n)
        return n.activate.apply(n, e)
    }
    ,
    e
  }(l.Module),
  l.Controller.include({
    active: function() {
      var t;
      return "function" == typeof (t = 1 <= arguments.length ? a.call(arguments, 0) : [])[0] ? this.bind("active", t[0]) : (t.unshift("active"),
      this.trigger.apply(this, t)),
      this
    },
    isActive: function() {
      return this.el.hasClass("active")
    },
    activate: function() {
      return this.el.addClass("active"),
      this
    },
    deactivate: function() {
      return this.el.removeClass("active"),
      this
    }
  }),
  l.Stack = function(t) {
    function a() {
      var t, e, i, n, r, o, s;
      for (e in this.release = c(this.release, this),
      a.__super__.constructor.apply(this, arguments),
      this.manager = new l.Manager,
      this.router = null != (i = l.Route) ? i.create() : void 0,
      n = this.controllers) {
        if (o = n[e],
        null != this[e])
          throw Error("'@" + e + "' already assigned");
        this[e] = new o({
          stack: this
        }),
        this.add(this[e])
      }
      for (e in r = this.routes,
      s = this,
      t = function(t, e) {
        var i;
        return "function" == typeof e && (i = e),
        i || (i = function() {
          var t;
          return (t = s[e]).active.apply(t, arguments)
        }
        ),
        s.route(t, i)
      }
      ,
      r)
        t(e, o = r[e]);
      this["default"] && this[this["default"]].active()
    }
    return i(a, t),
    a.prototype.controllers = {},
    a.prototype.routes = {},
    a.prototype.className = "spine stack",
    a.prototype.add = function(t) {
      return this.manager.add(t),
      this.append(t)
    }
    ,
    a.prototype.release = function() {
      var t;
      return null != (t = this.router) && t.destroy(),
      a.__super__.release.apply(this, arguments)
    }
    ,
    a
  }(l.Controller),
  "undefined" != typeof module && null !== module && (module.exports = l.Manager),
  "undefined" != typeof module && null !== module && (module.exports.Stack = l.Stack)
}
.call(this),
function() {
  var c, u, e, t, i, n, r, s, h, o, a, d = [].slice, l = function(t, e) {
    return function() {
      return t.apply(e, arguments)
    }
  }, p = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      f.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }, f = {}.hasOwnProperty;
  a = this.Spine || require("spine"),
  c = a.$,
  s = a.Model,
  h = c({}),
  u = {
    getURL: function(t) {
      return null != t.className ? this.generateURL(t) : this.generateURL(t, encodeURIComponent(t.id))
    },
    getCollectionURL: function(t) {
      return this.generateURL(t)
    },
    getScope: function(t) {
      return ("function" == typeof t.scope ? t.scope() : void 0) || t.scope
    },
    getCollection: function(t) {
      return t.url !== t.generateURL ? "function" == typeof t.url ? t.url() : t.url : null != t.className ? t.className.toLowerCase() + "s" : void 0
    },
    generateURL: function(t) {
      var e, i, n, r, o;
      return n = t,
      e = 2 <= arguments.length ? d.call(arguments, 1) : [],
      i = u.getCollection(n) || u.getCollection(n.constructor),
      o = u.getScope(n) || u.getScope(n.constructor),
      e.unshift(i),
      e.unshift(o),
      0 !== (r = (r = (r = e.join("/")).replace(/(\/\/)/g, "/")).replace(/^\/|\/$/g, "")).indexOf("../") ? s.host + "/" + r : r
    },
    enabled: !0,
    disable: function(t) {
      if (!this.enabled)
        return t();
      this.enabled = !1;
      try {
        return t()
      } catch (e) {
        throw e
      } finally {
        this.enabled = !0
      }
    },
    queue: function(t) {
      return t ? h.queue(t) : h.queue()
    },
    clearQueue: function() {
      return this.queue([])
    },
    config: {
      loadMethod: "GET",
      updateMethod: "PUT",
      createMethod: "POST",
      destroyMethod: "DELETE"
    }
  },
  e = function() {
    function t() {}
    return t.prototype.defaults = {
      dataType: "json",
      processData: !1,
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    },
    t.prototype.queue = u.queue,
    t.prototype.ajax = function(t, e) {
      return c.ajax(this.ajaxSettings(t, e))
    }
    ,
    t.prototype.ajaxQueue = function(t, e, r) {
      var o, s, a, i, n, l;
      return s = null,
      o = c.Deferred(),
      i = o.promise(),
      u.enabled && (l = this.ajaxSettings(t, e),
      a = void 0 !== l.parallel ? l.parallel : "GET" === l.type,
      n = function(t) {
        var e, i, n;
        if (null != (null != r ? r.id : void 0) && (null == l.url && (l.url = u.getURL(r)),
        null != (e = l.data) && (e.id = r.id)),
        "string" != typeof l.data && !0 !== l.processData && (l.data = JSON.stringify(l.data)),
        n = function() {
          return o.resolve.apply(this, d.call(arguments).concat([l]))
        }
        ,
        i = function() {
          return o.reject.apply(this, d.call(arguments).concat([l]))
        }
        ,
        (s = c.ajax(l)).done(n),
        s.fail(i),
        s.then(t, t),
        a)
          return h.dequeue()
      }
      ,
      i.abort = function(t) {
        var e;
        return s ? s.abort(t) : (-1 < (e = c.inArray(n, this.queue())) && this.queue().splice(e, 1),
        o.rejectWith(l.context || l, [i, t, ""]),
        i)
      }
      ,
      this.queue(n)),
      i
    }
    ,
    t.prototype.ajaxSettings = function(t, e) {
      return c.extend({}, this.defaults, e, t)
    }
    ,
    t
  }(),
  t = function() {
    function t(t) {
      this.model = t,
      this.failResponse = l(this.failResponse, this),
      this.recordsResponse = l(this.recordsResponse, this)
    }
    return p(t, e),
    t.prototype.find = function(t, e, i) {
      var n;
      return null == i && (i = {}),
      n = new this.model({
        id: t
      }),
      this.ajaxQueue(e, {
        type: i.method || u.config.loadMethod,
        url: i.url || u.getURL(n),
        parallel: i.parallel
      }).done(this.recordsResponse(i)).fail(this.failResponse(i))
    }
    ,
    t.prototype.all = function(t, e) {
      return null == e && (e = {}),
      this.ajaxQueue(t, {
        type: e.method || u.config.loadMethod,
        url: e.url || u.getURL(this.model),
        parallel: e.parallel
      }).done(this.recordsResponse(e)).fail(this.failResponse(e))
    }
    ,
    t.prototype.fetch = function(t, e) {
      var i, n, r;
      return null == t && (t = {}),
      null == e && (e = {}),
      (i = t.id) ? (delete t.id,
      this.find(i, t, e).done((r = this,
      function(t) {
        return r.model.refresh(t, e)
      }
      ))) : this.all(t, e).done((n = this,
      function(t) {
        return n.model.refresh(t, e)
      }
      ))
    }
    ,
    t.prototype.recordsResponse = function(o) {
      return s = this,
      function(t, e, i, n) {
        var r;
        return s.model.trigger("ajaxSuccess", null, e, i, n),
        null != (r = o.done) ? r.call(s.model, n) : void 0
      }
      ;
      var s
    }
    ,
    t.prototype.failResponse = function(o) {
      return s = this,
      function(t, e, i, n) {
        var r;
        return s.model.trigger("ajaxError", null, t, e, i, n),
        null != (r = o.fail) ? r.call(s.model, n) : void 0
      }
      ;
      var s
    }
    ,
    t
  }(),
  o = function() {
    function t(t) {
      this.record = t,
      this.failResponse = l(this.failResponse, this),
      this.recordResponse = l(this.recordResponse, this),
      this.model = this.record.constructor
    }
    return p(t, e),
    t.prototype.reload = function(t, e) {
      return null == e && (e = {}),
      this.ajaxQueue(t, {
        type: e.method || u.config.loadMethod,
        url: e.url,
        parallel: e.parallel
      }, this.record).done(this.recordResponse(e)).fail(this.failResponse(e))
    }
    ,
    t.prototype.create = function(t, e) {
      return null == e && (e = {}),
      this.ajaxQueue(t, {
        type: e.method || u.config.createMethod,
        contentType: "application/json",
        data: this.record.toJSON(),
        url: e.url || u.getCollectionURL(this.record),
        parallel: e.parallel
      }).done(this.recordResponse(e)).fail(this.failResponse(e))
    }
    ,
    t.prototype.update = function(t, e) {
      return null == e && (e = {}),
      this.ajaxQueue(t, {
        type: e.method || u.config.updateMethod,
        contentType: "application/json",
        data: this.record.toJSON(),
        url: e.url,
        parallel: e.parallel
      }, this.record).done(this.recordResponse(e)).fail(this.failResponse(e))
    }
    ,
    t.prototype.destroy = function(t, e) {
      return null == e && (e = {}),
      this.ajaxQueue(t, {
        type: e.method || u.config.destroyMethod,
        url: e.url,
        parallel: e.parallel
      }, this.record).done(this.recordResponse(e)).fail(this.failResponse(e))
    }
    ,
    t.prototype.recordResponse = function(o) {
      return s = this,
      function(t, e, i, n) {
        var r;
        return null != t && Object.getOwnPropertyNames(t).length && !s.record.destroyed && s.record.refresh(t, {
          ajax: !1
        }),
        s.record.trigger("ajaxSuccess", s.record, s.model.fromJSON(t), e, i, n),
        null != (r = o.done) ? r.call(s.record, n) : void 0
      }
      ;
      var s
    }
    ,
    t.prototype.failResponse = function(o) {
      return s = this,
      function(t, e, i, n) {
        var r;
        switch (n.type) {
        case "POST":
          s.createFailed();
          break;
        case "DELETE":
          s.destroyFailed()
        }
        return s.record.trigger("ajaxError", s.record, t, e, i, n),
        null != (r = o.fail) ? r.call(s.record, n) : void 0
      }
      ;
      var s
    }
    ,
    t.prototype.createFailed = function() {
      return this.record.remove({
        clear: !0
      })
    }
    ,
    t.prototype.destroyFailed = function() {
      return this.record.destroyed = !1,
      this.record.constructor.refresh(this.record)
    }
    ,
    t
  }(),
  s.host = "",
  r = {
    ajax: function() {
      return new o(this)
    },
    generateURL: (n = {
      include: function() {
        var t;
        return (t = 1 <= arguments.length ? d.call(arguments, 0) : []).unshift(encodeURIComponent(this.id)),
        u.generateURL.apply(u, [this].concat(d.call(t)))
      },
      extend: function() {
        var t;
        return t = 1 <= arguments.length ? d.call(arguments, 0) : [],
        u.generateURL.apply(u, [this].concat(d.call(t)))
      }
    }).include,
    url: n.include
  },
  i = {
    ajax: function() {
      return new t(this)
    },
    generateURL: n.extend,
    url: n.extend
  },
  s.Ajax = {
    extended: function() {
      return this.fetch(this.ajaxFetch),
      this.change(this.ajaxChange),
      this.extend(i),
      this.include(r)
    },
    ajaxFetch: function() {
      var t;
      return (t = this.ajax()).fetch.apply(t, arguments)
    },
    ajaxChange: function(t, e, i) {
      var n;
      if (null == i && (i = {}),
      !1 !== i.ajax)
        return "function" == typeof (n = t.ajax())[e] ? n[e](i.ajax, i) : void 0
    }
  },
  s.Ajax.Methods = {
    extended: function() {
      return this.extend(i),
      this.include(r)
    }
  },
  u.defaults = e.prototype.defaults,
  u.Base = e,
  u.Singleton = o,
  u.Collection = t,
  a.Ajax = u,
  "undefined" != typeof module && null !== module && (module.exports = u)
}
.call(this),
function() {
  var e, t, i, n, r, o;
  window.MB = window.MB || {},
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
  MB.serverCountry = "CN",
  jQuery.timeago && (jQuery.timeago.settings.lang = window.MBLocale),
  MB.f = {
    ga: {},
    inSharing: /^\/app/.test(window.location.pathname),
    isDuplicateDemo: !1,
    minFSWarned: !1
  },
  MB.config = {
    showRuler: !0,
    showGeneral: !0,
    screenBg: "#FFFFFF",
    assetWidth: 158,
    ignoreError: /(Network error|Uncaught InvalidStateError|Uncaught #<Event>|Blocked a frame|NPObject)/,
    rulerWidth: 16,
    lnMinWidth: 244,
    screenContainerWidth: 1e4,
    panelBaseZIndex: 100,
    colorList: ["#FF7100", "#5B6B73"],
    disableColorList: ["#C8CDD0", "#C8CDD0"],
    SCALES: [20, 30, 50, 75, 80, 90, 100, 120, 150, 200, 300, 400]
  },
  MB.v = {
    multiline: function(t) {
      var e, i, n, r, o;
      if (/^<p>/.test(t))
        return t.replace(/\n/g, "");
      for (e = "",
      i = 0,
      n = (r = t.split(/\n/)).length; i < n; i++)
        (o = r[i]) || (o = "&nbsp;"),
        e += "<p>" + o + "</p>";
      return e
    }
  },
  MB.maxTimestamp = 1,
  MB.browserInfo = (r = void 0,
  n = (o = navigator.userAgent).match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],
  /trident/i.test(n[1]) ? (r = /\brv[ :]+(\d+)/g.exec(o) || [],
  {
    name: "IE",
    version: parseFloat(r[1] || "")
  }) : "Chrome" === n[1] && null !== (r = o.match(/\b(OPR|Edge)\/(\d+)/)) ? {
    name: r[1].replace("OPR", "Opera"),
    version: parseFloat(r[2])
  } : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"],
  null !== (r = o.match(/version\/(\d+)/i)) && n.splice(1, 1, r[1]),
  {
    name: n[0],
    version: parseFloat(n[1])
  })),
  MB.checkFA = function(t) {
    var e, i;
    for (e = i = 12; 1 <= i; e = --i)
      $("#font-preload .ah").css("font-size", e + "px"),
      $("#font-preload .ah").css("line-height", "100%"),
      $("#font-preload .ah").text("a").height() === e && (MB.config.minFS = e);
    return t()
  }
  ,
  MB.trackPageView = function(t) {
    return window.ga && ga("send", "pageview", {
      page: t
    })
  }
  ,
  MB.ga = function() {
    var t;
    return t = arguments[arguments.length - 1],
    window.ga && !this.f.ga[t] && window.ga.apply(window, arguments),
    this.f.ga[t] = !0
  }
  ,
  MB.zhuge = function(t, e) {
    return zhuge.track(t, e)
  }
  ,
  MB.event = function(t, e, i) {
    return null == i && (i = "v3"),
    "object" == typeof e ? MB.zhuge(t, e) : "string" == typeof e ? MB.ga("send", "event", e, "[" + i + "]" + t) : (MB.ga("send", "event", "goal", "[" + i + "]" + t),
    MB.zhuge(t))
  }
  ,
  MB.isMac = function() {
    return /(Macintosh)/i.test(navigator.userAgent)
  }
  ,
  MB.isWindows = function() {
    return /(Windows)/i.test(navigator.userAgent)
  }
  ,
  MB.isElectron = function() {
    return window.MB_DESKTOP_VERSION || window.isElectron || /Electron/i.test(navigator.userAgent)
  }
  ,
  MB.isLegacyElectron = function() {
    var t, e, i, n, r;
    return !!(t = window.MB_DESKTOP_VERSION || window.isElectron) && (e = (r = t.split("."))[0],
    i = r[1],
    n = r[2],
    (e - 0 || i - 6 || n - 4) < 0)
  }
  ,
  MB.isPhantom = function() {
    return /Phantom/i.test(navigator.userAgent)
  }
  ,
  MB.isWechat = function() {
    return /MicroMessenger/i.test(navigator.userAgent)
  }
  ,
  MB.isEmbedded = function() {
    return $("body").hasClass("embed")
  }
  ,
  MB.isChrome = function() {
    return /Chrome/i.test(navigator.userAgent)
  }
  ,
  MB.isChrome63 = function() {
    return /Chrome\/63/i.test(navigator.userAgent)
  }
  ,
  MB.isFirefox = function() {
    return /Firefox/i.test(navigator.userAgent)
  }
  ,
  MB.isMobile = function() {
    return /(iPod|iPhone|iPad|Android)/.test(navigator.userAgent)
  }
  ,
  MB.isAndroid = function() {
    return /Android/i.test(navigator.userAgent)
  }
  ,
  MB.isiPad = function() {
    return /(iPad)/.test(navigator.userAgent)
  }
  ,
  MB.isIOS = function() {
    return /(iPod|iPhone|iPad)/.test(navigator.userAgent)
  }
  ,
  MB.isHTMLZip = function() {
    return Boolean(window.MBData || "file:" === location.protocol)
  }
  ,
  MB.urlRootHTMLZip = function() {
    return MB.isHTMLZip() ? "./" : "/"
  }
  ,
  MB.isIOSClient = function() {
    return Boolean(window.webkit && window.webkit.messageHandlers)
  }
  ,
  MB.isStandAlone = function() {
    return navigator.standalone
  }
  ,
  MB.isFullScreen = function() {
    return /\/full$/.test(location.pathname)
  }
  ,
  MB.isUIChina = function() {
    return /\/uichina$/.test(location.pathname)
  }
  ,
  MB.isForum = function() {
    return /\/forum$/.test(location.pathname)
  }
  ,
  MB.isIOS9 = function() {
    return /(9_0|9_1)/.test(navigator.userAgent)
  }
  ,
  MB.isIOS11 = function() {
    return /11_\d/.test(navigator.userAgent)
  }
  ,
  MB.isOddIOS = function() {
    return MB.isStandAlone() && MB.isIOS9() && (window.innerHeight > window.innerWidth || MB.isiPad())
  }
  ,
  MB.pointInRect = function(t, e, i) {
    return t > i.left && t < i.left + i.width && e > i.top && e < i.top + i.height
  }
  ,
  MB.project = function() {
    return MB.currentProject
  }
  ,
  MB.staticMap = function() {
    return MB.urlRootHTMLZip() + "images/workspace/staticmap_" + window.MBLocale + ".png"
  }
  ,
  MB.exceedProjectQuota = function(t, e) {
    var i, n;
    return i = !1,
    t && (t.expired || t.limitation.collaborators < 1) && (n = t.owner_id === MB.user.id ? "user" : "team",
    MB.promptRenew(e + "_team_project", {
      action: "renew",
      role: n,
      plan: t.owner_plan
    }),
    i = !0),
    t || !MB.user.expired && "free" !== MB.user.plan || Project.select(function(t) {
      return t.owner_id === MB.user.id && !t.team_cid
    }).length >= MB.user.limitation.projects && (MB.promptRenew("user_projects", {
      action: "upgrade",
      role: "user",
      plan: MB.user.current_plan
    }),
    i = !0),
    i
  }
  ,
  MB.scale = function() {
    return $("body").data("scale")
  }
  ,
  MB.preference = function() {
    return Preference.first()
  }
  ,
  MB.readDataURL = function(t, n, e) {
    var i;
    if (t)
      return /^image\/(png|jpg|jpeg|gif|svg|svg\+xml)$/i.test(t.type) ? 1024e3 < t.size ? e ? e(new Error(I18N.file_too_large)) : MB.alertAsync({
        title: I18N.file_too_large,
        desc: I18N.optimize_your_image,
        isHTML: !0
      }) : ((i = new FileReader).onload = function(t) {
        var e, i;
        return e = t.target.result,
        (i = new Image).onload = function() {
          return n(e, i.width, i.height)
        }
        ,
        i.src = e
      }
      ,
      i.readAsDataURL(t)) : e ? e(new Error(I18N.unsupported)) : alert(I18N.unsupported)
  }
  ,
  MB.supportedBrowser = function() {
    return /(Webkit|Firefox|Coding_iOS|Trident\/7.0)/i.test(navigator.userAgent)
  }
  ,
  MB.nextgid = function(t) {
    return t ? t.substr(0, 21) + "-" + Math.uuid(21, 16) : null
  }
  ,
  MB.triggerProgress = function(t) {
    var e;
    return MB.AutoSaver.triggerSave(),
    e = setInterval(function() {
      if (MB.AutoSaver.getIsEmpty() && (clearInterval(e),
      "function" == typeof t))
        return t()
    }, 1e3)
  }
  ,
  MB.checkDupProgress = function(e, i) {
    return setTimeout(function() {
      var t;
      return t = "/sidekiq/critical/job/" + e + ".json",
      $.getJSON(t, function(t) {
        return "complete" === t.result ? "function" == typeof i ? i() : window.location.reload() : MB.checkDupProgress(e, i)
      })
    }, 2e3)
  }
  ,
  MB.unescape = function(t) {
    var e;
    return e = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">"
    },
    t.replace(/(&amp;|&lt;|&gt;)/g, function(t) {
      return e[t]
    })
  }
  ,
  MB.isEditing = function(t) {
    var e;
    return !!t && ("INPUT" === (e = (t.target || t.srcElement).tagName) || "SELECT" === e || "TEXTAREA" === e || MB.f.editing)
  }
  ,
  e = function(t) {
    return ("0" + parseInt(t).toString(16)).slice(-2)
  }
  ,
  MB.rgb2hex = function(t) {
    return t && "rgba(0, 0, 0, 0)" !== t && "transparent" !== t ? (t = t.match(/^rgb[a]*\((\d+),\s*(\d+),\s*(\d+)/),
    "#" + e(t[1]) + e(t[2]) + e(t[3])) : "transparent"
  }
  ,
  MB.hex2rgb = function(t) {
    return {
      r: (t = parseInt(-1 < t.indexOf("#") ? t.substring(1) : t, 16)) >> 16,
      g: (65280 & t) >> 8,
      b: 255 & t
    }
  }
  ,
  MB.atan2 = function(t, e) {
    return Math.atan2(e, t) / Math.PI * 180
  }
  ,
  MB.cos = function(t) {
    return Math.cos(t / 180 * Math.PI)
  }
  ,
  MB.sin = function(t) {
    return Math.sin(t / 180 * Math.PI)
  }
  ,
  MB.hypotenuse = function(t, e) {
    return Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2))
  }
  ,
  MB.lastTimestamp = function() {
    return MB.maxTimestamp + 1
  }
  ,
  MB.safeLoading = function(t) {
    return !1 === t ? $("#safemode").hide() : "number" == typeof t ? $("#safemode .progress").text("") : ($("#safemode .text").html(t),
    $("#safemode .progress").text(""),
    $("#safemode").show())
  }
  ,
  MB.globalStateAlert = function() {
    return !(!MB.currentScreen.cscreenstates().length || MB.getIsGlobalActive()) && (MB.alertAsync({
      title: I18N.warning,
      desc: I18N.global_state_alert,
      isHTML: !0
    }),
    !0)
  }
  ,
  MB.minFontSizeIssue = function() {
    if (!(MB.f.inSharing || MB.f.minFSWarned || MB.isMobile() || MB.isPhantom()))
      return MB.f.minFSWarned = !0,
      MB.confirmAsync({
        title: I18N.warning,
        desc: I18N.font_size_issue,
        confirmText: I18N.know_how
      }).then(function(t) {
        if (t)
          return window.open("https://modao.cc/posts/9166")
      })
  }
  ,
  MB.clearPasteBoard = function() {
    return $("#clipboard").focus().select(),
    document.execCommand("copy"),
    setTimeout(function() {
      return $("#clipboard").blur()
    }, 100)
  }
  ,
  MB.saveToClipboard = function(t) {
    return MB.localStorageDelegate.setItem("mb-clipboard", JSON.stringify(t))
  }
  ,
  MB.readFromClipboard = function() {
    return JSON.parse(MB.localStorageDelegate.getItem("mb-clipboard"))
  }
  ,
  MB.refreshWorkspaceRoute = function() {
    if (window.parent && window.parent !== window)
      try {
        return window.parent.history.replaceState({}, "", location.pathname + location.search)
      } catch (t) {}
  }
  ,
  MB.supportsPassive = !1;
  try {
    i = Object.defineProperty({}, "passive", {
      get: function() {
        return MB.supportsPassive = !0
      }
    }),
    window.addEventListener("test", null, i)
  } catch (s) {}
  t = function() {
    var t;
    return t = {
      getItem: function() {},
      setItem: function() {},
      removeItem: function() {},
      clear: function() {}
    },
    function() {
      try {
        return localStorage.setItem("localStorage", 1),
        localStorage.removeItem("localStorage"),
        !0
      } catch (s) {
        return s,
        !1
      }
    }() ? localStorage : t
  }
  ,
  MB.localStorageDelegate = t()
}
.call(this),
function() {
  var t, e;
  for (t in MB.SHELLS = {
    ipad_3_4: {
      device: "ipad",
      bg: "ipad",
      width: 881,
      height: 1247,
      top: 111,
      left: 56.5
    },
    ipad_pro: {
      device: "ipad",
      bg: "ipad_pro",
      width: 1224,
      height: 1716,
      top: 175,
      left: 100
    },
    desktop: {
      device: "web",
      bg: "desktop",
      width: 960,
      height: 1200,
      top: 0,
      left: 0
    },
    geely_center_control: {
      device: "web",
      bg: "geely_center_control",
      width: 1810,
      height: 1396,
      top: 86,
      left: 255
    },
    iphone_5: {
      device: "iphone_5",
      bg: "iphone_se",
      width: 379,
      height: 798,
      top: 119,
      left: 32
    },
    iphone_6: {
      device: "iphone_6",
      bg: "iphone_7",
      width: 435,
      height: 888,
      top: 114,
      left: 30
    },
    iphone_6_plus: {
      device: "iphone_6_plus",
      bg: "iphone_7_plus",
      width: 482,
      height: 983,
      top: 127,
      left: 34
    },
    iphone_x: {
      device: "iphone_x",
      bg: "iphone_x",
      width: 431,
      height: 862,
      top: 25,
      left: 28
    },
    iphone_xs_max: {
      device: "iphone_xs_max",
      bg: "iphone_xs_max",
      width: 477,
      height: 953,
      top: 29,
      left: 32
    },
    Huawei: {
      device: "huawei",
      bg: "huawei_p9",
      width: 400,
      height: 800,
      top: 77,
      left: 20
    },
    samsung: {
      device: "samsung",
      bg: "samsung_s7",
      width: 398,
      height: 804,
      top: 85,
      left: 19
    },
    google_pixel_2: {
      device: "google_pixel_2",
      bg: "google_pixel_2",
      width: 481,
      height: 956,
      top: 112,
      left: 35
    },
    google_pixel_2_xl: {
      device: "google_pixel_2_xl",
      bg: "google_pixel_2_xl",
      width: 509,
      height: 955,
      top: 70,
      left: 49
    },
    android: {
      device: "android",
      bg: "nexus_5",
      width: 402,
      height: 798,
      top: 70,
      left: 21
    },
    apple_watch_38: {
      device: "apple_watch",
      bg: "apple_watch_38",
      width: 236,
      height: 410,
      top: 120,
      left: 50
    },
    apple_watch_42: {
      device: "apple_watch",
      bg: "apple_watch_42",
      width: 256,
      height: 475,
      top: 140,
      left: 50
    },
    smart_tv: {
      device: "web",
      bg: "sony_w850c",
      width: 2039,
      height: 1245,
      top: 21,
      left: 36
    }
  },
  MB.DEVICES = {
    android: {
      google_nexus: {
        width: 360,
        height: 640
      },
      google_pixel_2: {
        width: 411,
        height: 731
      },
      google_pixel_2_xl: {
        width: 411,
        height: 823
      },
      samsung: {
        width: 360,
        height: 640
      },
      Xiaomi: {
        width: 360,
        height: 640
      },
      Huawei: {
        width: 360,
        height: 640
      },
      Meizu: {
        width: 360,
        height: 600,
        hide: !0
      },
      google_nexus_4: {
        width: 384,
        height: 640,
        hide: !0
      },
      customize: {
        width: 360,
        height: 640
      }
    },
    iphone: {
      iphone_4: {
        width: 320,
        height: 480,
        scale: 100,
        icon_size: "120x120",
        hide: !0
      },
      iphone_5: {
        width: 320,
        height: 568,
        scale: 100,
        icon_size: "120x120"
      },
      iphone_6: {
        width: 375,
        height: 667,
        scale: 100,
        icon_size: "180x180"
      },
      iphone_6_plus: {
        width: 414,
        height: 736,
        scale: 100,
        icon_size: "180x180"
      },
      iphone_x: {
        width: 375,
        height: 812,
        scale: 100,
        icon_size: "180x180"
      },
      iphone_xs_max: {
        width: 414,
        height: 896,
        scale: 100,
        icon_size: "180x180"
      }
    },
    ipad: {
      ipad_3_4: {
        width: 768,
        height: 1024,
        scale: 75,
        icon_size: "152x152"
      },
      ipad_pro: {
        width: 1024,
        height: 1366,
        scale: 75,
        icon_size: "152x152"
      }
    },
    apple_watch: {
      apple_watch_38: {
        width: 136,
        height: 170,
        scale: 200,
        icon_size: "48x48"
      },
      apple_watch_42: {
        width: 156,
        height: 195,
        scale: 200,
        icon_size: "55x55"
      }
    },
    web: {
      laptop1: {
        width: 1280,
        height: 768,
        hide: !0
      },
      laptop2: {
        width: 1366,
        height: 768,
        hide: !0
      },
      desktop: {
        width: 1440,
        height: 1024
      },
      monitor: {
        width: 1920,
        height: 1080,
        hide: !0
      },
      geely_center_control: {
        width: 1280,
        height: 720
      },
      smart_tv: {
        width: 1920,
        height: 1080,
        hide: !0
      }
    },
    customize: {
      customize: {
        width: 1024,
        height: 768
      }
    },
    "default": {
      iphone: "iphone_6",
      ipad: "ipad_3_4",
      android: "google_nexus",
      apple_atch: "apple_watch_38",
      web: "desktop"
    }
  },
  MB.INSPECTABLES = {
    group: ["locked", "top", "left", "width", "height", "z", "ro", "primary_fixed", "ani_name", "ani_delay", "ani_count", "ani_duration", "o", "expanded"],
    rich_text: ["locked", "text", "fs", "ha", "va", "width", "height", "top", "left", "z", "th", "lh", "td", "bo", "i", "tc", "o", "text_shadow", "ro", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration", "clip", "size_type"],
    label: ["locked", "text", "fs", "br", "border_radius", "bs", "ha", "va", "width", "height", "top", "left", "z", "th", "lh", "td", "bo", "i", "bg", "bc", "tc", "o", "ts", "text_shadow", "tsc", "ds", "sc", "ro", "padding", "ls", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    text_view: ["locked", "text", "fs", "br", "border_radius", "bs", "ha", "va", "width", "height", "top", "left", "z", "th", "lh", "td", "bo", "i", "bg", "bc", "tc", "o", "ts", "text_shadow", "tsc", "ds", "sc", "ro", "padding", "ls", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration", "clip"],
    sticky: ["locked", "text", "fs", "ha", "lh", "bo", "i", "td", "width", "height", "top", "left", "bg", "tc", "th", "slw", "slt", "padding"],
    button: ["locked", "text", "fs", "br", "border_radius", "bs", "ha", "va", "width", "height", "top", "left", "z", "th", "td", "bo", "i", "bg", "bc", "tc", "o", "ts", "tsc", "ds", "box_shadow", "sc", "ro", "ls", "icon", "is", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    icon_button: ["locked", "is", "icon", "br", "border_radius", "bs", "top", "left", "width", "height", "z", "th", "bg", "bc", "tc", "o", "ds", "text_shadow", "sc", "ro", "ls", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    text_field: ["locked", "text", "fs", "br", "border_radius", "bs", "ha", "va", "width", "height", "top", "left", "z", "th", "bg", "bc", "tc", "o", "ds", "box_shadow", "sc", "ro", "td", "bo", "i", "ls", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    mtext_input: ["locked", "text", "fs", "br", "border_radius", "bs", "ha", "width", "height", "top", "left", "z", "th", "bg", "bc", "tc", "o", "ds", "box_shadow", "sc", "td", "bo", "i", "ls", "primary_fixed", "fixed", "fixed_type", "input_type"],
    mtextarea: ["locked", "text", "fs", "br", "border_radius", "bs", "ha", "width", "height", "top", "left", "z", "th", "lh", "bg", "bc", "tc", "o", "ds", "box_shadow", "sc", "td", "bo", "i", "ls", "primary_fixed", "fixed", "fixed_type", "padding"],
    mselect: ["locked", "text", "fs", "bs", "width", "height", "top", "left", "z", "th", "bg", "bc", "tc", "o", "ds", "box_shadow", "sc", "td", "bo", "i", "ls", "primary_fixed", "fixed", "fixed_type"],
    "switch": ["locked", "top", "left", "z", "checked", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    ios_switch: ["locked", "top", "left", "z", "width", "height", "checked", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    android_switch: ["locked", "top", "left", "z", "width", "height", "checked", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    ios_check: ["locked", "top", "left", "z", "width", "height", "checked", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    android_check: ["locked", "top", "left", "z", "width", "height", "checked", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    android_radio: ["locked", "top", "left", "z", "width", "height", "checked", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    mcheckbox2: ["locked", "top", "left", "width", "height", "z", "o", "checked", "primary_fixed", "fixed", "fixed_type"],
    mradiobutton: ["locked", "top", "left", "width", "height", "z", "o", "checked", "primary_fixed", "fixed", "fixed_type"],
    mfile_input: ["locked", "top", "left", "width", "height", "z", "o", "primary_fixed", "fixed", "fixed_type"],
    image_view: ["locked", "bs", "br", "border_radius", "width", "height", "top", "left", "image", "z", "th", "bg", "bc", "tc", "o", "p", "ds", "box_shadow", "sc", "ro", "ls", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration", "clip", "filter"],
    map_view: ["locked", "width", "height", "top", "left", "z", "primary_fixed", "fixed", "fixed_type"],
    navigation_bar: ["locked", "text", "fs", "top", "left", "z", "width", "height", "th", "td", "bo", "i", "bg", "tc", "bc", "o", "ts", "tsc", "ds", "box_shadow", "sc", "primary_fixed", "fixed", "fixed_type"],
    nav_bar: ["locked", "text", "fs", "top", "left", "z", "width", "height", "th", "td", "bo", "i", "bg", "tc", "bc", "o", "ts", "tsc", "ds", "box_shadow", "sc", "primary_fixed", "fixed", "fixed_type"],
    search_bar: ["locked", "text", "fs", "top", "left", "width", "ha", "z", "th", "bg", "tc", "bc", "o", "ds", "box_shadow", "sc", "ro", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    tab_item: ["locked", "text", "is", "icon", "width", "left", "top", "fs", "z", "th", "bg", "tc", "o", "ds", "box_shadow", "sc", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    tab_bar: ["locked", "height", "z", "th", "bg", "bc", "o", "ds", "box_shadow", "sc", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    hr: ["locked", "width", "height", "top", "left", "o", "z", "th", "bc", "ls", "ro", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    line: ["locked", "bs", "bc", "ls", "width", "height", "top", "left", "points", "box_shadow", "o", "z", "th", "primary_fixed", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    ve: ["locked", "width", "height", "top", "left", "o", "z", "th", "bc", "ls", "ro", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    keyboard: ["locked", "z", "numeric", "primary_fixed"],
    iphone_keyboard: ["locked", "width", "height", "top", "left", "z", "numeric", "primary_fixed", "fixed", "fixed_type"],
    ipad_keyboard: ["locked", "width", "height", "top", "left", "z", "numeric", "primary_fixed", "fixed", "fixed_type"],
    android_keyboard: ["locked", "width", "height", "top", "left", "z", "numeric", "primary_fixed", "fixed", "fixed_type"],
    status_bar: ["locked", "text", "th", "bg", "tc", "bc", "o", "z", "primary_fixed"],
    ios_status_bar: ["locked", "text", "th", "bg", "tc", "bc", "o", "width", "height", "top", "left", "z", "primary_fixed", "fixed", "fixed_type"],
    iphone_x_status_bar: ["locked", "text", "th", "bg", "tc", "bc", "o", "width", "height", "top", "left", "z", "primary_fixed", "fixed", "fixed_type"],
    android_status_bar: ["locked", "text", "th", "bg", "tc", "bc", "o", "width", "height", "top", "left", "z", "primary_fixed", "fixed", "fixed_type"],
    rectangle: ["locked", "height", "top", "left", "z", "th", "bg", "bc", "o", "ds", "box_shadow", "sc", "ro", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    rounded_rect: ["locked", "text", "fs", "br", "border_radius", "bs", "ha", "va", "width", "height", "top", "left", "z", "lh", "th", "td", "bo", "i", "bg", "bc", "tc", "o", "ts", "tsc", "ds", "box_shadow", "sc", "ro", "padding", "ls", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    circle_rect: ["locked", "text", "fs", "bs", "ha", "va", "width", "height", "top", "left", "z", "lh", "th", "td", "bo", "i", "bg", "bc", "tc", "o", "ts", "tsc", "ds", "box_shadow", "sc", "ro", "padding", "ls", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    triangleb: ["locked", "width", "height", "top", "left", "z", "th", "tc", "o", "ro", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    triangletl: ["locked", "width", "height", "top", "left", "z", "th", "tc", "o", "ro", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"],
    lr: ["locked", "width", "height", "top", "left", "z", "primary_fixed", "fixed", "fixed_type"],
    webpage: ["locked", "width", "height", "top", "left", "z", "text"],
    pg: ["locked", "icon"],
    mtooltip: ["locked", "text", "fs", "br", "border_radius", "ha", "va", "width", "height", "top", "left", "z", "th", "lh", "td", "bo", "i", "bg", "tc", "o", "ts", "tsc", "ds", "box_shadow", "sc", "bs", "bc", "ro", "padding", "tt_placement", "tt_offset", "tt_arrow_size", "primary_fixed", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration"]
  },
  MB.INSPECTABLES.pg = ["left", "top"],
  MB.INSPECTABLES_VERSION = "1.8",
  e = MB.INSPECTABLES)
    e[t].push("v");
  window.Spine && (Spine.Model.prototype.refresh = function(t) {
    var e;
    return (e = this.constructor.irecords[this.id]) && e.load(t),
    this.trigger("refresh"),
    this
  }
  ,
  Spine.Model.State = {
    lsave: function(t) {
      var e, i, n, r, o, s, a, l, c, u, h, d, p, f;
      if (null == t && (t = !0),
      Spine.Ajax.disable((p = this,
      function() {
        return p.save()
      }
      )),
      !t)
        return !0;
      if ("default" !== this.screenstate_cid && (e = this.getState("default"),
      this.constructor.BASE_ATTRS.some((f = this,
      function(t) {
        return f[t] !== e[t]
      }
      )) && (e.restoreBase(this),
      e.lsave(!1),
      MB.saveWidgetByDefaultState(this, e))),
      MB.getIsGlobalActive && MB.getIsGlobalActive())
        for (n = 0,
        o = (h = ["default"].concat(this.cs().cscreenstates().map(function(t) {
          return t.cid
        }))).length; n < o; n++)
          u = h[n],
          a = this.getState(u),
          u === this.screenstate_cid ? "default" === u ? (a.restore(this),
          a.lsave(!1),
          MB.saveWidgetByDefaultState(this, a)) : (a.restoreState(this),
          a.lsave()) : a.exists() && MB.setScreenStateGlobally(this, a, ["gid", "link_cids"]);
      else if ("default" === this.screenstate_cid)
        for (i = (e = this.getState("default")).dup(),
        e.restore(this),
        e.lsave(!1),
        MB.saveWidgetByDefaultState(this, e),
        r = 0,
        s = (l = this.cs().cscreenstates()).length; r < s; r++)
          "default" !== (c = l[r]).cid && ((a = this.getState(c.cid)).exists() || (a.restore(i),
          a.lsave()));
      else
        (d = this.getState(this.screenstate_cid)).restore(this),
        d.lsave();
      return !0
    },
    setState: function(t, e) {
      var i, n, r, o;
      if (t || (t = "default"),
      (o = this.screenstate_cid || "default") !== t)
        return (i = this.getState("default")).exists() || i.lsave(!1),
        (r = this.getState(o)).exists() && r.restoreState(this),
        (n = this.getState(t)).exists() ? this.restoreState(n) : this.restoreState(i),
        e ? (this.screenstate_cid = t,
        this.lsave(!1)) : void 0
    }
  },
  Spine.Model.Dirty = {
    lsave: function(t) {
      var e;
      return null == t && (t = !0),
      Spine.Ajax.disable((e = this,
      function() {
        return e.save()
      }
      )),
      t && MB.AutoSaver && MB.AutoSaver.add({
        record: this
      }),
      !0
    },
    ldestroy: function(t) {
      var e;
      return null == t && (t = !0),
      Spine.Ajax.disable((e = this,
      function() {
        return e.destroy()
      }
      )),
      t && MB.AutoSaver && MB.AutoSaver.add({
        record: this,
        isDelete: !0
      })
    }
  })
}
.call(this),
function() {
  var e = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }
    , r = {}.hasOwnProperty;
  this.Project = function(t) {
    function i() {
      i.__super__.constructor.apply(this, arguments)
    }
    return e(i, t),
    i.configure("Project", "cid", "mtime", "created_at", "updated_at", "password", "access", "access_token", "name", "icon", "splash", "screens_count", "width", "height", "scale", "device", "model", "archived", "deleted", "destroyed", "highlight", "shell_type", "combo", "template", "wechat", "duplicating", "owner_id", "owner_email", "owner_name", "owner_avatar", "owner_plan", "owner_paid", "expired", "validated", "parent_cid", "version", "team_cid", "png_scale", "pngs_scale", "limitation"),
    i.include(Spine.Model.Dirty),
    i.prototype.load = function(t) {
      var e;
      if (this.id = t.cid,
      i.__super__.load.call(this, t),
      this.access_token || (this.access_token = Math.uuid(33)),
      e = "web" === this.device ? 100 : 200,
      this.png_scale || (this.png_scale = e),
      this.pngs_scale || (this.pngs_scale = e),
      this.template = !1,
      this.combo = !1,
      ("web" === this.device || "customize" === this.model) && "device" === this.shell_type)
        return this.shell_type = "default"
    }
    ,
    i.prototype.cscreens = function() {
      return Screen.findAllByAttribute("project_cid", this.cid)
    }
    ,
    i.prototype.cteam = function() {
      return Team.find(this.team_cid)
    }
    ,
    i.prototype.type = function() {
      return this.template ? "template" : this.combo ? "combo" : "project"
    }
    ,
    i.prototype.rootScreens = function() {
      var e;
      return Screen.select((e = this,
      function(t) {
        return t.project_cid === e.cid && !t.parent_cid
      }
      )).sort(function(t, e) {
        return t.position - e.position
      })
    }
    ,
    i.prototype.homeScreen = function() {
      return this.rootScreens()[0]
    }
    ,
    i.prototype.orient = function() {
      return "customize" === this.model || "web" === this.device ? "portrait" : this.width > this.height ? "landscape" : "portrait"
    }
    ,
    i.prototype.isPrivate = function() {
      return "private" === this.access
    }
    ,
    i.prototype.isPublic = function() {
      return "public" === this.access
    }
    ,
    i.prototype.isWeb = function() {
      return "web" === this.device
    }
    ,
    i.prototype.isAndroid = function() {
      return "android" === this.device && ("customize" !== this.model || this.width <= 720)
    }
    ,
    i.prototype.swidth = function(t) {
      return t === this.orient() ? this.width : this.height
    }
    ,
    i.prototype.sheight = function(t) {
      return t === this.orient() ? this.height : this.width
    }
    ,
    i.prototype.icon_size = function() {
      return MB.DEVICES[this.device][this.model].icon_size
    }
    ,
    i.prototype.splash_width = function() {
      return MB.DEVICES[this.device][this.model].width
    }
    ,
    i.prototype.splash_height = function() {
      return MB.DEVICES[this.device][this.model].height
    }
    ,
    i.prototype.device_name = function() {
      switch (this.device) {
      case "android":
        return "Android";
      default:
        try {
          return I18N.devices[this.device][this.model] || ""
        } catch (t) {
          return "Customize"
        }
      }
    }
    ,
    i.prototype.setDevice = function() {
      return !0
    }
    ,
    i.prototype.setup = function() {
      return "android" === this.device ? this._setupAndroid() : this._setupiOS()
    }
    ,
    i.prototype._setupAndroid = function() {
      return MB.COMPONENTS.status_bar.height = 23,
      MB.COMPONENTS.nav_bar.top = 23,
      MB.COMPONENTS.nav_bar.height = 55
    }
    ,
    i.prototype._setupiOS = function() {
      return /iphone_x/.test(this.model) ? (MB.COMPONENTS.status_bar.height = 44,
      MB.COMPONENTS.nav_bar.top = 44) : (MB.COMPONENTS.status_bar.height = 20,
      MB.COMPONENTS.nav_bar.top = 20),
      MB.COMPONENTS.nav_bar.height = 45
    }
    ,
    i.prototype.isTeam = function() {
      return !1
    }
    ,
    i.prototype.collaborators = function() {
      return Collaborator.select((e = this,
      function(t) {
        return "MOCK" !== t.email && (t.project_cid === e.cid || e.team_cid && t.team_cid === e.team_cid)
      }
      ));
      var e
    }
    ,
    i.prototype.collaboratorByUid = function(t) {
      var e, i, n, r;
      for (i = 0,
      n = (r = this.collaborators()).length; i < n; i++)
        if ((e = r[i]).user_id === t)
          return e;
      return null
    }
    ,
    i.prototype.roleByUid = function(t) {
      var e;
      return t === this.owner_id ? "admin" : (e = this.collaboratorByUid(t)) ? e.role : "none"
    }
    ,
    i.prototype.canEdit = function() {
      var t;
      return "admin" === (t = this.roleByUid(MB.user.id)) || "editor" === t
    }
    ,
    i.prototype.canAdmin = function() {
      return "admin" === this.roleByUid(MB.user.id)
    }
    ,
    i.prototype.isCollaborated = function() {
      return 1 < this.collaborators().length
    }
    ,
    i.prototype.isViewOnly = function() {
      return this.isCollaborated() && this.limitation.collaborators < 1
    }
    ,
    i.prototype.leftPanelMode = function() {
      return localStorage[this.cid + "_leftPanelMode"]
    }
    ,
    i.prototype.setLeftPanelMode = function(t) {
      return localStorage[this.cid + "_leftPanelMode"] = t
    }
    ,
    i
  }(Spine.Model)
}
.call(this),
function() {
  var i = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }
    , r = {}.hasOwnProperty;
  this.Asset = function(t) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return i(e, t),
    e.configure("Asset", "cid", "mtime", "sid", "user_id", "width", "height", "image", "raw", "name", "deleted", "destroyed", "uri", "project_cid", "timestamp", "size", "thumb"),
    e.include(Spine.Model.Dirty),
    e.prototype.load = function(t) {
      return this.id = t.cid,
      e.__super__.load.call(this, t),
      this.sid || (this.sid = this.cid)
    }
    ,
    e.prototype.properSrc = function() {
      return /svg$/.test(this.image) ? this.image : this.thumb || this.raw || this.image
    }
    ,
    e
  }(Spine.Model)
}
.call(this),
function() {
  var i = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }
    , r = {}.hasOwnProperty;
  this.Assettag = function(t) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return i(e, t),
    e.configure("Assettag", "cid", "tag", "asset_cids"),
    e.include(Spine.Model.Dirty),
    e.prototype.load = function(t) {
      return this.id = t.cid,
      e.__super__.load.call(this, t),
      this.asset_cids || (this.asset_cids = ""),
      this.assets_count = this.cids().length
    }
    ,
    e.prototype.cids = function() {
      var t, e, i, n, r;
      for (r = [],
      e = 0,
      i = (n = this.asset_cids.split(",")).length; e < i; e++)
        (t = n[e]) && r.push(t);
      return r
    }
    ,
    e.prototype.addAsset = function(t) {
      var e;
      return (e = this.cids()).push(t),
      this.asset_cids = e.join(","),
      this.lsave()
    }
    ,
    e.prototype.removeAsset = function(t) {
      var e, i;
      return i = (e = this.cids()).indexOf(t),
      e.splice(i, 1),
      this.asset_cids = e.join(","),
      this.lsave()
    }
    ,
    e
  }(Spine.Model)
}
.call(this),
function() {
  var i = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }
    , r = {}.hasOwnProperty;
  this.CoWorker = function(t) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return i(e, t),
    e.configure("CoWorker", "name", "avatar", "screen_cid", "last_seen"),
    e.prototype.load = function(t) {
      return e.__super__.load.call(this, t)
    }
    ,
    e
  }(Spine.Model)
}
.call(this),
function() {
  var i = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }
    , r = {}.hasOwnProperty;
  this.Collaborator = function(t) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return i(e, t),
    e.configure("Collaborator", "cid", "mtime", "name", "email", "role", "project_cid", "avatar", "team_cid", "user_id", "channel"),
    e.include(Spine.Model.Dirty),
    e.prototype.load = function(t) {
      return this.id = t.cid,
      e.__super__.load.call(this, t)
    }
    ,
    e
  }(Spine.Model)
}
.call(this),
function() {
  var i = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }
    , r = {}.hasOwnProperty;
  this.Combo = function(t) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return i(e, t),
    e.configure("Combo", "cid", "mtime", "created_at", "updated_at", "access", "access_token", "name", "width", "height", "scale", "deleted", "destroyed", "version", "combo"),
    e.include(Spine.Model.Dirty),
    e.prototype.load = function(t) {
      return this.id = t.cid,
      e.__super__.load.call(this, t),
      this.access_token || (this.access_token = Math.uuid(33)),
      this.combo = !0,
      this.created_at = new Date(t.created_at).valueOf(),
      this.updated_at = new Date(t.updated_at).valueOf(),
      this.timestamp = .001 * this.updated_at
    }
    ,
    e.prototype.swidth = function() {
      return this.width
    }
    ,
    e.prototype.sheight = function() {
      return this.height
    }
    ,
    e.prototype.orient = function() {
      return "portrait"
    }
    ,
    e.prototype.updatePanelSize = function(t, e) {
      return this.height = e,
      this.width = t,
      this.lsave()
    }
    ,
    e
  }(Project)
}
.call(this),
function() {
  var i = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }
    , r = {}.hasOwnProperty;
  this.CommentThread = function(t) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return i(e, t),
    e.configure("CommentThread", "cid", "mtime", "screen_cid", "user_id", "created_at", "updated_at", "left", "top"),
    e.include(Spine.Model.Dirty),
    e.prototype.load = function(t) {
      return this.id = t.cid,
      e.__super__.load.call(this, t)
    }
    ,
    e.prototype.s = function() {
      return $("body").data("scale")
    }
    ,
    e.prototype.getLeft = function() {
      return (this.left || 0) * this.s() / 100
    }
    ,
    e.prototype.getTop = function() {
      return (this.top || 0) * this.s() / 100
    }
    ,
    e.prototype.setLeft = function(t) {
      return this.left = Math.round(100 * t / this.s())
    }
    ,
    e.prototype.setTop = function(t) {
      return this.top = Math.round(100 * t / this.s())
    }
    ,
    e
  }(Spine.Model),
  this.Comment = function(t) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return i(e, t),
    e.configure("Comment", "cid", "mtime", "thread_cid", "user_id", "created_at", "updated_at", "message"),
    e.include(Spine.Model.Dirty),
    e.prototype.load = function(t) {
      return this.id = t.cid,
      e.__super__.load.call(this, t)
    }
    ,
    e
  }(Spine.Model)
}
.call(this),
function() {
  var e = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }
    , r = {}.hasOwnProperty;
  this.Link = function(t) {
    function i() {
      return i.__super__.constructor.apply(this, arguments)
    }
    return e(i, t),
    i.configure("Link", "cid", "mtime", "target_cid", "screen_cid", "transition", "gesture", "destroyed", "timer", "state_cid", "menu_offset", "timestamp", "targetstate_cid", "sourcestate_cid", "ani_duration", "easing", "ani_delay", "reset", "left", "right", "top", "bottom", "width", "height"),
    i.include(Spine.Model.Dirty),
    i.prototype.load = function(t) {
      var e;
      return this.id = t.cid,
      i.__super__.load.call(this, t),
      this.panel_cid = "",
      this.menu_offset || (this.menu_offset = 75),
      this.ani_duration || (this.ani_duration = this.targetstate_cid ? "0.4s" : "0.2s"),
      this.ani_delay || (this.ani_delay = ""),
      this.easing || (this.easing = "linear"),
      this.sourcestate_cid || (this.sourcestate_cid = "default"),
      this.targetstate_cid || (this.targetstate_cid = null),
      (e = Screen.find(this.target_cid)) && e.cp() ? this.template = e.cp().template : this.template = !1
    }
    ,
    i.prototype.cs = function() {
      return Screen.find(this.screen_cid)
    }
    ,
    i.prototype.ts = function() {
      return this.target_cid ? Screen.find(this.target_cid) : this.targetstate_cid ? Screen.find(this.screen_cid) : void 0
    }
    ,
    i.prototype.cwidgets = function() {
      var t, e;
      return MB.linkCaches || (MB.linkCaches = {}),
      t = this.cs() ? this.cid + this.cs().state_cid : this.cid,
      MB.linkCaches[t] ? MB.linkCaches[t] : (e = [],
      e = (e = Widget.findAllByAttribute("link_cids", this.cid)).concat(Panel.findAllByAttribute("link_cids", this.cid)),
      MB.linkCaches[t] = e)
    }
    ,
    i.prototype.delay = function() {
      return this.ani_duration || "0s"
    }
    ,
    i.prototype.restore = function(t) {
      return this.transition = t.transition,
      this.timer = t.timer,
      this.menu_offset = t.menu_offset,
      this.gesture = t.gesture,
      this.ani_duration = t.ani_duration,
      this.ani_delay = t.ani_delay,
      this.target_cid = t.target_cid,
      this.targetstate_cid = t.targetstate_cid
    }
    ,
    i
  }(Spine.Model)
}
.call(this),
function() {
  var e = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }
    , r = {}.hasOwnProperty;
  this.Panel = function(t) {
    function o() {
      return o.__super__.constructor.apply(this, arguments)
    }
    return e(o, t),
    o.configure("Panel", "cid", "mtime", "screen_cid", "template_cid", "top", "left", "width", "height", "name", "gid", "z", "timestamp", "v", "fixed", "fixed_type", "main_state_cid", "screenstate_cid", "locked", "link_cids", "primary_fixed", "display_name", "timerFired"),
    o.include(Spine.Model.Dirty),
    o.include(Spine.Model.State),
    o.BASE_ATTRS = ["template_cid", "display_name"],
    o.STATE_ATTRS = ["top", "left", "width", "height", "v", "fixed", "fixed_type", "z", "gid", "timestamp", "main_state_cid", "locked", "link_cids", "primary_fixed"],
    o.ATTRS = o.BASE_ATTRS.concat(o.STATE_ATTRS),
    o.prototype.inspectables = function() {
      return ["states", "left", "top", "width", "height", "fixed", "fixed_type", "v", "main_state_cid", "locked", "primary_fixed", "display_name"]
    }
    ,
    o.prototype.load = function(t) {
      var e, i, n, r;
      for (e in this.id = t.cid,
      i = MB.panelMigrator(t))
        r = i[e],
        t[e] = r;
      return this.moveable = !0,
      this.gestureable = !0,
      this.name = "panel",
      o.__super__.load.call(this, t),
      this.timestamp || (this.timestamp = MB.lastTimestamp()),
      this.timestamp > MB.maxTimestamp && (MB.maxTimestamp = this.timestamp),
      this.zoomable = "e,w,n,s",
      this.ro = 0,
      !1 !== this.v && (this.v || (this.v = !0)),
      this.locked || (this.locked = !1),
      this.primary_fixed || (this.primary_fixed = 0),
      this.o || (this.o = 100),
      n = Template.find(this.template_cid),
      this.display_name || (this.display_name = n && n.name),
      0 !== this.z && (this.z || (this.z = 5)),
      this.z = Math.min(this.z, Math.pow(2, 31) - 1),
      this.gid || (this.gid = ""),
      !this.link_cids && this.gid && "l" === this.gid[0] && (this.link_cids = this.gid),
      this.main_state_cid || (this.main_state_cid = null),
      this.screenstate_cid || (this.screenstate_cid = "default")
    }
    ,
    o.prototype.getState = function(t) {
      return Panelstate.find(t + this.cid) || new Panelstate({
        cid: t + this.cid,
        screenstate_cid: t,
        panel_cid: this.cid
      }).restore(this)
    }
    ,
    o.prototype.restore = function(t) {
      var e, i, n, r;
      for (t.screen_cid && (this.screen_cid = t.screen_cid),
      i = 0,
      n = (r = o.ATTRS).length; i < n; i++)
        this[e = r[i]] = t[e];
      return this
    }
    ,
    o.prototype.restoreBase = function(t) {
      var e, i, n, r;
      for (t.screen_cid && (this.screen_cid = t.screen_cid),
      i = 0,
      n = (r = o.BASE_ATTRS).length; i < n; i++)
        this[e = r[i]] = t[e];
      return this
    }
    ,
    o.prototype.restoreState = function(t) {
      var e, i, n, r;
      for (t.screen_cid && (this.screen_cid = t.screen_cid),
      i = 0,
      n = (r = o.STATE_ATTRS).length; i < n; i++)
        this[e = r[i]] = t[e];
      return this
    }
    ,
    o.prototype.equals = function(t) {
      var e, i, n, r;
      for (i = 0,
      n = (r = o.ATTRS).length; i < n; i++)
        if (this[e = r[i]] !== t[e])
          return !1;
      return !0
    }
    ,
    o.prototype.ct = function() {
      return Template.find(this.template_cid)
    }
    ,
    o.prototype.mainState = function() {
      var t;
      return (t = Screen.find(this.main_state_cid)) && t.project_cid === this.template_cid ? t : this.ct().homeScreen()
    }
    ,
    o.prototype.l = function() {
      return this.left
    }
    ,
    o.prototype.t = function() {
      return this.top
    }
    ,
    o.prototype.w = function() {
      return this.width
    }
    ,
    o.prototype.h = function() {
      return this.height
    }
    ,
    o.prototype.r = function() {
      return this.left + this.width
    }
    ,
    o.prototype.b = function() {
      return this.top + this.height
    }
    ,
    o.prototype.rect = function() {
      return {
        top: this.top,
        left: this.left,
        width: this.width,
        height: this.height,
        right: this.left + this.width,
        bottom: this.top + this.height
      }
    }
    ,
    o.prototype.cs = function() {
      return this._cs || (this._cs = Screen.find(this.screen_cid))
    }
    ,
    o.prototype.isFooter = function() {
      return !1
    }
    ,
    o.prototype.inFooter = function() {
      return this.t() >= this.cs().footerTop() && this.t() <= this.cs().height
    }
    ,
    o.prototype.valid = function() {
      var t;
      return !(!(t = Template.find(this.template_cid)) || !t.cscreens().length) || (MB.ga("send", "event", "bug", "\u53d1\u73b0\u4e00\u4e2a\u9875\u9762\u6ca1\u6709\u4e0b\u8f7d\u7684\u6bcd\u7248"),
      this.ldestroy(),
      !1)
    }
    ,
    o
  }(Spine.Model)
}
.call(this),
function() {
  var i = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }
    , r = {}.hasOwnProperty;
  this.Panelstate = function(t) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return i(e, t),
    e.configure("Panelstate", "cid", "mtime", "panel_cid", "screen_cid", "template_cid", "top", "left", "width", "height", "name", "gid", "z", "timestamp", "v", "fixed", "fixed_type", "main_state_cid", "screenstate_cid", "locked", "link_cids", "primary_fixed", "display_name"),
    e.include(Spine.Model.Dirty),
    e.prototype.load = function(t) {
      if (e.__super__.load.call(this, t),
      "default" !== this.screenstate_cid)
        return this.screen_cid = null
    }
    ,
    e
  }(Panel)
}
.call(this),
function() {
  var i = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }
    , r = {}.hasOwnProperty;
  this.Preference = function(t) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return i(e, t),
    e.configure("Preference", "cid", "gt", "gl", "asset", "at", "al", "rt", "rl", "link_line", "grid", "ct", "cl", "pt", "pl", "ruler", "guide", "app_order"),
    e.include(Spine.Model.Dirty),
    e.prototype.load = function(t) {
      return e.__super__.load.call(this, t),
      this.states = !0
    }
    ,
    e
  }(Spine.Model)
}
.call(this),
function() {
  var u, e = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }, r = {}.hasOwnProperty, o = [].indexOf || function(t) {
    for (var e = 0, i = this.length; e < i; e++)
      if (e in this && this[e] === t)
        return e;
    return -1
  }
  ;
  u = function(t) {
    var e;
    return e = t.cid,
    /^w_default_/.test(e)
  }
  ,
  this.Screen = function(t) {
    function c() {
      c.__super__.constructor.apply(this, arguments)
    }
    return e(c, t),
    c.configure("Screen", "cid", "mtime", "name", "orientation", "position", "project_cid", "parent_cid", "expanded", "height", "hh", "fh", "bgcolor", "bgimage", "width", "artboard_id", "state_cid", "_widgetsByName"),
    c.include(Spine.Model.Dirty),
    c.prototype.load = function(t) {
      if (this.id = t.cid,
      c.__super__.load.call(this, t),
      this.project_cid || (this.project_cid = t.project_cid),
      this.project_cid)
        return this.height || (this.height = this.cp().sheight(this.orientation || this.orient())),
        this.width || (this.width = this.cp().swidth(this.orientation || this.orient())),
        this.bgcolor || (this.bgcolor = this.dBg()),
        this.state_cid || (this.state_cid = "default")
    }
    ,
    c.prototype.device = function() {
      return this.cp().device
    }
    ,
    c.prototype.scale = function() {
      return this.cp().scale
    }
    ,
    c.prototype.orient = function() {
      return "customize" === this.cp().model ? this.width && this.cp().width !== this.width ? "landscape" : "portrait" : this.orientation.toLowerCase()
    }
    ,
    c.prototype.h = function() {
      return Math.round(this.height * MB.scale() / 100)
    }
    ,
    c.prototype.w = function() {
      return Math.round(this.width * MB.scale() / 100)
    }
    ,
    c.prototype.cp = function() {
      return /^t/.test(this.project_cid) ? Template.find(this.project_cid) : /^c/.test(this.project_cid) ? Combo.find(this.project_cid) : /^ut/.test(this.project_cid) ? UserTemplate.find(this.project_cid) : Project.find(this.project_cid)
    }
    ,
    c.prototype.cgroups = function() {
      return Widget.all().filter((e = this,
      function(t) {
        return "group" === t.name && t.screen_cid === e.cid
      }
      )).sort(function(t, e) {
        return t.timestamp - e.timestamp
      });
      var e
    }
    ,
    c.prototype.cwidgets = function() {
      return Widget.findAllByAttribute("screen_cid", this.cid).sort(function(t, e) {
        return t.timestamp - e.timestamp
      })
    }
    ,
    c.prototype.cpanels = function() {
      return Panel.findAllByAttribute("screen_cid", this.cid).sort(function(t, e) {
        return t.timestamp - e.timestamp
      })
    }
    ,
    c.prototype.cscreenstates = function() {
      return Screenstate.findAllByAttribute("screen_cid", this.cid).sort(function(t, e) {
        return t.timestamp - e.timestamp
      })
    }
    ,
    c.prototype.citems = function() {
      var t, e;
      return e = Widget.findAllByAttribute("screen_cid", this.cid),
      t = Panel.findAllByAttribute("screen_cid", this.cid),
      e.concat(t).sort(function(t, e) {
        return t.z - e.z || t.timestamp - e.timestamp
      })
    }
    ,
    c.prototype.clinks = function() {
      return Link.select((e = this,
      function(t) {
        return t.screen_cid === e.cid && !t.state_cid
      }
      ));
      var e
    }
    ,
    c.prototype.parent = function() {
      return c.find(this.parent_cid)
    }
    ,
    c.prototype.moveable = function() {
      var t;
      return !(t = this.cp()).template && !t.combo
    }
    ,
    c.prototype.expandable = function() {
      var t, e, i, n;
      for (t = [(n = this).cid]; e = n.parent(); )
        i = e.cid,
        0 <= o.call(t, i) ? (n.parent_cid = null,
        n.lsave()) : (n = e,
        t.push(n.cid));
      return t.length < 4
    }
    ,
    c.prototype.siblings = function() {
      return this.parent_cid ? this.parent().children() : this.cp().rootScreens()
    }
    ,
    c.prototype.isLastChild = function() {
      var t, e;
      return (t = this.siblings()).findIndex((e = this,
      function(t) {
        return t.cid === e.cid
      }
      )) === t.length - 1
    }
    ,
    c.prototype.children = function() {
      var e;
      return c.select((e = this,
      function(t) {
        return t.parent_cid === e.cid
      }
      )).sort(function(t, e) {
        return t.position - e.position
      })
    }
    ,
    c.prototype.getState = function(t) {
      return Screenstate.find(t) || new Screenstate({
        cid: t
      })
    }
    ,
    c.prototype.setState = function(t, e) {
      var i, n;
      if (t !== this.state_cid)
        return i = this.getState(this.cid + "default"),
        "default" === this.state_cid && (i.hh = this.hh,
        i.fh = this.fh,
        i.lsave(!1)),
        this.state_cid = t,
        this.lsave(!1),
        n = "default" === t ? i : this.getState(t),
        this.hh = "number" == typeof n.hh ? n.hh : i.hh,
        this.fh = "number" == typeof n.fh ? n.fh : i.fh,
        e ? this.lsave(!1) : void 0
    }
    ,
    c.prototype.setOrientation = function(t) {
      return this.orientation = t,
      this.height = this.cp().sheight(t),
      this.width = this.cp().swidth(t)
    }
    ,
    c.LINEDATAMAP = {
      iphone_x: {
        portrait: [799, 121, 134],
        landscape: [364, 299, 214]
      },
      iphone_xs_max: {
        portrait: [883, 141, 134],
        landscape: [404, 341, 214]
      }
    },
    c.prototype.setup = function(t) {
      var e, i, n, r, o, s, a, l;
      if (i = (e = this.cp()).device,
      s = e.model,
      "web" !== i)
        return l = /iphone_x/.test(s) ? "iphone_x" : ["iphone", "ipad"].includes(i) ? "ios" : "android" === i ? "android" : void 0,
        new Widget({
          cid: "w_default_" + Math.uuid(10, 16) + (new Date).valueOf(),
          name: l + "_status_bar",
          left: null,
          top: null,
          width: this.width,
          height: MB.COMPONENTS[l + "_status_bar"].height,
          screen_cid: this.cid
        }).lsave(),
        t && new Widget({
          cid: "w_default_" + Math.uuid(10, 16) + (new Date).valueOf(),
          name: "nav_bar",
          left: null,
          top: MB.COMPONENTS[l + "_status_bar"].height,
          height: MB.COMPONENTS.nav_bar.height,
          text: t,
          width: this.width,
          screen_cid: this.cid
        }).lsave(),
        /iphone_x/.test(s) ? (new Widget({
          cid: "w_default_" + Math.uuid(10, 16) + (new Date).valueOf(),
          screen_cid: this.cid,
          name: "tab_bar",
          width: this.width,
          height: 34,
          bc: "transparent"
        }).lsave(),
        r = (a = c.LINEDATAMAP[s][this.orientation])[0],
        n = a[1],
        o = a[2],
        new Widget({
          cid: "w_default_" + Math.uuid(10, 16) + (new Date).valueOf(),
          screen_cid: this.cid,
          name: "rounded_rect",
          bs: 0,
          border_radius: "3",
          bg: "#000000",
          top: r,
          left: n,
          width: o,
          height: 5
        }).lsave()) : void 0
    }
    ,
    c.prototype.maxZ = function() {
      var i, n, r;
      return i = -Infinity,
      Widget.select((n = this,
      function(t) {
        var e;
        return t.screen_cid === n.cid && (e = t.name,
        o.call(Widget.ALWAYS_ON_TOP_NAMES, e) < 0) && (i = Math.max(i, t.z)),
        !1
      }
      )),
      Panel.select((r = this,
      function(t) {
        var e;
        return t.screen_cid === r.cid && (e = t.name,
        o.call(Widget.ALWAYS_ON_TOP_NAMES, e) < 0) && (i = Math.max(i, t.z)),
        !1
      }
      )),
      isFinite(i) ? i : 5
    }
    ,
    c.prototype.minZ = function() {
      var i, n, r;
      return i = Infinity,
      Widget.select((n = this,
      function(t) {
        var e;
        return t.screen_cid === n.cid && (e = t.name,
        o.call(Widget.ALWAYS_ON_TOP_NAMES, e) < 0) && (i = Math.min(i, t.z)),
        !1
      }
      )),
      Panel.select((r = this,
      function(t) {
        var e;
        return t.screen_cid === r.cid && (e = t.name,
        o.call(Widget.ALWAYS_ON_TOP_NAMES, e) < 0) && (i = Math.min(i, t.z)),
        !1
      }
      )),
      isFinite(i) ? i : 5
    }
    ,
    c.prototype.widgetsByName = function() {
      var t, e, i, n;
      if (!this._widgetsByName) {
        for (this._widgetsByName = {},
        t = 0,
        e = (i = this.cwidgets()).length; t < e; t++)
          n = i[t],
          this._widgetsByName[n.name] = n;
        this.lsave(!1)
      }
      return this._widgetsByName
    }
    ,
    c.prototype.sb = function() {
      return this.widgetsByName().status_bar
    }
    ,
    c.prototype.tb = function() {
      return this.widgetsByName().tab_bar
    }
    ,
    c.prototype.nb = function() {
      return this.widgetsByName().navigation_bar
    }
    ,
    c.prototype.kb = function() {
      return this.widgetsByName().keyboard
    }
    ,
    c.prototype.sbH = function() {
      return this.sb() ? this.sb().height : 0
    }
    ,
    c.prototype.tbH = function() {
      return this.tb() ? this.tb().height : 0
    }
    ,
    c.prototype.nbH = function() {
      return this.nb() ? this.nb().height : 0
    }
    ,
    c.prototype.kbH = function() {
      return "web" !== this.cp().device && this.kb() ? this.kbDH() : 0
    }
    ,
    c.KEYBOARDS = {
      ipad: {
        portrait: [1536, 526],
        landscape: [2048, 704]
      },
      iphone: {
        portrait: [640, 348],
        landscape: [1136, 252]
      },
      android: {
        portrait: [574, 354],
        landscape: [956, 278]
      }
    },
    c.prototype.kbDH = function() {
      var t, e, i, n;
      return t = this.cp().device,
      n = (i = c.KEYBOARDS[t][this.orient()])[0],
      e = i[1],
      Math.round(e * this.width / n)
    }
    ,
    c.prototype.headerHeight = function(t) {
      var e, i, n, r, o, s, a, l, c;
      return null == t && (t = 100),
      this.cp().template ? 0 : isFinite(this.hh) && null !== this.hh ? this.hh * t / 100 : (e = (o = this.cp()).device,
      n = o.model,
      i = (s = this.cwidgets())[0],
      l = s[1],
      c = /iphone_x/.test(n) ? "iphone_x" : ["iphone", "ipad"].includes(e) ? "ios" : "android" === e ? "android" : "ios",
      a = !!i && /_status_bar$/.test(i.name) && u(i) ? MB.COMPONENTS[i.name].height : this.sbH(),
      r = !!l && "nav_bar" === l.name && u(l) ? MB.COMPONENTS.nav_bar.height : this.nbH(),
      ((!!i && "nav_bar" === i.name && u(i) ? MB.COMPONENTS.nav_bar.height + MB.COMPONENTS[c + "_status_bar"].height : null) || a + r) * t / 100)
    }
    ,
    c.prototype.footerHeight = function(t) {
      return null == t && (t = 100),
      this.cp().template || 0 === this.fh ? 0 : (this.fh || Math.max(this.kbH(), this.tbH())) * t / 100
    }
    ,
    c.prototype.headerHeightS = function() {
      return this.headerHeight(MB.scale())
    }
    ,
    c.prototype.footerHeightS = function() {
      return this.footerHeight(MB.scale())
    }
    ,
    c.prototype.footerTop = function() {
      return this.height - this.footerHeight()
    }
    ,
    c.prototype.dW = function() {
      return Math.round(this.cp().swidth(this.orient()) * MB.scale() / 100)
    }
    ,
    c.prototype.dH = function() {
      return Math.round(this.cp().sheight(this.orient()) * MB.scale() / 100)
    }
    ,
    c.prototype.dBg = function() {
      return "project" === this.cp().type() ? MB.config.screenBg : "transparent"
    }
    ,
    c.prototype.bg = function() {
      return "project" === this.cp().type() && "transparent" === this.bgcolor ? MB.config.screenBg : this.bgcolor
    }
    ,
    c.prototype.eH = function() {
      return this.h() - this.dH()
    }
    ,
    c.prototype.splash = function() {
      return this.cp().splash || ""
    }
    ,
    c.prototype.sa = function() {
      return ScreenAlign.find(this.cid) || new ScreenAlign({
        cid: this.cid
      })
    }
    ,
    c.prototype.halignLines = function() {
      var t, e, i, n, r;
      for (r = [],
      t = 0,
      i = (n = this.sa().h.split(",")).length; t < i; t++)
        (e = n[t]) && r.push(Number(e));
      return r
    }
    ,
    c.prototype.valignLines = function() {
      var t, e, i, n, r;
      for (r = [],
      t = 0,
      i = (n = this.sa().v.split(",")).length; t < i; t++)
        (e = n[t]) && r.push(Number(e));
      return r
    }
    ,
    c.prototype.getRealBgImage = function() {
      var t;
      return (t = Asset.find(this.bgimage)) ? t.image || t.raw : this.bgimage
    }
    ,
    c.prototype.detectConflict = function(t) {
      var e, i, n, r, o, s, a, l;
      for (e = 0,
      r = (s = t ? [t] : this.clinks()).length; e < r; e++)
        if (n = s[e],
        -1 !== ["up", "down"].indexOf(n.gesture)) {
          if (this.height > this.dH())
            return void MB.alertAsync({
              title: I18N.gesture_conflict,
              desc: I18N.vertical_conflict
            })
        } else if (-1 !== ["left", "right"].indexOf(n.gesture))
          for (i = 0,
          o = (l = this.cpanels()).length; i < o; i++)
            if ((a = l[i]).width < a.ct().width)
              return void MB.alertAsync({
                title: I18N.gesture_conflict,
                desc: I18N.horizontal_conflict
              })
    }
    ,
    c
  }(Spine.Model)
}
.call(this),
function() {
  var i = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }
    , r = {}.hasOwnProperty;
  this.ScreenAlign = function(t) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return i(e, t),
    e.configure("screen_align", "cid", "h", "v"),
    e.include(Spine.Model.Dirty),
    e.prototype.load = function(t) {
      return e.__super__.load.call(this, t),
      this.h || (this.h = ""),
      this.v || (this.v = "")
    }
    ,
    e
  }(Spine.Model)
}
.call(this),
function() {
  var i = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }
    , r = {}.hasOwnProperty;
  this.Screenstate = function(t) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return i(e, t),
    e.configure("Screenstate", "cid", "mtime", "name", "screen_cid", "timestamp", "hh", "fh"),
    e.include(Spine.Model.Dirty),
    e.prototype.load = function(t) {
      return this.id = t.cid,
      e.__super__.load.call(this, t)
    }
    ,
    e.prototype.cs = function() {
      return Screen.find(this.screen_cid)
    }
    ,
    e.prototype.widgetStates = function() {
      return Widgetstate.findAllByAttribute("screenstate_cid", this.cid)
    }
    ,
    e.prototype.panelStates = function() {
      return Panelstate.findAllByAttribute("screenstate_cid", this.cid)
    }
    ,
    e.prototype.stateLinks = function() {
      return Link.select((e = this,
      function(t) {
        return t.sourcestate_cid === e.cid || t.targetstate_cid === e.cid
      }
      ));
      var e
    }
    ,
    e
  }(Spine.Model)
}
.call(this),
function() {
  var i = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }
    , r = {}.hasOwnProperty;
  this.Team = function(t) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return i(e, t),
    e.configure("Team", "cid", "mtime", "name", "icon", "owner_id", "owner_email", "owner_name", "owner_avatar", "color", "updated_at", "created_at", "limitation"),
    e.include(Spine.Model.Dirty),
    e.prototype.load = function(t) {
      return this.id = t.cid,
      e.__super__.load.call(this, t)
    }
    ,
    e.prototype.cprojects = function() {
      return Project.select((e = this,
      function(t) {
        return t.team_cid === e.cid && !t.deleted && !t.template && !t.combo && t.screens_count
      }
      ));
      var e
    }
    ,
    e.prototype.collaborators = function() {
      return Collaborator.select((e = this,
      function(t) {
        return "MOCK" !== t.email && t.team_cid === e.cid
      }
      ));
      var e
    }
    ,
    e.prototype.collaboratorByUid = function(t) {
      var e, i, n, r;
      for (i = 0,
      n = (r = this.collaborators()).length; i < n; i++)
        if ((e = r[i]).user_id === t)
          return e;
      return null
    }
    ,
    e.prototype.roleByUid = function(t) {
      var e;
      return t === this.owner_id ? "admin" : (e = this.collaboratorByUid(t)) ? e.role : "none"
    }
    ,
    e.prototype.canAdmin = function() {
      return "admin" === this.roleByUid(MB.user.id)
    }
    ,
    e.prototype.isTeam = function() {
      return !0
    }
    ,
    e.prototype.colorO = function(t) {
      return this.color.replace("RGB", "RGBA").replace(")", "," + t + ")")
    }
    ,
    e
  }(Spine.Model)
}
.call(this),
function() {
  var i = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }
    , r = {}.hasOwnProperty;
  this.Template = function(t) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return i(e, t),
    e.configure("Template", "cid", "mtime", "project_cid", "created_at", "updated_at", "access", "access_token", "name", "width", "height", "scale", "deleted", "destroyed", "parent_cid", "master", "break_away", "template", "builtin"),
    e.include(Spine.Model.Dirty),
    e.masters = function() {
      return this.select(function(t) {
        return t.master && !t.deleted && !t.builtin
      })
    }
    ,
    e.prototype.load = function(t) {
      return this.id = t.cid,
      e.__super__.load.call(this, t),
      this.access_token || (this.access_token = Math.uuid(33)),
      this.template = !0,
      this.created_at = new Date(t.created_at).valueOf(),
      this.updated_at = new Date(t.updated_at).valueOf(),
      this.timestamp = .001 * this.updated_at
    }
    ,
    e.prototype.cp = function() {
      return Project.find(this.project_cid)
    }
    ,
    e.prototype.swidth = function() {
      return this.width
    }
    ,
    e.prototype.sheight = function() {
      return this.height
    }
    ,
    e.prototype.orient = function() {
      return "portrait"
    }
    ,
    e.prototype.updatePanelSize = function(t, e) {
      var i, n, r, o, s, a, l, c;
      for (i = 0,
      r = (a = Panel.findAllByAttribute("template_cid", this.cid)).length; i < r; i++)
        (s = a[i]).height = e,
        s.width === this.width && (s.width = t),
        s.lsave();
      for (n = 0,
      o = (l = this.cscreens()).length; n < o; n++)
        (c = l[n]).height = e,
        c.width = t,
        c.lsave();
      return this.height = e,
      this.width = t,
      this.lsave()
    }
    ,
    e
  }(Project)
}
.call(this),
function() {
  var i = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }
    , r = {}.hasOwnProperty;
  this.UserTemplate = function(t) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return i(e, t),
    e.configure("Users/Template", "cid", "mtime", "created_at", "updated_at", "access", "access_token", "name", "width", "height", "scale", "deleted", "destroyed", "parent_cid"),
    e.include(Spine.Model.Dirty),
    e.prototype.load = function(t) {
      return e.__super__.load.call(this, t)
    }
    ,
    e.prototype.cp = function() {
      return this
    }
    ,
    e.prototype.type = function() {
      return "UserTemplate"
    }
    ,
    e.prototype.swidth = function() {
      return this.width
    }
    ,
    e.prototype.sheight = function() {
      return this.height
    }
    ,
    e.prototype.rootScreens = function() {
      var e;
      return Screen.select((e = this,
      function(t) {
        return t.project_cid === e.cid && !t.parent_cid
      }
      )).sort(function(t, e) {
        return t.position - e.position
      })
    }
    ,
    e.prototype.homeScreen = function() {
      return this.rootScreens()[0]
    }
    ,
    e.prototype.cscreens = function() {
      return Screen.findAllByAttribute("project_cid", this.cid)
    }
    ,
    e.prototype.orient = function() {
      return "portrait"
    }
    ,
    e.prototype.setup = function() {
      return !0
    }
    ,
    e.prototype.isPrivate = function() {
      return "private" === this.access
    }
    ,
    e.prototype.isPublic = function() {
      return "public" === this.access
    }
    ,
    e.prototype.isWeb = function() {
      return !1
    }
    ,
    e.prototype.isAndroid = function() {
      return !1
    }
    ,
    e
  }(Spine.Model)
}
.call(this),
function() {
  var e = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }
    , r = {}.hasOwnProperty
    , s = [].indexOf || function(t) {
    for (var e = 0, i = this.length; e < i; e++)
      if (e in this && this[e] === t)
        return e;
    return -1
  }
  ;
  this.Widget = function(t) {
    function c() {
      return c.__super__.constructor.apply(this, arguments)
    }
    return e(c, t),
    c.configure("Widget", "cid", "mtime", "screen_cid", "screenstate_cid", "destroyed", "name", "text", "icon", "top", "left", "width", "height", "ro", "fs", "br", "border_radius", "bs", "is", "ha", "va", "image", "z", "th", "lh", "o", "ds", "sc", "bg", "tc", "bc", "bo", "i", "td", "f", "ts", "tsc", "box_shadow", "text_shadow", "p", "gid", "timestamp", "padding", "ls", "checked", "numeric", "tt_placement", "tt_offset", "tt_arrow_size", "v", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration", "input_type", "slw", "slt", "clip", "filter", "locked", "link_cids", "primary_fixed", "size_type", "points", "display_name", "expanded"),
    c.include(Spine.Model.Dirty),
    c.include(Spine.Model.State),
    c.BASE_ATTRS = ["display_name", "expanded"],
    c.STATE_ATTRS = ["name", "text", "icon", "width", "height", "left", "top", "gid", "link_cids", "timestamp", "fs", "is", "bs", "br", "border_radius", "va", "ha", "lh", "z", "th", "image", "bg", "tc", "bc", "ds", "box_shadow", "sc", "ts", "text_shadow", "tsc", "o", "bo", "i", "td", "p", "ro", "ls", "padding", "checked", "numeric", "v", "fixed", "fixed_type", "tt_placement", "tt_offset", "tt_arrow_size", "ani_name", "ani_delay", "ani_count", "ani_duration", "input_type", "slw", "slt", "clip", "filter", "locked", "primary_fixed", "size_type", "points"],
    c.ATTRS = c.BASE_ATTRS.concat(c.STATE_ATTRS),
    c.FIXED_TYPE = {
      not_fixed: 0,
      top: 1,
      bottom: 2
    },
    c.MAXZ = Math.pow(2, 29) - 1,
    c.STICKY_Z = Math.pow(2, 30) - 1,
    c.ALWAYS_ON_TOP_NAMES = ["sticky", "pg"],
    c.prototype.load = function(t) {
      var e, i, n, r, o;
      for (e in this.id = t.cid,
      n = MB.widgetMigrator(t))
        o = n[e],
        t[e] = o;
      if (c.__super__.load.call(this, t),
      this.box_shadow && (this.box_shadow = this.repairShadow(this.box_shadow)),
      this.text_shadow && (this.text_shadow = this.repairShadow(this.text_shadow)),
      this.multiline = -1 !== ["text_view", "sticky", "rounded_rect", "circle_rect", "mtooltip", "mselect"].indexOf(this.name),
      this.richedit = -1 !== ["label", "text_view", "sticky", "rounded_rect", "circle_rect", "mtooltip"].indexOf(this.name),
      this.iconic = ["icon_button", "tab_item"].includes(this.name) || "button" === this.name && !!this.icon,
      this.moveable = -1 === ["status_bar", "tab_bar", "keyboard"].indexOf(this.name),
      this.gestureable = -1 !== ["pg", "lr", "image_view", "rectangle", "rounded_rect", "circle_rect"].indexOf(this.name),
      "mcheckbox" === this.name && (this.name = "mcheckbox2"),
      MB.COMPONENTS[this.name] ? this.zoomable = MB.COMPONENTS[this.name].zoomable || "n,s,e,w,ne,nw,se,sw" : this.zoomable = " ",
      this.display_name || (this.display_name = I18N.w[this.name]),
      this.expanded || (this.expanded = !1),
      -1 !== ["text_field"].indexOf(this.name) && (this.zoomable = "n,s,e,w,ne,nw,se,sw"),
      (i = MB.COMPONENTS[this.name]) && ("number" != typeof this.fs && (this.fs = i.fs),
      "number" != typeof this.is && (this.is = i.is),
      "number" != typeof this.bs && (this.bs = i.bs),
      this.ha || (this.ha = i.ha),
      this.va || (this.va = i.va),
      0 !== this.z && (this.z || (this.z = i.z)),
      this.padding || (this.padding = i.padding),
      i.lh && (this.lh || (this.lh = Math.floor(this.fs * i.lh)))),
      this.text || (this.text = ""),
      "label" === this.name && (this.text = this.text.replace(/\n$/, "")),
      this.autoWidth = "label" === this.name,
      this.autoHeight = -1 !== ["mtooltip", "text_view", "sticky"].indexOf(this.name),
      this.th || (this.th = "status_bar" === this.name ? "light" : ""),
      0 !== this.o && (this.o || (this.o = 100)),
      this.ds || (this.ds = 0),
      this.bs || (this.bs = 0),
      this.border_radius || (this.border_radius = ""),
      this.sc || (this.sc = MB.currentProject && MB.currentProject.isAndroid() ? "#222222" : "#aaaaaa"),
      this.ts || (this.ts = 0),
      this.tsc || (this.tsc = "#aaaaaa"),
      this.bo || (this.bo = 0),
      this.i || (this.i = 0),
      this.td || (this.td = "normal"),
      this.bg || (this.bg = ""),
      this.tc || (this.tc = ""),
      this.bc || (this.bc = ""),
      0 !== this.z && (this.z || (this.z = 5)),
      this.ro || (this.ro = 0),
      this.ls || (this.ls = 0),
      this.filter || (this.filter = ""),
      this.input_type || (this.input_type = "text"),
      this.timestamp || (this.timestamp = MB.lastTimestamp()),
      this.timestamp > MB.maxTimestamp && (MB.maxTimestamp = this.timestamp),
      this.padding = Math.round(this.padding || 0),
      !1 !== this.checked && (this.checked || (this.checked = !0)),
      this.numeric || (this.numeric = !1),
      !1 !== this.v && (this.v || (this.v = !0)),
      !1 !== this.p && (this.p || (this.p = !0)),
      this.locked || (this.locked = !1),
      this.primary_fixed || (this.primary_fixed = 0),
      this.tt_placement || (this.tt_placement = "left"),
      this.tt_offset = Math.round(this.tt_offset || 10),
      this.tt_arrow_size = Math.round(this.tt_arrow_size || 10),
      this.screenstate_cid || (this.screenstate_cid = "default"),
      this.ani_name || (this.ani_name = "none"),
      this.slt || (this.slt = 20),
      this.slw || (this.slw = 50),
      r = this.name,
      0 <= s.call(c.ALWAYS_ON_TOP_NAMES, r) && (this.z = c.STICKY_Z),
      this.gid || (this.gid = ""),
      !this.link_cids && this.gid && "l" === this.gid[0] && (this.link_cids = this.gid),
      "label" === this.name && /\n/.test(this.text))
        return this.name = "text_view"
    }
    ,
    c.prototype.repairShadow = function(t) {
      var e, i;
      try {
        return i = JSON.parse(t),
        (e = [])[0] = i[0].map(function(t, e) {
          for (; t.indexOf && -1 < t.indexOf("[["); )
            t = JSON.parse(t)[0][e];
          return t
        }),
        JSON.stringify(e).replace(/#rgba/, "rgba")
      } catch (n) {
        return n,
        ""
      }
    }
    ,
    c.prototype.cs = function() {
      return this._cs || (this._cs = Screen.find(this.screen_cid))
    }
    ,
    c.prototype.isFullWidth = function() {
      return -1 !== ["status_bar", "tab_bar", "keyboard"].indexOf(this.name)
    }
    ,
    c.prototype.isFooter = function() {
      return -1 !== ["tab_bar", "keyboard"].indexOf(this.name)
    }
    ,
    c.prototype.inFooter = function() {
      return !this.isFooter() && (0 !== this.cs().footerHeight() && (this.t() >= this.cs().footerTop() && this.t() <= this.cs().height))
    }
    ,
    c.prototype.getState = function(t) {
      return Widgetstate.find(t + this.cid) || new Widgetstate({
        cid: t + this.cid,
        screenstate_cid: t,
        widget_cid: this.cid
      }).restore(this)
    }
    ,
    c.prototype.restore = function(t) {
      var e, i, n, r;
      for (t.screen_cid && (this.screen_cid = t.screen_cid),
      i = 0,
      n = (r = c.ATTRS).length; i < n; i++)
        this[e = r[i]] = t[e];
      return this
    }
    ,
    c.prototype.restoreBase = function(t) {
      var e, i, n, r;
      for (t.screen_cid && (this.screen_cid = t.screen_cid),
      i = 0,
      n = (r = c.BASE_ATTRS).length; i < n; i++)
        this[e = r[i]] = t[e];
      return this
    }
    ,
    c.prototype.restoreState = function(t) {
      var e, i, n, r;
      for (t.screen_cid && (this.screen_cid = t.screen_cid),
      i = 0,
      n = (r = c.STATE_ATTRS).length; i < n; i++)
        this[e = r[i]] = t[e];
      return this
    }
    ,
    c.prototype.equals = function(t) {
      var e, i, n, r;
      for (i = 0,
      n = (r = c.ATTRS).length; i < n; i++)
        if (this[e = r[i]] !== t[e])
          return !1;
      return !0
    }
    ,
    c.prototype.status_bar_t = function() {
      return 0
    }
    ,
    c.prototype.keyboard_t = function() {
      return this.cs() ? this.cs().height - this.height : null
    }
    ,
    c.prototype.tab_bar_t = function() {
      return this.cs() ? this.cs().height - this.height : null
    }
    ,
    c.prototype.navigation_bar_t = function() {
      return this.cs() ? this.cs().sbH() : null
    }
    ,
    c.prototype.t = function() {
      return "navigation_bar" !== this.name || this.top ? this.moveable ? this.top : this[this.name + "_t"]() : this.navigation_bar_t()
    }
    ,
    c.prototype.l = function() {
      return this.left || 0
    }
    ,
    c.prototype.w = function() {
      return this.isFullWidth() && this.cs() ? this.cs().width : this.width
    }
    ,
    c.prototype.h = function() {
      return this.height
    }
    ,
    c.prototype.r = function() {
      return this.l() + this.w()
    }
    ,
    c.prototype.b = function() {
      return this.t() + this.h()
    }
    ,
    c.prototype.rect = function() {
      return this.ro ? this._rotateRect() : {
        top: this.t(),
        left: this.l(),
        width: this.w(),
        height: this.h(),
        right: this.r(),
        bottom: this.b()
      }
    }
    ,
    c.prototype._rotateRect = function() {
      var n, r, o, s, t, a, l, e, i, c, u, h;
      return c = (e = (t = MB.atan2(this.width, this.height)) - this.ro) + 180,
      u = (i = e - 2 * t) + 180,
      r = this.left + this.width / 2,
      o = this.top + this.height / 2,
      s = MB.hypotenuse(this.width / 2, this.height / 2),
      a = h = Infinity,
      l = n = -Infinity,
      [e, i, c, u].forEach(function(t) {
        var e, i;
        if (e = Math.round(r + s * MB.cos(t)),
        i = Math.round(o + s * MB.sin(t)),
        e < a && (a = e),
        i < h && (h = i),
        l < e && (l = e),
        n < i)
          return n = i
      }),
      {
        top: h,
        left: a,
        width: l - a,
        height: n - h,
        right: l,
        bottom: n
      }
    }
    ,
    c.prototype.inspectables = function() {
      return MB.INSPECTABLES[this.name]
    }
    ,
    c.prototype._textWidth = function() {
      var t, e;
      return e = document.getElementById("font-preload"),
      MB.currentProject && (e.className = MB.currentProject.device),
      $("#font-preload .aw").css("font-size", this.fs),
      $("#font-preload .aw").css("font-weight", this.bo ? "bold" : "normal"),
      (t = $("#font-preload .aw").html(this.text).width() + 1 + 2 * this.padding + 2 * this.bs) < 20 && (t = 20),
      t
    }
    ,
    c.prototype.textHeight = function() {
      return this._textHeight(this.text)
    }
    ,
    c.prototype._textHeight = function(t) {
      var e, i, n, r, o;
      return o = this.width - 2 * this.padding - 2 * this.bs,
      "mtooltip" === this.name && -1 !== ["left", "right"].indexOf(this.tt_placement) && (o -= 10),
      n = this.bo ? "bold" : "normal",
      i = document.getElementById("font-preload"),
      MB.currentProject && (i.className = MB.currentProject.device),
      (e = i.getElementsByClassName("ah")[0]).style.fontSize !== this.fs + "px" && (e.style.fontSize = this.fs + "px"),
      e.style.width !== o + "px" && (e.style.width = o + "px"),
      e.style.lineHeight !== this.lh + "px" && (e.style.lineHeight = this.lh + "px"),
      e.style.fontWeight !== n && (e.style.fontWeight = n),
      e.innerHTML = MB.v.multiline(t),
      (r = e.offsetHeight + 2 * this.padding + 2 * this.bs) < 10 && (r = 10),
      r
    }
    ,
    c.prototype.minWidth = function() {
      return -1 !== ["label", "button"].indexOf(this.name) ? this._textWidth() : "line" === this.name ? 1 : 10
    }
    ,
    c.prototype.minHeight = function() {
      return -1 !== ["label", "button"].indexOf(this.name) ? this.lh + 2 * this.padding + 2 * this.bs : -1 !== ["mtooltip", "text_view", "sticky"].indexOf(this.name) ? this.textHeight() : "line" === this.name ? 1 : 10
    }
    ,
    c.prototype.autoSize = function(t) {
      var e, i, n;
      return "rich_text" !== this.name ? null : (i = document.getElementById("font-preload"),
      MB.currentProject && (i.className = MB.currentProject.device),
      (e = i.getElementsByClassName("auto-size")[0]).innerHTML = t(JSON.parse(this.text)),
      n = e.getBoundingClientRect(),
      {
        width: Math.ceil(n.width),
        height: Math.ceil(n.height)
      })
    }
    ,
    c.prototype.autoHeightForFixedWidth = function(t) {
      var e, i, n;
      return "rich_text" !== this.name ? null : (i = document.getElementById("font-preload"),
      MB.currentProject && (i.className = MB.currentProject.device),
      (e = i.getElementsByClassName("auto-height")[0]).style.width = this.width + "px",
      e.innerHTML = t(JSON.parse(this.text)),
      n = e.getBoundingClientRect(),
      Math.ceil(n.height))
    }
    ,
    c.getNormalLineHeight = function(t, e) {
      var i, n, r;
      return n = document.getElementById("font-preload"),
      MB.currentProject && (n.className = MB.currentProject.device),
      (i = n.getElementsByClassName("auto-size")[0]).removeAttribute("style"),
      i.style.whiteSpace = "pre",
      i.style.lineHeight = "normal",
      t && (i.style.fontFamily = t),
      e && (i.style.fontSize = e + "px"),
      i.innerHTML = " ",
      r = i.getBoundingClientRect(),
      Math.ceil(r.height)
    }
    ,
    c.prototype.initialWidth = function(t) {
      return -1 !== ["label"].indexOf(this.name) ? this._textWidth() : "rich_text" === this.name ? this.autoSize(t).width : null
    }
    ,
    c.prototype.initialHeight = function(t) {
      return -1 !== ["mtooltip", "text_view"].indexOf(this.name) ? this.textHeight() : "rich_text" === this.name ? this.autoSize(t).height : null
    }
    ,
    c.prototype.clipType = function() {
      var t;
      return this.clip ? (t = /(.*?)\(/.exec(this.clip)[1]).charAt(0).toUpperCase() + t.slice(1) : null
    }
    ,
    c.prototype.clipPolygonPoints = function() {
      var t, e, i, n, r;
      for (r = [],
      t = 0,
      e = (n = this.clip.split(",")).length; t < e; t++)
        i = n[t],
        r.push(i.replace(/[^\d\s\%]/g, ""));
      return r
    }
    ,
    c.prototype.clipInsetPoints = function() {
      var t, e, i, n, r;
      for (r = [],
      t = 0,
      e = (n = this.clip.split(/\s/)).length; t < e; t++)
        i = n[t],
        r.push(parseInt(i.replace(/[^\d]/g, "")));
      return r
    }
    ,
    c.prototype.clipCenter = function() {
      var t;
      return t = /at (\d*?)\% (\d*?)\%/.exec(this.clip) || [50, 50],
      {
        x: parseInt(t[1]),
        y: parseInt(t[2])
      }
    }
    ,
    c.prototype.clipCRadius = function() {
      return parseInt(/(\d*?)\% at/.exec(this.clip)[1])
    }
    ,
    c.prototype.clipXRadius = function() {
      return parseInt(/(\d*?)\% (\d*?)\% at/.exec(this.clip)[1])
    }
    ,
    c.prototype.clipYRadius = function() {
      return parseInt(/(\d*?)\% (\d*?)\% at/.exec(this.clip)[2])
    }
    ,
    c.prototype.setClipPoint = function(t, e, i) {
      return "number" == typeof t ? this.set_poly_point(t, e) : this["set_clip_" + t](e, i)
    }
    ,
    c.prototype.set_clip_xradius = function(t) {
      var e, i;
      return e = this.clipCenter(),
      i = Math.round(Math.abs(e.x - t.left)),
      this.clip = "ellipse(" + i + "% " + this.clipYRadius() + "% at " + e.x + "% " + e.y + "%)"
    }
    ,
    c.prototype.set_clip_yradius = function(t) {
      var e, i;
      return e = this.clipCenter(),
      i = Math.round(Math.abs(e.y - t.top)),
      this.clip = "ellipse(" + this.clipXRadius() + "% " + i + "% at " + e.x + "% " + e.y + "%)"
    }
    ,
    c.prototype.set_clip_cradius = function(t, e) {
      var i, n, r, o, s, a, l;
      return i = this.clipCenter(),
      r = this.w() * i.x / 100,
      o = this.h() * i.y / 100,
      a = e.left - r,
      l = e.top - o,
      s = Math.sqrt(Math.pow(a, 2) + Math.pow(l, 2)),
      n = Math.round(s / (this.w() + this.h()) * 200),
      this.clip = "circle(" + n + "% at " + i.x + "% " + i.y + "%)"
    }
    ,
    c.prototype.set_clip_ccenter = function(t) {
      return this.clip = "circle(" + this.clipCRadius() + "% at " + t.left + "% " + t.top + "%)"
    }
    ,
    c.prototype.set_clip_ecenter = function(t) {
      return this.clip = "ellipse(" + this.clipXRadius() + "% " + this.clipYRadius() + "% at " + t.left + "% " + t.top + "%)"
    }
    ,
    c.prototype.set_clip_linset = function(t) {
      var e;
      return e = this.clipInsetPoints(),
      this.clip = "inset(" + e[0] + "% " + e[1] + "% " + e[2] + "% " + t.left + "%)"
    }
    ,
    c.prototype.set_clip_tinset = function(t) {
      var e;
      return e = this.clipInsetPoints(),
      this.clip = "inset(" + t.top + "% " + e[1] + "% " + e[2] + "% " + e[3] + "%)"
    }
    ,
    c.prototype.set_clip_rinset = function(t) {
      var e;
      return e = this.clipInsetPoints(),
      this.clip = "inset(" + e[0] + "% " + (100 - t.left) + "% " + e[2] + "% " + e[3] + "%)"
    }
    ,
    c.prototype.set_clip_binset = function(t) {
      var e;
      return e = this.clipInsetPoints(),
      this.clip = "inset(" + e[0] + "% " + e[1] + "% " + (100 - t.top) + "% " + e[3] + "%)"
    }
    ,
    c.prototype.set_clip_cinset = function(t) {
      var e, i, n;
      return i = (100 - (e = this.clipInsetPoints())[1] - e[3]) / 2,
      n = (100 - e[0] - e[2]) / 2,
      t.top > 100 - n && (t.top = 100 - n),
      t.top < n && (t.top = n),
      t.left > 100 - i && (t.left = 100 - i),
      t.left < i && (t.left = i),
      this.clip = "inset(" + (t.top - n) + "% " + (100 - t.left - i) + "% " + (100 - t.top - n) + "% " + (t.left - i) + "%)"
    }
    ,
    c.prototype.set_poly_point = function(t, e) {
      var i;
      return (i = this.clipPolygonPoints())[t] = e.left + "% " + e.top + "%",
      this.clip = "polygon(" + i.join(",") + ")"
    }
    ,
    c.prototype.get_icon = function(t, e) {
      var i, n, r, o, s, a;
      return n = (a = /^(fa|md|mb|ci)\-/).test(this.icon),
      r = (this.icon || "").replace(a, ""),
      i = (s = n ? this.icon.split("-")[0] : "fa") + " " + (o = ("mb" === s ? "icon" : s) + "-" + r),
      !MB.isPhantom() && t && "fa-spinner" === o && (i += " is-spinning"),
      '<span class="icon ' + i + '" style="' + e + '">' + ("md" === s ? r : "") + "</span>"
    }
    ,
    c.sketchColor = function(t) {
      return "rgba(" + Math.round(255 * t.red) + "," + Math.round(255 * t.green) + "," + Math.round(255 * t.blue) + "," + t.alpha + ")"
    }
    ,
    c.getTextAttr = function(t, e) {
      switch (e) {
      case "fontFamily":
        return t.MSAttributedStringFontAttribute.attributes.name;
      case "fontSize":
        return t.MSAttributedStringFontAttribute.attributes.size;
      case "color":
        return this.sketchColor(t.MSAttributedStringColorAttribute);
      case "letterSpacing":
        return t.kerning;
      case "lineHeight":
        return t.paragraphStyle.maximumLineHeight || t.paragraphStyle.minimumLineHeight ? t.paragraphStyle.maximumLineHeight : this.getNormalLineHeight(this.getTextAttr(t, "fontFamily"), this.getTextAttr(t, "fontSize"));
      case "paraSpacing":
        return t.paragraphStyle.paragraphSpacing || 0;
      case "textDecoration":
        return 0 === t.strikethroughStyle && 1 === t.underlineStyle ? "underline" : 0 === t.strikethroughStyle && 9 === t.underlineStyle ? "underline double" : 1 === t.strikethroughStyle && 0 === t.underlineStyle ? "line-through" : "none"
      }
    }
    ,
    c.genParasJSON = function(t) {
      var e, i, n, r, o, s, a, l, c, u, h, d, p;
      for (d = t.attributedString.string,
      h = [{
        paraSpacing: 0,
        children: []
      }],
      r = u = 0,
      o = (l = t.attributedString.attributes).length; r < o; r++)
        for (e = l[r],
        h[u].paraSpacing = this.getTextAttr(e.attributes, "paraSpacing"),
        i = (n = d.substr(e.location, e.length)).length,
        a = 0; -1 !== a && (s = -1 === (c = n.indexOf("\n", a)) ? i : c,
        (p = {}).text = n.substring(a, s),
        p.fontFamily = this.getTextAttr(e.attributes, "fontFamily"),
        p.fontSize = this.getTextAttr(e.attributes, "fontSize"),
        p.color = this.getTextAttr(e.attributes, "color"),
        p.letterSpacing = this.getTextAttr(e.attributes, "letterSpacing"),
        p.lineHeight = this.getTextAttr(e.attributes, "lineHeight"),
        p.textDecoration = this.getTextAttr(e.attributes, "textDecoration"),
        h[u].children.push(p),
        -1 === c ? a = -1 : (a = c + 1,
        h[u += 1] = {
          paraSpacing: this.getTextAttr(e.attributes, "paraSpacing"),
          children: []
        }),
        a !== i); )
          ;
      return JSON.stringify(h)
    }
    ,
    c.createTextFromSketch = function(t, e) {
      var i, n, r, o, s, a, l;
      if (console.log(t),
      !(51 <= Number(e) || Number(e) < 50))
        return n = t.frame,
        r = (s = t.style).contextSettings ? s.contextSettings.opacity : 1,
        s.shadows && (a = function() {
          var t, e, i, n;
          for (n = [],
          t = 0,
          e = (i = s.shadows).length; t < e; t++)
            (o = i[t]).isEnabled && n.push([o.offsetX, o.offsetY, o.blurRadius, this.sketchColor(o.color)]);
          return n
        }
        .call(this)),
        l = new c({
          cid: "w" + Math.uuid(10, 16) + (new Date).valueOf(),
          screen_cid: MB.currentScreen.cid,
          name: "rich_text",
          left: n.x,
          top: n.y,
          ro: 360 - t.rotation,
          o: 100 * r,
          v: t.isVisible,
          locked: t.isLocked,
          z: MB.currentScreen.maxZ() + 1,
          text: this.genParasJSON(t),
          size_type: 0 === t.textBehaviour ? 0 : 1,
          va: ["top", "middle", "bottom"][t.style.textStyle.verticalAlignment],
          ha: ["left", "right", "center"][t.style.textStyle.encodedAttributes.paragraphStyle.alignment],
          text_shadow: JSON.stringify(a)
        }),
        2 === t.textBehaviour ? (l.width = n.width,
        l.height = n.height) : (i = l.autoSize(),
        l.width = i.width,
        l.height = i.height),
        l.lsave(),
        ScreenManager.updateWidgetList()
    }
    ,
    c
  }(Spine.Model)
}
.call(this),
function() {
  var i = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }
    , r = {}.hasOwnProperty;
  this.Widgetstate = function(t) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return i(e, t),
    e.configure("Widgetstate", "cid", "mtime", "widget_cid", "screen_cid", "screenstate_cid", "destroyed", "name", "text", "icon", "top", "left", "width", "height", "ro", "fs", "br", "border_radius", "bs", "is", "ha", "va", "image", "z", "th", "lh", "o", "ds", "sc", "bg", "tc", "bc", "bo", "i", "td", "f", "ts", "tsc", "box_shadow", "text_shadow", "p", "gid", "timestamp", "padding", "ls", "checked", "numeric", "tt_placement", "tt_offset", "tt_arrow_size", "v", "fixed", "fixed_type", "ani_name", "ani_delay", "ani_count", "ani_duration", "input_type", "slw", "slt", "clip", "filter", "locked", "link_cids", "primary_fixed", "size_type", "points", "display_name", "expanded"),
    e.include(Spine.Model.Dirty),
    e.serverCount = function() {
      return this.records.reduce(function(t, e) {
        return t + ("d" !== e.screenstate_cid[0] ? 1 : 0)
      }, 0)
    }
    ,
    e.prototype.load = function(t) {
      if (e.__super__.load.call(this, t),
      "default" !== this.screenstate_cid && (this.screen_cid = null),
      "label" === this.name && /\n/.test(this.text))
        return this.name = "text_view",
        this.lsave()
    }
    ,
    e
  }(Widget)
}
.call(this),
function() {
  this.WidgetManager = function() {
    function t() {}
    return t.remove = function(t) {
      if (Widget.exists(t))
        return Widget.find(t).ldestroy()
    }
    ,
    t.newImageView = function(t, e, i, n) {
      var r, o, s, a, l;
      return l = t.width,
      r = t.height,
      l > n.width && (r = Math.round(r * (n.width / l)),
      l = n.width),
      s = MB.scale() / 100,
      o = "image_view",
      (a = new Widget({
        name: o,
        top: Math.round(i / s),
        left: Math.round(e / s),
        width: l,
        height: r,
        bs: MB.COMPONENTS[o].bs,
        border_radius: MB.COMPONENTS[o].border_radius,
        image: t.cid,
        screen_cid: n.cid,
        cid: "w" + Math.uuid(10, 16) + (new Date).valueOf(),
        z: n.maxZ() + 1
      })).lsave(),
      ScreenManager.updateWidgetList(),
      a
    }
    ,
    t
  }()
}
.call(this),
function() {
  this.ScreenManager = function() {
    function t() {
      $("#design").on("slider:update", function() {
        return MB.renderFixedSlider && MB.renderFixedSlider()
      }),
      this.initCanvasDnd(),
      window.addEventListener("dragover", function(t) {
        return t.preventDefault()
      }),
      window.addEventListener("drop", function(t) {
        return t.preventDefault()
      })
    }
    return t.sortScreens = function(t) {
      var i;
      return i = function(t) {
        return t.children().forEach(function(t, e) {
          return t.position !== e + 1 && (t.position = e + 1,
          t.lsave()),
          i(t)
        })
      }
      ,
      t.rootScreens().forEach(function(t, e) {
        return t.position !== e + 1 && (t.position = e + 1,
        t.lsave()),
        i(t)
      })
    }
    ,
    t.activate = function(t) {
      var e;
      return e = Screen.find(t.cid),
      MB.currentScreen = e,
      MB.action("selection:clear:state"),
      e.setState("default"),
      MB.action("entry:activate:screen", {
        screen: e
      }),
      MB.action("statepanel:set:global", {
        isGlobalActive: !1
      }),
      MB.action("entry:reset:canvas:offset"),
      this.updateWidgetList()
    }
    ,
    t.getWidgetList = function() {
      var t, e, i, n, r, o, s, a, l, c, u;
      for ((l = Screen.find(MB.currentScreen.cid))._widgetsByName = null,
      l.lsave(!1),
      u = [],
      e = 0,
      n = (s = l.cwidgets()).length; e < n; e++)
        (t = s[e]).setState(l.state_cid, !0),
        u.push(t.dup());
      for (c = new Set,
      i = 0,
      r = (a = l.cpanels()).length; i < r; i++)
        (o = a[i]).valid() && (o.setState(l.state_cid, !0),
        u.push(o.dup()),
        c.add(o.template_cid));
      return c.forEach(function(t) {
        return Template.find(t).cscreens().forEach(function(t) {
          return t.cwidgets().forEach(function(t) {
            var e;
            return e = t.dup(),
            u.push(e)
          })
        })
      }),
      u
    }
    ,
    t.updateWidgetList = function() {
      return MB.renderLinks(),
      MB.action("update:widget:all", {
        widgetList: this.getWidgetList()
      })
    }
    ,
    t.updateStateHeight = function(t) {
      var e, i, n, r;
      return i = Screen.find(t),
      e = i.cid + "default",
      MB.getIsGlobalActive() ? (r = i.cscreenstates()).push(Screenstate.find(e)) : (n = "default" === i.state_cid ? e : i.state_cid,
      r = [Screenstate.find(n)]),
      r.forEach(function(t) {
        if (t)
          return t.hh = i.hh,
          t.fh = i.fh,
          t.lsave(t.cid !== e)
      })
    }
    ,
    t.newScreen = function(t, e, i, n, r, o, s) {
      var a;
      return null == s && (s = !0),
      (a = new Screen({
        cid: "s" + Math.uuid(10, 16) + (new Date).valueOf(),
        name: e,
        position: i,
        parent_cid: n,
        project_cid: t.cid,
        orientation: r,
        bgcolor: t.template ? "transparent" : MB.config.screenBg
      })).lsave(),
      o && !t.template && a.setup(null),
      this.activate(a),
      s && MB.action("rightnav:edit:screen", {
        cid: a.cid
      }),
      MB.renderScreenList(),
      a
    }
    ,
    t.updateOrientation = function() {
      var t, e, i, n, r, o;
      for (i = "portrait" === (r = Screen.find(MB.currentScreen.cid)).orient() ? "landscape" : "portrait",
      r.setOrientation(i),
      r.lsave(),
      t = 0,
      e = (n = r.cwidgets()).length; t < e; t++)
        (o = n[t]).isFullWidth() && (o.width = r.width,
        "keyboard" === o.name && (o.height = r.kbDH()),
        o.lsave());
      return MB.action("set:current:screen", {
        screen: r
      }),
      this.updateWidgetList()
    }
    ,
    t.prototype.initCanvasDnd = function() {
      return $("#design").on("dragleave", "#screens", function() {
        return $(".canvas").removeClass("hover")
      }),
      $("#design").on("dragover", "#screens", function(t) {
        return t.stopPropagation(),
        t.preventDefault(),
        $("#canvas").addClass("hover"),
        t.originalEvent.dataTransfer.dropEffect = "copy"
      }),
      $("#design").on("drop", "#screens", function(t) {
        var e, i, n, r, o;
        if (t.stopPropagation(),
        t.preventDefault(),
        $("#canvas").removeClass("hover"),
        !MB.globalStateAlert())
          return MB.action("entry:clear:selection"),
          r = MB.scale() / 100,
          i = t.originalEvent.pageX - MB.canvasLeft(),
          o = t.originalEvent.pageY - MB.canvasTop(),
          e = t.originalEvent.dataTransfer.files,
          n = Screen.find(MB.currentScreen.cid),
          MB.createAssetFromFiles(e, function(t) {
            var e;
            return e = WidgetManager.newImageView(t, i, o, n),
            o += t.height * r,
            $("body").trigger("undoStack:add", [null, [e.dup()]]),
            MB.action("selection:select:items", {
              cids: [e.cid]
            })
          })
      })
    }
    ,
    t.updateSize = function(t, e, i) {
      var n, r, o, s, a, l, c, u, h;
      if (n = [(u = Screen.find(MB.currentScreen.cid)).dup()],
      a = u.height,
      u.height += e,
      s = Math.round(100 * u.dH() / MB.scale()),
      MB.project().template || MB.project().combo)
        u.width += t,
        u.height < 10 && (u.height = 10),
        u.width < 10 && (u.width = 10);
      else
        for (u.height < s && (e = s - a,
        u.height = s),
        r = 0,
        o = (c = u.cwidgets()).length; r < o; r++)
          (h = c[r]).inFooter() && h.top && (h.top += e,
          h.lsave());
      return u.lsave(),
      "project" !== (l = MB.project()).type() && l.updatePanelSize(u.width, u.height),
      i && $("body").trigger("undoStack:add", [n, [u.dup()]]),
      this.updateWidgetList(),
      MB.action("set:current:screen", {
        screen: u
      })
    }
    ,
    t
  }()
}
.call(this),
function() {
  this.PanelManager = function() {
    function t() {}
    return t.remove = function(t, e) {
      var i;
      if (null == e && (e = !0),
      i = Panel.find(t))
        return i.ldestroy(e)
    }
    ,
    t
  }()
}
.call(this),
function() {
  var i, l, n = function(t, e) {
    function i() {
      this.constructor = t
    }
    for (var n in e)
      r.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype,
    t.prototype = new i,
    t.__super__ = e.prototype,
    t
  }, r = {}.hasOwnProperty;
  l = {},
  i = function() {
    function t() {
      var s, t, i;
      MB.setRunnerExtra(l),
      this.timeoutBucket = new l.TimeoutBucket,
      this.eventBucket = new l.EventBucket,
      this.runnerUtil = new l.RunnerUtil,
      this.transitionUtil = new l.TransitionUtil,
      this.ScreenRenderer = l.ScreenRenderer,
      this.clearCallbackBucket = {},
      this.mode = "default",
      MB.isMobile() ? this.eventBucket.bindMobile({
        onOrientationChange: (t = this,
        function() {
          return setTimeout(function() {
            return t.reload()
          }, 100)
        }
        )
      }) : this.eventBucket.bindDesktop({
        onAppMouseDown: (s = this,
        function(t, e) {
          var i, n, r, o;
          if ("immersive" === s.mode)
            return !0;
          if (i = $(t.target).closest(".map_view .image"),
          n = $(t.target).closest(".ppanel"),
          i.length)
            r = o = i[0];
          else {
            if (!n.length)
              return !0;
            r = o = n[0]
          }
          return !($(r).width() < r.scrollWidth || $(o).height() < o.scrollHeight) || (e.vScrollTarget = o,
          e.hScrollTarget = r,
          e.top = o.scrollTop,
          e.left = r.scrollLeft,
          !1)
        }
        ),
        onAppMouseMove: function(t, e, i) {
          var n, r, o, s, a, l;
          return n = e.hScrollTarget,
          s = e.vScrollTarget,
          o = e.top,
          r = e.left,
          a = e.x,
          l = e.y,
          !i.down || (t.preventDefault(),
          n && (n.scrollLeft = Math.min(r - t.clientX + a, n.scrollWidth - $(n).width())),
          s ? s.scrollTop = Math.min(o - t.clientY + l, s.scrollHeight - $(s).height()) : void 0)
        }
      }),
      window.addEventListener("message", (i = this,
      function(t) {
        try {
          if ("back" === JSON.parse(t.data).event)
            return i.backPrev()
        } catch (e) {}
      }
      ), !1)
    }
    return t.prototype.init = function() {
      var t, e;
      return MB.trackPageView("/workspace/app/preview"),
      $("#simulator .splash").css("background-color", this.home.bg()),
      $("#app").show(),
      this.runnerUtil.setupSplash(this.home, $("#simulator .splash img")),
      this.project.setup(),
      this.setupPG(),
      this.currentScreen = this.currentMenu = null,
      this.renderScreen(),
      t = setTimeout((e = this,
      function() {
        if ($("#simulator .splash").hide(),
        $("#splash").hide(),
        e.reload(),
        MB.webpackInterface.checkLocationHash(),
        MB.messageBucket)
          return MB.messageBucket.send("ready", JSON.stringify(MB.currentProject.cscreens()))
      }
      ), 1e3),
      this.clearCallbackBucket.init = function() {
        return clearTimeout(t)
      }
    }
    ,
    t.prototype.clear = function() {
      var t, e;
      for (t in this.timerFired = !1,
      e = this.clearCallbackBucket)
        (0,
        e[t])();
      return this.timeoutBucket.clear(),
      this.runnerUtil.clear()
    }
    ,
    t.prototype.loadScreen = function(t) {
      var e, i, n, r, o;
      if (this.currentMenu)
        this.closeMenu((r = this,
        function() {
          return r.loadScreen(t)
        }
        ));
      else if ($(".pcanvas.active").data("cid") !== t && (this.currentScreen = this.currentMenu = null,
      n = Screen.find(t)))
        return this.timeoutBucket.clear(),
        e = $(".pcanvas.active"),
        i = $("#pscreen" + n.cid),
        this.prepareTransition(n.cid, "none", !0),
        this.transitionUtil.none(e, i),
        $.nextTick((o = this,
        function() {
          return o.runnerUtil.refreshScrollBar(n.cid)
        }
        ))
    }
    ,
    t.prototype.backPrev = function() {
      var t;
      if (this.home.cid !== $(".pcanvas.active").data("cid") || !MB.messageBucket)
        return t = new Link({
          target_cid: "prev",
          transition: "none"
        }),
        this.j(t);
      MB.messageBucket.send("exit")
    }
    ,
    t.prototype.closeMenu = function(t) {
      var e, i, n, r;
      return i = $("#pscreen" + this.currentScreen),
      e = $("#pscreen" + this.currentMenu),
      r = this,
      n = function() {
        return r.transitionUtil.hideScreen(e),
        e.removeClass("drawer ldrawer rdrawer"),
        i.removeClass("menu lmenu rmenu"),
        r.doneTransition(i),
        r.currentScreen = r.currentMenu = null,
        $.nextTick(function() {
          if ("function" == typeof t)
            return t()
        })
      }
      ,
      i.hasClass("menu") ? (i.transitionEnd(n),
      i.enableTransition("0.3s"),
      i.translateX(0)) : e.hasClass("drawer") ? (e.transitionEnd(n),
      e.enableTransition("0.3s"),
      e.hasClass("ldrawer") ? e.translateX(0 - this.transitionUtil.activeWidth()) : e.translateX(this.transitionUtil.activeWidth())) : void 0
    }
    ,
    t.prototype.pj = function(t, e) {
      var i, n, r, o, s, a, l, c, u, h, d;
      if ("immersive" !== this.mode && this.eventBucket.isCoolDown() && !this.timerFired) {
        if (i = $(t.target).closest(".clickable"),
        r = $(t.target).closest(".ppanel"),
        n = $(t.target).closest(".pcanvas"),
        "shake" === e && (n = this.currentMenu ? $("#pscreen" + this.currentMenu) : $(".pcanvas.active")),
        this.currentMenu && n.data("cid") !== this.currentMenu)
          return this.closeMenu();
        if (r.length) {
          if (this.panelEventHandler(t, e))
            return
        } else if (i.length && (l = Link.find(i.attr("data-link_cid"))) && l.gesture === e)
          return this.j(l);
        if (o = n.data("cid"),
        u = Screen.find(o)) {
          for (s = 0,
          a = (c = Widget.records).length; s < a; s++)
            if ((h = c[s]).screen_cid === u.cid && "pg" === h.name && (d = h.getState(u.state_cid),
            (l = Link.find(d.link_cids)) && l.gesture === e))
              return this.j(l);
          if (!this.eventBucket.mouseState.moved) {
            if ("hold" !== e || !MB.messageBucket || window.parent.webkit)
              return this.runnerUtil.getIsHighlight() ? this.highlightClickables() : void 0;
            MB.messageBucket.send("settings")
          }
        }
      }
    }
    ,
    t.prototype.panelEventHandler = function(t, e) {
      var i, n, r, o, s, a, l, c, u, h, d, p;
      if (n = $(t.target).closest(".clickable"),
      r = (i = $(t.target).closest(".ppanel")).find(".pstate.active"),
      o = i.data("cid"),
      c = Panel.find(o),
      n.length) {
        if (!(l = Link.find(n.attr("data-link_cid"))))
          return !1;
        if ("prev" === l.target_cid)
          return this.j(l),
          !0;
        if (l.gesture === e) {
          if (i[0] === n[0])
            this.j(l);
          else if ($("#pscreen" + l.target_cid).length)
            this.j(l);
          else {
            if (c.timerFired)
              return !1;
            $(".pcanvas [data-cid=" + c.cid + "]").each((p = this,
            function(t, e) {
              return p.panelWJ(l, $(e))
            }
            ))
          }
          return !0
        }
      }
      if (!(h = Screen.find(r.data("cid"))))
        return !1;
      for (s = 0,
      a = (u = h.cwidgets()).length; s < a; s++)
        if ("pg" === (d = u[s]).name && (l = Link.find(d.link_cids),
        d.icon === e && l))
          return !c.timerFired && ($(".pcanvas [data-cid=" + c.cid + "]").each(function(i) {
            return function(t, e) {
              return i.panelWJ(l, $(e))
            }
          }(this)),
          !0);
      return !1
    }
    ,
    t.prototype.highlightClickables = function() {
      // var t;
      // return (t = $(".pcanvas.active .region")).show(),
      // $(".pcanvas.active .pg").css({
      //   display: "flex",
      //   opacity: .8
      // }),
      // this.hightTimer = setTimeout(function() {
      //   return t.hide(),
      //   $(".pcanvas.active .pg").css("opacity", "0").hide()
      // }, 400)
    }
    ,
    t.prototype.j = function(t) {
      var e, i, n, r, o, s;
      if (t && t.target_cid !== MB.currentScreen.cid)
        if (this.timeoutBucket.clear(),
        t.screen_cid,
        i = t.target_cid,
        s = t.transition,
        this.currentMenu)
          i === $(".pcanvas.active").data("cid") ? this.closeMenu() : t.targetstate_cid ? this.stateTransition(t) : this.closeMenu((a = this,
          function() {
            return a.j(t)
          }
          ));
        else {
          var a;
          if (t.targetstate_cid)
            return this.stateTransition(t);
          if (i && ("prev" === i || $("#pscreen" + i).length)) {
            if ("prev" === i) {
              if (!(o = $(".pcanvas.active").data("prev")))
                return;
              if (!(i = o.pop()))
                return;
              $(".pcanvas.active").data("prev", o)
            } else
              (o = $("#pscreen" + i).data("prev")) || (o = []),
              o.push($(".pcanvas.active").data("cid")),
              $("#pscreen" + i).data("prev", o);
            return e = $(".pcanvas.active"),
            n = $("#pscreen" + i),
            (r = Screen.find(i)).orient() !== MB.currentScreen.orient() ? (this.prepareTransition(i, "none", t.reset),
            this.transitionUtil.none(e, n),
            this.runnerUtil.refreshScrollBar(r.cid)) : (this.prepareTransition(i, s, t.reset),
            this.transitionUtil.doTransition(s, e, n, t))
          }
        }
    }
    ,
    t.prototype.panelWJ = function(i, n) {
      var r, o, s, a;
      if (i && (r = i.target_cid,
      s = i.transition,
      o = n.data("cid"),
      r))
        return this.preparePanelTransition(r, s, n, (a = this,
        function() {
          var t, e;
          return t = n.find(".pstate.active"),
          e = n.find("#state" + o + r + "p"),
          a.transitionUtil.doTransition(s, t, e, i)
        }
        ))
    }
    ,
    t.prototype.prepareTransition = function(t, e, i) {
      var n, r, o, s, a, l, c, u;
      if (this.timerFired = !0,
      (n = $(".pcanvas.active").removeClass("top drawer ldrawer rdrawer")).find(".pstate").css("transition", "none"),
      (r = $("#pscreen" + t)).show(),
      u = Screen.find(t),
      this.renderWidgets(u),
      "leftmenu" !== e && "rightmenu" !== e && "leftdrawer" !== e && "rightdrawer" !== e || (this.currentScreen = n.data("cid"),
      this.currentMenu = t),
      this.runnerUtil.setScreenBg(n),
      this.runnerUtil.setScreenBg(r),
      this.runnerUtil.initScrollBar(u.cid),
      i && this.resetScreen(u),
      this.transitionUtil.transitionHandler(e, n, r, this.transitionUtil.activeWidth() - 1, this.transitionUtil.activeHeight() - 1),
      $("#pscreen" + u.cid + " .panel").length) {
        for (c = [],
        o = 0,
        s = (l = u.cpanels()).length; o < s; o++)
          a = l[o],
          c.push($(".pcanvas [data-cid=" + a.cid + "]").each(function(i) {
            return function(t, e) {
              return i.activatePanelMainState(a, $(e))
            }
          }(this)));
        return c
      }
    }
    ,
    t.prototype.preparePanelTransition = function(t, e, i, n) {
      var r, o, s, a;
      return null == n && (n = null),
      "leftmenu" !== e && "rightmenu" !== e && "leftdrawer" !== e && "rightdrawer" !== e || (e = "none"),
      s = i.data("cid"),
      o = i.find("#state" + s + t + "p"),
      r = i.find(".pstate.active"),
      o.show(),
      o.enableTransition("10ms"),
      n && "function" == typeof n && ("popin" === e || "slidebottom" === e || "topin" === e || "slidetop" === e || "slideright" === e || "slideleft2" === e || "slideleft" === e || "slideright2" === e ? o.transitionEnd(function() {
        return n()
      }) : setTimeout(function() {
        return n()
      }, 10)),
      setTimeout((a = this,
      function() {
        return a.transitionUtil.transitionHandler(e, r, o, i.width() - 1, i.height() - 1)
      }
      ))
    }
    ,
    t.prototype.doneTransition = function(t) {
      var e, i, n, r, s, a;
      return t.removeClass("menu lmenu rmenu"),
      t.zindex(""),
      t.disableTransition(),
      t.hasClass("state") ? (this.setupPanelWebPage(t),
      n = Panel.find(t.closest(".ppanel").data("cid")),
      r = Screen.find(t.data("cid")),
      this.setupPanelTimers(n, r),
      n.timerFired = !1,
      void n.lsave(!1)) : (s = Screen.find(t.data("cid")),
      this.setupPageTimers(s),
      this.setupWebpage(s),
      MB.isStandAlone() && this.setupStatusBar(s),
      MB.isAndroid() && this.setupPageGesture(s),
      this.timerFired = !1,
      MB.currentScreen = s,
      MB.webpackInterface.updateCurrentScreenRunner(s),
      i = !MB.isFullScreen() && (MB.isMobile() || MB.isEmbedded() || !this.runnerUtil.getIsScreenExpanded()),
      this.runnerUtil.toggleScrollBar(i),
      MB.isMobile() && ((e = t.find(".animated")).css({
        animationName: "noop",
        visibility: "hidden"
      }),
      setTimeout(function() {
        return e.css({
          animationName: "",
          visibility: ""
        })
      })),
      setTimeout((a = this,
      function() {
        var t, e, i, n, r, o;
        for (r = [],
        t = 0,
        i = (n = s.clinks()).length; t < i; t++)
          (e = n[t]).target_cid && "prev" !== e.target_cid && "none" !== e.transition && ((o = Screen.find(e.target_cid)) && o.project_cid === s.project_cid ? (a.renderWidgets(o),
          r.push($("#pscreen" + o.cid).enableTransition("10ms"))) : r.push(void 0));
        return r
      }
      ), 10))
    }
    ,
    t.prototype.resetScreen = function(t) {
      if (t.setState("default", !0),
      MB.webpackInterface.store.dispatch({
        type: "entry:update:screen:state",
        payload: {
          screen: t,
          stateCid: "default"
        }
      }),
      $("#pscreen" + t.cid + " .screen-content .widget").length)
        return this.ScreenRenderer.renderScreenContent(t, "default"),
        this.runnerUtil.refreshScrollBar(t.cid),
        this.runnerUtil.resetScreenScrollState(t.cid)
    }
    ,
    t.prototype.reload = function() {
      var t, e, i;
      if (this.timerFired)
        $.nextTick((e = this,
        function() {
          return e.reload()
        }
        ));
      else if (this.currentMenu)
        this.closeMenu((i = this,
        function() {
          return i.reload()
        }
        ));
      else if (t = $(".pcanvas.active").data("cid"),
      Screen.exists(t))
        return this.prepareTransition(t, "none", !0),
        this.doneTransition($(".pcanvas.active")),
        this.runnerUtil.resetScrollState()
    }
    ,
    t.prototype.activatePanelMainState = function(t, e) {
      var i, n, r;
      return this.timeoutBucket.clearTimeoutByKey(t.cid),
      r = t.mainState(),
      e.find(".state").disableTransition(),
      n = $(e).find("#state" + t.cid + r.cid + "p"),
      (i = $(e).find(".state.active")).css("transform", ""),
      i.removeClass("active top"),
      MB.runner.transitionUtil.hideScreen(i),
      MB.runner.setupPanelWebPage(n),
      n.css("transform", ""),
      n.addClass("active top"),
      n.show()
    }
    ,
    t.prototype.stateTransition = function(t) {
      var e, i, n, r, o, s, a;
      if ((r = Screen.find(t.screen_cid)).state_cid !== t.targetstate_cid)
        return this.timerFired = !1,
        n = r.state_cid,
        i = r.height - (r.headerHeight() + r.footerHeight()),
        o = t.targetstate_cid,
        s = t.ani_duration + " " + (t.ani_delay || "0s") + " " + (t.ani_easing || "linear"),
        r.setState(o, !0),
        e = r.height - (r.headerHeight() + r.footerHeight()),
        MB.webpackInterface.store.dispatch({
          type: "entry:update:screen:state",
          payload: {
            screen: r,
            stateCid: o
          }
        }),
        this.ScreenRenderer.renderScreenContentWithTransition(r, o, n, s),
        e !== i && this.runnerUtil.refreshScrollBar(r.cid),
        setTimeout((a = this,
        function() {
          return a.setupPageTimers(r, o)
        }
        ), 1e3 * (parseFloat(t.ani_duration) + parseFloat(t.ani_delay || "0")))
    }
    ,
    t.prototype.setupWebpage = function(t) {
      var e, i, n, r, o, s, a, l, c;
      for (e = 0,
      n = (s = t.cpanels()).length; e < n; e++)
        o = s[e],
        $(".pcanvas [data-cid=" + o.cid + "]").each(function(n) {
          return function(t, e) {
            var i;
            return i = $(e).find(".state.active"),
            n.setupPanelWebPage(i)
          }
        }(this));
      for (l = [],
      i = 0,
      r = (a = t.cwidgets()).length; i < r; i++)
        "webpage" === (c = a[i]).name && l.push($(".pcanvas [data-cid=" + c.cid + "]").each(function(r) {
          return function(t, e) {
            var i, n;
            return i = $(e).find(".iframe")[0],
            n = c.text ? c.text.replace(/&amp;/g, "&") : "about:blank",
            r.runnerUtil.setObjectUrl(i, n)
          }
        }(this)));
      return l
    }
    ,
    t.prototype.setupPanelWebPage = function(t) {
      var e, i, n, r, o, s;
      for (o = [],
      i = 0,
      n = (r = Screen.find(t.data("cid")).cwidgets()).length; i < n; i++)
        "webpage" === (s = r[i]).name && s.text && (e = t.find("[data-cid=" + s.cid + "]"),
        o.push(this.runnerUtil.setObjectUrl(e.find(".iframe")[0], s.text.replace(/&amp;/g, "&"))));
      return o
    }
    ,
    t.prototype.setupStatusBar = function(t) {
      var e, i, n;
      if (e = $(".pcanvas.active .status_bar").removeClass("standalone light"),
      window.innerHeight > window.innerWidth && (e.addClass("standalone"),
      !(i = t.sb()) || i.th && "light" !== i.th || e.addClass("light")),
      MB.isIOS9() && this.runnerUtil.deviceOrient() === t.orient())
        return n = MB.COMPONENTS.status_bar.height,
        $("#app").css({
          top: 0 - n,
          height: window.innerHeight + n
        })
    }
    ,
    t.prototype.setupPG = function() {
      var e, i, n, r, o, s, a;
      return this.hammertime = new l.Hammer($("#app")[0],{
        touchAction: "auto",
        inputClass: MB.isMobile() ? l.Hammer.TouchInput : null
      }),
      this.hammertime.get("swipe").set({
        direction: l.Hammer.DIRECTION_ALL,
        velocity: .05,
        threshold: 50
      }),
      this.hammertime.on("swipeleft", (e = this,
      function(t) {
        return setTimeout(function() {
          return e.pj(t, "left")
        })
      }
      )),
      this.hammertime.on("swiperight", (i = this,
      function(t) {
        return setTimeout(function() {
          return i.pj(t, "right")
        })
      }
      )),
      this.hammertime.on("swipeup", (n = this,
      function(t) {
        return setTimeout(function() {
          return n.pj(t, "up")
        })
      }
      )),
      this.hammertime.on("swipedown", (r = this,
      function(t) {
        return setTimeout(function() {
          return r.pj(t, "down")
        })
      }
      )),
      this.hammertime.on("press", (o = this,
      function(t) {
        return setTimeout(function() {
          return o.pj(t, "hold")
        })
      }
      )),
      this.hammertime.on("tap", (s = this,
      function(t) {
        if (1 === t.tapCount && setTimeout(function() {
          return s.pj(t, "tap")
        }),
        2 === t.tapCount)
          return s.eventBucket.resetCoolDown(),
          s.hightTimer && clearTimeout(s.hightTimer),
          setTimeout(function() {
            return s.pj(t, "dtap")
          })
      }
      )),
      new Shake({
        threshold: 15
      }).start(),
      window.addEventListener("shake", (a = this,
      function(t) {
        return setTimeout(function() {
          return a.pj(t, "shake")
        })
      }
      ), !1)
    }
    ,
    t.prototype.setupPageGesture = function(t) {
      var e, i, n, r, o, s;
      for (e = [],
      i = 0,
      r = (o = t.clinks()).length; i < r; i++)
        "left" !== (n = o[i]).gesture && "right" !== n.gesture || -1 === e.indexOf("pan-y") && e.push("pan-y"),
        "up" !== n.gesture && "down" !== n.gesture || -1 === e.indexOf("pan-x") && e.push("pan-x");
      return s = e.length ? e.join(" ") : "auto",
      this.hammertime.touchAction.actions = s,
      $(".pcanvas.active .widgets").css("touch-action", s)
    }
    ,
    t.prototype.pageTimer = function(t) {
      return this.timeoutBucket.setTimeout(t.cid, (e = this,
      function() {
        if (!e.timerFired && (e.timerFired = !0,
        "immersive" !== e.mode))
          return e.j(t)
      }
      ), 1e3 * t.timer);
      var e
    }
    ,
    t.prototype.panelTimer = function(i, t) {
      var n;
      if (Screen.find(i.target_cid))
        return this.timeoutBucket.setTimeout(t.cid, (n = this,
        function() {
          if (!t.timerFired && !n.timerFired && (t.timerFired = !0,
          t.lsave(!1),
          "immersive" !== n.mode))
            return $(".pcanvas [data-cid=" + t.cid + "]").each(function(t, e) {
              return n.panelWJ(i, $(e))
            })
        }
        ), 1e3 * i.timer)
    }
    ,
    t.prototype.setupPanelTimers = function(t, e) {
      var i, n, r, o, s, a, l, c, u;
      if (e || (i = $("#panel" + t.cid + "p .pstate.active").data("cid"),
      e = Screen.find(i)),
      e) {
        for (this.timeoutBucket.clearTimeoutByKey(t.cid),
        t.timerFired = !1,
        t.lsave(!1),
        n = 0,
        o = (l = e.clinks()).length; n < o; n++)
          0 < (a = l[n]).timer && this.panelTimer(a, t);
        for (u = [],
        r = 0,
        s = (c = Link.findAllByAttribute("state_cid", e.cid)).length; r < s; r++)
          0 < (a = c[r]).timer && u.push(this.pageTimer(a));
        return u
      }
    }
    ,
    t.prototype.setupPageTimers = function(t, e) {
      var i, n, r, o, s, a, l, c, u, h, d;
      if (null == e && (e = "default"),
      "immersive" !== this.mode) {
        for (this.timeoutBucket.clear(),
        n = 0,
        s = (c = t.citems()).length; n < s; n++)
          d = "panel" === (i = c[n]).name ? Panelstate.find(e + i.cid) || i : Widgetstate.find(e + i.cid) || i,
          (o = Link.find(d.link_cids)) && 0 < o.timer && (!o.targetstate_cid || o.sourcestate_cid === e) && this.pageTimer(o);
        for (h = [],
        r = 0,
        a = (u = t.cpanels()).length; r < a; r++)
          l = u[r],
          h.push(this.setupPanelTimers(l));
        return h
      }
    }
    ,
    t.prototype.renderScreen = function() {
      var t, e, i, n, r, o, s, a;
      for (a = "",
      t = 0,
      i = (r = this.project.cscreens()).length; t < i; t++)
        s = r[t],
        a += this.runnerUtil.screenPreview(s);
      for ($("#app").append(a),
      e = 0,
      n = (o = this.project.cscreens()).length; e < n; e++)
        (s = o[e]).cid !== this.home.cid && this.transitionUtil.hideScreen("#pscreen" + s.cid);
      return $("#pscreen" + this.home.cid).addClass("active")
    }
    ,
    t.prototype.renderWidgets = function(t) {
      if (!$("#pscreen" + t.cid + " .screen-content .widget").length)
        return t.setState("default", !0),
        MB.webpackInterface.store.dispatch({
          type: "entry:update:screen:state",
          payload: {
            screen: t,
            stateCid: "default"
          }
        }),
        this.ScreenRenderer.renderScreenContent(t, "default")
    }
    ,
    t
  }(),
  this.DesignerRunner = function() {
    function t() {
      return t.__super__.constructor.apply(this, arguments)
    }
    return n(t, i),
    t.prototype.render = function(t, e) {
      return this.project = Project.find(t) || Template.find(t) || Combo.find(t),
      this.project ? ($("body").data("scale", 100),
      this.home = Screen.find(e),
      this.home.setState("default", !0),
      this.init()) : MB.webpackInterface.navigateTo("/workspace/apps")
    }
    ,
    t
  }(),
  this.SharingRunner = function() {
    function e(t) {
      this.project = t,
      e.__super__.constructor.call(this)
    }
    return n(e, i),
    e.prototype.render = function() {
      var t, e, i;
      return t = (e = location.hash || "") && e.startsWith("#screen=") && e.substr("#screen=".length),
      MB.currentScreen = this.home = Screen.find(t) || this.project.homeScreen(),
      $("body").data("scale", 100),
      (MB.isMobile() || MB.isEmbedded()) && (this.project.scale = 100,
      this.project.lsave(!1)),
      MB.webpackInterface.renderPreview(document.querySelector("#workspace")),
      setTimeout((i = this,
      function() {
        return $("#workspace").show(),
        MB.webpackInterface.store.dispatch({
          type: "entry:update:scrollbar:viewport"
        }),
        i.init()
      }
      ), 100)
    }
    ,
    e
  }()
}
.call(this),
function() {}
.call(this);
