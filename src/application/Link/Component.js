import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault()
    onClick()
  }

  if (active) {
    return <span>{children}</span>
  } else {
    return (
      <a href="#" onClick={handleClick}>
        {children}
      </a>
    )
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
