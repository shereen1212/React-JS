import React, { useState } from 'react';

const ShowHideParagraph = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>
      {isVisible && <p>This is some hidden text!</p>}
    </div>
  );
};

export default ShowHideParagraph;