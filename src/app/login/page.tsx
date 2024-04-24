import React from "react";
import Link from "next/link";
import { useState } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";


  const Login = () => {
  // const [activeService, setActiveService] = useState(false);

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const router = useRouter();

  // const handleLogin = () => {
  //   return(
  //     <div>Fakiu!</div>
  //   )
  // }

  return (
    <main className="flex items-center justify-center w-full flex-1 px-20 text-center bg-black">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl flex-row">
        <div className="w-3/5 p-5">
          <p className="bg-black">Sign In Section</p>
          <input
            type="text"
            placeholder="Username"
            // value={username}
            // onChange={(e) => {
            //   setUsername(e.target.value);
            // }}
          />
          <input
            type="password"
            placeholder="Password"
            // value={password}
            // onChange={e => {
            //   setPassword(e.target.value);
            // }}
          />
          {/* <button onClick={handleLogin}>Login</button>*/}
           <button className="bg-black">Login</button>
        </div>
        <div className="w-2/5 bg-[#5663ff] rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <button className="flex flex-col gap-4 border-2 rounded-full px-2 py-2">Sign up</button>
        </div>
      </div>
    </main>
  )
}

export default Login;