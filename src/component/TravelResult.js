import React from "react";

export default function TravelResult(props) {
  console.log(props.division, "day");
  return (
    <>
      <hr className="mx-3" />

      <div className="travel-result">
        <div className="container">
          <div className="d-flex gap-md-13 gap-2 align-items-md-center">
            <h1>DAY 0{props?.data}</h1>
            <div className="flex-grow-1">
              <h2>{props?.heading} </h2>
              <div className="d-flex justify-content-between w-100 ">
                <p className="fs-6">{props?.day}</p>
                <div className="d-flex flex-column gap-3">
                  <button className="btn btn-sm fs-7 rounded-pill py-2 btn-primary">
                    Modify
                  </button>
                  <button className="btn btn-sm fs-7 rounded-pill py-2 btn-primary-line">
                    Regenerate
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-17">
            <div className="col-md-4 col-12 pe-md-14 border-mb-0 border-r py-5">
              <h3>Morning</h3>
              <p>{props.division[2]}</p>
            </div>
            <div className="col-md-4 col-12 px-md-14 border-mb-0 border-r py-5">
              <h3>Noon</h3>
              <p>{props.division[4]}</p>
            </div>
            <div className="col-md-4 col-12 ps-md-14 py-5">
              <h3>Evening</h3>
              <p>{props.division[6]}</p>
            </div>
          </div>

          <div className="row mt-20">
            <div className="col-lg-4">
              <div className="image-fit">
                <img
                  src={process.env.PUBLIC_URL + "/media/image.jpg"}
                  className="h-100 w-100 position-absolute top-0 start-0 image-fit"
                  alt=""
                />
                <a href="#!" className="cursor-default disabled">
                  Book now <span className="fs-10">(comming soon)</span>
                </a>
              </div>
              <h4>Grand Park Hotel</h4>
            </div>
            <div className="col-lg-4">
              <div className="image-fit">
                <img
                  src={process.env.PUBLIC_URL + "/media/image.jpg"}
                  className="h-100 w-100 position-absolute top-0 start-0 image-fit"
                  alt=""
                />
                <a href="#!" className="cursor-default disabled">
                  Book now <span className="fs-10">(comming soon)</span>
                </a>
              </div>
              <h4>The Dalmatian coast</h4>
            </div>
            <div spanName="col-lg-4">
              <div className="image-fit">
                <img
                  src={process.env.PUBLIC_URL + "/media/image.jpg"}
                  className="h-100 w-100 position-absolute top-0 start-0 image-fit"
                  alt=""
                />
                <a href="#!" className="cursor-default disabled">
                  Book now <span className="fs-10">(comming soon)</span>
                </a>
              </div>
              <h4>The Pula City</h4>
            </div>
          </div>

          <button className="btn btn-sm fs-7 rounded-pill py-2 btn-primary-line mt-md-10 mt-3">
            Add Day
          </button>
        </div>
      </div>
    </>
  );
}
