import React, { useEffect, useState } from 'react'
import { ChildrenProps } from '../../types/props'

const PullToRefresh = (ref: React.RefObject<HTMLDivElement>) => {
  const [refreshing, setRefreshing] = useState(false)
  const [startY, setStartY] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function handleTouchStart(event: TouchEvent) {}

    function handleTouchMove(event: TouchEvent) {}

    function handleTouchEnd() {}

    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchmove', handleTouchMove)
    document.addEventListener('touchend', handleTouchEnd)

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])
}

export default PullToRefresh
