import { React } from "react";
import "./component-style.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="logo">shrtn.</div>
      <div>
        <h4>Features</h4>
        <ul>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div>
        <h4>Resources</h4>
        <ul>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
