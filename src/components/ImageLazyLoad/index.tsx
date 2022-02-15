import React from 'react';
// @ts-ignore
import styles from './style.module.css';
import ObserverImageLazyLoad from './ObserverLazyLoad';
import EventImageLazyLode from './EventLazyLoad';

export default function ImageLazyLoad() {
	return (
		// @ts-ignore
		<div>
			{/* @ts-ignore */}
			<h3 align="center">Listen Event Image Lazy Load</h3>
			<EventImageLazyLode />
			{/* @ts-ignore */}
			<h3 align="center">IntersectionObserver Image Lazy Load</h3>
			<ObserverImageLazyLoad />
			<br />
		</div>
	);
}
