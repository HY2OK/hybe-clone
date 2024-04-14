import React from 'react'

const BusinessCard = ({
  title,
  description,
}: {
  title: string | null
  description: string | null
}) => {
  return (
    <div className="w-full h-[238px] border-t-2 border-black">
      <div className="mt-[18px] text-[18px] font-bold">{title}</div>
      <div className="my-[15px] text-[15px]">{description}</div>
    </div>
  )
}

export default BusinessCard
