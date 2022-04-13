import React from "react";
import $ from "jquery";

import "../../assets/js/jquery.easing.1.3.js";
import "../../assets/js/camera.js";
import "../../assets/js/superfish.js";
import "../../assets/js/jquery.ui.totop.js";

import Menu from "./Menu";
import Brand from "./Brand";

class Header extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      $(".sf-menu").superfish();
      $().UItoTop({ easingType: "easeOutQuart", containerClass: "toTop" });
    });
  }
  render() {
    return (
      <header>
        {}
        <Menu></Menu>
        {}
        {}
        <Brand></Brand>
        {}
      </header>
    );
  }
}

export default Header;
