// @ts-ignore
import React from 'react'
// @ts-ignore
import styles from './style.module.css';

export const images = [];
export const defaultImage = 'https://picsum.photos/500';
const refs = [];

for (let i = 0; i < 40; i++) {
	const ref = React.createRef()
	refs.push(ref)
	images.push(
		<div className={styles.imageBox} key={i}>
			<img
				className={styles.lazyImage}
				// @ts-ignore
				ref={ref}
				data-src={'https://joeschmoe.io/api/v1/random'}
			/>
		</div>
	)
}

const threshold = [0.01]

// 利用 IntersectionObserver 监听元素是否出现在视口
const io = new IntersectionObserver((entries) => {
	entries.forEach((item) => {
		const { target } = item
		// @ts-ignore
		target.src = defaultImage;
		if (item.intersectionRatio <= 0) {
			return
		}

		// @ts-ignore
		target.src = target.dataset.src + `?v=${new Date().getTime()}`
		target.classList.remove('lazyImage_src-components-ImageLazyLoad-style-module');
	})
}, {
	threshold,
});

const onload = () => {
	refs.forEach((item) => {
		io.observe(item.current)
	})
}

export default function ObserverImageLazyLoad() {
	return (
		<div className={styles.lazyBox}>
			{images}
			<img onError={onload} src="" />
		</div>
	);
}
