'use client';
import React from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [user,setUser] = React.useState({
    email : "",
    // password : "",
  })

  const onLogin = async()=>{
    toast.success('Login Success');
  }


  return (
    <div className="flex flex-col justify-center w-[580px] h-[522px] gap-6">
      <h1 className='text-[46px] font-poppins'>Access your Account</h1>
      <div className="gap-2 h-[72px] flex flex-col rounded-xl justify-center p-3 font-poppins text-sm bg-[#333F4E]">
      <label htmlFor="email">Email</label>
      <input className="bg-inherit outline-none" type="text" placeholder="Enter Your Email" id="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
      </div>
      {/* <label htmlFor="password">Password</label>
      <input type="password" placeholder="Enter Your Password" id="email" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value()})}/> */}
      <button className="h-[56px] rounded-[41px] bg-[#A0FFBA] text-black text-sm font-semibold" onClick={onLogin}>
        Submit
      </button>
      <p className="text-sm text-center">Don't have an account? <span><Link className="text-[#A0FFBA]" href={'/register'}>Regsiter</Link></span></p>
    </div>
  )
}