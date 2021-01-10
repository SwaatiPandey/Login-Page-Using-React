import { Component } from "react";
import "../styles/Loginpage.css";

import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import loginUrl from "../apicalls/apicall";

class Login extends Component {
  state = {
    emailId: "",
    useraPassword: "",
  };
  onLogin = (event) => {
    event.preventDefault();
    fetch(loginUrl + "users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        emailId: event.target.email.value,
        userPassword: event.target.password.value,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        if (data.data) {
          console.log("Login Successful");
          this.props.history.push("/home");
        }
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className="loginbox">
          <h1>Login Page</h1>
          <form className="form-container" onSubmit={this.onLogin}>
            <p>Email</p>
            <input type="text" placeholder="Enter your email" name="email" />
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
            />
            <button type="submit">Login</button>
            <Link to="/signup">
              <input type="button" name="signup" value="signup" />
            </Link>
            <button type="reset" name="cancel" value="cancel">clear</button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
