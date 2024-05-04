import Link from "next/link";
import React from "react";

const myNavbar = () => {

  return (
    <div className="flex flex-row justify-around items-center py-4 mt-5 mb-5">
      <Link href="/"><h1 className="text-4xl font-bold mb-5">OneStop</h1></Link>
      <div className="flex flex-row gap-4 items-center justify-center">
      <div className="flex flex-row justify-between mr-8 gap-6">
        <div className="bg-gray-800 hover:bg-gray-700 flex items-center border-0 rounded-xl px-3 py-2">
          <div className="mr-2">
            <img src="/assets/login.png" width={20} height={20} alt="login" />
          </div>
          <Link href="/login">Login</Link>
        </div>
        <div className="bg-gray-800 hover:bg-gray-700 flex items-center border-0 rounded-xl px-3 py-2">
          <div className="mr-2">
            <img src="/assets/user.png" width={20} height={20} alt="signup" />
          </div>
          <Link href="/signup">SignUp</Link>
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default myNavbar