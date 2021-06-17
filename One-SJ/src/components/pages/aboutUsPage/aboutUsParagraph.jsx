import { useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import {
  aboutUsHeader1,
  aboutUsHeader2,
  aboutUsParagraph1,
  aboutUsParagraph2,
  aboutUsHeader3,
  aboutUsParagraph3,
  aboutUsHeader4,
  aboutUsParagraph4,
} from "../..//utilities/texts";

const AboutUsParagraph = () => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let moreInfoHeader = aboutUsHeader1;

  let whoWeAreHeader = aboutUsHeader2;
  let whoWeAreParagraph1 = aboutUsParagraph1;
  let whoWeAreParagraph2 = aboutUsParagraph2;

  let aboutHeader = aboutUsHeader3;
  let aboutParagraph = aboutUsParagraph3;

  let thanksHeader = aboutUsHeader4;
  let thanksParagraph = aboutUsParagraph4;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    moreInfoHeader = savedTranslations[aboutUsHeader1 + "-" + currentLanguage];
    whoWeAreHeader = savedTranslations[aboutUsHeader2 + "-" + currentLanguage];
    whoWeAreParagraph1 =
      savedTranslations[aboutUsParagraph1 + "-" + currentLanguage];
    whoWeAreParagraph2 =
      savedTranslations[aboutUsParagraph2 + "-" + currentLanguage];
    aboutHeader = savedTranslations[aboutUsHeader3 + "-" + currentLanguage];
    aboutParagraph =
      savedTranslations[aboutUsParagraph3 + "-" + currentLanguage];
    thanksHeader = savedTranslations[aboutUsHeader4 + "-" + currentLanguage];
    thanksParagraph =
      savedTranslations[aboutUsParagraph4 + "-" + currentLanguage];
  }

  return (
    <>
      <div className="aboutUsParagraphContainer center">
        <h3>{moreInfoHeader}</h3>
        <hr />
        <h4>{whoWeAreHeader}</h4>
        <p>{whoWeAreParagraph1}</p>
        <p>{whoWeAreParagraph2}</p>

        <h4>{aboutHeader}</h4>
        <p>{aboutParagraph}</p>

        <h4>{thanksHeader}</h4>
        <p>{thanksParagraph}</p>
      </div>
    </>
  );
};

export default AboutUsParagraph;
