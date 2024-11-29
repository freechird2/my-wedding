import React from 'react'

import styles from './Section.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cx(['container', className])}>{children}</div>
}

export default Section
