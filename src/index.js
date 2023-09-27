
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import JobsList from "./components/jobslist";
import React, { useEffect, useState } from 'react';
import localeEnMessages from "./locales/en";

function App() {
  const [userLanguage, setUserLanguage] = useState('');

  useEffect(() => {
    // Obtén el idioma preferido del navegador
    const browserLanguage = navigator.language || navigator.userLanguage;

    // Establece el idioma en el estado
    setUserLanguage(browserLanguage);
  }, []);
  const userLocale = navigator.language || navigator.userLanguage;
  return (
    <IntlProvider locale={userLanguage} messages={userLocale.startsWith('es') ? localeEsMessages : localeEnMessages}>
      <JobsList />
    </IntlProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));