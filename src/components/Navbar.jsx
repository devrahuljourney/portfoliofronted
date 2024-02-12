import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { MdContactPhone } from "react-icons/md";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [active,setActive] = useState("#home");
    
    return (
      <div className='flex    justify-center items-center w-[100%] ' >
          <div className=' fixed z-40 group  bottom-0 bg-transparent backdrop-blur-3xl px-10 p-3 rounded-full flex gap-2 w-[100%] md:w-[30%] justify-between items-center ' >
           <a onClick={() => setActive("#home")} className={` w-[50px] h-[50px] hover:bg-slate-400 hover:text-white rounded-full ${active === '#home' && "activeclass" }  flex flex-col text-[11px] items-center justify-center`} href='#home' > <FaHome style={{width:"20px", height:"20px"}} /> Home </a>
           <a onClick={() => setActive("#about")} className={`  w-[50px] h-[50px] hover:bg-slate-400 hover:text-white rounded-full ${active === '#about' && "activeclass" }  flex flex-col text-[11px] items-center justify-center`} href='#about' > <FaRegUser style={{width:"20px", height:"20px"}}  /> About </a>
           <a onClick={() => setActive("#coding")} className={`  w-[50px] h-[50px] hover:bg-slate-400 hover:text-white rounded-full ${active === '#coding' && "activeclass" }  flex flex-col text-[11px] items-center justify-center`} href='#coding' > <FaCode style={{width:"20px", height:"20px"}}  /> Coding </a>
           <a onClick={() => setActive("#projects")} className={`  w-[50px] h-[50px] hover:bg-slate-400 hover:text-white rounded-full ${active === '#projects' && "activeclass" }  flex flex-col text-[11px] items-center justify-center`} href='#project' > <GoProject style={{width:"20px", height:"20px"}}  /> Projects </a>
           <a onClick={() => setActive("#contact")} className={`  w-[50px] h-[50px] hover:bg-slate-400 hover:text-white rounded-full ${active === '#contact' && "activeclass" }  flex flex-col text-[11px] items-center justify-center`} href='#contact' > <MdContactPhone style={{width:"20px", height:"20px"}}  /> Contact </a>

          </div>
      </div>
    )
  }