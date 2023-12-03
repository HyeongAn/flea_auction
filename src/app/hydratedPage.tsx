import React, { useRef } from 'react'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import getQueryClient from './getQueryClient'
import { getAuctionList } from '../../lib/api.module'
import Gallery from '@/components/gallery/gallery'
import GalleryContainer from '@/components/gallery/gallery-container'
import PullToRefresh from '@/components/pull-to-refresh'

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
