const express = require("express");
const nodeMailer = require("nodemailer");

const app = express();
app.use(express.json());

let transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "jacobhmartian@gmail.com",
    pass: "smister11",
  },
});

app.post("/processrequest", (req, res) => {
  const content = req.body.map(
    (n, index) =>
      "<br/>" + `<h3>Person number ${index}:<br/>` + JSON.stringify(n)
  );

  let sendResult = transporter.sendMail(
    {
      from: "jacobhmartian@gmail.com",
      to: "jacobhertzlermartin@gmail.com",
      subject: "From Mobile Closet Input Form",
      html: `<h1>Hi, here is the list: ${content}`,
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
