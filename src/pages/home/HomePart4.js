import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./home.css"
const HomePart4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    arrows: false,
    afterChange: (current) => {
      setCurrentSlide(current);
    },
  });
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 984 && windowWidth >= 800) {
        setSettings({ ...settings, vertical: false, verticalSwiping: false, slidesToShow: 2 });
      } else if (windowWidth < 800 && windowWidth >= 260) {
        setSettings({ ...settings, vertical: false, verticalSwiping: false, slidesToShow: 1 });
      } else {
        setSettings({ ...settings, vertical: true, verticalSwiping: true, slidesToShow: 2 });
      }
    };

    handleResize();

  }, [settings]);

  return (
    <div className='container-fluid part-4 pb-5'>
      <div className='row pt-5'>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <h1 className="col-md-7 col-lg-6 text-center part-4-header mt-5 mt-md-0">What Our Clients Say</h1>
        </div>
        <div className='col-lg-5 pb-5 pt-5' id="slider-2">
          <Slider {...settings}>
            <div className={`slide ${currentSlide === 0 ? 'active' : ''
              }`}>
              <div className=' pb-5 mt-4 '>
                <div className='px-4'>
                  <h3 className='pt-2 part-4-header-1'> 1 Every product built</h3>
                  <h4>Major pharmaceutical company</h4>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>

              </div>
            </div>
            <div className={`slide ${currentSlide === 1 ? 'active' : ''
              }`}>
              <div className=' pb-5 mt-4 '>
                <div className='px-4'>
                  <h3 className='pt-2 part-4-header-1'> 2 Every product built</h3>
                  <h6>Major pharmaceutical company</h6>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>

              </div>
            </div>
            <div className={`slide ${currentSlide === 2 ? 'active' : ''
              }`}>
              <div className=' pb-5 mt-4 '>
                <div className='px-4'>
                  <h3 className='pt-2 part-4-header-1'> 3 Every product built</h3>
                  <h6>Major pharmaceutical company</h6>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>

              </div>
            </div>
          </Slider>

        </div>
      </div>
    </div>
  )
}

export default HomePart4