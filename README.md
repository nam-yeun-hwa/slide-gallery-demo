# slide-gallery-demo
swiper과 같은 좌우 이미지 슬라이더 입니다.

### 미리보기
<img src="https://github.com/nam-yeun-hwa/slide-gallery-demo/blob/main/public/screenshot.png?raw=true" width="300" height="auto"/>


### 주요 기능
- 페이지네이션 버튼에 따라 이미지가 좌우로 이동합니다. 
- 이미지를 좌 우 슬라이드 하면 이미지가 방향에 따라 이동 합니다.


### 기술 스택
- **프론트엔드**: React v19, next14, typescript, tailwind
  

## 폴더 구조
<pre>
slide-gallery-demo/
├── public/                               # 정적 파일 (icon, image등)
├── src/                                  # 소스 코드의 메인 디렉토리
│   ├── app/                              # 재사용 가능한 UI 컴포넌트  
│   ├── components/                       # 재사용 가능한 UI 컴포넌트
│   │   ├── common/                       # 공통 컴포넌트 (Button, Input 등)
│   │   │   ├── gallery
│   │   │   │     ├── Slider.tsx
│   │   │   │     └── ImageBox.tsx
│   │   │   └── tabInnerTabs.tsx
│   │   │         └── InnerTabs.tsx  
│   ├── hooks/                            # 커스텀 훅
│   │   ├── useDragAndDrop.ts
│   │   └── useSlideBanner.ts
│   └── styles/                           # 전역 스타일 및 테마
│       ├── common.css
│       └── global.css
├── README.md                             # 프로젝트 설명
└── package.json                          # 프로젝트 의존성
</pre>


## useDragAndDrop.ts
useDragAndDrop은 React 애플리케이션에서 슬라이더(캐러셀) 컴포넌트의 드래그 앤 드롭 기능을 구현하기 위한 커스텀 훅입니다. 이 훅은 마우스와 터치 이벤트를 처리하여 사용자가 슬라이드를 드래그하여 이동할 수 있도록 지원하며, 슬라이드 전환의 부드러운 동작을 보장합니다. 아래는 이 훅의 주요 기능과 동작 방식을 한글로 설명한 내용입니다.

### 주요 기능
드래그 앤 드롭 지원: 사용자가 마우스 또는 터치 입력을 통해 슬라이드를 좌우로 드래그하여 이동할 수 있습니다.
슬라이드 전환 로직: 드래그 거리가 일정 임계값(threshold)을 초과하면 다음 또는 이전 슬라이드로 이동합니다.
전환 상태 관리: 슬라이드 전환 중에는 추가 드래그를 방지하여 부드러운 애니메이션을 보장합니다.
반응형 이벤트 처리: 마우스 이벤트(mousedown, mousemove, mouseup, mouseleave)와 터치 이벤트(touchstart, touchmove, touchend)를 모두 지원하여 데스크톱과 모바일 환경에서 일관된 사용자 경험을 제공합니다.
드래그 오프셋 계산: 드래그 중 실시간으로 이동 거리(dragOffset)를 계산하여 슬라이드의 위치를 동적으로 업데이트합니다.
애니메이션 최적화: requestAnimationFrame을 사용하여 드래그 이동을 부드럽게 렌더링합니다.
### 입력 매개변수 (DragAndDropProps)

이 훅은 다음과 같은 매개변수를 받아 동작합니다.
- slideCount: 전체 슬라이드의 개수.
- currentIndex: 현재 표시 중인 슬라이드의 인덱스.
- setIndex: 슬라이드 인덱스를 업데이트하는 함수.
- isTransitioning: 슬라이드 전환 중인지 여부를 나타내는 상태.
- setIsTransitioning: 전환 상태를 업데이트하는 함수.

### 반환값 (DragAndDropState)

훅은 다음과 같은 객체를 반환합니다.
- dragOffset: 드래그 중 계산된 이동 거리(픽셀 단위).
- isDragging: 현재 드래그 중인지 여부를 나타내는 불리언 값.
- eventHandlers: 마우스와 터치 이벤트를 처리하기 위한 핸들러 객체.
- onMouseDown: 드래그 시작(마우스 클릭).
- onMouseMove: 드래그 이동(마우스 이동).
- onMouseUp: 드래그 종료(마우스 뗌).
- onMouseLeave: 슬라이더 영역 밖으로 마우스가 벗어날 때 드래그 종료.
- onTouchStart: 터치 드래그 시작.
- onTouchMove: 터치 드래그 이동.
- onTouchEnd: 터치 드래그 종료.
- sliderRef: 슬라이더 컨테이너의 DOM 요소를 참조하는 React.RefObject.

## useSlideBanner.ts 
useSlideBanner는 React 애플리케이션에서 슬라이드 배너(캐러셀) 컴포넌트를 관리하기 위한 커스텀 훅입니다. 이 훅은 슬라이드 데이터, 활성화 상태, 네비게이션 및 페이지네이션 표시 여부, 현재 슬라이드 인덱스, 전환 상태 등을 관리하며, 슬라이드 간 이동과 관련된 기능을 제공합니다.

### 주요 기능
- 슬라이드 데이터 관리: Product 타입의 슬라이드 데이터를 저장하고 업데이트할 수 있습니다.
- 활성화 상태 관리: 배너의 활성화 여부(activeState)를 제어하여 슬라이드의 동작을 켜거나 끌 수 있습니다.
- 네비게이션 및 페이지네이션 제어: 네비게이션 버튼(이전/다음)과 페이지네이션(슬라이드 인디케이터)의 표시 여부를 설정할 수 있습니다.
- 슬라이드 인덱스 관리: 현재 표시 중인 슬라이드의 인덱스를 추적하고, 경계를 넘어갈 경우 순환하도록 처리합니다(첫 슬라이드에서 이전 → 마지막 슬라이드, 마지막 슬라이드에서 다음 → 첫 슬라이드).
- 전환 상태 관리: 슬라이드 전환 중(isTransitioning)에는 추가 전환 요청을 차단하여 부드러운 애니메이션을 보장합니다.
- 슬라이드 이동: 특정 슬라이드로 이동하는 기능을 제공하며, 전환 애니메이션 완료 후 상태를 업데이트합니다.

### 입력 매개변수
initialSlides (선택): 초기 슬라이드 데이터로, Product[] 타입의 배열입니다. 기본값은 빈 배열([])입니다.

### 반환값 (SlideBannerState)

#### 상태
- slides: 현재 슬라이드 데이터 배열 (Product[]).
- activeState: 배너의 활성화 여부 (boolean).
- showNavigation: 네비게이션 버튼 표시 여부 (boolean).
- showPagination: 페이지네이션 표시 여부 (boolean).
- activeSlideIndex: 현재 활성화된 슬라이드의 인덱스 (number).
- isTransitioning: 슬라이드 전환 중인지 여부 (boolean).

#### 핸들러 함수
- updateSlides: 슬라이드 데이터를 업데이트하는 함수.
- handleSetActiveState: 배너의 활성화 상태를 설정하는 함수.
- handleSetShowNavigation: 네비게이션 표시 여부를 설정하는 함수.
- handleSetShowPagination: 페이지네이션 표시 여부를 설정하는 함수.
- handleSetActiveSlideIndex: 현재 슬라이드 인덱스를 설정하며, 경계 조건(첫/마지막 슬라이드)을 처리하는 함수.
- handleSetIsTransitioning: 전환 상태를 설정하는 함수.
- handleGoToSlide: 특정 인덱스의 슬라이드로 이동하며, 전환 애니메이션을 관리하는 함수.

