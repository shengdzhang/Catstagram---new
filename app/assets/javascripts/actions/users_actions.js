UsersActions = {
  getAllUsers: function(users){
    AppDispatcher.dispatch({
      actionType: UsersConstants.FETCH_USERS,
      users: users
    });
  },
  getSingleUser: function(user){
    AppDispatcher.dispatch({
      actionType: UsersConstants.FETCH_SINGLE_USER,
      user:user
    });
  },
  updateUser: function(user) {
    AppDispatcher.dispatch({
      actionType: UsersConstants.UPDATE_USER,
      user: user
    });
  }
};
