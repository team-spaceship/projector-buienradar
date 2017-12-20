import React, { Component } from 'react';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    /* eslint-disable*/
   return(
    <iframe className="buienradar-frame-buien" src="https://gadgets.buienradar.nl/gadget/zoommap/?lat=51.9225&lng=4.47917&overname=2&zoom=8&naam=rotterdam&size=3&voor=0" scrolling={"no"} width="550" height="512" frameborder="no"></iframe>
   )
  }

  /* eslint-enable */
}

export default App;
