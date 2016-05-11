import React from 'react'

class Hello extends React.Component {
    render() {
        const commentNodes = this.props.data.map(function (comment) {
            return (
                <div key={comment.author}>
                    {comment.author} <br /> {comment.text}
                </div>
            );
        });
        return (<div>{commentNodes}</div>);
    }
}

Hello.propTypes = {
    data: React.PropTypes.array
};

export default Hello