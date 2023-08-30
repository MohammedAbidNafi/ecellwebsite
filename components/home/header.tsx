/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import elnwt from '../../public/assets/ewnlt.png'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='relative'>
      <div className=''>
      <img src="../../assets/banner2.png" alt="" className='w-full lg:h-screen absolute -z-10 '/>
      </div>
    <div className='flex justify-center flex-col lg:flex-row lg:justify-around pt-5 mb-24 header  '>
        <div>
            <Image src={elnwt} alt=""  className='h-[64px] w-[64px] lg:w-full ' height={200} width={500}/>
        </div>
        <div className='  '>
          <ul className='flex items-center justify-center px-3 mt-5 '>
            <li className='mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline'><Link href={''}>Events</Link></li>
            <li className='mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline'><Link href={''}>Team</Link></li>
            <li className='mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline'><Link href={''}>Gallery</Link></li>
            <li className='mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline'><Link href={''}>Memberships</Link></li>
          </ul>
        </div>
    </div>
    </div>
  )
}

export default Header


// bg-clip-text text-transparent bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4]