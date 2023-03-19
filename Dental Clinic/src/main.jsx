import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MainApp } from './mainapp/MainApp'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from "react-redux";
import store from './application/store'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <MainApp/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
