import { useEffect, useState } from 'react';
import API from '../services/api';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get('/posts').then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p><i>By {post.author?.username}</i></p>
        </div>
      ))}
    </div>
  );
}
