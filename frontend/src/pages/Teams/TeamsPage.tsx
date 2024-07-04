import React from "react";
import ReactDOM from "react-dom/client";
// import EmblaCarousel from './EmblaCarousel'
import EmblaCarousel from "../../components/Carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

import "../../css/base.css";
import "../../css/sandbox.css";
import "../../css/embla.css";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 11;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const TeamsPage: React.FC = () => (
  <>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </>
);

export default TeamsPage;

// import React, { useState, useRef, useEffect, useCallback } from "react";

// const useCarousel = (itemCount: any, visibleItems = 7) => {
//   const [currentIndex, setCurrentIndex] = useState(Math.floor(itemCount / 2));
//   const [isSwiping, setIsSwiping] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [swipeX, setSwipeX] = useState(0);

//   const containerRef = useRef<any>(null);

//   const handleMouseDown = useCallback(
//     (e: any) => {
//       setIsSwiping(true);
//       setStartX(e.pageX - swipeX);
//     },
//     [swipeX]
//   );

//   const handleMouseMove = useCallback(
//     (e: any) => {
//       if (!isSwiping) return;
//       const currentX = e.pageX - startX;
//       setSwipeX(currentX);
//     },
//     [isSwiping, startX]
//   );

//   const handleMouseUp = useCallback(() => {
//     setIsSwiping(false);

//     const threshold = containerRef.current.offsetWidth / 6;
//     if (Math.abs(swipeX) > threshold) {
//       const direction = swipeX > 0 ? -1 : 1;
//       setCurrentIndex((prev) => Math.max(0, Math.min(itemCount - 1, prev + direction)));
//     }
//     setSwipeX(0);
//   }, [swipeX, itemCount]);

//   useEffect(() => {
//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseup", handleMouseUp);
//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, [handleMouseMove, handleMouseUp]);

//   const itemWidth = 100 / visibleItems;
//   const offset = (currentIndex + 0.5) * itemWidth - 50;
//   const transform = `translateX(calc(${-offset}% + ${swipeX}px))`;

//   return { currentIndex, handleMouseDown, transform, containerRef };
// };

// const CarouselItem = ({ item, index, currentIndex, itemWidth }: any) => {
//   const distance = Math.abs(index - currentIndex);
//   const scale = Math.max(0.5, 1 - distance * 0.15); // Perspective effect
//   const opacity = Math.max(0.4, 1 - distance * 0.2);

//   return (
//     <div
//       className="carousel-item absolute top-0 transition-all duration-300 ease-out"
//       style={{
//         left: `${index * itemWidth}%`,
//         width: `${itemWidth}%`,
//         transform: `scale(${scale})`,
//         opacity,
//         zIndex: 1000 - distance,
//         backgroundColor: "red",
//       }}
//     >
//       <div
//         className="bg-white rounded-lg shadow-md p-6 m-2 transition-all duration-300"
//         style={{
//           height: "300px",
//         }}
//       >
//         <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//         <p className="text-sm">{item.description}</p>
//       </div>
//     </div>
//   );
// };

// const CustomCarousel = ({ items }: any) => {
//   const visibleItems = 7; // Increased to show more of the perspective effect
//   const { currentIndex, handleMouseDown, transform, containerRef } = useCarousel(items.length, visibleItems);
//   const itemWidth = 100 / visibleItems;

//   return (
//     <div ref={containerRef} className="custom-carousel relative overflow-hidden h-96" onMouseDown={handleMouseDown}>
//       <div
//         className="carousel-container absolute top-0 left-0 h-full w-full"
//         style={{
//           transform,
//           transition: "transform 0.3s ease-out",
//         }}
//       >
//         {items.map((item: any, index: any) => (
//           <CarouselItem key={index} item={item} index={index} currentIndex={currentIndex} itemWidth={itemWidth} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const TeamsPage: React.FC = () => {
//   const carouselItems = [
//     { title: "Item 1", description: "Description for item 1" },
//     { title: "Item 2", description: "Description for item 2" },
//     { title: "Item 3", description: "Description for item 3" },
//     { title: "Item 4", description: "Description for item 4" },
//     { title: "Item 5", description: "Description for item 5" },
//     { title: "Item 6", description: "Description for item 6" },
//     { title: "Item 7", description: "Description for item 7" },
//     { title: "Item 8", description: "Description for item 8" },
//     { title: "Item 9", description: "Description for item 9" },
//     { title: "Item 10", description: "Description for item 10" },
//   ];

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-6">Custom Carousel with Perspective Effect</h1>
//       <CustomCarousel items={carouselItems} />
//     </div>
//   );
// };

// export default TeamsPage;
