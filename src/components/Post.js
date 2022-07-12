import React from "react";
import posts from '../data/posts.json';
import {useParams} from "react-router-dom";

function Post() {
    const blogId = useParams();
    let post = {};
    posts.map((entry) => {
        if (entry.id === blogId.blogId) {
            post = entry;
        }
    });
    return (
        <>
            <h1>{post.title}</h1>
            <h2>{post.date}</h2>
            <p>{post.content}</p>
        </>
    )
}

export default Post;