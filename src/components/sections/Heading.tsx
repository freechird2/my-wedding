import React from 'react'

import styles from './Heading.module.scss'
import classNames from 'classnames/bind'
import Section from '@shared/Section'
import { parseISO, format, getDay } from 'date-fns'

const cx = classNames.bind(styles)

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const Heading = ({ date }: { date: string }) => {
  const weddingDate = parseISO(date)

  return (
    <Section className={cx('container')}>
      <div className={cx('text-date')}>{format(weddingDate, 'yy.MM.dd')}</div>
      <div className={cx('text-day')}>{days[getDay(weddingDate)]}</div>
    </Section>
  )
}

export default Heading
