import { useState, useRef, useEffect } from 'react';
import './BeforeAfterSlider.css';

export default function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "", 
  afterLabel = "",
  width = "100%",
  height = "400px"
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    updateSliderPosition(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0]);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    updateSliderPosition(e.touches[0]);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div 
      className="before-after-container"
      style={{ width, height }}
      ref={containerRef}
    >
      {/* Before Image */}
      <div className="before-image-container">
        <img 
          src={beforeImage} 
          alt="Before" 
          className="before-image"
        />
        {beforeLabel && (
          <div className="image-label before-label">
            {beforeLabel}
          </div>
        )}
      </div>

      {/* After Image */}
      <div 
        className="after-image-container"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={afterImage} 
          alt="After" 
          className="after-image"
        />
        {afterLabel && (
          <div className="image-label after-label">
            {afterLabel}
          </div>
        )}
      </div>

      {/* Slider Line */}
      <div 
        className="slider-line"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="slider-handle">
          <div className="slider-arrow left">‹</div>
          <div className="slider-arrow right">›</div>
        </div>
      </div>
    </div>
  );
}
