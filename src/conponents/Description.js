import React from 'react';
import avatar from '../assets/avatar.jpg';
import './Description.scss';

class Description extends React.Component {
  render() {
    return (
      <div id="description">
        <img src={avatar} alt="avatar" />
        <h1>HELLO,</h1>
        <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
      </div>
    );
  }
}

export default Description;
