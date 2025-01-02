import { useState, useCallback } from 'react';
import { CameraSettings } from '../types';

export const useCamera = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [settings, setSettings] = useState<CameraSettings>({
    brightness: 100,
    contrast: 100,
    saturation: 100,
  });

  const startRecording = useCallback(() => {
    setIsRecording(true);
  }, []);

  const stopRecording = useCallback(() => {
    setIsRecording(false);
  }, []);

  const updateSettings = useCallback((newSettings: Partial<CameraSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  }, []);

  return {
    isRecording,
    settings,
    startRecording,
    stopRecording,
    updateSettings,
  };
};