import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor() {
    super()
    this.state = {
      fontColor: '#000',
      fontSize : 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    }
    this.updateColor = this.updateColor.bind(this)
    this.updateSize = this.updateSize.bind(this)
    this.updateEditStatus = this.updateEditStatus.bind(this)
    this.updateFamily = this.updateFamily.bind(this)
  }
  updateColor(val) {
    this.setState({
      fontColor: val
    })
  }

  updateSize(val) {
    this.setState({
      fontSize: val
    })
  }

  updateFamily(val) {
    this.setState({
      fontFamily: val
    })
  }

  updateEditStatus(val) {
    this.setState({
      allowEdit: val
    })
  }

  render() {
    return (
      <div>
      <h1>Font Color: {this.state.fontColor}</h1>
        <div className="headerBar">
          { /* Render EditToggle */ }
          <EditToggle update={this.updateEditStatus} />
          { /* Render ColorChanger */ }
          <ColorChanger update={this.updateColor}/>
          { /* Render SizeChanger */ }
          <SizeChanger update={this.updateSize} />
          { /* Render FamilyChanger */ }
          <FamilyChanger update={this.updateFamily} />
        </div>
        <div className="textArea">
          { /* Render TextContainer */ }
          <TextContainer fontColor={this.state.fontColor}/>
        </div>
      </div>
    )
  }
}

export default App;
