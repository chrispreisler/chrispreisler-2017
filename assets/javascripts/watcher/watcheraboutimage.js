import TimelineLite from 'gsap/TimelineLite'
import { animateImage } from '../animations/animateimage'

export function watcherAboutImage (object) {
  const scrollMonitor = require('../utils/scrollMonitor')
  var elementWatcher = scrollMonitor.create(object)

  elementWatcher.enterViewport(function () {
    const tl = new TimelineLite()
    const image = object.querySelector('.fullimage__image')

    window.console.log('starte portrait animation')

    tl.add(animateImage(image, 0.55))
    tl.play()

    elementWatcher.destroy()
  })
}
