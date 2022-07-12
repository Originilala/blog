import React from "react";
import posts from '../data/posts.json';
import {
    Link,
} from "react-router-dom";

function Blog() {
    const numberBlogs = posts.length;
    return (
        <>
            <h1>Blog pagina</h1>
            <h2>Het aantal blogs: {numberBlogs}</h2>
            <ul id="all-blogs">
                {posts.map((entry) => {
                    const goalPost = "/blogposts/" + entry.id;
                    return <li key={entry.id}>
                        <Link to={goalPost}>{entry.title}</Link>
                    </li>
                })}
            </ul>
        </>
    )
}

export default Blog;