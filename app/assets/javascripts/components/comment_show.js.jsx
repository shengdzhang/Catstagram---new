

var CommentShow = React.createClass({
  getInitialState: function () {
    return {comment: {}, comments: []};
  },
  componentDidMount: function () {
    ApiUtil.fetchComment(this.props.commentId);
    CommentsStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function () {
    CommentsStore.removeChangeListener(this.onChange);
  },
  onChange: function () {
    var comment = CommentsStore.fetchComment(this.props.commentId);
    var comments = comment.comments || [];
    this.setState({comment: comment, comments: comments});
  },
  render: function () {
    return (
      <div>
        <CommentItem comment={this.state.comment}/>
        <ul className="nested-comments list-group group">
          {
              this.state.comments.map (function (comment, idx) {
                return <CommentItem key={comment.id} comment={comment}/>
              })
          }
          <CommentForm type="Comment" typeId={this.props.commentId}/>
          </ul>
      </div>

    );
  }
})
