'use client'
import { useState, useEffect } from 'react';
import axiosClient from '../../utils/axiosCliente'

function Posts() {
  const [posts, setPosts] = useState([])

  const postView = (id: any) => {
    window.location.href = `/view?id=${id}`
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axiosClient.get('/posts')
      setPosts(response.data)
    }

    fetchPosts()
  }, [])

  return (
    <div className='posts' key='posts'>
      {posts.map((post: any, index:number) => (
        <div className='card' key={post.id}>
          <div className='title' key={index+"title"}>{post.title}</div>
          <div className='post' key={index+"post"}>
            <p>{post.description.length > 100 ? post.description.substring(0, 60) + "..." : post.description}</p>
            <button onClick={()=>postView(post.id)} className='button_send' type="submit">Ver mais...</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Posts;