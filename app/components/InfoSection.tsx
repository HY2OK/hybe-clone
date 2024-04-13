import Image from 'next/image'
import React from 'react'
import hybeImg from '@/public/hybe.png'
import ci1 from '@/public/ci_img01.png'
import ci2 from '@/public/ci_img02.png'
import ci3 from '@/public/ci_img03.png'
import ImageSlider from './ImageSlider'

const InfoSection = () => {
  return (
    <>
      <header>
        <h1 className="line-clamp-3 text-[62px] font-bold tracking-wider uppercase leading-[70px]">
          <div>we</div>
          <div>believe in</div>
          <div>music</div>
        </h1>
        <div className="w-[910px] h-[2px] bg-black my-[70px]"></div>
      </header>

      <main className="w-[910px] h-p[568.95px] relative font-semibold">
        <section>
          <div className="absolute top-[85px] left-0 text-[13px] uppercase">
            who we are
          </div>
          <div className="w-[650px] ml-[260px] mt-[60px]">
            <Image
              src={hybeImg}
              alt="hybe"
              width={650}
              priority
              className="aspect-auto"
            />
            <p className="mt-[30px] text-[17px] font-normal">
              하이브(HYBE)는 “We believe in music”이라는 미션 아래 음악 산업의 비즈니스
              모델을 혁신하는 기업입니다. 하이브는
              <span className="font-bold">
                음악에 기반한 세계 최고의 엔터테인먼트 라이프스타일 플랫폼 기업을
                지향합니다.
              </span>
              <br />
              글로벌 트렌드를 이끄는 &rsquo;콘텐츠&rsquo;와 우리의 고객인
              &rsquo;팬&rsquo;을 최우선 가치로 두고, 높은 기준과 끊임없는 개선으로 고객을
              만족시키도록 노력하고 있습니다.
            </p>
          </div>
        </section>

        <section className="w-[910px] h-[817.39px] mt-[200px]">
          <h1 className="text-[13px] uppercase mb-[130px]">leadership</h1>
          <ImageSlider />
        </section>

        <section className="mt-[200px]">
          <h1 className="text-[38px] font-bold">CI</h1>
          <p className="mt-[60px] ml-[455px] mb-[50px] font-normal">
            HYBE CI에는 HYBE의 기반인 음악을 담았습니다. <br /> 오선보가 압축된 형태인
            가로선은 악보에서 세로줄을 상징하는 두 개의 바를 연결하고 유연함을 기반으로
            다양하게 변주, 확장합니다.
          </p>

          <div className="w-[910px] h-[381px] border-y border-black flex">
            <div className="w-[455px] my-[30px] border-r border-black flex justify-center items-center relative">
              <h1 className="absolute top-0 left-0 text-[13px] font-normal uppercase">
                CI
              </h1>
              <Image src={ci1} alt="ci1" width={230} priority className="aspect-auto" />
            </div>
            <div className="w-[455px] my-[30px] flex flex-col">
              <div className="ml-[30px] h-1/2 border-b border-black flex justify-center items-center relative">
                <h1 className="absolute top-0 left-0 text-[13px] font-normal uppercase">
                  SYMBOL
                </h1>
                <Image src={ci2} alt="ci2" width={90} priority className="aspect-auto" />
              </div>
              <div className="ml-[30px] h-1/2 flex justify-center items-center relative">
                <h1 className="absolute top-[30px] left-0 text-[13px] font-normal uppercase">
                  WORDMARK
                </h1>
                <Image
                  src={ci3}
                  alt="ci3"
                  width={149}
                  priority
                  className="mt-[30px] aspect-auto"
                />
              </div>
            </div>
          </div>

          <div className="w-[910px] h-[381px] border-b border-black pt-[80px] pb-[50px] flex justify-center items-center">
            <div className="h-[250px] flex-1 flex justify-start items-center flex-wrap gap-[10px] relative">
              <h1 className="absolute top-[-49px] left-0 text-[13px]">Primary Colors</h1>
              <div className="w-[200px] h-[120px] bg-black text-[13px] text-gray-300/50 p-3">
                black
              </div>
              <div className="w-[200px] h-[120px] border p-3 text-gray-400 text-[13px] ">
                white
              </div>
              <div className="w-[200px] h-[120px] bg-[#bfbfbf] text-[13px] text-gray-500 p-3">
                gray
              </div>
            </div>
            <div className="h-[250px] flex-1 relative">
              <h1 className="absolute top-[-49px] left-0 text-[13px]">Accent Color</h1>
              <div className="bg-[#f5ff00] h-[120px] p-3 text-gray-400 text-[13px]">
                HYPER LEMON
              </div>
            </div>
          </div>
        </section>
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

export default InfoSection
