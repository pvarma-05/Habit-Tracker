import React from 'react'
import Days from '@/components/Days'

export default function UpdatePage1() {
    return (
        <main className='w-full'>
            <section className=" ml-[49px] mr-[79px] flex-col justify-between my-7">
                <div className="top flex justify-between">
                    <div className="greeting flex items-center gap-3">
                        <h1 className=" font-outfit font-bold text-[70px]">
                            <span className="text-[#A0FFBA]">Notification</span> Settings
                        </h1>
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
