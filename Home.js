import { useState } from "react";

const Home = () => {

    const [post, setpost] = useState([
        {title: 'My check website', body: 'hello world', author:'person1', id: 1},
        {title: 'Learning React ', body: 'He is an check site', author:'person2', id: 2},
        {title: 'React js', body: 'Learning methodology', author:'person3', id: 3},
    ]);

    return (
        <div className="home">
            {post.map((posts) => (
                <div className="post-review" key = {posts.id}>
                    <h2> {posts.title} </h2>
                    <p>Written By {posts.author} </p>

                </div>
            )
            )}
        </div>
    );
}
 
export default Home;