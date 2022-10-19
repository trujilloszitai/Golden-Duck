import React from 'react'

const Button = ({bgColor, color, size, text, borderRadius}) => {
  return (
    <button 
      type='button'
      className={`text-${size}`}
      style={{ backgroundColor: bgColor, color, borderRadius }}>
      {text}
    </button>
  )
}

export default Button