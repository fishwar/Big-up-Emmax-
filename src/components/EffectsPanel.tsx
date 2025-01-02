import React from 'react';
import { CameraSettings } from '../types';

interface EffectsPanelProps {
  settings: CameraSettings;
  onSettingsChange: (settings: Partial<CameraSettings>) => void;
}

export const EffectsPanel: React.FC<EffectsPanelProps> = ({ settings, onSettingsChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Effects</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Brightness
          </label>
          <input
            type="range"
            min="0"
            max="200"
            value={settings.brightness}
            onChange={(e) => onSettingsChange({ brightness: Number(e.target.value) })}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contrast
          </label>
          <input
            type="range"
            min="0"
            max="200"
            value={settings.contrast}
            onChange={(e) => onSettingsChange({ contrast: Number(e.target.value) })}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Saturation
          </label>
          <input
            type="range"
            min="0"
            max="200"
            value={settings.saturation}
            onChange={(e) => onSettingsChange({ saturation: Number(e.target.value) })}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};