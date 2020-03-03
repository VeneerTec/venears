import React from 'react';
import './App.css';


class App extends React.Component {
  spanish() {
    var x = document.getElementById("langButton").value
    console.log("Success!")
    x.innerHTML = "Success!"
  }
  render () {
    return (
      <div>
      <body>
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
              <td><input class="wrapper" type="text" name="Email"></input></td>
            </tr>
          </tbody>
        </table>
        <form method="post" action="https://airform.io/{email}">
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
          <textarea class="wrapper" name="message"></textarea>
          <button class="button">Send</button>

        </form>
      </body>
      <footer>
        <p>&copy; 2020 Möhring Group &emsp;</p>
      </footer>
    </div>
    )
  }
}

class input extends React.Component {
  render () {
    return (
      <input id="langButton" class="langButton" type="button" onClick={this.spanish} value="Espa&ntilde;ol"></input>
    )
  }
}

export default App;