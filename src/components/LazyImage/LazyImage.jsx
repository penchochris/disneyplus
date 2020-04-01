import React from 'react'
import useNativeLazyLoading from '@charlietango/use-native-lazy-loading'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components';

const LazyImage = ({ width, height, src, alt, ...rest }) => {
  const supportsLazyLoading = useNativeLazyLoading()
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  })

  const SlideElement = styled.img`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
    cursor: pointer;
    transition: opacity 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:hover {
      border: 4px solid rgb(249, 249, 249);
    }
  `;

  return (
    <div
      ref={!supportsLazyLoading ? ref : undefined}
      style={{
        background: '#2a4b7a',
        borderRadius: '5px',
        width: '16.6%',
        height: '10.1vw',
        margin: '0.73%',
      }}
    >
      {inView || supportsLazyLoading ? (
        <SlideElement
          {...rest}
          src={src}
          loading="lazy"
          alt={alt}
        />
      ) : null}
    </div>
  )
}

export default LazyImage