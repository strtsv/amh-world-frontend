import React from "react";
import $ from "jquery";
import "../../assets/js/tmstickup.js";

class Menu extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      $("#stuck_container").TMStickUp({});
    });
  }
  render() {
    return (
      <section className="bg-secondary">
        <div id="stuck_container" className="stuck_container">
          <div className="container">
            <nav className="nav">
              <ul className="sf-menu" data-type="navbar">
                <li className="active">
                  <a href="./">Home</a>
                </li>
                <li>
                  <a href="index-1.html">About</a>
                </li>
                <li>
                  <a href="index-2.html">RV Rentals</a>
                </li>
                <li>
                  <a href="index-3.html">Servicing & Spares </a>
                  <ul>
                    <li>
                      <a href="#">dolore</a>
                    </li>
                    <li>
                      <a href="#">massa</a>
                      <ul>
                        <li>
                          <a href="#">astum</a>
                        </li>
                        <li>
                          <a href="#">nostrud</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">laoreetum</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="index-4.html"> Contacts</a>
                </li>
              </ul>
            </nav>
            <div className="search-form">
              <form
                id="search"
                action="search.php"
                method="GET"
                acceptCharset="utf-8"
              >
                <label className="search-form_label" htmlFor="in">
                  <input
                    id="in"
                    className="search-form_input"
                    type="text"
                    name="s"
                    placeholder="Type your search term here..."
                  />
                  <span className="search-form_liveout" />
                </label>
                <button
                  type="submit"
                  className="search-form_submit fa-search"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Menu;
