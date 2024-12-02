import React, { useState, useEffect } from 'react';

interface CartAnimationProps {
  x: number;
  y: number;
}

export default function CartAnimation({ x, y }: CartAnimationProps) {
  const [style, setStyle] = useState({
    left: x,
    top: y,
    opacity: 1,
    transform: 'translateY(0)',
  });

  useEffect(() => {
    // Animate the +1
    setTimeout(() => {
      setStyle({
        left: x,
        top: y,
        opacity: 0,
        transform: 'translateY(-20px)',
      });
    }, 50);
  }, [x, y]);

  return (
    <div
      className="fixed z-50 text-green-600 font-bold text-lg pointer-events-none transition-all duration-500"
      style={style}
    >
      +1
    </div>
  );
}