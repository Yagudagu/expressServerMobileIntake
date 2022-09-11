import React from "react";
import { Day } from "../../models";

interface Props {
  day: Day;
  number: number;
  which: string;
  setDays: React.Dispatch<React.SetStateAction<Day[]>>;
}

const HoursAvailable = ({ number, which, day, setDays }: Props) => {
  const handleHourChange = (changes: any) => {
    setDays((prevState) => {
      which === "first"
        ? (prevState[number].first = changes)
        : (prevState[number].second = changes);
      return [...prevState];
    });
  };

  const handleAmPmChange = (changes: any) => {
    setDays((prevState) => {
      which === "first"
        ? (prevState[number].firstAmPm = changes)
        : (prevState[number].secondAmPm = changes);
      return [...prevState];
    });
  };

  const hour = which === "first" ? day.first : day.second;
  const ampm = which === "first" ? day.firstAmPm : day.secondAmPm;

  return (
    <div id="time-thingy-container">
      <select
        // className={`time-thingy-hour-${props.which}`}
        // day={props.day}
        value={hour}
        onChange={(e) => {
          handleHourChange(parseInt(e.currentTarget.value));
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <select
        value={ampm}
        onChange={(e) => handleAmPmChange(e.currentTarget.value)}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
};

export default HoursAvailable;
