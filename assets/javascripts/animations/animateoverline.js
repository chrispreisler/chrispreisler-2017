import TimelineLite from 'gsap/TimelineLite'
import BezierEasing from 'bezier-easing'

export function animateOverline (object, className, duration) {
  const tl = new TimelineLite()
  let out = []
  let words = object.querySelector('.' + className + '__text').textContent.trim().split(' ')

  for (let i = 0; i < words.length; i += 1) {
    out.push('<span class="' + className + '__text__item" style="display:inline-block">' + words.slice(i, i + 1).join(' ') + '</span>')
  }

  object.querySelector('.' + className + '__text').innerHTML = out.join(' ')
  let objectChildren = object.querySelectorAll('.' + className + '__text__item')

  tl.from(object.querySelector('.' + className + '__line'), duration, {
    autoAlpha: 0,
    width: 0,
    ease: new Ease(BezierEasing(0.645, 0.045, 0.355, 1)),
    clearProps: 'all'
  })
  tl.staggerFrom(objectChildren, duration / 2, {
    opacity: 0,
    yPercent: 25,
    cycle: { delay: function (index) {
      return index * 0.01
    }}
  }, '0.25', '-=0.1')

  return tl
}
