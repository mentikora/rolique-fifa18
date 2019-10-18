import React from 'react'
import './style.css'

export const TextHeading = ({ pre = 'pre', title = 'title' }) => {
  return (
    <>
      <span className="pre-h1">
        {pre}
      </span>
      <h1>
        {title}
       </h1>
    </>
  )
};
