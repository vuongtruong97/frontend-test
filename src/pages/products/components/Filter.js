import React from 'react'
import styles from './Filter.module.scss'

function Filter() {
  return (
    <div className={styles.filter}>
        <div className={styles.title}>
            Bộ Lọc Tìm Kiếm
        </div>
        <div className={styles.line}></div>
        <div className={styles.search}>Search</div>
    </div>
  )
}

export default Filter