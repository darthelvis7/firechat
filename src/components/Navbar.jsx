import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Fire Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/14844858/pexels-photo-14844858.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt=""/>
        <span>Jane</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar