import React from 'react';

function Hello({ data }) {
  const commentNodes = data.map((comment) => (
    <div key={comment.author}>
      {comment.author} <br /> {comment.text}
    </div>
  ));
  return (<div>{commentNodes}</div>);
}

Hello.propTypes = {
  data: React.PropTypes.array,
};

export default Hello;
