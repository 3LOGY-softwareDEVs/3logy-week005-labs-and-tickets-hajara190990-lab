import { useState, useEffect } from 'react';
import "../App.css";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        setPosts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="posts">
      <h2>📄 Posts</h2>
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      {loading && <p className="loading">Loading posts...</p>}
      {error && <p className="error">Error: {error}</p>}
      <ul className="post-list">
        {filteredPosts.map(post => (
          <li key={post.id} className="post-item">
            <strong>{post.title}</strong>
            <p>{post.body.substring(0, 50)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
