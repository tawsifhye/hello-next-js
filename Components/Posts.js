import React from 'react';
const Posts = ({ children }) => {
    return (
        <div className='container'>
            <h1>Posts</h1>
            <div>{children}</div>
        </div>
    );
};

export default Posts;