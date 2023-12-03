import { createContext } from 'react'
import { AuctionListState } from '../types/context'

export const AuctionListContext = createContext<AuctionListState>({
  auctionList: [],
  setAuctionList: () => undefined,
})
