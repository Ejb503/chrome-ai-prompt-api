import { useMemo } from "react";

function useBehaviourCues() {
  const result = useMemo(() => {
    const cuesText = `
        – How have they begun the conversation? A greeting?
        – What tone are they using?
    `;
    const behaviour1 = `
    return visitor showing signs of being slightly upset. Remember this as you deal with them, make sure to reassure them we have a returns system.`;
    const behaviour2 = `
    Looking happy and like they want to calmly browse.
   `;
    const behaviourAnalysis = Math.random() < 0.5 ? behaviour1 : behaviour2;

    return { cuesText, behaviour1, behaviour2, behaviourAnalysis };
  }, []);

  return result;
}

export default useBehaviourCues;
