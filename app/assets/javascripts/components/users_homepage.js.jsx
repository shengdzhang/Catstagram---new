/*global React */
/*global UsersStore */
/* global ApiUtil */

var UserHomepage = React.createClass ({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {users: UsersStore.all(), currentFollowees: FollowsStore.all()};
  },
  componentDidMount: function () {
    UsersStore.addChangeListener(this.onChange);
    FollowsStore.addChangeListener(this.onFollowerChange);
    ApiUtil.getFollowees();
  },
  onChange: function (e) {
    this.setState({users: UsersStore.all().splice(0,10)}); //top 10
  },
  onFollowerChange: function (e) {
    this.setState({currentFollowees: FollowsStore.all()});
  },
  componentWillUnmount: function () {
    UsersStore.removeChangeListener(this.onChange);
    FollowsStore.removeChangeListener(this.onFollowerChange);
  },
  clickHandler: function (id, e) {
    var url = "users/" + (id);
    this.history.pushState(null, url);
  },
  render: function () {

    return (
      <div id="homewrapper">
        <h3 className="heading col-xs-offset-3 col-xs-6"> Suggested accounts to follows </h3>
        <ul className="suggest-wrapper list-group group col-xs-offset-3 col-xs-6">
            {
              this.state.users.map(function (user, idx){
                  return <li className='list-group-item suggest group' key={idx}>
                            <img className='thumbnail' src={user.link}/>
                            <a onClick={this.clickHandler.bind(this, user.id)}> {user.username} </a>
                            <FollowButton followees={this.state.currentFollowees} idx={user.id}/>
                        </li>
              }.bind(this))
            }
          </ul>
      </div>
    )
  }
});
