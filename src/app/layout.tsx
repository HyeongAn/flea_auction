import type { Metadata } from 'next'
import './globals.css'
import StyledComponentsRegistry from '../../lib/registry'
import Layout from '../components/layout/layout'

export const metadata: Metadata = {
  title: 'fleaauction',
  description: '미술품 컬렉팅을 처음 경험하는 당신을 위한, 가장 쉬운 미술품 경매 플랫폼 ‘플리옥션’입니다.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
