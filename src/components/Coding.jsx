import React, { useEffect, useState } from 'react'
import { getCoding } from '../services/operations/Coding';
import Card from './Card';

export default function Coding() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getCoding(setLoading);
                setData(result);
                console.log("profile data ", result);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchData();
    }, []);
  return (
    <div id='coding' className=' w-[100%] p-5 flex flex-col justify-center items-center  ' >
        <div className='flex flex-col justify-center items-center relative  '>
                <p className='z-10 md:text-[40px] text-[32px] font-bold'>Coding Profiles</p>
                <div className='absolute md:translate-x-[120px] md:-translate-y-[10px] translate-x-[90px] -translate-y-[10px] w-[50px] h-[40px] bg-[#DCB6AB]'></div>
        </div>
        <div className=' md:w-[80%] w-[100%] md:mt-[80px] mt-[50px] gap-6 flex md:flex-row flex-col justify-evenly items-center flex-wrap '>
            {
                data.map((data,index) => (
                    <div className=' ' >
                      <Card data={data} key={index} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}
