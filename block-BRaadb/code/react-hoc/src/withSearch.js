import React from "react";

function withSearch(Component, datas) {
  return class ComponentClass extends React.Component {
    state = {
      searchTerm: "",
    };
    handleChange = ({ target: { value } }) => {
      this.setState({ searchTerm: value });
    };

    render() {
      let listedData = datas.filter((data) =>
        data.title
          ? data.title.toLowerCase().includes(this.state.searchTerm)
          : data.name.toLowerCase().includes(this.state.searchTerm)
      );
      return (
        <Component
          searchTerm={this.state.searchTerm}
          listedData={listedData}
          handleChange={this.handleChange}
        />
      );
    }
  };
}

export default withSearch;
