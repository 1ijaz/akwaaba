import React from 'react'

export default function Rating() {
  return (
    <div className="rating mt-17">
    <div className="container">
      <div className="rating-card w-lg-75 m-auto mb-20">
        <img src={process.env.PUBLIC_URL + "/media/Ellipse.svg"} className='s-rate-img-1' alt="" />
        <img src={process.env.PUBLIC_URL + "/media/Ellipse.svg"} className='s-rate-img-2' alt="" />
        <h1>Rate this itnenarary</h1>

        <div className="ratings d-flex gap-16 align-items-center align-items-center justify-content-center">
          <div className="d-flex gap-3">
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          </div>
          <h2 className='m-0 mt-2'>0/5</h2>
        </div>

      </div>

      <div className="d-flex justify-content-center">
      <button className='btn btn-primary-gradient w-250px rounded-pill'>Share Trip</button>
      </div>
    </div>
  </div>
  )
}
