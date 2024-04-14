import Image from 'next/image'
import React from 'react'
import about_company3_img from '@/public/about_company3_img.png'
import {
  BUSINESS_LABELS,
  BUSINESS_PLATFORMS,
  BUSINESS_SOLUTIONS,
} from '@/constants/business'
import BusinessCard from './BusinessCard'

const businessSection = () => {
  return (
    <>
      <header>
        <h1 className="text-[62px] font-bold tracking-wider uppercase leading-[70px] mb-[21px] line-clamp-3">
          <div>음악으로 세상에 울림을</div>
          <div>전하고 산업을 혁신하여</div>
          <div>삶의 변화를 만들어갑니다.</div>
        </h1>
        <Image
          src={about_company3_img}
          alt="about"
          width={910}
          className="absolute top-[115px] left-[130px] aspect-auto"
          priority
        />
        <div className="w-[910px] flex items-end justify-center flex-col mt-[310px] text-[22px] font-semibold mb-[80px]">
          <div>
            <div>하이브(HYBE)는 한국 본사 하이브와 미국 본사</div>
            <div>하이브 아메리카(HYBE AMERICA), 일본 본사 하이브</div>
            <div>재팬(HYBE JAPAN)으로 구성됩니다. 사업적으로는</div>
            <div>레이블, 솔루션, 플랫폼으로 구분됩니다.</div>
          </div>
        </div>
      </header>

      <main>
        <div className="w-[910px] flex gap-[20px] relative">
          <div className="flex-1 h-[300px] sticky top-0 left-0">
            <div className="border-t-2 border-black mb-[20px]" />
            <div className="w-full font-bold text-[14px]">LABELS</div>
            <div className="mt-[26px] text-[22px] font-semibold">
              <div>각 레이블은 독립적이고 독창적인</div>
              <div>크리에이티브 활동을 펼칩니다.</div>
            </div>
          </div>
          <div className="flex-1">
            {BUSINESS_LABELS.map(({ title, description }, index) => (
              <BusinessCard title={title} description={description} key={index} />
            ))}
          </div>
        </div>
        <div className="w-[910px] flex gap-[20px] relative">
          <div className="flex-1 h-[300px] sticky top-0 left-0">
            <div className="border-t-2 border-black mb-[20px]" />
            <div className="w-full font-bold text-[14px]">SOLUTIONS</div>
            <div className="mt-[26px] text-[22px] font-semibold">
              <div>레이블의 비즈니스 솔루션을 제공하거나 음악에 기</div>
              <div>
                반한 공연&middot;영상 콘텐츠&middot;IP&middot;학습&middot;게임 등의 사업을
              </div>
              <div>전개합니다.</div>
            </div>
          </div>
          <div className="flex-1">
            {BUSINESS_SOLUTIONS.map(({ title, description }, index) => (
              <BusinessCard title={title} description={description} key={index} />
            ))}
          </div>
        </div>
        <div className="w-[910px] flex gap-[20px] relative">
          <div className="flex-1 h-[300px] sticky top-0 left-0">
            <div className="border-t-2 border-black mb-[20px]" />
            <div className="w-full font-bold text-[14px]">PLATFORMS</div>
            <div className="mt-[26px] text-[22px] font-semibold">
              <div>하이브의 모든 콘텐츠와 서비스를</div>
              <div>연결하고 확장시킵니다.</div>
            </div>
          </div>
          <div className="flex-1">
            {BUSINESS_PLATFORMS.map(({ title, description }, index) => (
              <BusinessCard title={title} description={description} key={index} />
            ))}
          </div>
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

export default businessSection
