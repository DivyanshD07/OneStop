import React, { useState } from 'react';
import { FaFacebook, FaGoogle, FaLinkedin, FaLock, FaRegEnvelope } from 'react-icons/fa6';
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const SignUpForm = () => {
  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: ''
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   setFormData({
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     password: ''
  //   });
  // };

  return (
    <main className="flex items-center justify-center w-full flex-1 px-20 text-center bg-black">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl flex-row">
        <div className="flex flex-col w-3/5 justify-center items-center p-5 hoveranimationsignin">
          <p className="text-black font-bold md:text-2xl mb-2">Create you Account</p>
          <div className="border-2 w-10 border-blue-700 inline-block mb-2"></div>
          <div className="flex flex-col gap-2 justify-center items-center p-1">
            <form>
              <div className='flex mb-2 flex-row gap-4 justify-center items-center'>
                <div>
                  <input type="text" id="firstName" name="firstName" placeholder='firstname' required className='bg-dark-grey border-b border-gray-200 focus:outline-none focus:border-blue-600 w-full px-4 py-2 text-black' />
                </div>
                <div>
                  <input type="text" id="lastName" name="lastName" placeholder='lastname' required className='bg-dark-grey border-b border-gray-200 focus:outline-none focus:border-blue-600 w-full px-4 py-2 text-black' />
                </div>
              </div>
              <div className='mb-2'>
                <input type="email" id="email" name="email" placeholder='email' required className='bg-dark-grey border-b border-gray-200 focus:outline-none focus:border-blue-600 w-full px-4 py-2 text-black' />
              </div>
              <div>
                <input type="password" id="password" name="password" placeholder='password' required className='bg-dark-grey border-b border-gray-200 focus:outline-none focus:border-blue-600 w-full px-4 py-2 text-black' />
              </div>
            </form>
            {/* <button onClick={handleLogin}>Login</button>*/}
            <button className="text-black border-2 py-1 px-5 rounded-2xl mt-1">Sign up</button>
          </div>
        </div>
        <div className="w-2/5 bg-[#5663ff] rounded-tr-2xl rounded-br-2xl py-36 px-12 flex flex-col items-center justify-center hoverAnimationsignup">
          <h2 className="text-white font-bold text-3xl mb-2">Already have an Account!</h2>
          <Link href="/login" className="flex flex-col gap-4 border-2 rounded-full px-2 py-1">Sign in</Link>
        </div>
      </div>
    </main>
  );
};

export default SignUpForm;
