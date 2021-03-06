import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import defaultPhoto from './default.png';

const Comment = ({ _id, creator, content, createdAt }) => {
  return (
    <div className="individual-comment">
      {(creator.photo && <img src={creator.photo} alt={content} />) || (
        <img src={defaultPhoto} alt={content} />
      )}
      <div className="container-comment">
        <strong>{creator.name}</strong>
        <p>{content}</p>
        <small>{new Date(createdAt).toGMTString()}</small>
      </div>
    </div>
  );
};

export default Comment;
