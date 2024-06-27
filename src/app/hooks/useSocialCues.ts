function useSocialCues() {
  const cuesText = `
        – How long has it taken for user to interact?
        – Is their browsing behavior aggressive, slow, calm, controlled
        – Have they arrived from particular source, or looking for something specific?
    `;
  const behaviour1 = `
   User responds quickly and shows sign of being impatient.
  `;
  const behaviour2 = `
   User responds slowly and shows sign of wanting to chat.
   `;
  const behaviourAnalysis = Math.random() < 0.5 ? behaviour1 : behaviour2;
  return { cuesText, behaviour1, behaviour2, behaviourAnalysis };
}

export default useSocialCues;
