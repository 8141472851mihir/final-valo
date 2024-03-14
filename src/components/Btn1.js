import React from 'react';

const Btn1 = (props) => {
  return (
    <a href={props.href} target="_blank" className='rounded-0 btn button-49 font_secondary ml-3 mt-auto'>{props.name}</a>
  )
}
export default Btn1;