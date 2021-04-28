import Image from "react-bootstrap/Image";

const AboutUsParagraph = () => {
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
          <h3 style={{ fontWeight: "900" }}>Get More Info On OneSJ</h3>
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
              <b>Who we are?</b>
              <p>
                We are a volunteer-driven, open-source project to help youth
                communities navigate the COVID crisis by providing information
                and resources on mental and physical health. We currently
                feature resources revolving around youth health but plan to
                expand our services to providing means on food assistance,
                shelters, clothing, and medicine. You can find more information
                on the project, including the source code for replicating the
                project, from our Github page. We are affiliated with Mayor Sam
                Liccardo’s Office of Technology and Innovation (MOTI), which
                leverages technology to improve our residents’ livelihoods and
                opportunities with an emphasis on inclusion, equity, and
                antifragility.{" "}
              </p>
            </p>
            <p>
              <b>About the product.</b>
              <p>
                OneSJ is a web-application for potentially the 1 million
                residents of San Jose, some of whom may have exacerbated
                inequities around internet quality and device access; focused
                around the youth, it has the potential to become a powerhouse in
                which the youth of the Bay Area can use to their advantage and
                get help when they need it.
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

export default AboutUsParagraph;
