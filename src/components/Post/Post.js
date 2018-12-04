import React from 'react'
import styles from './Post.css'
import { Link } from 'react-router-dom'

const Post = (props) => {
  return (
    <div>
      <h2 className={styles.title}>
        <Link className={styles.link} to={`/post/${props.slug}`}>{props.title}</Link></h2>
      <p className={styles.content}>{props.excerpt}</p>
    </div>
  )
}

export default Post
