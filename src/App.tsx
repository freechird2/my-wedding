import Heading from '@components/sections/Heading'
import Video from '@components/sections/Video'
import { Wedding } from '@models/wedding'
import FullScreenMessage from '@shared/FullScreenMessage'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import ImageGallery from './components/sections/ImageGallery'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null) // 1. wedding 데이터 호출
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetch('http://localhost:8888/wedding')
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

  const { date, galleryImages } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <ImageGallery images={galleryImages} />
    </div>
  )
}

export default App
