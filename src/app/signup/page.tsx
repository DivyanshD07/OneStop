"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaFacebook, FaGoogle, FaLinkedin, FaLock, FaRegEnvelope } from 'react-icons/fa6';
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
// import axios from 'axios';
import { useRouter } from 'next/navigation'; 

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [showActivateMessage, setShowActivateMessage] = useState(false);
  const [passwordValid, setPasswordValid] = useState(true); // State to track password validity
  const router = useRouter();

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  //   // Check password validity on every change
  //   setPasswordValid(checkPasswordValidity(value));
  // };

  // const checkPasswordValidity = (password: string) => {
  //   // Password should contain at least one special character, one capital letter, one small letter, and one number
  //   const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
  //   return regex.test(password);
  // };

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!passwordValid) {
  //     alert('Password should contain at least one special character, one capital letter, one small letter, and one number.');
  //     return;
  //   }
  //   try {
  //     const response = await axios.post('http://localhost:8080/api/v1/registration', formData);
  //     console.log('Signup successful:', response.data);
  //     setFormData({
  //       firstName: '',
  //       lastName: '',
  //       email: '',
  //       password: ''
  //     });
  //     setShowActivateMessage(true);
  //     setTimeout(() => {
  //       alert('Account created successfully. Please activate your account.');
  //       router.push('/login');
  //     }, 2000);
  //   } catch (error) {
  //     alert('Error occurred while creating an account. Please try again.');
  //     console.error('Signup failed:', error);
  //   }
  // };

  return (
    <main className="flex items-center justify-center w-full flex-1 px-20 text-center bg-black">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl flex-row">
        <div className="flex flex-col w-3/5 justify-center items-center p-5 hoveranimationsignin">
          <p className="text-black font-bold md:text-2xl mb-2">Create your Account</p>
          <div className="border-2 w-10 border-blue-700 inline-block mb-2"></div>
          <div className="flex flex-col gap-2 justify-center items-center p-1">
            {showActivateMessage && <p>Activate your account</p>}
            <form>
              <div className='flex mb-2 flex-row gap-4 justify-center items-center'>
                <div>
                  <input type="text" id="firstName" name="firstName" placeholder='firstname' required className='bg-dark-grey border-b border-gray-200 focus:outline-none focus:border-blue-600 w-full px-4 py-2 text-black'  />
                </div>
                <div>
                  <input type="text" id="lastName" name="lastName" placeholder='lastname' required className='bg-dark-grey border-b border-gray-200 focus:outline-none focus:border-blue-600 w-full px-4 py-2 text-black'/>
                </div>
              </div>
              <div className='mb-2'>
                <input type="email" id="email" name="email" placeholder='email' required className='bg-dark-grey border-b border-gray-200 focus:outline-none focus:border-blue-600 w-full px-4 py-2 text-black' />
              </div>
              <div>
                <input type="password" id="password" name="password" placeholder='password' required className={`bg-dark-grey border-b border-gray-200 focus:outline-none focus:border-blue-600 w-full px-4 py-2 text-black ${!passwordValid && 'border-red-500'}`}  />
                {!passwordValid && <p className="text-red-500 w-full text-sm">Password should contain at least one special character, one capital letter, one small letter, and one number.</p>}
              </div>
              <button type="submit" className="text-black border-2  py-1 px-5 hover:bg-blue-600 hover:text-white rounded-2xl mt-4">Sign up</button>
            </form>
          </div>
        </div>
        <div className="w-2/5 bg-[#5663ff] rounded-tr-2xl rounded-br-2xl py-36 px-12 flex flex-col items-center justify-center hoverAnimationsignup">
          <h2 className="text-white font-bold text-3xl mb-2">Already have an Account!</h2>
          <button className="flex flex-col bg-blue-400 text-white gap-4 rounded-full hover:bg-white hover:text-black px-3 py-1"><Link href="/login" >Sign in</Link></button>
        </div>
      </div>
    </main>
  );
};

export default SignUpForm;
