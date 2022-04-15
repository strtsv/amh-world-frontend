import React from "react";

import i from "../../assets/images/page-01_img04.jpg";

class Welcome extends React.Component {
  render() {
    return (
      <section className="bg-secondary well-xs">
        <div className="row width center-margin-auto">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 pull-xs-right inset-4">
            <div className="img-wrapper">
              <img src={i} alt />
            </div>
          </div>
          <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-6 pull-xs-left">
            <div className="col-xs-12 col-sm-12  col-md-12 col-lg-offset-3 col-lg-9 text-center text-lg-left inset-2">
              <h2>
                Welcome <br />
                <span className="small-2">to our website!</span>
              </h2>
              <p className="p-big-fz-14 line-height-24 inset-9">
                We sell new the{" "}
                <span className="text-primary-variant-1">Triple E</span>, and{" "}
                <span className="text-primary-variant-1">Pleasure-Way</span>{" "}
                range of Rvs. We offer a comprehensive
                <span className="text-primary-variant-1">servicing</span>
                and <span className="text-primary-variant-1">parts</span>{" "}
                service for all Canadian and American motorhomes, and have a
                large stock of
                <span className="text-primary-variant-1">used</span>
                <span className="text-primary-variant-1">vehicles</span> for
                sale too.There are five models with a choice of over twenty
                floor plans and a variety of slide outs. They also have the
                advantage of being built to UK and European legal requirements
                and available with a choice of diesel, petrol and lpg engines.
              </p>
              <a href="#" className="btn btn-md btn-default">
                join us now!
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Welcome;
