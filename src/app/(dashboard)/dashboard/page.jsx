'use client';
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function DashboardPage() {
  const router = useRouter();

  const onLogout = async () => {
    const toastId = toast.loading("Loading");

    try {
      const response = await axios.post("/api/auth/logout");
      console.log("Logout Success:", response.data);

      toast.success("Logout Successful!", { id: toastId });
      router.push("/login");
    } catch (error) {
      console.log("Logout Error:", error);

      const errorMessage = error.response?.data?.message || "Logout Failed";
      toast.error(errorMessage, { id: toastId });
    }
  }

  return (
    <div>
      <h1>Dashboard Content</h1>
      <button
        className="h-[56px] rounded-[41px] bg-[#A0FFBA] text-black text-sm font-semibold"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  )
}
