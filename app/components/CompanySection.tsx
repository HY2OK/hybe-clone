'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter, useSearchParams } from 'next/navigation'

interface props {
  pathString: string
}

const CompanySection = ({ pathString, children }: React.PropsWithChildren<props>) => {
  const router = useRouter()
  const searchParams = useSearchParams().get('path')!

  const [expandedElement, setExpandedElement] = useState<string>(searchParams)

  const handleExpand = async (pathString: string) => {
    setExpandedElement(pathString === expandedElement ? searchParams : pathString)
    router.push(`/kor/company?path=${pathString}`)
  }

  return (
    <motion.div
      onClick={() => handleExpand(pathString)}
      className={`w-[70px] h-[calc(100vh-120px)] border-x border-black overflow-y-scroll font-nanum scrollbar-hide relative overflow-x-hidden mb-[40px] pt-[115px] bg-white relative ${
        expandedElement === pathString ? '' : 'cursor-pointer'
      } ${pathString} companyList `}
    >
      {children}
    </motion.div>
  )
}

export default CompanySection
