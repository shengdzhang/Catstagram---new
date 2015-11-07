

var MediaShowpage = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    return {media: {}, comments: [], likes: [], likeNumber: 0, followees: []};
  },
  componentDidMount: function () {
    ApiUtil.fetchSingleMedia(parseInt(this.props.params.mediumId));
    FollowsStore.addChangeListener(this.onFollowsChange);
    MediaStore.addSingleChangeListener(this.onMediaChange);
    CommentsStore.addChangeListener(this.onCommentsChange);
    LikesStore.addChangeListener(this.onLikesChange);
  },
  componentWillUnmount: function () {
    MediaStore.removeSingleChangeListener(this.onMediaChange);
    CommentsStore.removeChangeListener(this.onCommentsChange);
    LikesStore.removeChangeListener(this.onLikesChange);
    FollowsStore.removeChangeListener(this.onFollowsChange);
  },
  onFollowsChange: function () {
    this.setState({followees: FollowsStore.all()});
  },
  onMediaChange: function () {
    var media = MediaStore.fetchMedium ();
    this.setState({media: media, user: UsersStore.getUser(media.author_id)});
    ApiUtil.getFollowees();
    ApiUtil.fetchComments(media.id);
    ApiUtil.fetchLikes(media.id);
  },
  onCommentsChange: function () {
    var comments = CommentsStore.all();
    this.setState({comments: comments});
  },
  onLikesChange: function () {
    var likes = LikesStore.all();
    this.setState({likes: likes, likeNumber: likes.length});
  },
  editMedia: function () {
    var url = "/media/" + this.state.media.id +"/edit";
    this.history.pushState(null, url);
  },
  follow: function () {
    var followees = [],
        id = null;
    if(this.state.user) {
      followees = this.state.followees;
      id = this.state.user.id;
    }
    if(this.state.media.author_id) {
      if(this.state.media.author_id !== CURRENT_USER_ID) {
          return (
            <span className="media-show-follow"><FollowButton followees={followees} idx={id}/></span>
          );
      } else {
        return (
          <span></span>
        )
      }
    }
  },
  render: function () {
    var specialButton = <LikeButton likes={this.state.likes} mediaId={this.state.media.id}/>;
    if (this.state.media.author_id === CURRENT_USER_ID) {
      specialButton = <button onClick={this.editMedia}> Edit Media</button>
    }
    var likes = 0,
        username = "",
        desc = "";
    if (this.state.user){
      likes = this.state.likeNumber;
      username = this.state.user.username;
    }
    if (this.state.media.description) {
      desc = "Description: "+ this.state.media.description
    }
    return (
      <div className="media-show container col-xs-offset-1 col-xs-10">
        <img src={this.state.media.link}/>
        <div className="media-comments col-xs-5">
          <div className="media-info">
            <span className="media-show-author">Author: {username}</span>
            {this.follow()}
            <br/>
            <span className="media-show-likes">Likes: {likes} </span>
            {specialButton}
            <div className="media-show-desc">{desc}</div>
          </div>
          <ul className="comments-list">
            {
              this.state.comments.map(function (comment, idx){
                return <CommentShow key={comment.id} commentId={comment.id}/>
              })
            }
          </ul>
          <div className="comment-wrap">

            <CommentForm typeId={this.state.media.id} type="Medium"/>

          </div>
        </div>
      </div>
    );
  }
});
