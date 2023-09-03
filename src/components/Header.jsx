import React from 'react'
import "../App.css"
import {
  UserButton
} from "@clerk/clerk-react";
const Header = () => {
  return (
    <>
    <div className="header-div">
      <div className='logo'>
        <a href='/'  className="heading">
        <h1>ChatGPT-AI</h1>
        </a>
      
      </div>
      <div className='user-div'>
        <UserButton />
      </div>
    </div>
    </>
    // 
  )
}

export default Header;