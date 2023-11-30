import { StaticImageData } from 'next/image'

export interface LayoutProps {
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
