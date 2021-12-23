import React from 'react';
import clsx from 'clsx';
import styles from './style.module.css';

export default function Profile({
    name,
    nickName,
    github,
    avatar,
    intro,
}) {
    return (
        <>
            <h2>Self Introduction</h2>
            <div className={styles.profile}>
                <div className={styles.avatar}>
                    <img src={avatar} alt={nickName} />
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>
                        {name}
                        <span className={styles.nickName}>{nickName}</span>
                    </div>
                    <a className={styles.github} href={github}>Github</a>
                    <div className={styles.intro}>{intro}</div>
                </div>
            </div>
        </>
    )
}
