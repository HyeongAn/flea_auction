'use client'
import React, { useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ChildrenProps } from '../../types/props'
import { AuctionItem } from '../../types/type'
import { AuctionListContext } from '../../lib/context.module'

const Providers = ({ children }: ChildrenProps) => {
  const [auctionList, setAuctionList] = useState<AuctionItem[]>([])
  const [client] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: Infinity,
            gcTime: Infinity,
          },
        },
      })
  )

  return (
    <AuctionListContext.Provider value={{ auctionList, setAuctionList }}>
      <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuctionListContext.Provider>
  )
}

export default Providers
