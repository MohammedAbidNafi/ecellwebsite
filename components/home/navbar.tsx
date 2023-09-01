import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Core from '../team/core';
import GB from '../team/gb';

const Navbar = () => {
  return (
    <div className='flex ml-20 items-center'>
        {/* <div className='h-10 bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] opacity-25 flex items-center justify-center  backdrop-filter backdrop-blur-2xl'>
            <div className=''>
            <InstagramIcon  className='text-black mx-5 h-7 w-7'/>
            <FacebookIcon className='text-black mx-3 h-7 w-7 my-3' />
            <TwitterIcon className='text-black  mx-3 h-7 w-7 my-3' />
            <LinkedInIcon className='text-black  mx-3 h-7 w-7 my-3' />
            </div>
        </div> */}

        <div className='w-[70%] '>
          <div className='text-[40px] font-semibold header -mb-8 opacity-100'> Welcome to </div>
          
          <div className='text-[80px] font-bold header bg-clip-text text-transparent bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] opacity-100 '>Entrepreneurship Cell</div>
          
          <div className='text-[70px] font-bold header -mt-8 bg-clip-text text-transparent bg-gradient-to-r from-[#2c6ca4] via-[#eb443b] to-[#eb3c3b] opacity-100'>MJCET</div>
        </div>

        
    </div>
  )
}

export default Navbar