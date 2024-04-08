import React from "react";
import Link from 'next/link'

const Header = () => {
  return (
    <div className="bg-red-900 w-full text-white p-4 flex justify-between top-0 sticky">
      <h1>Header</h1>
      <ul className="flex space-x-3 text-sm items-center">
       <Link href="/">Home</Link>
       <Link href="/About">About</Link>
       <Link href="/Calculator">Calculator</Link>
       <Link href="/Login">Login</Link>
      </ul>
    </div>
  );
};

export default Header;
