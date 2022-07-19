import React from 'react';
import './index.scss'

function Card(props: any) {
  console.log(props)
  return (
    <div className='card rounded-md shadow p-5 bg-white '>
      {props.title && <h3 className='text-2xl mb-3'>{props.title}</h3>}
      {props.children}
    </div>
  );
}

export default Card;
