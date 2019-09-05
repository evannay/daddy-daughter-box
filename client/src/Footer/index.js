import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-contact-container'>
                <h1>Evan Nay</h1>
                <div className='footer-link-container'>
                    <a href=''>git</a>
                    <a href=''>linkedin</a>
                </div>
            </div>
            <div className='footer-contact-container'>
                <h1>Jessie James</h1>
                <div className='footer-link-container'>
                    <a href=''>git</a>
                    <a href=''>linkedin</a>
                </div>
            </div>
            <div className='footer-contact-container'>
                <h1>Jeremy Bleak</h1>
                <div className='footer-link-container'>
                    <a href=''>git</a>
                    <a href=''>linkedin</a>
                </div>
            </div>
        </div>
    )
}

export default Footer