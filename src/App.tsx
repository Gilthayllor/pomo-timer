import { useState } from 'react';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { TaskContextProvider } from './contexts/TaskContext';

import './styles/global.css';
import './styles/theme.css';

function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}

export default App;
