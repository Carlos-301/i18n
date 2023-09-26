import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import JobsList from "./components/jobslist";
import localeEnMessages from "./locales/en";


ReactDOM.render(
    <IntlProvider locale={navigator.language || navigator.userLanguage} >
            <JobsList/>
    </IntlProvider>, document.getElementById("root")
);
