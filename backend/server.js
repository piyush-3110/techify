require("dotenv").config();
const express = require("express");
const nodeMail = require("nodemailer");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(
  cors({
    origin: ["https://techify-frontend.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(bodyParser.json()); // Use bodyParser.json() middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

async function mainMail(name, email, message) {
  const transporter = await nodeMail.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });
  const mailOption = {
    from: { email },
    to: process.env.USER,

    html: `You got a message from 
    Email : ${email}
    Name: ${name}
    Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve("Message Sent Successfully!");
  } catch (error) {
    return Promise.reject(error);
  }
}

app.post("/send-email", async (req, res, next) => {
  const { name, email, message } = req.body;
  console.log(`${name} ${email} ${message}`);
  try {
    await mainMail(name, email, message);

    res.send(`Message Successfully Sent!`);
  } catch (error) {
    console.log(error);
    res.send("Message Could not be Sent");
  }
});

app.listen(3000, () => console.log("Server is running!"));
