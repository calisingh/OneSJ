import Image from "react-bootstrap/Image";

const DisclaimerParagraph = () => {
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
          <h3 style={{ fontWeight: "900" }}>Disclaimer</h3>
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
              OneSJ is a volunteer-driven project and we work hard to keep this
              site as up-to-date and accurate as possible. Here, you can find
              the right person to talk to in San José regarding your mental
              health. Fill out a few filters, and we'll help you explore options
              that you might be eligible for. We won't store or share the info
              you provide. Any access to, and/or use of the information is at
              your sole risk. Please make sure to contact the resource directly
              for the latest updates. Due to the uncertainty of COVID-19,
              information is subject to change. OneSJ makes no promises or
              guarantees about the accuracy or complete competence of the
              contents of this website/app and disclaims liability for any
              errors and/or omissions in the contents of this website. No
              warranty of any kind, implied or sanctioned is given with respect
              to the contents of this website or its hyperlinks to other
              external websites/resources; none of our services constitute an
              endorsement by any entity or corporation.
            </p>
            <p>
              OneSJ shall not be held liable for any errors or inaccuracies in
              the information provided, or for any decisions made or actions
              taken by the user under any circumstances. By using this
              application or website, you agree to indemnify and hold OneSJ
              harmless, this includes, but is not only limited to, its
              volunteers and affiliates from any claims resulting from your use
              of this application or website.
            </p>
            <p>
              OneSJ may modify this disclaimer at any time, without notice to
              you, by posting a revised disclaimer on this application or
              website.
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

export default DisclaimerParagraph;
