import { Component } from "react";
import  "../styles/Signupage.css";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// onSubmit = (event)=>{
//     event.preventDefault();
//     fetch(taskUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ taskName: event.target.task.value }),
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         // console.log(data);
//         let taskList = [...this.state.taskList];
//         taskList.push(data.data);
//         this.setState({ taskList: taskList });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

// }
class Signup extends Component {
  render() {
    return (
      <div >
      <Navigation />
      <div className="signupbox">
        <h1>Sign Up Page</h1>
        <form className="form-container" onSubmit={this.onLogin}>
        <p>First Name</p>
          <input type="text" placeholder="Enter your first name" name="firstName" />
          <p>Last Name</p>
          <input type="text" placeholder="Enter your last Name" name="lastName" />
          <p>Email</p>
          <input type="text" placeholder="Enter your email" name="emailId" />
          <p>Password</p>
          <input
            type="text"
            placeholder="Password"
            name="userPassword"
          />
          <p>Confirm Password</p>
          <input
            type="text"
            placeholder="Confirm password"
            name="confirmPassword"
          />
          
          <Link to="/login">
            <input type="button" name="login" value="login" />
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

export default Signup;
