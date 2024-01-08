import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Wizard, StyleProvider, trackEvent, track } from 'losen';
import data from './api/bruksendring';
import dataExport from './exports/data-export';
import Intro from './pages/Intro';
import { store } from './store';

interface AppProps {
  translations?: any;
}

const App: React.FC<AppProps> = ({ translations = {} }) => {
  const [intro, setIntro] = useState(true);

  const trackIntro = () => {
    track(data.meta.name, 'intro', 'Bruksendring!');
  };

  const closeIntro = () => {
    setIntro(false);
    window.scrollTo(0, 0);
    trackEvent('Close intro');
  };

  const showIntro = () => {
    setIntro(true);
    window.scrollTo(0, 0);
  };

  if (intro) {
    trackIntro();
    return (
      <Provider store={store}>
        <StyleProvider>
          <Intro close={closeIntro} />
        </StyleProvider>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <Wizard
        wizard={data}
        exports={{ dataExport }}
        translations={translations}
        showIntro={showIntro}
      />
    </Provider>
  );
};

App.propTypes = {
  translations: PropTypes.object,
};

export default App;
