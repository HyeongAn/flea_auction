import React from 'react'
import Link from 'next/link'
import { TextLinkProps } from '../../../../types/props'

const TextLink = ({ href, content, style }: TextLinkProps) => {
  return (
    <Link href={href} style={{ ...style }}>
      {content}
    </Link>
  )
}

export default TextLink
