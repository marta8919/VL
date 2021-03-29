import { React, useState } from "react";
import { Recorder } from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";

export default function Recording() {
  const [rec, setRec] = useState({
    audioDetails: {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0,
      },
    },
  });

  const handleAudioStop = (data) => {
    setRec({ audioDetails: data });
  };

  const handleRest = () => {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0,
      },
    };
    setRec({ audioDetails: reset });
  };

  return (
    <div>
      <Recorder
        record={true}
        audioURL={rec.audioDetails.url}
        showUIAudio
        handleAudioStop={(data) => handleAudioStop(data)}
        handleRest={() => handleRest()}
      />
    </div>
  );
}
