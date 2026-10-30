import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ShopeContextProvider } from './Context/ShopeContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ShopeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ShopeContextProvider>
)