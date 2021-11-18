import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import KTaskbarSeparator from './KTaskbarSeparator';

import '../../css/taskbar.css';

import helpIcon from '../../css/images/help-64.png';
import settingsIcon from '../../css/images/settings-64.png';
import consoleIcon from '../../css/images/console-64.png';

/**
 *
 */
class KTaskbarMain extends Component {

  /**
   * 
   */
  constructor (props) {
    super (props);

    this.onHide=this.onHide.bind(this);
  }

  /**
   * 
   */
  onHide () {
    //this.props.onHide();
  }

  /**
   * 
   */
  componentDidMount() {
    this.focusDiv();
  }

  /**
   * 
   */
  focusDiv() {
    ReactDOM.findDOMNode(this.refs.main).focus();
  }  

  /**
   * 
   */
  render () {
    return (<div ref="main" tabIndex="2" className="ktaskbarmain" onBlur={this.onHide}>
      <div className="ktaskbartitle">Knossys Configuration</div>
      <div className="ktaskbarhsep"></div>
      <div className="ktasbarcont">
        <div className="kverticaltoolbar">
          <div className="kmenuvstretcher" />
          <div className="taskicon">
            <img className="taskiconimg" src={helpIcon} />
          </div>                    
          <div className="taskicon">
            <img className="taskiconimg" src={settingsIcon} />
          </div>          
          <div className="taskicon">
            <img className="taskiconimg" src={consoleIcon} />
          </div>
        </div>
        <KTaskbarSeparator />
        <div className="ktaskbarpanel"></div>
      </div>
    </div>);
  }
}

export default KTaskbarMain;
