
import React, { useState } from "react";

function UserInputTracker() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Current Input: {inputValue}</p>
    </div>
  );
}

export default UserInputTracker;