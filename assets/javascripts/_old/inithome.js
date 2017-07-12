import BezierEasing from 'bezier-easing';
import { animateText } from './animatetext';

export default class InitHome {
  constructor () {
    window.console.log(document.querySelector('.content').getAttribute('data-namespace'));
    const tl = new TimelineLite({paused:true, delay:2});

    tl.add(animateText('largeteaser__hl', 0.4));
    tl.add(animateText('largeteaser__sl', 0.4));
    //tl.add(animateText('largeteaser__link', 0.4));
    tl.play();

    /*this.animateMastheadImage('largeteaser__fullscreen', 'largeteaser__image');
    this.animateMastheadText('largeteaser__hl');
    this.animateMastheadText('largeteaser__sl');
    this.animateMastheadLink('largeteaser__link');
    this.animateHeader('.header');
    this.tl.play();*/
  }



  animateHeader(headerClass) {
    const header = document.querySelector(headerClass);
    //const tl = new TimelineLite();

    this.tl.from(header, 1.5, {
          yPercent: -40,
          opacity: 0,
          ease: new Ease(BezierEasing(.23,1,.32,1))
    }, '-=1');
  }

  animateMastheadImage(wrapperClass, imageClass) {
    const wrapper = document.querySelector('.' + wrapperClass);
    const image = document.querySelector('.' + imageClass);

    this.tl.to(wrapper, 0.75, {
            scaleX: 1,
            ease: new Ease(BezierEasing(.23,1,.32,1))
          })
          .set(wrapper, {
            transformOrigin: '100% 50%'
          })
          .set(image, {
            display: 'block'
          })
          .to(wrapper, 0.75, {
            scaleX: 0,
            ease: new Ease(BezierEasing(.23,1,.32,1))
          });
  }

  animateMastheadText(className) {
    const subline = document.querySelector('.' + className);
    let out = [];
    let words = subline.innerText.trim().split(' ');
    for (let i = 0; i < words.length; i += 1) {
          out.push('<span class="' + className + '__item" style="display:inline-block">' + words.slice(i, i+1).join(' ') + '</span>');
    }
    subline.innerHTML = out.join(' ');
    let sublineChildren = document.querySelectorAll('.' + className + '__item');
    window.console.log('.' + className + '__item');

    this.tl.staggerFrom(sublineChildren, 0.4, {
          opacity: 0,
          yPercent: 25,
          cycle: { delay: function(index) {
            return index * 0.01;
          }}
          //ease: new Ease(BezierEasing(.23,1,.32,1))
    }, '0.25', '-=0.25');
  }


}
