"use client";
import React from "react";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="h-screen w-[100%] flex flex-col items-center justify-center space-y-5 ">
      <span>Log In to view tweet</span>
      <button
        onClick={() => signIn()}
        className=" bg-blue-500 py-2 px-5 rounded-full"
      >
        Log In
      </button>
    </div>
  );
}

export default Login;
