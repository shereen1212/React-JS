
import React, { useState } from "react";

function ToggleParagraph() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Paragraph
      </button>
      {isVisible && <p>This is a sample paragraph.</p>}
    </div>
  );
}

export default ToggleParagraph;