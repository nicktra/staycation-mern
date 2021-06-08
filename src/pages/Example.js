import React, { Component } from "react";

import Breadcrumb from "elements/Breadcrumb";

export default class Example extends Component {
  render() {
    const breacrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <Breadcrumb data={breacrumb} />
          </div>
        </div>
      </div>
    );
  }
}
