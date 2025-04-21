import React from 'react'
import styles from './Journey.module.css'

export default function Journey() {
  return (
    <div className={styles.journey}>
      <h2 className={styles.heading2}>My <span>Journey</span></h2>
      <div className={styles.journeyContent}>
        <div className={styles.left1}>
          <div className={styles.box1}>
            <img src='/j1.png' className={styles.i1} />
            <p className={styles.t1}>Started with Rs500/week</p>
          </div>
          <div className={styles.line1}>
            <img src='/j2.png' className={styles.i2} />
            <p className={styles.t2}>Began my sales career with minimal resources but maximum determination.</p>
          </div>
          <div className={styles.box1}>
            <img src='/j1.png' className={styles.i1} />
            <p className={styles.t1}>ICSI Professional Journey</p>
          </div>
          <div className={styles.line1}>
            <img src='/j2.png' className={styles.i2} />
            <p className={styles.t2}>But foundational business knowledge through professional certification.</p>
          </div>
          <div className={styles.box1}>
            <img src='/j1.png' className={styles.i1} />
            <p className={styles.t1}>International Experience in Dubai</p>
          </div>
          <div className={styles.line1}>
            <img src='/j2.png' className={styles.i2} />
            <p className={styles.t2}>Expanded horizons and sales expertise in global markets.</p>
          </div>
          <div className={styles.box1}>
            <img src='/j1.png' className={styles.i1} />
            <p className={styles.t1}>Palmode Success</p>
          </div>
          <div className={styles.line1}>
            <img src='/j2.png' className={styles.i2} />
            <p className={styles.t2}>Built and scaled a successful sales operation, mentoring others along the way.</p>
          </div>
        </div>
        <div className={styles.right1}>
          <img src='/j.png' className={styles.profile} />
          <div className={styles.box2}>
            <p className={styles.h1}>"I started with Rs500/week and scaled to Rs1 lakh/month.Sales isn;t about natural charm it's about mastering a learnable skill set."</p>
            <p className={styles.h2}>Priyanka</p>
            <p className={styles.h3}>Sales Coach & Enterpreneur</p>
          </div>
        </div>
      </div>
    </div>
  )
}
