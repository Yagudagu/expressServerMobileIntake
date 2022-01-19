const express = require("express");
const nodeMailer = require("nodemailer");
const cors = require("cors");

const app = express();

// app.use(
//   cors({
//     origin: "https://gray-moss-0cc4cdb1e.azurestaticapps.net",
//   })
// );

app.use(express.json());

let transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "bethelmobilecloset@gmail.com",
    pass: "jeanette606",
  },
});

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end(`
  <html>
    <body>Endpoint is working, this is from the thing, changing to prove it changed</body>
  </html>`);
});

app.post("/processrequest", (req, res) => {
  const familyStuff = req.body[0];
  console.log("Family Stuff " + familyStuff);

  const people = req.body[1];
  console.log("People " + people[0]);

  console.log("Hat " + people[0].hatCoatGloves);
  console.log("Hat " + people[0].hatCoatGloves[0]);

  people.map((n) => {
    if (n.sex === "male") {
      n.pantsFinal = `${n.pantsSize.waist}, ${n.pantsSize.inseamLength}`;
    } else {
      n.pantsFinal = n.pantsSize;
    }
  });

  const familyString = `<br/><h3>Family Name: ${familyStuff[0]}<br/><h3>Street Address: ${familyStuff[1]}<br/><h3>Zip Code: ${familyStuff[2]}<br/>Phone Number: ${familyStuff[3]}<br/><h3>Country Of Origin: ${familyStuff[4]}<br/><h3>Days Available: ${familyStuff[5]}`;
  let content = people.map(
    (n, index) =>
      "<br/>" +
      `<h3>Person number ${index + 1}:<br/>` +
      `Child or Adult: ${n.ca} FirstName: ${n.firstName} Age: ${n.age} HeightFeet: ${n.heightFeet} HeightInches: ${n.heightInches} Sex: ${n.sex} ShirtSize: ${n.shirtSize} PantsSize: ${n.pantsFinal} ShoeSize: ${n.shoeSize} BraSize: ${n.braSize} HatCoatGloves: ${n.hatCoatGloves} AnythingElse: ${n.anythingElse}`
  );

  const totalContent = familyString + content;

  let sendResult = transporter.sendMail(
    {
      from: "bethelmobilecloset@gmail.com",
      to: "bethelmobilecloset@gmail.com",
      subject: `${familyStuff[0]} Mobile Closet Input Form`,
      html: `<h1>Hi, here is the list: ${totalContent}`,
    },
    (err, data) => {
      if (err) {
        console.log(`Error Occurs: ${err}`);
      } else {
        console.log("Email sent");
      }
    }
  );

  res.writeHead(200, { "Content-type": "text/" });
  res.end("Done");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
