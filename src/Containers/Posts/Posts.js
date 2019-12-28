import React, {Component, Fragment} from 'react';
import Post from "../../Components/Post/Post";
import axiosAPI from "../../axiosAPI";

import './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const response = await axiosAPI.get('/posts.json');

    if(response.data){
      this.setState({posts: response.data})
    }
  }

  readMoreHandler = (id) => {
    this.props.history.push('/posts/' + id)
  };

  render() {
    const posts = Object.keys(this.state.posts).reverse().map(id =>
      <Post
        key = {id}
        title={this.state.posts[id].title}
        date={this.state.posts[id].date}
        onClick={() => {this.readMoreHandler(id)}}
      />
    );

    return (
      <Fragment>
        <div className='Posts'>
          {posts}
        </div>
      </Fragment>
    );
  }
}

export default Posts;