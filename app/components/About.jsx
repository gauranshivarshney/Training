import React from 'react'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.parent}>
    <div className={styles.about}>
      <div className={styles.box2}>
        <div className={styles.left}>
          <h1 className={styles.aboutText}>About Me</h1>
          <p className={styles.aboutSubtext1}>I'm Priyanka - a sales professional turned entrepreneur with 10+ years of hands - on experience. From cold calls to closing international deals in Dubai, I've built my career on real-world strategies, not theory.</p>
          <p className={styles.aboutSubtext2}>In 2014, I founded Palmode, scaled it from scratch, and proved that great sales dont'need big budgets - just the right mindset.</p>
          <p className={styles.aboutSubtext3}>Now, I help others master the art of selling through trust, psychology, and sharp strategy - no MBA required.</p>
        </div>
        <div className={styles.right}>
          <img src='/a.png' className={styles.aboutImage} />
        </div>
      </div>
    </div>
    </div>
  )
}