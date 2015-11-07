/* global ApiActions */
/* global UsersActions */
/* global MediaActions */
/* global FollowsActions */
/* global CommentsActions */
/* global LikesActions */

var ApiUtil = {
  getUsers: function(){
    $.ajax({
      url: "/users",
      method: "GET",
      success: function(users) {
        UsersActions.getAllUsers(users);
      }
    });
  },

  getSingleUser: function (id) {
    $.ajax ({
      url: "/users/"+id,
      method: "GET",
      datatype: "JSON",
      success: function(user) {
        UsersActions.getSingleUser(user);
      }
    });
  },

  editUser: function (id, newUsername, password, newPassword, link) {
    $.ajax ({
      url: "/users/" + id,
      method: "PATCH",
      data: {new_name: newUsername, password: password, new_password: newPassword, link: link},
      datatype: "JSON",
      success: function(user) {
        UsersActions.updateUser(user);
      }
    });
  },

  logOut: function () {
    $.ajax ({
      url: "/session",
      method: "DELETE",
      success: function (e) {
        window.location.href = '/session/new';
      }
    });
  },

  getFollowees: function () {
    $.ajax ({
      url: "/follows",
      method: "GET",
      datatype: "JSON",
      success: function (follows) {
        FollowsActions.getFollows(follows);
      }
    });
  },

  createFollow: function (idx) {
    $.ajax ({
      url: "/follows",
      method: "POST",
      data: {"followee_id": idx},
      datatype: "JSON",
      success: function (follow) {
        FollowsActions.updateSingleFollow(follow);
      }
    });
  },

  removeFollow: function (idx) {
    $.ajax ({
      url: "/follows/"+idx,
      method: "DELETE",
      data: {"followee_id": idx},
      datatype: "JSON",
      success: function (follow) {
        FollowsActions.deleteSingleFollow(follow);
      }
    });
  },

  fetchLikes: function (media_id) {
    $.ajax ({
      url: "/likes",
      method: "GET",
      data: {"media_id": media_id},
      datatype: "JSON",
      success: function (likes) {
        LikesActions.getLikes(likes);
      }
    });
  },

  createLike: function (idx) {
    $.ajax ({
      url: "/likes",
      method: "POST",
      data: {"media_id": idx},
      datatype: "JSON",
      success: function (like) {
        LikesActions.updateSingleLike(like);
      }
    });
  },

  removeLike: function (idx) {
    $.ajax ({
      url: "/likes/"+idx,
      method: "DELETE",
      datatype: "JSON",
      success: function (like) {
        LikesActions.deleteSingleLike(like);
      }
    });
  },

  getMedia: function (id) {
    $.ajax ({
      url: "/api/media/",
      method: "GET",
      data: {"user_id": id},
      datatype: "JSON",
      success: function(media) {
        MediaActions.getMedia(media);
      }
    });
  },

  createMedia: function (url, title, description) {
    $.ajax ({
      url: "/api/media",
      method: "POST",
      data: {"url": url, "title": title, "description": description},
      datatype: "JSON",
      success: function(medium) {
        MediaActions.createMedium(medium);
      }
    });
  },

  fetchSingleMedia: function (id) {
    $.ajax ({
      url: "/api/media/" + id,
      method: "GET",
      datatype: "JSON",
      success: function(medium) {
        MediaActions.fetchMedium(medium);
      }
    });
  },

  editMedia: function (id, url, title, description) {
    $.ajax ({
      url: "/api/media/" + id,
      method: "PATCH",
      data: {"url": url, "title": title, "description": description},
      datatype: "JSON",
      success: function(medium) {
        MediaActions.updateMedium(medium);
      }
    });
  },

  deleteMedia: function (id) {
    $.ajax ({
      url: "/api/media/" + id,
      method: "DELETE",
      success: function(medium) {
        MediaActions.deleteMedium(medium);
      }
    });
  },

  fetchComments: function (id) {
    $.ajax ({
      url: "/api/comments",
      method: "GET",
      data: {"media_id": id},
      datatype: "JSON",
      success: function(comments) {
        CommentsActions.getComments(comments);
      }
    });
  },

  createComment: function(type, id, text){
    $.ajax ({
      url: "/api/comments",
      method: "POST",
      data: {"type":type, "type_id": id, "body": text},
      datatype: "JSON",
      success: function (comment) {
        CommentsActions.updateSingleComment(comment);
      }
    });
  },

  fetchComment: function(id) {
    $.ajax ({
      url: "/api/comments/" +id,
      method: "GET",
      datatype: "JSON",
      success: function (comment) {
        CommentsActions.getSingleComment(comment);
      }
    });
  },

  updateComment: function (id, text) {
    $.ajax ({
      url: "/api/comments/" +id,
      method: "PATCH",
      data: {"body": text},
      datatype: "JSON",
      success: function (comment) {
        CommentsActions.changeSingleComment(comment);
      }
    });
  },

  deleteComment: function (id) {
    $.ajax ({
      url: "/api/comments/" +id,
      method: "DELETE",
      datatype: "JSON",
      success: function (comment) {
        CommentsActions.deleteComment(comment);
      }
    });
  }
};
