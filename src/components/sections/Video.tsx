import Section from '@shared/Section'
import classNames from 'classnames/bind'
import styles from './Video.module.scss'

const cx = classNames.bind(styles)

const Video = () => {
  return (
    <Section className={cx('container')}>
      <video autoPlay muted loop poster="/assets/poster.jpg">
        <source src="/assets/main.webm" type="webm"></source>

        <source src="/assets/main.webm" type="video/webm"></source>
      </video>
    </Section>
  )
}

export default Video
