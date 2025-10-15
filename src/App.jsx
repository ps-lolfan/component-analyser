import React from "react";
import withTracker from "./debug/withTracker";
import TrackerPanel from "./debug/TrackerPanel";

// Import basic components
import Hello from "./components/Hello";
import Counter from "./components/Counter";

// Wrap components with tracker
const HelloTracked = withTracker(Hello);
const CounterTracked = withTracker(Counter);

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Component Tracker Demo</h1>
      <HelloTracked name="World" />
      <CounterTracked start={0} />
      <TrackerPanel />
    </div>
  );
}
