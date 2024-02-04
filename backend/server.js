const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "piyushdas3110@gmail.com", // your Gmail address
    pass: "Pabloesjdflk", // your Gmail password
  },
});

// Route to handle form submission
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Email message options
  const mailOptions = {
    from: email,
    to: "piyushdas3110@gmail.com", // your email address where you want to receive the message
    subject: "New Message from Contact Form",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Message sent successfully!");
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
