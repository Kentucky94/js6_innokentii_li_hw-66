import React, {Component} from 'react';

import './EditPost.css';
import axiosAPI from "../../axiosAPI";

const moment = require('moment');

class EditPost extends Component {
  state = {

  };

  async componentDidMount() {
    const id = this.props.match.params.id;

    const response = await axiosAPI.get('/posts/' + id + '.json');

    if(response.data){
      this.setState({...response.data})
    }
  }

  changeDataHandler = event => {
    const type = event.target.name;

    this.setState({
      [type]: event.target.value
    });
  };

  sendDataHandler = async (event) => {
    event.preventDefault();

    const id = this.props.match.params.id;

    const newPostData = {
      title: this.state.title,
      description: this.state.description,
      date: moment().format('LLL'),
    };

    await axiosAPI.patch('/posts/' + id + '.json', newPostData);

    this.props.history.replace('/');
  };

  render() {

    return(
      <div>
        <div className='NewPost'>
          <h2>Edit Post</h2>

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
      </div>
    );
  }
}

export default EditPost;