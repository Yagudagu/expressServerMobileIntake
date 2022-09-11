import React from "react";
import { Day } from "../../models";
import IndividualDay from "./IndividualDay";

interface Props {
  days: Day[];
  setDays: React.Dispatch<React.SetStateAction<Day[]>>;
  t: any;
}

const AvailableDays = ({ t, days, setDays }: Props) => {
  return (
    <>
      <h2>{t("days_times")}</h2>
      <>
        {days.map((day, number) => {
          return (
            <IndividualDay
              day={day}
              key={number}
              number={number}
              setDays={setDays}
              t={t}
            />
          );
        })}
      </>
    </>
  );
};

export default AvailableDays;
