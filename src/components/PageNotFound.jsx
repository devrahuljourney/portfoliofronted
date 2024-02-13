import React from 'react'
import page from '../assests/4521623_2392489.svg'
import { NavLink } from 'react-router-dom'
export default function PageNotFound() {
  return (
    <div className='flex flex-col justify-center items-center ' >
          <img width={300} height={300} src={page} alt='pagenotfound' />
          <NavLink className=' text-blue-500 ' to='/' >Go Back</NavLink>
    </div>
  )
}
