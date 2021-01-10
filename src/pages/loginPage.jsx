import { Component } from "react";
import  "../styles/Loginpage.css";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
// import loginUrl from "";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  onLogin = (event) => {
    event.preventDefault();
    fetch(email, password, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: event.target.email.value,
        password: event.target.password.value,
      }),
    })
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        let email = [...this.state.email];
        email.push(data.data);
        this.setState({ email: email });
        let password = [...this.state.password];
        password.push(data.data);
        this.setState({ password: password });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount = (event) => {
    fetch(loginUrl)
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        this.setState({ email: [...data.data.email] });
        this.setState({ password: [...data.data.password] });
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
              type="text"
              placeholder="Enter your password"
              name="password"
            />
            <Link to="/login">
              <input type="submit" name="login" value="login" />
            </Link>
            <Link to="/signup">
              <input type="button" name="signup" value="signup" />
            </Link>
            <input type="button" name="cancel" value="cancel" />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
