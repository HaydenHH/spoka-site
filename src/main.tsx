import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './pages/Home.tsx'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MorePage from './pages/MorePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path='more' element={<MorePage/>}></Route>
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
