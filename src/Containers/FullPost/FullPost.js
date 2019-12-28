import React, {Component} from 'react';
import axiosAPI from "../../axiosAPI";

import './FullPost.css';

class FullPost extends Component {
  state = {
    post: null
  };

  async componentDidMount(){
    const id = this.props.match.params.id;

    const response = await axiosAPI.get('/posts/' + id + '.json');

    if(response.data){
      this.setState({post: response.data})
    }
  }

  deletePost = async () => {
    const id = this.props.match.params.id;

    await axiosAPI.delete('/posts/' + id + '.json');

    this.props.history.replace('/');
  };

  editPost = async () => {
    const id = this.props.match.params.id;

    this.props.history.push('/posts/' + id + '/edit');
  };

  render() {
    return this.state.post &&(
      <div className='FullPost'>
        <h2>{this.state.post.title}</h2>
        <p>{this.state.post.description}</p>
        <button className='editButton' onClick={this.editPost}>Edit Post</button>
        <button className='deleteButton' onClick={this.deletePost}>Delete Post</button>
      </div>
    );
  }
}

export default FullPost;