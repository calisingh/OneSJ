import React from "react";

const PrivacyParagraph = () => {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          padding: "1rem 3rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: "25%",
            color: "white",
            margin: "auto 1rem auto 0",
            textAlign: "left",
            font: "1.3rem montserrat",
            minWidth: "400px",
          }}
        >
          <h3 style={{ fontWeight: "900" }}>Privacy Statement</h3>
          <hr
            style={{
              borderTop: "5px solid black",
              borderRadius: "20px",
              opacity: "0.5",
            }}
          />
          <p>
            At OneSJ.org, one of our main priorities is the privacy of our
            visitors. This Privacy Policy document contains types of information
            that is collected and recorded by OneSJ and how we use it. If you
            have additional questions or require more information about our
            Privacy Policy, do not hesitate to contact us.
          </p>

          <p>
            <b>Consent</b>
            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>
          </p>
          <p>
            <b>Information we collect.</b>
            <p>
              No personal information is asked for the user to provide. If you
              contact us directly, we may receive additional information about
              you such as your name, email address, phone number, the contents
              of the message and/or attachments you may send us, and any other
              information you may choose to provide.
            </p>
          </p>

          <p>
            <b>How we use your information.</b>
            <p>
              We use the information we collect in various ways, including to:
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>Find and prevent fraud</li>
            </p>
          </p>

          <p>
            <b>Information we collect.</b>
            <p>
              No personal information is asked for the user to provide. If you
              contact us directly, we may receive additional information about
              you such as your name, email address, phone number, the contents
              of the message and/or attachments you may send us, and any other
              information you may choose to provide.
            </p>
          </p>

          <p>
            <b>Third-Party Privacy Policies.</b>
            <p>
              OneSJ's Privacy Policy does not apply to other advertisers or
              websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options.
              <p>
                You can choose to disable cookies through your individual
                browser options. To know more detailed information about cookie
                management with specific web browsers, it can be found at the
                browsers' respective websites.
              </p>
            </p>
          </p>
          <p>
            <b>Log Files.</b>
            <p>
              OneSJ follows a standard procedure of using log files. These files
              log visitors when they visit websites. All hosting companies do
              this and a part of hosting services' analytics. The information
              collected by log files includes referring/exit pages, time spent
              on the website, and the number of clicks on the components. The
              purpose of the information is for analyzing trends, administering
              the site, and tracking users' movement on the website.
            </p>
          </p>

          <p>
            <b>Minor Information.</b>
            <p>
              Another part of our priority is adding protection for minors using
              the site. We encourage parents and guardians to observe,
              participate in, and/or monitor and guide their online activity.
              <p>
                OneSJ does not knowingly collect any Personal Identifiable
                Information from children. If you think that your child provided
                this kind of information on our website, we strongly encourage
                you to contact us immediately and we will do our best efforts to
                promptly remove such information from our records.
              </p>
            </p>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PrivacyParagraph;
