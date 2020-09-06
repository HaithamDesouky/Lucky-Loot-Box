import React, { Component } from 'react';
import { listPosts } from '../../services/post';
import PostItem from '../../components/Post';
import './NewsFeed.scss';
import { Link } from 'react-router-dom';

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      posts: []
    };
  }

  componentDidMount() {
    listPosts()
      .then(data => {
        const posts = data.posts;
        this.setState({
          posts,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="news-container">
        <div className="newsBox">
          <div className="post-group">
            <h1>Community Loot!</h1>

            <h4>Here are all the items our members have won!</h4>
            <div className="post-list">
              {this.state.posts.map(post => (
                <PostItem {...post} key={post._id} />
              ))}
            </div>

            <Link className="home-links" id="share" to="/post/create">
              Show off your prizes!
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsFeed;