import React from 'react'

const SlideBanner = () => {
  return (
   <>
    <div className='slideBannerSec'>
       <div className="slideBanner">

       </div>
    </div>
    <div className="slideFormSec">
      <div className="slideForm">
        <div className="formDesign">
          <h2>Get the latest news from American Tourister.</h2>
          <form action="">
            <input type="text" placeholder ='*Your Email Address' style={{color : 'white'}} />
            <button className='btn btn-light text-dark'>Submit</button>
          </form>
        </div>
      </div>
    </div>
   </>
  )
}

export default SlideBanner
