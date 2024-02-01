import React from 'react';
import { Link } from 'react-router-dom';
import './Blog_header.scss'


const Blog_header = () => {
  return (
    <Link className="blog-link" to="/">
    <div className="blog-header">
      <p className='bread-crumb'>Home {">"} <span className='bread-crumb-span'>Blog</span></p>
      <div className='blog-subtitle'>Blog </div>
    </div>      
    </Link>    
  )
}

export default Blog_header