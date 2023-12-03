import React, { useEffect, useState } from 'react'
import { ColumnCenterContainer } from '../../styles/container'
import DotLoading from './loading/dot-loading'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getAuctionList } from '../../lib/api.module'
import { AuctionItem } from '../../types/type'
import { shuffleArray } from '../../lib/util.module'

interface PullToRefreshProps {
  el: React.RefObject<HTMLDivElement>
}

const PullToRefresh = ({ el }: PullToRefreshProps) => {
  const [refreshing, setRefreshing] = useState(false)
  const [startY, setStartY] = useState(0)
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: getAuctionList,
    onSettled() {
      queryClient.invalidateQueries({ queryKey: ['auctionList'] })
    },
    onSuccess() {
      const oldData: AuctionItem[] | undefined = queryClient.getQueryData(['auctionList'])
      queryClient.setQueryData(['auctionList'], [...shuffleArray(oldData)])
    },
  })

  useEffect(() => {
    if (!el.current) return
    const element = el.current

    function handleTouchStart(event: TouchEvent) {
      setStartY(event.touches[0].clientY)
    }

    function handleTouchMove(event: TouchEvent) {
      const moveY = event.touches[0].clientY
      const pullDistance = moveY - startY

      if (pullDistance > 0) {
        // event.preventDefault()

        if (pullDistance > 80) {
          element.style.transform = `translateY(${40}px)`
          element.style.transition = '0.3s'
          setRefreshing(true)
        }
      }
    }

    function handleTouchEnd() {
      if (refreshing) {
        mutate()
        setTimeout(() => {
          setRefreshing(false)
          element.style.transform = `translateY(${0})`
        }, 1000)
      }
    }

    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchmove', handleTouchMove)
    document.addEventListener('touchend', handleTouchEnd)

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [refreshing, startY, el])

  return (
    <ColumnCenterContainer>
      <div>{refreshing ? <DotLoading /> : null}</div>
    </ColumnCenterContainer>
  )
}

export default PullToRefresh
