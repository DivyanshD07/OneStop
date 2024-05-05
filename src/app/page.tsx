"use client";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import DashBoard from "./DashBoard/page";
import './globals.css';
import Department from "./department/page";
import Login from "./login/page";
import { useRouter } from "next/router";

const HomePage = () => {

  return (
    <h1 className="flex justify-center items-center p-5 text-green-500 text-lg font-bold">
      <Login />
    </h1>
  );
};

export default HomePage;