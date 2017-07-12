var Gallery = (function () {

  var _p = {

    defaults: {
      targetLeft: '.gallery__controls--left',
      targetRight: '.gallery__controls--right',
      indicator: '.gallery__indicator'
    },
    o: {},

    init: function (_options) {
      _p.o = _p.extend({}, _p.defaults, _options);
      _p.o.flkty = new Flickity( '.main-carousel', {
        imagesLoaded: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false
      });

      for (var i = 0; i < _p.o.flkty.cells.length - 1; i++) {
        var indicatorClone = document.querySelector('.gallery__indicator__item').cloneNode(true);
        document.querySelector('.gallery__indicator').appendChild(indicatorClone);
      }

      document.querySelector('.gallery__indicator__item:first-child').classList.add('gallery__indicator__item--active');

      _p.o.flkty.on( 'select', _p.onSelect);

      window.console.log('Anzahl an Bilder: ' + _p.o.flkty.cells.length)



      document.querySelector(_p.o.targetLeft).addEventListener('click', _p.onClickEventPrev);
      document.querySelector(_p.o.targetRight).addEventListener('click', _p.onClickEventNext);
    },

    onClickEventPrev: function(e) {

      window.console.log('Previous Image');
      _p.o.flkty.previous(true);

    },

    onClickEventNext: function(e) {

      window.console.log('Next Image');
      _p.o.flkty.next(true);

    },

    onSelect: function() {
      window.console.log(_p.o.flkty.selectedElement.title);
      TweenLite.to(document.querySelector('.gallery__caption__copy'), 0.3, {
        opacity: 0,
        yPercent: 100,
        onComplete: function() {
          document.querySelector('.gallery__caption__copy').textContent = _p.o.flkty.selectedElement.title;
          TweenLite.to(document.querySelector('.gallery__caption__copy'), 0.3, {
            opacity: 1,
            yPercent: 0
          });
        }
      });

      var previousSelectedButton = document.querySelector('.gallery__indicator__item--active');
      var selectedButton = document.querySelector('.gallery__indicator').children[ _p.o.flkty.selectedIndex ];
      previousSelectedButton.classList.remove('gallery__indicator__item--active');
      selectedButton.classList.add('gallery__indicator__item--active');

    },

    extend: function(out) {
      out = out || {};
      for (var i = 1; i < arguments.length; i++) {
        if (!arguments[i])
          continue;
        for (var key in arguments[i]) {
          if (arguments[i].hasOwnProperty(key))
          out[key] = arguments[i][key];
        }
      }
      return out;
    }
  };

  var _public = {
    init: _p.init,
    onClickOpen: _p.onClickEventOpen,
    onClickClose: _p.onClickEventClose
  };

  return _public;

})();
