const FeedbackParagraph = () => {
  return (
    <>
      <div className="feedbackParagraphContainer center">
        <h3>Contact us!</h3>
        <hr />
        <p>
          For questions on any data additions, inaccuracies, or for any other
          comments, questions, and concerns, please contact
          one.sj.moti@gmail.com or fill out this{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://forms.gle/hMTFsPH2cuj8mKmr5"
          >
            <b>form</b>
          </a>
        </p>

        <p>
          On our web application, we provide information on mental and physical
          health resources in and around the Bay Area, you may request to access
          our data by contacting our team at one.sj.moti@gmail.com, and will try
          to get back to you as soon as possible. The open-source code for OneSJ
          is protected under the GNU General Public License V3.0. Permissions of
          this strong copyleft license are conditioned on making available
          complete source code of licensed works and modifications, which
          include larger works using a licensed work, under the same license.
        </p>
      </div>
    </>
  );
};

export default FeedbackParagraph;
