import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { ThemeContext } from './ThemeContext'
import styles from './Header.scss'
<<<<<<< HEAD
function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext)
  return (
    <div className={styles.title}>
      <h1>{props.title}</h1>
=======

function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext)
  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
>>>>>>> 2e3a3600564042a1d87c321f85e999ccd15b5183
      <Button onClick={onToggleTheme}>Mudar Tema</Button>
      <hr />
    </div>
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
