import './NewPost.css';

import React, {Component} from 'react';
import axiosAPI from "../../axiosAPI";

const moment = require('moment');

class NewPost extends Component {

  state ={
    title: '',
    description: '',
    date: null,
  };

  changeDataHandler = event => {
    const type = event.target.name;

    this.setState({
      [type]: event.target.value
    });
  };

  sendDataHandler = async (event) => {
    event.preventDefault();

    const newPostData = {
      title: this.state.title,
      description: this.state.description,
      date: moment().format('LLL'),
    };

    await axiosAPI.post('/posts.json', newPostData);

    this.props.history.push('/');
  };

  render() {
    return (
      <div className='NewPost'>
        <h2>Add New Post</h2>

        <form onSubmit={this.sendDataHandler}>
          <h4>Title</h4>
          <input
            onChange={this.changeDataHandler}
            type="text"
            name='title'
            value={this.state.title}
            className='FormTitle'
          />

          <h4>Description</h4>
          <textarea
            onChange={this.changeDataHandler}
            name='description'
            value={this.state.description}
            className='FormDescription'
          />

          <button className='FormButton'>Save</button>
        </form>
      </div>
    );
  }
}

export default NewPost;