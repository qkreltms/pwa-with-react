import React, { Component } from 'react'
import styles from './App.css'
import 'normalize.css' // 브라우저간 다르게 보이는 스타일 일관성 유지하게해줌

class App extends Component {
  render () {
    return (
      <h1 className={styles.heading}>Hello World!</h1>
    )
  }
}

export default App
