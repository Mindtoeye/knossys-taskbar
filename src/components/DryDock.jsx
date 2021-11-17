import React, { Component } from 'react';

import KTaskbar from './KTaskbar';

import '../../css/main.css';
import '../../css/drydock.css';

/**
 * 
 */
class DryDock extends Component {

  /**
   *
   */
  constructor(props) {
    super(props);
  }

  /**
   *
   */
  render() {
    return (
      <div className="fauxdesktop">
        <div className="fauxwm">
        </div>
        <KTaskbar>
        </KTaskbar>
      </div>
    );
  }
}

export default DryDock;
