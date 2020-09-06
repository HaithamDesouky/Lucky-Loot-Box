import React from 'react';
import { Link } from 'react-router-dom';
import defaultPhoto from '../Item/default.png';

const PostItem = ({ _id, content, creationDate, creator, photo }) => {
  return (
    <Link to={`/post/${_id}`} className="individual-item news-indiviual">
      {(photo && <img src={photo} alt={content} />) || (
        <img src={defaultPhoto} alt={content} />
      )}

      <div>
        <br />
        <strong>{content}</strong>
        <span>User: {creator.name}</span>
        <small>{new Date(creationDate).toGMTString()}</small>
      </div>
    </Link>
  );
};

export default PostItem;
