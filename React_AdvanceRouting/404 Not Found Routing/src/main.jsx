import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import React_Router_DOM from './React_Router_DOM.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <React_Router_DOM />
</BrowserRouter>
)
