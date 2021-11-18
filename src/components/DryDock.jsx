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

        <div className="drydockpanel">
          <p>Use the following keys to show and test the various window manager features</p>
          <p>  d: show modal dialog</p>
          <p>  s: show modeless dialog</p>          
          <p>  t: show tool window</p>          
          <p>  w: add generic window</p>
          <p>  a: add application</p>
          <p>  b: add basic application</p>
          <p>  c: show confirm modal dialog</p>
        </div>
        
        </div>
        <KTaskbar>
        </KTaskbar>
      </div>
    );
  }
}

export default DryDock;
