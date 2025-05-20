import { useState } from 'react';
import API from '../services/api';

export default function CreatePost() {
  const [form, setForm] = useState({ title: '', content: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/posts', form);
    window.location.href = '/';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <textarea placeholder="Content" onChange={(e) => setForm({ ...form, content: e.target.value })}></textarea>
      <button type="submit">Post</button>
    </form>
  );
}
