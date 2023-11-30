import { StaticImageData } from 'next/image'

export interface LayoutProps {
  children: React.ReactNode
}
export interface IconLinkProps {
  href: string
  src: StaticImageData
  alt: string
  width?: string
  height?: string
  padding?: string
  margin?: string
}

export interface TextLinkProps {
  href: string
  content: string
  fontWeight?: string
  fontSize?: string
  color?: string
  padding?: string
  margin?: string
}
