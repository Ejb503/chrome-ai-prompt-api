import React, { useState } from "react";
import AudioWidget from "./audioWidget";
import { generateRecommendationPrompt } from "../prompt/recommend";
import { generateExplainationPrompt } from "../prompt/explain";
import { executeAiAgent } from "../prompt/utils";
import useBehaviourCues from "../hooks/useBehaviourCues";
import usePersonalData from "../hooks/usePersonalData";
import useProductCues from "../hooks/useProductCues";
import useSocialCues from "../hooks/useSocialCues";
import useUserCues from "../hooks/useUserCues";
import { products } from "../const/product";

interface TranscriptHistory {
  [key: string]: { transcript: string; type: string };
}

// The Brain component orchestrates the interaction between the user and the AI agent
const Brain: React.FC = () => {
  // State hooks for managing personal and environmental cues, and the transcript history
  const personalData = usePersonalData();
  const behaviourCues = useBehaviourCues();
  const productCues = useProductCues();
  const socialCues = useSocialCues();
  const userCues = useUserCues();
  const [transcriptHistory, setTranscriptHistory] = useState<TranscriptHistory>(
    {}
  );

  // Analyse cues from various sources to generate a comprehensive context string
  const analyseCues = (): string => {
    return `Behaviour: ${behaviourCues.behaviour1} 
    Social: ${socialCues.behaviour1} 
    Trending Products: ${JSON.stringify(productCues.products)} 
    Similar Products: ${JSON.stringify(userCues.products)} 
    Personal data: ${JSON.stringify(personalData)}`;
  };

  // Process user's transcript by generating explanations and recommendations
  const processUserTranscript = async () => {
    console.log("Creating session");
    const session = await window.ai.createTextSession();
    const explanationPrompt = generateExplainationPrompt() + analyseCues();
    console.log("Prompting for explanation", explanationPrompt);
    try {
      console.log("Creating prompt", session, explanationPrompt);
      const explanation = await session.prompt(explanationPrompt);
      console.log("Generating explanation", explanation);
      addTranscript(explanation, "AgentResponse");
      await session.destroy();
    } catch (e) {
      console.error("Error generating explanation:", e);
      await session.destroy();
    }

    try {
      const action = await executeAiAgent(
        generateRecommendationPrompt() + JSON.stringify(personalData)
      );
      console.log("Action", action);
      addTranscript(JSON.stringify(action), "JSON COMMAND");
      const lookup = products.find(
        (product) => product.brand === action!.brand
      );
      if (lookup) {
        window.location.href = `/product/${lookup?.path}`;
      }
    } catch (e) {
      console.error("Error executing AI agent:", e);
    }
  };

  const addTranscript = (newTranscript: string, type: string) => {
    const timestamp = Date.now().toString();
    setTranscriptHistory((prev) => ({
      ...prev,
      [timestamp]: { transcript: newTranscript, type },
    }));

    if (type === "user") {
      processUserTranscript();
    }
  };

  return (
    <div className="flex flex-col items-center justify-between space-y-4">
      <AudioWidget addTranscript={addTranscript} />
      {Object.entries(transcriptHistory).map(([key, value]) => (
        <p key={key} className="mt-4 text-white text-lg">
          {value.type}: {value.transcript}
        </p>
      ))}
    </div>
  );
};

export default Brain;
