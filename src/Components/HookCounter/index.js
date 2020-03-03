import React, { useState } from 'react';

function HookCounter() {
  const [counter, changeCounter] = useState(0);

  return (
        <div className="flexWrapper">
            <p>Hook Counter</p>
            <h1 className="digit">
                {counter}
            </h1>
            <div className="buttons">
                <button onClick={() => changeCounter(counter + 1)} className="button plus">
                    +
                </button>
                <button onClick={() => (counter > 0 ? changeCounter(counter - 1) : null)} className="button substr">
                    -
                </button>
            </div>
        </div>
  );
}

export default HookCounter;
