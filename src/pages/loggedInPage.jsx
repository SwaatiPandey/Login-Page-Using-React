import { Component } from "react";
import Footer from "../components/Footer";
import "../styles/LoggedInPage.css";
class LoggedInPage extends Component {
  render() {
    return (
      <div>
      <div className="main-div">
        <h2> Welcome You Have Logged In</h2>
        <p className="para">This page will open once you have successfully logged in </p>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default LoggedInPage;
