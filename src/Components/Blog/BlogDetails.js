import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Blog.css"




const BlogCard = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
   
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://mern-blog-yiff.onrender.com/api/posts/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post not found!</p>;

  return (
    <>
        <div className="Detail_Container">
          <div className="Detail_Container_Wrapper">
            <Link to='/blog' className="Detail_Link">Back</Link>
            <img src={post.avatar} alt={post.title} className="Detail_Image" />
            <p><small>Posted on: {new Date(post.createdAt).toLocaleString("en-US", {
                                    weekday: "short",
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                    timeZone: "Africa/Lagos",
                                })}</small></p>
            <h5>{post.title}</h5>
            <p dangerouslySetInnerHTML={{ __html: post.story }}></p>
            <Link to='/blog' className="Detail_Link">Back</Link>
          </div>
        </div> 
    </>
  )
}

export default BlogCard