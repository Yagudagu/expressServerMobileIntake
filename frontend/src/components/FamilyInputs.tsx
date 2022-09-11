import { t } from "i18next";
import React from "react";
import { Household } from "../models";

interface Props {
  household: Household;
  handleHouseHoldChange: (changes: any) => void;
  houseInfoRef: any;
}

const FamilyInputs: React.FC<Props> = ({
  household,
  handleHouseHoldChange,
  houseInfoRef,
}) => {
  return (
    <div
      className="household_information"
      style={{ display: "contents" }}
      ref={houseInfoRef}
    >
      <div className="input-container">
        <h2>{t("family_name")}</h2>
        <input
          type="text"
          id="family-name"
          required
          value={household.familyName}
          onInput={(e: React.FormEvent<HTMLInputElement>) =>
            handleHouseHoldChange({ familyName: e.currentTarget.value })
          }
        />
      </div>
      <div className="input-container">
        <h2>{t("street_address")}</h2>
        <input
          type="text"
          id="street-address"
          required
          value={household.streetAddress}
          onInput={(e: React.FormEvent<HTMLInputElement>) =>
            handleHouseHoldChange({ streetAddress: e.currentTarget.value })
          }
        />
      </div>
      <div className="input-container">
        <h2>{t("zip_code")}</h2>
        <input
          type="text"
          id="zip-code"
          required
          value={household.zipCode}
          onInput={(e: React.FormEvent<HTMLInputElement>) =>
            handleHouseHoldChange({ zipCode: e.currentTarget.value })
          }
        />
      </div>
      <div className="input-container">
        <h2>{t("phone_number")}</h2>
        <input
          type="text"
          id="phone-number"
          required
          value={household.phoneNumber}
          onInput={(e: React.FormEvent<HTMLInputElement>) =>
            handleHouseHoldChange({ phoneNumber: e.currentTarget.value })
          }
        />
      </div>
      <div className="input-container">
        <h2>{t("country_of_origin")}</h2>
        <input
          type="text"
          id="country-of-origin"
          value={household.countryOfOrigin}
          onInput={(e: React.FormEvent<HTMLInputElement>) =>
            handleHouseHoldChange({ countryOfOrigin: e.currentTarget.value })
          }
        />
      </div>
    </div>
  );
};

export default FamilyInputs;
