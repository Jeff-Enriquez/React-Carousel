import React, { useState, useEffect, useRef } from 'react'
import styles from './Carousel.module.sass'

const Carousel = ({ paths, arrows, dots, delay }) => {
  const [idx, setIdx] = useState(0)
  const [prevIdx, setPrevIdx] = useState(0)
  const [images, setImages] = useState(imagesToJSX())
  const [myDots, setDots] = useState(renderDots())
  const [isDelay, setIsDelay] = useState(delay ? delay : 3500)
  const [isArrows] = useState(arrows === false ? false : true)
  const [isDots] = useState(dots === false ? false : true)
  const savedCallback = useRef()

  function renderDots() {
    let arr = []
    for(let i = 0; i < paths.length; i++){
      if(i === idx) {
        arr.push(
          <button key={i} className={styles.dots} id={styles.highlight} onClick={() => dotClick(i)}></button>
        )
      } else {
        arr.push(
          <button key={i} className={styles.dots} onClick={() => dotClick(i)}></button>
        )
      }
    }
    return arr
  }

  function imagesToJSX() {
    let arr = []
    for(let i = 0; i < paths.length; i++){
      if (i === prevIdx) {
        arr.push(
          <img key={i}
            className={`${styles.img} ${styles.previmg}`}
            src={paths[i].src} 
            alt={paths[i].alt ? paths[i].alt : ''}
          />
        )
      } else if (i === idx) {
        arr.push(
          <img key={i}
            className={`${styles.img} ${styles.fadein}`}
            src={paths[i].src} 
            alt={paths[i].alt ? paths[i].alt : ''}
          />
        )
      } else {
        arr.push(
          <img key={i}
            className={styles.img} 
            src={paths[i].src} 
            alt={paths[i].alt ? paths[i].alt : ''}
          />
        )
      }
    }
    return arr
  }

  const leftArrow = () => {
    setIsDelay(null)
    setPrevIdx(idx)
    if(idx === 0){
      setIdx(paths.length-1)
    } else {
      setIdx(idx - 1)
    }
    setTimeout(() => setIsDelay(delay ? delay : 3500), 0)
  }

  const rightArrow = () => {
    setIsDelay(null)
    setPrevIdx(idx)
    if(idx === paths.length-1){
      setIdx(0)
    } else {
      setIdx(idx + 1)
    }
    setTimeout(() => setIsDelay(delay ? delay : 3500), 0)
  }
  
  const dotClick = (i) => {
    setIsDelay(null)
    setPrevIdx(idx)
    setIdx(i)
    setTimeout(() => setIsDelay(delay ? delay : 3500), 0)
  }

  const callback = () => {
    // Can read fresh props, state, etc.
    setPrevIdx(idx)
    if(idx === paths.length-1){
      setIdx(0)
    } else {
      setIdx(idx + 1)
    }
  }

  // After every render, save the latest callback into our ref.
  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function nextImage(){
      savedCallback.current()
    }
    if (isDelay !== null) {
      let cycleImages = setInterval(nextImage, isDelay)
      return () => clearInterval(cycleImages)
    }
  }, [isDelay])

  useEffect(() => {
    setImages(imagesToJSX())
    setDots(renderDots())
  }, [idx])

  return (
    <div className={styles.container}>
      {isArrows && 
        <button id={styles.left} onClick={leftArrow}>
          <img className={styles.arrow} src='./images/left-arrow.svg' alt='left arrow'/>
        </button>
      }
      {images}
      {isDots && 
        <div className={styles.dotsContainer}>
          {myDots}
        </div>
      }
      {isArrows && 
        <button id={styles.right} onClick={rightArrow}>
          <img className={styles.arrow} src='./images/left-arrow.svg' alt='right arrow'/>
        </button>
      }
    </div>
  )
}

export default Carousel