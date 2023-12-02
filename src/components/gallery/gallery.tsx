'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Item from './item'
import leftArrow from '../../../assets/svg/left-arrow.svg'
import rightArrow from '../../../assets/svg/right-arrow.svg'
import { useQueryClient } from '@tanstack/react-query'
import { AuctionItem } from '../../../types/type'
import { shuffleArray } from '../../../lib/util.module'
import { SliderButton } from '../../../styles/button'
import { AuctionListContext } from '../../../lib/context.module'
import { CardSlider, GalleryContainer, SlideContainer } from '../../../styles/container'

const Gallery = () => {
  // get cache data
  const queryClient = useQueryClient()
  const data: AuctionItem[] | undefined = queryClient.getQueryData(['auctionList'])

  // store cache data
  const { auctionItemList, setAuctionItemList } = useContext(AuctionListContext)

  // About carousel
  const slideRef = useRef<HTMLDivElement>(null)
  const auctionItemListLength = auctionItemList.length
  const [currentIndex, setCurrentIndex] = useState(3)
  const [auctionList, setAuctionList] = useState<AuctionItem[]>([])

  useEffect(() => {
    if (data) setAuctionItemList(data)
  }, [])

  // get carousel Array
  useEffect(() => {
    let newList = shuffleArray(auctionItemList)
    newList = [...newList.slice(newList.length - 3, newList.length), ...newList, ...newList.slice(0, 3)]
    setAuctionList(newList)
  }, [auctionItemList])

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
      } else if (currentIndex === 3) {
        slideCurrent.style.transform = `translateX(-${currentIndex * 340}px)`
        slideCurrent.style.transition = 'transform 0s ease-in-out 0s'
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
