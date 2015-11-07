
var UserEditpage = React.createClass ({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    var user = UsersStore.getCurrentUser();
    if (user) {
      return {user: user, username: user.username, password: "", newPassword: "", newPassword2: "", url: user.link};
    } else {
      return {};
    }
  },
  componentDidMount: function () {
    UsersStore.addChangeListener(this.onChange);
    UsersStore.addUpdateListener(this.onUpdate);
  },
  onChange: function () {
    this.setState({user: UsersStore.getCurrentUser(), username: UsersStore.getCurrentUser().username, url: UsersStore.getCurrentUser().link});
  },
  componentWillUnmount: function () {
    UsersStore.removeChangeListener(this.onChange);
    UsersStore.removeUpdateListener(this.onUpdate);
  },
  onUpdate: function () {
    var current = {user: 'current'};
    var url = "users/" + (CURRENT_USER_ID);
    this.history.pushState(null, url, current);
  },
  changeUsername: function (e) {
    this.setState({username: e.target.value});
  },
  changePassword: function (e) {
    this.setState({password: e.target.value});
  },
  changeNewPassword: function (e) {
    this.setState({newPassword: e.target.value});
  },
  changeNewPassword2: function (e) {
    this.setState({newPassword2: e.target.value});
  },
  onSubmit: function (e) {
    e.preventDefault();
    if (this.state.newPassword === this.state.newPassword2) {
      ApiUtil.editUser(this.state.user.id, this.state.username, this.state.password, this.state.newPassword, this.state.url);
    }
  },
  handleLink: function (e) {
    e.preventDefault();
    var options = {upload_preset: window.cloudinary_upload_preset, cloud_name: window.cloudinary_cloud_name};
    cloudinary.openUploadWidget(options, this.handleResponse);
  },
  handleResponse: function (error, result) {
    if(error) {
      console.log(error);
    } else {
      var url = result[0].secure_url;
      this.setState({url: url});
    }
  },
  render: function () {
    var url = this.state.url || "http://res.cloudinary.com/catstagram/image/upload/v1445014670/g6xesy4cm99zroz96rcc.png";
    if (GUEST) {
      return (<div></div>);
    } else {
      return (
        <div className = "user-edit-wrapper">
          <div className="user-edit">
            Hello {this.state.username}
          </div>
          <form className = "edit-form-wrap">
            <label> Change Username </label>
            <br/>
            <input type="text" onChange={this.changeUsername} value={this.state.username}/>
            <br/>
            <label> Enter Password </label>
            <br/>
            <input type="text" onChange={this.changePassword} value={this.state.password}/>
            <br/>
            <label> Enter New Password </label>
            <br/>
            <input type="text" onChange={this.changeNewPassword} value={this.state.newPassword}/>
            <br/>
            <label> Confirm New Password </label>
            <br/>
            <input type="text" onChange={this.changeNewPassword2} value={this.state.newPassword2}/>
            <br/>
            <input type="submit" onClick={this.onSubmit} value="Submit"/>
          </form>
          <div className="profile-image-wrapper">
            <div className="profile-text"> Change Profile Picture. </div>
            <img className="profile-img" src={url}/>
            <div className="profile-button-wrapper">
              <button onClick={this.handleLink}> Upload </button>
            </div>
        </div>
        </div>
      );
    }
  }

});
