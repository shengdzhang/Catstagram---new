
var CommentItem = React.createClass({
  getInitialState: function () {
    return {body: this.props.comment.body, toggle: false};
  },
  textChange: function (e) {
    this.setState({body: e.target.value});
  },
  handleKeyUp: function (e) {
    if (e.keyCode === 13 && this.state.body !== "") {
      ApiUtil.updateComment(this.props.comment.id, this.state.body);
      this.setState({toggle: !this.state.toggle});
    }
  },
  handleToggle: function () {
    this.setState({toggle: !this.state.toggle, body: this.props.comment.body});
  },
  commentDelete: function () {
    var answer = confirm("Are you sure you want to delete this comment");
    if(answer) {
      ApiUtil.deleteComment(this.props.comment.id);
    }
  },
  commentContent: function () {

    if(this.props.comment.author_id === CURRENT_USER_ID) {
      var edit = <button className="comment-edit" onClick={this.handleToggle}>Edit</button>;
    } else {
      edit = ""
    }
    if(this.state.toggle){
      return (
        <div className="comment-edit-form">
          <input type="text" onKeyUp={this.handleKeyUp} onChange={this.textChange} value={this.state.body}></input>
          <button className="comment-delete" onClick={this.commentDelete}>Delete</button>
        </div>
      );
    } else {
      return (
        <span className="comment-body"> {this.props.comment.body} {edit}</span>
      );
    }
  },
  render: function () {
    var author = "";
    var link = "";
    if(this.props.comment.author){
      author = this.props.comment.author.username;
      link = this.props.comment.author.link;
    }
    return (
      <li className="list-group-item">
        <img className="thumbnail" src={link}/>
        <span className="comment-author"> {author}: </span>
        <br/>
        {this.commentContent()}
      </li>
    );
  }
});
