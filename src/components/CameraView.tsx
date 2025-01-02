import React from 'react';
import Webcam from 'react-webcam';
import { CameraSettings } from '../types';

interface CameraViewProps {
  settings: CameraSettings;
}

export const CameraView: React.FC<CameraViewProps> = ({ settings }) => {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  const filterStyle = {
    filter: `
      brightness(${settings.brightness}%)
      contrast(${settings.contrast}%)
      saturate(${settings.saturation}%)
    `
  };

  return (
    <div className="relative">
      <Webcam
        audio={false}
        className="rounded-lg shadow-lg"
        style={filterStyle}
        videoConstraints={videoConstraints}
      />
    </div>
  );
};