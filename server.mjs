import express, { json } from "express";
import fetch from "node-fetch";
import cors from "cors";
const captchaSecret = process.env.REACT_APP_CAPTCHA_S;

const app = express();
const port = 3000;

app.use(json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.post("/verify-recaptcha", async (req, res) => {
  const { token } = req.body;
  const secret = captchaSecret;
  const uri = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;

  fetch(uri, {
    method: "post",
  })
    .then((response) => response.json())
    .then((google_response) => {
      if (google_response.success === true) {
        return res.send({ response: "Successful" });
      } else {
        return res.send({ response: "Failed" });
      }
    })
    .catch((error) => {
      return res.json({ error });
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
