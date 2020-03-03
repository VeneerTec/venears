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
        <table class="devTable">
          <tbody>
            <tr>
              <td>DEV</td>
              <td>TOOLS</td>
            </tr>
            <tr>
              <td>Where to send email</td>
              <td><input class="wrapper" type="text" name="Email" id="inputEmail"></input></td>
            </tr>
          </tbody>
        </table>
        <form method="post" id="formPost">
          <table class="table">
            <tbody>
              <tr>
                <td>What is your name?</td>
                <td><input class="wrapper" type="text" name="name" /></td>
              </tr>
              <tr>
                <td>What is your quest?</td>
                <td><input class="wrapper" type="text" name="quest" /></td>
              </tr>
              <tr>
                <td>What is your favorite color?</td>
                <td><input class="wrapper" type="text" name="color" /></td>
              </tr>
            </tbody>
          </table>
          <button class="button" id="sendButton" onClick={this.enterEmail}>Send</button>

        </form>
        <footer>
          <p>&copy; 2020 Möhring Group &emsp;</p>
        </footer>
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