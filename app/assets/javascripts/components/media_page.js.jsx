var MediaPage = React.createClass ({

  getInitialState: function () {
    return {
      page: <MediaShow/>,
      pageName: "Show"
    }
  },

  componentDidMount: function () {
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
