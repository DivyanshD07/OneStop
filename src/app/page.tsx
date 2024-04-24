"use client";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Hero from "./../components/Hero";
import './globals.css';
import Login from "./login/page";
import { useRouter } from "next/router";

const LoginPage = () => {

  return (
    <h1 className="flex justify-center items-center p-5 text-green-500 text-lg font-bold">
      <Hero />
    </h1>
  );
};

export default LoginPage;