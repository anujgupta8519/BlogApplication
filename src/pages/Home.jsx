import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'


function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    if (posts.length===0) {
return(        <div className="py-16 bg-white">
<div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
            <img
                src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
            />
        </div>
        <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Building a Dynamic Blog Website: A React and Appwrite Adventure by Anuj Gupta
            </h2>
            <p className="mt-6 text-gray-600">
                In the ever-evolving landscape of web development, creating a dynamic 
                and efficient blog website requires the right combination of front-end
                 and back-end technologies. Anuj Gupta, a seasoned developer, recently embarked
                  on a journey to build a powerful blog platform using React for the front end and
                   Appwrite as the Backend as a Service (BaaS). Let's delve into the details of his development
                    process and the features that make his blog website stand out.
            </p>
            <p className="mt-4 text-gray-600">
            "Embark on a delightful reading journey by immersing yourself in our captivating blog. 
            To savor the full experience, kindly indulge us by logging into our website."
            </p>
        </div>
    </div>
</div>
</div>)
    }else{
        return(
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
}

export default Home