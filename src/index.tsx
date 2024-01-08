import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const container = document.querySelector('div[data-bind], #root');
let translations = JSON.parse(container?.getAttribute('data-bind') || '{}');
const root = createRoot(container!);

translations = Object.keys(translations).reduce((res, id) => {
  const { title: heading, ...rest } = translations[id];

  if (!heading) {
    return res;
  }

  return {
    ...res,
    [id]: {
      heading,
      ...rest,
    },
  };
}, {});

root.render(<App translations={translations} />);
if (window.location.hostname === 'localhost') {
  registerServiceWorker();
}
