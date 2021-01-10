import { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import  "../styles/Index.css";
class Index extends Component {
  render() {
    return (
      <div className="main-container">
        <Navigation />
        <div className="main-div">
          <h1> WELCOME</h1>
          <p className="para">This is our landing page </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Index;
