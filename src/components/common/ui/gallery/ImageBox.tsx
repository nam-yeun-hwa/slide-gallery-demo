import { ReactNode } from "react";

interface ImageBoxProps {
  children: ReactNode;
}

const container =
  "p-7 h-full w-full flex items-center justify-center rounded-[30px] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.1)]";

const innerContainer = "flex flex-col w-full h-full";

const ImageBox: React.FC<ImageBoxProps> = ({ children }) => {
  return (
    <div className={container}>
      <div className={innerContainer}>
        <div className="relative z-10 w-full pb-[100%] text-center">
          <div className="absolute inset-0 bg-pink-200 rounded-20">{children}</div>
        </div>
        <p className="box-content w-full pt-20 mb-2 overflow-hidden font-medium break-all leading-14 tracking-narrow line-clamp-1 text-ellipsis text-gray-999 text-12">
          T 우주패스 with Disney+ 4개월 40% 할인
        </p>
        <span className="text-clamp-2 font-normal leading-20 tracking-narrow pr-[1px]">
          Disney+ 이용권 + 추가 상품 1개 더
        </span>
        <span>
          <span>40%</span>
          <span>9,900원</span>
        </span>
        {/* <span>
          <span>5,940원~</span>
          <span>/1개월</span>
        </span>
        <span>
          <span>BEST</span>
          <span>2개구성</span>
        </span> */}
      </div>
    </div>
  );
};

export default ImageBox;
