'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Item from './item'
import leftArrow from '../../../assets/svg/left-arrow.svg'
import rightArrow from '../../../assets/svg/right-arrow.svg'
import { useQueryClient } from '@tanstack/react-query'
import { AuctionItem, SSEAuction } from '../../../types/type'
import { shuffleArray } from '../../../lib/util.module'
import { SliderButton } from '../../../styles/button'
import { CardSlider, GalleryContainer, SlideContainer } from '../../../styles/container'

const Gallery = () => {
  // get cache data
  const queryClient = useQueryClient()
  const data: AuctionItem[] | undefined = queryClient.getQueryData(['auctionList'])

  // update SSE Auction data
  const [sseAuction, setSseAuction] = useState<SSEAuction>()

  // About carousel
  const slideRef = useRef<HTMLDivElement>(null)
  const auctionItemListLength = data?.length
  const [currentIndex, setCurrentIndex] = useState(3)
  const [auctionList, setAuctionList] = useState<AuctionItem[]>([])
  const [firstRender, setFirstRender] = useState(true)

  // connect to SSE
  useEffect(() => {
    const eventSource = new EventSource(`${process.env.API_BASE_URL}/sse/event`)
    eventSource.addEventListener('sse.auction_viewed', (event) => {
      const data: SSEAuction = JSON.parse(event.data)
      setSseAuction(data)
    })
    return () => {
      eventSource.close()
    }
  }, [])

  // update auctionList upto sseAuction
  useEffect(() => {
    if (sseAuction) {
      const newList = [...auctionList].map((item) => {
        if (item.id === sseAuction.auctionId) item.viewCount = sseAuction.viewCount
        return item
      })
      setAuctionList(newList)
    }
  }, [sseAuction])

  // get carousel Array
  useEffect(() => {
    let newList = shuffleArray(data)
    newList = [...newList.slice(newList.length - 3, newList.length), ...newList, ...newList.slice(0, 3)]
    setAuctionList(newList)
  }, [data])

  // use carousel
  useEffect(() => {
    const slideCurrent = slideRef.current
    if (slideCurrent && auctionItemListLength !== undefined) {
      if (currentIndex === -1) {
        setCurrentIndex(auctionItemListLength - 1)
        slideCurrent.style.transform = `translateX(-${auctionItemListLength * 340}px)`
        slideCurrent.style.transition = 'transform 0s ease-in-out 0s'
        setTimeout(() => {
          slideCurrent.style.transform = `translateX(-${(auctionItemListLength - 1) * 340}px)`
          slideCurrent.style.transition = 'all 0.5s ease-in-out'
        }, 50)
      } else if (currentIndex === auctionList.length - 2) {
        setCurrentIndex(4)
        slideCurrent.style.transform = `translateX(-${3 * 340}px)`
        slideCurrent.style.transition = 'transform 0s ease-in-out 0s'
        setTimeout(() => {
          slideCurrent.style.transform = `translateX(-${4 * 340}px)`
          slideCurrent.style.transition = 'all 0.5s ease-in-out'
        }, 50)
      } else if (currentIndex === 3 && firstRender) {
        slideCurrent.style.transform = `translateX(-${currentIndex * 340}px)`
        slideCurrent.style.transition = 'transform 0s ease-in-out 0s'
        setFirstRender(false)
      } else {
        slideCurrent.style.transform = `translateX(-${currentIndex * 340}px)`
        slideCurrent.style.transition = 'all 0.5s ease-in-out'
      }
    }
  }, [currentIndex])

  const onPrevClick = () => {
    setCurrentIndex((prev) => prev - 1)
  }

  const onNextClick = () => {
    setCurrentIndex((prev) => prev + 1)
  }

  return (
    <GalleryContainer>
      <SliderButton onClick={() => onPrevClick()}>
        <Image src={leftArrow} alt="left arrow icon" style={{ position: 'absolute' }} />
      </SliderButton>
      <SlideContainer>
        <CardSlider ref={slideRef}>
          {auctionList.map((auctionItem, index) => {
            return <Item auctionItem={auctionItem} key={`auctionItem-${auctionItem.title}-${index}`} />
          })}
        </CardSlider>
      </SlideContainer>
      <SliderButton onClick={() => onNextClick()}>
        <Image src={rightArrow} alt="right arrow icon" />
      </SliderButton>
    </GalleryContainer>
  )
}

export default Gallery
