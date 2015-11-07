var FollowButton = React.createClass ({

  handleClickFollow: function (e) {
    e.preventDefault();
    ApiUtil.createFollow(this.props.idx);
  },
  handleClickUnfollow: function (e) {
    e.preventDefault();
    ApiUtil.removeFollow(this.props.idx);
  },
  render: function () {
    var name = "Follow";
    var click = this.handleClickFollow;
    var followees = this.props.followees;
    var idx = parseInt(this.props.idx);
    for (var i = 0; i < followees.length; i++) {
      if (idx === followees[i].followee_id) {
        name = "Unfollow";
        click = this.handleClickUnfollow;
      }
    }
    return (
        <button className={name} onClick={click}>
          {name}
        </button>
    );

  }
});
