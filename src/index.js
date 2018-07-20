import React from "react";
import ReactDOM from "react-dom";
import App from "container/App.js";
import registerServiceWorker from "registerServiceWorker.js";
import "module/firebaseInit.js";
import { IntlProvider } from "react-intl";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import sk from "react-intl/locale-data/sk";
import localeData from "i18n/locales/index.js";
import reducer from "reducers/index.js";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import ReactGA from 'react-ga';

if (process.env.REACT_APP_NODE_ENV === 'production') {
    ReactGA.initialize('UA-119342760-1');
    ReactGA.pageview("/");
    window.Raven.config('https://ce679ec9cd394d458a066fb881804c02@sentry.io/1247108').install();
} else {
    window.Raven.config('https://acc74f50cd284e808e32ef3ff9863dbb@sentry.io/1247112').install();
}

const reduxStore = createStore(reducer);

addLocaleData([...sk, ...en]);

const language =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;

const i18nToMomentLocales = {
    'en-US': 'en-gb',
    'sk-SK': 'sk'
};

const momentLocale = i18nToMomentLocales[language] ? i18nToMomentLocales[language] : 'en';
require(`moment/locale/${momentLocale}.js`);

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages =
    localeData[languageWithoutRegionCode] ||
    localeData[language] ||
    localeData.en;

ReactDOM.render(
    <ReduxProvider store={reduxStore}>
        <IntlProvider locale={language} messages={messages}>
            <App />
        </IntlProvider>
    </ReduxProvider>,
    document.getElementById("root")
);
registerServiceWorker();
