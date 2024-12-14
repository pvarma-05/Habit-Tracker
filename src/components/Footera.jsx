import Image from 'next/image'
import React from 'react'

const Footera = () => {
  return (
    <div className='h-[122px] w-full flex items-center justify-around bg-[#263238]'>
      <h1 className='font-outfit font-semibold text-2xl text-[#A0FFBA]'>Copyright © 2024. All rights are reserved</h1>
      <div className="flex gap-2">
        <Image src={"/sms.svg"} alt='Mail Logo' draggable={false} width={29} height={26}/>
        <p className='font-outfit text-xl text-white'><a href="mailto:pradeeppenumatsa555@gmail.com">pradeeppenumatsa555@gmail.com</a></p>
      </div>
    </div>
  )
}

export default Footera
