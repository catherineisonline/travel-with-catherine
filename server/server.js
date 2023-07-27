const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const user = process.env.REACT_APP_USERNAME
const pass = process.env.REACT_APP_PASS

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3000, () => console.log("Server running"))

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: user,
        pass: pass
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: user,
        subject: "Contact Form Submission",
        html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };


    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});