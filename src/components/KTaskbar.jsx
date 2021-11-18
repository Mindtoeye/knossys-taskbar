import React, { Component } from 'react';

import KTaskbarMain from './KTaskbarMain';
import KTaskbarIcon from './KTaskbarIcon';
import KTaskbarSeparator from './KTaskbarSeparator';

import '../../css/taskbar.css';

/**
 *
 */
class KTaskbar extends Component {

  /**
   * 
   */
  constructor (props) {
    super (props);

    this.state={
      mainShown: false
    };

    this.onMain=this.onMain.bind(this);
  }

  /**
   * 
   */
  onMain () {
    console.log ("onMain ()");
    let toggle=!this.state.mainShown;
    this.setState ({
      mainShown: toggle
    });
  }

  /**
   * 
   */
  render () {
    let icons=[];
    let main;
    let infopanel;

    if (this.state.mainShown==true) {
      main=<KTaskbarMain key="key0" onHide={this.onMain} />;
    }

    icons.push (<KTaskbarIcon showlabel={this.props.showlabels} key="icon1" onClick={this.onMain} key="icon1" label="Knossys" />);
    icons.push (<KTaskbarSeparator key="icon2" />);
    icons.push (<KTaskbarIcon showlabel={this.props.showlabels} key="icon3" label="Console" />);
    icons.push (<KTaskbarIcon showlabel={this.props.showlabels} key="icon4" label="Editor" />);
    icons.push (<KTaskbarIcon showlabel={this.props.showlabels} key="icon5" label="Task Manager" />);

    return (<div className="ktaskbar">
      {main}
      {icons}
      {infopanel}  
    </div>);
  }
}

export default KTaskbar;
