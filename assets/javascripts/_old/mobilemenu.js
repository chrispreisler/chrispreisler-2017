var MobileMenu = (function () {

  var _p = {

    defaults: {
      nav: '.nav',
      logo: '.logo',
      content: '.content',
      btn: '.nav__btn',
      line: '.nav__btn__lines',
      link: '.nav__link',
      lineIsAnimating: 'nav__btn__lines--is-animating'
    },
    o: {},

    init: function (_options) {
      _p.o = _p.extend({}, _p.defaults, _options)
      document.querySelector(_p.o.btn).addEventListener('click', _p.onClickEventOpen)

      _p.o.tl = new TimelineLite({paused: true})
        .to(document.querySelector(_p.o.content), 0.7, { xPercent: 80, y: 130, opacity: 0.2, ease: new Ease(BezierEasing(0.86, 0, 0.07, 1))}, 'slideX')
        .to(document.querySelector(_p.o.logo), 0.7, {x: 50, y: 50, ease: new Ease(BezierEasing(0.86, 0, 0.07, 1))}, 'slideX+=0.25')
        .staggerTo(document.querySelectorAll(_p.o.link), 0.7, {yPercent: -100, opacity: 1, ease: new Ease(BezierEasing(0.23, 1, 0.32, 1))}, 0.25, 'slideX+=0.6')
    },

    onClickEventOpen: function (e) {
      // Animation from Menu BTN to Close BTN
      document.querySelector(_p.o.line).classList.add(_p.o.lineIsAnimating)

      // Fade in of Menu Layer
      _p.o.tl.play()

      // Prevent Menu BTN and Close BTN from double Clicking
      document.querySelector(_p.o.btn).removeEventListener(e.type, _p.onClickEventOpen)
      document.querySelector(_p.o.btn).addEventListener('click', _p.onClickEventClose)
      document.querySelector(_p.o.nav).addEventListener('click', _p.onClickEventClose)
    },

    onClickEventClose: function (e) {
      // Animation from Close BTN to Menu BTN
      document.querySelector(_p.o.line).classList.remove(_p.o.lineIsAnimating)

      // Fade in of Menu Layer
      _p.o.tl.reverse()

      // Prevent Menu BTN and Close BTN from double Clicking
      document.querySelector(_p.o.btn).removeEventListener(e.type, _p.onClickEventClose)
      document.querySelector(_p.o.btn).addEventListener('click', _p.onClickEventOpen)
    },

    extend: function (out) {
      out = out || {}
      for (var i = 1; i < arguments.length; i++) {
        if (!arguments[i])
          continue
        for (var key in arguments[i]) {
          if (arguments[i].hasOwnProperty(key))
            out[key] = arguments[i][key]
        }
      }
      return out
    }
  }

  var _public = {
    init: _p.init,
    onClickOpen: _p.onClickEventOpen,
    onClickClose: _p.onClickEventClose
  }

  return _public

})()
