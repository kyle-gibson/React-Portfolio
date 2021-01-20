import React from "react";
import "./style.css"

function Footer() {
  return (
    <div className="Footer">
    <footer>
      <hr />

      {/* font awesome for images */}
      <p><a href="https://www.linkedin.com/in/kyle-gibson-ab7a66a0/" className="fa fa-linkedin-square"></a>
         <a href="https://github.com/kyle-gibson" class="git fa fa-github-square"></a></p>
    </footer>
    </div>
  );
}

export default Footer;