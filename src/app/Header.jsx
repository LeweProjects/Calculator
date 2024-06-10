import React from "react";
import Link from 'next/link'

const Header = () => {
  return (
    <div className="bg-red-900 w-full text-white p-4 flex justify-between top-0 sticky">
      {/* <h1 className="text-[1px]">Header</h1> */}
      <ul className="flex space-x-3 text-sm items-center">
       <Link href="/">Home</Link>
       <Link href="/About">Warning</Link>
       <Link className="text-[0.1px]" href="/Calculator">Calculator</Link>
       <Link href="/DontClick">Don't Click</Link>
       <Link href="/SB19">SB19</Link>
      </ul>
    </div>
  );
};

export default Header;
