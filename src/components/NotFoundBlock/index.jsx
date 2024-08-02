import React from 'react'

import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1><span>😔️️️️</span>
        <br />
        Error: 404
      </h1>
      <p className={styles.description}>Page unfortunately not found </p>
    </div>
  )
}

export default NotFoundBlock