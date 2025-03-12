import React, { useState } from "react";
import blogs from "./BlogData";
import { Link } from "react-router-dom";
import "./Blog.css";

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Sort blogs: Newest first
  const sortedBlogs = [...blogs].reverse();

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedBlogs.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(sortedBlogs.length / postsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to scroll to the blog section
  const scrollToBlog = () => {
    const blogSection = document.getElementById("blog-section");
    
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Blog section not found!");
    }
  };

  return (
    <div id="blog-section" className="blog-section ">
      <h2>Latest Blogs</h2>
      {/* Blog Posts */}
      <div className="blog-grid">
        {currentPosts.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-description">{blog.description}</p>
            <Link to={`/blog/${blog.slug}`} className="read-more">
              Read More
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1} className="nav-button">
          ◀ Previous
        </button>
        <span className="page-number">Page {currentPage} of {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages} className="nav-button">
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default BlogSection; 