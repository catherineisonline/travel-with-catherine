import dotenv from "dotenv";
dotenv.config({ path: "./backend/.env" });
import express, { json } from "express";
import fetch from "node-fetch";
import cors from "cors";
const app = express();
const port = 3000;

app.use(json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.post("/verify-recaptcha", async (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(401).json({ message: "No token found" });
  }
  const secret = process.env.CAPTCHA;
  const uri = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
  try {
    const response = await fetch(uri, {
      method: "POST",
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message);
    }
    return res.status(200).json({ message: "Token verified" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Token verification failed" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
