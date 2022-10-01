import React from "react";

class SectionOne extends React.Component {
  state = {
    value: "Hello World!",
  };
  render() {
    return (
      <div className="box s1-a">
        <h2>Regular JS Error</h2>
        <p>
          The value of state is{" "}
          <span className="label">{this.state.value}</span> The transformed
          value is{" "}
          <span className="label">
            {this.state.value.toLowerCase().split("").join(" ")}
          </span>
        </p>
        <button onClick={() => this.setState({ value: "Sam" })}>
          Change input to Sam
        </button>
        <button onClick={() => this.setState({ value: {} })}>
          Change input to an object
        </button>

        <p className="small">
          When you change the value to be an object the app will break, because
          the object doesn't contain a method named toLowerCase(). Any
          JavaScript error inside a component can make the compoennt disappear
          (unmounted) in production. That's why clicking on the button will make
          the screen go blank or it will show an overlay error
          (create-react-app).
        </p>

        <p className="small">
          Error boundary will fix this problem. Make it in such a way that when
          clicked on the second button it will display a message saying
          "Something went wrong! Reload the page"
        </p>
      </div>
    );
  }
}

export default SectionOne;
