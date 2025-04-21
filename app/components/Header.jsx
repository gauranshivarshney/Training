import React from 'react'
import styles from './Header.module.css'
import Button from 'react-bootstrap/Button';

export default function Header() {
  return (
    <div className={styles.header}>
      <Button variant="outline-light" className={styles.button1}>Start Learning Now</Button>
      <p className={styles.heading1}><span>Sales</span> is Not a Talent, It's a Skill You Master.</p>
      <p className={styles.subheading}>Learn field-tasted sales strategies from someone who's been in the trenches.</p>
      <div className={styles.box}>
        <div className={styles.left}>
          <Button variant="outline-light" className={styles.button2}>Book a free strategy call</Button>
          <Button variant="outline-light" className={styles.button3}>Start Learning Now</Button>
          <div className={styles.button4}>
            <Button variant="outline-light" className={styles.button}>
              <img src='/h1.png' className={styles.img2} />
              <p className={styles.text4}>Rated <span className={styles.subtext1}>4.5/5</span> from over <span className={styles.subtext2}>500</span> reviews</p>
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.picture}>
          <img src='/h2.png' className={styles.headerImage} />
          <img src='/c1.png' className={styles.circle1} />
          <img src='/c2.png' className={styles.circle2} />
        </div>
      </div>
    </div>
  )
}