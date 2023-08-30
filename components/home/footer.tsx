import Image from 'next/image'
import React from 'react'
import elwt from '../../public/assets/elwt.png'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className='flex justify-center bg-black relative mt-[210px] pt-10 pb-10'>
        <div className='lg:w-[65%] flex justify-between'>
            <div>
                <div>
                <Image src={elwt} alt=""  className='h-[64px] w-[130px] ' height={200} width={500}/>
                </div>
                <div>
                    <div className='mt-4 flex  items-center'>
                        <div>
                        <PhoneInTalkIcon />
                        </div>
                        <div className='font-semibold ml-[4px]'> - 9515130124</div>
                    </div>
                    <div className='mt-2 flex  items-center'>
                        <div>
                        <PhoneInTalkIcon />
                        </div>
                        <div className='font-semibold ml-[4px]'> - 9515130124</div>
                    </div>
                    <div className='mt-2 flex  items-center'>
                        <div>
                        <EmailIcon />
                        </div>
                        <div className='font-semibold ml-[4px]'> - documentationecell@gmail.com</div>
                    </div>
               
                </div>
                <div className='break-all text-sm text-gray-400 font-semibold mt-4'>
                    Beside Veg Canteen, MJCET, Mount Pleasant,
                    <div></div>  8-2-249, 
                    Road No. 3, Banjara Hills, <div></div>Hyderabad, Telangana 500034
                </div>
            </div>
            <div>
                <div className='h-[250px] w-[430px] bg-black overflow-hidden rounded-lg'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.3237499654497!2d78.4400578444275!3d17.4286963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9160e8ec3785%3A0x3f188f2fbbd1f4be!2sMJCET%20juice%20Center!5e0!3m2!1sen!2sin!4v1693321894208!5m2!1sen!2sin"  
                className='border-none h-[250px] w-[430px] opacity-75'  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer