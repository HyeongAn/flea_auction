'use client'
import React from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { AuctionItem } from '../../../types/type'
import { shuffleArray } from '../../../lib/util.module'

const Gallery = () => {
  const queryClient = useQueryClient()
  const data: AuctionItem[] | undefined = queryClient.getQueryData(['auctionList'])
  const auctionList = shuffleArray(data)

  return <div>갤러리 입니다</div>
}

export default Gallery
