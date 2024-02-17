import React, { useEffect, useState } from 'react'
import TravelResult from './TravelResult'
import Footer from './Footer'
import Rating from './Rating'
import axios from 'axios';

export default function TravelDetail({destination, date}) {
  //const [destination, setDestination] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state

  const [roadMap, setRoadMap] = useState('');

  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState('');
  const [price, setPrice] = useState('');
  const [language, setLanguage] = useState('');


  //const [destination, setdestination] = useState('pakistan');
  const [noOfDays, setNoOfDays] = useState([]);

  const [chatHistory, setChatHistory] = useState([]);



  // const [day1, setDay1] = useState('');
  // const [day2, setDay2] = useState('');
  // const [day3, setDay3] = useState('');
  // const [day4, setDay4] = useState('');
  // const [day5, setDay5] = useState('');

  // const handledestinationChange = (event) => {
  //   setdestination(event.target.value);
  // };
  const[totalDays, setTotalDays] = useState(0)

  // useEffect(()=>{
  //   getDates();
  //   handleSendMessage()

  // },[])
  useEffect(() => {
    getDates();
  }, [date]);

  useEffect(() => {
    handleSendMessage();
  }, [totalDays]);
  const handleSendMessage = () => {
    try {
      const [startDateString, endDateString] = date.split(' - ');
  //     const startDate = new Date(startDateString);
  // const endDate = new Date(endDateString);
  // setTotalDays((Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)))+1);
      //setNoOfDays((Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)))+1);
      //getDates()
     fetchdata()
      fetchRoadMap()
      

    } catch (error) {
      console.error('Error making API request:', error);
    }
  };

const fetchdata = ()=>{
  axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: 'what is the location of'+ destination + 'in 2 lines'},
        
      ],
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`,
      },
    }
  ).then(
    (response) => {
      console.log(response,'res');
      // setChatHistory((prevChatHistory) => [
      //   ...prevChatHistory,
      //   { role: 'system', content: 'Assistant' },
      //   { role: 'assistant', content: response.data.choices[0]?.message.content },
      // ]);
      // const assistantMessage = response.data.choices[0]?.message.content;
      //   const splitMessages = assistantMessage.split('\n\n');
        // Assuming the first part is about the location and the second part is about the weather
        setLocation(response.data.choices[0]?.message.content);
        // setWeather(splitMessages[1]);
        // setPrice(splitMessages[2]);
        // setLanguage(splitMessages[3]);

    }
  );
  axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: 'write something about the weather of'+ destination + 'in 2 lines'},
        
      ],
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`,
      },
    }
  ).then(
    (response) => {
        setWeather(response.data.choices[0]?.message.content);
    }
  );
  axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: 'write something about the price of'+ destination + 'in 2 lines'},
       
      ],
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`,
      },
    }
  ).then(
    (response) => {
     setPrice(response.data.choices[0]?.message.content);

    }
  );
  axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: 'write something about the language of'+ destination + 'in 1 line'},
        
      ],
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`,
      },
    }
  ).then(
    (response) => {
      setLanguage(response.data.choices[0]?.message.content);
    }
  );
}
const getDates = () => {
  console.log(date, 'date');
  const [startDateString, endDateString] = date.split(' - ');

  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  setTotalDays((Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)))+1);
  let currentDate = startDate;

  while (currentDate <= endDate) {
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      month: 'long', // Full month name
      day: '2-digit', // Two-digit day
    });
    //noOfDays.push(formattedDate);
    setNoOfDays((prev) => [...prev, formattedDate]);
    currentDate.setDate(currentDate.getDate() + 1);
    
  }

  console.log(noOfDays[0], 'noOfDays');
};
// useEffect(()=>{
//   fetchImages()

