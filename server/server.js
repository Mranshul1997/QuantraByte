const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://quantrabyte.com:8080",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// const buildPath = path.join(__dirname, "../client/dist");
// app.use(express.static(buildPath));

// API endpoint
app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  // console.log('mmk')
  // res.status(200).json({ success: true, message: "Mail sent!" });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "singh.thakur2226@gmail.com",
      pass: "xdpx lxjf fyga bwki",
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

// React Router fallback — sabse last me
app.use((req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(5000, () => console.log("Server running on port 5000"));
