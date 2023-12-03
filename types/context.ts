import { AuctionItem } from './type'

export interface AuctionListState {
  auctionList: AuctionItem[]
  setAuctionList: React.Dispatch<React.SetStateAction<AuctionItem[]>>
}
