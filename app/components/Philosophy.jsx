import React from 'react'
import './Philosophy.css'

export default function Philosophy() {
  return (
    <div className='philosophy'>
      <h2 className='title'>My <span>Sales</span> Philosophy</h2>
      <p className='para'>No theory, just practical strategies that deliver real results in the field.</p>
      <div className='boxes'>
        <div className='card'>
          <img src='/p1.png' className='card-image' />
          <p className='card-text1'>Understanding Human Behavior</p>
          <p className='card-text2'>Learn to read prospects and adapt your approach to their psychology</p>
        </div>
        <div className='card'>
          <img src='/p2.png' className='card-image' />
          <p className='card-text1'>Confidence in Pitching</p>
          <p className='card-text2'>Learn to read prospects and adapt your approach to their psychology</p>
        </div>
        <div className='card'>
          <img src='/p3.png' className='card-image' />
          <p className='card-text1'>No Theory, Only Results</p>
          <p className='card-text2'>Practical field-tested techniques that focus on closing deals, not textbook theories.</p>
        </div>
        <div className='card'>
          <img src='/p4.png' className='card-image' />
          <p className='card-text1'>Sales Without Certifications</p>
          <p className='card-text2'>Learn has to succeed in sales based on skills and results, not paper credentials.</p>
        </div>
      </div>
    </div>
  )
}
