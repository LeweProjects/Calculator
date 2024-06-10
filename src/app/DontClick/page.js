<<<<<<< HEAD
import React from 'react'

const page = () => {
  return (
    <div>
        <img className='w-full h-[1000px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk05x2D98ZVOlokR1oAHwfFhjjqwHSfVEkcioA_v9jwg&s" alt="" />
=======
"use client";
import React, { useState } from 'react'

const DontClick = () => {
    const [imahe, setimahe] = useState(false);
    function pangalanngfunction (){
        setimahe(true)
    }
  return (
    <div>
        <div className="flex justify-center">
            <a href="/DontClick/bobo" className='buts bg-black text-white p-3 rounded-xl'>DON'T CLICK</a>
        </div>
>>>>>>> 43490ab87e08e700b007ff706e6d5fcf712ea249
    </div>
  )
}

<<<<<<< HEAD
export default page
=======
export default DontClick
>>>>>>> 43490ab87e08e700b007ff706e6d5fcf712ea249
