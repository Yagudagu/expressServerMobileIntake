import { t } from "i18next";
import React from "react";

interface Props {
  setSubmittedPopup: (value: boolean) => void;
}

const SubmittedPopup = ({ setSubmittedPopup }: Props) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{t("request_has_been_sent")}</h2>
        <div className="close-btn" onClick={() => setSubmittedPopup(false)}>
          {t("return_to_home")}
        </div>
      </div>
    </div>
  );
};

export default SubmittedPopup;
