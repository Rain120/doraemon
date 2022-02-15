import React, { useEffect, useRef } from 'react';
// @ts-ignore
import styles from './style.module.css';
import {images, defaultImage} from './ObserverLazyLoad';

function throttle(fun, delay, time) {
  var timeout;
  var previous = +new Date();
  return function () {
      var now = +new Date();
      var context = this;
      var args = arguments;
      clearTimeout(timeout);
      if (now - previous >= time) {
          fun.apply(context, args);
          previous = now;
      } else {
          timeout = setTimeout(function () {
              fun.apply(context, args);
          }, delay);
      }
  }
}

export default function EventImageLazyLode() {
  const ref = useRef(null);

  function scrollIntoView(el) {
    const clientHeight = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    console.log(el);
    return el.getBoundingClientRect().top < clientHeight;
  }

  const onLoadImage = (e?) => {
    const img = document.getElementsByTagName('img');

    Array.from(img).forEach((el, index) => {
        if (scrollIntoView(el)) {
          el.classList.remove('lazyImage_src-components-ImageLazyLoad-style-module');
          loadImg(el);
        }
    });
  }

  function loadImg(el) {
    if (!el.src) {
      el.src = el.dataset.src;
    }
  }

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.addEventListener('scroll', throttle(onLoadImage, 50, 200), false);
    
    return () => {
      ref.current.removeEventListener('scroll', onLoadImage);
    }
  }, [ref && ref.current])

  return (
    <div className={styles.lazyBox} ref={ref}>
      {images}
    </div>
  )
}
