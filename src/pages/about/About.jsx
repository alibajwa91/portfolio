import React from "react";
import "./about.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function About() {
  return (
    <div className="about">
      <Navbar />
      <div className="aboutWrapper">
        <section class="about-firstsection">
          <div class="circular-img">
            <img src="assets/pictures/profilepic.png" class="my-img" />
          </div>
          <div class="mainAbout">
            <div class="about-title">About Me!</div>
            <div class="about-desc">
              I am a motivated individual with a high school diploma and a
              passion for technology. Thriving in diverse, collaborative teams,
              I bring analytical and creative problem-solving skills fostered
              through academic excellence and team experiences. Proficient in
              Microsoft Office, including advanced Excel functions, and familiar
              with Java, Python, and SQL, I am excited to contribute to
              impactful application development while growing my tech skills in
              an "earn and learn" environment. Committed to continuous learning,
              I'm eager to excel in Accenture's apprenticeship, driven by a
              shared passion for innovation and growth.
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
