import React from 'react'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import getQueryClient from './getQueryClient'
import { getAuctionList } from '../../lib/api.module'
import Gallery from '@/components/gallery/gallery'

const HydratedPage = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({ queryKey: ['auctionList'], queryFn: getAuctionList })
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <Gallery />
      <Gallery />
    </HydrationBoundary>
  )
}

export default HydratedPage
