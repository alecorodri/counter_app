import React from 'react'
import ReactDOM from 'react-dom/client'

import { HelloWorld } from "./HelloWorld";
import { CounterApp } from "./CounterApp";
import { FirstApp } from './FirstApp';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={0}/>
    </React.StrictMode>
)