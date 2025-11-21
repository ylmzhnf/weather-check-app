# ☁️ WEATHER CHECK APP: A Minimalist Weather Platform

A minimalist Server-Side Rendering (SSR) web application developed using **Node.js**, **Express.js**, and **EJS**, which fetches real-time weather data based on the city name entered by the user via the **OpenWeatherMap API**.

---

## 📋 Table of Contents

- [Overview](#✨-overview)
- [Setup & Installation](#⚙️-setup--installation)
- [Technical Details](#💻-technical-details)
  - [Tech Stack](#🛠️-tech-stack)
  - [Routing](#🌐-routing)
  - [Data Processing and Error Handling](#📊-data-processing-and-error-handling)
- [Future Improvements](#🚀-future-improvements)
- [Contact](#📫-contact)

---

## ✨ Overview

This project focuses on demonstrating fundamental Server-Side Rendering (SSR) and third-party API integration skills. The application retrieves current weather data for a user-input city and presents metrics (temperature, wind speed, humidity, cloudiness) in a clean, user-friendly interface.

* **Architecture:** Fast API calls using Node.js and Express, with dynamic page generation via EJS.
* **Design:** Features a clean, icon-based interface that enhances data readability.

---

## ⚙️ Setup & Installation

Follow these steps to get the project running on your local machine:

1.  **Prerequisites:** Ensure you have Node.js and npm installed.
2.  **Clone the Repository:**
    ```bash
    git clone [Insert Project GitHub Address Here]
    cd weather-check-app
    ```
3.  **Install Dependencies:**
    ```bash
    npm install
    ```
4.  **Configure API Key:** Create a file named **`.env`** in your project's root directory and add your OpenWeatherMap API key:
    ```
    APIKey="[YOUR_OPENWEATHERMAP_KEY]"
    ```
5.  **Start the Application:**
    ```bash
    node index.js
    ```
6.  Open your web browser and navigate to `http://localhost:3000`.

---

## 💻 Technical Details

### 🛠️ Tech Stack

* **Backend Runtime:** Node.js
* **Web Framework:** Express.js
* **API Client:** Axios
* **Templating Engine:** EJS (Embedded JavaScript)
* **Data Source:** OpenWeatherMap API (`/data/2.5/weather` endpoint)
* **Configuration:** Dotenv (For hiding the API key)
* **Styling & Icons:** Custom CSS and Font Awesome.

### 🌐 Routing

The application's core functions are managed via the following two routes defined in `index.js`:

| Function | Route | HTTP Method | Description |
| :--- | :--- | :--- | :--- |
| Home Page | `/` | `GET` | Renders the application's starting page along with the search form. |
| Weather Query | `/weather` | `POST` | Makes an API request for the city name entered by the user, fetches the data, and updates the page. |

### 📊 Data Processing and Error Handling

* **Data Units:** Since `&units=metric` is used in the API request, temperature is displayed in **Celsius (°C)** and wind speed in **meters/second (m/s)**.
* **Displayed Metrics:** City name, temperature, weather description, wind speed, humidity, and cloudiness are retrieved and reflected on the screen via EJS.
* **Error Control:** A clear error message is shown to the user (`Please enter a city!` or `Could not retrieve weather information!`) when no city is entered or when the API returns data for an invalid city.

---

## 🚀 Future Improvements

* [ ] Integrate the API call (`/forecast` or `One Call`) to display weekly forecasts.
* [ ] Change the `lang=en` parameter in the API request to `lang=tr` to display weather descriptions in Turkish.
* [ ] Add CSS classes to dynamically change the interface background based on the weather icon code (e.g., cloudy, sunny).
* [ ] Display a loading state during search to improve user experience.

---

## 📫 Contact

**Email:** [ylmzhnf@gmail.com](mailto:ylmzhnf@gmail.com)
**LinkedIn:** [Hanife Yılmaz](https://www.linkedin.com/in/hanife-y%C4%B1lmaz-b9137b178/)
**GitHub:** [ylmzhnf](https://github.com/ylmzhnf)
**Frontend Mentor:** [@ylmzhnf](https://www.frontendmentes.io/profile/ylmzhnf)

---

© 2025 Hanife Yılmaz