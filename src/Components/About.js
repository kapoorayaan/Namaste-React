import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import { Component } from "react";
import ProfileClass from "./ProfileClass";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor");
  }
  componentDidMount() {
    // Best place to make an Api call
    console.log("Parent - componentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Parent Component Did Update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Parent ComponentWillUnmount");
  }
  render() {
    console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
        </p>
        <Profile />
      </div>
    );
  }
}
export default About;
/**
 *
 * Parent Constructor
 * Parent render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *    DOM UPDATED for children
 *
 *    first Child componentDidMount
 *    Second Child componentDid
 *  Parent componentDidMount
 *
 *
 */
