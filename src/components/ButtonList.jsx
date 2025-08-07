import React, { useRef } from 'react';
import Button from './Button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ButtonList = () => {
  const list = [
    "all", "News", "Music", "live", "mixes",
    "malayalam cinema", "apis", "web development", "machine learning",
    "Game shows", "Dramedy", "Thrillers", "Contemporary Workship Music", 
    "Ceremonies", "Belief", "Indian Music"
  ];

  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
  };

  return (
    <div className="relative flex items-center max-w-[1270px]  ">
      {/* Left Scroll Button */}
      <button 
        className="absolute left-0 z-10 bg-white p-2 shadow-md rounded-full"
        onClick={() => scroll(-200)}
      >
        <FaChevronLeft />
      </button>

      {/* Scrollable Button List */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto whitespace-nowrap no-scrollbar px-10"
      >
        {list.map((item, index) => (
          <Button key={index} data={item} />
        ))}
      </div>

      {/* Right Scroll Button */}
      <button 
        className="absolute right-0 z-10 bg-white p-2 shadow-md rounded-full"
        onClick={() => scroll(200)}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ButtonList;
