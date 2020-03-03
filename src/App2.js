import React from 'react';
import './App.css';\
//test


class App extends React.Component {

    spanish() {

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
                                <th>Supervisor Accident</th>
                                <th>Investigation Report</th>
                            </tr>
                            <tr>
                                <td>Name of Employee</td>
                                <td><input class="wrapper" type="text" name="employeeName" /></td>
                            </tr>
                            <tr>
                                <td>Date of Injury</td>
                                <td><input class="wrapper" type="text" name="dateOfInjury" /></td>
                            </tr>
                            <tr>
                                <td>Time of Injury</td>
                                <td><input class="wrapper" type="text" name="timeOfInjury" /></td>
                            </tr>
                            <tr>
                                <td>Department Location</td>
                                <td>
                                    <select class="wrapper" type="text" name="departmentLocation" >
                                        <option value="Edge Banding">Edge Banding</option>
                                        <option value="Face Grading">Face Grading</option>
                                        <option value="Floor Grading">Floor Grading</option>
                                        <option value="Jointing">Jointing</option>
                                        <option value="Main Office">Main Office</option>
                                        <option value="Maintenance">Maintenance</option>
                                        <option value="Production Office">Production Office</option>
                                        <option value="Sheet Veneer">Sheet Veneer</option>
                                        <option value="Splicing">Splicing</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Machine In Use</td>
                                <td><input class="wrapper" type="text" name="machineInUse" /></td>
                            </tr>
                            <tr>
                                <td>Eompyee's Occupation</td>
                                <td><input class="wrapper" type="text" name="employeesOccupation" /></td>
                            </tr>
                            <tr>
                                <td>Was is part of the Employee's regular duties?</td>
                                <td><input class="wrapper" type="text" name="partOfRegularDuties" /></td>
                            </tr>
                            <tr>
                                <td>Employee's description of the accident.</td>
                                <td><input class="wrapper" type="text" name="employeeDescription" /></td>
                            </tr>
                            <tr>
                                <td>Were there witnesses?</td>
                                <td><input class="wrapper" type="text" name="witnessQuestion" /></td>
                            </tr>
                            <tr>
                                <td>If so, who witnessed the accident?</td>
                                <td><input class="wrapper" type="text" name="whoWitnessed" /></td>
                            </tr>
                            <tr>
                                <td>Was the accident due to negligence or in violation of a safety and/or work policy?</td>
                                <td><input class="wrapper" type="text" name="negligenceOrViolation" /></td>
                            </tr>
                            <tr>
                                <td>If so, was the employee issued any type of warning?</td>
                                <td><input class="wrapper" type="text" name="anyWarning" /></td>
                            </tr>
                            <tr>
                                <td>If applicable, what was the type of warning?</td>
                                <td><input class="wrapper" type="text" name="typeOfWarning" /></td>
                            </tr>
                            <tr>
                                <td>Were company First-Aid responders called?</td>
                                <td><input class="wrapper" type="text" name="companyFirstAid" /></td>
                            </tr>
                            <tr>
                                <td>If so, who was called?</td>
                                <td><input class="wrapper" type="text" name="whoCompanyFirstAid" /></td>
                            </tr>
                            <tr>
                                <td>Did you reccomend the employee seek treatment?</td>
                                <td><input class="wrapper" type="text" name="recomendTreatment" /></td>
                            </tr>
                            <tr>
                                <td>Did the employee want medical treatment?</td>
                                {/*
                                Add Hospital information for fast urgent med and carteret health care.
                                */}
                                <td><input class="wrapper" type="text" name="wantTreatment" /></td>
                            </tr>
                            <tr>
                                <td>If treatment was refused, please have the employee enter the last four (4)</td>
                                <td><input class="wrapper" type="text" name="refusedLastFourSSN" /></td>
                            </tr>
                            <tr>
                                <td>Did you reccomend the employee seek treatment?</td>
                                <td><input class="wrapper" type="text" name="recomendTreatment" /></td>
                            </tr>

                        </tbody>
                    </table>
                    <button class="button" id="sendButton" onClick={this.enterEmail} action="https://airform.io/ledinger@veneertech.com">Send</button>

                </form>
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