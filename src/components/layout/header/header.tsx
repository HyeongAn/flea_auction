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

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderMenuWrapper href="/">
        <div style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <Image src={headerIcon} alt="headerIcon" style={{ width: '100%', height: '100%' }} />
        </div>
      </HeaderMenuWrapper>
      <HeaderList />
    </HeaderContainer>
  )
}

export default Header
