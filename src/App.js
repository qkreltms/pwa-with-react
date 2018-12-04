import React, { Component } from 'react'
import 'normalize.css' // 브라우저간 다르게 보이는 스타일 일관성 유지하게해줌
import Header from './components/Header/Header'
import About from './components/About/About'
import Home from './components/Home/Home'
import styles from './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PostDetail from './components/PostDetail/PostDetail'
import posts from './blog-posts.json'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <div className={styles.container}>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route path='/post/:slug' component={props => {
              const post = posts.posts.filter(post => props.match.params.slug === post.slug)
              return <PostDetail post={post[0]} />
            }} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
