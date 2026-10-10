import React from 'react';

export const educationalGuides = [
  { img: '/aukta.jpeg', nameKey: 'leadership.commissionerName', roleKey: 'leadership.commissioner', orgKey: 'leadership.organizationValue' },
  { img: '/zuber.jpeg', nameKey: 'leadership.administrationOfficerName', roleKey: 'leadership.administrationOfficer', orgKey: 'leadership.departmentValue' },
  {
    image: '/शालेय आधारस्तंभ/संजय मेहेर.jpeg',
    nameKey: 'leadership.sanjayMeherName',
    roleKey: 'leadership.sanjayMeherRole',
    organizationKey: 'leadership.sanjayMeherOrganization',
    scopeKey: 'leadership.sanjayMeherScope',
    guidanceKey: 'leadership.sanjayMeherGuidance'
  },
  {
    image: '/शालेय आधारस्तंभ/सुभाष पवार.jpeg',
    nameKey: 'leadership.subhashPawarName',
    roleKey: 'leadership.subhashPawarRole',
    organizationKey: 'leadership.subhashPawarOrganization',
    scopeKey: 'leadership.subhashPawarScope',
    guidanceKey: 'leadership.subhashPawarGuidance'
  }
];

export const schoolPillars = [
  ['pillar.sangramJagtapName', 'pillar.sangramJagtapRole', 'संग्राम भैया जगताप.jpeg'],
  ['pillar.jyotiGadeName', 'pillar.jyotiGadeRole', 'ज्योतीताई गाडे.jpeg'],
  ['pillar.dhananjayJadhavName', 'pillar.dhananjayJadhavRole', 'धनंजय जाधव.jpeg'],
  ['pillar.vandanaTatheName', 'pillar.vandanaTatheRole', 'वंदना ताई ताठे.jpeg'],
  ['pillar.pushpataiBorudheName', 'pillar.pushpataiBorudheRole', 'पुष्पाताई बोरूढे.jpeg'],
  ['pillar.revannathPawarName', 'pillar.revannathPawarRole', 'रेवणनाथ दगडू पवार.jpeg'],
  ['pillar.ravindraBaraskarName', 'pillar.ravindraBaraskarRole', 'रवींद्र रावसाहेब बारस्कर.jpeg'],
  ['pillar.babasahebWakaleName', 'pillar.babasahebWakaleRole', 'मा.श्री बाबासाहेब वाकळे.jpeg'],
  ['pillar.varshaSanapName', 'pillar.varshaSanapRole', 'मा.सौ वर्षा रोहन सानप.jpeg']
].map(([nameKey, roleKey, fileName]) => ({
  nameKey,
  roleKey,
  image: `/शालेय आधारस्तंभ/${fileName}`
}));

export const teachers = [
  {
    nameKey: 'teacher.arunPawarName',
    roleKey: 'teacher.arunPawarRole',
    instKey: 'teacher.arunPawarInst',
    qualKey: 'teacher.arunPawarQual',
    image: '/teacher/श्री अरुण मारुती पवार.jpeg'
  },
  {
    nameKey: 'teacher.varshaGaikwadName',
    roleKey: 'teacher.varshaGaikwadRole',
    instKey: 'teacher.varshaGaikwadInst',
    qualKey: 'teacher.varshaGaikwadQual',
    image: '/teacher/वर्षा शाम गायकवाड.jpeg'
  },
  {
    nameKey: 'teacher.raziyaDafedarName',
    roleKey: 'teacher.raziyaDafedarRoleShort',
    projectKey: 'teacher.raziyaDafedarRole',
    qualKey: 'teacher.raziyaDafedarQual',
    image: '/teacher/मा.रजिया दफेदार.jpeg'
  },
  {
    nameKey: 'teacher.ujwalaPadoleName',
    roleKey: 'teacher.ujwalaPadoleRoleShort',
    projectKey: 'teacher.ujwalaPadoleRole',
    qualKey: 'teacher.ujwalaPadoleQual',
    image: '/teacher/मा.उज्वला  पडोळे.jpeg'
  }
];

const ProfileCard = ({ person, t, variant = 'default' }) => (
  <article className={variant === 'pillar' ? 'pillar-profile-card' : 'tcard'}>
    {(person.image || person.img) && (
      <div className={variant === 'pillar' ? 'pillar-profile-photo' : 'tcard-photo'}>
        <img src={person.image || person.img} alt={t(person.nameKey)} loading="lazy" />
      </div>
    )}
    <div className={variant === 'pillar' ? 'pillar-profile-content' : undefined}>
      <h3>{t(person.nameKey)}</h3>
      <span className="tcard-role" style={{ whiteSpace: 'pre-line' }}>{t(person.roleKey)}</span>
      {person.orgKey && <p className="muted" style={{ marginTop: '0.9rem', fontSize: '0.92rem' }}>{t(person.orgKey)}</p>}
    </div>
  </article>
);

export default ProfileCard;
