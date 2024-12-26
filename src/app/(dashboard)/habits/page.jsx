'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Days from "@/components/Days";

export default function HabitsPage() {
  const [habits, setHabits] = useState({ daily: [], weekly: [], monthly: [] });

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await axios.get("/api/habits");
        const { data } = response.data;
        const categorized = { daily: [], weekly: [], monthly: [] };

        data.forEach((habit) => {
          categorized[habit.recurrence.toLowerCase()].push(habit);
        });

        setHabits(categorized);
      } catch (error) {
        console.error("Failed to fetch habits:", error);
        toast.error("Unable to load habits.");
      }
    };

    fetchHabits();
  }, []);

  const renderHabitBox = (habits, type) => (
    <div className="flex flex-col w-[340px] h-[470px] bg-[#263238] rounded-[29px] p-5 overflow-y-auto">
      <h2 className="font-poppins font-semibold text-xl text-center">{type.toUpperCase()}</h2>
      <div className="mt-4 space-y-3">
        {habits.map((habit) => (
          <div key={habit._id} className="p-3 bg-[#37474F] rounded-md">
            <h3 className="font-poppins font-medium">{habit.name}</h3>
            <p className="text-sm text-gray-400">{habit.category}</p>
          </div>
        ))}
      </div>
    </div>
  );

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
            {renderHabitBox(habits.daily, "Daily")}
            {renderHabitBox(habits.weekly, "Weekly")}
            {renderHabitBox(habits.monthly, "Monthly")}
          </div>
        </div>
        <div className="flex justify-between">
          <Link
            href={"/habits/create"}
            className="flex justify-center items-center bg-[#A0FFBA] w-[226px] h-[58px] rounded-[30px] "
          >
            <p className="font-poppins text-base font-semibold text-black">CREATE HABIT</p>
          </Link>
          <Link
            href={"/habits/update"}
            className="flex justify-center items-center bg-[#fff] w-[226px] h-[58px] rounded-[30px] "
          >
            <p className="font-poppins text-base font-semibold text-black">UPDATE PROGRESS</p>
          </Link>
          <Link
            href={"/habits/edit"}
            className="flex justify-center items-center bg-[#263238] w-[226px] h-[58px] rounded-[30px] "
          >
            <p className="font-poppins text-base font-semibold">EDIT HABIT</p>
          </Link>
          <Link
            href={"/habits/delete"}
            className="flex justify-center items-center bg-[#FB5456] w-[226px] h-[58px] rounded-[30px] "
          >
            <p className="font-poppins text-base font-semibold text-black">DELETE HABIT</p>
          </Link>
        </div>
      </section>
    </main>
  )
}
