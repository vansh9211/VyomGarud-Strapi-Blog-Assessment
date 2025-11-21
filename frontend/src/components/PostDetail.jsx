 import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const STRAPI_URL = 'http://localhost:1337/api/posts?populate=media'; 

function PostDetail() {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
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
          setPost(data.data); // Strapi v5 returns data directly
          setLoading(false);
        } catch (e) {
          console.error("Error fetching posts:", e);
          setError("Failed to load posts. Check server permissions and API path.");
          setLoading(false);
        }
      };
  
      fetchPosts();
    }, []);
  
  if (loading) return <h1>Loading Post...</h1>;
  if (error) return <h1 style={{ color: 'red' }}>Error: {error}</h1>;
  if (!post) return <h1>Post not found.</h1>; // Should only happen if API returns 200 with null data

  const myPost = post.filter(p => p.id.toString() === id)[0];
  if (!myPost) return <h1>Post with ID {id} not found.</h1>;
  
  // Use optional chaining for safer image URL construction (using confirmed 'media' field)
  const imageUrl = myPost.media?.url
    ? `http://localhost:1337${myPost.media.url}`
    : null;

  return (
    <>
      <div className="post-detail-container">
        <h1>{myPost.title}</h1>
        
        {imageUrl && (
          <img
            src={imageUrl}
            alt={myPost.title}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        )}

        <div className="post-content">
          <p>{myPost.content[0].children[0].text}</p> 
        </div>

        <button 
          onClick={() => window.history.back()}
        >
        Back to Blog List
        </button> 

      </div>
      
    </>
  );
}

export default PostDetail;