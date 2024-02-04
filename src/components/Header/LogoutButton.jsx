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
      window.location.reload();
    })
  }

  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default LogoutButton