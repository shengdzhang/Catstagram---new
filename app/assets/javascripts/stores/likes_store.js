(function(root) {
  'use strict';
  var _likes = [];
  var CHANGE_EVENT = 'likes_change';

  var resetLikes = function (likes) {
    _likes = likes;
    LikesStore.emit(CHANGE_EVENT);
  };
  var updateLikes = function (like) {
    _likes.push(like);
    LikesStore.emit(CHANGE_EVENT);
  };
  var removeLike = function (like) {
    for (var i = 0; i < _likes.length; i++) {
      if (like.id === _likes[i].id) {
        _likes.splice(i, 1);
        LikesStore.emit(CHANGE_EVENT);
      }
    }
  };

  var LikesStore = root.LikesStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _likes.slice();
    },
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case LikesConstants.FETCH_LIKES:
          resetLikes(payload.likes);
          break;
        case LikesConstants.FETCH_SINGLE_LIKE:
          updateLikes(payload.like);
          break;
        case LikesConstants.REMOVE_SINGLE_LIKE:
          removeLike(payload.like);
          break;
      }
    })
  });
}(this));
