import React from "react";
import ComponentTracker from "./ComponentTracker.jsx";

export default function withTracker(WrappedComponent) {
  const name =
    WrappedComponent.displayName ||
    WrappedComponent.name ||
    "AnonymousComponent";

  const Tracked = (props) => {
    ComponentTracker.add(name, props);
    return <WrappedComponent {...props} />;
  };

  Tracked.displayName = `Tracked(${name})`;
  return Tracked;
}
