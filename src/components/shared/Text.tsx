import classNames from 'classnames/bind'
import styles from './Text.module.scss'

const cx = classNames.bind(styles)

const Text = ({ children }: { children: string }) => {
  return <div className={cx('container')}>{children}</div>
}

export default Text
