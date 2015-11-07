(function(root) {
  'use strict';
  var _follows = [];
  var CHANGE_EVENT = 'follows_change';

  var resetFollowers = function (follows) {
    _follows = follows;
    FollowsStore.emit(CHANGE_EVENT);
  };
  var updateFollowers = function (follow) {
    _follows.push(follow);
    FollowsStore.emit(CHANGE_EVENT);
  };
  var removeFollower = function (follow) {
    for (var i = 0; i < _follows.length; i++) {
      if (follow.id === _follows[i].id) {
        _follows.splice(i, 1);
        FollowsStore.emit(CHANGE_EVENT);
      }
    }
  };

  var FollowsStore = root.FollowsStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _follows.slice();
    },
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case FollowsConstants.FETCH_FOLLOWS:
          resetFollowers(payload.follows);
          break;
        case FollowsConstants.FETCH_SINGLE_FOLLOW:
          updateFollowers(payload.follow);
          break;
        case FollowsConstants.REMOVE_SINGLE_FOLLOW:
          removeFollower(payload.follow);
          break;
      }
    })
  });
}(this));
