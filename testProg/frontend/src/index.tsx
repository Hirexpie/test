import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Store from './api/Store';


interface state {
  store:Store
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = new Store();
export const Context = createContext<state>({
  store
})
root.render(
  <Context.Provider value={{store}}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Context.Provider>
);

