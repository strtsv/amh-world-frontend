import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container-fluid">
          <div className="col-xs-12 col-sm-3 col-md-3 bg-color-absolut">
            <div className="brand">
              <h1 className="brand_name">
                <a href="index.html">
                  <span className="small">AMH</span> <br />
                  world
                </a>
              </h1>
              <div className="copyright">
                <a href="index-5.html">
                  {" "}
                  ©<span id="copyright-year">2015</span> PRIVACY POLICY
                </a>
                {}
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-offset-1 col-sm-4 col-md-offset-1 col-md-4  col-lg-offset-1 col-lg-5 text-center text-sm-left">
            <div className="contact-info">
              <address>
                9870 St Vincent Place, <br />
                Glasgow, DC 45 Fr 45
                <dl>
                  <dt>Telephone:</dt>
                  <dd>
                    <a href="callto#">+1 800 603 6035.</a>
                  </dd>
                </dl>
                <dl className="offset-8 text-primary">
                  <dt>e-mail:</dt>
                  <dd>
                    <a href="mailto#">contact@demolink.org</a>
                  </dd>
                </dl>
              </address>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 inset-4 text-center text-sm-left">
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
      </footer>
    );
  }
}

export default Footer;
