export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizData {
  [key: string]: {
    title: string;
    questions: Question[];
  };
}

export const quizData: QuizData = {
  agenticAI: {
    title: "Agentic AI",
    questions: [
      {
        id: 1,
        question: "An agentic AI system primarily differs from traditional AI because it can:",
        options: ["Store data locally", "Take autonomous actions", "Require GPU inference", "Use rule-based logic"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which component enables an AI agent to evaluate if it achieved its goal?",
        options: ["Reward model", "Prompt manager", "Vector store", "Tokenizer"],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "A multi-agent AI system reduces hallucinations by:",
        options: ["Prompt shortening", "Cross-agent verification", "Removing context", "Limiting memory"],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "The architecture where an agent 'reflects, plans, and acts' is called:",
        options: ["PEAS", "ReAct", "RNN", "Q-Learning"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "An AI agent accessing external APIs requires:",
        options: ["Token embeddings", "Tool calling", "Few-shot prompting", "Sampling temperature"],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "Memory in AI agents is stored in:",
        options: ["SQL tables", "Vector embeddings", "BSON documents", "Flat files"],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "Which is an example of a reactive agent?",
        options: ["GPT-based planner", "Thermostat", "Financial chatbot", "Self-driving car planner"],
        correctAnswer: 1
      },
      {
        id: 8,
        question: "Which parameter controls creativity in LLM responses?",
        options: ["Max tokens", "Temperature", "Embedding dimension", "Latency"],
        correctAnswer: 1
      },
      {
        id: 9,
        question: "LLM stands for:",
        options: ["Large Language Model", "Linear Learning Model", "Logical Learning Machine", "Long Memory Model"],
        correctAnswer: 0
      },
      {
        id: 10,
        question: "Agents can use tools like:",
        options: ["APIs & databases", "Shoes", "Microphones only", "RAM chips"],
        correctAnswer: 0
      },
      {
        id: 11,
        question: "In reinforcement learning for agents, what does the Bellman equation calculate?",
        options: ["Token probability", "Optimal value function", "Embedding dimensions", "Training loss"],
        correctAnswer: 1
      },
      {
        id: 12,
        question: "Which technique prevents agents from getting stuck in local optima during planning?",
        options: ["Greedy search only", "Epsilon-greedy exploration", "Fixed temperature", "Removing memory"],
        correctAnswer: 1
      },
      {
        id: 13,
        question: "What is the primary challenge in multi-agent coordination?",
        options: ["Memory storage", "Handling conflicting goals and communication", "Token limits", "API costs only"],
        correctAnswer: 1
      },
      {
        id: 14,
        question: "In tool-augmented LLMs, what is function calling?",
        options: ["Hardcoded responses", "Structured API invocation from model output", "Random tool selection", "User manual input"],
        correctAnswer: 1
      },
      {
        id: 15,
        question: "Which agent architecture separates world model from policy?",
        options: ["Reactive agents", "Model-based agents", "Reflex agents only", "Simple agents"],
        correctAnswer: 1
      },
      {
        id: 16,
        question: "What does RLHF stand for in LLM training?",
        options: ["Recursive Learning High Frequency", "Reinforcement Learning from Human Feedback", "Random Learning Hybrid Function", "Rapid Language Handling Framework"],
        correctAnswer: 1
      },
      {
        id: 17,
        question: "In agent memory systems, what distinguishes episodic from semantic memory?",
        options: ["Storage format", "Episodic stores experiences, semantic stores facts", "Database type", "Token count"],
        correctAnswer: 1
      }
    ]
  },
  vibecoding: {
    title: "Vibe Coding",
    questions: [
      {
        id: 1,
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "In JavaScript, == differs from === because:",
        options: ["== checks type & value", "=== checks type only", "=== checks type & value", "They are identical"],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Which DS uses FIFO?",
        options: ["Stack", "Queue", "Linked List", "Binary Tree"],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "In programming, a closure is:",
        options: ["A function inside a class", "A function with access to its outer scope", "A deprecated JavaScript feature", "A variable with limited scope"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "Recursion must always include:",
        options: ["A print statement", "Two parameters", "A base condition", "A loop"],
        correctAnswer: 2
      },
      {
        id: 6,
        question: "Which loop runs at least once?",
        options: ["for", "while", "do…while", "foreach"],
        correctAnswer: 2
      },
      {
        id: 7,
        question: "const variable in JS:",
        options: ["Cannot be reassigned", "Cannot store objects", "Is faster than let", "Is global always"],
        correctAnswer: 0
      },
      {
        id: 8,
        question: "Arrays in JS are:",
        options: ["Fixed size", "Dynamic", "Not iterable", "Only numeric"],
        correctAnswer: 1
      },
      {
        id: 9,
        question: "JS stands for:",
        options: ["JavaSystem", "JavaScript", "JustScript", "JServer"],
        correctAnswer: 1
      },
      {
        id: 10,
        question: "Which symbol starts a comment in JS?",
        options: ["#", "//", "%", "<>"],
        correctAnswer: 1
      },
      {
        id: 11,
        question: "What is the space complexity of merge sort?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 2
      },
      {
        id: 12,
        question: "In JavaScript, what is the event loop responsible for?",
        options: ["Variable declaration", "Managing asynchronous callback execution", "Memory allocation", "Syntax parsing"],
        correctAnswer: 1
      },
      {
        id: 13,
        question: "Which design pattern ensures a class has only one instance?",
        options: ["Factory", "Singleton", "Observer", "Prototype"],
        correctAnswer: 1
      },
      {
        id: 14,
        question: "What is memoization?",
        options: ["Deleting unused variables", "Caching function results to avoid recomputation", "Memory leak prevention", "Variable hoisting"],
        correctAnswer: 1
      },
      {
        id: 15,
        question: "In dynamic programming, what distinguishes it from divide-and-conquer?",
        options: ["Problem size", "Overlapping subproblems with memoization", "Recursion depth", "Language support"],
        correctAnswer: 1
      },
      {
        id: 16,
        question: "What does lexical scoping mean in JavaScript?",
        options: ["Global variables only", "Scope determined by code structure, not runtime", "No nested functions", "Dynamic typing"],
        correctAnswer: 1
      },
      {
        id: 17,
        question: "Which complexity class describes NP-complete problems?",
        options: ["Solvable in polynomial time", "Verifiable in polynomial time, no known polynomial solution", "Unsolvable", "Constant time"],
        correctAnswer: 1
      }
    ]
  },
  webdev: {
    title: "Web Development",
    questions: [
      {
        id: 1,
        question: "Which HTTP method is idempotent?",
        options: ["POST", "PATCH", "PUT", "CONNECT"],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "React uses which algorithm for UI updates?",
        options: ["Dijkstra", "Diffing algorithm", "Kruskal", "Heapsort"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which status code indicates unprocessable entity?",
        options: ["200", "400", "422", "504"],
        correctAnswer: 2
      },
      {
        id: 4,
        question: "CORS stands for:",
        options: ["Cross-Origin Resource Sharing", "Client-Origin Resource Service", "Code Origin Response Set", "Central API Routing System"],
        correctAnswer: 0
      },
      {
        id: 5,
        question: "Node.js runs on which engine?",
        options: ["Chakra", "V8", "SpiderMonkey", "EdgeHTML"],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "CSS stands for:",
        options: ["Creative Style System", "Cascading Style Sheets", "Color Styling Syntax", "Core Styling Sheet"],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "SQL is used for:",
        options: ["Styling pages", "Managing databases", "Writing server apps", "Testing APIs"],
        correctAnswer: 1
      },
      {
        id: 8,
        question: "Which tag loads JavaScript?",
        options: ["<js>", "<script>", "<javascript>", "<link>"],
        correctAnswer: 1
      },
      {
        id: 9,
        question: "HTML stands for:",
        options: ["HyperText Markup Language", "HyperTalk Machine Language", "HighText Marking Layout", "Hyper Terminal Machine Language"],
        correctAnswer: 0
      },
      {
        id: 10,
        question: "Which is a backend language?",
        options: ["CSS", "HTML", "Java", "Figma"],
        correctAnswer: 2
      },
      {
        id: 11,
        question: "What is the purpose of Content Security Policy (CSP)?",
        options: ["Speed up page load", "Mitigate XSS and injection attacks", "Compress images", "Manage cookies"],
        correctAnswer: 1
      },
      {
        id: 12,
        question: "In HTTP/2, what improvement does multiplexing provide?",
        options: ["Larger file sizes", "Multiple requests over single TCP connection", "Slower responses", "No encryption"],
        correctAnswer: 1
      },
      {
        id: 13,
        question: "What is hydration in SSR frameworks like Next.js?",
        options: ["Adding water to servers", "Attaching event listeners to server-rendered HTML", "Database migration", "CSS preprocessing"],
        correctAnswer: 1
      },
      {
        id: 14,
        question: "Which caching strategy serves stale content while revalidating in background?",
        options: ["Cache-first", "Network-first", "Stale-while-revalidate", "No-cache"],
        correctAnswer: 2
      },
      {
        id: 15,
        question: "What does the OPTIONS HTTP method do?",
        options: ["Delete resources", "Describe communication options for target resource", "Update partial data", "Authenticate users"],
        correctAnswer: 1
      },
      {
        id: 16,
        question: "In WebSockets, what enables full-duplex communication?",
        options: ["Polling", "Persistent TCP connection with bidirectional data flow", "HTTP headers only", "REST APIs"],
        correctAnswer: 1
      },
      {
        id: 17,
        question: "What is tree shaking in webpack?",
        options: ["Rendering DOM trees", "Eliminating unused code from bundles", "Sorting algorithms", "Database indexing"],
        correctAnswer: 1
      }
    ]
  },
  uiux: {
    title: "UI/UX Design",
    questions: [
      {
        id: 1,
        question: "Which principle states that users transfer expectations from one familiar interface to another?",
        options: ["Hick's Law", "Mental Model", "Gestalt Similarity", "Cognitive Load"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "In Fitts's Law, which factor most significantly reduces target acquisition time?",
        options: ["Border radius", "Distance", "Target size", "Color contrast"],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Which UX research method best uncovers latent user needs?",
        options: ["A/B Testing", "Surveys", "Contextual Inquiry", "Usability Testing"],
        correctAnswer: 2
      },
      {
        id: 4,
        question: "A UI designer uses 'progressive disclosure' to:",
        options: ["Improve color contrast", "Reduce cognitive overload", "Increase visual hierarchy", "Improve brand consistency"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "The aesthetic–usability effect states that:",
        options: ["Simpler designs are always more functional", "Beautiful designs are perceived as easier to use", "Users prefer minimalistic layouts", "Motion increases usability"],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "What does a low-fidelity wireframe focus on?",
        options: ["Visual design", "Color and branding", "Layout & structure", "Typography"],
        correctAnswer: 2
      },
      {
        id: 7,
        question: "Gestalt's Proximity principle helps:",
        options: ["Group related items", "Identify primary actions", "Improve load speed", "Improve navigation"],
        correctAnswer: 0
      },
      {
        id: 8,
        question: "Which tool is most commonly used for UI prototyping?",
        options: ["Jenkins", "Figma", "Blender", "MongoDB"],
        correctAnswer: 1
      },
      {
        id: 9,
        question: "UX stands for:",
        options: ["User Experience", "Unified Exchange", "User Expansion", "Universal Experience"],
        correctAnswer: 0
      },
      {
        id: 10,
        question: "Which is a UI element?",
        options: ["Persona", "Sitemap", "Button", "Journey Map"],
        correctAnswer: 2
      },
      {
        id: 11,
        question: "In atomic design methodology, which level combines atoms into functional units?",
        options: ["Molecules", "Organisms", "Templates", "Pages"],
        correctAnswer: 0
      },
      {
        id: 12,
        question: "Which accessibility principle ensures content can be accessed through different modalities?",
        options: ["Perceivable", "Operable", "Understandable", "Robust"],
        correctAnswer: 0
      },
      {
        id: 13,
        question: "The Doherty Threshold states that productivity increases when system response time is under:",
        options: ["100ms", "400ms", "1000ms", "3000ms"],
        correctAnswer: 1
      },
      {
        id: 14,
        question: "In user testing, what is 'thinking aloud protocol'?",
        options: ["Users speak their thoughts during task completion", "Designers explain the interface", "Automated voice feedback", "Audio-based navigation"],
        correctAnswer: 0
      },
      {
        id: 15,
        question: "Which cognitive bias causes users to prefer the first solution they encounter?",
        options: ["Serial position effect", "Anchoring bias", "Confirmation bias", "Availability heuristic"],
        correctAnswer: 1
      },
      {
        id: 16,
        question: "What is the primary goal of a design system?",
        options: ["Increase file sizes", "Ensure consistency and scalability across products", "Replace developers", "Eliminate user testing"],
        correctAnswer: 1
      },
      {
        id: 17,
        question: "In the double diamond design process, the second diamond represents:",
        options: ["Problem definition", "Solution development and refinement", "User research", "Stakeholder interviews"],
        correctAnswer: 1
      }
    ]
  }
};
