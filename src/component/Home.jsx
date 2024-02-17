import React, { useState } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import DateField from './DateField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home({onSubmit}) {
    const [destination, setDestination] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    

    const handleSubmit = () => {
      if(destination == ''){
        toast.error('Please write Destination')
      }else if(selectedDate == ''){
        toast.error('please select Date')
      }
      else{
       
        console.log(selectedDate, 'selectedDate');
        console.log(destination, 'destination');
        onSubmit(destination, selectedDate);

      }
      // Pass destination and date to the onSubmit callback
      
    };
    const handleDateSelect = (date) => {
      setSelectedDate(date);
    };
    const images = [
      "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];


    return (
        <div className='home' style={{ background: `url(${process.env.PUBLIC_URL + "/media/home.jpg"})` }}>
          <div className="container">
            <div className="cus-header d-flex justify-content-between align-items-start pt-20">
              <img src={process.env.PUBLIC_URL + "/media/logo.svg"} className='h-45px h-sm-auto' alt="" />
              <button className='btn btn-light px-3 px-sm-10 fw-semibold fw-semibold text-gray-700'>
                <img src={process.env.PUBLIC_URL + "/media/icons_google.svg"} className='me-2' alt="" />
                Sign in with Google
              </button>
            </div>
    
            <div className="home-contant">
              <div className="row">
                <div className="col-lg-6">
                  <h1>TRAVEL PLANNER</h1>
                  <p>Your Personal AI Travel Planner</p>
    
                  <form action="">
                    <div className="destination w-sm-425px w-350px mt-16">
                      <i class="bi bi-search"></i>
                        <input
                          type='text'
                          className="flex-grow-1"
                          placeholder="Enter destination"
                          name="destination"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                        />
                        <div className="send-button cursor-pointer" onClick={handleSubmit}>
                        <i class="bi bi-arrow-right-circle-fill"></i>
                        </div>
                    </div>
                    <ToastContainer />
                   <DateField onSelectDate={handleDateSelect}/>
                  </form>
                </div>
              </div>


              <div className="hero-slider d-flex align-content-center">
                <img src={process.env.PUBLIC_URL + "/media/Image-bg.png"} className='img-fluid position-absolute mt-20 pt-3' alt="" />
                <div className="slider">
                  <Slide>
                      <div className="each-slide-effect">
                          <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                              {/* <span>Slide 1</span> */}
                          </div>
                      </div>
                      <div className="each-slide-effect">
                          <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                              {/* <span>Slide 2</span> */}
                          </div>
                      </div>
                      <div className="each-slide-effect">
                          <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                              {/* <span>Slide 3</span> */}
                          </div>
                      </div>
                      {/* <div className="each-slide-effect">
                          <div style={{ 'backgroundImage': `url(${images[0]}), lightgray 50% / cover no-repeat, linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(0, 0, 0, 0.08) 114.04%)` }}>
                          </div>
                      </div> */}
                  </Slide>

                </div>
              </div>





            </div>
    
          </div>
        </div>
      );
    };
    