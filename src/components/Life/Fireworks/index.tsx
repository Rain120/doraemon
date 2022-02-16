import React, { useEffect, useRef, useState } from 'react';
import useFireWorks from './useFireWorks';
// @ts-ignore
import song from './yanhua.wav';
// @ts-ignore
import styles from './style.module.css';

export default function Fireworks() {
    const container = document.querySelector('.firework-container');
    const {
        canvas,
        render,
        addRocket,
        resize,
    } = useFireWorks();

    setInterval(addRocket, 2000);

    useEffect(() => {
        render(() => {
            console.log('render');
            // const audio = document.querySelector('audio');

            // setInterval(() => {
            //     audio && audio.play();
            // }, 2000);
        });
    });

    useEffect(() => {
        if (container) {
            container.appendChild(canvas);
        }
    }, [container]);

    useEffect(() => {
        if (canvas) {
            canvas.addEventListener('click', () => {
                setInterval(addRocket, 2000)
            });
        }
    }, [canvas]);

    useEffect(() => {
        window.addEventListener('resize', resize);
    });

    // const year = document.querySelector('.year');
    // year.addEventListener('click', e => {
    //     const audio = document.querySelector('audio');
    //     // @ts-ignore
    //     document.querySelector('.typed-cursor').style.visibility = 'unset';

    //     // @ts-ignore
    //     typed.start();
    //     render();
    //     setInterval(() => {
    //         audio.play();
    //     }, 2000)
    // })

    return (
        <div className='container'>
            {/* <div className='mid'>
                <label className='rocker'>
                    <input className='year' type='checkbox' checked />
                    <span className='switch-left'>2021</span>
                    <span className='switch-right'>2022</span>
                </label>
            </div> */}
            <div className='greeting-container'>
                <span className='greetings'></span>
            </div>
            <audio controls loop className='audio' src={song}>
                Your browser does not support the
                <code>audio</code> element.
            </audio>
            <div
                className={
                    'firework-container'
                }
                style={{
                    backgroundImage: 'linear-gradient(6deg, #214, #000)',
                    backgroundSize: '100% 100%',
                    cursor: 'pointer'
                }}
            >
            </div>
            {/* <canvas id='firework' width='400' height='400'>
                Your browser does not support the canvas element.
            </canvas> */}
        </div>
    );
}

