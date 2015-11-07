/* global React */
/* global ReactRouter */
/* global MediaStore */

var MediaEdit = React.createClass ({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    return {media: MediaStore.fetchMedium(), title: "", desc: "", link: "", toggle: true};
  },
  componentDidMount: function () {
    MediaStore.addSingleChangeListener(this.onSuccess);
    MediaStore.addDeleteChangeListener(this.onDeletion);
    ApiUtil.fetchSingleMedia(parseInt(this.props.params.mediumId));
  },
  componentWillUnmount: function () {
    MediaStore.removeSingleChangeListener(this.onSuccess);
    MediaStore.removeDeleteChangeListener(this.onDeletion);
  },
  onDeletion: function () {
    var current = {user: 'current'};
    var url = "users/" + (CURRENT_USER_ID);
    this.history.pushState(null, url, current);
  },
  onSuccess: function () {
    var media = MediaStore.fetchMedium();
    var tog = !this.state.toggle;
    if (tog) {
      var url = "media/" + media.id;
      this.history.pushState(null, url)   ;
    } else {
      this.setState({media: media, title: media.title, desc: media.description, link: media.link, toggle: tog});
    }
  },
  handleTitle: function (e) {
    this.setState({title: e.target.value});
  },
  handleDesc: function (e) {
    this.setState({desc: e.target.value});
  },
  handleSubmit: function (e) {
    e.preventDefault();
    ApiUtil.editMedia(this.state.media.id, this.state.link, this.state.title, this.state.desc);
  },
  handleLink: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget({upload_preset: window.cloudinary_upload_preset, cloud_name: window.cloudinary_cloud_name}, this.handleResponse);
  },
  handleResponse: function (error, result) {
    if(error) {
      console.log(error);
    } else {
      var url = result[0].url;
      this.setState({link: url});
    }
  },
  handleDelete: function (e) {
    e.preventDefault();
    var answer = prompt("Are you sure you want to delete? (Y or yes to delete)");
    if (answer === "Y" || answer === "yes") {
      ApiUtil.deleteMedia(this.state.media.id);
    }
  },
  render: function () {
    if (this.state.media.author_id === CURRENT_USER_ID) {
      return (
        <form className="media-form group">
          <div className="column1">
            <input className="media-title" placeholder="Title" type="text" name="title" value={this.state.title} onChange={this.handleTitle}></input>
            <br/>
            <textarea className="media-desc" placeholder="  Description  " name="description" value={this.state.desc} onChange={this.handleDesc}></textarea>
            <input className="media-submit" type="submit" value="Update media" onClick={this.handleSubmit}/>
          </div>
          <div className="column2">
            <img className="media-img" src={this.state.link}/>
            <button className="media-upload-button" onClick={this.handleLink}> Upload </button>
            <button className="media-delete" onClick={this.handleDelete}> Delete </button>
          </div>
      </form>
      );
    } else {
      return (
        <div> </div>
      )
    }
  }
});
