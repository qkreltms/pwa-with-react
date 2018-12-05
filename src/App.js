import React, { Component } from 'react'
import 'normalize.css' // 브라우저간 다르게 보이는 스타일 일관성 유지하게해줌
import styles from './App.css'
import Routes from './Components/Routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <div className={styles.container}>
            <Routes />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
