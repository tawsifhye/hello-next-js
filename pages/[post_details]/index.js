function PostDetails({ post, filterComments }) {
    return (
        <div className="container">
            <h1>{post?.title}- {post.id}</h1>
            <h3>{post?.body}</h3>
            <h3>Comments</h3>
            {
                filterComments.map(comment => (
                    <div key={comment.id}>
                        <h4 >{comment.name}</h4>
                        <h6>{comment.email}</h6>
                        <p>{comment.body}</p>
                    </div>
                ))
            }
        </div>
    );
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await postsRes.json()
    // Get the paths we want to pre-render based on posts
    const paths = posts.slice(0, 20).map((post) => ({
        params: {
            post_details: post.id.toString()
        },
    }))



    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.

    return { paths, fallback: false }
}


export async function getStaticProps({ params }) {

    const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.post_details}`);
    const post = await postRes.json();

    const commentRes = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    const comments = await commentRes.json();

    const filterComments = comments.filter(comment => (comment.postId == params.post_details));

    return { props: { post, filterComments } }
}

export default PostDetails;