
import Head from 'next/head';
import PostCard from '../Components/PostCard';
import Posts from '../Components/Posts';
import styles from '../styles/Home.module.css'

function Home({ posts }) {
    return (
        <div>
            <Head>
                <title>Awesome Blogs</title>
            </Head>
            <div className={styles.hero}></div>
            <Posts>

                {
                    posts.slice(0, 10).map(post => (
                        <PostCard key={post.id} post={post}></PostCard>
                    ))
                }
            </Posts>
        </div>
    );

}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    }
}

export default Home;