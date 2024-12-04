import Section from '@shared/Section'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import ImageViewer from '../imageViewer'

import styles from './ImageGallery.module.scss'

const cx = classNames.bind(styles)

const ImageGallery = ({ images }: { images: string[] }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)

  const open = selectedIndex > -1

  const handleSelectedIndex = (index: number) => {
    setSelectedIndex(index)
  }

  const handleClose = () => {
    setSelectedIndex(-1)
  }

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((image, index) => (
            <li
              key={index}
              className={cx('wrap-image')}
              onClick={() => handleSelectedIndex(index)}
            >
              <picture>
                <source srcSet={`${image}.webp`} type="image/webp" />
                <img src={`${image}.jpg`} alt="wedding" />
              </picture>
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIndex={selectedIndex}
        onClose={handleClose}
      />
    </>
  )
}

export default ImageGallery
