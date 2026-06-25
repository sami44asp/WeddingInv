import React, { createContext, useContext, useState } from 'react';
import translations from '../i18n/translations';

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = (key) => translations[lang][key] ?? translations['en'][key] ?? key;
  const toggle = () => setLang(l => l === 'en' ? 'am' : 'en');
  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
