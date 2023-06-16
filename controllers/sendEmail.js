const nodeMailer = require("nodemailer");

let transporter = nodeMailer.createTransport({
  service: "hotmail",
  auth: {
    user: "mobileclothes@hotmail.com",
    pass: "jeanette606",
  },
});

exports.sendEmail = (req) => {
  const familyStuff = req.body.household;

  const people = req.body.people;

  console.log(`Running for: ${familyStuff.familyName}`);

  let daysAvailableString = "";

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  familyStuff.daysAvailable2.map((n, index) => {
    n.checked &&
      (daysAvailableString =
        daysAvailableString +
        `${weekdays[index]}: ${n.first}${n.firstAmPm.toLowerCase()} to ${
          n.second
        }${n.secondAmPm.toLowerCase()} <br />`);
  });

  people.map((n) => {
    if (n.sex === "male") {
      n.pantsFinal = `${n.waist}, ${n.inseamLength}`;
    } else {
      n.pantsFinal = n.pantsSize;
    }

    n.hcgString = "";

    n.hatCoatGloves.hat && (n.hcgString += "Hat: Yes ");

    n.hatCoatGloves.coat && (n.hcgString += "Coat: Yes ");

    n.hatCoatGloves.gloves && (n.hcgString += "Gloves: Yes ");

    n.hatCoatGloves.swimsuit && (n.hcgString += "Swimsuit: Yes");

    n.hatCoatGloves.sandals && (n.hcgString += "Sandals: Yes");

    n.hatCoatGloves.summerHat && (n.hcgString += "Summerhat: Yes");
  });

  const beforeStuff = "<html>";

  console.log(
    `Family name is ${familyStuff.familyName} and phone number is ${familyStuff.phoneNumber}`
  );

  const familyString = `<div class="box-for" "box-for" style="display: flex; margin: 0px; padding: 0px;"><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">Family Name</h3><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">${familyStuff.familyName}</h3></div>
  <div class="box-for" "box-for" style="display: flex; margin: 0px; padding: 0px;"><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">Street Address</h3><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">${familyStuff.streetAddress}</h3></div>
  <div class="box-for" "box-for" style="display: flex; margin: 0px; padding: 0px;"><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">Zip Code</h3><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">${familyStuff.zipCode}</h3></div>
  <div class="box-for" "box-for" style="display: flex; margin: 0px; padding: 0px;"><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">Phone Number</h3><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">${familyStuff.phoneNumber}</h3></div>
  <div class="box-for" "box-for" style="display: flex; margin: 0px; padding: 0px;"><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">Country Of Origin</h3><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">${familyStuff.countryOfOrigin}</h3></div>
  <div class="box-for" "box-for" style="display: flex; margin: 0px; padding: 0px; height: auto;"><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;">Days Available</h3><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;">${daysAvailableString}</h3></div><br/><br/>`;

  let content = people.map(
    (n, index) =>
      `<div class="box-for" style="display: flex; margin: 0px; padding: 0px;"><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">Family Name</h3><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">${familyStuff.familyName}</h3></div>
      <div class="box-for" style="display: flex; margin: 0px; padding: 0px;"><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">Person Number</h3><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">${index + 1}</h3></div>
      <div class="box-for" style="display: flex; margin: 0px; padding: 0px;"><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">Child or Adult</h3><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">${n.CA}</h3></div>
      <div class="box-for" style="display: flex; margin: 0px; padding: 0px;"><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">First Name</h3><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">${n.firstName}</h3></div>
      <div class="box-for" style="display: flex; margin: 0px; padding: 0px;"><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">Age</h3><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">${n.age}</h3></div>
      <div class="box-for" style="display: flex; margin: 0px; padding: 0px;"><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">Height</h3><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">${n.heightFeet} feet ${n.heightInches} inches</h3></div>
      <div class="box-for" style="display: flex; margin: 0px; padding: 0px;"><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">Gender</h3><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">${n.sex}</h3></div>
      <div class="box-for" style="display: flex; margin: 0px; padding: 0px;"><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">Shirt Size</h3><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">${n.shirtSize}</h3></div>
      <div class="box-for" style="display: flex; margin: 0px; padding: 0px;"><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">Pants Size</h3><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">${n.pantsFinal}</h3></div>
      <div class="box-for" style="display: flex; margin: 0px; padding: 0px;"><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">Shoe Size</h3><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">${n.shoeSize}</h3></div>
      <div class="box-for" style="display: flex; margin: 0px; padding: 0px;"><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">Bra Size</h3><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">${n.braSize}</h3></div>
      <div class="box-for" style="display: flex; margin: 0px; padding: 0px; height: auto"><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">Hat, Cloat, Gloves, Swimsuits, Sandals</h3><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;
      height: 30px;">${n.hcgString}</h3></div>
      <div class="box-for" style="display: flex; margin: 0px; padding: 0px; height: auto"><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;">Anything Else</h3><h3 style="border: black solid 1px;
      padding: 0px;
      margin: 0px;
      width: 250px;">${n.anythingElse}</h3></div>`
  );

  const afterStuff = `</html>`;

  const totalContent = beforeStuff + familyString + content + afterStuff;

  let sendResult = transporter.sendMail(
    {
      from: "mobileclothes@hotmail.com",
      to: "bethelmobilecloset@gmail.com",
      subject: `${familyStuff.familyName} Mobile Closet Input Form`,
      html: totalContent,
    },
    (err, data) => {
      if (err) {
        console.log(`Error Occurs: ${err}`);
      } else {
        console.log("Email sent");
      }
    }
  );

  let message = "processed!";
};
