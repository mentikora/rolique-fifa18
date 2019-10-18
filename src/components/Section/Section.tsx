import React from 'react'
import { TextHeading, Texture } from '../index'
import './style.css'

type IProps = {
  children?: any,
  sectionName: string,
  pre?: string,
  title?: string,
  color: string,
}

export const Section: React.FunctionComponent<IProps> = ({
  children,
  sectionName,
  pre,
  title,
  color
}) => {
  return (
    <section
      style={{backgroundColor: color}}
      className={`section section-${sectionName}`}
    >
      <div className="container">
        <TextHeading pre={pre} title={title} />
        {children}
        <Texture color={color} className={`${sectionName}`}/>
      </div>
    </section>
  )
}