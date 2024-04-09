"use client";
import React, { useState } from "react";

export default function Home() {
  return (
    <div className="flex justify-center h-screen">
      <a
        href="/DontClick/bobo"
        className="flex justify-center items-center text-8xl
         buts bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLM3WNVyIPXbn-uGQOK6LWZ8M2w97bInBcuhRFCuYQog&s')] text-red-700
         font-bold w-full h-full border-8 border-red-700 rounded-[13%]"
      >
        DON'T CLICK
      </a>
    </div>
  );
}
