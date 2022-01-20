import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Title } from './Components/Title';
import { Home } from './Views/Home'
import { FetchComponent } from './Components/FetchComponent/FetchComponent'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <FetchComponent/>
            <Title/>
            <Home/>
          </>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
