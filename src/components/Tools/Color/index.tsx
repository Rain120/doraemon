import React from 'react';
import clsx from 'clsx';
import colors from "@tinyfe/color-keywords";
import awesomeColor from "@tinyfe/colors";
import styles from './style.module.css';

const dark = [];
const light = [];

Object.keys(colors).map((key, i) => {
    const hex = colors[key];
    const ac = awesomeColor(hex);
    const data = ac.isDark() ? dark : light;

    data.push({
        label: key,
        value: hex,
    });
});

const ColorBlock = ({
    label,
    value,
    color
}) => {
    const ac = awesomeColor(value);
    const hex = ac.isRgba() ? `#${ac.toHex()}` : value;

    return (
        <div
            className={styles['color-block']}
            key={value}
            style={{
                backgroundColor: hex,
                color
            }}
        >
            <div>{label}</div>
            <div>{hex}</div>
        </div>
    );
}

const ColorList = ({
    colorList,
    titleColor
}) => {
    return (
        <div className={styles['color-list']}>
            {colorList.map(color => {
                return <ColorBlock {...color} color={titleColor} />;
            })}
        </div>
    )
}

export function DarkColor() {
    return (
        <ColorList colorList={dark} titleColor={'#fff'} />
    )
}
export function LightColor() {
    return (
        <ColorList colorList={light} titleColor={'#000'} />
    )
}
