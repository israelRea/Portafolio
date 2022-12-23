import React from "react";
import { render } from "react-snapshot";
import { App } from "./app/App";
import "./index.css";
import './i18n';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./Translations/es/global.json";
import global_en from "./Translations/en/global.json";

i18next.init({
interpolation: { escapeValue: false },
lng: "es",
resources: {
    es: {
        global: global_es,
    },
    en: {
        global: global_en,
    },
},
});

render(
    <I18nextProvider i18n={i18next}>
        <App /> 
    </I18nextProvider>,
    document.getElementById("root")
    );
