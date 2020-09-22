import React from 'react';
import Educations from './Educations.js';
import './Introduction.scss';

const Introduction = () => (
  <div id="introduction">
    <h3>ABOUT ME</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <h3>EDUCATION</h3>
    <Educations
      time="1990"
      description="I was born in Katowice"
      details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua."
    />
  </div>
);

export default Introduction;
