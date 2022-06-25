import React from 'react';
import ReactDOM from 'react-dom/client';
import image from '../image/positive.jpg'
import '../css/home.css'


function Home() {
  return (
    <>
       {/* <Findgames /> 
     <Action />
       <Discover />
       <Love /> 
     <Venue />
        <Ready />   */}
        <div className='row'>
        <div className='col-1 col-xl-4 col-lg-2'></div>
  <div className='col-10 col-xl-4 col-lg-10 image'> <img src={image} /></div>
  <div className='col-1 col-xl-2'></div>
  </div>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
export default Home;