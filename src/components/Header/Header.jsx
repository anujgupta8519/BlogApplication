import React from 'react'
import {Container,Logo,LogoutButton} from '../index'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const authStatus = useSelector((state)=>state.auth.status)
  const navigate = useNavigate();
  const navItems = [
    {
      name:'Home',
      slug:'/',
      active:true
    },
    {
      name:"Login",
      slug:"/login",
      active:!authStatus
    },
    {
      name:"Signup",
      slug:"/signup",
      active:!authStatus

    },
    {
      name:"My All Posts",
      slug:"/all-posts",
      active:authStatus
    },
    {
      name:"Add Post",
      slug:"/add-post",
      active:authStatus
    }
  ]
  return (
    <header className='py-3 shadow bg-gray-800  border-b-2  '>
      <Container>
        <nav className='flex'>
          <div className="mr-4 ">
            <Link to='/'>
              <Logo  className='text-white hover:text-gray-400' width='70px'/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item)=>
            item.active ?(
              <li key={item.name}>
                <button className='inline-block px-2 py-2 duration-200 text-white hover:text-gray-400'
                 onClick={()=> navigate(item.slug)}>{item.name}</button>
              </li>
            ):null
            )}
            {authStatus && (
              <li>
                <LogoutButton/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header