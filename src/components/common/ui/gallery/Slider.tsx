"use client";
import useSlideBanner from "@/hook/useSlideBanner";
import Image from "next/image";
import { Product } from "@/data/products";
import { useDragAndDrop } from "@/hook/useDragAndDrop";
import ImageBox from "./ImageBox";
import classNames from "classnames";

interface SwiperProps {
  products: Product[];
  className?: string;
}

const Slider: React.FC<SwiperProps> = ({ className = "", products }) => {
  const {
    slides,
    activeSlideIndex,
    isTransitioning,
    showPagination,
    handleSetActiveSlideIndex,
    handleSetIsTransitioning,
  } = useSlideBanner(products);

  const { eventHandlers, sliderRef } = useDragAndDrop({
    slideCount: slides.length,
    currentIndex: activeSlideIndex,
    setIndex: handleSetActiveSlideIndex,
    isTransitioning,
    setIsTransitioning: handleSetIsTransitioning,
  });

  const goToSlide = (index: number): void => {
    if (isTransitioning || index === activeSlideIndex) return;
    handleSetIsTransitioning(true);
    handleSetActiveSlideIndex(index);
    setTimeout(() => handleSetIsTransitioning(false), 300);
  };

  if (slides.length === 0) {
    return <></>;
  }

  const transStyle = "transition-transform duration-300 ease-in-out ";
  const boxStyle = "flex w-[65%] pb-10";
  const translateX = `calc(-${activeSlideIndex * 100}%`;
  const pagingContainStyle = "absolute bottom-0 flex space-x-2 transform -translate-x-1/2 left-1/2";
  const pagingTransStyle = "transition-all duration-200";
  const pagingBtnStyle = `w-3 h-3 rounded-full bg-gray-400`;

  return (
    <div className={`relative w-full pb-[110%] mb-6 bg-transparent overflow-hidden ${className}`}>
      <div
        className={`absolute inset-0  ${boxStyle} ${transStyle}`}
        ref={sliderRef}
        {...eventHandlers}
        style={{ transform: `translateX(${translateX})` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="box-border relative z-10 h-full min-w-full p-1 last:mr-6 first:ml-6 ">
            <ImageBox>
              <Image
                src={slide.imageUrl}
                alt={slide.description}
                className="object-cover w-full h-full rounded-20"
                width={800}
                height={400}
              />
            </ImageBox>
          </div>
        ))}
      </div>

      {showPagination && slides.length > 0 && (
        <div className={pagingContainStyle}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={classNames(pagingBtnStyle, pagingTransStyle, {
                "bg-red-400 scale-110": index === activeSlideIndex,
              })}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
