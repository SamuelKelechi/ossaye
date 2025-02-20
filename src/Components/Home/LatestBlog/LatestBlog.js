import React, { useState, useEffect } from 'react';
import '../../Blog/Blog.css'
import {Link} from 'react-router-dom'
import ShareButton from '../../Blog/ShareButton'

const LatestBlog = () => {
    const [posts, setPosts] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
      
      
        useEffect(() => {
          const fetchPosts = async () => {
            try {
              const response = await fetch("https://mern-blog-yiff.onrender.com/api/posts/");
              if (!response.ok) {
                throw new Error("Failed to fetch Blog Post");
              }
              const data = await response.json();
              setPosts(data.slice(0, 3)); // Limit to the first 3 posts
            } catch (err) {
              setError(err.message);
            } finally {
              setLoading(false);
            }
          };
      
          fetchPosts();
        }, []);
      
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;
  return (
    <section className='posts'>
    <h3 className='Blog_Header'>RECENT BLOG POSTS</h3>
    <div className='posts_container'>
        {posts.length === 0 && <p>No blog posts available.</p>}
        {posts.map(({ _id, avatar, title, description, createdAt }) => (
        <article className='post_contain' key={_id}>
            <div className='post_contain_wrapper'>
                
                <img src={avatar} alt='PostImage' className='post_avatar'/>
                
                <div className='post_center_hold'>
                    <p><small>Posted on: {new Date(createdAt).toLocaleString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        timeZone: "Africa/Lagos",
                    })}</small></p>
                    <h5 style={{marginBottom:'15px'}}>{title}</h5>
                </div>
                    
                    <div className='down_holder'>
                        <Link to={`/blog/${_id}`}  style={{
                            color: "white",
                            backgroundColor: "#007bff", // Blue background
                            padding: "5px 10px",
                            borderRadius: "5px",
                            textDecoration: "none",
                            fontWeight: "bold",
                            display: "inline-block", // Ensures consistent dimensions
                            textAlign: "center",
                        }}>Read</Link>
                        <div className='down_right'>
                            <ShareButton 
                            postId={_id} />
                        </div>
                    </div>
                
            </div>
        </article>
        ))}
       
    </div>
    <Link to='/blog'  style={{
                            color: "white",
                            backgroundColor: "#505bff", // Blue background
                            padding: "5px 10px",
                            borderRadius: "5px",
                            textDecoration: "none",
                            fontWeight: "bold",
                          
                        }}>More Blog</Link>
</section>
  )
}

export default LatestBlog