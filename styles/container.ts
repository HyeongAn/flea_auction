'use client'

import styled from 'styled-components'

// ? common container

export const ColumnCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RowCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RowSpaceBetweenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 0 30px;
`

export const HeaderMenuWrapper = styled.a`
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 13px 0;
`

export const HeaderMenuList = styled.li`
  padding: 0 15px;

  :hover {
    color: #1ae4d1;
    transition: all 0.3s ease-in-out;
  }
`