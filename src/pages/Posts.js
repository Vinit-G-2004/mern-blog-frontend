import React, { useEffect, useState } from 'react';
import API from '../api/axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get('/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      {posts.map(post => (
        <div key={post._id}>{post.title}</div>
      ))}
    </div>
  );
};

export default Posts;
