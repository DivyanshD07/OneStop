import React, { useState } from 'react';

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
    <div className='flex flex-col justify-center align-middle items-center w-full h-full gap-4'>
      <div className='flex flex-col justify-center align-middle items-center w-2/3 h-full bg-white rounded-xl pt-10 pb-8 gap-4'>
        <form>
          <div className='flex mb-2 flex-row gap-4 justify-center items-center'>
            <div>
              <input type="text" id="firstName" name="firstName" placeholder='firstname' required className='bg-dark-grey border-b border-gray-200 focus:outline-none focus:border-black w-full px-4 py-2 text-black' />
            </div>
            <div>
              <input type="text" id="lastName" name="lastName" placeholder='lastname' required className='bg-dark-grey border-b border-gray-200 focus:outline-none focus:border-black w-full px-4 py-2 text-black' />
            </div>
          </div>
          <div className='mb-2'>
            <input type="email" id="email" name="email" placeholder='email' required className='bg-dark-grey border-b border-gray-200 focus:outline-none focus:border-black w-full px-4 py-2 text-black' />
          </div>
          <div>
            <input type="password" id="password" name="password" placeholder='password' required className='bg-dark-grey border-b border-gray-200 focus:outline-none focus:border-black w-full px-4 py-2 text-black' />
          </div>
          <div className='flex flex-row gap-4 justify-center items-center mt-8'>
            <button type="submit" className='bg-blue-500 text-white font-semibold flex items-center justify-center px-4 py-1 rounded-xl hover:bg-blue-600 '>Sign Up</button></div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
