import React from 'react';
import EducationItem from './EducationItem';
import './Education.scss';

class Education extends React.Component {
  render() {
    return (
      <div className="education" id={this.props.time}>
        <h4 className="time">{this.props.time}</h4>
        <EducationItem
          description={this.props.description}
          details={this.props.details}
          key={this.props.key}
        />
      </div>
    );
  }
}

export default Education;
