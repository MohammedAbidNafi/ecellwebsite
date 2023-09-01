import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/home/header'
import Banner from '@/components/home/banner'
import Navbar from '@/components/home/navbar'
import Footer from '@/components/home/footer'
import Core from '@/components/team/core'
import GB from '@/components/team/gb'

const inter = Inter({ subsets: ['latin'] })

export default function Team() {
  return (
    <div className='bg-[#262626]'>

        
      
        <GB />
        <Core />
      
    </div>
  )
}
