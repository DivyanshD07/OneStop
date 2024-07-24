import React from "react";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaGoogle, FaLinkedin, FaLock, FaRegEnvelope } from 'react-icons/fa6';
import { FaFacebookF } from "react-icons/fa";
// import { useRouter } from "next/router";
// import Link from "next/link";


const LoginSignup = () => {
  // const [activeService, setActiveService] = useState(false);

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const router = useRouter();

  // const handleLogin = () => {
  //   return(
  //     <div>Fakiu!</div>
  //   )
  // }


  const [showSignupForm, setShowSignupForm] = useState(false);

  const showSignup = () => {
    setShowSignupForm(true);
  };

  return (
    <main className="flex items-center justify-center w-full flex-1 px-20 text-center bg-black">
      <div className="bg-white rounded-2xl shadow-2xl flex ml-1/3 max-w-4xl flex-row">
        <div className="flex flex-col justify-center items-center p-5 hoveranimationsignin" style={{ width: showSignupForm ? 'w-3/5' : 'w-full' }}>
          <p className="text-black font-bold md:text-2xl mb-2">Sign in to Account</p>
          <div className="border-2 w-10 border-blue-700 inline-block mb-2"></div>
          <div className="flex flex-row justify-center items-centre mb-3 mt-2">
            <a href="#" className="border-2 border-gray-800 rounded-full p-2 mx-2">
              <FaFacebookF className="text-black" />
            </a>
            <a href="#" className="border-2 border-gray-800 rounded-full p-2 mx-2">
              <FaGoogle className="text-black" />
            </a>
            <a href="#" className="border-2 border-gray-800 rounded-full p-2 mx-2">
              <FaLinkedin className="text-black" />
            </a>
          </div>
          <p className="text-black opacity-50 mb-1">or use your email account</p>
          <div className="flex flex-col gap-2 justify-center items-center p-1">
            <div className="bg-gray-100 w-full p-2 flex items-center border-0 rounded-md">
              <FaRegEnvelope className="text-gray-400 m-2" /> <input
                type="text"
                placeholder="Username"
                className="bg-gray-100 outline-none flex-1 text-black"
              // value={username}
              // onChange={(e) => {
              //   setUsername(e.target.value);
              // }}
              /></div>
            <div className="bg-gray-100 w-full p-2 flex items-center border-0 rounded-md">
              <FaLock className="text-gray-400 m-2" /> <input
                type="password"
                placeholder="Password"
                className="bg-gray-100 outline-none flex-1 text-black"
              // value={username}
              // onChange={(e) => {
              //   setUsername(e.target.value);
              // }}
              /></div>
            {/* <button onClick={handleLogin}>Login</button>*/}
            <button className="text-black border-2 py-1 px-5 rounded-2xl mt-1">Sign in</button>
          </div>
        </div>
        {showSignupForm && (
          <div className="w-2/5 bg-[#5663ff] rounded-tr-2xl rounded-br-2xl py-36 px-12 flex flex-col items-center justify-center hoverAnimationsignup" style={{ width: 'w-2/5' }}>
            <h2 className="text-white font-bold text-3xl mb-2">Create Your Account!</h2>
            <button className="flex flex-col gap-4 border-2 rounded-full px-2 py-1">Sign up</button>
          </div>
        )}
      </div>
    </main>
  )
}

export default LoginSignup;