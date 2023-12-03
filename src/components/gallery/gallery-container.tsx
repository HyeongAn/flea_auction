'use client'

import React, { useRef } from 'react'
import PullToRefresh from '../pull-to-refresh'
import Gallery from './gallery'

const GalleryContainer = () => {
  const pullToRefreshRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={pullToRefreshRef} style={{ width: '100%', height: '100%' }}>
      <PullToRefresh el={pullToRefreshRef} />
      <Gallery />
      <Gallery />
    </div>
  )
}

export default GalleryContainer