// },[day1])
// const [imageUrls, setImageUrls] = useState([]);
// const fetchImages = ()=>{
//   // for(let i = 1 ; i <= 2; i++){
//     axios.post(
//       'https://api.openai.com/v1/images/generations',
//       {
//           prompt: "I want pictures of hotels that are in " + day1,
//           n: 3,
//           size: "512x512"
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer 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`,
//         },
//       }
//     ).then(
//       (response) => {
//         const urls = response.data.data.map(item => item.url);
//         console.log(urls,'asdfghj');

//         setImageUrls((prev) => ({
//           ...prev,
//           urls,
//         }));
  
//       }
//     );
//   // }
  
// }
const [days, setDays] = useState([]);
const [headings, setHeadings] = useState([])
  const fetchRoadMap = () => {
    // try {
      if(totalDays>0){
        
        setLoading(true);

        axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo',
            messages: [
              { role: 'user', content: 'Generate a ' + totalDays + '-day trip roadmap for a visit to'+ destination + 'in days with every day main heading and with morning afternoon and evening schedule'},
  
              ...chatHistory,
            ],
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer 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`,
            },
          }
        ).then((res)=>{
  
          const assistantMessage = res.data.choices[0]?.message.content;
          console.log(assistantMessage, 'Assistant Message');  // Log the entire message
      
          const splitMessages = assistantMessage.split(/Day \d+:/).filter(day => day.trim() !== '');
          console.log(splitMessages, 'Split Messages');  // Log the split messages
      
          // Extract headings
          const headings = splitMessages.map(day => {
            const lines = day.split('\n');
            const heading = lines[0].trim(); // Assuming the heading is in the first line
            return heading;
          });
      
          console.log(headings, 'Headings');  // Log the headings
          console.log(splitMessages, 'splitMessages');  // Log the headings
      
          setDays(splitMessages);
          setHeadings(headings);
  
  
  
  
      //     const assistantMessage = res.data.choices[0]?.message.content;
      //     const splitMessages = assistantMessage.split(/Day \d+:/).filter(day => day.trim() !== '');
      //     console.log(assistantMessage, 'mess');
      //     // Extract headings
      //     const headings = splitMessages.map(day => {
      //       const lines = day.split('\n');
      //       const heading = lines[0].trim(); // Assuming the heading is in the first line
  
      //       return heading;
      //     });
      // console.log(headings, 'mess');
      //     setDays(splitMessages);
      //     setHeadings(headings);
  
  
          // const assistantMessage = res.data.choices[0]?.message.content;
          //   const splitMessages = assistantMessage.split(/Day \d+:/).filter(day => day.trim() !== '');
          //   console.log(splitMessages, 'splitmess');
          //   console.log(assistantMessage, 'mess');
          //   setDays(splitMessages)
            
          //setRoadMap(res.data.choices[0]?.message.content);
        }).catch((error) =>{
          console.error('Error making API request:', error);
        })
        .finally(() => {
          setLoading(false); // Set loading to false when the API request is complete
        });
      }

     
      
  };
  return (
    <>
      <div className="travel-detail">
        <div className="container">

          <div className="cus-header d-flex justify-content-between align-items-center pt-20">
            <img src={process.env.PUBLIC_URL + "/media/logo-dark.png"} className='h-40px' alt="" />
            <div className='d-flex gap-3'>
            <button className='btn btn-secondary d-none d-sm-block'>
              <img src={process.env.PUBLIC_URL + "/media/icons_google.svg"} className='me-2' alt="" />
              Sign in with Google
            </button>
            <button className='btn btn-primary-line'>
               Regenerate
            </button>
            </div>
            {/* <button className='btn btn-secondary' onClick={()=>handleSendMessage()}>
              Sign in 
            </button> */}
          </div>

          <div className="hero-wrapper">
            <h1 className='mb-7'>{totalDays}-Day {destination} Adventure</h1>
            <div className="hero-header-wrapper" style={{background: `linear-gradient(0deg, rgba(0, 0, 128, 0.24) 0%, rgba(0, 0, 128, 0.24) 100%), url(${process.env.PUBLIC_URL + "/media/detail-hero.jpg"}), lightgray 50% / cover no-repeat`}}>
              
              <div className="d-flex justify-content-between align-items-center">
                <h6 className='text-white'>Download trip as pdf</h6>
                <div className='d-flex flex-column align-items-center'>
                  <i className="bi bi-heart"></i>
                  <p className='text-white fs-7'>Save Trip</p>
                </div>
              </div>

            </div>
          </div>
          <div className="position-relative px-5 bottom-sec">
          <div className="row">

            <div className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-5 px-md-9 px-5">
              <div className="card shadow h-100">
                <div className="card-header px-6 border-gray-400 d-flex justify-content-between align-items-center">
                  <h5 className='m-0'>Location</h5>
                    <img src={process.env.PUBLIC_URL + "/media/mdi_location.svg"} className='me-2' alt="" />
                </div>
                <div className="card-body px-6">
                    <p>{location}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-5 px-md-9 px-5">
              <div className="card shadow h-100">
                <div className="card-header px-6 border-gray-400 d-flex justify-content-between align-items-center">
                  <h5 className='m-0'>Weather</h5>
                    <img src={process.env.PUBLIC_URL + "/media/fluent_weather-haze-48-regular.svg"} className='me-2' alt="" />
                </div>
                <div className="card-body px-6">
                    <p>{weather}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-5 px-md-9 px-5">
              <div className="card shadow h-100">
                <div className="card-header px-6 border-gray-400 d-flex justify-content-between align-items-center">
                  <h5 className='m-0'>Price</h5>
                    <img src={process.env.PUBLIC_URL + "/media/$.svg"} className='me-2' alt="" />
                </div>
                <div className="card-body px-6">
                    <p>{price}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-5 px-md-9 px-5">
              <div className="card shadow h-100">
                <div className="card-header px-6 border-gray-400 d-flex justify-content-between align-items-center">
                  <h5 className='m-0'>Language</h5>
                    <img src={process.env.PUBLIC_URL + "/media/clarity_language-line.svg"} className='me-2' alt="" />
                </div>
                <div className="card-body px-6">
                    <p>{language}</p>
                </div>
              </div>
            </div>

          </div>
          </div>

        </div>
      </div>
      
      {loading ? ( // Conditionally render loader or TravelResult based on loading state
        <div className="loader d-flex justify-content-center">
        <img src={process.env.PUBLIC_URL + "/media/loader.gif"} className='h-sm-400px my-10' alt="" />
      </div>
      ) : (
        <>
          {days.map((day, index) => (
            <TravelResult
              key={index}
              data={index + 1}
              myTest={day}
              division={day.split(/\b(Morning|Afternoon|Evening)\b/).filter((segment) => segment.trim() !== '')}
              day={noOfDays[index]}
              heading={headings[index]}
            />
          ))}
        </>
      )}
      <hr className='mx-3'/>
      <Rating />
      <Footer />


    </>
  )
}
