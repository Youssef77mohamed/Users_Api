import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




export default function UserPosts() {
    const [posts, setPosts] = useState([]);
    const { userId } = useParams();
 
    useEffect(() => {
      fetch(`https://dummyjson.com/users/${userId}/posts`)
        .then((res) => res.json())
        .then((data) => setPosts(data.posts));
  
    }, [userId]);
    console.log(posts);
    return (
      <div>
        <h2 className="text-center mt-4">Posts Page</h2>
        {posts.map((post) => (
          <div className="card mb-3 mx-5 my-5 ps-3 " key={post.id}>
            <h5 className="mb-3 mt-4">Title : {post.title}</h5>
            <p>Body : {post.body}</p>
            <p>UserId : {post.userId}</p>
            <p>Tags : {post.tags}</p>
          </div>
        ))}
      </div>
    );
  }