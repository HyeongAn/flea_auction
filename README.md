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

# 주관식 질문

## React Native로 앱 개발 경험이 있다면 상태관리는 어떤 것들을 사용해 보았으며 가장 선호하는 방법과 이유를 알려주세요.

다른 사전 과제로 React Native로 구글설문지 앱을 만들어 본적이 있습니다. 사전과제 요구사항으로 recoil을 사용하게 되었는데 react의 state처럼 사용할 수 있다는게 큰 장점이었습니다. 또한 Redux와는 다르게, 보일러플레이트도 적어서 공식문서를 보고 쉽게 적용할 수 있었습니다. 이전 직장에서는 zustand으로 상태관리를 하였는데 recoil과 비슷한 느낌이라 쉽게 적응할 수 있었습니다.

## Flutter로 앱 개발 경험이 있다면 상태관리는 어떤 것들을 사용해 보았으며 가장 선호하는 방법과 이유를 알려주세요.

--없음.

## 지금까지 앱 개발시 가장 challenging 주제는 무엇이었고 어떻게 해결하였습니까?

이번 사전과제를 진행하면서 `react-query`를 처음 사용해보았는데, 시간이 오래 걸리는 문제가 있었지만 공식문서가 너무나도 정리가 잘 되어 있어서 해결하는데 어렵지 않았습니다.

다만 `carousel`과 `pull to refresh`를 어떻게 만들어야할지, `next.js`를 사용하면서 `react-query`의 `cache`를 어떻게 사용할 것인지에 대한 고민이 많았습니다.

### carousel

이번 `carousel`을 구현하며 만들어 보고 싶었던것은 최대3개의 카드가 보여지고 하나씩 무한으로 매끄럽게 돌아가는 `carousel`을 만들어 보고 싶었습니다.

정보를 담고 있는 카드의 `width`와 `margin`을 계산하여 버튼을 누를 때 마다 `translateX`를 변경하여 x축으로의 이동이 가능하도록 하였고, 무한 `carousel`을 구현하기 위해 mapping하는 해당 배열의 끝 부분과 앞 부분을 잘라 새로운 배열을 만들어 사용하였습니다.

`currentIndex`가 -1이나 mapping하는 배열의 끝으로 가게 되면 `transition`의 애니매이션을 끊은 후 `translateX`로 x축으로 이동, 이후 다시 `transition`으로 애니메이션을 주려고 했습니다. 두번의 `transform`과 두번의`transition`이 useEffect내부에서 차례대로 이루어져야 했지만, 애니메이션이 끊어지지 않고 이동하는 현상이 있어 `setTimeout`으로 해당 작업을 동기적으로 실행할 수 있도록 해주어 문제를 해결할 수 있었습니다.

### pull to refresh

`pull to refresh`는 모바일에서 많이 사용하는 방법으로 `touchEvent`를 이용하여 구현하였습니다. `gallery`를 감싸고 있는 `container`를 만들고 해당 element에 ref를 부여하여 `touchEvent`가 발생시 해당 Y축의 거리를계산하고 `transform`과 `transition`를 주었고, loading state로 loading 인디케이터가 작동할 수 있도록 하였습니다.

터치가 끝났을 경우 `setTimeout`으로 loading 인디케이터가 1초동안 보이고 다시 `transform`으로 y축을 원래 있던 자리로 두며 react query의 cache를 업데이트 하는 간단한 메커니즘을 만들었습니다.

react query의 useMutate는 반환되는 `mutate()`로 사용하였습니다.
react의 hook으로 eventHandler 함수의 내부로 들어갈 수 없기도 하거니와 `mutate()` 통해 pull to refresh 가 진행 된 후 함수가 실행되길 원했기 때문입니다. 이후 cache의 상태가 업데이트 되고 `gallery`에 있는 `card`들의 정보가 자동으로 업데이트 되도록 하였습니다.

### next.js의 cache

next.js로 개인 블로그를 개설했을 때에는 규모가 그리 크지 않아 initialData로 계속해서 props로 값을 내려주면서 사용하다보니 props drilling이 발생하고 계속해서 type을 지정해줘야하는 불편함이 있었습니다. 이번엔 hydration을 사용하여 이와 같은 문제를 해결하고 싶었습니다.

서버에서 쿼리를 미리 가져온다음 해당 쿼리를 queryClient로 dehydrate하고 이 데이터를 hydrate state에 담아 클라이언트에서는 캐시되어 있는 쿼리를 가져오도록 하여 앞선 문제를 해결하였습니다.
