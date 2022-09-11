import React, { useContext } from "react";
import { FaTshirt } from "react-icons/fa";
import { t } from "i18next";
import { ContextMobile } from "../../../HomePage";

const ShirtSize = () => {
  const { handlePeopleChange, people, selectedPersonIndex } =
    useContext<any>(ContextMobile);

  return people[selectedPersonIndex].CA === "adult" ? (
    <div className="sections">
      <div>{t("shirt_size")}</div>
      <label id="shirt-size-container">
        <FaTshirt className="clothes-icons" />
        <input
          type="radio"
          id="shirt-size"
          name="shirt-size"
          value="XS"
          checked={people[selectedPersonIndex].shirtSize === "XS"}
          onChange={(e) =>
            handlePeopleChange({ shirtSize: e.currentTarget.value })
          }
        />
        {t("extra_small")}
        <input
          type="radio"
          id="shirt-size"
          name="shirt-size"
          value="S"
          checked={people[selectedPersonIndex].shirtSize === "S"}
          onChange={(e) =>
            handlePeopleChange({ shirtSize: e.currentTarget.value })
          }
        />
        {t("small")}
        <input
          type="radio"
          id="shirt-size"
          name="shirt-size"
          value="M"
          checked={people[selectedPersonIndex].shirtSize === "M"}
          onChange={(e) =>
            handlePeopleChange({ shirtSize: e.currentTarget.value })
          }
        />
        {t("medium")}
        <input
          type="radio"
          id="shirt-size"
          name="shirt-size"
          value="L"
          checked={people[selectedPersonIndex].shirtSize === "L"}
          onChange={(e) =>
            handlePeopleChange({ shirtSize: e.currentTarget.value })
          }
        />
        {t("large")}
        <input
          type="radio"
          id="shirt-size"
          name="shirt-size"
          value="XL"
          checked={people[selectedPersonIndex].shirtSize === "XL"}
          onChange={(e) =>
            handlePeopleChange({ shirtSize: e.currentTarget.value })
          }
        />
        {t("xl")}
        <input
          type="radio"
          id="shirt-size"
          name="shirt-size"
          value="2XL"
          checked={people[selectedPersonIndex].shirtSize === "2XL"}
          onChange={(e) =>
            handlePeopleChange({ shirtSize: e.currentTarget.value })
          }
        />
        {t("2xl")}
        <input
          type="radio"
          id="shirt-size"
          name="shirt-size"
          value="3XL"
          checked={people[selectedPersonIndex].shirtSize === "3XL"}
          onChange={(e) =>
            handlePeopleChange({ shirtSize: e.currentTarget.value })
          }
        />
        {t("3xl")}
        <input
          type="radio"
          id="shirt-size"
          name="shirt-size"
          value="4XL"
          checked={people[selectedPersonIndex].shirtSize === "4XL"}
          onChange={(e) =>
            handlePeopleChange({ shirtSize: e.currentTarget.value })
          }
        />
        {t("4xl")}
        {/* <input
      type="radio"
      id="shirt-size"
      name="shirt-size"
      value="don't need"
    />
    Don't Need */}
      </label>
    </div>
  ) : (
    <div className="sections">
      <div>{t("shirt_size")}</div>
      <label id="shirt-size-container">
        <FaTshirt className="clothes-icons" />
        <input
          type="text"
          id="shirt-size-child"
          placeholder="Toddler: NB-4T or Child: 5-16"
          value={people[selectedPersonIndex].shirtSize}
          onChange={(e) =>
            handlePeopleChange({ shirtSize: e.currentTarget.value })
          }
        />
      </label>
    </div>
  );
};

export default ShirtSize;
