import { AuctionItem } from './type'

export interface AuctionListState {
  auctionItemList: AuctionItem[]
  setAuctionItemList: React.Dispatch<React.SetStateAction<AuctionItem[]>>
}
