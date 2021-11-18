import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../../css/taskbar.css';

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
    this.props.onHide();
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
    return (<div ref="main" tabIndex="1" className="ktaskbarmain" onBlur={this.onHide}>
      <div className="ktaskbartitle">Knossys Configuration</div>
      <div className="ktaskbarhsep"></div>
      <div className="ktasbarcont">Content</div>
    </div>);
  }
}

export default KTaskbarMain;
