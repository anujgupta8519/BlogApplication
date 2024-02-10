import React from 'react';
import {logout} from '../../store/features/authSlice';
import authService from '../../appwrite/auth'
import {useDispatch} from 'react-redux'

function LogoutButton() {
  const dispatch = useDispatch();
  const logOutHandler = ()=>{
    authService.logout()
    .then(()=>{
      dispatch(logout())
    })
    .finally(()=>{
      window.location.replace("https://bloggerkrishna.netlify.app/");
    })
  }

  return (
    <button onClick={logOutHandler} className='inline-block px-2 py-2 duration-200 text-white hover:text-gray-400'>Logout</button>
  )
}

export default LogoutButton