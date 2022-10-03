import React from "react";
import i18next from "i18next";

const Languages = () => (
  <div id="languages-container">
    <p className="languages-btn" onClick={() => i18next.changeLanguage("en")}>
      en
    </p>
    <p className="languages-btn" onClick={() => i18next.changeLanguage("fr")}>
      fr
    </p>
    <p className="languages-btn" onClick={() => i18next.changeLanguage("es")}>
      es
    </p>
    <p className="languages-btn" onClick={() => i18next.changeLanguage("dari")}>
      دری
    </p>
    <p className="languages-btn" onClick={() => i18next.changeLanguage("ua")}>
      ua
    </p>
  </div>
);

export default Languages;
