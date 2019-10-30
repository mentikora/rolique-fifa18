import React from 'react'
import { Texture } from '../index'
import './style.css'

type IProps = {
  children?: any,
  sectionName: string,
  bgColor: string,
}

export const Section: React.FunctionComponent<IProps> = ({
  children,
  sectionName,
  bgColor,
}) => {
  return (
    <section
      style={{backgroundColor: bgColor}}
      className={`section section-${sectionName}`}
    >
      <div className="container">
        {children}
        <Texture color={bgColor} className={`${sectionName}`}/>
      </div>
    </section>
  )
}