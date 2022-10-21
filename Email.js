const nodemailer = require("nodemailer");
const username = "dallas.mcglynn@ethereal.email";
const password = "HtRGvXuEBRv7DetsG8";

//transport
// npm i nodemailer

const transport = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: username,
    pass: password,
  },
});
transport
  .sendMail({
    to: "Onkar271998@gmail.com",
    from: "hello@gmail.com",
    subject: "abc",
    text: "thanks",
  })
  .then(() => {
    console.log("success");
  });
