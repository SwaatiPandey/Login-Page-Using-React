import { Component } from "react";
import Navigation from "../components/Navigation";
import "../styles/Home.css";
import Footer from "../components/Footer";
class Home extends Component {
  render() {
    return (
      <div>
        <Navigation/>
      <div className="main-div">
        <h1> Welcome To The Home Page</h1>
        <p className="para">This page will open once you have successfuly logged in </p>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Home;
