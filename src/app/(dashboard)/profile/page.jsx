'use client';
import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import Days from "@/components/Days";

export default function ProfilePage() {

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    avatar: "/user.png",
    created: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user/dashboard");
        const { data } = response.data;

        const createdAtDate = new Date(data.createdAt);
        const formattedDate = createdAtDate.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })

        setUserData({
          name: data.name,
          email: data.email,
          avatar: data.avatar || "/user.png",
          created: formattedDate,
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
            <h1 className=" font-outfit font-bold text-[70px]">
              <span className="text-[#A0FFBA]">Profile</span> & Settings
            </h1>
          </div>
          <Days />
        </div>
        <br />
        <div className="bottom w-[549px]">
          <p className="text-[#F0F0F0] font-poppins text-base">Your personal space for tracking your journey.</p>
        </div>
      </section>
      <section className="flex ml-[49px] mr-[79px] flex-col my-7 gap-2">
        <div className="flex flex-col gap-3">
          <h1 className="font-outfit font-semibold text-[35px] text-[#A0FFBA]">PROFILE</h1>
          <div className="h-[150px] bg-[#263238] rounded-[25px] flex justify-between items-center pl-[42px] pr-[53px]">
            <Image
              src={userData.avatar}
              width={86}
              height={88.81}
              alt="avatar"
              draggable={false}
              className="rounded-full"
            />
            <h1 className="font-outfit font-semibold text-[25px]">{userData.name}</h1>
            <p className="font-outfit text-[17px]">{userData.email}</p>
            <p className="font-outfit text-[17px]">Member Since : {userData.created}</p>
            <Image src={"/icons/edit.svg"} draggable={false} height={30} width={30} alt="edit icon" />
          </div>
        </div>
      </section>
      <section className="flex ml-[49px] mr-[79px] flex-col my-7 gap-2">
        <div className="flex flex-col gap-5">
          <h1 className="font-outfit font-semibold text-[35px] text-[#A0FFBA]">SETTINGS</h1>
          <div className="h-[100px] bg-[#263238] rounded-[25px] flex justify-between items-center pl-[42px] pr-[53px] ">
            <h1 className="font-poppins font-semibold text-[25px]">Habits Preferences</h1>
            <p className="font-poppins text-[17px] ">Customize Tags and remainders.</p>
            <Image src={"/icons/goto.svg"} draggable={false} height={30} width={30} alt="go icon" />
          </div>
          <div className="h-[100px] bg-[#263238] rounded-[25px] flex justify-between items-center pl-[42px] pr-[53px] ">
            <h1 className="font-poppins font-semibold text-[25px]">Notification Settings</h1>
            <p className="font-poppins text-[17px]">Email, push, and Calendar sync.</p>
            <Image src={"/icons/goto.svg"} draggable={false} height={30} width={30} alt="go icon" />
          </div>
          {/* <div className="h-[100px] bg-[#263238] rounded-[25px] flex justify-between items-center pl-[42px] pr-[53px] ">
            <h1 className="font-poppins font-semibold text-[25px]">Theme/Appearance</h1>
            <p className="font-poppins text-[17px]">Change into Light and Dark Mode.</p>
            <Image src={"/icons/goto.svg"} draggable={false} height={30} width={30} alt="go icon" />
          </div> */}
        </div>
      </section>
    </main>
  );
}
