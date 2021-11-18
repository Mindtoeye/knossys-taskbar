import React, { Component } from 'react';

import '../../css/taskbar.css';

/**
 *
 */
class KTaskbarIcon extends Component {

  /**
   * 
   */
  constructor (props) {
    super (props);
  }

  /**
   * 
   */
  render () {
    return (<div className="kicon" onClick={this.props.onClick}>
      <div className="kstarticon">          
      </div>
      <div className="klabel">
      {this.props.label}
      </div>
    </div>);
  }
}

export default KTaskbarIcon;
