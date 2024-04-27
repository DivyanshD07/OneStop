import Link from "next/link";
import React from "react";

const myNavbar = () => {

  return (
    <div className="flex flex-row justify-around items-center py-4 mt-5 mb-5">
      <Link href="/"><h1 className="text-4xl font-bold mb-5">OneStop</h1></Link>
      <div className="flex flex-row gap-4 items-center justify-center">
      <div className="flex flex-row space-x-8">SMVDU</div>
      <Link href="/login" className="border-2 rounded-xl px-6 py-1">Login</Link>
      
      </div>
    </div>
  )
}

export default myNavbar