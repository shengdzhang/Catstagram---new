/* global ReactRouter */

var RouteHandler = ReactRouter.RouteHandler;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = React.createClass({
  render: function(){
    return (
        <div>
          <Nav/>
            <div className="pagewrapper">
              {this.props.children}
            </div>
        </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Single}/>
    <Route path="users/:userId" component={UserShowpage}>
      <Route path="media/:mediumId" component={MediaPage}/>
    </Route>

  </Route>
);


$(function() {

  var root = document.getElementById('content');
  React.render(<Router>{routes}</Router>, root);
});
