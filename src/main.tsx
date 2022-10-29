import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes'

import "./i18n"

import './styles/global.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Routes />
  </React.StrictMode>
)
