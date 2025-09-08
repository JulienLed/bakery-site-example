"use client";
import { useState, useEffect } from "react";

export function useWidthScreen() {
  const [windowWidth, setWindowWidth] = useState<number>(1000);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
}
