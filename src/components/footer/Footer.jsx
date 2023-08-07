import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className = "h-50 text-sm flex items-center justify-between">
      <div>©2023. All rights reserved.</div>
     
      <div className='flex items-center gap-2'>
           <Image width = {15} height = {15} src = "/1.png" alt='Test Dev' className='opacity-60 cursor-pointer'/>
           <Image width = {15} height = {15} src = "/2.png" alt='Test Dev' className='opacity-60 cursor-pointer'/>
           <Image width = {15} height = {15} src = "/3.png" alt='Test Dev' className='opacity-60 cursor-pointer'/>
           <Image width = {15} height = {15} src = "/4.png" alt='Test Dev' className='opacity-60 cursor-pointer'/>
      </div>
      
    </div>
  )
}

export default Footer
