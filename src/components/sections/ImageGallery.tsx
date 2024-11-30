import Section from '@shared/Section'
import classNames from 'classnames/bind'
import { useState } from 'react'
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
              <img src={image} alt="wedding" />
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
