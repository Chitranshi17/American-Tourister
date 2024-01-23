import React from 'react'
import Slider from "react-slick";


const CardSlider = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <>
    <div className="cardSlider">
      <div className="midCardSlider">
        <Slider {...settings} className='d-flex align-items-center justify-content-center'>
          <div  className='Cards w-100'>
            <h3>1</h3>
          </div>
          <div  className='Cards'>
            <h3>2</h3>
          </div>
          <div  className='Cards'>
            <h3>3</h3>
          </div>
          <div  className='Cards'>
            <h3>4</h3>
          </div>
        </Slider>
      </div>
    </div>
    </>
  )
}

export default CardSlider
