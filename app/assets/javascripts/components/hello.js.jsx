import React from 'react';
import Counter from './counter.js.jsx';

function Hello({ data }) {
  const commentNodes = data.map((comment) => (
    <div key={comment.author}>
      {comment.author} <br /> {comment.text}
    </div>
  ));
  return (<div>{commentNodes}<Counter /></div>);
}

Hello.propTypes = {
  data: React.PropTypes.array,
};

export default Hello;
