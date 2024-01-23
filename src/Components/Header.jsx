import React from 'react'

import CloseIcon from '@mui/icons-material/Close';


const Header = () => {
  return (
    <>
    <div className="header w-100 ">
      <div className="headerHeading">
        <h6 className='d-flex align-items-center justify-content-center'>Free delivery on all orders in india</h6>
      </div>
      <div className="crossIcon">
        <div className="cross text-light">
          {<CloseIcon fontSize='large'/>}
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
