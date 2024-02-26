'use client'
import { useState, useEffect } from 'react';
import axiosClient from '../../utils/axiosCliente'

function PostView({ id }: any) {
  const [post, setPost] = useState([])

  const handleHome = () => {
    window.location.href = '/';
  }

  const fetchPosts = async () => {
    try {
      const response = await axiosClient.get(`/posts?id=eq.${id}`)
      setPost(response.data)
    } catch (error) {
      console.error('Erro ao buscar posts:', error)
      window.location.href = '/';
      window.alert('Post não encontrado !')
      // Aqui você pode definir o estado de erro, mostrar uma mensagem de erro, etc.
    }
  }
  
  useEffect(() => {
  fetchPosts()
  ,[]})

  return (
    <div className='posts' key='posts'>
      {post.map((postItem: { id: number, title: string, description: string }, index: number) => (
        <div className='card' key={postItem.id}>
          <div className='title' key={index + "title"}>{postItem.title}</div>
          <div className='post' key={index + "post"}>
            <p>{postItem.description}</p>
            <button className='button_send' onClick={handleHome} type="submit">Voltar</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostView;