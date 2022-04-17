import React from 'react'
import { images } from '../assets/images';
import { Carousel } from '../components/Carousel';

export const HomePage = () => {
  return (
    <div className='container mt-5'>
      <h1>Home</h1>
      <hr />


      <div className="row">

        <Carousel images={images} />

      </div>

    </div>
  )
}
