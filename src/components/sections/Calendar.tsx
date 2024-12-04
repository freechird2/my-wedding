import Section from '@components/shared/Section'
import classNames from 'classnames/bind'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'
import styles from './Calendar.module.scss'

import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

const cx = classNames.bind(styles)

const css = `
    .rdp-nav {
        display: none;
    }
    .rdp-day {
        cursor: default;
    }
    .rdp-weekday,
    .rdp-week {
        font-size: 20px;
    }

    .rdp-weekday {
        font-weight: bold;
    }

    .rdp-selected {
        .rdp-day_button {
            border-color: var(--red);
            background-color: var(--red);
            
        }
    }
    .rdp-day_button {
        cursor: default;
    }
`

const Calendar = ({ date }: { date: string }) => {
  const weddingDate = parseISO(date)

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy년 MM월 dd일')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          locale={ko}
          mode="single"
          month={weddingDate}
          selected={weddingDate}
          onSelect={() => {}}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  )
}

export default Calendar
