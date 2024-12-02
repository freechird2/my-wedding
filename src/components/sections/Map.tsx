import { Location } from '@models/wedding'
import Section from '@shared/Section'
import classNames from 'classnames/bind'
import { useEffect, useRef } from 'react'
import styles from './Map.module.scss'

const cx = classNames.bind(styles)

const Map = ({ location }: { location: Location }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false&libraries=services`
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (!containerRef.current) return

        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng,
        )

        const options = {
          center: position,
          level: 2,
        }

        const marker = new window.kakao.maps.Marker({ position })

        const map = new window.kakao.maps.Map(containerRef.current, options)
        marker.setMap(map)
      })
    }
  }, [location])

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-title')}>오시는길</span>
          <span className={cx('txt-sub-title')}>{location.name}</span>
          <span className={cx('txt-sub-title')}>{location.address}</span>
        </div>
      }
    >
      <div className={cx('wrap-map')}>
        <div className={cx('map')} ref={containerRef}></div>
        <a
          className={cx('btn-find-way')}
          href={location.link}
          target="_blank"
          rel="noreferrer"
        >
          길찾기
        </a>
      </div>

      <div>
        <WayToCome label="버스" list={location.waytocome.bus} />
        <WayToCome label="지하철" list={location.waytocome.metro} />
      </div>
    </Section>
  )
}

const WayToCome = ({
  label,
  list,
}: {
  label: React.ReactNode
  list: string[]
}) => {
  return (
    <div className={cx('wrap-waytocome')}>
      <div className={cx('txt-label')}>{label}</div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Map
