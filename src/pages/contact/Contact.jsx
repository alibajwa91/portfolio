import React from "react";
import "./contact.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function Contact() {
  return (
    <div className="contactMe">
      <Navbar />
      <div className="contact">
        <div class="left-section-contactme">
          <div class="address">
            <div class="icon"></div>
            <div class="address-details">
              <h1>Address</h1>
              Apt# 1018 <br />
              49 Thorncliffe park drive <br />
              Toronto , Ontario <br />
            </div>
          </div>
          <div class="phone">
            <div class="icon"></div>
            <div class="phone-details">
              <h1>Phone</h1>
              cellular <br />
              +1 647 453 6556 <br />
            </div>
          </div>
          <div class="email">
            <div class="icon"></div>
            <div class="email-details">
              <h1>Email</h1>
              alibajwa6637@gmail.com <br />
              alimaqsoodbajwa@gmail.com
              <br />
            </div>
          </div>
        </div>
        <div class="right-section-contactme">
          <div class="first-text">
            <div class="form-title">Send Us Message!</div>
            <div class="text-form-desc">
              || Feel free to ask me any questions <br />
              regarding my portfolio ||
            </div>
          </div>
          <form action="#">
            <div class="input-box">
              <input class="box" type="text" placeholder=" Enter your Name! " />
            </div>
            <div class="input-box">
              <input
                class="box"
                type="text"
                placeholder=" Enter your Email! "
              />
            </div>
            <div class="input-box-message-box">
              <textarea
                class="box1"
                placeholder="Enter your Message!"
              ></textarea>
            </div>
            <div class="button">
              <input class="btn" type="button" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
