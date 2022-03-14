import PostCard from "../../Components/PostCard";
import Posts from "../../Components/Posts";


function Blog({ posts }) {

    return (
        <div>
            <Posts>
                {
                    posts.slice(0, 20).map(post => (
                        <PostCard key={post.id} post={post} />
                    ))
                }
            </Posts>
        </div>
    );
}


export async function getStaticProps() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()


    return {
        props: {
            posts,
        },
    }
}

export default Blog;