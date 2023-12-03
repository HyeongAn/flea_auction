import React from 'react'
import { DotLoadingContainer, OrangeDot, RedDot, YellowGreenDot } from '../../../styles/loading'

const DotLoading = () => {
  return (
    <DotLoadingContainer>
      <RedDot />
      <OrangeDot />
      <YellowGreenDot />
    </DotLoadingContainer>
  )
}

export default DotLoading
