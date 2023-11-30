import React from 'react'
import IconLink from '../../custom/Link/icon-link'
import kakaoIcon from '../../../../assets/icon/kakao_icon.png'
import instagramIcon from '../../../../assets/icon/instagram_icon.jpeg'
import { FooterHeaderContainer } from '../../../../styles/container'

const FooterHeader = () => {
  const footerIconLinkStyle = { width: '18px', height: '18px', margin: '0 21px 21px 0' }
  const icons = [
    { href: 'https://www.instagram.com/fleaauction.co/', src: instagramIcon, alt: 'instagram icon' },
    { href: 'https://pf.kakao.com/_IwXIs', src: kakaoIcon, alt: 'kakao Icon' },
  ]

  return (
    <FooterHeaderContainer>
      {icons.map((icon, index) => {
        return <IconLink {...icon} style={footerIconLinkStyle} key={`footer-icon-link-${index}`} />
      })}
    </FooterHeaderContainer>
  )
}

export default FooterHeader
