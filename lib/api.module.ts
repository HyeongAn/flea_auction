import { AuctionItem } from '../types/type'
import { shuffleArray } from './util.module'

export const getAuctionList = async () => {
  const response = await fetch(`${process.env.API_BASE_URL}/auctions/ongoing`)
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
