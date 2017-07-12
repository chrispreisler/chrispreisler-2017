import TimelineLite from 'gsap/TimelineLite'
import { animateDefault } from '../animations/animatedefault'

export function watcherDefault (object) {
  const scrollMonitor = require('../utils/scrollMonitor')
  var elementWatcher = scrollMonitor.create(object)

  elementWatcher.enterViewport(function () {
    const tl = new TimelineLite()
    tl.add(animateDefault(object, 2))
    tl.play()

    elementWatcher.destroy()
  })
}

/*var scrollMonitor = require("./utils/scrollMonitor")
var myElement = document.querySelector('.footer')

var elementWatcher = scrollMonitor.create( myElement )

elementWatcher.enterViewport(function() {
    console.log( 'I have entered the viewport' )
})
elementWatcher.exitViewport(function() {
    console.log( 'I have left the viewport' )
})*/

//let person = new Test('Ram', 'Kulkarni')
