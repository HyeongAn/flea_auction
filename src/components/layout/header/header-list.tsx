import React from 'react'
import { HeaderMenuList, HeaderMenuWrapper, RowSpaceBetweenContainer } from '../../../../styles/container'

const HeaderList = () => {
  return (
    <RowSpaceBetweenContainer>
      <div></div>
      {Array.from({ 0: 'Team', 1: 'Flea Crew', 2: '고객센터', length: 3 }).map((menu, index) => {
        return (
          <HeaderMenuList key={`header-menu-${index}`}>
            <HeaderMenuWrapper>{menu}</HeaderMenuWrapper>
          </HeaderMenuList>
        )
      })}
    </RowSpaceBetweenContainer>
  )
}

export default HeaderList
