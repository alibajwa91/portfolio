import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div class="footer-first">Ali's Developer portfolio</div>
        <div class="footer-second">
          <ul className="footerListItems">
            <li className="footerListItem">
              <a href="https://www.linkedin.com/in/ali-maqsood-bajwa-295108250/">
                linked-In | Profile
              </a>
            </li>
            <li className="footerListItem">
              <a href="https://github.com/alibajwa91">Github | Account</a>
            </li>
            <li className="footerListItem">
              <a href="https://mail.google.com">
                alibajwa6637@gmail.com | Email
              </a>
            </li>
            <li className="footerListItem">
              <a href="https://profile.indeed.com/?hl=en_CA&co=CA&from=gnav-homepage">
                Indeed | Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-reserved">Ali Maqsood Bajwa || All rights reserved</div>
    </div>
  );
}
