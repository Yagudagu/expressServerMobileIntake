import { v4 as uuidv4 } from "uuid";
import { Day, Household, People } from "./models";

export const sampleDays: Day[] = [
  { checked: false, first: 9, firstAmPm: "AM", second: 6, secondAmPm: "PM" },
  { checked: false, first: 9, firstAmPm: "AM", second: 6, secondAmPm: "PM" },
  { checked: false, first: 9, firstAmPm: "AM", second: 6, secondAmPm: "PM" },
  { checked: false, first: 9, firstAmPm: "AM", second: 6, secondAmPm: "PM" },
  { checked: false, first: 9, firstAmPm: "AM", second: 6, secondAmPm: "PM" },
  { checked: false, first: 9, firstAmPm: "AM", second: 6, secondAmPm: "PM" },
  { checked: false, first: 9, firstAmPm: "AM", second: 6, secondAmPm: "PM" },
];

// export const samplePerson: People = {
//   id: uuidv4(),
//   CA: "",
//   firstName: "",
//   age: null,
//   heightFeet: null,
//   heightInches: null,
//   sex: "",
//   shirtSize: "",
//   shoeSize: "",
//   hatCoatGloves: {
//     hat: false,
//     coat: false,
//     gloves: false,
//   },
//   inseamLength: null,
//   waist: null,
//   braSize: "",
//   pantsSize: null,
//   anythingElse: "",
// };

export const sampleHouseHold: Household = {
  familyName: "",
  streetAddress: "",
  zipCode: "",
  phoneNumber: "",
  emailAddress: "",
  countryOfOrigin: "",
  daysAvailable2: sampleDays,
};
