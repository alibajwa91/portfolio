import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./project.css";
export default function Project() {
  return (
    <div className="projectWrapper">
      <Navbar />
      <div class="project-main">
        <div class="project-section1">
          <div class="project">
            <a href="https://docs.google.com/presentation/d/1eBcLDNhik65cibbkpEMCjgseUImx_Rer/edit?usp=sharing&ouid=113132978570924527061&rtpof=true&sd=true">
              <img src="assets/pictures/project-logo.png" alt="" class="img-" />
            </a>
            <div class="project-desc">
              Software Requirements Engineering Project <br />
              <span class="clicklogo"> click on picture for details</span>
            </div>
          </div>
          <div class="project">
            <a href="https://docs.google.com/document/d/1pKKLEAJt0yKvbTXzQq3Qw2ZLTu5HcMlm/edit?usp=sharing&ouid=113132978570924527061&rtpof=true&sd=true">
              <img src="assets/pictures/project-logo.png" alt="" class="img-" />
            </a>
            <div class="project-desc">
              Software System Design Project <br />
              <span class="clicklogo"> click on picture for details</span>
            </div>
          </div>
          <div class="project">
            <a href="https://docs.google.com/document/d/1rlqskZMzs5KR37RX1LpSaPAK9zflf0lci_k9dBqhv4c/edit?usp=sharing">
              <img src="assets/pictures/project-logo.png" alt="" class="img-" />
            </a>
            <div class="project-desc">
              Software engineering fundamental Project <br />
              <span class="clicklogo"> click on picture for details</span>
            </div>
          </div>
        </div>
        <div class="project-section2">
          <div class="project">
            <a href="https://github.com/alibajwa91/project-web-interface">
              <img src="assets/pictures/project-logo.png" alt="" class="img-" />
            </a>
            <div class="project-desc">
              RealState Web project <br />
              <span class="clicklogo"> click on picture for details</span>
            </div>
          </div>
          <div class="project">
            <a href="">
              <img src="assets/pictures/project-logo.png" alt="" class="img-" />
            </a>
            <div class="project-desc">project</div>
          </div>
          <div class="project">
            <a href="">
              <img src="assets/pictures/project-logo.png" alt="" class="img-" />
            </a>
            <div class="project-desc">project</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
