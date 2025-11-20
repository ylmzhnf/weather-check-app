import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import env from "dotenv";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

env.config();

const apiKey = process.env.APIKey;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/weather", async (req, res) => {
  const city = req.body.city;

  if (!city) {
    return res.render("index.ejs", {
      weather: null,
      error: "Lütfen şehir giriniz!",
    });
  }

  try {
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=en`
    );
    console.log(weatherResponse.data);
    res.render("index.ejs", {
      weather: weatherResponse.data,
      error: null,
    });
  } catch (error) {
    console.log(error);
    return res.render("index.ejs", {
      weather: null,
      error: "Hava durumu bilgisi alınamadı!",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
