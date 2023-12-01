import { StaticImageData } from 'next/image'
import { AuctionItem } from './type'

export interface ChildrenProps {
  children: React.ReactNode
}
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
export interface GalleryProps {
  auctionList: AuctionItem[]
}
