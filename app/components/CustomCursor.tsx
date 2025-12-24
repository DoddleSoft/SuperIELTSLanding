'use client';

import { useEffect, useState, useCallback } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

// Premium Arrow Cursor v2 - Production Ready
export default function CustomCursor() {
  const [cursorPos, setCursorPos] = useState<CursorPosition>({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);

  // Detect touch devices
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        /Mobi|Android/i.test(navigator.userAgent)
      );
    };
    checkTouchDevice();
  }, []);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setHasReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setHasReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Optimized mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Use requestAnimationFrame for smooth cursor movement
    requestAnimationFrame(() => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    });
  }, []);

  const handleMouseEnter = useCallback((e: MouseEvent) => {
    const target = e.target as Node;
    if (target && target.nodeType === Node.ELEMENT_NODE) {
      const element = target as Element;
      if (element.matches && element.matches(
        'a, button, [role="button"], input, textarea, select, .hoverable, [onclick], [data-cursor="hover"]'
      )) {
        setIsHovering(true);
      }
    }
  }, []);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    const target = e.target as Node;
    if (target && target.nodeType === Node.ELEMENT_NODE) {
      const element = target as Element;
      if (element.matches && element.matches(
        'a, button, [role="button"], input, textarea, select, .hoverable, [onclick], [data-cursor="hover"]'
      )) {
        setIsHovering(false);
      }
    }
  }, []);

  // Hide cursor when leaving viewport
  const handleMouseLeaveWindow = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnterWindow = useCallback(() => {
    setIsVisible(true);
  }, []);

  // Handle window focus/blur
  const handleWindowBlur = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleWindowFocus = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Don't run on touch devices
    if (isTouchDevice) return;

    // Add event listeners with passive flag for better performance
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true, capture: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true, capture: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnterWindow, { passive: true });
    window.addEventListener('blur', handleWindowBlur, { passive: true });
    window.addEventListener('focus', handleWindowFocus, { passive: true });

    // Hide default cursor
    document.body.style.cursor = 'none';
    // Improve performance
    document.body.style.userSelect = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
      
      // Restore default cursor
      document.body.style.cursor = 'auto';
      document.body.style.userSelect = 'auto';
    };
  }, [isTouchDevice, handleMouseMove, handleMouseEnter, handleMouseLeave, handleMouseLeaveWindow, handleMouseEnterWindow, handleWindowBlur, handleWindowFocus]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <div
      className={`arrow-cursor ${
        isHovering ? 'hover' : ''
      } ${
        isVisible ? 'visible' : 'hidden'
      } ${
        hasReducedMotion ? 'reduced-motion' : ''
      }`}
      style={{
        left: cursorPos.x,
        top: cursorPos.y,
        willChange: 'transform',
      }}
      aria-hidden="true"
    />
  );
}