import TimelineLite from 'gsap/TimelineLite'
import { animateText } from '../animations/animatetext'
import { animateImage } from '../animations/animateimage'
import { animateOverline } from '../animations/animateoverline'

export function watcherProject (object) {
  const scrollMonitor = require('../utils/scrollMonitor')
  var elementWatcher = scrollMonitor.create(object)

  elementWatcher.enterViewport(function () {
    const tl = new TimelineLite()
    const headline = object.querySelector('.headline__hl')
    const subline = object.querySelector('.headline__ol')
    const image = object.querySelector('.project-intro__image')

    tl.set(object, { autoAlpha: 1 })
    tl.add(animateText(headline, 'headline__hl', 0.4))
    tl.add(animateOverline(subline, 'headline__ol', 0.4), '-=0.25')
    tl.add(animateImage(image, 0.55), '-=0.75')
    tl.play()

    elementWatcher.destroy()
  })
}
