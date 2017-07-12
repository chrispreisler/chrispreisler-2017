import BezierEasing from 'bezier-easing'
import TimelineLite from 'gsap/TimelineLite'

export default class YtVideo {
  constructor () {
    this.player
    var tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    var firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    document.querySelector('.video__playbtn').addEventListener('click', evt => this.onClick(evt))
  }

  onClick (event) {
    this.player.playVideo()
    const tl = new TimelineLite()
    tl.to(document.querySelector('.video__preview'), 0.25, {
      autoAlpha: 0,
      display: 'none',
      ease: new Ease(BezierEasing(0.23, 1, 0.32, 1))
    })
    .to(document.querySelector('.video__iframe'), 0.25, {
      autoAlpha: 1,
      ease: new Ease(BezierEasing(0.23, 1, 0.32, 1)),
      display: 'block'
    })
  }

  onPlayerStateChange (event) {
    if (event.data === YT.PlayerState.ENDED) {

      const tl = new TimelineLite()
      tl.to(document.querySelector('.video__iframe'), 0.25, {
        autoAlpha: 0,
        ease: new Ease(BezierEasing(0.23, 1, 0.32, 1)),
        display: 'none'
      })
      .to(document.querySelector('.video__preview'), 0.25, {
        autoAlpha: 1,
        display: 'block',
        ease: new Ease(BezierEasing(0.23, 1, 0.32, 1))
      })
    }
  }

  createPlayer () {
    this.player = new YT.Player('player', {
      events: {
        'onStateChange': this.onPlayerStateChange
      }
    })
  }
}
