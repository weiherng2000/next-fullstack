import React from 'react'
import styles from '@/app/styles/portfolio.module.css'

const Layout = ({children}) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  )
}

export default Layout