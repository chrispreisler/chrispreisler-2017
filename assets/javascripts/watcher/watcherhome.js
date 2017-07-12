import TimelineLite from 'gsap/TimelineLite'
import { animateText } from '../animations/animatetext'
import { animateImage } from '../animations/animateimage'
import { animateLink } from '../animations/animatelink'
import { animateOverline } from '../animations/animateoverline'

export function watcherHome (object, startDelay = 0) {
  const scrollMonitor = require('../utils/scrollMonitor')
  var elementWatcher = scrollMonitor.create(object)

  elementWatcher.enterViewport(function () {
    window.console.log(' ')
    window.console.log('### Start Home Animation ###')

    const tl = new TimelineLite({ delay: startDelay })
    const headline = object.querySelector('.largeteaser__hl')
    const overline = object.querySelector('.largeteaser__ol')
    const video = object.querySelector('.largeteaser__video-wrapper')
    const link = object.querySelector('.largeteaser__link')

    tl.set(object, { autoAlpha: 1 })
    tl.add(animateImage(video, 0.55, true))
    tl.add(animateText(headline, 'largeteaser__hl', 0.4), '-=1')
    tl.add(animateOverline(overline, 'largeteaser__ol', 0.4), '-=0.65')
    tl.add(animateLink(link, 1), '-=0.2')
    tl.play()

    elementWatcher.destroy()
  })
}
