'use client';
import React from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [user, setUser] = React.useState({
    fname: "",
    lname: "",
    email: "",
  })

  const onRegister = async () => {
    toast('Registration Success',
      {
        icon: '✅',
        style: {
          background: '#333',
          color: '#fff',
        },
      }
    );
  }


  return (
    <div className="flex flex-col justify-center w-[580px] h-[522px] gap-6">
      <h1 className='text-[46px] font-poppins'>Create Account</h1>
      <div className="gap-2 h-[72px] flex flex-col rounded-xl justify-center p-3 font-poppins text-sm bg-[#333F4E]">
        <label htmlFor="fname">First Name</label>
        <input className="bg-inherit outline-none" type="text" placeholder="Enter Your first Name" id="fname" value={user.fname} onChange={(e) => setUser({ ...user, fname: e.target.value })} />
      </div>
      <div className="gap-2 h-[72px] flex flex-col rounded-xl justify-center p-3 font-poppins text-sm bg-[#333F4E]">
      <label htmlFor="lname">Last Name</label>
      <input className="bg-inherit outline-none" type="text" placeholder="Enter Your last Name" id="lname" value={user.lname} onChange={(e) => setUser({ ...user, lname: e.target.value })} />
      </div>
      <div className="gap-2 h-[72px] flex flex-col rounded-xl justify-center p-3 font-poppins text-sm bg-[#333F4E]">
      <label htmlFor="email">Email</label>
      <input className="bg-inherit outline-none" type="text" placeholder="Enter Your Email" id="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
      </div>
      <button className="h-[56px] rounded-[41px] bg-[#A0FFBA] text-black text-sm font-semibold" onClick={onRegister}>
        Submit
      </button>
      <p className="text-sm text-center">Already have an account? <span><Link className="text-[#A0FFBA]" href={'/login'}>Login</Link></span></p>
    </div>
  )
}