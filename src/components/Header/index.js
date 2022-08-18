import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

import { Title } from './styles'
import { ThemeContext } from '../../context/ThemeContext'

function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext)

  return (
    <>
      <Title as="h1">{props.title}</Title>
      <Button onClick={onToggleTheme}>Mudar Tema</Button>
      <Title as="h2">{props.children}</Title>
    </>
  )
}

export default Header

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

Header.defaultProps = {
  title: "Zeca's Blog"
}
