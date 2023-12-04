import React from 'react'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import getQueryClient from './getQueryClient'
import { getAuctionList } from '../../lib/api.module'
import GalleryContainer from '@/components/gallery/gallery-container'

const HydratedPage = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({ queryKey: ['auctionList'], queryFn: getAuctionList })
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <GalleryContainer />
    </HydrationBoundary>
  )
}

export default HydratedPage
