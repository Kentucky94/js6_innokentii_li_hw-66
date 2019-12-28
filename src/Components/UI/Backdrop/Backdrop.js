import React, {Fragment} from 'react';
import './Backdrop.css';
import Spinner from "../Spinner/Spinner";

const Backdrop = ({onClick, show}) => {
  const output = (
    <Fragment>
      <div className='Backdrop' onClick={onClick}/>
      <Spinner/>
    </Fragment>
  );

  return (
    show ? output : null
  );
};

export default Backdrop;