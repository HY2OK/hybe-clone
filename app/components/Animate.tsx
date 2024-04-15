'use client'
import React, { useEffect } from 'react'
import { useAnimate } from 'framer-motion'
import { useSearchParams } from 'next/navigation'

const Animate = ({ children }: React.PropsWithChildren) => {
  const searchParams = useSearchParams().get('path')!
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const Ani = async () => {
      await animate('.companyList', { width: '70px', paddingLeft: '50px' })
      await animate(`.${searchParams}`, {
        width: 'calc(100% - 140px)',
        paddingLeft: '130px',
      })
    }

    Ani()
  }, [animate, searchParams])

  return (
    <div ref={scope} className="flex justify-end items-center px-[30px]">
      {children}
    </div>
  )
}

export default Animate
