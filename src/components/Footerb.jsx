import Image from 'next/image'
import React from 'react'

const Footerb = () => {
  return (
    <div className='h-[122px] w-full flex items-center justify-around bg-[#A0FFBA]'>
      <h1 className='font-outfit font-semibold text-2xl text-black'>Copyright © 2024. All rights are reserved</h1>
      <div className="flex gap-2">
        <Image src={"/code-circle.svg"} alt='Mail Logo' draggable={false} width={29} height={26} />
        <p className='font-outfit text-xl text-black'>Developed By <a className='underline font-medium' href="https://github.com/pvarma-05/">Pradeep Varma</a></p>
      </div>
    </div>
  )
}

export default Footerb
