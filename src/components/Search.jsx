import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className='userChat'>
        <img src='https://images.pexels.com/photos/14844858/pexels-photo-14844858.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'/>
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search