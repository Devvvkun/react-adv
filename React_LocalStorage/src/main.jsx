import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import React_Router_DOM from './React_Router_DOM'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<React_Router_DOM />
</BrowserRouter>
)
