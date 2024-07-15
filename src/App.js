import React from 'react';
import Header from "./assets/component/Header";
import Notes from "./assets/component/Notes";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Header />
      <div className="w-full max-w-4xl p-4">
        <Notes />
      </div>
    </div>
  );
}

export default App;
