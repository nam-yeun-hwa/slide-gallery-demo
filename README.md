# slide-gallery-demo
swiper과 같은 좌우 이미지 슬라이더 입니다.

## 미리보기
<img src="https://github.com/nam-yeun-hwa/pdf-maker-demo/blob/main/public/sample.png?raw=true" width="500" height="auto"/>
아래 링크를 클릭하면 동영상 미리보기가 제공 됩니다.</br>
[📄 미리보기](https://drive.google.com/file/d/1Jvk1dQwbzZAHGGur31HfDuaFqhWcJxOV/preview)

## 주요 기능
- 페이지네이션 버튼에 따라 이미지가 좌우로 이동합니다. 
- 이미지를 좌 우 슬라이드 하면 이미지가 방향에 따라 이동 합니다.


## 기술 스택
- **프론트엔드**: React v19, next14, typescript, tailwind
  

# 폴더 구조
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


