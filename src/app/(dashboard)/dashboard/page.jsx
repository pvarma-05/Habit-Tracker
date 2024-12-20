'use client';
import React,{useState,useEffect} from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";
import Days from "@/components/Days";

export default function DashboardPage() {
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
    <main className=" w-full">
      <section className=" ml-[49px] mr-[79px] flex-col justify-between my-7">
        <div className="top flex justify-between">
          <div className="greeting flex items-center gap-3">
            <h1 className=" font-outfit font-bold text-[70px]">Hello, <span className="text-[#A0FFBA]">{userData.username}</span></h1>
            <Image src={"/icons/hello-2.png"} width={60} height={60} draggable={false} alt="wave" />
          </div>
          <Days />
        </div>
        <br />
        <div className="bottom w-[549px]">
          <p className="text-[#F0F0F0] font-poppins text-base">once you understand that habits can change, you have the freedom and the responsibility to remake them.</p>
        </div>
      </section>
    </main>
  )
}
