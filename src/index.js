import React from 'react';
import { render } from 'react-dom';
// import app from './app';
import App from './Main';

// const startApp = async () => {
//   const header = document.querySelector('[data-app-name]');
//   if (!header) return;

//   const programName = await app();
//   header.textContent = programName;
// };
// document.addEventListener('DOMContentLoaded', startApp);
render(<App />, document.getElementById('root'));
