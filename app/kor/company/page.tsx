import ArtistSection from '@/app/components/ArtistSection'
import BusinessSection from '@/app/components/BusinessSection'
import CompanySection from '@/app/components/CompanySection'
import InfoSection from '@/app/components/InfoSection'
import React from 'react'

const page = ({ searchParams }: { searchParams: { path: string } }) => {
  const arr = [
    { ele: <InfoSection />, pathString: 'info' },
    { ele: <ArtistSection />, pathString: 'artist' },
    { ele: <BusinessSection />, pathString: 'business' },
  ]

  const current = arr.find(({ ele, pathString }) => pathString === searchParams.path)

  return (
    <div className="relative w-full h-full">
      <CompanySection>{current!.ele}</CompanySection>
    </div>
  )
}

export default page
