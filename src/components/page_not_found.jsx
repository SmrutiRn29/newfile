import React from "react";
import { Link } from "react-router-dom";
import "../css/page_not_found.css";
export default function PageNotFound () {

  return (
    <div className="page_not_found">
      <div className="page_not_found_main">
        <div className="page_not_found_gif">
          <img src="/image/page-not-found/page_not_found.gif" alt="404" />
        </div>
        <div className="page_not_found_content">
          <h3>OOPS!</h3>
          <h4
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            This page doesn't exist...
          </h4>
          <h4>
            {" "}
            Please check that the URL you entered is correct, or click the
            button below to return to the homepage.
          </h4>
          <Link className="page_not_found_back_home" to="/home">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
