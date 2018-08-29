import React, { Component } from "react";
import "./App.css";
import HouseCard from "./components/HouseCard";

// const details = {
//   title: "Apartment title",
//   subtitle: "Subtitle",
//   link: "https://www.boligportal.dk/lejebolig/dp/3-vaerelses-lejlighed-koebenhavn-s/id-5774372",
//   price: "11.000",
//   image_src: "https://images-cdn.boligportal.dk/prod/public/cf03da32-a1ab-47f8-9831-ee18416cb43e/w484h327.jpg"
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <HouseCard details={details}/>
        <HouseCard details={details}/>
        <HouseCard details={details}/>
      </div>
    );
  }
}

export default App;
