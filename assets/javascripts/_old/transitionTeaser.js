var TransitionTeaser = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this))
  },

  fadeOut: function() {
    var deferred = Barba.Utils.deferred()

    var imageClicked
    var imageGlow
    var imageGroup = document.querySelectorAll('.teaser__link')
    var imagesToFade = new Array()
    var imageCopy

    for(var i = 0; i < imageGroup.length; ++i ) {
      if(imageGroup.item(i) !== lastClickEl) {
        imagesToFade.push(imageGroup.item(i))
      } else {
        imageClicked = imageGroup.item(i).querySelector('.teaser__image')
        imageGlow = imageGroup.item(i).querySelector('.teaser__image--glow')
        imageCopy = imageGroup.item(i).querySelector('.teaser__copy')
      }
    }

    var bodyWidth = document.body.clientWidth
    var bodyHeight = window.innerHeight
    var imgClickedWidth = 0

    if(document.body.clientWidth <= 544)
      imgClickedWidth = window.innerWidth/100*90
    else
      imgClickedWidth = window.innerWidth/100*55

    var imgClickedHeight = imageClicked.clientHeight/imageClicked.clientWidth*imgClickedWidth
    var heightDifference = (imgClickedHeight-imageClicked.clientHeight)/2

    var imagePosition = imageClicked.getBoundingClientRect()
    var imgClickedX = bodyWidth/2-imgClickedWidth/2-imagePosition.left
    var imgClickedY = (bodyHeight-imgClickedHeight)/2-imagePosition.top+heightDifference

    var imgClickedScale = imgClickedWidth/imageClicked.offsetWidth

    window.console.log(' ')
    window.console.log('### Teaser Animation ###')
    window.console.log('Image Objekt: ' + imageClicked)
    window.console.log('Bildschirmbreite: ' + bodyWidth)
    window.console.log('Bildschirmhöhe: ' + bodyHeight)
    window.console.log('Breite Image: ' + imgClickedWidth)
    window.console.log('Höhe Image: ' + imgClickedHeight)
    window.console.log('Position X Image: ' + imgClickedX)
    window.console.log('Position Y Image: ' + imgClickedY)
    window.console.log('Position X: ' + imagePosition.left)
    window.console.log('Position Y: ' + imagePosition.top)
    window.console.log('Original Breite: ' + imageClicked.offsetWidth)
    window.console.log('Original Höhe: ' + imageClicked.clientHeight)

    var tl = new TimelineLite({
      onComplete: function() {
        deferred.resolve()
      }
    })

    tl.set(imageGlow, {
        autoAlpha: 0
      })
      .staggerTo(imagesToFade, 0.7, {
        autoAlpha: 0
      }, 0.25,'fadeOutOthers')
      .to(imageCopy, 0.4, {
          autoAlpha: 0,
          yPercent: '20%'
      }, 'fadeOutOthers')
      .to(imageClicked, 0.7, {
        x: imgClickedX,
        y: imgClickedY,
        scale: imgClickedScale,
        transformOrigin:"0 50%",
        ease: new Ease(BezierEasing(.86,0,.07,1))
      }, '-=0.5')

    return deferred.promise
  },

  fadeIn: function() {

    var _this = this
    //var imageGlow = this.newContainer.querySelector('.masthead__image--glow')
    var tl = new TimelineLite({
      onComplete: function() {
        _this.done()
      }
    })

    tl.set(this.oldContainer, {
        autoAlpha: 0,
        position: 'absolute',
        top: 0,
        left: 0
      })
      .set(this.newContainer, {
        autoAlpha: 1
      })
      .from(this.newContainer.querySelector('.masthead__image--glow'), 0.4, {
        opacity: 0
      })
      .from(this.newContainer.querySelector('.masthead__bg-copy'), 0.7, {
        yPercent: -5,
        autoAlpha: 0,
        ease: new Ease(BezierEasing(.23,1,.32,1))
      }, '-=0.25')
      .from(this.newContainer.querySelectorAll('.masthead__copy--left'), 0.7, {
        xPercent: -55,
        autoAlpha: 0,
        ease: new Ease(BezierEasing(.23,1,.32,1))
      }, 'mastheadCopy -=0.4')
      .from(this.newContainer.querySelectorAll('.masthead__copy--right'), 0.7, {
        xPercent: 55,
        autoAlpha: 0,
        ease: new Ease(BezierEasing(.23,1,.32,1))
      }, 'mastheadCopy -=0.2')
  }
})
