export interface People {
  id: string;
  CA: string;
  firstName: string;
  age: string;
  heightFeet: string;
  heightInches: string;
  sex: string;
  shirtSize: string;
  shoeSize: string;
  hatCoatGloves: {
    hat: boolean;
    coat: boolean;
    gloves: boolean;
    swimsuit: boolean;
    sandals: boolean;
    summerHat: boolean;
  };
  inseamLength: string;
  waist: string;
  braSize: string;
  pantsSize: string;
  anythingElse: string;
}

export interface Household {
  familyName: string;
  streetAddress: string;
  zipCode: string;
  phoneNumber: string;
  emailAddress: string;
  countryOfOrigin: string;
  daysAvailable2: Day[];
}

export interface Day {
  checked: boolean;
  first: number;
  firstAmPm: string;
  second: number;
  secondAmPm: string;
}

export interface HouseholdWith {
  _id: string;
  familyName: string;
  streetAddress: string;
  zipCode: string;
  phoneNumber: string;
  countryOfOrigin: string;
  daysAvailable2: Day[];
  people: People[];
  isCompleted: boolean;
}
