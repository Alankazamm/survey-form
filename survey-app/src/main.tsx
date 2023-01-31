import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App'
import { Welcome } from './pages/Welcome';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
    <Routes>
				<Route path='/' element={<App />}></Route>
				<Route path='/about' element={< Welcome />}></Route>
				<Route path='/contact' element={< Welcome />}></Route>
		</Routes>
    </Router>
  </React.StrictMode>,
)
