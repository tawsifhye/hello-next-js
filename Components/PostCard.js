import React from 'react';
import styles from '../styles/PostCard.module.css'
import { useRouter } from 'next/router';
const PostCard = ({ post }) => {
    const router = useRouter();
    function handleShowPost() {
        router.push('/' + post.id.toString());
    }

    return (
        <div className={styles.post_card}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button className={styles.button} onClick={handleShowPost}>Show Details</button>
        </div>
    );
};



export default PostCard;