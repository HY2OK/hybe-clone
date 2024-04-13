'use client'
import React, { useState } from 'react'
import InfoSection from './InfoSection'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const CompanySection = ({ pathName }: { pathName: string }) => {
  const router = useRouter()
  const [expandedElement, setExpandedElement] = useState<string>(pathName)

  const handleExpand = (pathString: string) => {
    setExpandedElement(pathString === expandedElement ? pathName : pathString)
    router.push(`/kor/company/${pathString}`)
  }

  const arr = [
    { ele: <InfoSection />, pathString: 'info' },
    { ele: <InfoSection />, pathString: 'artist' },
    { ele: <InfoSection />, pathString: 'business' },
  ]

  return (
    <AnimatePresence mode="wait">
      <div className="flex justify-end items-center px-[30px]">
        {arr.map(({ ele, pathString }, index) => (
          <motion.div
            key={pathString}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={{
              pageInitial: {
                width: '70px',
                paddingLeft: '50px',
                transition: { duration: 0.8, ease: 'linear' },
              },
              pageAnimate: {
                width: expandedElement === pathString ? 'calc(100% - 140px)' : '70px',
                paddingLeft: expandedElement === pathString ? '130px' : '50px',
                transition: { duration: 0.8, ease: 'linear' },
              },
              pageExit: {
                width: '70px',
                paddingLeft: '50px',
                transition: { duration: 0.8, ease: 'linear' },
              },
            }}
            onClick={() => handleExpand(pathString)}
            className={`h-[calc(100vh-120px)] border-x border-black overflow-y-scroll font-nanum scrollbar-hide relative overflow-x-hidden mb-[40px] pt-[115px] bg-white ${
              expandedElement === pathString ? '' : 'cursor-pointer'
            } `}
          >
            {ele}
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  )
}

export default CompanySection
