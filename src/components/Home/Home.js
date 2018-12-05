import React from 'react'
import Post from '../Post/Post'

const Home = ({ posts }) => {
  return (
    posts.length
      ? posts.map(post => <Post {...post} key={post.slug} />)
      : <p> Please Wait...</p>
  )
}

export default Home
