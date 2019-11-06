import React from 'react'
import { Texture } from '../index'
import './style.css'

type IProps = {
  children?: any,
  sectionName: string,
  bgColor: string,
  fullsize?: boolean,
}

export const Section: React.FunctionComponent<IProps> = ({
  children,
  sectionName,
  bgColor,
  fullsize,
}) => {
  return (
    <section
      style={{backgroundColor: bgColor}}
      className={`section section-${sectionName}`}
    >
      <div className={fullsize ? '' : "container"}>
        {children}
        <Texture color={bgColor} className={`${sectionName}`}/>
      </div>
    </section>
  )
}