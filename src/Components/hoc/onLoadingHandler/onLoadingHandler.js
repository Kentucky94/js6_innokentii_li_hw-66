import React, {Component, Fragment} from 'react';

import Backdrop from "../../UI/Backdrop/Backdrop";

const onLoadingHandler = (WrappedComponent, axios) => {
  return class onLoading extends Component{
    constructor(props){
      super(props);

      this.state = {
        interceptorId: null,
        isLoading: false,
      };

      this.state.interceptorId = axios.interceptors.request.use(req => {
        console.log('requested');
        this.setState({isLoading: true});
        return req;
      });

      this.state.interceptorId = axios.interceptors.response.use(res => {
        console.log('responded');
        this.setState({isLoading: false});
        return res;
      });
    }

    componentWillUnmount() {
      axios.interceptors.response.eject(this.state.interceptorId)
    }

    render(){
      return(
        <Fragment>
          <Backdrop show={!!this.state.isLoading} />
          <WrappedComponent/>
        </Fragment>
      )
    }
  }
};

export default onLoadingHandler;