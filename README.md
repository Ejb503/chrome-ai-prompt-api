# Deep Dive into Chrome Built-in AI: Prompt API

![Chrome AI Logo](https://tyingshoelaces.com/_next/image?url=https%3A%2F%2Ftyingshoelaces.com%2Flipstickonapigtyingshoes.jpg&w=3840&q=75)

_By [tyingshoelaces.com](https://tyingshoelaces.com)_

[![License: MIT](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT) [![Contributors](https://img.shields.io/badge/contributors-1-orange)](https://github.com/Ejb503)

## Overview

I’ve recently got invited into the early preview program for the Chrome Built-in AI (Prompt API). The built-in AI is exploratory work for what will potentially become a cross-browser standard for embedded AI. It leverages Gemini Nano on device; that means it is bundled into your web browser and the LLM generation happens in your local browser environment.

Read more about it from Google [here](#).

This repo is extremely WIP and demonstration prototype code to investigate ways that Prompt API could be used. It will ONLY work on Chrome Browsers with Gemini installed. It DOES not work on mobiles and is almost entirely theoretical.

Read the full blog here:

## The Good: The Easy, the Fast, and the Free

### Reasons to Want Embedded AI

- **Speed:** Immediate execution with no latency.
- **Cost:** Affordable, crowdsourced LLM usage.
- **Usability:** Easy to use with simple API calls.

Accessing the Prompt API is as simple as these two lines of code:

```javascript
const session = await window.ai.createTextSession();
const result = await session.prompt(
  `Tyingshoelaces.com are writing a really cool blog about you. What do you think about that then?`
);
```

### Performance

Although we are restricted to a single session (no concurrency), the performance for complicated long text generation was good. Here are some test results:

```
Execution Time 1: 0h 0m 3s 47ms
Execution Time 2: 0h 0m 3s 870ms
Execution Time 3: 0h 0m 2s 355ms
Execution Time 4: 0h 0m 3s 176ms
Execution Time 5: 0h 0m 7s 103ms

Average Session Execution Time: 0h 0m 3s 910.1999999999998ms
```

The average execution time for 5 chained requests to the built-in AI is between 3-4 seconds per complete request for long text generation prompts. This is more than acceptable for most use cases.

### Advantages

- **Scale:** Every LLM request is handled via an experimental browser API, which helps in decentralizing LLM distribution.
- **Preloaded Models:** Similar to WebLLM, but with preloaded models bundled into browsers.
- **Easy and Cost-efficient:** Fast, free (or paid for by the consumer), and really easy to use.

## Tradeoffs

### Sacrifice in Quality

- **Experimentation Only:** The API is designed for experimentation, not production.
- **Non-Responsiveness:** Occasional unresponsiveness, likely due to multiple asynchronous requests.
- **Smaller Model:** Generalist nature leads to less polished output.

### Other Considerations

- **Private Model:** May be useful for internal, non-public systems.
- **Task-specific Models:** Future architectures might use multiple small, highly tuned, task-oriented LLMs.

## A Different Approach: Neurons, Not Brain

### Concept of Tiny, Fast Connections Meshed

The current focus on larger context windows may not be the most efficient way to scale Generative AI. Instead, focusing on small, precise details meshed together can form something larger and more efficient.

### Example Use Case: E-Commerce Recommendation Algorithm

#### Threads and Multidimensional Processes

1. **Social Cues and Sentiment Analysis**

- Interaction time
- Browsing behavior
- Source referral data

2. **Behavior Cues and User Input Interpretation**

- Conversation initiation
- Tone of user input

3. **User Context**

- Age and gender demographics
- User identity

4. **Site Context**

- Trending products and site data

Using well-prepared data to inform the LLM can provide more targeted and useful user interactions.

## Conclusion

We are still in the early stages of LLMs, and significant advancements are expected. Moving LLMs to the browser can revolutionize how we use and experiment with AI, making it cheaper and more accessible. Building efficient and nuanced infrastructure will massively improve the quality of output, regardless of model size or algorithm quality.

## What I Did

I built a demo where you can experience a browser-controlled voice interaction:

1. **Talk into the browser using the WebSpeechRecognitionAPI.**
2. **Prompt API for intepretation.**
3. **Responses from Gemini in browser.**
4. **Psuedo code for informing AI model.**

### Technologies Used

- **PromptAPI:** ★★★★★ - New benchmarks in speed and cost.
- **WebSpeechRecognitionAPI:** ★★★★☆ - Noticeable difference from GPT-io, great for cheap requests and demos.

## Links

- **Demo:** [AI Voice Generation Demo](https://tyingshoelaces.com/demo/ai-voice-generation)
- **GitHub Repository:** [GitHub](https://github.com/Ejb503/ai-voice-generation)
- **Video:** [YouTube Video](https://youtu.be/3zPeOpOEmyQ)
- **Blog:** [Blog Post](https://tyingshoelaces.com/blog/ai-voice-generation)

---

Edward Ejb503, [Tying Shoelaces Blog](https://tyingshoelaces.com)
