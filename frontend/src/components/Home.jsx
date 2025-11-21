 import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const STRAPI_URL = 'http://localhost:1337/api/posts?populate=media'; 

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(STRAPI_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data.data); // Strapi v5 returns data directly
        setLoading(false);
      } catch (e) {
        console.error("Error fetching posts:", e);
        setError("Failed to load posts. Check server permissions and API path.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <h1 style={{ textAlign: 'center' }}>Loading Blog Posts...</h1>;
  if (error) return <h1 style={{ textAlign: 'center', color: 'red' }}>Error: {error}</h1>;

  // Strapi v5 → NO attributes object
  const validPosts = posts.filter(post => post && post.title);
  

  if (validPosts.length === 0) {
    return <h1 style={{ textAlign: 'center' }}>No published posts found.</h1>;
  }

  return (
    <div className="post-list-container">
      <h2>Latest Updates</h2>

      {validPosts.map(post => {
        const {_id} = post;
        const title = post.title;
        const media = post.media;

        const imageUrl = media?.url
          ? `http://localhost:1337${media.url}`
          : null;

        return (
          <div key={post.id} className="post-card">
            <h2>My id {post.id} & title : {title}</h2>
            <h2>
              <Link to={`/post/${post.id}`}>
                {title}
              </Link>
            </h2>

            {imageUrl && (
              <img
                src={imageUrl}
                alt={title}
                style={{
                  maxWidth: '150px',
                  height: 'auto',
                  display: 'block',
                  marginBottom: '10px'
                }}
              />
            )}

          </div>
        );
      })}
    </div>
  );
}

export default Home;