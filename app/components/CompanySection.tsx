'use client'
import React, { useEffect, useState } from 'react'
import InfoSection from './InfoSection'
import ArtistSection from './ArtistSection'
import BusinessSection from './BusinessSection'
import { motion, useAnimate } from 'framer-motion'
import { useRouter, useSearchParams } from 'next/navigation'

const CompanySection = ({ children }: React.PropsWithChildren) => {
  const router = useRouter()
  const searchParams = useSearchParams().get('path')!
  const [scope, animate] = useAnimate()

  const [expandedElement, setExpandedElement] = useState<string>(searchParams)

  useEffect(() => {
    const Ani = async () => {
      await animate('.companyList', { width: '70px', paddingLeft: '50px' })
      await animate(`.${expandedElement}`, {
        width: 'calc(100% - 140px)',
        paddingLeft: '130px',
      })
    }

    Ani()
  }, [animate, expandedElement])

  const handleExpand = async (pathString: string) => {
    if (expandedElement === pathString) return

    setExpandedElement(pathString === expandedElement ? searchParams : pathString)
    router.push(`/kor/company?path=${pathString}`)
  }

  const arr = [
    { ele: <InfoSection />, pathString: 'info' },
    { ele: <ArtistSection />, pathString: 'artist' },
    { ele: <BusinessSection />, pathString: 'business' },
  ]

  return (
    <div ref={scope} className="flex justify-end items-center px-[30px]">
      {arr.map(({ ele, pathString }, index) => (
        <motion.div
          key={index}
          onClick={() => handleExpand(pathString)}
          className={`w-[70px] h-[calc(100vh-120px)] border-x border-black overflow-y-scroll font-nanum scrollbar-hide relative overflow-x-hidden mb-[40px] pt-[115px] bg-white relative ${
            expandedElement === pathString ? '' : 'cursor-pointer'
          } ${pathString} companyList `}
        >
          {children}
        </motion.div>
      ))}
    </div>
  )
}

export default CompanySection
