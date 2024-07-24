"use client";

import React, { useState } from "react";
import Link from "next/link";
// import axios from "axios";
import { FaFacebook, FaGoogle, FaLinkedin, FaLock, FaRegEnvelope } from 'react-icons/fa6';
import { FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // const handleLogin = async () => {
  //   try {
  //     // Make API request to login endpoint
  //     const response = await axios.post('http://localhost:8080/api/v1/loging', {
  //       email,
  //       password
  //     });
  //     // If login successful, store JWT token in local storage
  //     localStorage.setItem('token', response.data.jwt);
  //     // Redirect user to desired page, e.g., dashboard
  //     router.push('/DashBoard');
  //   } catch (error) {
  //     alert('Login failed, try again');
  //     console.error('Login failed:', error);
  //     // Handle login failure, show error message, etc.
  //   }
  // };

  return (
    <main className="flex items-center justify-center w-full flex-1 px-20 text-center bg-black">
      <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl flex-row">
        <div className="flex flex-col w-3/5 justify-center items-center p-5 hoveranimationsignin">
          <p className="text-black font-bold md:text-2xl mb-2">Sign in to Account</p>
          <div className="border-2 w-10 border-blue-700 inline-block mb-2"></div>
          {/* <div className="flex flex-row justify-center items-centre mb-3 mt-2">
            
          </div> */}
          <div className="flex flex-col gap-2 justify-center items-center p-1">
            <div className="bg-gray-100 w-full p-2 flex items-center border-0 rounded-md">
              <FaRegEnvelope className="text-gray-400 m-2" />
              <input
                type="email"
                placeholder="email"
                className="bg-gray-100 outline-none flex-1 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="bg-gray-100 w-full p-2 flex items-center border-0 rounded-md">
              <FaLock className="text-gray-400 m-2" />
              <input
                type="password"
                placeholder="Password"
                className="bg-gray-100 outline-none flex-1 text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <button className="text-black border-2 py-1 px-5 hover:bg-blue-600 hover:text-white rounded-2xl mt-1">
              Sign in
            </button>
          </div>
        </div>
        <div className="w-2/5 bg-[#5663ff] rounded-tr-2xl rounded-br-2xl py-36 px-12 flex flex-col items-center justify-center hoverAnimationsignup">
          <h2 className="text-white font-bold text-3xl mb-3">Create Your Account!</h2>
          <button className="flex flex-col bg-blue-400 text-white gap-4 rounded-full hover:bg-white hover:text-black px-3 py-1"><Link href="/signup" >Sign up</Link></button>
        </div>
      </div>
    </main>
  );
}

export default Login;
