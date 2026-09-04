import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { WorkshopMagmaProvider } from './workshop/WorkshopMagmaProvider';
import { applyMagmaCssVariables } from './workshop/applyMagmaCssVariables';
import './styles/global.css';

applyMagmaCssVariables();

ReactDOM.render(
  <WorkshopMagmaProvider>
    <App />
  </WorkshopMagmaProvider>,
  document.getElementById('root'),
);
