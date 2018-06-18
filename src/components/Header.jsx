import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }


render() {
    return (
      <div className="header">
        <h3>Ola { (this.props.user) ? this.props.user.name : '' }</h3>
        <h2> Profile: {(this.props.user) ? this.props.user.profile : ''}</h2>
      </div>
    );
  }
}

