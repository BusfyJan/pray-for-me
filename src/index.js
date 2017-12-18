import React from "react";
import ReactDOM from "react-dom";
import App from "container/App.js";
import registerServiceWorker from "registerServiceWorker.js";
import "module/firebaseInit.js";
import { IntlProvider } from "react-intl";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import sk from "react-intl/locale-data/sk";
import localeData from "i18n/locales/data.json";
import reducer from "reducers/index.js";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";

const reduxStore = createStore(reducer);

addLocaleData([...sk, ...en]);

const language =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;

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
