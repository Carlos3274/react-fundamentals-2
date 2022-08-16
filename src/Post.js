import React from 'react'
import PostHeader from './PostHeader'
import PropTypes from 'prop-types'
import styles from './Post.scss'
function Post(props) {
  return (
    <article
      className={props.post.removed ? styles.postDeleted : styles.post.post}
    >
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read
        }}
      />
      <br />
      <small>{props.post.subtitle}</small>
      Likes: {props.post.likes}
    </article>
  )
}
export default Post

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired
  }).isRequired
}
