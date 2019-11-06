import React, { FunctionComponent } from 'react'
import * as mrmackey from './images/mrmackey.png'
import * as pcprincipal from './images/pcprincipal.png'
import * as randy from './images/randy.png'
import './style.css'

interface IProps {
  image: string;
  alt: string;
  width?: number;
}

export const CartoonCharacter: FunctionComponent<IProps> = ({
  image,
  alt,
  width
}) => {
  const checkRole = () => {
    switch(image) {
      case "mrmackey":
        return mrmackey
      case "pcprincipal":
        return pcprincipal
      case "randy":
        return randy
      default:
        break;
    }
  }
  return (
    <img
      style={{maxWidth: `${width}px`}}
      className="cartoon-character"
      src={checkRole()}
      alt={alt}
    />
  )
}