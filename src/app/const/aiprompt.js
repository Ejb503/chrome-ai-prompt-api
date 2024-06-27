function formatDuration(milliseconds) {
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
  return `${hours}h ${minutes}m ${seconds}s ${milliseconds % 1000}ms`;
}

async function measureAiSessionDurationAndResult() {
  const startTime = new Date();
  let result = "";
  try {
    const session = await window.ai.createTextSession();
    result = await session.prompt(
      `Tyingshoelaces.com are writing a really cool blog about you. What do you think about that then?`
    );
  } catch (error) {
    console.error(error);
  } finally {
    const endTime = new Date();
    return { duration: endTime - startTime, result };
  }
}

async function runSessionsCalculateAverageAndPrintResults() {
  const executionTimes = [];
  const results = [];
  for (let i = 0; i < 5; i++) {
    try {
      const { duration, result } = await measureAiSessionDurationAndResult();
      executionTimes.push(duration);
      results.push(result);
      console.log(`Execution Time ${i + 1}: ${formatDuration(duration)}`);
    } catch (error) {
      console.error(`Error in session ${i + 1}:`, error);
    }
  }

  const totalDuration = executionTimes.reduce((acc, curr) => acc + curr, 0);
  const averageDuration = totalDuration / executionTimes.length;

  console.log(
    `Average Session Execution Time: ${formatDuration(averageDuration)}`
  );

  results.forEach((result, index) => {
    console.log(`Result ${index + 1}: ${result}`);
  });
}

(async () => {
  try {
    await runSessionsCalculateAverageAndPrintResults();
  } catch (error) {
    console.error("Error running sessions:", error);
  }
})();
