/*document.addEventListener("DOMContentLoaded", function() {
  var tl = new TimelineLite();
  tl.set(document.querySelector('.teaser__intro'), {
      autoAlpha: 1
    })
    .to(document.querySelector('.teaser__intro'), 0.4, {
      yPercent: -100
    }, 0.7, 'intro')
    .to(document.querySelector('.teaser__intro__bg'), 0.4, {
      yPercent: 0
    }, 'intro')
    .to(document.querySelector('.teaser__intro__bg'), 0.4, {
      yPercent: -100
    }, 'intro+=0.2')
    .set(document.querySelector('.teaser__intro'), {
      autoAlpha: 0
    });
});*/
//import {TweenMax, Power2, TimelineLite} from 'gsap';
import Person from "./person";

let person = new Person("Ram", "Kulkarni");
window.console.log(person.getFirstName());

//Barba.Pjax.Dom.containerClass = 'test';
/*MobileMenu.init();

if(document.querySelector('.teaser__itemgroup')) {
  //TeaserSlider.init();
}

if(document.querySelector('.gallery')) {
  Gallery.init();
}

Barba.Pjax.start();
Barba.Prefetch.init();

var links = document.querySelectorAll('a[href]');
var cbk = function(e) {
 if(e.currentTarget.href === window.location.href) {
   e.preventDefault();
   e.stopPropagation();
 }
};

for(var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', cbk);
}

Barba.Dispatcher.on('newPageReady', function(currentStatus) {

  if(document.querySelector('.teaser__itemgroup')) {
    TeaserSlider.init();
  }

  if(document.querySelector('.gallery')) {
    Gallery.init();
  }

  if(currentStatus.namespace !== 'home') {
    document.querySelector('.nav__btn').removeEventListener('click', MobileMenu.onClickClose);
    document.querySelector('.nav__btn').addEventListener('click', MobileMenu.onClickOpen);
  }
});

var lastClickEl;
var clickedEl;
Barba.Dispatcher.on('linkClicked', function(el) {
  lastClickEl = el;

  window.console.log(' ');
  window.console.log('### Click Event ###');
  window.console.log('Es wurde geklickt');
});

//PageDefaultTransition.init();

/*var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    var deferred = Barba.Utils.deferred();

    var tl = new TimelineLite({
      onComplete: function() {
        deferred.resolve();
      }
    });

    tl.staggerTo(document.querySelectorAll('.nav__list__item'), 1.2, {
        autoAlpha: 0,
        yPercent: -50,
        ease: new Ease(BezierEasing(.23,1,.32,1))
      }, 0.15)
      .to(document.querySelector('.nav'), 1, {
        yPercent: -100,
        ease: new Ease(BezierEasing(.86,0,.07,1))
      }, '-=0.8')
      .set(document.querySelector('.nav__btn__lines'), {
        className: '-=nav__btn__lines--is-animating'
      }, 'closeNav-=0.25')
      .to(window, 0.5, {
        scrollTo: 0,
        onUpdate: function() {
          if (window.pageYOffset === 0) {
            deferred.resolve();
          }
        }
      });

      return deferred.promise;
  },

  fadeIn: function() {

    var _this = this;

    if(document.querySelector('.teaser__itemgroup')) {
      Draggable.create(
        '.teaser__itemgroup', {
          type:"x",
          bounds: '.teaser',
          edgeResistance:0.6,
          throwProps:true,
          //snap:_private.options .itemPosition,
          cursor: 'grab',
          onDragStart: function() {
            //document.querySelector('.teaserslider__link').classList.add('teaserslider__link--is-dragging');
          },
          onDragEnd: function() {
            //document.querySelector('.teaserslider__link').classList.remove('teaserslider__link--is-dragging');
          },
          dragClickables:true
      });
    }

    var tl = new TimelineLite({
      onComplete: function() {
        _this.done();
      }
    });

    tl.set(this.newContainer, {
        autoAlpha: 1,
        'z-index': 2,
        top: 0,
        position: 'fixed'
      })
      .from(this.newContainer, 0.8, {
        //autoAlpha: 0,
        xPercent: 100,
        ease: Power2.easeOut
      }, 'overlay')
      .to(this.oldContainer, 0.8, {
        autoAlpha: 0,
        scale: 0.95,
        ease: Power2.easeOut
      }, 'overlay')
      .set(this.newContainer, {
        position: 'relative'
      });
  }
});*/

/*var HomeFadeTransition = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    var deferred = Barba.Utils.deferred();

    var tl = new TimelineLite({
      onComplete: function() {
        deferred.resolve();
      }
    });

    tl.to(window, 0.5, {
        scrollTo: 0,
        onUpdate: function() {
          if (window.pageYOffset === 0) {
            deferred.resolve();
          }
        }
      });

      return deferred.promise;
  },

  fadeIn: function() {

    var _this = this;

    var tl = new TimelineLite({
      onComplete: function() {
        _this.done();
      }
    });

    tl.set(this.newContainer, {
        'z-index': 2,
        top: '125px',
        position: 'absolute'
      })
      .from(this.newContainer, 0.5, {
        //autoAlpha: 0,
        'transform': 'translate(-100%, 0)',
        ease: Power2.easeOut
      });
  }
});*/



/*Barba.Pjax.getTransition = function() {

  window.console.log(' ');
  window.console.log('### Transition Start ###');

  var nameClicked = lastClickEl.getAttribute('data-namespace');
  var back = false;

  if(lastClickEl === clickedEl) {
    back = true;
  } else {
    clickedEl = lastClickEl;
    back = false;
  }

  /*if(nameClicked === 'logo2' && back === false) {
    return FadeTransition;
  }*/

  /*if(nameClicked === 'teaser' && back === false) {
    window.console.log('Teaser-Transition wird gestartet');
    return TransitionTeaser;
  }

  window.console.log('Default Transition wird gestartet');
  return TransitionDefault;
};
