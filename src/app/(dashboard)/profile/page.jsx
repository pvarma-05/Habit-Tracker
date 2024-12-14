'use client';
import React,{useState,useEffect} from "react";
// import Link from "next/link";
import axios from "axios";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";
import Days from "@/components/Days";

export default function ProfilePage() {

  const [userData, setUserData] = useState({
    name: "",
    email:"",
    avatar:"/user.png",
    created:"",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user/dashboard");
        const { data } = response.data;
        setUserData({
          name: data.name,
          email: data.email,
          avatar: data.avatar || "/user.png" ,
          created: data.createdAt,
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
            <h1 className=" font-outfit font-bold text-[70px]"><span className="text-[#A0FFBA]">Profile </span>& Settings</h1>
          </div>
          <Days />
        </div>
        <br />
        <div className="bottom w-[549px]">
          <p className="text-[#F0F0F0] font-poppins text-base">Your personal space for tracking your journey.</p>
        </div>
      </section>
    </main>
  )
}
