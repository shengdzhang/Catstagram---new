

var UserProfile = React.createClass ({
  mixins: [ReactRouter.History],
  handleMedia: function () {
    this.history.pushState(null, "media/new");
  },
  editProfile: function () {
    var url = "/users/" +  CURRENT_USER_ID + "/edit";
    this.history.pushState(null, url);
  },
  render: function () {

    // prechecks existance
    var name = "";
    if(this.props.user){
      name = this.props.user.username;
    }
    var follows = "";
    var followWord = "Followers";
    if(this.props.user){
      follows = this.props.followers.length;
      if (follows <= 1) {
        followWord = "Follower";
      }
    }
    var followPhrase = followWord + ": " + follows;

    //if current user
    if(this.props.current) {
      var profile = <div></div>;
      //if current user is not guest, have profile change capability
      if(!GUEST)
      {
        profile = <div className="user-profile group">
                    <button onClick={this.editProfile} > Edit Profile </button>
                  </div>;
      } else {
        followPhrase = "Guest has limited features. Please sign up for full features.";
      }
      //return for current user
      return (
        <div className="profile group container col-xs-offset-2 col-xs-8">
          <image className="profile-picture col-xs-offset-2" src={this.props.user.link}/>
            <div className="profile-wrapper-current col-xs-6">
              <br/>
              {name}
              <br/>
              {profile}
              <div className="user-upload">
                <button onClick={this.handleMedia} > Upload Media </button>
              </div>
              <div className="show-follows">
                {followPhrase}
              </div>
            </div>
        </div>
      );
    } else {
      //return for all other users
      return (
        <div className="profile group container col-xs-offset-2 col-xs-8">
          <image className="profile-picture col-xs-offset-2" src={this.props.user.link}/>
          <div className="profile-wrapper-foreign col-xs-6">
            {name}
            <br/>
            <FollowButton followees={this.props.followees} idx={this.props.user.id}/>
            <div className="show-follows">
              {followPhrase}
            </div>
          </div>
        </div>
      )
    }
  }
});
