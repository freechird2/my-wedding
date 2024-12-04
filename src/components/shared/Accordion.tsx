import classNames from 'classnames/bind'
import { useState } from 'react'
import styles from './Accordion.module.scss'

const cx = classNames.bind(styles)

const Accordion = ({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={cx('wrap-accordion', isOpen ? 'open' : '')}>
      <div className={cx('wrap-header')} onClick={handleToggle}>
        <span>{label}</span>
        <IconArrowDown className={cx('icon-arrow-down')} />
      </div>
      <div className={cx('wrap-content')}>{children}</div>
    </div>
  )
}

const IconArrowDown = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z" />
      <path d="M0-.75h48v48h-48z" fill="none" />
    </svg>
  )
}

export default Accordion
