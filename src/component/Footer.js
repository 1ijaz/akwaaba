import React from 'react'

export default function Footer() {
  return (
    
<div className="footer">
  <img src={process.env.PUBLIC_URL + "/media/footer-bg.svg"} className='me-2 footer-svg' alt="" />
  <div className="container">
    <div className="d-flex align-items-end">
      <div className='flex-grow-1'>
        <button className="btn btn-light fs-3 text-dark fw-bold w-200px w-lg-250px h-md-65px h-55px">Contact Us</button>
        <div className="border border-dark rounded-3 p-1 w-300px w-lg-375px h-md-65px h-55px d-flex mt-6">
          <input type="text" className='form-control input flex-grow bg-transparent border-0' placeholder='Type your email....' />
        <button className="btn btn-light h-100 fs-3 text-dark fw-bold ">Subscribe</button>

        </div>
        
      </div>
      <div className="social">
        <a href="#" className='social-link'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
          <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
        </svg>
        </a>
        <a href="#" className='social-link'><i className="fa fa-facebook"></i></a>
        <a href="#" className='social-link'><i className="bi bi-instagram"></i></a>
        <a href="#" className='social-link'><i className="bi bi-twitter"></i></a>
      </div>
    </div>

    <div className="sub-footer d-md-flex flex-wrap d-none">
      <p className='m-0'>© 2021 All Rights Reserved</p>
      <ul className='flex-grow-1 m-0 p-0 d-flex justify-content-center'>
        <li><a href='#'>Privacy Policy</a></li>
        <li><a href='#'>Terms of Use</a></li>
        <li><a href='#'>Sales and Refunds</a></li>
        <li><a href='#'>Legal</a></li>
        <li><a href='#'>Site Map</a></li>
      </ul>
      <p className='m-0'>+1 800 854-36-80</p>
    </div>
  </div>
</div>
  )
}
