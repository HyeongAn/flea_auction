# Flea_Auction

## 배포

[Flea_Auction](https://flea-auction.vercel.app/)

## Stacks

<div align=center> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  
  <br>
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <br>
  
</div>

## 요구사항

- 현재 진행중인 작품의 아이디가 1800~1820번 까지 총 21점 있다고 가정했을 때, 위 아래 모두 21점이 출력되어야 한다.
- 나열 되는 순서는 랜덤 형태로 출력되어야 한다.
- pull-to-refresh 기능을 통해 정렬 순서는 매번 바뀌어야 한다.
- SSE end-point에서 여러 종류의 이벤트가 있지만 `sse.auction_viewd`만 처리한다.
- 하나의 화면의 2개의 스크롤 뷰를 넣어 페이지를 구성하라.
- 만약 1816번의 작품이 동시 위 아래 모두 출력이 되었다고 하면 SSE 이벤트 data payload를 수신시 2개의 박스의 조회수가 달라져야 한다.

## Guide

### Requirements

For building and running the application you need

- Node.js v18.2.0
- npm 8.9.0

### Installation

```shell
git clone https://github.com/HyeongAn/flea_auction.git
cd flea_auction
nvm use v18.2.0
npm install
```

### Execution

```shell
cat > .env
API_BASE_URL = "insert your api base url"
npm run build
npm run dev
```
