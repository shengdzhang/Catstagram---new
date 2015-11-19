var Single = React.createClass ({

  getInitialState: function () {
    return {
      page: <UserHomepage onUserClick={this.handleUserClick}/>,
      pageName: "Home"
    }
  },

  componentDidMount: function () {
    ApiUtil.getUsers();
  },

  handleUserClick: function (userId) {
    var url = "users/" + userId
    this.props.history.pushState(null, url);
  },

  render: function () {

    return (
      <div>

          {this.state.page}

      </div>
    );
  }

});
