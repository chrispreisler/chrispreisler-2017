
var TransitionDefault = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    var deferred = Barba.Utils.deferred();

    var tl = new TimelineLite({
      onComplete: function() {
        deferred.resolve();
      }
    });

    tl.to(this.oldContainer, 0.4, {
      autoAlpha: 0
    })
    .set(this.oldContainer, {
      display: 'none'
    });

    return deferred.promise;
  },

  fadeIn: function() {
    var _this = this;
    var tl = new TimelineLite({
      onComplete: function() {
        _this.done();
      }
    });

    tl.to(this.newContainer, 0.4, {
        autoAlpha: 1
      });
  }
});
