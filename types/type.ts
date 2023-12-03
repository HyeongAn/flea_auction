export interface AuctionItem {
  id: number
  title: string
  subtitle: string
  artistName: string
  images: string[]
  viewCount: number
}

export interface SSEAuction {
  auctionId: number
  viewCount: number
}
