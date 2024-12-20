import Section from '@/components/shared/Section'

import Text from '@/components/shared/Text'
import classNames from 'classnames/bind'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'
import styles from './Intro.module.scss'
const cx = classNames.bind(styles)

const Intro = ({
  groomName,
  brideName,
  locationName,
  date,
  message,
}: {
  groomName: string
  brideName: string
  locationName: string
  date: string
  message: string
}) => {
  return (
    <Section className={cx('container')}>
      <div className={cx('wrap-persons')}>
        <span>{groomName}</span>
        <IconHeart className={cx('heart_icon')} />
        <span>{brideName}</span>
      </div>

      <div className={cx('wrap-location')}>
        <span>
          {format(parseISO(date), 'yyyy년 M월 d일 eeee', { locale: ko })}
        </span>
        <span>{locationName}</span>
      </div>

      <IconFlower className={cx('flower_icon')} />
      <Text>{message}</Text>
    </Section>
  )
}

const IconHeart = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      height="512px"
      version="1.1"
      viewBox="0 0 512 512"
      width="512px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter">
        <g>
          <path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" />
        </g>
      </g>
      <g id="Layer_1" />
    </svg>
  )
}

const IconFlower = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="_x35_40_x2C__love_x2C__flower_x2C__wedding_x2C__heart">
        <g>
          <path
            d="M267.39,406.9c-0.05,1.13-0.12,2.25-0.199,3.38c-15.021,1.12-29.98-0.29-44.17-4.26    c-19.05-5.32-36.74-15.26-51.37-29.891c-14.32-14.319-24.141-31.55-29.54-50.13c-4.24-14.56-5.76-29.949-4.61-45.41    c15.7-1.18,31.32,0.41,46.08,4.801c18.33,5.449,35.32,15.199,49.46,29.34c14.47,14.47,24.34,31.92,29.71,50.72    c3.21,11.25,4.81,22.99,4.81,34.87C267.56,402.511,267.51,404.7,267.39,406.9z"
            fill="#8EAA39"
          />
          <path
            d="M142.024,296.746c15.7-1.18,31.32,0.41,46.08,4.801c18.33,5.449,35.32,15.199,49.46,29.34    c12.559,12.559,21.646,27.363,27.341,43.346c-0.613-2.955-1.329-5.886-2.155-8.782c-5.37-18.8-15.24-36.25-29.71-50.72    c-14.14-14.141-31.13-23.891-49.46-29.34c-14.76-4.391-30.38-5.98-46.08-4.801c-1.149,15.461,0.37,30.851,4.61,45.41    c0.669,2.303,1.407,4.585,2.213,6.844C141.88,321.104,141.117,308.948,142.024,296.746z"
            fill="#849B31"
          />
          <path
            d="M267.73,370.66c-0.12-2.2-0.171-4.399-0.171-6.59c0-11.87,1.601-23.61,4.811-34.86    c5.37-18.81,15.24-36.25,29.71-50.72c14.14-14.14,31.14-23.9,49.46-29.34c14.76-4.391,30.39-5.98,46.08-4.811    c1.16,15.461-0.37,30.851-4.61,45.421c-5.399,18.579-15.22,35.81-29.54,50.119c-14.63,14.641-32.31,24.57-51.37,29.9    c-14.189,3.96-29.149,5.37-44.17,4.25C267.85,372.91,267.78,371.78,267.73,370.66z"
            fill="#8EAA39"
          />
          <path
            d="M267.855,372.77c0.595-8.882,2.098-17.64,4.517-26.118c5.37-18.81,15.24-36.25,29.71-50.72    c14.14-14.14,31.14-23.9,49.46-29.34c14.76-4.391,30.39-5.98,46.08-4.811c0.03,0.404,0.051,0.808,0.078,1.211    c0.41-6.173,0.389-12.406-0.08-18.652c-15.69-1.17-31.32,0.42-46.08,4.811c-18.32,5.439-35.32,15.2-49.46,29.34    c-14.47,14.47-24.34,31.91-29.71,50.72c-3.21,11.25-4.811,22.99-4.811,34.86c0,2.19,0.051,4.39,0.171,6.59    C267.762,371.361,267.811,372.065,267.855,372.77z"
            fill="#849B31"
          />
          <path
            d="M267.56,375.83c-1.284,0-2.568-0.492-3.546-1.475c-1.946-1.958-1.938-5.124,0.021-7.071l0.171-0.17    l63.25-63.249c1.951-1.953,5.119-1.953,7.07,0c1.953,1.952,1.953,5.118,0,7.07l-63.44,63.44    C270.109,375.346,268.834,375.83,267.56,375.83z"
            fill="#849B31"
          />
          <path
            d="M267.56,412.07c-1.279,0-2.56-0.488-3.535-1.465l-63.43-63.43c-1.953-1.952-1.953-5.118,0-7.07    c1.953-1.953,5.118-1.953,7.071,0l63.429,63.43c1.953,1.952,1.953,5.118,0,7.07    C270.119,411.582,268.839,412.07,267.56,412.07z"
            fill="#849B31"
          />
          <path
            d="M389.89,144.3c12.511,0,22.65,10.141,22.65,22.65S402.4,189.6,389.89,189.6    c-12.51,0-22.659-10.14-22.659-22.649S377.38,144.3,389.89,144.3z"
            fill="#8EAA39"
          />
          <circle cx="398.95" cy="411.6" r="22.65" fill="#FFD15C" />
          <path
            d="M402.999,403.021c7.689,0,14.479,3.834,18.572,9.691c0.018-0.368,0.028-0.738,0.028-1.111    c0-12.511-10.14-22.65-22.649-22.65s-22.65,10.14-22.65,22.65c0,4.82,1.511,9.285,4.077,12.957    C380.957,412.564,390.862,403.021,402.999,403.021z"
            fill="#F7B64C"
          />
          <path
            d="M375.34,175.54c0-12.51,10.149-22.649,22.659-22.649c4.345,0,8.402,1.225,11.85,3.346    c-3.821-7.105-11.324-11.937-19.959-11.937c-12.51,0-22.659,10.141-22.659,22.65c0,8.162,4.322,15.313,10.801,19.3    C376.315,183.061,375.34,179.415,375.34,175.54z"
            fill="#849B31"
          />
          <path
            d="M145.23,180.54c12.52,0,22.66,10.14,22.66,22.65c0,12.51-10.141,22.659-22.66,22.659    c-12.51,0-22.65-10.149-22.65-22.659C122.58,190.68,132.721,180.54,145.23,180.54z"
            fill="#EF3E5C"
          />
          <path
            d="M132.126,214.143c0-12.51,10.141-22.649,22.65-22.649c4.164,0,8.063,1.127,11.415,3.085    c-3.391-8.237-11.493-14.038-20.961-14.038c-12.51,0-22.65,10.14-22.65,22.65c0,8.352,4.522,15.646,11.249,19.576    C132.734,220.107,132.126,217.196,132.126,214.143z"
            fill="#E42A53"
          />
          <path
            d="M267.56,448.32c-2.762,0-5-2.238-5-5V198.66c0-2.762,2.238-5,5-5s5,2.238,5,5v244.66    C272.56,446.082,270.321,448.32,267.56,448.32z"
            fill="#743629"
          />
          <path
            d="M330.99,448.32H95.4c-2.762,0-5-2.238-5-5s2.238-5,5-5h235.59c2.762,0,5,2.238,5,5    S333.752,448.32,330.99,448.32z"
            fill="#415A6B"
          />
          <path
            d="M268.56,209.88c-0.31,0.311-0.619,0.62-0.93,0.931c-41.22-41.221-82.439-64.69-82.439-105.91    c0-22.75,18.46-41.221,41.22-41.221c20.61,0,30.91,10.311,41.22,30.92c10.3-20.609,20.61-30.92,41.22-30.92    c22.801,0,41.261,18.471,41.261,41.221C350.11,145.811,309.47,169.24,268.56,209.88z"
            fill="#EF3E5C"
          />
          <g>
            <g>
              <g>
                <path
                  d="M200.131,108.75c0-22.75,18.46-41.221,41.22-41.221c1.27,0,2.499,0.04,3.692,0.118       c-5.207-2.64-11.258-3.968-18.633-3.968c-22.76,0-41.22,18.471-41.22,41.221c0,41.22,41.22,64.689,82.439,105.91       c0.311-0.311,0.62-0.62,0.93-0.931c1.509-1.499,3.018-2.972,4.524-4.426C235.258,169.728,200.131,146.801,200.131,108.75z"
                  fill="#E42A53"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
      <g id="Layer_1" />
    </svg>
  )
}

export default Intro
