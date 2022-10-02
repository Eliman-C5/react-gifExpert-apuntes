import React from 'react'
import PropTypes from "prop-types"

export const GifItem = ({ title, url, id }) => {
  return (
    <div className='card'>
      <img src={url} alt={ title } />
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

// Tarea
/*
1. Añadir PropTypes
   a. title obligatorio
   b. url obligatorio

2. Evaluar el snapshot
*/