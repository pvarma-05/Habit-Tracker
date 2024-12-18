'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";
import Days from "@/components/Days";

export default function HabitsPage() {
  const router = useRouter();

  const [userData, setUserData] = useState({
    username: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user/dashboard");
        const { data } = response.data;
        setUserData({
          username: data.username,
        });
      } catch (error) {
        console.log("Failed to fetch user data:", error);
        toast.error("Unable to load user data.");
      }
    };

    fetchUserData();
  }, []);

  return (
    <main className=" w-full">
      <section className=" ml-[49px] mr-[79px] flex-col justify-between my-7">
        <div className="top flex justify-between">
          <div className="greeting flex items-center gap-3">
            <h1 className=" font-outfit font-bold text-[70px]">Manage Your <span className="text-[#A0FFBA]">Habits</span></h1>
          </div>
          <Days />
        </div>
        <br />
        <div className="bottom w-[549px]">
          <p className="text-[#F0F0F0] font-poppins text-base">Add, View, Edit, Delete, and Categorize habits.</p>
        </div>
      </section>
      <section className="flex ml-[49px] mr-[79px] flex-col my-7 gap-5">
        <div className="flex flex-col gap-3">
          <h1 className="font-outfit font-semibold text-[35px] text-[#A0FFBA]">VIEW HABITS</h1>
          <div className="flex justify-between">
            <div className="flex w-[340px] h-[470px] bg-[#263238] rounded-[29px] justify-center pt-[50px]">
              <p className="font-poppins font-semibold text-xl">DAILY</p>
            </div>
            <div className="flex w-[340px] h-[470px] bg-[#263238] rounded-[29px] justify-center pt-[50px]">
              <p className="font-poppins font-semibold text-xl">WEEKLY</p>
            </div>
            <div className="flex w-[340px] h-[470px] bg-[#263238] rounded-[29px] justify-center pt-[50px]">
              <p className="font-poppins font-semibold text-xl">MONTHLY</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <Link
          href={"/login"}
          className="flex justify-center items-center bg-[#A0FFBA] w-[226px] h-[58px] rounded-[30px] " 
          >
            <p className="font-poppins text-base font-semibold text-black">CREATE HABIT</p>
          </Link>
          <Link
          href={"/login"}
          className="flex justify-center items-center bg-[#fff] w-[226px] h-[58px] rounded-[30px] " 
          >
            <p className="font-poppins text-base font-semibold text-black">UPDATE PROGRESS</p>
          </Link>
          <Link
          href={"/login"}
          className="flex justify-center items-center bg-[#263238] w-[226px] h-[58px] rounded-[30px] " 
          >
            <p className="font-poppins text-base font-semibold">EDIT HABIT</p>
          </Link>
          <Link
          href={"/login"}
          className="flex justify-center items-center bg-[#FB5456] w-[226px] h-[58px] rounded-[30px] " 
          >
            <p className="font-poppins text-base font-semibold text-black">DELETE HABIT</p>
          </Link>
        </div>
      </section>
    </main>
  )
}
