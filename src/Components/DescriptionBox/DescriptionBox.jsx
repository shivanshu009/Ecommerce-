import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">

            <div className="descriptionbox-nav-box">    Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>Your security is our top priority. Shop with confidence, knowing that your personal information is safeguarded through state-of-the-art encryption technology. We prioritize the privacy and safety of our customers, ensuring a worry-free shopping experience.</p>
            <p>Join our vibrant online community. Follow us on social media for the latest product launches, style tips, and interactive content. Be part of a community that shares your passion for quality products and great deals.</p>
        </div>
    </div>
  )
}

export default DescriptionBox