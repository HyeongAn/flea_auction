import { AuctionItem } from '../types/type'

export const getAuctionList = async () => {
  const response = await fetch(`${process.env.REACT_APP_FLEA_AUCTION_LIST}`)
  const auctionList = (await response.json()).map((item: AuctionItem) => {
    return {
      id: item.id,
      title: item.title,
      subtitle: item.subtitle,
      artistName: item.artistName,
      images: item.images,
      viewCount: item.viewCount,
    }
  }) as AuctionItem[]
  return auctionList
}
