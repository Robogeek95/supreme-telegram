
import { getSinglePost } from './api/posts'

const PostPage = (props) => {
    // Render post title and content in the page from props
    console.log("props")

    return (
        <div>
          <h1>{props.post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
        </div>
    )
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
PostPage.getInitialProps = async (params) => {
    console.log("params.query")
    const post = await getSinglePost(params.query.post)
    return { post: post }
}

export default PostPage