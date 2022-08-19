import React from 'react'
import PostHeader from './PostHeader'
import PropTypes from 'prop-types'
import styles, { Container } from './styles'

function Post(props) {
  return (
    <Container removed={props.post.removed}>
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
    </Container>
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
