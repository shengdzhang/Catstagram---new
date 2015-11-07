/*global React */
/*global MediaStore */
/* global ApiUtil */

var UserShowpage = React.createClass ({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    return {userId: parseInt(this.props.params.userId), media: [], user: UsersStore.getShowUser(), followers: [], followees: []};
  },
  componentDidMount: function () {
    UsersStore.addChangeListener(this.onUserChange);
    MediaStore.addChangeListener(this.onMediaChange);
    FollowsStore.addChangeListener(this.onFollowsChange);
    ApiUtil.getSingleUser(this.state.userId);
    ApiUtil.getMedia(this.state.userId);
  },
  onUserChange: function (e) {
    var user = UsersStore.getShowUser();
    var followers = user.followers || [];
    this.setState({user: user, followers: followers});
  },
  onMediaChange: function (e) {
    this.setState({media: MediaStore.all()});
  },
  componentWillUnmount: function () {
    MediaStore.removeChangeListener(this.onMediaChange);
    UsersStore.removeChangeListener(this.onUserChange);
    FollowsStore.removeChangeListener(this.onFollowsChange);
  },
  onFollowsChange: function () {
    this.setState({followees: FollowsStore.all()});
  },
  componentWillReceiveProps: function(val) {
    var id = val.params.userId;
    ApiUtil.getSingleUser(id);
    ApiUtil.getMedia(id);
    this.setState({userId: id});
  },
  pathMedia: function (id, e) {
    var url = "media/" + id;
    this.history.pushState(null, url);
  },
  voidMedia: function () {
    if (this.state.media.length === 0) {
      return (
        <div className="showpage-nomedia container col-xs-offset-2 col-xs-7"> No photos to show. </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  },
  render: function () {

    return (
      <div id="show-wrapper">
        <UserProfile user={this.state.user} followees={this.state.followees} followers={this.state.followers} current={this.props.location.query.user}/>
        <ul className="media-list">
          {
            this.state.media.map(function (media){
                return <li className='media' key={media.id}>
                        <a draggable="true" title={media.title} onClick={this.pathMedia.bind(this, media.id)}>
                          <image className="user-show-img" src={media.link}/>
                        </a>
                       </li>
            }.bind(this))
          }
        </ul>
        {this.voidMedia()}
      </div>
    );
  }
});
