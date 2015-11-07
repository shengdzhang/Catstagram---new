LikesActions = {
  getLikes: function(likes){
    AppDispatcher.dispatch({
      actionType: LikesConstants.FETCH_LIKES,
      likes: likes
    });
  },

  updateSingleLike: function (like){
    AppDispatcher.dispatch({
      actionType: LikesConstants.FETCH_SINGLE_LIKE,
      like: like
    });
  },

  deleteSingleLike: function (like) {
    AppDispatcher.dispatch({
      actionType: LikesConstants.REMOVE_SINGLE_LIKE,
      like: like
    });
  }
};
