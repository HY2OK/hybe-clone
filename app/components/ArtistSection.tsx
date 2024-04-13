import { MUSICIANS } from '@/constants/musician'
import React from 'react'
import ArtistImages from './ArtistImages'

const artistSection = () => {
  return (
    <>
      <header>
        <h1 className="text-[62px] font-bold tracking-wider uppercase leading-[70px] mb-[21px]">
          <div>we</div>
          <div>believe in</div>
          <div>music</div>
        </h1>
      </header>

      <main className="relative">
        <ul className="text-[20px] sticky -top-24 font-semibold ">
          {MUSICIANS.map(({ name }, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>

        <div className="w-full flex flex-col gap-[80px] -mt-[550px]">
          {MUSICIANS.map(({ image, name, space }, index) => (
            <ArtistImages key={index} image={image} name={name} space={space} />
          ))}
        </div>
      </main>

      <footer className="mt-[100px] py-[30px] w-[910px] h-[20px] flex justify-between items-center text-[13px]">
        <div>© HYBE. All Rights Reserved</div>
        <div className="flex gap-3">
          <div>개인정보처리방침</div>
          <div>HYBE 제보센터</div>
          <div>관련 사이트</div>
        </div>
      </footer>
    </>
  )
}

export default artistSection
