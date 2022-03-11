import React from 'react';
import Link from 'next/link';
import styles from '../styles/PostCard.module.css'
const PostCard = ({ post }) => {
    return (
        <div className={styles.post_card}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button className={styles.button}> <Link href={``}>Show Details</Link> </button>
        </div>
    );
};

export default PostCard;