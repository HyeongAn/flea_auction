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

export const RowLeftContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const RowRightContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

// ? headerContainer

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 0 30px;

  @media (max-width: 390px) {
    padding: 0 20px;
  }
`

export const HeaderMenuWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 66px;
  padding: 13px 0;
  font-size: 15px;
  cursor: pointer;
`

export const HeaderMenuList = styled.li`
  padding: 0 15px;

  :hover {
    color: #1ae4d1;
    transition: all 0.3s ease-in-out;
  }
`

// ? footerContainer

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;

  @media (max-width: 390px) {
    padding: 0 20px;
  }
`

export const FooterHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #e5e7eb;
`

export const FooterBodyContainer = styled.div`
  width: 100%;

  & p {
    font-size: 13px;
    color: rgb(91, 91, 91);
    line-height: 1.5;
  }
`

// ? galleryContainer

export const GalleryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 200px;
  width: 100%;
  height: 50%;
  position: relative;

  @media (max-width: 390px) {
    padding: 50px 0;
  }
`

export const ItemContainer = styled.div`
  min-width: 300px;
  height: 400px;
  border: 1px solid #e5e7eb;
  border-radius: 7px;
  margin: 0 20px;
  box-shadow: 0 0 8px rgb(0 0 0 / 20%);
`

export const ItemImageWrapper = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
`

export const ItemContentContainer = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  position: relative;
`

export const SlideContainer = styled.div`
  width: 100%;
  height: 420px;
  max-width: 1020px;
  min-width: 340px;
  display: flex;
  align-items: center;
  overflow: hidden;
`
export const CardSlider = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
