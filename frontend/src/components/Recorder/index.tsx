import React, { useState } from "react";
import {
  ReactMediaRecorderHookProps,
  useReactMediaRecorder,
} from "react-media-recorder";
import { useVideoStore } from "@/hooks/useVideoStore";


function App(): JSX.Element {
  const { setVideoSrc, videoSrc } = useVideoStore();

  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({
      video: true,
      screen: true,
      onStop: (blobUrl) => {
        setVideoSrc(blobUrl);
      },
    });

  const handleStart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    startRecording();
  };

  const handleStop = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    stopRecording();
  };

  const handleSave = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    console.log("saving")

  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleStart} disabled={status === "recording"}>
          start
        </button>
        <button onClick={handleStop} disabled={status === "stopped"}>
          stop
        </button>
        <button onClick={handleSave} disabled={!mediaBlobUrl}>
          save to Filecoin
        </button>
      </header>
    </div>
  );
}

export default App;

