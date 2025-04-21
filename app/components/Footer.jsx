import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.section}>
        <div>
          <h1 className={styles.heading}>Priyanka</h1>
          <p className={styles.para}>Sales Coach & Entrepreneur</p>
          <p className={styles.email}>contact@priyankacoaching.com</p>
        </div>
        <div>
          <h1 className={styles.heading}>Quick Link</h1>
          <div className={styles.links}>
          <p className={styles.t1}>About</p>
          <p className={styles.t2}>Contact us</p>
          <p className={styles.t3}>Solutions</p>
          <p className={styles.t4}>Strategy</p>
          </div>
        </div>
        <div>
          <h1 className={styles.heading}>Connect Me</h1>
          <img src='/instra.png' className={styles.img}/>
          <img src='/facebook.png' className={styles.img}/>
          <img src='/linkedin.png' className={styles.img}/>
        </div>
      </div>
      <hr />
      <p className={styles.copy}>© 2025 Priyanka Sales Coaching. All rights reserved.</p>
    </div>
  )
}