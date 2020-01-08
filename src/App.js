import React from 'react';

import Hello from './components/Hello';
import Bye from './components/Bye';

function App() {
  return (
    <div className="App">
      <Hello />
      <Bye name="Jesse" />
    </div>
  );
}

export default App;
