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

    this.state={
      showLabels: true,
      showInfo: true
    }

    this.onKeyDown=this.onKeyDown.bind (this);
  }

  /**
   *
   */
  onKeyDown (e) {
    console.log ("onKeyDown ("+e.keyCode+")");

    // 'l'
    if(e.keyCode==76) {
      console.log ("Toggling taskbar labels");

      let toggle=this.state.showLabels;
      this.setState ({
        showLabels: !toggle
      });
      return;
    }

    // 'i'
    if(e.keyCode==73) {
      console.log ("Toggling taskbar info panel");
      let toggle=this.state.showInfo;
      this.setState ({
        showInfo: !toggle
      });
      return;      
    }    
  }  

  /**
   *
   */
  render() {
    return (
      <div tabIndex="0" className="fauxdesktop" onKeyDown={this.onKeyDown}>
        <div className="fauxwm">
          <div className="drydockpanel">
            <p>Use the following keys to show and test the various taskbar features</p>
            <p>  l: show/hide labels</p>
            <p>  i: show/hide info panel</p>
          </div>
        </div>
        <KTaskbar 
          showlabels={this.state.showLabels}
          showinfo={this.state.showInfo}>
        </KTaskbar>
      </div>
    );
  }
}

export default DryDock;
