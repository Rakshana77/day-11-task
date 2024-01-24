import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

// CoursePricing.js

const CoursePricing = () => {
  const [selectedOption, setSelectedOption] = useState("free");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="course-pricing-container">
      <div
        className={`pricing-block ${
          selectedOption === "free" ? "selected" : ""
        }`}
        onClick={() => handleOptionChange("free")}
      >
        <h2>Free</h2>
        <p>Basic features</p>
        <li>
          <b>single user</b>
        </li>
        <li>
          <b>50 GB storage</b>
        </li>
        <li>
          <b>unlimited public projects</b>
        </li>

        <li>
          <b>community access</b>
        </li>
        <li>unlimited private projects</li>
        <li>dedicated phone support</li>
        <li>free subdomain</li>
        <li>monthly status reports</li>

        <span>$0</span>
      </div>

      <div
        className={`pricing-block ${
          selectedOption === "plus" ? "selected" : ""
        }`}
        onClick={() => handleOptionChange("plus")}
      >
        <h2>Plus</h2>
        <p>Additional features</p>
        <li>
          <b>single user</b>
        </li>
        <li>
          <b>50 GB storage</b>
        </li>
        <li>
          <b>unlimited public projects</b>
        </li>

        <li>
          <b>community access</b>
        </li>
        <li>
          <b>unlimited private projects</b>
        </li>
        <li>
          <b>dedicated pjone support</b>
        </li>
        <li>
          <b>free subdomain</b>
        </li>
        <li>monthly status reports</li>
        <span>$9/month</span>
      </div>

      <div
        className={`pricing-block ${
          selectedOption === "pro" ? "selected" : ""
        }`}
        onClick={() => handleOptionChange("pro")}
      >
        <h2>Pro</h2>
        <p>All features included</p>
        <li>
          <b>single user</b>
        </li>
        <li>
          <b>50 GB storage</b>
        </li>
        <li>
          <b>unlimited public projects</b>
        </li>

        <li>
          <b>community access</b>
        </li>
        <li>
          <b>unlimited private projects</b>
        </li>
        <li>
          <b>dedicated pjone support</b>
        </li>
        <li>
          <b>free subdomain</b>
        </li>
        <li>
          <b>monthly status reports</b>
        </li>
        <span>$49/month</span>
      </div>
    </div>
  );
};

export default CoursePricing;
