import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function AllPosts() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                const data  = posts.documents.filter((post)=>post.userId===userData.$id)
                setPosts(data)
                
            }
        })
    }, [])

    if (posts.length===0) {
        return(
            <div className="bg-gray-100  min-h-96 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Blogger Appliaction</h1>
        <p className="text-gray-600">No posts have been created yet. <span className=' duration-200 hover:text-orange-500 hover:underline cursor-pointer' onClick={()=>{navigate("/add-post")}}>Let's create the first one !</span></p>
      </div>
    </div>
        )
        
    }

    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts