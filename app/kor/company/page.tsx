import Animate from '@/app/components/Animate'
import ArtistSection from '@/app/components/ArtistSection'
import BusinessSection from '@/app/components/BusinessSection'
import CompanySection from '@/app/components/CompanySection'
import InfoSection from '@/app/components/InfoSection'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div className="relative w-full h-full">
      <Suspense>
        <Animate>
          <>
            <CompanySection pathString="info">
              <InfoSection />
            </CompanySection>
            <CompanySection pathString="artist">
              <ArtistSection />
            </CompanySection>
            <CompanySection pathString="business">
              <BusinessSection />
            </CompanySection>
          </>
        </Animate>
      </Suspense>
    </div>
  )
}

export default page
