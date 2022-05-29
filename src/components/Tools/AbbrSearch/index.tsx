import React from 'react'
import s from './style.module.css';
import cs from '../../../data/abbr/cs.json'

export default function AbbrSearch() {
  return (
    <div>
        <ul>
            {Object.keys(cs).map(key => <li><strong>{key}</strong> {cs[key]}</li>)}
        </ul>
    </div>
  )
}
