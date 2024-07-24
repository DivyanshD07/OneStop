"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const MyNavbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  // Function to handle logout
  const handleLogout = () => {
    // Clear authentication status (e.g., remove token from local storage)
    localStorage.removeItem('token');
    // Update state to reflect logged out state
    setIsAuthenticated(false);
    // Redirect user to login page
    router.push('/'); // You can use router.push('/login') if you're using Next.js router
  };

  useEffect(() => {
    // Check if token exists in local storage
    const token = localStorage.getItem('token');
    if (token) {
      // User is authenticated
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="flex flex-row justify-between md:justify-around items-center py-4 mt-5 mb-5 gap-6">
      <Link href="/DashBoard">
        <h1 className="text-4xl font-bold mb-5">OneStop</h1>
      </Link>
      <div className="flex flex-row gap-4 items-center justify-center">
        {/* Conditional rendering based on authentication status */}
        {!isAuthenticated ? (
          <div className="flex flex-row justify-between md:mr-8 mr-2 gap-2 md:gap-6">
            <div className="bg-gray-200 font-semibold text-black hover:bg-gray-400 flex items-center border-0 rounded-xl md:px-3 md:py-2 p-2">
              <div className="md:mr-2">
                <img src="/assets/login.png" width={20} height={20} alt="login" />
              </div>
              <Link href="/">Login</Link>
            </div>
            <div className="bg-gray-200 font-semibold text-black hover:bg-gray-400 flex items-center border-0 rounded-xl px-3 py-2">
              <div className="mr-2">
                <img src="/assets/user.png" width={20} height={20} alt="signup" />
              </div>
              <Link href="/signup">Sign Up</Link>
            </div>
          </div>
        ) : (
          <div className="bg-gray-200 font-semibold text-black hover:bg-gray-400 flex items-center border-0 rounded-xl px-3 py-2">
            <div className="mr-2">
              <img src="/assets/user.png" width={20} height={20} alt="logout" />
            </div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyNavbar;
