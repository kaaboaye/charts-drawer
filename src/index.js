import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';

import './i18n'
import { I18n } from 'react-i18next';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <I18n ns="translations">
    {
      (t, { i18n }) => (
  <IntlProvider locale="en">
    <App />
  </IntlProvider>
      )
    }
  </I18n>
  , document.getElementById('root'));
registerServiceWorker();
