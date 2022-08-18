import React from 'react'
import PostHeader from './PostHeader'
import PropTypes from 'prop-types'
import styles from './Post.scss'

import { Subtitle, Rate } from './styles'
function Post(props) {
  return (
    <article className={props.post.removed ? styles.postDeleted : styles.post}>
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read
        }}
      />
      <Subtitle>{props.post.subtitle}</Subtitle>
      <Rate>Likes: {props.post.likes}</Rate>
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
