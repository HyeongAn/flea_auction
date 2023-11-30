import React from 'react'
import Image from 'next/image'
import headerIcon from '../../../../assets/icon/header_icon.png'
import {
  HeaderContainer,
  HeaderMenuWrapper,
  RowCenterContainer,
  RowSpaceBetweenContainer,
} from '../../../../styles/container'
import HeaderList from './header-list'
import IconLink from '@/components/custom/Link/icon-link'

const Header = () => {
  return (
    <HeaderContainer>
      <IconLink href="/" height="66px" padding="13px 0" src={headerIcon} alt="headerIcon" />
      <HeaderList />
    </HeaderContainer>
  )
}

export default Header
