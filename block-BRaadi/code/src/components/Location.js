import React from "react";

class Location extends React.Component {
  state = {
    locations: [
      {
        name: "Ojo",
        zone: "Lagos State",
        region: "South West",
      },
      {
        name: "Ahiazu Mbaise",
        zone: "Imo State",
        region: "South East",
      },
      {
        name: "Akoko-Edo",
        zone: "Edo State",
        region: "South South",
      },
    ],
  };
  handleClick = () => {
    this.setState((state) => {
      return { locations: [...state.locations, {}] };
    });
  };
  render() {
    return (
      <div className="box s1-d">
        <p className="small">
          Here we are displaying a list of locations. Clicking on the button
          below will insert an empty object int the data set. That will make the
          app break.
        </p>
        <p className="small">
          Fix it using the error boundary and display a friendly message.
        </p>
        <div>
          <div>
            <h2>Locations</h2>
          </div>
        </div>
        <div>
          {this.state.locations.map((location) => (
            <LocationCard key={location.name} {...location} />
          ))}
        </div>
        <button onClick={this.handleClick}>
          Push an empty object in the data!
        </button>
      </div>
    );
  }
}

const LocationCard = (props) => {
  return (
    <div>
      <hr />
      <p>
        <b>Name:</b> {props.name.toUpperCase()}
      </p>
      <p>
        <b>Zone:</b> {props.zone}
      </p>
      <p>
        <b>Region:</b> {props.region}
      </p>
      <hr />
    </div>
  );
};

export default Location;
