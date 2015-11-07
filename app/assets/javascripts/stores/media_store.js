(function(root) {
  'use strict';
  var _media = [];
  var _medium = {};
  var CHANGE_EVENT = 'media_change';
  var SINGLE_CHANGE_EVENT = 'single_media_change';
  var DELETE_CHANGE_EVENT = 'media_deleted';
  var resetMedia = function (media) {
    _media = media;
    MediaStore.emit(CHANGE_EVENT);
  };
  var createMedium = function(medium) {
    _media.push(medium);
    MediaStore.emit(CHANGE_EVENT);
    MediaStore.emit(SINGLE_CHANGE_EVENT);
  };
  var getMedium = function(medium) {
    _medium = medium;
    MediaStore.emit(SINGLE_CHANGE_EVENT);
  };

  var deleteMedium = function(medium) {
    _media.splice(MediaStore.findMedium(medium.id), 1);
    MediaStore.emit(DELETE_CHANGE_EVENT);
  };

  var MediaStore = root.MediaStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _media.slice();
    },
    fetchMedium: function () {
      return $.extend({}, _medium);
    },
    getMedia: function (id) {
      var idx = this.findMedium(id);
      return _media[idx];
    },
    findMedium: function (id) {
      for(var i=0; i < _media.length; i++){
        if(_media[i].id === id) {
          return i;
        }
      }
    },
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    addSingleChangeListener: function(callback){
      this.on(SINGLE_CHANGE_EVENT, callback);
    },
    removeSingleChangeListener: function(callback){
      this.removeListener(SINGLE_CHANGE_EVENT, callback);
    },
    addDeleteChangeListener: function(callback){
      this.on(DELETE_CHANGE_EVENT, callback);
    },
    removeDeleteChangeListener: function(callback){
      this.removeListener(DELETE_CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case MediaConstants.FETCH_MEDIA:
          resetMedia(payload.media);
          break;
        case MediaConstants.CREATE_MEDIUM:
          createMedium(payload.medium);
          break;
        case MediaConstants.FETCH_MEDIUM:
          getMedium(payload.medium);
          break;
        case MediaConstants.UPDATE_MEDIUM:
          getMedium(payload.medium);
          break;
        case MediaConstants.DELETE_MEDIUM:
          deleteMedium(payload.medium);
          break;
      }
    })
  });
}(this));
