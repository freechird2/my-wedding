import classNames from 'classnames/bind'
import { useEffect } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './ImageViewer.module.scss'
import './swiper.css'

const cx = classNames.bind(styles)

const ImageViewer = ({
  images,
  open = false,
  selectedIndex = -1,
  onClose,
}: {
  images: string[]
  open: boolean
  selectedIndex: number
  onClose: () => void
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null
  return (
    <div className={cx('dimmed')}>
      <CloseButton className={cx('icon-close')} onClose={onClose} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIndex}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="wedding" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const CloseButton = ({
  onClose,
  className,
}: {
  onClose: () => void
  className: string
}) => {
  return (
    <svg
      className={className}
      version="1.1"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClose}
    >
      <title />
      <desc />
      <defs />
      <g
        fill="none"
        fillRule="evenodd"
        id="Page-1"
        stroke="none"
        strokeWidth="1"
      >
        <g id="Core" transform="translate(-341.000000, -89.000000)">
          <g id="close" transform="translate(341.000000, 89.000000)">
            <path
              fill="currentColor"
              d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z"
              id="Shape"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default ImageViewer
