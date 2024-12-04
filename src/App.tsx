import Calendar from '@components/sections/Calendar'
import Heading from '@components/sections/Heading'
import ImageGallery from '@components/sections/ImageGallery'
import Intro from '@components/sections/Intro'
import Invitation from '@components/sections/Invitation'
import Map from '@components/sections/Map'
import Video from '@components/sections/Video'
import { Wedding } from '@models/wedding'
import FullScreenMessage from '@shared/FullScreenMessage'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import Contact from '@components/sections/Contact'
import Share from '@components/sections/Share'
import AttendCountModal from '@components/AttendCountModal'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null) // 1. wedding 데이터 호출
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setLoading(true)

    fetch('http://192.168.100.204:8888/wedding')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch wedding data')
        }

        return res.json()
      })
      .then((data) => {
        console.log(data)
        setWedding(data)
      })
      .catch((err) => {
        console.error(err)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) return <FullScreenMessage type="loading" />
  if (error) return <FullScreenMessage type="error" />
  if (!wedding) return null

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding

  return (
    <div className={cx('container')}>
      <button
        style={{ position: 'fixed', top: 0 }}
        onClick={() => setCount(count + 1)}
      >
        + {count}
      </button>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <Invitation message={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Map location={location} />
      <Contact groom={groom} bride={bride} />
      <Share groomName={groom.name} brideName={bride.name} date={date} />
      <AttendCountModal wedding={wedding} />
      {/* <Modal
        open={true}
        title="현재 참석자"
        body={
          <div>
            <input />
          </div>
        }
        onLeftButtonClick={() => {
          console.log('left')
        }}
        onRightButtonClick={() => {
          console.log('right')
        }}
      /> */}
    </div>
  )
}

export default App
