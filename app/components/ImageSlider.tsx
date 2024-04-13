'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { LEADER_INFO } from '@/constants/constants'
import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    scale: 1,
    opacity: 0.2,
  }),
}

const sliderTransition = {
  duration: 0.8,
  ease: [0.56, 0.03, 0.12, 1.04],
}

const ImageSlider = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0])

  const swipeToImage = (swipeDirection: number) => {
    if (imageCount === 0 && swipeDirection === -1) return
    if (imageCount === LEADER_INFO.length - 1 && swipeDirection === 1) return

    setImageCount([imageCount + swipeDirection, swipeDirection])
  }

  const dragEndHandler = ({ offset }: { offset: { x: number; y: number } }) => {
    const draggedDistance = offset.x
    const swipeThreshold = 80
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1)
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1)
    }
  }

  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        key={imageCount}
        custom={direction}
        variants={sliderVariants}
        initial="incoming"
        animate="active"
        exit="exit"
        transition={sliderTransition}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
        className="relative cursor-pointer"
      >
        <div className="absolute">
          <Image
            src={LEADER_INFO[imageCount].image}
            alt="리더1"
            width={910}
            draggable={false}
            priority
            className="aspect-auto"
          />
          <div className="flex mt-[77px]">
            <div className="flex-grow">
              {LEADER_INFO[imageCount].profile.map((pro, index) => (
                <div
                  key={index}
                  className={`${index === 0 ? 'text-[20px]' : 'text-[10px]'}`}
                >
                  {pro}
                </div>
              ))}
            </div>
            <div className="w-[650px] text-[18px] font-normal">
              {LEADER_INFO[imageCount].description.map((des, index) => (
                <div key={index}>{des}</div>
              ))}
            </div>
          </div>
          <div className="w-[910px] h-full justify-between items-start absolute left-0 top-0 text-4xl opacity-0 hover:opacity-100 transition-opacity">
            <button
              className={`w-[80px] h-[80px] bg-black/30 text-white/80 cursor-pointer absolute top-[125px] left-0 flex justify-center items-center ${
                imageCount === 0 ? 'hidden' : 'block'
              }`}
              onClick={() => swipeToImage(-1)}
            >
              <AiOutlineLeft />
            </button>
            <button
              className={`w-[80px] h-[80px] bg-black/20 text-white/80 cursor-pointer absolute top-[125px] right-0 flex justify-center items-center ${
                imageCount === LEADER_INFO.length - 1 ? 'hidden' : 'block'
              }`}
              onClick={() => swipeToImage(1)}
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ImageSlider
