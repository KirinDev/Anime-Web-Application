import { useState, useEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa";

export default function Carousel({ slides }: any) {
  const [current, setCurrent] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);

  const THRESHOLD = 100; // Threshold for triggering slide change

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [current]);

  const handleMouseDown = (e: any) => {
    e.preventDefault(); // Prevent default drag behavior
    setDragStartX(e.clientX);
    setIsDragging(true);
    setIsAnimating(false);
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;
    const dragCurrentX = e.clientX;
    setDragDistance(dragCurrentX - dragStartX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsAnimating(true);

    // Check if the user dragged far enough to change slides
    if (dragDistance > THRESHOLD) {
      previousSlide();
    } else if (dragDistance < -THRESHOLD) {
      nextSlide();
    } else if (current === slides.length - 1 && dragDistance < 0) {
      // If at last slide and dragging left, go to first slide directly
      setCurrent(0);
    }

    setDragDistance(0); // Reset drag distance
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div
      className="flex flex-col cursor-grab items-center w-full bg-slate-900 p-10"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      ref={carouselRef}
    >
      <div className="relative w-full overflow-hidden">
        <div
          className={`flex transition-transform ${
            isAnimating ? "duration-400" : ""
          }`}
          style={{
            transform: `translateX(calc(-${current * 100}% + ${dragDistance}px))`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((slide: any, index: any) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex items-center justify-center"
              style={{ minWidth: "100%" }}
            >
              <div className="flex items-center w-full">
                <img
                  src={slide.url}
                  className="w-1/2 h-150 rounded-lg object-cover"
                />
                <div className="flex flex-col w-1/2 justify-center items-start text-white px-16">
                  <h2
                    style={{ fontFamily: "Itim, cursive" }}
                    className="text-[38px] font-bold mb-4"
                  >
                    {slide.title}
                  </h2>
                  <p className="text-[12px] text-gray-500 mb-4">
                    {slide.description}
                  </p>
                  <button
                    style={{ fontFamily: "Itim, cursive" }}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center"
                  >
                    Watch Now
                    <FaPlay className="text-[12px] ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-2 mt-4">
        {slides.map((_: any, index: any) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              current === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}


