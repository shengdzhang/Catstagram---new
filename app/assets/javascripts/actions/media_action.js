MediaActions = {
  getMedia: function(media) {
    AppDispatcher.dispatch ({
      actionType: MediaConstants.FETCH_MEDIA,
      media: media
    });
  },
  createMedium: function(medium) {
    AppDispatcher.dispatch ({
      actionType: MediaConstants.CREATE_MEDIUM,
      medium: medium
    });
  },
  fetchMedium: function(medium) {
    AppDispatcher.dispatch ({
      actionType: MediaConstants.FETCH_MEDIUM,
      medium: medium
    });
  },
  updateMedium: function(medium) {
    AppDispatcher.dispatch ({
      actionType: MediaConstants.UPDATE_MEDIUM,
      medium: medium
    });
  },
  deleteMedium: function(medium) {
    AppDispatcher.dispatch ({
      actionType: MediaConstants.DELETE_MEDIUM,
      medium: medium
    });
  }
};
