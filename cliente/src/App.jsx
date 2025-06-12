// App.jsx
import React from 'react';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Dashboard usuarioId={1} />
    </div>
  );
}

export default App;