import React from 'react';
import styles from '../styles/PostCard.module.css'
const PostCard = ({ post }) => {
    return (
        <div className={styles.post_card}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostCard;