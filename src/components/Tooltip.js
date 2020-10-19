import React, { useState } from 'react';

export const Tooltip = (props) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        Hover over me!
      </button>
      {isShown && (
        // If isShown = true, display the following code
        <>
        <div className="arrow"></div>
        <div className="tooltipContent">{props.tooltipText}</div>
        </>
      )}
    </>
  )
}

// Found a React example of how to show/hide on hover here: https://upmostly.com/tutorials/react-onhover-event-handling-with-examples