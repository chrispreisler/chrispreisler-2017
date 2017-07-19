export default class Largeteaser {
  constructor () {
    window.console.log(' ')
    window.console.log('### Start Largeteaser Constructor ###')

    this.hoverObjects = document.querySelectorAll('.largeteaser__hover')
    this.link = document.querySelector('.largeteaser__link')
    this.video = document.querySelector('.largeteaser__video')
    this.init()
  }

  init () {
    window.console.log('')
    window.console.log('### Init Largeteaser ###')
    window.console.log(this.hoverObjects[0])

    for (let i = 0; i < this.hoverObjects.length; ++i) {
      this.hoverObjects[i].addEventListener('mouseover', evt => this.onMouseover(evt))
    }
  }

  onMouseover (evt) {

    this.link.classList.add('largeteaser__link--isAnimating')
    this.video.classList.add('largeteaser__video--isAnimating')

    evt.target.addEventListener('mouseout', evt => this.onMouseout(evt))
  }

  onMouseout (evt) {

    this.link.classList.remove('largeteaser__link--isAnimating')
    this.video.classList.remove('largeteaser__video--isAnimating')
  }

}
