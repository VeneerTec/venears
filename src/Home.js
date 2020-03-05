import React from 'react';
import './App.css';


class App extends React.Component {

  spanish() {
    console.log("Success!")
  }
  enterEmail() {
    var emailLink = ("https://airform.io/" + document.getElementById("inputEmail").value)
    document.getElementsByTagName("form")[0].setAttribute("action", emailLink)
  }

  render() {
    return (
      <div>
        <div class="header">
          <div class="langSelect">
            <input id="langButton" class="langButton" type="button" onClick={this.spanish} value="Espa&ntilde;ol"></input>
          </div>
          <h1>Veneer Tech Employer's Accident Reporting System</h1>
          <p class="p1">BETA VERSION</p>
        </div>
        <div class="button">Long Form Accident Report</div>
        <div class="button">Short Form Accident Report</div>
      </div>
    )
  }
}

class input extends React.Component {
  render() {
    return (
      <div>
        <input id="langButton" class="langButton" type="button" onClick={this.spanish} value="Espa&ntilde;ol"></input>
        <button class="button" id="sendButton" onClick={this.sendButton}>Send</button>
      </div>
    )
  }
}

export default App;