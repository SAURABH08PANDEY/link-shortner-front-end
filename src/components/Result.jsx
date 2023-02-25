import React,{useState} from 'react';
import './result.css';
import copy from './icon/copy.png';

function Result(props) {

    



  return (
      <div className='container'>
          <div className='result'>
              <div className='linkText'>{props.Result}</div>
              <div className='linkCopyButt' onClick={() => {navigator.clipboard.writeText(props.Result)}}><img src={copy} alt="alt" width={40} height={40} /></div>
          </div>
    </div>
  )
}

export default Result;