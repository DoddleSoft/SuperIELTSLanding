'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface Feature {
  id: string;
  name: string;
  icon: React.ReactNode;
  gradient: string;
  shadowColor: string;
  description: string;
  benefits: string[];
  stats: { label: string; value: string; }[];
  features: string[];
  color: string;
}

interface FeatureModalProps {
  feature: Feature | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function FeatureModal({ feature, isOpen, onClose }: FeatureModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
      // Add slight delay for smoother entrance animation
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.transform = 'scale(1) translateY(0)';
          contentRef.current.style.opacity = '1';
        }
      }, 50);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    
    // Animate content out with improved easing
    if (contentRef.current) {
      contentRef.current.style.transform = 'scale(0.92) translateY(40px)';
      contentRef.current.style.opacity = '0';
      contentRef.current.style.filter = 'blur(8px)';
    }
    
    // Delay the actual close to allow animations to complete
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 400);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      handleClose();
    }
  };

  if (!isOpen || !feature) return null;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
      style={{
        background: isClosing ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.8)',
        backdropFilter: isClosing ? 'blur(4px)' : 'blur(20px)',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        animation: isOpen && !isClosing ? 'fadeIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 
                   isClosing ? 'fadeOut 0.4s cubic-bezier(0.55, 0.055, 0.675, 0.19)' : 'none'
      }}
    >
      {/* Close button - floating top right */}
      <button
        onClick={handleClose}
        className="fixed top-4 right-4 z-60 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        style={{
          background: isClosing ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: isClosing ? '0 4px 12px rgba(0, 0, 0, 0.1)' : '0 8px 24px rgba(0, 0, 0, 0.2)',
          transform: isClosing ? 'scale(0.9) rotate(180deg)' : 'scale(1) rotate(0deg)',
          transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          opacity: isClosing ? '0.6' : '1'
        }}
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-gray-700 group-hover:text-gray-900 transition-all duration-300 group-hover:rotate-90"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* Modal Content */}
      <div
        ref={contentRef}
        className="relative w-full h-full overflow-hidden"
        style={{
          background: isClosing ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.98)',
          backdropFilter: isClosing ? 'blur(20px)' : 'blur(40px)',
          border: 'none',
          boxShadow: isClosing ? '0 20px 60px rgba(0, 0, 0, 0.1)' : '0 40px 80px rgba(0, 0, 0, 0.15)',
          transform: 'scale(0.95) translateY(20px)',
          opacity: '0',
          filter: 'blur(0px)',
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {/* Gradient Header */}
        <div 
          className="relative p-8 md:p-12 text-gray-900 overflow-hidden"
          style={{
            background: feature.gradient,
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), 
                            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)`,
            transform: isClosing ? 'translateY(-20px)' : 'translateY(0)',
            opacity: isClosing ? '0.7' : '1',
            transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transitionDelay: isClosing ? '0s' : '0.1s'
          }}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 w-32 h-32 rounded-full animate-pulse" style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent)',
              animationDelay: '0s'
            }} />
            <div className="absolute bottom-4 right-4 w-40 h-40 rounded-full animate-pulse" style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent)',
              animationDelay: '1s'
            }} />
            <div className="absolute top-1/2 right-8 w-24 h-24 rounded-full animate-pulse" style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent)',
              animationDelay: '2s'
            }} />
          </div>

          <div className="relative flex items-center gap-6">
            <div 
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
              }}
            >
              <div className="scale-125 md:scale-150 text-gray-900">
                {feature.icon}
              </div>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2" style={{
                fontFamily: 'var(--font-poppins)'
              }}>
                {feature.name}
              </h1>
              <p className="text-xl md:text-2xl opacity-90 font-medium">
                {feature.description}
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div 
          className="overflow-y-auto h-full p-8 md:p-12" 
          style={{ 
            height: 'calc(100vh - 200px)',
            transform: isClosing ? 'translateY(20px)' : 'translateY(0)',
            opacity: isClosing ? '0.5' : '1',
            transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transitionDelay: isClosing ? '0s' : '0.2s'
          }}
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Benefits & Features */}
            <div className="space-y-8">
              {/* Key Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{
                  fontFamily: 'var(--font-poppins)'
                }}>
                  Key Benefits
                </h2>
                <div className="space-y-4">
                  {feature.benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center mt-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: feature.gradient,
                          boxShadow: `0 4px 12px ${feature.shadowColor}`
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20,6 9,17 4,12"></polyline>
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed font-medium flex-1">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{
                  fontFamily: 'var(--font-poppins)'
                }}>
                  What's Included
                </h2>
                <div className="grid gap-3">
                  {feature.features.map((featureItem, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105"
                      style={{
                        background: 'rgba(255, 255, 255, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ background: feature.color }}
                      />
                      <span className="text-gray-800 font-medium">{featureItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{
                  fontFamily: 'var(--font-poppins)'
                }}>
                  Impact & Results
                </h2>
                <div className="grid gap-6">
                  {feature.stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 group"
                      style={{
                        background: `linear-gradient(135deg, ${feature.color}08 0%, ${feature.color}15 100%)`,
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
                      }}
                    >
                      <div 
                        className="text-3xl md:text-4xl font-black mb-2 transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          color: feature.color,
                          fontFamily: 'var(--font-poppins)'
                        }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div 
                className="p-8 rounded-2xl text-center"
                style={{
                  background: feature.gradient,
                  boxShadow: `0 16px 32px ${feature.shadowColor}`
                }}
              >
                <h3 className="text-white text-xl font-bold mb-4" style={{
                  fontFamily: 'var(--font-poppins)'
                }}>
                  Ready to get started?
                </h3>
                <p className="text-white/90 mb-6">
                  Join the waitlist to be among the first to experience {feature.name}
                </p>
                <button 
                  className="w-full py-4 px-6 rounded-xl bg-white text-gray-900 font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    boxShadow: '0 4px 16px rgba(255, 255, 255, 0.3)'
                  }}
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(20px);
          }
        }
        
        @keyframes fadeOut {
          from {
            opacity: 1;
            backdrop-filter: blur(20px);
          }
          to {
            opacity: 0;
            backdrop-filter: blur(4px);
          }
        }
        
        /* Smooth scrollbar for modal content */
        .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
        }
        
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}