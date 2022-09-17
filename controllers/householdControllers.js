const Household = require("../models/householdModel");

// CRUD Functions
exports.createHousehold = async (req, res) => {
  const peopleArray = [...req.body.people];
  const houseHoldWithPeople = { ...req.body.household, people: peopleArray };

  const response = await Household.create(houseHoldWithPeople);

  res.status(200).json({ status: "household created", response });
};

exports.getHouseholds = async (req, res) => {
  const household = await Household.find();

  res.status(200).json(household);
};

exports.patchHousehold = async (req, res) => {
  console.log(`${req.params.id} updated to ${JSON.stringify(req.body)}`);
  console.log("------------------body------------------");
  console.log(req.body);

  const response = await Household.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json(response);
};

exports.deleteHousehold = async (req, res) => {
  console.log(`${req.params.id} deleted`);
  const response = await Household.findByIdAndDelete(req.params.id);

  if (!response) {
    console.log("Household not found");
  }

  console.log("Household deleted!");

  res.status(200).json(response);
};
