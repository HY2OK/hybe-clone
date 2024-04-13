'use client'

import { useAnimation, useInView } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const ArtistImages = ({
  image,
  name,
  space,
}: {
  image: StaticImageData
  name: string
  space: number
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const animate = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      animate.start({ x: 0, opacity: 1 })
    } else {
      animate.start({ x: '200px', opacity: 0 })
    }
  }, [isInView, animate])

  return (
    <motion.div
      className="relative"
      ref={ref}
      animate={animate}
      initial={{ x: '200px', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    >
      <div
        className="relative w-[325px] aspect-auto"
        style={{ marginLeft: `${space}px` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image src={image} alt={name} width={325} className="aspect-auto" priority />
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[#111]/50 text-white underline cursor-pointer"
          >
            {name}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default ArtistImages
