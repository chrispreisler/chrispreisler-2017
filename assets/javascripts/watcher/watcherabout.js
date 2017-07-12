import TimelineLite from 'gsap/TimelineLite'
import { animateTextAbout } from '../animations/animatetextabout'
// import { animateImage } from '../animations/animateimage'

export function watcherAbout (object) {
  const scrollMonitor = require('../utils/scrollMonitor')
  var elementWatcher = scrollMonitor.create(object)

  elementWatcher.enterViewport(function () {
    const tl = new TimelineLite()
    const headline = object.querySelector('.headline__hl')
    // const image = object.querySelector('.fullimage__image')

    tl.set(object, { autoAlpha: 1 })
    tl.add(animateTextAbout(headline, 'headline__hl', 0.3))
    // tl.add(animateImage(image, 0.55), '-=0.75')
    tl.play()

    elementWatcher.destroy()
  })
}
