import React from 'react'
import { FooterBodyContainer, RowLeftContainer } from '../../../../styles/container'
import TextLink from '@/components/custom/Link/text-link'

const FooterBody = () => {
  const footerTextLinkStyle = {
    fontWeight: 'bold',
    fontSize: '13px',
    margin: '0 25px 25px 0',
    color: 'black',
  }
  const texts = [
    {
      content: '회사소개',
      href: 'http://fleaauction.co/download.cm?tk=YToyOntpOjA7czoxMzoiMzMyYzYzNmM5NjhmZSI7aToxO3M6MjI6ImYyMDIzMDExOTE3MGY1NGI0NTkzNzgiO30=',
    },
    { content: '협업제안', href: 'http://fleaauction.co/28' },
    { content: '이용약관', href: 'http://fleaauction.co/37' },
    { content: '개인정보 처리 방침', href: 'http://fleaauction.co/36' },
  ]

  return (
    <FooterBodyContainer>
      <RowLeftContainer style={{ marginTop: '37px' }}>
        {texts.map((text, index) => {
          return (
            <TextLink
              key={`footer-text-link-${index}`}
              href={text.href}
              content={text.content}
              style={footerTextLinkStyle}
            />
          )
        })}
      </RowLeftContainer>
      <p>
        주식회사 플리옥션 (Flea Auction Inc.) 대표 이연주 사업자 등록번호 : 878-81-01769 <br />
        통신판매업: 제2021-서울서초-1074 사업장 소재지 : 서울특별시 강남구 테헤란로63길 17, 양지빌딩 1층
        <br />
        개인정보보호책임자: 오진석
        <br />
      </p>
      <p style={{ margin: '50px 0' }}>@Copyright 2020. Flea Auction Inc. all rights reserved.</p>
    </FooterBodyContainer>
  )
}

export default FooterBody
