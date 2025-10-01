// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const path = require("path");

const _dirname = path.dirname("");
const buildpath = path.join(_dirname, "../client/dist");
app.use(express.static(buildpath));
app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Gmail SMTP setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "singh.thakur2226@gmail.com", // Your Gmail
      pass: "xdpx lxjf fyga bwki", // App Password (step 1)
    },
  });

  const mailOptions = {
    from: email,
    to: "singh.thakur2226@gmail.com",
    subject: subject || "New Contact Form",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Mail sent!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
