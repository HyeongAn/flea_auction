'use client'
import miniMenu from '../../../../assets/svg/mini-menu.svg'
import React, { useEffect, useState } from 'react'
import { HeaderMenuList, HeaderMenuWrapper, RowSpaceBetweenContainer } from '../../../../styles/container'
import IconLink from '@/components/custom/Link/icon-link'

const HeaderList = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <RowSpaceBetweenContainer>
      {windowWidth >= 500 ? (
        Array.from({ 0: 'Team', 1: 'Flea Crew', 2: '고객센터', length: 3 }).map((menu, index) => {
          return (
            <HeaderMenuList key={`header-menu-${index}`}>
              <HeaderMenuWrapper>{menu}</HeaderMenuWrapper>
            </HeaderMenuList>
          )
        })
      ) : (
        <IconLink href="/" src={miniMenu} alt="headerIcon" style={miniMenuStyle} />
      )}
    </RowSpaceBetweenContainer>
  )
}

const miniMenuStyle = { width: '30px', height: '30px' }

export default HeaderList
