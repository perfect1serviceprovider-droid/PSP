// components/SplashScreen.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showDoorAnimation, setShowDoorAnimation] = useState(false);

  const welcomeTexts = [
    "Welcome to",
    "Perfect Service Provider",
    "Your Digital Partner"
  ];

  useEffect(() => {
    // Text animation sequence
    const textInterval = setInterval(() => {
      setCurrentText((prev) => {
        if (prev < welcomeTexts.length - 1) {
          return prev + 1;
        } else {
          clearInterval(textInterval);
          // Start door opening animation after last text
          setTimeout(() => {
            setShowDoorAnimation(true);
            // Complete the splash screen after door animation
            setTimeout(() => {
              setIsVisible(false);
              setTimeout(onComplete, 800); // Wait for final fade out
            }, 3000); // Door animation duration
          }, 1000);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(textInterval);
  }, [onComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.8 }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -30,
      scale: 1.1,
      transition: { duration: 0.4 }
    }
  };

  const logoVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const circleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Door animation variants
  const leftDoorVariants = {
    closed: { 
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    open: { 
      x: "-100%",
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  const rightDoorVariants = {
    closed: { 
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    open: { 
      x: "100%",
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  const doorContentVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 flex items-center justify-center overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Main Splash Content */}
        <AnimatePresence>
          {!showDoorAnimation && (
            <motion.div 
              className="relative w-full h-full flex items-center justify-center"
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              {/* Animated Background Circles */}
              <motion.div 
                className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full"
                variants={circleVariants}
                animate="animate"
              />
              <motion.div 
                className="absolute bottom-32 right-32 w-48 h-48 bg-white/5 rounded-full"
                variants={circleVariants}
                animate="animate"
                style={{ animationDelay: '0.5s' }}
              />
              <motion.div 
                className="absolute top-1/2 left-10 w-24 h-24 bg-white/15 rounded-full"
                variants={circleVariants}
                animate="animate"
                style={{ animationDelay: '1s' }}
              />

              {/* Main Content */}
              <div className="text-center z-10">
                {/* Logo */}
                <motion.div 
                  className="mb-8 flex justify-center"
                  variants={logoVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="relative">
                    <div className="w-24 h-24 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                      <img 
                        src="/logo.svg" 
                        alt="PSP Logo" 
                        className="w-16 h-16 object-cover"
                      />
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-xl -z-10" />
                  </div>
                </motion.div>

                {/* Animated Text */}
                <div className="h-20 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.h1
                      key={currentText}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {welcomeTexts[currentText]}
                    </motion.h1>
                  </AnimatePresence>
                </div>

                {/* Subtitle */}
                <motion.p 
                  className="text-white/80 text-lg md:text-xl mt-4 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Digital Marketing Agency
                </motion.p>

                {/* Loading Animation */}
                <motion.div 
                  className="mt-12 flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="flex space-x-2">
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={index}
                        className="w-3 h-3 bg-white rounded-full"
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Progress Bar */}
              <motion.div 
                className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-white/20 rounded-full overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3.5, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Door Opening Animation */}
        <AnimatePresence>
          {showDoorAnimation && (
            <>
              {/* Left Door */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 z-50"
                style={{ width: '50%' }}
                variants={leftDoorVariants}
                initial="closed"
                animate="open"
              >
                {/* Door Handle */}
                <motion.div 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-16 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full shadow-lg"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                />
                
                {/* Door Panels */}
                <div className="absolute inset-4 border-4 border-gray-600 rounded-lg">
                  <div className="w-full h-full bg-gradient-to-b from-gray-700 to-gray-800 rounded-md">
                    <div className="absolute top-6 left-6 right-6 h-1/3 border-2 border-gray-600 rounded-md" />
                    <div className="absolute bottom-6 left-6 right-6 h-1/3 border-2 border-gray-600 rounded-md" />
                  </div>
                </div>
              </motion.div>

              {/* Right Door */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-l from-gray-900 via-gray-800 to-gray-700 z-50"
                style={{ width: '50%', left: '50%' }}
                variants={rightDoorVariants}
                initial="closed"
                animate="open"
              >
                {/* Door Handle */}
                <motion.div 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-16 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full shadow-lg"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                />
                
                {/* Door Panels */}
                <div className="absolute inset-4 border-4 border-gray-600 rounded-lg">
                  <div className="w-full h-full bg-gradient-to-b from-gray-700 to-gray-800 rounded-md">
                    <div className="absolute top-6 left-6 right-6 h-1/3 border-2 border-gray-600 rounded-md" />
                    <div className="absolute bottom-6 left-6 right-6 h-1/3 border-2 border-gray-600 rounded-md" />
                  </div>
                </div>
              </motion.div>

              {/* Light rays coming through the opening doors */}
              <motion.div 
                className="absolute inset-0 pointer-events-none z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <motion.div 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-white via-yellow-200 to-transparent opacity-60"
                  animate={{ 
                    width: ["2px", "100px", "200px"],
                    opacity: [0, 0.8, 0.3]
                  }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                />
                <motion.div 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-100 via-white to-transparent opacity-40"
                  animate={{ 
                    width: ["2px", "150px", "300px"],
                    opacity: [0, 0.6, 0.2]
                  }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                />
              </motion.div>

              {/* Content behind the doors */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 flex items-center justify-center z-30"
                variants={doorContentVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="text-center">
                  <motion.div 
                    className="text-6xl mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    ✨
                  </motion.div>
                  <motion.h2 
                    className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Welcome Inside!
                  </motion.h2>
                  <motion.p 
                    className="text-gray-600 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Your digital journey begins now
                  </motion.p>
                </div>
              </motion.div>

              {/* Door opening sound effect indicator */}
              <motion.div 
                className="absolute top-4 right-4 z-60"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🔊</span>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
