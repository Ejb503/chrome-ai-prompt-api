import React, { useState, useRef, useCallback } from "react";

declare global {
  interface Window {
    ai: any;
  }
}

interface AudioWidgetProps {
  addTranscript: (transcript: string, type: "user") => void;
}

const AudioWidget: React.FC<AudioWidgetProps> = ({ addTranscript }) => {
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(
    null
  );
  const mediaStream = useRef<MediaStream | null>(null);

  const stopRecognition = useCallback(() => {
    if (recognition) {
      recognition.stop();
      setRecognition(null);
    }
    if (mediaStream.current) {
      mediaStream.current.getTracks().forEach((track) => track.stop());
    }
  }, [recognition]);

  const startRecognition = useCallback(() => {
    if ("webkitSpeechRecognition" in window) {
      navigator.mediaDevices
        .getUserMedia({ audio: true, video: false })
        .then((stream) => {
          mediaStream.current = stream;
          const recognition = new webkitSpeechRecognition();
          recognition.lang = "en-US";
          recognition.onresult = (event) => {
            if (event.results.length > 0) {
              const result = event.results[event.results.length - 1];
              if (result.isFinal) {
                addTranscript(result[0].transcript, "user");
                setIsPlaying(false);
                stopRecognition();
              }
            }
          };
          recognition.onspeechend = stopRecognition;
          recognition.start();
          setRecognition(recognition);

          const audioContext = new AudioContext();
          const source = audioContext.createMediaStreamSource(stream);
          const analyser = audioContext.createAnalyser();
          analyser.fftSize = 256;
          source.connect(analyser);
        })
        .catch((err) => {
          console.error("Error accessing microphone:", err);
        });
    }
  }, [stopRecognition]);

  const [isPlaying, setIsPlaying] = useState(false);

  const checkSpeechRecognitionAndMicrophonePermission = async () => {
    if (!("webkitSpeechRecognition" in window)) {
      console.error(
        "Web Speech Recognition API is not available in this browser. "
      );
      return "Web Speech Recognition API is not available in this browser. Please use Chrome";
    }

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      return "Web Speech Recognition API is available and Microphone has permission.";
    } catch (error) {
      console.error("Microphone permission has not been given:", error);
      return "Microphone permission has not been given:";
    }
  };

  return (
    <div className="flex flex-col items-center justify-between space-y-4">
      <div className="flex flex-col items-center justify-center pb-12 cursor-pointer w-full">
        <button
          onClick={() => {
            if (!isPlaying) {
              setIsPlaying(true);
              startRecognition();
            } else {
              setIsPlaying(false);
              stopRecognition();
            }
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          {isPlaying ? "Stop Recording" : "Start Recording"}
        </button>
      </div>
    </div>
  );
};
export default AudioWidget;
