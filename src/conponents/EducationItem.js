import React from 'react';

class EducationItem extends React.Component {
  render() {
    return (
      <div className="education-item">
        <h4>{this.props.description}</h4>
        <p>{this.props.details}</p>
      </div>
    );
  }
}

export default EducationItem;
