
// import { useState } from 'react';
import AppRouter from './app-router/AppRouter';
import './App.css';
import { AppContextProvider } from './contexts/AppContext';
import { ToastContainer} from 'react-toastify';

function App() {
  // const [info, setinfo] = useState()
  return (
    
    <div className="App">
   <AppContextProvider>
    <AppRouter />
    </AppContextProvider>
    <ToastContainer/>
    </div>
  );
}

export default App;
