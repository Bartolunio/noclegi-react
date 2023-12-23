import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";
import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon";

class App extends Component {
  hotels = [
    {
      id: 1,
      name: "Pod akcjami",
      city: "Warszawa",
      rating: "8.3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: "",
    },
    {
      id: 2,
      name: "Debowy wierch",
      city: "Lublin",
      rating: "8.8",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: "",
    },
  ];
  state = {
    hotels: [],
    loading: true,
  };

  searchHandler(term) {
    // console.log("szukaj z app", term);
    const hotels = [...this.hotels].filter((x) =>
      x.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    );
    this.setState({ hotels });
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ hotels: this.hotels, loading: false });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Header
          onSearch={(term) => {
            this.searchHandler(term);
          }}
        />
        <Menu />
        {this.state.loading ? (
          <LoadingIcon />
        ) : (
          <Hotels hotels={this.state.hotels} />
        )}
      </div>
    );
  }
}

export default App;
