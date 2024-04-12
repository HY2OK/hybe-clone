import CompanySection from '@/app/components/CompanySection'
import React from 'react'

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="relative w-full h-full">
      <CompanySection pathName={params.slug} />
    </div>
  )
}

export default page
