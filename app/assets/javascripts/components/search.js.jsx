var Search = React.createClass ({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    return {searchQuery: "", users: UsersStore.all()};
  },
  handleChange: function (e) {
    this.setState ({searchQuery: e.target.value});
  },
  componentDidMount: function () {
    UsersStore.addChangeListener(this.onUserChange);
  },
  componentWillUnmount: function () {
    UsersStore.removeChangeListener(this.onUserChange);
  },
  onUserChange: function () {
    this.setState({users: UsersStore.all()});
  },
  handleClick: function (id, e) {
    this.setState({searchQuery: ""});
    var url = "users/" + (id);
    this.history.pushState(null, url);
  },
  render: function () {
    var placeholder = "\ud83d\udd0d";
    var names = [];
    var search = this.state.searchQuery.trim().toLowerCase();
    var self = this;
    if (search.length > 0){
      for(var i = 0; i < this.state.users.length; i++)
      {
        if (this.state.users[i].username.toLowerCase().slice(0,search.length).match(search)) {
          names.push(this.state.users[i]);
        }
      }
    }
    return (
      <div id="searchbar" className="group">
        <div id="searchglass">{placeholder}</div><input onChange={this.handleChange} name="search" type="text" value={this.state.searchQuery} placeholder=" Search"/>
        <ul className="list-group dropdowner">
          {
              names.map(function(user, idx){
              return <li className="list-group-item" key={idx} onClick={self.handleClick.bind(self, user.id)}> {user.username} </li>
            })
          }
        </ul>
      </div>
    );
  }
});
