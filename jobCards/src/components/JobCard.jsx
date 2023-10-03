import React from 'react';
import Frame1 from '../assets/Frame.png';

const JobCard = ({name, nums, icon, bgGradient, bgPosition}) => {
  return (
    <div className="bg-white w-[18rem] py-10 px-7 flex flex-col justify-center items-center gap-8 rounded-2xl shadow-cardShadow hover:cursor-pointer">
        <div className='flex items-center gap-4'>
            <div className={`flex p-2 items-start gap-[0.625rem] rounded-[0.875rem] ${bgGradient}`}>
                <img src={ icon} alt="Design" />
            </div>
            <h2 className='text-textColor leading-normal text-xl font-Poppins'>{ name }</h2>
        </div>
        <div className={`flex py-2 px-3 justify-center items-center gap-[0.625rem] self-stretch rounded-lg border border-solid border-[#C2C5E2] ${bgPosition ? bgPosition + " text-[#fff]" : "bg-white text-textColor"}`}>
            <h2 className='font-Poppins leading-normal font-medium text-[1rem]'><span>{nums}</span> open positions</h2>
        </div>
        
    </div>
  )
}

export default JobCard