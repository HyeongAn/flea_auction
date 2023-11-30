import React from 'react'
import Link from 'next/link'
import { IconLinkProps } from '../../../../types/props'
import Image from 'next/image'

const IconLink = ({ href, width, height, src, alt, padding, margin }: IconLinkProps) => {
  return (
    <Link href={href} style={{ width, height, padding, margin }}>
      <div style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <Image src={src} alt={alt} style={{ width: '100%', height: '100%' }} />
      </div>
    </Link>
  )
}

export default IconLink
