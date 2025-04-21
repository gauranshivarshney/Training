import React from 'react'
import styles from './Book.module.css'
import Button from 'react-bootstrap/Button';

export default function Book() {
  return (
    <div className={styles.section}>
      <h1 className={styles.bookTitle}>Ready to sell with confidence?</h1>
      <p className={styles.bookPara}>Take the first step toward transforming your sales career with proven strategies.</p>
      <Button variant="outline-light" className={styles.book}>Book a free consultation</Button>
    </div>
  )
}
