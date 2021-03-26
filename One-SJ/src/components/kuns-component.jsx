import React, { Component } from "react";
import { Link } from "react-router-dom";

import Ser from "img/ser (2).png";
import About from "img/about-icon.png";
import Home from "img/home-icon.png";
import Two from "img/2.png";
import Contact from "img/contact-icon.png";
import Sj from "img/1_2FoV-En8UciX4EhPmq2PDw.png";
import Brain from "img/Untitled design.png";


export default class KunsComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Kun's Component</h1>
        <ul>
          <li>
            <div>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
              <title>OneSJ</title>
              <meta name="description" content />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link rel="apple-touch-icon" href="apple-touch-icon.png" />
              <link rel="stylesheet" href="css/bootstrap.min.css" />
              <link rel="stylesheet" href="css/bootstrap-theme.min.css" />
              <link rel="stylesheet" href="css/fontAwesome.css" />
              <link rel="stylesheet" href="css/templatemo-style.css" />
              <link
                href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900"
                rel="stylesheet"
              />
              <div className="overlay" />
              <section className="top-part">
                <video controls autoPlay loop>
                  <source src="videos/video.mp4" type="video/mp4" />
                  <source src="videos/video.ogg" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </section>
              
              <section className="cd-hero">
                <div className="cd-slider-nav">
                  <nav>
                    <span className="cd-marker item-1" />
                    <ul>
                      <li>
                        <a className="selected" />
                          <div className="image-icon">
                            <img src={Ser} alt="ser"/>
                          </div>
                          <h6>Services</h6>
                      <li>
                        <a href="#0">
                          <div className="image-icon">
                            <img src={About} alt="about"/>
                          </div>
                          <h6>About Us</h6>
                        </a>
                      </li>
                      <li href="#0">
                        <a href="#0">
                          <div className="image-icon">
                            <img src={Home} alt="home"/>
                          </div>
                          <h6>Welcome</h6>
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <div className="image-icon">
                            <img src={Two} alt="two"/>
                          </div>
                          <h6>Disclaimer&nbsp;&nbsp;</h6>
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <div className="image-icon">
                            <img src={Contact} alt="contact"/>
                          </div>
                          <h6>Contact Us</h6>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <ul className="cd-hero-slider">
                  <li className="selected">
                    <div className="heading">
                      <h1>Services</h1>
                      <span>
                        From the filter below, select the services that your are
                        in need of.
                      </span>
                    </div>
                    <div className="cd-half-width third-slide">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="content third-content">
                              <div className="row">
                                <div className="col-md-7 left-image">
                                  <p>Choose your needs:</p>
                                  <div>
                                    <input
                                      type="checkbox"
                                      id="Coping with COVID 19"
                                      name="Coping with COVID 19"
                                      defaultChecked
                                    />
                                    <label htmlFor="Coping with COVID 19">
                                      Coping with COVID 19
                                    </label>
                                  </div>
                                  <div>
                                    <input
                                      type="checkbox"
                                      id="Counseling and Psychological  Services"
                                      name="Counseling and Psychological  Services"
                                    />
                                    <label htmlFor="Counseling and Psychological  Services">
                                      Counseling and Psychological Services
                                    </label>
                                  </div>
                                  <div>
                                    <input
                                      type="checkbox"
                                      id="Domestic Violence"
                                      name="Domestic Violence"
                                    />
                                    <label htmlFor="Domestic Violence">
                                      Domestic Violence
                                    </label>
                                  </div>
                                  <div>
                                    <input
                                      type="checkbox"
                                      id="Immigrant Background"
                                      name="Immigrant Background"
                                    />
                                    <label htmlFor="Immigrant Background">
                                      Immigrant Background
                                    </label>
                                  </div>
                                  <div>
                                    <input
                                      type="checkbox"
                                      id="LGBTQ"
                                      name="LGBTQ"
                                    />
                                    <label htmlFor="LGBTQ">LGBTQ</label>
                                  </div>
                                  <div>
                                    <input
                                      type="checkbox"
                                      id="Seeking Community"
                                      name="Seeking Community"
                                    />
                                    <label htmlFor="Seeking Community">
                                      Seeking Community
                                    </label>
                                  </div>
                                  <div>
                                    <input
                                      type="checkbox"
                                      id="Student Problems"
                                      name="Student Problems"
                                    />
                                    <label htmlFor="Student Problems">
                                      Student Problems{" "}
                                    </label>
                                  </div>
                                  <div>
                                    <input
                                      type="checkbox"
                                      id="Unhoused"
                                      name="Unhoused"
                                    />
                                    <label htmlFor="Unhoused">Unhoused </label>
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <div className="right-feature-text">
                                    <h4>Name</h4>
                                    <p>Snippet</p>
                                    <div className="feature-list">
                                      <ul>
                                        <p>
                                          - Name
                                          <b />
                                        </p>
                                        <p>- Address</p>
                                        <p>- Phone Number</p>
                                      </ul>
                                    </div>
                                    <div className="primary-button">
                                      <a href="https://www.mentalhealth.gov/get-help/immediate-help">
                                        Get Immediate Help
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="heading">
                      <h1>About Us</h1>
                      <span>Get More Info On One SJ</span>
                    </div>
                    <div className="cd-half-width second-slide">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="content second-content">
                              <div className="row">
                                <div className="col-md-7 left-image">
                                  <img src={Sj} alt="SJ"/>
                                </div>
                                <div className="col-md-5">
                                  <div className="right-about-text">
                                    <h4>Who we are?</h4>
                                    <p>
                                      We are a volunteer-driven, open-source
                                      project to help youth communities navigate
                                      the COVID crisis by providing information
                                      and resources on mental and physical
                                      health. We currently impart 300+ resources
                                      revolving around youth health but plan to
                                      expand our services to providing means on
                                      food assistance, shelters, clothing, and
                                      medicine. You can find more information on
                                      the project, including the source code for
                                      replicating the project, from our Github
                                      page. We are affiliated with ‘The Mayor’s
                                      Office of Technology and Innovation
                                      (MOTI)’, leveraging technology to address
                                      pressing issues facing our city to improve
                                      our residents’ livelihoods, opportunities,
                                      and city experience with an emphasis on
                                      inclusion, equity, and antifragility.
                                      Special thanks to CARTO for powering our
                                      site.
                                    </p>
                                    <div className="primary-button"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-7">
                                  <div className="left-about-text">
                                    <h4>About the product.</h4>
                                    <p>
                                      OneSJ is a web-application for potentially
                                      the 1 million residents of San Jose, some
                                      of whom may have exacerbated inequities
                                      around internet quality and device access;
                                      focused around the youth, it has the
                                      potential to become a powerhouse in which
                                      the youth of the Bay Area can use to their
                                      advantage and get help when they need it.
                                    </p>
                                    <div className="primary-button">
                                      <a href="https://github.com/calisingh/onesj">
                                        <strong>Our Code</strong>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-5 right-image">
                                    <img src={Brain} alt="Brain"/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="heading">
                      <h1>OneSJ</h1>
                      <span>For the youth, by the youth.</span>
                    </div>
                    <div className="cd-full-width first-slide">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="content first-content">
                              <h4>Help is out there.</h4>
                              <p>
                                OneSJ is a web app that points youth/young
                                adults in San José to relevant mental health
                                support options. On our web application, we
                                provide information on mental and physical
                                health resources in and around the Bay Area,
                                which is updated every month. Eventually, we
                                plan to expand with other categories of
                                services, such as nutrition or financial
                                support. Other categories are in-progress!&nbsp;
                              </p>
                              <p>&nbsp;</p>
                              <p>
                                We are working with our partners to bring
                                together the best available and up-to-date
                                information in an easy-to-use interface method.{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="heading">
                      <h1>Disclaimer</h1>
                      <span>
                        <p />
                        OneSJ is a volunteer-driven project and we work hard to
                        keep this site as up-to-date and accurate as possible.
                        Here, you can find the right person to talk to in San
                        José regarding your mental health. Fill out a few
                        filters, and we'll help you explore options that you
                        might be eligible for. We won't store or share the info
                        you provide. Any access to, and/or use of the
                        information is at your sole risk. Please make sure to
                        contact the resource directly for the latest updates.
                        Due to the uncertainty of COVID-19, information is
                        subject to change. OneSJ makes no promises or guarantees
                        about the accuracy or complete competence of the
                        contents of this website/app and disclaims liability for
                        any errors and/or omissions in the contents of this
                        website. No warranty of any kind, implied or sanctioned
                        is given with respect to the contents of this website or
                        its hyperlinks to other external websites/resources;
                        none of our services constitute an endorsement by any
                        entity or corporation.
                        <p />
                        OneSJ shall not be held liable for any errors or
                        inaccuracies in the information provided, or for any
                        decisions made or actions taken by the user under any
                        circumstances. By using this application or website, you
                        agree to indemnify and hold OneSJ harmless, this
                        includes, but is not only limited to, its volunteers and
                        affiliates from any claims resulting from your use of
                        this application or website.
                        <p />
                        OneSJ may modify this disclaimer at any time without
                        notice to you by posting a revised disclaimer on this
                        application or website.{" "}
                      </span>
                      <p />
                    </div>
                    <div className="cd-half-width fourth-slide"></div>
                  </li>
                  <li>
                    <div className="heading">
                      <h1>Contact us</h1>
                    </div>
                    <div className="cd-full-width first-slide">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="content first-content">
                              <p>
                                For questions on any data additions,
                                inaccuracies, or for any other comments,
                                questions, and concerns, please contact
                                one.sj.moti@gmail.com or fill out this{" "}
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSePqZzhUCLgXZmwl_JU5XQBe9zalYZHvDwzLbhv4gm8q5eXew/viewform">
                                  {" "}
                                  <b>form.</b>
                                </a>
                              </p>
                              <br /> <br />
                              <p>
                                <b>
                                  On our web application, we provide information
                                  on mental and physical health resources in and
                                  around the Bay Area, you may request to access
                                  our data by contacting our team at
                                  one.sj.moti@gmail.com, and will try to get
                                  back to you as soon as possible. The
                                  open-source code for OneSJ is protected under
                                  the GNU General Public License v3.0.
                                  Permissions of this strong copyleft license
                                  are conditioned on making available complete
                                  source code of licensed works and
                                  modifications, which include larger works
                                  using a licensed work, under the same license.{" "}
                                </b>{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <footer>
                    <p>Copyright © 2021 OneSJ</p>
                  </footer>
                </ul>
              </section>
            </div>
          </li>
        </ul>
      </div>
    </div>
    );
  }
}
