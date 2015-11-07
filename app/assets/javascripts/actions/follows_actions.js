FollowsActions = {
  getFollows: function(follows){
    AppDispatcher.dispatch({
      actionType: FollowsConstants.FETCH_FOLLOWS,
      follows: follows
    });
  },

  updateSingleFollow: function (follow){
    AppDispatcher.dispatch({
      actionType: FollowsConstants.FETCH_SINGLE_FOLLOW,
      follow: follow
    });
  },

  deleteSingleFollow: function (follow) {
    AppDispatcher.dispatch({
      actionType: FollowsConstants.REMOVE_SINGLE_FOLLOW,
      follow: follow
    });
  }
};
