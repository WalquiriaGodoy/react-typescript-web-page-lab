import { useContext } from 'react';
import { DeviceContext } from 'src/context/DeviceContext';
import { DeviceType } from 'src/types/deviceTypes';

export const useDevice = () => {
  const { isMobile, isTablet, isDesktop } = useContext(DeviceContext);

  const getDeviceType = (isMobile: boolean, isTablet: boolean) => {
    if (isMobile) return 'mobile';
    if (isTablet) return 'tablet';
    return 'desktop';
  };

  const deviceType = getDeviceType(isMobile, isTablet) as DeviceType;

  return { isMobile, isTablet, isDesktop, deviceType };
};
