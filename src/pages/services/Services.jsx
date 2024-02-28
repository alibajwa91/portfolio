import React from "react";
import "./services.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
export default function Services() {
  return (
    <div className="servicesMain">
      <Navbar />
      <div className="servicesSection">
        <div class="services">
          <h1>Front-End Development</h1>
          <br />
          Proficient in HTML, CSS, and JavaScript with hands-on project
          experience. Completed comprehensive courses in front-end web
          development. Skilled in structuring content, styling, and creating
          interactive web interfaces. Experienced in responsive design,
          animations, and JavaScript functionalities for user-friendly web
          solutions.
        </div>
        <div class="services">
          <h1>Back-End Development</h1>
          <br />
          Proficient in backend development, adept in languages like Node.js,
          Python, or PHP. Completed comprehensive courses in server-side
          programming. Skilled in building server logic, databases, and APIs.
          Hands-on experience in creating scalable, secure, and efficient
          backend solutions. Knowledgeable in frameworks like Express (Node.js),
          Django (Python), or Laravel (PHP). Accomplished in handling data,
          authentication, and server optimization for robust web applications.
        </div>
        <div class="services">
          <h1>App Development</h1>
          <br />
          Experienced in Android app development using Java/Kotlin and Android
          Studio. Skilled in UI/UX design, integrating functionalities, and
          handling data. Knowledgeable in Android SDK and app deployment on
          Google Play Store.
        </div>
      </div>
      <Footer />
    </div>
  );
}
