import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <body>
        <div class="header">
          <div class="langSelect">
            <input id="langButton" class="langButton" type="button" onclick="langBtn()" value="Espa&ntilde;ol"></input>
          </div>
          <h1>Veneer Tech Employer's Accident Reporting System</h1>
          <p1>BETA VERSION</p1>
        </div>
        <form method="post" action="https://airform.io/ledinger@veneertech.com">
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
  );
}

// https://stackoverflow.com/questions/37295377/how-to-navigate-from-one-page-to-another-in-react-js
export default App;