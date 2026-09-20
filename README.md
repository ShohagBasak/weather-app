# NextLevel Weather

A modern weather checking app built with React and Vite. It lets users search for a city or use their current location to view the latest weather conditions, helpful recommendations, and a visually rich weather experience.

## Features

- Search weather by city name
- Get weather using browser geolocation
- Real-time weather data from Open-Meteo
- Current temperature, humidity, wind speed, and feel-like temperature
- Weather condition cards with animated visual effects
- Smart recommendations based on the current weather
- Responsive UI for desktop and mobile devices
- Multi-page layout using React Router

## Tech Stack

- [![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
- [![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
- [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
- [![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
- [![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-1A1A1A?style=flat-square&logo=lucide&logoColor=white)](https://lucide.dev/)
- [![Lottie](https://img.shields.io/badge/Lottie-00B3FF?style=flat-square&logo=lottie&logoColor=white)](https://airbnb.io/lottie/)
- [![Open-Meteo](https://img.shields.io/badge/Open--Meteo-4A90E2?style=flat-square)](https://open-meteo.com/)

## APIs Used

This project uses:

- Open-Meteo Geocoding API for city search
- Open-Meteo Forecast API for weather data

## How It Works

1. The user enters a city name or chooses "Use My Location".
2. The app converts the input into geographic coordinates.
3. Weather data is fetched using the Open-Meteo API.
4. The app maps the weather code to a condition, icon, and recommendation.
5. The weather dashboard is displayed with useful details and styling.

## Screens

- Home page with CTA to check weather
- Modal for entering city or using live location
- Weather details page with current conditions and recommendations

## Notes

- Browser geolocation requires permission from the user.
- Some weather conditions are mapped using WMO weather codes for better UI experience.
- The app is designed as a responsive front-end project and does not include a backend server.

## License

This project is for educational and personal use.

## Author

Built as a personal weather app project by the developer in the workspace.