import React from 'react'

import classNames from 'classnames/bind'
import styles from './Section.module.scss'

const cx = classNames.bind(styles)

const Section = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode
  className?: string
  title?: React.ReactNode
}) => {
  return (
    <div className={cx(['container', className])}>
      {title && <h1 className={cx('txt-title')}>{title}</h1>}
      {children}
    </div>
  )
}

export default Section
