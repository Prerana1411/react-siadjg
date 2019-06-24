import React from "react";
import { render } from "react-dom";
import Accordion from "./Accordion";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagged: false,
      fullname: '',
      age: '',
      email: '',
      salary: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { fullname, age, email, salary } = this.state;
    return (

      <div>
        <p>
          <h1>Accordion with forms</h1>
        </p>


        <Accordion
          className="accordion"
          selectedIndex={this.state.selectedIndex}
          onChange={(index, expanded, selectedIndex) => console.log(`#${index} ${expanded ? 'expanded' : 'collapsed'} (selectedIndex: ${selectedIndex})`)}>
          <div
            data-header="Basic form with name and age info"
            className="accordion-item">
            <p>
              <div class="control">
                <label>Full Name : </label>
                <input class="input is-focused" type="text" name="fullname" placeholder="Focused input" onChange={this.handleChange} />
              </div>
              <br />
              <div class="control">
                <label>Age : </label>
                <input class="input is-focused" type="number" name="age" placeholder="Focused input" onChange={this.handleChange} />
              </div>
            </p>

          </div>
          <div data-header="Form with email and pay info" className="accordion-item">
            <p>
              <div class="control">
                <label>Email : </label>
                <input class="input is-focused" type="email" name="email" placeholder="Focused input" onChange={this.handleChange} />
              </div>
              <br />
              <div class="control">
                <label>Salary $ : </label>
                <input class="input is-focused" type="number" name="salary" placeholder="Focused input" onChange={this.handleChange} />
              </div>
            </p>
          </div>

          <div
            data-header="Final Output :"
            className="accordion-item">
            <p>
              <label>
                Full Name : {this.state.fullname}
              </label>
            </p>

            <p>
              <label>
                Age : {this.state.age}
              </label>
            </p>

            <p>
              <label>
                Email : {this.state.email}
              </label>
            </p>

            <p>
              <label>
                Salary $ : {this.state.salary}
              </label>
            </p>

          </div>
        </Accordion>


      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
