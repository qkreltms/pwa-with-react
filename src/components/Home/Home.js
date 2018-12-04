import React from 'react'
import Post from '../Post/Post'
import posts from '../../blog-posts.json'

const Home = () => {
  return (
    posts.posts.map(post => <Post {...post} key={post.slug} />)
  )
}

export default Home
