import ReactDOM from "react-dom";
import React from 'react';
import App from './app';
import Clock from '../frontend/clock';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<App/>, root)
})