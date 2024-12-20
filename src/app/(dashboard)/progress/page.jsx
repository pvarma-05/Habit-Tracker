'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";
import Days from "@/components/Days";

export default function ProgressPage() {
  const router = useRouter();

  const [userData, setUserData] = useState({
    username: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user/root");
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
    <main className=" w-full flex flex-col gap-2">
      <section className=" ml-[49px] mr-[79px] flex-col justify-between my-7">
        <div className="top flex justify-between">
          <div className="greeting flex items-center gap-3">
            <h1 className=" font-outfit font-bold text-[70px]">Analyze your <span className="text-[#A0FFBA]">Progress</span></h1>
          </div>
          <Days />
        </div>
        <br />
        <div className="bottom w-[549px]">
          <p className="text-[#F0F0F0] font-poppins text-base">once you understand that habits can change, you have the freedom and the responsibility to remake them.</p>
        </div>
      </section>
      <section className="flex ml-[49px] mr-[79px] flex-col my-7 gap-5">
        <div className="flex items-center justify-between">
          <div className="w-[228px] h-[228px] bg-[#263238] rounded-[30px] flex flex-col items-center justify-center">
            <p className="font-outfit font-semibold text-[21px] w-[142px] text-center ">Total Habits Created</p>
            <p className="font-outfit font-semibold text-[#A0FFBA] text-[50px] w-[142px] text-center ">5</p>
          </div>
          <div className="w-[228px] h-[228px] bg-[#263238] rounded-[30px] flex flex-col items-center justify-center">
            <p className="font-outfit font-semibold text-[21px] w-[142px] text-center ">Total Habits Completed</p>
            <p className="font-outfit font-semibold text-[#A0FFBA] text-[50px] w-[142px] text-center ">5</p>
          </div>
          <div className="w-[497.5px] h-[228px] bg-[#263238] rounded-[30px] justify-center items-center flex">
            <div className="w-[414px] flex flex-col gap-4  justify-between ">
              <h1 className="font-outfit text-[30px] text-[#A0FFBA] font-semibold ">TODAY'S PROGRESS</h1>
              <div>
                <p className="font-outfit text-[37px] font-semibold">75%</p>
                <p className="font-outfit font-semibold">BAR</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[497.5px] h-[228px] bg-[#263238] rounded-[30px] justify-center items-center flex">
            <div className="w-[414px] flex flex-col gap-4  justify-between ">
              <h1 className="font-outfit text-[30px] text-[#A0FFBA] font-semibold ">WEEKLY PROGRESS</h1>
              <div>
                <p className="font-outfit text-[37px] font-semibold">50%</p>
                <p className="font-outfit font-semibold">BAR</p>
              </div>
            </div>
          </div>
          <div className="w-[228px] h-[228px] bg-[#263238] rounded-[30px] flex flex-col items-center justify-center gap-2">
            <p className="font-outfit font-semibold text-[21px] w-[142px] text-center ">Best Streak</p>
            <div className="flex w-[117px] h-[69.49] gap-1">
              <p className="font-outfit font-semibold text-[#FF7300] text-[50px] w-[142px] text-center ">10</p>
              <Image src={"/flame.svg"} width={60} height={65} alt="Streak" />
            </div>
            <p className="font-outfit text-[#FF7300] text-xl w-[142px] text-center ">Coding 1hr</p>
          </div>
          <div className="w-[228px] h-[228px] bg-[#263238] rounded-[30px] flex flex-col items-center justify-center">
            <p className="font-outfit font-semibold text-[21px] w-[142px] text-center ">Current Active Streaks</p>
            <p className="font-outfit font-semibold text-[#A0FFBA] text-[50px] w-[142px] text-center ">2</p>
          </div>
        </div>
      </section>
    </main>
  )
}
