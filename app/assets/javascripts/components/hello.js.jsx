import React from 'react';
import Counter from './counter.js.jsx';
import Cat from '../classes/Cat.js.es6';

function Hello({ data }) {
  const cat = new Cat('mike');
  const commentNodes = data.map((comment) => (
    <div key={comment.author}>
      {comment.author} <br /> {comment.text}
    </div>
  ));
  return (<div>{commentNodes}<Counter animalName={cat.sayName()} /></div>);
}

Hello.propTypes = {
  data: React.PropTypes.array,
};

export default Hello;
