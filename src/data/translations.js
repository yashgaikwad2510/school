import mr from '../locales/mr.json';
import en from '../locales/en.json';

const toLegacyShape = (locale) => ({
  nav: {
    home: locale['nav.home'],
    about: locale['nav.about'],
    teachers: locale['nav.teachers'],
    students: locale['nav.students'],
    facilities: locale['nav.facilities'],
    activities: locale['nav.activities'],
    gallery: locale['nav.gallery'],
    contact: locale['nav.contact']
  },
  hero: {
    title: locale['home.heroTitle'],
    subtitle: locale['school.tagline']
  },
  about: {
    readMore: locale['common.more'],
    previewText: locale['school.footerMission']
  },
  footer: { copyright: `© 2026 ${locale['school.name.short']}. ${locale['school.footerRights']}` },
  facilities: {
    title: locale['facilities.title'],
    previewText: locale['facilities.intro']
  },
  activities: {
    title: locale['activities.title'],
    previewText: locale['activities.intro']
  },
  contactPreview: { address: locale['school.address'] }
});

export const translations = { mr: toLegacyShape(mr), en: toLegacyShape(en) };
