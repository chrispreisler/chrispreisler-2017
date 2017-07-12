//import Flickity from 'flickity'
import TweenLite from 'gsap/TweenLite'

export default class Gallery {
  constructor () {
    this.targetLeft = '.gallery__controls--left'
    this.targetRight = '.gallery__controls--right'
    this.indicator = '.gallery__indicator'

    this.init()
  }

  init () {
    this.flkty = new Flickity('.main-carousel', {
      imagesLoaded: true,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false
    })

    for (let i = 0; i < this.flkty.cells.length - 1; i++) {
      let indicatorClone = document.querySelector('.gallery__indicator__item').cloneNode(true)
      document.querySelector('.gallery__indicator').appendChild(indicatorClone)
    }

    document.querySelector('.gallery__indicator__item:first-child').classList.add('gallery__indicator__item--active')

    this.flkty.on('select', evt => this.onSelect(evt))

    document.querySelector(this.targetLeft).addEventListener('click', evt => this.onClickEventPrev(evt))
    document.querySelector(this.targetRight).addEventListener('click', evt => this.onClickEventNext(evt))
  }

  destroyGallery () {
    this.flkty.destroy()
  }

  onSelect () {
    if(document.querySelector('.gallery__caption__copy')) {
      TweenLite.to(document.querySelector('.gallery__caption__copy'), 0.3, {
        opacity: 0,
        yPercent: 100,
        onComplete: evt => this.onCaptionComplete(evt)
      })

      let previousSelectedButton = document.querySelector('.gallery__indicator__item--active')
      let selectedButton = document.querySelector('.gallery__indicator').children[ this.flkty.selectedIndex ]
      previousSelectedButton.classList.remove('gallery__indicator__item--active')
      selectedButton.classList.add('gallery__indicator__item--active')
    }
  }

  onCaptionComplete () {
    document.querySelector('.gallery__caption__copy').textContent = this.flkty.selectedElement.title
    TweenLite.to(document.querySelector('.gallery__caption__copy'), 0.3, {
      opacity: 1,
      yPercent: 0
    })
  }

  onClickEventPrev () {
    this.flkty.previous(true)
  }

  onClickEventNext () {
    this.flkty.next(true)
  }
}
