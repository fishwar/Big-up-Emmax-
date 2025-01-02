import React from 'react';

interface ControlsProps {
  isRecording: boolean;
  onStartRecording: () => void;
  onStopRecording: () => void;
  onCapture: () => void;
}

export const Controls: React.FC<ControlsProps> = ({
  isRecording,
  onStartRecording,
  onStopRecording,
  onCapture,
}) => {
  return (
    <div className="flex justify-center space-x-4 p-4">
      <button
        onClick={onCapture}
        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
      >
        Capture
      </button>
      
      {!isRecording ? (
        <button
          onClick={onStartRecording}
          className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
        >
          Record
        </button>
      ) : (
        <button
          onClick={onStopRecording}
          className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition"
        >
          Stop
        </button>
      )}
    </div>
  );
};