import { t } from "i18next";
import React from "react";

interface Props {
  setErrorPopup: (value: boolean) => void;
}

const ErrorPopup: React.FC<Props> = ({ setErrorPopup }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{t("error_text")}</h2>
        <div className="close-btn" onClick={() => setErrorPopup(false)}>
          {t("return_to_home")}
        </div>
      </div>
    </div>
  );
};

export default ErrorPopup;
