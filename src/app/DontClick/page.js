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
    </div>
  )
}

export default DontClick