import React from 'react'
import './Testi.css'

export default function Testi() {
    return (
        <div className='container'>
            <div className='left'>
                <p className='heading'>TESTIMONIALS</p>
                <p className='subHeading'>What People Say About Us.</p>
                <img src='/dot1.png' className='img1' />
                <img src='/dot2.png' className='img2' />
                <img src='/dot3.png' className='img3' />
            </div>
            <div className='right'>
                <img src='/user.png' className='userIcon' />
                <div className='userCon'>
                    <p className='userText'>After implementing Priyanks's sales strategies, our team's conversion rate jumped by 40%. Her focus on practical, actionable techniques made all the difference in our approach to enterprise sales.</p>
                    <p className='userSubText1'>Mike taylor</p>
                    <p className='userSubText2'>Mumbai, India</p>
                </div>
            </div>
        </div>
    )
}