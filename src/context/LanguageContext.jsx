import React, { createContext, useState, useContext, useCallback } from 'react';
import mr from '../locales/mr.json';
import en from '../locales/en.json';

const LanguageContext = createContext();
const locales = { mr, en };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = window.localStorage.getItem('school-language');
    return saved === 'en' ? 'en' : 'mr';
  });

  const toggleLanguage = useCallback((lang) => {
    const nextLanguage = lang === 'en' ? 'en' : 'mr';
    setLanguage(nextLanguage);
    window.localStorage.setItem('school-language', nextLanguage);
  }, []);

  const t = useCallback((key, variables = {}) => {
    const value = locales[language][key] ?? locales.mr[key] ?? key;
    return String(value).replace(/\{(\w+)\}/g, (_, variable) => (
      variables[variable] === undefined ? `{${variable}}` : String(variables[variable])
    ));
  }, [language]);

  const translate = useCallback((key, variables = {}) => {
    const value = locales[language][key] ?? locales.mr[key] ?? key;
    return String(value).replace(/\{(\w+)\}/g, (_, variable) => (
      variables[variable] === undefined ? `{${variable}}` : String(variables[variable])
    ));
  }, [language]);

  const locale = locales[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, translate, locale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export const getTranslation = (language, key, variables = {}) => {
  const value = locales[language]?.[key] ?? locales.mr[key] ?? key;
  return String(value).replace(/\{(\w+)\}/g, (_, variable) => (
    variables[variable] === undefined ? `{${variable}}` : String(variables[variable])
  ));
};
