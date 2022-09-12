const navigationData = [
  {
    title: 'OUR STORY',
    url: '/our_story',
    children: [
      { title: 'Hommage au fondateur', url: '/our_story#founder', children: [] },
      { title: 'Management', url: '/our_story', children: [] },
      { title: 'Commitments', url: '/our_story', children: [] },
    ],
  },
  {
    title: 'ACTIVITIES',
    url: '/activities',
    children: [
      {
        title: 'CEREAL MILLS',
        url: 'activity/cereal-mills',
        children: [
          { title: 'MINOTERIE', url: '/activity/cereal-mills/minoterie', children: [] },
          {
            title: 'SEMOULERIE',
            url: '/activity/cereal-mills/semoulerie',
            children: [],
          },
          { title: 'ORGERIE', url: '/activity/cereal-mills/orgerie', children: [] },
          { title: 'MAISERIE', url: '/activity/cereal-mills/maiserie', children: [] },
        ],
      },
      { title: 'INDUSTRIE PÂTES & COUSCOUS', url: '/activity/industrie-pates-couscous', children: [] },
      { title: 'AVICULTURE', url: '/activity/aviculture', children: [] },
      {
        title: 'NEGOCE',
        url: '/activity/negoce',
        children: [
          { title: 'CASAGRAINS', url: '/activity/negoce/casagrains', children: [] },
          { title: 'IMANDY GRAINS', url: '/activity/negoce/imandy', children: [] },
        ],
      },
    ],
  },
  {
    title: 'Brands',
    url: '/brands',
    children: [
      { title: 'Nordar', url: '/brands', children: [] },
      { title: 'Khoulala', url: '/brands', children: [] },
      { title: 'Kayna', url: '/brands', children: [] },
      { title: 'Couvirs Errahma', url: '/brands', children: [] },
      { title: 'Eddik Almentatio', url: '/brands', children: [] },
      { title: 'Abattoirs Eddik', url: '/brands', children: [] },
    ],
  },
  { title: 'INVESTORS', url: '/investors', children: [] },
  { title: 'Careers', url: '/careers', children: [] },
  { title: 'Media', url: '/media', children: [] },
  { title: 'CONTACT', url: '/contact', children: [] },
];
export default navigationData;
