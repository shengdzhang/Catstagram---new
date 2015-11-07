
var LikeButton = React.createClass ({

  getInitialState: function () {
    return {id: null};
  },
  handleClickLike: function (e) {
    e.preventDefault();
    ApiUtil.createLike(this.props.mediaId);
  },
  handleClickUnlike: function (e) {
    e.preventDefault();
    ApiUtil.removeLike(this.state.id);
  },
  render: function () {
    var name = "Like";
    var click = this.handleClickLike;
    var likes = this.props.likes;
    var idx = parseInt(this.props.mediaId);
    for (var i = 0; i < likes.length; i++) {
      if (idx === likes[i].media_id) {
        name = "Unlike";
        this.state.id = likes[i].id;
        click = this.handleClickUnlike;
      }
    }
    return (
        <button className="media-like" onClick={click}>
          {name}
        </button>
    );

  }
});
