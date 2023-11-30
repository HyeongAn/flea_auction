import React from 'react'
import Link from 'next/link'
import { TextLinkProps } from '../../../../types/props'

const TextLink = ({ href, content, fontWeight, fontSize, color, padding, margin }: TextLinkProps) => {
  return (
    <Link href={href} style={{ fontWeight, fontSize, color, padding, margin }}>
      {content}
    </Link>
  )
}

export default TextLink
