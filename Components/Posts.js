import React from 'react';
const Posts = ({ children }) => {
    return (
        <div className='container'>
            <h1>Popular Blogs</h1>
            <div>{children}</div>
        </div>
    );
};

export default Posts;