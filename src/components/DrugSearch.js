import React from "react";
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";
import { Link } from "react-router-dom";
class DrugSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      drugOne: "",
      drugTwo: "",
      interactions: null,
      singleDrugOne: null,
      singleDrugTwo: null,
    };
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

    if (nameOne === "" && nameTwo === "") return;

    const singleDrugId = async (name = "") => {
      const { data } = await axios.get(
        `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${name}`
      );
      console.log(data.idGroup.rxnormId[0]);
      return data.idGroup.rxnormId[0];
    };

    const drugInteractionsByIds = async (idOne, idTwo) => {
      const { data } = await axios.get(
        // `https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${id}`
        `https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=${idOne}${
          idTwo ? `+${idTwo}` : ""
        }`
      );

      if (data.fullInteractionTypeGroup) {
        return data.fullInteractionTypeGroup[0].fullInteractionType[0]
          .interactionPair[0].description;
      } else {
        return "No significant interactions detected between these substances. Check with a healthcare professional for more info!";
      }
    };

    // const drugDataById = async (id) => {
    //   const { data } = await axios.get(
    //     `https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${id}`
    //   );
    //   if (data.interactionTypeGroup) {
    //     return data.interactionTypeGroup[0].interactionType[0];
    //   } else {
    //     return "No high severity interactions found with this drug. Check with a healthcare professional for more info!";
    //   }
    // };

    try {
      let idOne, idTwo;
      if (nameOne !== "") idOne = await singleDrugId(nameOne);
      if (nameTwo !== "") idTwo = await singleDrugId(nameTwo);
      if (idOne && idTwo) {
        const interactions = await drugInteractionsByIds(idOne, idTwo);
        console.log("horray", interactions);

        const singleDrugOne = idOne;
        const singleDrugTwo = idTwo;

        this.setState({
          interactions: interactions,

          singleDrugOne: singleDrugOne,
          singleDrugTwo: singleDrugTwo,
        });
      } else if (idOne || idTwo) {
        const singleDrugOne = idOne || idTwo;
        const name = nameOne || nameTwo;
        this.setState({
          drugOne: name,
          singleDrugOne: singleDrugOne,
          singleDrugTwo: null,
          interactions: null,
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { interactions, singleDrugOne, singleDrugTwo } = this.state;
    console.log("ay", singleDrugOne, singleDrugTwo);
    return (
      <div id="drugSearch">
        <div className="column">
          <div>
            <form onSubmit={this.handleSubmit} className="column">
              <label>
                <span>Substance One:</span>
                <input
                  type="text"
                  name="drugOne"
                  value={this.state.drugOne}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <span>(Optional) Substance Two:</span>
                <input
                  type="text"
                  name="drugTwo"
                  value={this.state.drugTwo}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Quick Check Interactions</button>
            </form>
          </div>
          <div id="back">
            <Link to="/">← Back</Link>
          </div>
        </div>

        <div className="column">
          {singleDrugOne && this.state.drugOne !== "" && (
            <a
              href={`https://mor.nlm.nih.gov/RxNav/search?searchBy=RXCUI&searchTerm=${singleDrugOne}`}
            >
              ★ Click here for more info on {this.state.drugOne}
            </a>
          )}
          {singleDrugTwo && this.state.drugTwo !== "" && (
            <a
              href={`https://mor.nlm.nih.gov/RxNav/search?searchBy=RXCUI&searchTerm=${singleDrugTwo}`}
            >
              ★ Click here for more info on {this.state.drugTwo}
            </a>
          )}

          {interactions && (
            <div>
              <h2>
                Substance Interactions between {this.state.drugOne} and{" "}
                {this.state.drugTwo}:
              </h2>
              <h3>{interactions}</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default DrugSearch;
