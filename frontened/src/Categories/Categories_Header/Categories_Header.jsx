import React from 'react'
import "./Categories_Header.scss"
import { Link } from "react-router-dom";
const Categories_Header = () => {
  return (
    <Link className="blog-link" to="/">
    <div className="blog-header">
      <p className='bread-crumb'>Home {">"} <span className='bread-crumb-span'>Categories</span></p>
      <div className='Categories-subtitle'>Categories </div>
    </div>      
    </Link>   
  )
}

export default Categories_Header