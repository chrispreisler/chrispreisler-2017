import TweenLite from 'gsap/TweenLite'
import TimelineLite from 'gsap/TimelineLite'
import CSSPlugin from 'gsap/CSSPlugin'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import Barba from 'barba.js'
import Gallery from './components/gallery'
import MobileMenu from './components/mobilemenu'
import Picturefill from 'picturefill'
import Intrinsic from './utils/pf.intrinsic.min'
import BezierEasing from 'bezier-easing'
import { TransitionDefault } from './transitions/transitiondefault'
import { TransitionTeaser } from './transitions/transitionteaser'
import { TransitionHome } from './transitions/transitionhome'
import { TransitionAbout } from './transitions/transitionabout'
import { TransitionNavigationProjects } from './transitions/transitionnavigationprojects'
import { TransitionNavigationAbout } from './transitions/transitionnavigationabout'
import { watcherHome } from './watcher/watcherhome'
import { watcherAbout } from './watcher/watcherabout'
import { watcherAboutImage } from './watcher/watcheraboutimage'
import { watcherProject } from './watcher/watcherproject'
import { watcherTeaserList } from './watcher/watcherteaserlist'
import YtVideo from './components/ytvideo'
import Blazy from 'blazy'

document.createElement('picture')

if (document.querySelector('.content').getAttribute('data-namespace') === 'projects') {
  const teaserItems = document.querySelectorAll('.teaser__item')
  watcherHome(document.querySelector('.content'), 1)
  for (i = 0; i < teaserItems.length; ++i) {
    watcherTeaserList(teaserItems[i], 'teaser__item')
  }
}

if (document.querySelector('.content').getAttribute('data-namespace').includes('projects/')) {
  const twoTeaser = document.querySelectorAll('.twoteaser__item')
  watcherProject(document.querySelector('.content'), 1)
  for (i = 0; i < twoTeaser.length; ++i) {
    watcherTeaserList(twoTeaser[i], 'twoteaser__item')
  }
}

if (document.querySelector('.content').getAttribute('data-namespace') === 'about') {
  watcherAbout(document.querySelector('.content'), 1)
  watcherAboutImage(document.querySelector('.fullimage'), 1)
  window.console.log('### Init Gallery ###')
  const gallery = new Gallery()
}

var mobileMenu = new MobileMenu()
var bLazy = new Blazy({
  offset: 300
})

if (document.querySelector('.video__playbtn')) {
  var ytVideo = new YtVideo()
  window.onYouTubeIframeAPIReady = function () {
    ytVideo.createPlayer()
  }
}

Barba.Pjax.start()
Barba.Prefetch.init()
Barba.Utils.xhrTimeout = 10000

var links = document.querySelectorAll('a[href]')
var cbk = function (e) {
  if (e.currentTarget.href === window.location.href) {
    e.preventDefault()
    e.stopPropagation()
  }
}

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', cbk)
}

Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container) {
  window.console.log('')
  window.console.log('### New Page is Ready ###')

  if (container.querySelector('.gallery')) {
    window.console.log('')
    window.console.log('### Init Gallery ###')
    const gallery = new Gallery()
  }

  if (document.querySelector('.video__playbtn')) {
    var ytVideo = new YtVideo()
    window.onYouTubeIframeAPIReady = function () {
      ytVideo.createPlayer()
    }
  }

  var bLazy = new Blazy({
    offset: 300
  })

  if (window.innerWidth <= 992) {
    mobileMenu.initTimeline()
  }

  let menulinks = document.querySelectorAll('.nav__link')
  let namespace = currentStatus.namespace

  if (currentStatus.namespace.substring(0, currentStatus.namespace.indexOf('/'))) {
    namespace = currentStatus.namespace.substring(0, currentStatus.namespace.indexOf('/'))
  }

  for (var i = 0; i < menulinks.length; i++) {
    menulinks[i].classList.remove('nav__link--active')
    if (namespace === menulinks[i].getAttribute('data-namespace')) {
      menulinks[i].classList.add('nav__link--active')
    }
  }
})

var lastClickEl
var clickedEl
Barba.Dispatcher.on('linkClicked', function (el) {
  lastClickEl = el
  const pageOverlay = document.querySelector('.page__overlay')
  pageOverlay.classList.add('page__overlay--' + lastClickEl.getAttribute('data-project-name'))

  window.console.log('')
  window.console.log('### Clicked ###')
})

Barba.Dispatcher.on('transitionCompleted', function () {
  const pageOverlay = document.querySelector('.page__overlay')
  pageOverlay.classList.remove(pageOverlay.classList.item(1))
})

Barba.Pjax.getTransition = function () {

  const nameClicked = (lastClickEl.getAttribute('data-namespace') ? lastClickEl.getAttribute('data-namespace') : null)
  let back = false

  window.console.log(' ')
  window.console.log('### Transition Start ###')
  window.console.log('### Next Namespace: ' + nameClicked + ' ###')
  window.console.log('### Menu open: ' + mobileMenu.getIsOpen() + ' ###')

  if (lastClickEl === clickedEl) {
    back = true
  } else {
    clickedEl = lastClickEl
    back = false
  }

  if (TransitionNavigationProjects.valid(nameClicked) && back === false && mobileMenu.getIsOpen() === true) {
    window.console.log(' ')
    window.console.log('### Transition from Navigation to Projects ###')
    mobileMenu.setIsOpen(false)
    return TransitionNavigationProjects
  }

  if (TransitionNavigationAbout.valid(nameClicked) && back === false) {
    window.console.log(' ')
    window.console.log('### Transition from Navigation to About ###')
    mobileMenu.setIsOpen(false)
    return TransitionNavigationAbout
  }

  if (TransitionAbout.valid(nameClicked) && back === false) {
    window.console.log(' ')
    window.console.log('### Transition to About ###')
    return TransitionAbout
  }

  if (TransitionTeaser.valid(nameClicked) && back === false) {
    window.console.log(' ')
    window.console.log('### Transition to Project ###')
    return TransitionTeaser
  }

  if (TransitionHome.valid(nameClicked) && back === false) {
    window.console.log(' ')
    window.console.log('### Transition to Home ###')
    return TransitionHome
  }

  window.console.log(' ')
  window.console.log('### Transition Default ###')
  return TransitionDefault
}
