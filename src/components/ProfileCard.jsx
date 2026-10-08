import React from 'react';

export const schoolPillars = [
  ['pillar.sangramJagtapName', 'pillar.sangramJagtapRole'],
  ['pillar.jyotiGadeName', 'pillar.jyotiGadeRole'],
  ['pillar.dhananjayJadhavName', 'pillar.dhananjayJadhavRole'],
  ['pillar.pushpataiBorudheName', 'pillar.pushpataiBorudheRole'],
  ['pillar.revannathPawarName', 'pillar.revannathPawarRole'],
  ['pillar.vandanaTatheName', 'pillar.vandanaTatheRole'],
  ['pillar.ravindraBaraskarName', 'pillar.ravindraBaraskarRole'],
  ['pillar.babasahebWakaleName', 'pillar.babasahebWakaleRole'],
  ['pillar.varshaSanapName', 'pillar.varshaSanapRole']
].map(([nameKey, roleKey]) => ({ nameKey, roleKey }));

const ProfileCard = ({ person, t }) => (
  <article className="tcard">
    {person.img && <div className="tcard-photo"><img src={person.img} alt={t(person.nameKey)} loading="lazy" /></div>}
    <h3>{t(person.nameKey)}</h3>
    <span className="tcard-role" style={{ whiteSpace: 'pre-line' }}>{t(person.roleKey)}</span>
    {person.orgKey && <p className="muted" style={{ marginTop: '0.9rem', fontSize: '0.92rem' }}>{t(person.orgKey)}</p>}
  </article>
);

export default ProfileCard;
