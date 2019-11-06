import React from 'react'
import './styles.css'

import a from './images/1.jpg'
import b from './images/2.jpg'
import c from './images/3.jpg'
import d from './images/4.jpg'
import e from './images/5.jpg'
import f from './images/6.jpg'
import g from './images/7.jpg'
import h from './images/8.jpg'
import i from './images/9.jpg'
import j from './images/10.jpg'
import k from './images/11.jpg'
import l from './images/12.jpg'
import m from './images/13.jpg'
const arr = [a,b,c,d,e,f,g,h,i,j,k,l,m];

export const Imaginarium = () => {
  return (
    <div className="imaginarium">
      {
        arr.map(el => {
          return (
            <div className="imaginarium-row">
              <div className="imaginarium-container">
                <img src={el} alt="..." />
              </div>
            </div>
            )
          }
        )
      }
    </div>
  );
}