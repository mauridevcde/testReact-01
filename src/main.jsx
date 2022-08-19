import React from 'react'
import ReactDOM from 'react-dom/client'
import {CounterApp} from './CounterApp'
import {FirstApp} from './FirstApp'
import './app.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <FirstApp  title="Hola soy mauricio" />*/}
  { <CounterApp  value={20} />}
  </React.StrictMode>
) 
