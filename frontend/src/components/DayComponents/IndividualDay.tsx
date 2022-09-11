import React from "react";
import { Day } from "../../models";
import HoursAvailable from "./HoursAvailable";

interface Props {
  day: Day;
  number: number;
  setDays: React.Dispatch<React.SetStateAction<Day[]>>;
  t: any;
}

const IndividualDay = ({ day, number, setDays, t }: Props) => {
  return (
    <div className="individual-days-container">
      <label className="days-box" htmlFor="monday">
        <input
          type="checkbox"
          id="monday"
          onChange={() =>
            setDays((prevState) => {
              prevState[number].checked = !prevState[number].checked;
              return [...prevState];
            })
          }
        />
        {t(`day_${number}`)}
      </label>
      {day.checked && (
        <div className="with_days_checked">
          <HoursAvailable
            number={number}
            which="first"
            day={day}
            setDays={setDays}
          />
          <h5>-</h5>
          <HoursAvailable
            number={number}
            which="second"
            day={day}
            setDays={setDays}
          />
        </div>
      )}
    </div>
  );
};

export default IndividualDay;
