'use client'
import React, { useState, createContext } from 'react'
import { ChildrenProps } from '../../types/props'
import { AuctionItem } from '../../types/type'
import { AuctionListContext } from '../../lib/context.module'

const Providers = ({ children }: ChildrenProps) => {
  const [auctionItemList, setAuctionItemList] = useState<AuctionItem[]>([])
  return (
    <AuctionListContext.Provider value={{ auctionItemList, setAuctionItemList }}>
      {children}
    </AuctionListContext.Provider>
  )
}

export default Providers
