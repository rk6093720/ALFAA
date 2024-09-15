import React, { useEffect } from "react";
import HeroSection from "../common/HeroSection";
// import event1 from "../../assets/event-details-1-3.jpg";
import "./Donation.css";
import { CgAsterisk } from "react-icons/cg";
import emailjs from "emailjs-com";
const DonateNow = () => {
  const [result, setResult] = React.useState("");
  const [name,setName]=React.useState("");
  const [city,setCity]= React.useState("");
  const [state,setState]=React.useState("");
  const [phoneNumber,setPhoneNumber]=React.useState("");
  const [email,setEmail]=React.useState("");
  const [message,setMessage]=React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("name",name);
    formData.append("city",city);
    formData.append("state",state);
    formData.append("email",email);
    formData.append("phoneNumber",phoneNumber);
    formData.append("message",message)
    // Debug log to check form data
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    formData.append(
      "access_key",
      "2553903f-15b8-4b25-9592-f5d22079937b"
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error Response:", errorData);
        setResult(`Error: ${errorData.message}`);
        return;
      }

      const data = await response.json();
      if (data.success) {
        const payload ={
          name,
          city,
          state,
          phoneNumber,
          email,
          message
        }
        emailjs.send("service_Id","template_ID",payload).then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setResult("Form Submitted Successfully and Email Sent!");
          },
          (error) => {
            console.log("FAILED...", error);
            setResult("Failed to send email.");
          }
        );
        
        setResult("Form Submitted Successfully");
        event.target.reset();
        setTimeout(() => {
          setResult("");
        }, 2000);
      } else {
        console.error("Error Data:", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setResult("An error occurred while submitting the form. Please try again later.");
    }
  };

  const getResultStyle = () => {
    if (result === "Sending....") {
      return { color: "#FE7F4C" };
    } else if (result === "Form Submitted Successfully") {
      return { color: "green" };
    } else {
      return { color: "red" };
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection subHead="Home / Donations" mainHead="Donate Now" />
      <div className="donation-details-area py-5">
        <div className="container dd-container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="mt-5">
                <div className="mt-5">
                  <div className="office-address mt-5">
                    <h2>
                      <b>ALFAA Office Address</b>
                    </h2>
                    <div className="address-details">
                      <div className="d-flex flex-row gap-2 mt-1rem">
                        <h2>
                          3B, CASSIA COURT 91/1, COLES ROAD, FRASER TOWN,
                          BANGALORE, KARNATAKA-560005
                        </h2>
                      </div>
                      <div className="d-flex flex-row gap-2">
                        <h2>Email: alfaa2010@gmail.com</h2>
                      </div>
                    </div>
                  </div>

                  <div className="pilot-project mt-5">
                    <h2>
                      <b>ALFAA Pilot Project</b>
                    </h2>
                    <div className="address-details">
                      <div className="d-flex flex-row gap-2 mt-1rem">
                        <h2>
                          No 9, Omega Avenue, Mathrushree Layout,
                          MARAGONDANAHALLI MAIN ROAD, TC Palya, KR Puram,
                          Bangalore 560036 (Near Diamond PU College)
                        </h2>
                      </div>
                      <div className="d-flex flex-row gap-2">
                        <h2>
                          <b>Contact Name: Ruby Singh</b>
                        </h2>
                      </div>
                      <div className="d-flex flex-row gap-2">
                        <h2>Tel: 080-25567762</h2>
                      </div>
                      <div className="d-flex flex-row gap-2">
                        <h2>
                          Mobile: <b>+91 9741418103</b>
                        </h2>
                      </div>
                      <div className="d-flex flex-row gap-2">
                        <h2>Email: rubysingh_india@yahoo.co.in</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="personal-information-box mt-5">
                  <h2 className="ed-title">For Donation & Feedback</h2>
                  <span>
                    Fields marked with an <CgAsterisk color="#e80000" /> are
                    required
                  </span>
                  <form id="contact-form" onSubmit={onSubmit} className="mt-4">
                    <div className="row">
                      <div className="col-xl-10 mb-4">
                        <div className="tp-donation-details__input">
                          <label>
                            Name{" "}
                            <sup>
                              <CgAsterisk color="#e80000" />
                            </sup>
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name="name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-10 mb-4">
                        <div className="tp-donation-details__input">
                          <label>City</label>
                          <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            name="city"
                          />
                        </div>
                      </div>
                      <div className="col-xl-10 mb-4">
                        <div className="tp-donation-details__input">
                          <label>State</label>
                          <input
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            name="state"
                          />
                        </div>
                      </div>
                      <div className="col-xl-10 mb-4">
                        <div className="tp-donation-details__input">
                          <label>
                            Phone Number{" "}
                            <sup>
                              <CgAsterisk color="#e80000" />
                            </sup>
                          </label>
                          <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            name="phone"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-10 mb-4">
                        <div className="tp-donation-details__input">
                          <label>
                            Enter Your Mail{" "}
                            <sup>
                              <CgAsterisk color="#e80000" />
                            </sup>
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-10 mb-4">
                        <div className="tp-donation-details__input">
                          <label>Message</label>
                          <textarea
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Write Your Message"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-xl-10 mb-4">
                        <div className="postbox__comment-agree-2 pb-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label text-theme"
                              htmlFor="flexCheckDefault"
                            >
                              You agree to the terms
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-10">
                        <div className="postbox__comment-btn">
                          <button type="submit" className="donate-btn border-0">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <span style={getResultStyle()} className="my-3">
                    {result}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateNow;
