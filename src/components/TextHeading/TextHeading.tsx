import React from 'react'
import './style.css'

interface IProps {
  pre?: string,
  title?: string,
}

export const TextHeading: React.FunctionComponent<IProps> = ({
  pre,
  title
}) => {
  return (
    <div>
      <span className="pre-h1">
        {pre}
      </span>
      <h1>
        {title}
       </h1>
    </div>
  )
};
