const BlogList = ({post, title}) => {
    // const post =  props.post;
    // const title = props.title;
    return ( 
        <div className="blog-list">
            <h2> {title} </h2>            
            {post.map( (posts) => (
                <div className="post-review" key = {posts.id}>
                    <h2> {posts.title} </h2>
                    <p>Written By {posts.author} </p>
                </div>
            )
            )}
        </div>
    );
}
 
export default BlogList;