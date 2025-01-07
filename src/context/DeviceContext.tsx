import React, { createContext, useEffect, useState } from 'react';

export const DeviceContext = createContext({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
});

export const DeviceProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      setIsTablet(false);
      setIsDesktop(false);
    } else if (window.innerWidth >= 768 && window.innerWidth < 1300) {
      setIsMobile(false);
      setIsTablet(true);
      setIsDesktop(false);
    } else {
      setIsMobile(false);
      setIsTablet(false);
      setIsDesktop(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <DeviceContext.Provider
      value={{
        isMobile,
        isTablet,
        isDesktop,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};
