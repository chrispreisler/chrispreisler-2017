import TimelineLite from 'gsap/TimelineLite'
import BezierEasing from 'bezier-easing'

export function animateTextAbout (object, className, duration) {
  const tl = new TimelineLite()

  let out = []
  let words = object.textContent.trim().split(' ')

  for (let i = 0; i < words.length; i += 1) {
    out.push('<span class="' + className + '__item" style="display:inline-block">' + words.slice(i, i + 1).join(' ') + '</span>')
  }

  object.innerHTML = out.join(' ')

  let objectChildren = object.querySelectorAll('.' + className + '__item')

  tl.staggerFrom(objectChildren, duration, {
    opacity: 0,
    yPercent: 25,
    cycle: { delay: function (index) {
      return index * 0.001
    }}
  }, '0.035', '-=0.25')

  return tl
}
