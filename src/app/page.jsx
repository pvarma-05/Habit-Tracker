import Image from "next/image";
import Navbar from "@/components/navbar";
import Footerb from "@/components/Footerb";
export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <section className="flex flex-row ml-[188px] mr-[187px]">
          <div className="w-2/4 flex flex-col">
            <h1 className="font-outfit font-bold text-[90px] leading-tight">Track <span className="text-[#A0FFBA]">Habits.</span></h1>
            <h1 className="font-outfit font-bold text-[90px] leading-tight">Build <span className="text-[#A0FFBA]">Success.</span></h1>
            <p className="font-poppins text-xl mt-[30px]">Stay consistent, achieve your goals, and unlock your full potential with our habit tracker. Start your journey today!</p>
            <button className="w-[215px] h-[84px] bg-[#A0FFBA] rounded-2xl text-black font-semibold font-outfit text-2xl my-[25.91px]"><a href="/login">Get Started</a></button>
          </div>
          <div className="flex justify-center items-center w-2/4">
            <Image src={"/h1r.svg"} alt="h1-right" width={435} height={462} />
          </div>
        </section>
        <section className="flex flex-row h-dvh items-center justify-center mt-[50px] ml-[188px] mr-[187px]">
          <div className="flex justify-center items-center w-2/4">
            <Image src={"/h2l.svg"} alt="h1-right" width={435} height={462} />
          </div>
          <div className="w-2/4 flex flex-col">
            <h1 className="font-outfit font-bold text-[80px] leading-tight text-right">Why Choose</h1>
            <h1 className="font-outfit font-bold text-[80px] leading-tight text-right text-[#A0FFBA]">Habit Tracker?</h1>
            <p className="font-poppins text-xl mt-[30px]">Our habit tracker is more than just a checklist. It's your partner in personal growth. Its Designed to keep you always motivated and accountable, it helps you to track your daily habits, analyze your progress, and stay on top of your goals. Whether you're focusing on health, work, or personal development. we've got you covered.</p>
          </div>
        </section>
        <section className="flex flex-col h-dvh items-center justify-center mt-[50px] ml-[188px] mr-[187px]">
          <div className="font-outfit font-bold text-[82px] leading-tight text-center">
            <h1 ><span className="text-[#A0FFBA]">Features</span> That</h1>
            <h1 >Make You Thrive</h1>
          </div>
        </section>
        <section className="flex flex-col h-dvh items-center justify-center mt-[50px] ml-[188px] mr-[187px]">
          <div className="font-outfit font-bold text-[82px] leading-tight text-center mb-24">
            <h1 >What Our <span className="text-[#A0FFBA]">Users</span> Say</h1>
          </div>
          <div className="flex flex-row items-center ">
            <div className="h1-left w-2/4 flex flex-col justify-center h-full">
              <p className="font-outfit text-4xl  leading-snug mb-20">This habit tracker completely transformed my daily routine. The reminders and progress insights keep me on track every day!</p>
              <p className="font-outfit text-4xl text-[#A0FFBA] leading-snug">-Ravi K., Software Engineer</p>
            </div>
            <div className="h1-right flex justify-center items-center w-2/4">
              <Image src={"/h4r.svg"} alt="h1-right" width={525} height={527} />
            </div>
          </div>
        </section>
        <Footerb />
      </main>
    </div>
  );
}
