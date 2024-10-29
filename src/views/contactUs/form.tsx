import { TextField } from '@mui/material'
import React from 'react'

const Form = () => {
  return (
    <div className='flex justify-center pt-10'>
      <div className='w-[38rem] shadow-md shadow-gray-400 py-10 px-8'>
        <h1 className='text-bglburegistrationbanner text-xl font-semibold text-center'>Get In Touch With Us</h1>

        <div className='flex space-x-3 mt-5 py-3'>
        <TextField placeholder='Your Name' size='small' className='w-full' />
        <TextField placeholder='Your Email' size='small' className='w-full' />
        </div>
        <div className='flex flex-col space-y-3'>
        <TextField placeholder='Your Phone' size='small' />
        <TextField placeholder='Subject' size='small' />
        <TextField placeholder='Your Message' size='small' />
        </div>

        <button className='bg-bglburegistrationbanner mt-8 px-12 py-3 text-white rounded-full'>Submit</button>
      </div>
    </div>
  )
}

export default Form