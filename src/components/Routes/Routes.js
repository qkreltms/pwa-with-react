import React from 'react'
import { Route } from 'react-router-dom'
import About from '../About/About'
import Home from '../Home/Home'
import PostDetail from '../PostDetail/PostDetail'
import posts from '../../blog-posts.json'

const Routes = () => {
  return (
    <div>
      <Route exact path='/' component={() => <Home posts={posts.posts} />} />
      <Route exact path='/about' component={About} />
      <Route path='/post/:slug' component={props => {
        const post = posts.posts.filter(post => props.match.params.slug === post.slug)
        return <PostDetail post={post[0]} />
      }} />
    </div>
  )
}

export default Routes
