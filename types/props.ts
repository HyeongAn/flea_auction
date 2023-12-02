import { StaticImageData } from 'next/image'
import { AuctionItem } from './type'

// ? component props
export interface ChildrenProps {
  children: React.ReactNode
}

export interface GalleryProps {
  auctionList: AuctionItem[]
}

export interface AuctionItemProps {
  auctionItem: AuctionItem
}

// ? custom props
export interface IconLinkProps {
  href: string
  src: StaticImageData
  alt: string
  style?: React.CSSProperties | undefined
}
export interface TextLinkProps {
  href: string
  content: string
  style?: React.CSSProperties | undefined
}

export interface CardImageProps {
  src: StaticImageData | string
  alt: string
  style?: React.CSSProperties | undefined
}
