import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./home.css"
const HomePart2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className='container-fluid part-2 pb-5'>
      <div className='container-fluid mt-5 pt-5 pb-5 text-center' id="slider-1">
        <Slider {...settings} className='pt-5'>
          <div className='d-flex flex-column justify-content-center align-items-center pb-5'>
            <img
              width="213"
              height="198"
              alt="regulation img"
              className='pb-5'
              src="https://avegenhealth.com/wp-content/uploads/2022/09/every-regulation.svg"
            />
            <h3 className='pt-2 part-2-header-1'>Every regulation adhered to</h3>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <img
              width="213"
              height="198"
              alt="every-product.svg"
              className='pb-5'
              src="https://avegenhealth.com/wp-content/uploads/2022/09/every-product.svg"
            />
            <h3 className='pt-2 part-2-header-1'>Every product built</h3>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center pb-5'>
            <img
              width="213"
              height="198"
              alt="every-product-module-reusable.svg"
              className='pb-5'
              src="https://avegenhealth.com/wp-content/uploads/2022/09/every-product-module-reusable.svg"
            />
            <h3 className='pt-2 part-2-header-1'>Every reusable module deployed</h3>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center pb-5'>
            <img
              width="213"
              height="198"
              alt="every-patient.svg"
              className='pb-5'
              src="https://avegenhealth.com/wp-content/uploads/2022/09/every-patient.svg"
            />
            <h3 className='pt-2 part-2-header-1'></h3>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center pb-5'>
            <img
              width="213"
              height="198"
              alt="every-market"
              className='pb-5'
              src="https://avegenhealth.com/wp-content/uploads/2022/09/every-market.svg"
            />
            <h3 className='pt-2 part-2-header-1'>Every market entered</h3>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center pb-5'>
            <img
              width="213"
              height="198"
              alt="every-indication"
              className='pb-5'
              src="https://avegenhealth.com/wp-content/uploads/2022/09/every-indication.svg"
            />
            <h3 className='pt-2 part-2-header-1 '>Every indication targeted</h3>
          </div>
        </Slider>
        <h3 className='text-center part-2-header' style={{ marginTop: "-50px" }}>makes HealthMachine™ safer, faster and more cost effective</h3>
        <p className=' col-lg-7 text-center  mx-auto' >This is the power of using a platform. A platform that learns and grows.
          Today it serves more than <b>1 million patients</b> and builds on their daily interactions.</p>
      </div>
    </div>
  )
}

export default HomePart2