import { t } from "i18next";
import React, { useContext } from "react";
import { ContextMobile } from "../../../HomePage";

const AnythingElse = () => {
  const { handlePeopleChange, people, selectedPersonIndex } =
    useContext<any>(ContextMobile);

  return (
    <div className="sections">
      <div>{t("anything_else")}</div>
      <textarea
        name="paragraph_text"
        cols={50}
        rows={10}
        id="anything-else"
        placeholder={t("just_ask")}
        value={people[selectedPersonIndex].anythingElse}
        onChange={(e) =>
          handlePeopleChange({ anythingElse: e.currentTarget.value })
        }
      ></textarea>
      <div>{t("socks_and_underwear")}</div>
    </div>
  );
};

export default AnythingElse;
