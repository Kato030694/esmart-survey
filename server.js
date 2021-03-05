const express = require("express");
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use("/css", express.static(__dirname + "/css"));
app.use("/img", express.static(__dirname + "/img"));
app.use("/JS", express.static(__dirname + "/JS"));



app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);
  const  transport = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      auth:{
          user: "an.long.0306@gmail.com",
          pass: "tyjziibyctvmyzto",
      }
  });
  
  const mailOptions = {
      from: req.body.email,
      to: "an.long.0306@gmail.com",
      subject: `Messsage from ${req.body.email}: ${req.body.tenkhachhang}`,
      text: req.body.sodt
  }

  transport.sendMail(mailOptions, (error, info)=>{
    if(error){
        console.log(error);
        res.send('error');
    }else{
        console.log("email sent: " + info.response);
        res.send('success')
    }
  })
});

app.listen(PORT, () => {
  console.log(`Sever running on port ${PORT}`);
});
