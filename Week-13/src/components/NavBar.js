import { React } from "react";
import "./component-style.css";

export function NavBar() {
  return (
    <div className="navBar">
      <div id="top-left">
        <div className="logo">shrtn.</div>
        <div className="links">
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
      </div>

      <div className="links">
        <ul>
          <li>Sign in</li>
          <li>Sign up</li>
        </ul>
      </div>
    </div>
  );
}
