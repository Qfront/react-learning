import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <h2>{props.post.title}</h2>
                <p>{props.post.pcontent}</p>
            </div>
            <div className="post__btns">
                <button>Delete</button>
            </div>
        </div>
    );
};

export default Post;