import React, { useCallback } from 'react';
import { CameraView } from './components/CameraView';
import { Controls } from './components/Controls';
import { EffectsPanel } from './components/EffectsPanel';
import { useCamera } from './hooks/useCamera';

function App() {
  const {
    isRecording,
    settings,
    startRecording,
    stopRecording,
    updateSettings,
  } = useCamera();

  const handleCapture = useCallback(() => {
    // Implement photo capture logic
    console.log('Capturing photo');
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Deri Camera</h1>
        
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <CameraView settings={settings} />
            <Controls
              isRecording={isRecording}
              onStartRecording={startRecording}
              onStopRecording={stopRecording}
              onCapture={handleCapture}
            />
          </div>
          
          <div>
            <EffectsPanel
              settings={settings}
              onSettingsChange={updateSettings}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;