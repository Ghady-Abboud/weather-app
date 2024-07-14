import React from 'react';
import { ClearDay, CloudyDay, RainyDay, SnowyDay, Thunder } from '../images/svgbackground';

export const getWeatherIcon = (weatherID) => {
    if (200 <= weatherID && weatherID <= 232) {
        return <Thunder />;
      } else if (300 <= weatherID && weatherID <= 531) {
        return <RainyDay />;
      } else if (600 <= weatherID && weatherID <= 622) {
        return <SnowyDay />;
      } else if (801 <= weatherID && weatherID <= 804) {
        return <CloudyDay />;
      } else if (weatherID === 800) {
        return <ClearDay />;
      } else {
        
        return <ClearDay />; 
      }
};