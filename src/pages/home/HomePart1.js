import React from 'react'
import "./home.css"
function HomePart1() {
    return (
        <div className='container-fluid'>
            <header className='part-1-header pt-5 col-lg-9 text-center  mx-auto'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</header>

            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6 col-lg-3 mt-4'>
                        <div className='card rounded p-3 mt-3 card-border'>
                            <img src="https://avegenhealth.com/wp-content/uploads/2022/09/evidence-backed.png" alt="evidence-backed" className='w-50 mx-auto' />
                            <p className='text-center card-1-para mt-2'>Evidence-backed</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 mt-4'>
                        <div className='card rounded p-3 mt-3 card-border'>
                            <img src="https://avegenhealth.com/wp-content/uploads/2022/09/scalable.png" alt="scalable" className='w-50 mx-auto' />
                            <p className='text-center card-1-para mt-2'>Scalable</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 mt-4'>
                        <div className='card rounded p-3 mt-3 card-border'>
                            <img src="https://avegenhealth.com/wp-content/uploads/2022/09/secure-2.png" alt="secure" className='w-50 mx-auto' />
                            <p className='text-center card-1-para mt-2'>Secure</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePart1