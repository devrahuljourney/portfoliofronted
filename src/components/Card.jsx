import React from 'react'

export default function Card(props) {
  return (
    <div className=' hover:bg-[#7581B1] bg-[#7589A3] md:w-[350px] w-[200px] h-[150px] md:h-[200px] md:text-[22px] text-[18px] flex flex-col justify-center items-center gap-4 rounded-3xl card ' >
        <p className=' font-bold text-white ' > {props.data.title} </p>
        <p className=' md:text-[20px] text-[16px] text-gray-700 font-bold ' > {props.data.description} </p>
        <a className=' underline text-blue-600 ' href={props.data.link} >View Profile</a>
    </div>
  )
}
