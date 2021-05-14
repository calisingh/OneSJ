const AboutUsParagraph = () => {
  return (
    <>
      <div
        className="center"
        style={{
          width: "60%",
        }}
      >
        <h3>Get More Info On OneSJ</h3>
        <hr />
        <h4>Who we are?</h4>
        <p className="aboutUs">
          We are a volunteer-driven, open-source project to help youth
          communities navigate the COVID crisis by providing information and
          resources on mental and physical health. We currently feature
          resources revolving around youth mental and physical health but plan
          to expand our services to providing means on food assistance,
          shelters, clothing, and medicine. You can find more information on the
          project, including the source code for replicating the project, from
          our Github page. We are affiliated with Mayor Sam Liccardo’s Office of
          Technology and Innovation (MOTI), which leverages technology to
          improve our residents’ livelihoods and opportunities with an emphasis
          on inclusion, equity, and antifragility.{" "}
        </p>
        <h4>About the product.</h4>
        <p className="aboutUs">
          OneSJ is a web-application for potentially the 1 million residents of
          San Jose, some of whom may have exacerbated inequities around internet
          quality and device access; focused around the youth, it has the
          potential to become a powerhouse in which the youth of the Bay Area
          can use to their advantage and get help when they need it.
        </p>
      </div>
    </>
  );
};

export default AboutUsParagraph;
