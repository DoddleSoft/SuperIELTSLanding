'use client';

import Image from "next/image";
import { useState } from "react";
import FeatureModal, { Feature } from "./components/FeatureModal";

export default function Home() {
  const [isAnyCardHovered, setIsAnyCardHovered] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features: Feature[] = [
    {
      id: 'all-modules',
      name: 'All 4 Modules',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      shadowColor: 'rgba(16, 185, 129, 0.3)',
      color: '#10b981',
      description: 'Complete IELTS test preparation covering all four essential modules',
      benefits: [
        'Comprehensive coverage of Reading, Writing, Listening, and Speaking modules',
        'Integrated practice sessions that mirror the actual IELTS exam format',
        'Seamless transition between different test sections for authentic experience',
        'Synchronized scoring and feedback across all modules for holistic improvement'
      ],
      stats: [
        { label: 'Test Modules', value: '4' },
        { label: 'Practice Tests', value: '50+' },
        { label: 'Success Rate', value: '95%' }
      ],
      features: [
        'Reading comprehension with authentic texts',
        'Academic & General Writing tasks',
        'Listening tests with native speakers',
        'Speaking practice with AI feedback',
        'Module-specific tips and strategies',
        'Cross-module performance analytics'
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
      shadowColor: 'rgba(249, 115, 22, 0.3)',
      color: '#f97316',
      description: 'Deep insights into student performance and learning patterns',
      benefits: [
        'Real-time performance tracking across all test sections',
        'Detailed breakdown of strengths and areas for improvement',
        'Comparative analysis with other students and target band scores',
        'Predictive insights to forecast final IELTS scores'
      ],
      stats: [
        { label: 'Data Points', value: '1000+' },
        { label: 'Accuracy', value: '98%' },
        { label: 'Reports', value: '25+' }
      ],
      features: [
        'Real-time performance dashboards',
        'Detailed score breakdowns',
        'Progress tracking over time',
        'Comparative performance analysis',
        'Weakness identification system',
        'Custom report generation'
      ]
    },
    {
      id: 'ai-insights',
      name: 'AI Insights',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 18 18.5a3 3 0 1 1-6 0c0-.59.212-1.133.566-1.553l-.566-.547z"></path>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      shadowColor: 'rgba(139, 92, 246, 0.3)',
      color: '#8b5cf6',
      description: 'Intelligent recommendations powered by advanced AI algorithms',
      benefits: [
        'Personalized study plans based on individual learning patterns',
        'AI-powered error analysis and targeted improvement suggestions',
        'Smart content recommendations aligned with student goals',
        'Adaptive testing that adjusts difficulty based on performance'
      ],
      stats: [
        { label: 'AI Models', value: '12' },
        { label: 'Predictions', value: '99.2%' },
        { label: 'Improvements', value: '+2.1 Bands' }
      ],
      features: [
        'Personalized learning pathways',
        'Intelligent error pattern recognition',
        'Adaptive question difficulty',
        'Smart content recommendations',
        'Predictive score modeling',
        'Automated study planning'
      ]
    },
    {
      id: 'performance-tracking',
      name: 'Performance Tracking',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v5h5"></path>
          <path d="M21 21v-5h-5"></path>
          <path d="M21 3l-7 7m-4-4l7 7"></path>
          <path d="M3 21l7-7m4 4l-7-7"></path>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
      shadowColor: 'rgba(99, 102, 241, 0.3)',
      color: '#6366f1',
      description: 'Comprehensive monitoring of student progress and achievements',
      benefits: [
        'Detailed tracking of performance across multiple practice sessions',
        'Historical data analysis showing improvement trends over time',
        'Goal setting and milestone tracking for target band scores',
        'Comprehensive reporting for students, teachers, and administrators'
      ],
      stats: [
        { label: 'Metrics Tracked', value: '50+' },
        { label: 'Progress Updates', value: 'Real-time' },
        { label: 'Retention Rate', value: '94%' }
      ],
      features: [
        'Comprehensive progress monitoring',
        'Historical performance analysis',
        'Goal tracking and milestones',
        'Multi-level reporting system',
        'Achievement badges and rewards',
        'Progress visualization tools'
      ]
    },
    {
      id: 'mock-tests',
      name: 'Mock Tests',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14,2 14,8 20,8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10,9 9,9 8,9"></polyline>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      shadowColor: 'rgba(59, 130, 246, 0.3)',
      color: '#3b82f6',
      description: 'Authentic IELTS mock tests that replicate the real exam experience',
      benefits: [
        'Full-length practice tests that match official IELTS format and timing',
        'Variety of test versions to prevent memorization and ensure thorough practice',
        'Immediate scoring and detailed feedback after each test completion',
        'Timed sections that help students develop proper exam pacing strategies'
      ],
      stats: [
        { label: 'Mock Tests', value: '100+' },
        { label: 'Question Bank', value: '5000+' },
        { label: 'Accuracy Rate', value: '97%' }
      ],
      features: [
        'Full-length practice tests',
        'Official exam format simulation',
        'Timed test sections',
        'Instant scoring and feedback',
        'Multiple test versions',
        'Exam strategy guidance'
      ]
    }
  ];

  const handleCardHover = (isHovered: boolean) => {
    setIsAnyCardHovered(isHovered);
  };

  const handleFeatureClick = (feature: Feature) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedFeature(null), 300);
  };
  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{
      background: 'radial-gradient(ellipse at center top, rgba(239, 68, 68, 0.03) 0%, rgba(240, 253, 244, 0.6) 50%, rgba(249, 250, 251, 0.9) 100%)'
    }}>
      {/* Enhanced Background Gradient Overlay */}
      <div className="absolute inset-0 opacity-60" style={{
        background: 'conic-gradient(from 45deg at 50% 50%, rgba(239, 68, 68, 0.02) 0deg, rgba(16, 185, 129, 0.02) 120deg, rgba(99, 102, 241, 0.02) 240deg, rgba(239, 68, 68, 0.02) 360deg)'
      }}></div>
      {/* Premium Background Concentric Circles & Orbiting Features */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        
        {/* Inner Circle - Enhanced with glassmorphism */}
        <div className="absolute w-[800px] h-[800px] rounded-full" style={{
          border: '1px solid rgba(239, 68, 68, 0.1)',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)'
        }}></div>

        {/* Middle Circle - Premium styling for feature cards */}
        <div className="absolute w-[1400px] h-[1400px] rounded-full" style={{
          border: '1px solid rgba(239, 68, 68, 0.08)',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)'
        }}>
          {/* All 4 Modules - Premium Enhanced */}
          <div className="absolute inset-0 animate-[orbit_60s_linear_infinite]" style={{ animationDelay: '-0s', animationPlayState: isAnyCardHovered ? 'paused' : 'running' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[orbit_60s_linear_infinite_reverse]" style={{ animationDelay: '-0s', animationPlayState: isAnyCardHovered ? 'paused' : 'running' }}>
              <div className="group flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-500 hover:scale-105 pointer-events-auto cursor-pointer" 
                   onMouseEnter={() => handleCardHover(true)}
                   onMouseLeave={() => handleCardHover(false)}
                   onClick={() => handleFeatureClick(features[0])}
                   style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.06), 0 8px 16px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
              }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </div>
                <span className="font-semibold text-gray-800 tracking-tight">All 4 Modules</span>
                <div className="w-1.5 h-5 rounded-full ml-2 transition-all duration-300 group-hover:scale-110" style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  boxShadow: '0 0 8px rgba(16, 185, 129, 0.4)'
                }}></div>
              </div>
            </div>
          </div>
          
          {/* Analytics - Premium Enhanced */}
          <div className="absolute inset-0 animate-[orbit_60s_linear_infinite]" style={{ animationDelay: '-15s', animationPlayState: isAnyCardHovered ? 'paused' : 'running' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[orbit_60s_linear_infinite_reverse]" style={{ animationDelay: '-15s', animationPlayState: isAnyCardHovered ? 'paused' : 'running' }}>
              <div className="group flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-500 hover:scale-105 pointer-events-auto cursor-pointer" 
                   onMouseEnter={() => handleCardHover(true)}
                   onMouseLeave={() => handleCardHover(false)}
                   onClick={() => handleFeatureClick(features[1])}
                   style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.06), 0 8px 16px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
              }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                  boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                <span className="font-semibold text-gray-800 tracking-tight">Analytics</span>
                <div className="w-1.5 h-5 rounded-full ml-2 transition-all duration-300 group-hover:scale-110" style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                  boxShadow: '0 0 8px rgba(249, 115, 22, 0.4)'
                }}></div>
              </div>
            </div>
          </div>
          
          {/* AI Insights - Premium Enhanced */}
          <div className="absolute inset-0 animate-[orbit_60s_linear_infinite]" style={{ animationDelay: '-30s', animationPlayState: isAnyCardHovered ? 'paused' : 'running' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[orbit_60s_linear_infinite_reverse]" style={{ animationDelay: '-30s', animationPlayState: isAnyCardHovered ? 'paused' : 'running' }}>
              <div className="group flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-500 hover:scale-105 pointer-events-auto cursor-pointer" 
                   onMouseEnter={() => handleCardHover(true)}
                   onMouseLeave={() => handleCardHover(false)}
                   onClick={() => handleFeatureClick(features[2])}
                   style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.06), 0 8px 16px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
              }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 18 18.5a3 3 0 1 1-6 0c0-.59.212-1.133.566-1.553l-.566-.547z"></path>
                  </svg>
                </div>
                <span className="font-semibold text-gray-800 tracking-tight">AI Insights</span>
                <div className="w-1.5 h-5 rounded-full ml-2 transition-all duration-300 group-hover:scale-110" style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  boxShadow: '0 0 8px rgba(139, 92, 246, 0.4)'
                }}></div>
              </div>
            </div>
          </div>
          
          {/* Performance Tracking - Premium Enhanced */}
          <div className="absolute inset-0 animate-[orbit_60s_linear_infinite]" style={{ animationDelay: '-45s', animationPlayState: isAnyCardHovered ? 'paused' : 'running' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[orbit_60s_linear_infinite_reverse]" style={{ animationDelay: '-45s', animationPlayState: isAnyCardHovered ? 'paused' : 'running' }}>
              <div className="group flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-500 hover:scale-105 pointer-events-auto cursor-pointer" 
                   onMouseEnter={() => handleCardHover(true)}
                   onMouseLeave={() => handleCardHover(false)}
                   onClick={() => handleFeatureClick(features[3])}
                   style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.06), 0 8px 16px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
              }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                  boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v5h5"></path>
                    <path d="M21 21v-5h-5"></path>
                    <path d="M21 3l-7 7m-4-4l7 7"></path>
                    <path d="M3 21l7-7m4 4l-7-7"></path>
                  </svg>
                </div>
                <span className="font-semibold text-gray-800 tracking-tight">Performance Tracking</span>
                <div className="w-1.5 h-5 rounded-full ml-2 transition-all duration-300 group-hover:scale-110" style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                  boxShadow: '0 0 8px rgba(99, 102, 241, 0.4)'
                }}></div>
              </div>
            </div>
          </div>
          
          {/* Mock Tests - Premium Enhanced */}
          <div className="absolute inset-0 animate-[orbit_60s_linear_infinite]" style={{ animationDelay: '-54s', animationPlayState: isAnyCardHovered ? 'paused' : 'running' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[orbit_60s_linear_infinite_reverse]" style={{ animationDelay: '-54s', animationPlayState: isAnyCardHovered ? 'paused' : 'running' }}>
              <div className="group flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-500 hover:scale-105 pointer-events-auto cursor-pointer" 
                   onMouseEnter={() => handleCardHover(true)}
                   onMouseLeave={() => handleCardHover(false)}
                   onClick={() => handleFeatureClick(features[4])}
                   style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.06), 0 8px 16px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
              }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                </div>
                <span className="font-semibold text-gray-800 tracking-tight">Mock Tests</span>
                <div className="w-1.5 h-5 rounded-full ml-2 transition-all duration-300 group-hover:scale-110" style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  boxShadow: '0 0 8px rgba(59, 130, 246, 0.4)'
                }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Premium Floating Planets with enhanced depth */}
        <div className="absolute top-1/3 left-1/3 w-16 h-16 rounded-full opacity-8 animate-float" style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(17, 24, 39, 0.15), rgba(17, 24, 39, 0.25))',
          boxShadow: '0 8px 32px rgba(17, 24, 39, 0.2), 0 4px 16px rgba(17, 24, 39, 0.1)'
        }} />
        <div className="absolute top-1/4 right-1/3 w-12 h-12 rounded-full opacity-6 animate-float" style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(55, 65, 81, 0.12), rgba(55, 65, 81, 0.2))',
          boxShadow: '0 6px 24px rgba(55, 65, 81, 0.15)',
          animationDelay: '-2s'
        }} />
        <div className="absolute bottom-1/3 left-2/5 w-20 h-20 rounded-full opacity-5 animate-float" style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.15))',
          boxShadow: '0 12px 48px rgba(0, 0, 0, 0.15)',
          animationDelay: '-4s'
        }} />
        <div className="absolute bottom-1/4 right-2/5 w-10 h-10 rounded-full opacity-8 animate-float" style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(75, 85, 99, 0.1), rgba(75, 85, 99, 0.18))',
          boxShadow: '0 5px 20px rgba(75, 85, 99, 0.12)',
          animationDelay: '-6s'
        }} />
        <div className="absolute top-2/5 left-1/4 w-14 h-14 rounded-full opacity-6 animate-float" style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(31, 41, 55, 0.1), rgba(31, 41, 55, 0.18))',
          boxShadow: '0 7px 28px rgba(31, 41, 55, 0.15)',
          animationDelay: '-1s'
        }} />

        {/* Premium floating sparkle dots */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full animate-pulse" style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.4), rgba(239, 68, 68, 0.1))',
          boxShadow: '0 0 12px rgba(239, 68, 68, 0.3)'
        }} />
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full animate-pulse" style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4), rgba(16, 185, 129, 0.1))',
          boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
          animationDelay: '-1.5s'
        }} />
        <div className="absolute top-1/3 right-1/3 w-2.5 h-2.5 rounded-full animate-pulse" style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), rgba(139, 92, 246, 0.1))',
          boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)',
          animationDelay: '-2.5s'
        }} />
      </div>

      {/* Premium Main Content with enhanced hierarchy */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          {/* Premium Headline with enhanced typography */}
          <div className="space-y-3">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none transition-all duration-500 hover:scale-105 cursor-pointer" style={{ 
              fontFamily: 'var(--font-poppins)',
              background: 'linear-gradient(135deg, #111827 0%, #374151 50%, #111827 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 12px rgba(17, 24, 39, 0.1)'
            }}>
              <span className="block" style={{
                background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Super</span>
              <span className="block mt-[-0.15em]" style={{
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 4px 8px rgba(239, 68, 68, 0.25))'
              }}>IELTS</span>
            </h1>

            {/* Enhanced Platform Subheading */}
            <h2 className="text-3xl md:text-4xl font-bold tracking-wide mt-6" style={{ 
              fontFamily: 'var(--font-poppins)',
              background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.02em'
            }}>
              Mock test platform
            </h2>
          </div>

          {/* Premium Subheadline with enhanced styling */}
          <p className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-medium" style={{
            color: '#6b7280',
            lineHeight: '1.6',
            letterSpacing: '0.01em'
          }}>
            Everything your centre needs to run IELTS mocks better.
          </p>

          {/* Premium Early Access Section */}
          <div className="max-w-2xl mx-auto mt-12 space-y-6 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold" style={{
                background: 'linear-gradient(135deg, #111827 0%, #374151 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'var(--font-poppins)'
              }}>Join the waitlist</h3>
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                Be among the first centres to experience the future of IELTS testing
              </p>
            </div>
            
            <div className="space-y-4 p-8 rounded-3xl" style={{
              background: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 24px 48px rgba(0, 0, 0, 0.08), 0 12px 24px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
            }}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="w-full h-14 px-6 rounded-2xl text-gray-900 placeholder:text-gray-500 font-medium transition-all duration-300 focus:scale-105" style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.06), 0 1px 0 rgba(255, 255, 255, 0.4)',
                    outline: 'none'
                  }}
                />
              </div>
              
              <button className="group relative w-full h-14 px-8 rounded-2xl font-bold text-white transition-all duration-500 hover:scale-105 overflow-hidden" style={{
                background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)',
                boxShadow: '0 12px 24px rgba(17, 24, 39, 0.25), 0 6px 12px rgba(17, 24, 39, 0.15)',
                fontFamily: 'var(--font-poppins)'
              }}>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)'
                }}></div>
                
                <div className="relative flex items-center justify-center gap-3">
                  <span className="tracking-wide">Join as a Founding Centre</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Premium Footer with enhanced social icons */}
      <footer className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-8">
        {/* Enhanced Social Icons */}
        <div className="flex items-center gap-6">
          <a href="#" className="group w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 hover:scale-110" style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
            color: '#6b7280'
          }} onMouseEnter={e => e.currentTarget.style.color = '#111827'} onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="transition-all duration-300 group-hover:scale-110">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a href="#" className="group w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 hover:scale-110" style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
            color: '#6b7280'
          }} onMouseEnter={e => e.currentTarget.style.color = '#111827'} onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="transition-all duration-300 group-hover:scale-110">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className="group w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 hover:scale-110" style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
            color: '#6b7280'
          }} onMouseEnter={e => e.currentTarget.style.color = '#111827'} onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 group-hover:scale-110">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-10 5L2 7"></path>
            </svg>
          </a>
        </div>
      </footer>

      {/* Premium British Council & IELTS Logos - Bottom Right */}
      <div className="fixed bottom-8 right-8 animate-scale-in" style={{ animationDelay: '0.6s' }}>
        <div className="p-8 rounded-3xl transition-all duration-300 hover:scale-105" style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 24px 48px rgba(0, 0, 0, 0.08), 0 12px 24px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
        }}>
          <Image
            src="/british-council-ielts-logo.png"
            alt="British Council IELTS"
            width={280}
            height={90}
            className="object-contain transition-all duration-300 hover:scale-105"
            style={{ filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.08))' }}
          />
        </div>
      </div>

      {/* Feature Modal */}
      <FeatureModal
        feature={selectedFeature}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
