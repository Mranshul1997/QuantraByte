// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const path = require("path");


const buildPath = path.join(__dirname, "../client/dist"); // relative path to frontend build

app.use(express.static(buildPath));

// SPA fallback - React routing handle karne ke liye
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});


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
