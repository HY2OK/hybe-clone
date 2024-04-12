import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 w-full h-[80px] flex justify-between items-center font-nanum  font-extrabold text-3xl px-[30px] tracking-wider bg-white">
      <div>
        <Link href={`/`}>HYBE</Link>
      </div>
      <ul className="flex gap-10 justify-center items-center text-[20px] ">
        <li>
          <Link href={`/kor/company/info`}>COMPANY</Link>
        </li>
        <li className="text-black/30">
          <Link href={`#`}>INVESTORS</Link>
        </li>
        <li className="text-black/30">
          <Link href={`#`}>NEWS</Link>
        </li>
        <li className="text-black/30">
          <Link href={`#`}>CAREERS</Link>
        </li>
      </ul>
      <div className="text-[13px] underline">KOR</div>
    </div>
  )
}

export default Navbar
