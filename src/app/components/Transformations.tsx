"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import trans1 from "../public/trans1.webp";
import trans2 from "../public/trans2.webp";
import trans3 from "../public/trans3.webp";
import trans4 from "../public/trans4.webp";
import trans5 from "../public/trans5.webp";
import trans6 from "../public/trans6.webp";
import trans7 from "../public/trans7.webp";
import trans8 from "../public/trans8.webp";
import trans9 from "../public/trans9.webp";
import trans10 from "../public/trans10.webp";
import trans11 from "../public/trans11.webp";

const images = [
  trans1,
  trans2,
  trans3,
  trans4,
  trans5,
  trans6,
  trans7,
  trans8,
  trans9,
  trans10,
  trans11,
];

export default function Transformations(): React.ReactElement {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current;

      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;

      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <section id="transformations" className="section-wrapper">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-center relative mb-8 sm:mb-12 text-yellow-400 after:content-[''] after:block after:w-24 sm:after:w-32 after:h-1 after:mx-auto after:mt-4 sm:after:mt-5 after:bg-gradient-to-r after:from-transparent after:via-yellow-400 after:to-transparent after:opacity-70">
        تحولات أبطالنا
      </h2>
      <div className="slider-container">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={12}
          loop={true}
          grabCursor={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 10 },
            570: { slidesPerView: 2, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 12 },
            900: { slidesPerView: 3, spaceBetween: 16 },
            1200: { slidesPerView: 4, spaceBetween: 20 },
            1600: { slidesPerView: 5, spaceBetween: 24 },
          }}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="slide-image-wrap">
                <Image
                  src={img}
                  alt={`ba${idx + 1}`}
                  width={1200}
                  height={800}
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                  priority={idx < 2}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-controls" aria-hidden={false}>

          <button
            ref={prevRef}
            className="custom-prev"
            aria-label="الصورة التالية"
            title="الصورة التالية"
            type="button"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            ref={nextRef}
            className="custom-next"
            aria-label="الصورة السابقة"
            title="الصورة السابقة"
            type="button"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

        </div>
      </div>

      <style jsx>{`
        :root {
          --accent: #997a00;
          --text: #fff;
        }

        .section-wrapper {
          padding: 50px 0;
          text-align: center;
          background-color: #17171b;
          color: var(--text);
        }

        .slider-container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Target Swiper's root element (global) */
        :global(.swiper) {
          width: 100%;
          padding-bottom: 8px;
          box-sizing: border-box;
        }

        :global(.swiper-wrapper) {
          align-items: center;
        }

        :global(.swiper-slide) {
          display: flex;
          justify-content: center;
          align-items: center;
          height: auto;
        }

        .slide-image-wrap {
          width: 100%;
          max-width: 100%;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        /* style the actual <img> inside Next/Image wrapper */
        :global(.swiper-slide) :global(img) {
          display: block;
          width: 100%;
          height: auto;
          max-height: 420px;
          object-fit: contain;
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        @media (max-width: 569px) {
          :global(.swiper-slide) :global(img) {
            box-shadow: none !important;
            width: 95% !important;
            max-height: 380px !important;
            transform: scale(1.05);
          }
        }

        @media (max-width: 600px) {
          :global(.swiper-slide) :global(img) {
            max-height: 260px;
            border-radius: 14px;
          }
        }

        @media (max-width: 768px) {
          :global(.swiper-slide) :global(img) {
            min-width: 290px;
          }
        }

        @media (max-width: 400px) {
          :global(.swiper-slide) :global(img) {
            min-width: unset;
            width: 100% !important;
          }
        }

        @media (min-width: 1600px) {
          :global(.swiper-slide) :global(img) {
            box-shadow: 0 0 24px rgba(255, 230, 0, 0.3);
          }
        }

        .swiper-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 18px;
          align-items: center;
        }

        .custom-prev,
        .custom-next {
          border: 1px solid var(--accent);
          background: transparent;
          color: gold;
          padding: 10px;
          border-radius: 50%;
          width: 56px;
          height: 56px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          user-select: none;
          box-shadow: 0 0 12px rgba(255, 200, 0, 0.14);
          transition: all 0.2s ease;
        }

        .custom-prev:active,
        .custom-next:active {
          transform: translateY(1px);
        }

        .custom-prev:hover,
        .custom-next:hover {
          background: rgba(255, 209, 23, 0.06);
        }

        .custom-prev svg,
        .custom-next svg {
          width: 28px;
          height: 28px;
          transition: transform 0.3s ease;
          stroke: currentColor;
        }

        .custom-prev:hover svg,
        .custom-next:hover svg {
          transform: scale(1.1);
        }

        @media (min-width: 1200px) {
          .custom-prev,
          .custom-next {
            width: 64px;
            height: 64px;
          }
          .custom-prev svg,
          .custom-next svg {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>
    </section>
  );
}