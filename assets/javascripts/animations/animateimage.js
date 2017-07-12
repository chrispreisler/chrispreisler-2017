import BezierEasing from 'bezier-easing'
import TimelineLite from 'gsap/TimelineLite'

export function animateImage (data, duration, isVideo = false) {
  let object

  if (isVideo) {
    object = data.querySelector('video')
  } else {
    object = data.querySelector('img')
  }

  const objectOverlay = data.querySelector('.image__overlay')
  const tl = new TimelineLite()

  tl.set(object, {
    autoAlpha: 0
  })

  tl.to(objectOverlay, duration, {
    xPercent: 100,
    ease: new Ease(BezierEasing(0.645, 0.045, 0.355, 1))
  })

  tl.set(object, {
    autoAlpha: 1
  })

  tl.to(objectOverlay, duration, {
    x: 100,
    ease: new Ease(BezierEasing(0.645, 0.045, 0.355, 1))
  }, 'image')

  tl.set(objectOverlay, {
    autoAlpha: 0
  })

  return tl
}
