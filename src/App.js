import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Posts from "./Containers/Posts/Posts";
import NewPost from "./Containers/NewPost/NewPost";
import About from "./Containers/About/About";
import Contacts from "./Containers/Contacts/Contacts";
import FullPost from "./Containers/FullPost/FullPost";
import EditPost from "./Containers/EditPost/EditPost";
import onLoadingHandler from "./Components/hoc/onLoadingHandler/onLoadingHandler";
import axiosAPI from "./axiosAPI";

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Switch>
            <Route path='/' exact component={Posts}/>
            <Route path='/posts/add' component={NewPost}/>
            <Route path='/posts/:id' exact component={FullPost}/>
            <Route path='/posts/:id/edit' component={EditPost}/>
            <Route path='/about' component={About}/>
            <Route path='/contacts' component={Contacts}/>
            <Route render={() => <h1>NOT FOUND</h1>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default onLoadingHandler(App, axiosAPI);