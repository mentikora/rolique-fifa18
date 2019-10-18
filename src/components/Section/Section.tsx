import React from 'react'
import { TextHeading } from '../index'

type IProps = {
  children?: any,
  sectionName?: string,
  pre?: string,
  title?: string,
}

export const Section: React.FunctionComponent<IProps> = ({
  children,
  sectionName,
  pre,
  title
}) => {
  return (
    <section className={`container container-${sectionName}`}>
      <TextHeading pre={pre} title={title} />
      {children}
    </section>
  )
};