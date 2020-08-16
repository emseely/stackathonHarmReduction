import React from "react";
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";
class DrugSearch extends React.Component {
  constructor() {
    super();
    this.state = { drugOne: "", drugTwo: "", interactions: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const nameOne = this.state.drugOne;
    const nameTwo = this.state.drugTwo;
    const singleDrugId = async (name) => {
      const { data } = await axios.get(
        `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${name}`
      );
      console.log(data.idGroup.rxnormId[0]);
      return data.idGroup.rxnormId[0];
    };
    const drugDataById = async (idOne, idTwo) => {
      const { data } = await axios.get(
        // `https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${id}`
        `https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=${idOne}+${
          idTwo || ""
        }`
      );

      if (data.fullInteractionTypeGroup) {
        return data.fullInteractionTypeGroup[0].fullInteractionType[0]
          .interactionPair[0].description;
      } else {
        return null;
      }
    };
    try {
      const idOne = await singleDrugId(nameOne);
      const idTwo = await singleDrugId(nameTwo);
      const interactions = await drugDataById(idOne, idTwo);
      console.log("horray", interactions);
      this.setState({ interactions: interactions });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { interactions } = this.state;

    return (
      <div id="drugSearch">
        <div className="column">
          <div>
            <form onSubmit={this.handleSubmit} className="column">
              <label>
                Substance One:
                <input
                  type="text"
                  name="drugOne"
                  value={this.state.drugOne}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Substance Two:
                <input
                  type="text"
                  name="drugTwo"
                  value={this.state.drugTwo}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div>Saved drugs?</div>
        </div>
        <div className="column">
          <h2>Substance Interactions</h2>
          <div>
            {interactions ? (
              <h3>{interactions}</h3>
            ) : (
              <h3>
                No significant interactions were found between these two
                substances, but please check with a healthcare professional.
              </h3>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default DrugSearch;
