const mongoose = require("mongoose");

const householdSchema = new mongoose.Schema({
  familyName: String,
  streetAddress: String,
  zipCode: String,
  phoneNumber: String,
  emailAddress: String,
  countryOfOrigin: String,
  daysAvailable2: [Object],
  people: [
    {
      id: String,
      CA: String,
      firstName: String,
      age: String,
      heightFeet: String,
      heightInches: String,
      sex: String,
      shirtSize: String,
      shoeSize: String,
      hatCoatGloves: {
        hat: Boolean,
        coat: Boolean,
        gloves: Boolean,
      },
      inseamLength: String,
      waist: String,
      braSize: String,
      pantsSize: String,
      anythingElse: String,
    },
  ],
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const Household = mongoose.model("Household", householdSchema);

module.exports = Household;
