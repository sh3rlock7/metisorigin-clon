"use client";
import { useEffect, useState } from "react";

interface CounterProps {
  end: number;       
  duration?: number;      
  decimals?: number;      
  suffix?: string;        
  prefix?: string;        
}

export default function Counter({
  end,
  duration = 2000,
  decimals = 0,
  suffix = "",
  prefix = "",
}: CounterProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = start + progress * (end - start);
      setValue(currentValue);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  
  const formattedValue = (() => {
    let displayValue = value;

    //transform numbers more than 1000 in decimals
    if (end >= 1000) {
      displayValue = value / 1000;
      return (
        prefix +
        displayValue.toFixed(decimals).replace(/\.0$/, "") +
        "k" +
        suffix
      );
    }

    return (
      prefix + displayValue.toFixed(decimals).replace(/\.0$/, "") + suffix
    );
  })();

  return <span>{formattedValue}</span>;
}