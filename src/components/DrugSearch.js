import React from "react";
class DrugSearch extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="drugSearch">
        <div>
          <div>
            <form>
              <label>
                Substance Name:
                <input type="text" name="name" />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div>Saved drugs?</div>
        </div>
        <div>Drugs List/ Single Drug</div>
      </div>
    );
  }
}

export default DrugSearch;
