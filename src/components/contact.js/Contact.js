import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import emailjs from "@emailjs/browser";
import "./this.css";
import colorSharp from "../../assets/img/color-sharp (1).png"
import colorSharp2 from "../../assets/img/color-sharp2.png"

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_44y8dhj",
        "template_f355ljj",
        form.current,
        "9_87UbF9cEihGjn7n"
      )
      .then(
        () => {
          alert("Message is send Successfully!");
          window.location.reload(false);
        },
        (error) => {
          alert(
            `unable  to send message! please try again. error code: ${error}`
          );
        }
      );
  };
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  const position = [26.861381, 75.819356];
  return (
    <div className="contact-page">
      {window.addEventListener("scroll", reveal)}
        <div className="d-flex justify-content-around w-100 bbox">

        <div className="text-zone reveal">
          <h1>Contact me</h1>
          <div className="cotact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    id="textarea"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="mymap reveal">
          <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
            <TileLayer
              url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=OUOkNxtCFWahZ951tDKk"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} />
            <Popup position={position}>
              Hey! I am here <br /> Lets have a coffee
            </Popup>
          </MapContainer>
        </div>
      </div>
      </div>
      
  
  );
}
