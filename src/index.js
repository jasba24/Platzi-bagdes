import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'

import './global.css'
import App from './components/App'

const container = document.getElementById('app')
const Root = createRoot(container)

Root.render(<App />)
