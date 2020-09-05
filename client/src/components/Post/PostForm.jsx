import React from 'react';
import './PostForm.scss';

const PostForm = props => {
  const handleFormSubmission = event => {
    event.preventDefault();
    props.onFormSubmission();
  };

  const handleContentInputChange = event => {
    const content = event.target.value;
    props.onContentChange(content);
  };

  const handlePhotoInputChange = event => {
    const file = event.target.files[0];
    props.onPhotoChange(file);
  };

  return (
    <div className="post-form-container">
      <form onSubmit={handleFormSubmission} redirect="/">
        <h1>Share what you've won!</h1>
        <label htmlFor="content-input">Post Content</label>
        <textarea
          id="content-input"
          placeholder="Write your post here..."
          name="content"
          value={props.content}
          onChange={handleContentInputChange}
        />
        <label htmlFor="input-photo">Photo</label>
        <input type="file" name="photo" onChange={handlePhotoInputChange} />
        <button>{props.isEdit ? 'Edit Post' : 'Create Post'}</button>
      </form>
    </div>
  );
};

export default PostForm;
