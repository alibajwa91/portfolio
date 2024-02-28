import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import React from "react";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="homeWrapper">
        <section class="firstSection">
          <div class="leftSection">
            Welcome to My portfolio Website! My name is
            <span class="purple"> ALi Maqsood Bajwa </span>
            <div>
              and I am a <br />
              FrontEnd Developer
            </div>
            <span id="element"></span>
            <div class="button">
              <a href="https://drive.google.com/file/d/14doFCRDKoyOywxSI4u9dLSXiGQlD_5Fk/view?usp=sharing">
                <button class="btn">Download CV</button>
              </a>
            </div>
          </div>

          <div class="rightSection">
            <img src="assets/pictures/bg.png" alt="" />
          </div>
        </section>
        <hr className="divideSections" />
        <div className="secondSection">
          <div className="secondSectionTop">
            {" "}
            <h1 className="secondSectionTitle">
              Educational Background and Skills
            </h1>
          </div>
          <div className="secondSectionBottom">
            <ul className="listItems">
              <li className="listItem">
                {" "}
                <img
                  src="assets/pictures/punjab-college.png"
                  alt=""
                  class="image-top"
                />
                <div class="vertical-title">FSc Pre-Egineering (2018-2020)</div>
                <div class="vertical-desc">
                  My time at Punjab College provided a solid foundation in
                  pre-engineering, equipping me with fundamental knowledge in
                  mathematics and sciences. This program laid the groundwork for
                  my pursuit of higher education in the field of technology and
                  engineering.
                </div>
              </li>
              <li className="listItem">
                <img
                  src="assets/pictures/Centennial_College.png"
                  alt=""
                  class="image-top"
                />
                <div class="vertical-title">
                  Software Engineering Diploma(2022-2023)
                </div>
                <div class="vertical-desc">
                  Studying at Centennial College has been a transformative
                  experience. Through a comprehensive curriculum, I've gained
                  hands-on expertise in software development and
                  troubleshooting. I have successfully executed complex
                  projects, achieved measurable results and honed my
                  problem-solving abilities.
                </div>
              </li>
              <li className="listItem">
                <img
                  src="assets/pictures/developer.png"
                  alt=""
                  class="image-top"
                />
                <div class="vertical-title">Technical Skills Summary</div>
                <div class="vertical-desc">
                  1-Microsoft Office:
                  <br />
                  (Word, Excel, PowerPoint, Outlook), <br />
                  2-Programming Languages:
                  <br />
                  Java, Python, JavaScript, C# <br />
                  3-Version Control: <br />
                  Git, GitHub <br />
                  4-Web Development:
                  <br />
                  HTML5, CSS3, Bootstrap, React.js, Node.js <br />
                  5-Database Management:
                  <br />
                  SQL, MongoDB
                </div>
              </li>
              <li className="listItem">
                {" "}
                <img
                  src="assets/pictures/Linkedin-Learning.png"
                  alt=""
                  class="image-top"
                />
                <div class="vertical-title">Courses:</div>
                <div class="vertical-desc">
                  <ul>
                    <li>
                      Microsoft office Management (Word, Excel, PowerPoint,
                      Outlook)
                    </li>
                    <li>Html Essential Training</li>
                    <li>CSS Essential Training</li>
                    <li>JavaScript Essential Training</li>
                    <li>Git Essential Training</li>
                    <li>Search Techniques for Web Developers</li>
                    <li>ECMA script 6+</li>
                    <li>Python Object Oriented Programming</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
