"use client";
import React, {useState} from 'react'

const warning = () => {
  return (
    <div className="h-screen">
        {/* <img className='w-full h-[1000px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk05x2D98ZVOlokR1oAHwfFhjjqwHSfVEkcioA_v9jwg&s" alt="" /> */}
    <div className="h-screen flex justify-center items-center">
    <a href="/About/loobwarning" className='flex justify-center items-center bg-black text-red-500 p-3 w-[500px] h-[100px] rounded-full'>WARNING!!!</a>
    </div>
    </div>
  )
}

export default warning