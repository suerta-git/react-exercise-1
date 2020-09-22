import React from 'react';
import Education from './Education';

const educations = [
  {
    time: '1990',
    description: 'I was born in Katowice',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    time: '2005',
    description: 'Secondary school specializing in artistic',
    details:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    time: '2009',
    description: 'First level graduation in Graphic Design',
    details:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    time: '2012',
    description: 'Second level graduation in Graphic Design',
    details:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…',
  },
];

const Educations = () =>
  educations.map((item) => (
    <Education
      time={item.time}
      description={item.description}
      details={item.details}
      key={item.time}
    />
  ));

export default Educations;
