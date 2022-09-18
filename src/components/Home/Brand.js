import React from "react";

class Brand extends React.Component {
  render() {
    return (
      <section className="position-relative z-index">
        <div className="container-fluid bg-secondary--color-1">
          <div className="col-sm-3 col-md-3 col-lg-3 ">
            <div className="brand">
              <h1 className="brand_name">
                <a href="index.html">
                  <span className="small">AMH</span> <br />
                  world
                </a>
              </h1>
            </div>
          </div>
          <div className="col-sm-5 col-md-5 col-lg-6">
            <p className="brand_slogan">
              Your new motorhome will be fully <br />
              equipped, clean and on time
            </p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-3">
            <ul className="inline-list ">
              <li>
                <a
                  className="icon icon-md icon-default fa-tumblr-square"
                  href="#"
                />
              </li>
              <li>
                <a
                  className="icon icon-md icon-default fa-twitter-square"
                  href="#"
                />
              </li>
              <li>
                <a className="icon icon-md icon-default fa-youtube" href="#" />
              </li>
              <li>
                <a className="icon icon-md icon-default fa-feed" href="#" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Brand;
