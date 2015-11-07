
var CommentForm = React.createClass ({
  getInitialState: function () {
    return {text: ""};
  },
  textChange: function (e) {
    this.setState({text: e.target.value});
  },
  handleKeyUp: function (e) {
    if (e.keyCode === 13 && this.state.text !== "") {
      ApiUtil.createComment(this.props.type, this.props.typeId, this.state.text);
      this.setState({text: ""});
    }
  },
  render: function () {
    var place;
    var classes = this.props.type+"-input";
    if (this.props.type === "Comment") {
      place = "Reply - Press enter to submit";
    } else {
      place = "Add Comment - Press enter to submit";
    }
    return (
        <div className="comment-form">
          <input className= {classes} type="text" placeholder={place} onKeyUp={this.handleKeyUp} onChange={this.textChange} value={this.state.text}></input>
        </div>
    )
  }
});
