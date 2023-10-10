import React, { useState, useEffect } from "react";
import "./home.css"
const HomePart3 = () => {
  const images = [
    "https://avegenhealth.com/wp-content/uploads/2022/09/1-2.png",
    "https://avegenhealth.com/wp-content/uploads/2022/09/1-1.png",
    "https://avegenhealth.com/wp-content/uploads/2022/09/2-2.png",
    "https://avegenhealth.com/wp-content/uploads/2022/09/3-4.png",
    "https://avegenhealth.com/wp-content/uploads/2022/09/2-1.png",
    "https://avegenhealth.com/wp-content/uploads/2022/09/1-1.png",
    "https://avegenhealth.com/wp-content/uploads/2022/09/2-2.png",
    "https://avegenhealth.com/wp-content/uploads/2022/09/3-4.png",
    "https://avegenhealth.com/wp-content/uploads/2022/09/2-1.png",
  ];

  const questions = [
    "Will it educate them on their condition, using the latest evidence?",
    "Will it change their behaviors through gamified, gated content?",
    "Will it capture both active and passive data to generate insights?",
    "Will it make their lives simpler by digitizing their interactions with clinicians?",
    "Will it log their symptoms and let them track their progress in real-time?",
    "Will it interface with their electronic medical record for coordinated care?",
    "Will it support them, both physically and mentally?",
    "Will it go further and treat their condition?",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentQuestionIndex(
        (prevIndex) => (prevIndex + 1) % questions.length
      );
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleQuestionClick = (index) => {
    setCurrentImageIndex(index);
    setCurrentQuestionIndex(index);
  };

  return (
    <div className="container-fluid part-3">
      <div className="container pt-5 pb-5">
        <header className="text-center part-3-header px-lg-1 pt-5">What will HealthMachine™ build for your patients? </header>
        <div className="row pt-5">
          <div className="col-md-6 col-sm-12 slider-img order-md-2 order-lg-2">
            <img
              className="img-fluid"
              src={images[currentImageIndex]}
              alt="slider-img"
            />
          </div>

          <div className="col-md-6 pt-5 order-md-1 order-lg-1">
            <div className="pt-lg-4">
              {questions.map((question, index) => (
                <div
                  key={index}
                  onClick={() => handleQuestionClick(index)}
                  className={`questions-items ${index === currentQuestionIndex ? "active" : "inactive"
                    }`}
                >
                  <span className="part-3-title">{question}</span>
                  {index === currentQuestionIndex && (
                    <div className="progress-bar"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePart3;