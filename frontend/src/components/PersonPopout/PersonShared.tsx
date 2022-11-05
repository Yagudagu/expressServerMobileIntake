import { t } from "i18next";
import React, { useContext } from "react";
import { GiBodyHeight } from "react-icons/gi";
import { ContextMobile } from "../../HomePage";

const PersonShared = () => {
  const { handlePeopleChange, people, selectedPersonIndex } =
    useContext<any>(ContextMobile);

  return (
    <>
      <div>{t("child_or_adult")}</div>
      <label>
        <input
          type="radio"
          id="child-adult"
          name="child-adult"
          value="adult"
          checked={people[selectedPersonIndex].CA === "adult"}
          onChange={(e) => handlePeopleChange({ CA: e.currentTarget.value })}
        />
        {t("adult")}
        <input
          type="radio"
          id="child-adult"
          name="child-adult"
          value="child"
          checked={people[selectedPersonIndex].CA === "child"}
          onChange={(e) => handlePeopleChange({ CA: e.currentTarget.value })}
        />
        {t("child")}
      </label>
      {people[selectedPersonIndex].CA && (
        <>
          <div className="sections">
            <div>{t("name")}</div>
            <input
              type="text"
              id="first-name"
              placeholder={t("name")}
              value={people[selectedPersonIndex].firstName}
              onChange={(e) =>
                handlePeopleChange({ firstName: e.currentTarget.value })
              }
            />
          </div>
          <div className="sections">
            <div>{t("age")}</div>
            <input
              type="text"
              id="age"
              placeholder={t("age")}
              value={people[selectedPersonIndex].age}
              onChange={(e) =>
                handlePeopleChange({ age: e.currentTarget.value })
              }
            />
          </div>
          <div className="sections">
            <div>{t("height")}</div>
            <div className="clothes-container align-vert">
              <GiBodyHeight className="clothes-icons" />{" "}
              <input
                type="text"
                id="height-feet"
                placeholder={t("feet")}
                value={people[selectedPersonIndex].heightFeet}
                onChange={(e) =>
                  handlePeopleChange({ heightFeet: e.currentTarget.value })
                }
              />
              <input
                type="text"
                id="height-inches"
                placeholder={t("inches")}
                value={people[selectedPersonIndex].heightInches}
                onChange={(e) =>
                  handlePeopleChange({ heightInches: e.currentTarget.value })
                }
              />
            </div>
          </div>
          <div className="sections">
            <div>{t("male_or_female_clothing")}</div>
            <label>
              <input
                type="radio"
                id="sex"
                name="sex"
                value="male"
                checked={people[selectedPersonIndex].sex === "male"}
                onChange={(e) =>
                  handlePeopleChange({ sex: e.currentTarget.value })
                }
              />
              {t("male")}
              <input
                type="radio"
                id="sex"
                name="sex"
                value="female"
                checked={people[selectedPersonIndex].sex === "female"}
                onChange={(e) =>
                  handlePeopleChange({ sex: e.currentTarget.value })
                }
              />
              {t("female")}
            </label>
          </div>
        </>
      )}
    </>
  );
};

export default PersonShared;
