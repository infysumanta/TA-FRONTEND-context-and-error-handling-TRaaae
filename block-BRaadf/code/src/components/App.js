import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import { ThemeContext } from "./../context/ThemeContext";

class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    let { isDarkMode } = this.state;
    return (
      <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
        <ThemeContext.Provider value={isDarkMode}>
          <Header />
          <Main />
          <SwitchButton changeMode={this.changeMode} />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
