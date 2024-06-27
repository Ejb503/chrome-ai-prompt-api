export enum Functions {
  InvalidResponse = 0,
  NavigateProduct = 1,
  AddProductCart = 2,
}

export interface BrainInterface {
  function: Functions;
  execute: boolean;
  brand: string;
  reason: string;
}

const isValidBrainInterface = (obj: any): obj is BrainInterface => {
  return (
    "function" in obj &&
    Object.values(Functions).includes(obj.function) &&
    "execute" in obj &&
    typeof obj.execute === "boolean" &&
    "brand" in obj &&
    typeof obj.brand === "string" &&
    "reason" in obj &&
    typeof obj.reason === "string"
  );
};

export const convertToBrainInterface = (input: string): BrainInterface => {
  try {
    const jsonMatch = input.match(/{.*?}/s);
    if (!jsonMatch) throw new Error("No valid JSON found in input.");

    let jsonPart = jsonMatch[0];

    jsonPart = jsonPart.replace(/,\s*}/g, "}").replace(/,\s*]/g, "]");

    const parsedJson = JSON.parse(jsonPart);

    parsedJson.function = Number(parsedJson.function);
    parsedJson.execute = parsedJson.execute === "true";

    if (parsedJson.brand) {
      parsedJson.brand = parsedJson.brand.replace(/\s/g, "-").toLowerCase();
    }

    if (!isValidBrainInterface(parsedJson)) {
      throw new Error("Invalid BrainInterface object structure.");
    }

    return parsedJson;
  } catch (error) {
    console.error("Error processing input:", error, input);
    return {
      function: Functions.InvalidResponse,
      execute: false,
      brand: "",
      reason: "Failed to process input.",
    };
  }
};

export const executeAiAgent = async (prompt: string) => {
  try {
    const session = await window.ai.createTextSession();
    const result = await session.prompt(prompt);
    const response = convertToBrainInterface(result);
    if (response) {
      session.destroy();
      return response;
    } else {
      console.error("Invalid response", response);
    }
  } catch (error) {
    console.error("Error executing AI agent", error);
  }
};
