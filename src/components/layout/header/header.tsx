import React from 'react'
import headerIcon from '../../../../assets/icon/header_icon.png'
import { HeaderContainer } from '../../../../styles/container'
import HeaderList from './header-list'
import IconLink from '@/components/custom/Link/icon-link'

const Header = () => {
  const headerIconStyle = { height: '66px', padding: '13px 0' }
  return (
    <HeaderContainer>
      <IconLink href="/" src={headerIcon} alt="headerIcon" style={headerIconStyle} />
      <HeaderList />
    </HeaderContainer>
  )
}

export default Header
