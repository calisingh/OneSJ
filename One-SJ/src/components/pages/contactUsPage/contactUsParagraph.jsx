import Image from "react-bootstrap/Image";

const ContactUsParagraph = () => {
  return (
    <>
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
          <h3 style={{ fontWeight: "900" }}>Contact us!</h3>
          <hr
            style={{
              borderTop: "5px solid black",
              borderRadius: "20px",
              opacity: "0.5",
            }}
          />
          <p
            style={{
              color: "black",
            }}
          >
            <p>
              <p>
                For questions on any data additions, inaccuracies, or for any
                other comments, questions, and concerns, please contact
                one.sj.moti@gmail.com or fill out this{" "}
                <a href="https://forms.gle/hMTFsPH2cuj8mKmr5">
                  <b>form.</b>
                </a>
              </p>
            </p>
            <p>
              <p>
                On our web application, we provide information on mental and
                physical health resources in and around the Bay Area, you may
                request to access our data by contacting our team at
                one.sj.moti@gmail.com, and will try to get back to you as soon
                as possible. The open-source code for OneSJ is protected under
                the GNU General Public License v3.0. Permissions of this strong
                copyleft license are conditioned on making available complete
                source code of licensed works and modifications, which include
                larger works using a licensed work, under the same license.
              </p>
            </p>
          </p>
        </div>
        <div style={{ flex: "25%", marginLeft: "1rem" }}>
          <Image
            src="/logo.svg"
            alt=""
            style={{
              height: "100%",
              width: "100%",
              minWidth: "425px",
              minHeight: "350px",
              maxwidth: "500px",
              maxHeight: "425px",
              borderRadius: "50px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ContactUsParagraph;
