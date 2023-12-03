'use client'

import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  0%, 100% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`

export const DotLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoadingDot = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  animation: ${loading} 1s 0s linear infinite;
`

export const RedDot = styled(LoadingDot)`
  background-color: red;
  animation-delay: 0s;
`

export const OrangeDot = styled(LoadingDot)`
  background-color: orange;
  animation-delay: 0.2s;
`

export const YellowGreenDot = styled(LoadingDot)`
  background-color: yellowgreen;
  animation-delay: 0.4s;
`
