import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const UserView = () => {
  const [getUser, setUser] = useState("Click Button To Get Data");
  const userData = useSelector((state) => state.user.user)
  return (
    <div className='flex flex-col justify-center items-center py-10'>
        <h3 className='text-4xl py-10'> {getUser} </h3>
        <button className='bg-blue-400 py-2 px-4 text-white' onClick={() => {setUser(userData)}}> Get Users </button>
        
    </div>
  )
}

export default UserView