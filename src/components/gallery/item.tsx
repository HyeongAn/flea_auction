'use client'
import React from 'react'
import { AuctionItemProps } from '../../../types/props'
import Image from 'next/image'
import { ItemContentContainer, ItemContainer, ItemImageWrapper } from '../../../styles/container'
import { ItemArtistName, ItemSubTitle, ItemTitle, ItemViewCount } from '../../../styles/text-box'

const Item = ({ auctionItem }: AuctionItemProps) => {
  return (
    <ItemContainer>
      <ItemImageWrapper>
        <Image
          src={auctionItem.images[0]}
          alt="auction item image"
          fill
          priority
          sizes="100%"
          style={{ objectFit: 'cover', borderTopLeftRadius: '7px', borderTopRightRadius: '7px' }}
        />
        <ItemViewCount style={{ color: 'white', fontSize: '12px' }}>{auctionItem.viewCount} viewed</ItemViewCount>
      </ItemImageWrapper>
      <ItemContentContainer>
        <ItemTitle>{auctionItem.title}</ItemTitle>
        <ItemSubTitle>{auctionItem.subtitle}</ItemSubTitle>
        <ItemArtistName>{auctionItem.artistName}</ItemArtistName>
      </ItemContentContainer>
    </ItemContainer>
  )
}

export default Item
