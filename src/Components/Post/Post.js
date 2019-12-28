import React, {Component} from 'react';

import './Post.css';

class Post extends Component {

  render() {
    return (
      <div className='Post'>
        <p className='postDate'>Created on: {this.props.date}</p>
        <p className='postTitle'>{this.props.title}</p>
        <button onClick={this.props.onClick} className='postMore'>Read More >></button>
      </div>
    );
  }
}

export default Post;