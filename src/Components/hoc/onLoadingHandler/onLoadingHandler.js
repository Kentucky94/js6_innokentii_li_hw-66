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

      axios.interceptors.request.use(req => {
        this.setState({isLoading: true});
        return req;
      });

      axios.interceptors.response.use(res => {
        this.setState({isLoading: false});
        return res;
      });
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