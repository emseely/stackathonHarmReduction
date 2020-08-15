import React from "react";
class DrugSearch extends React.Component {
  // constructor() {
  //   super();
  // }

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
