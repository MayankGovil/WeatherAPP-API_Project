# Weather API Server

1)This project is a simple HTTP server that fetches weather data based on latitude and longitude using the WeatherAPI service.
It is built using the Node.js package( 
"cors": "^2.8.5",
"dotenv": "^16.4.5",
"express": "^4.19.2",
"nodemon": "^3.1.4") and the "axios": "^1.3.4" library for making HTTP requests.

2) Clone the repository to your local machine:
   git clone "https://github.com/MayankGovil/WeatherAPI.git"

3) Navigate to the project directory: cd Weather-API-Server

4) Install the required dependencies like this " npm install express Axios dotenv cors nodemon"

5) Running the Server to start opening a new terminal in the terminal write nodemon to start the server in the terminal you can see "Server is running on port 5000" 
 
6) Now the server is started open Postman selects the GET method  and passes this URL http://localhost:5000/weather?lat=26.25672870&lon=73.01704420
   here 'lat' means Latitude & 'lon' means 'Longitude' and we are passing the Latitude/Longitude(decimal) of Jodhpur and sending the request

7) The API will respond with a JSON object containing the weather data
   {
    "status": true,
    "message": "weather data found successfully",
    "data": {
        "timestamp": "2024-07-01 11:49",
        "cityName": "Jodhpur",
        "condition": {
            "text": "Overcast",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
            "code": 1009
        },
        "temperature": {
            "celcius": 33.4,
            "farenheit": 92.1
        }
    }
}

8) The endpoint handles various error cases, including:

8.1) I am missing latitude or longitude in the query parameters. the API response
 {
    "status": false,
    "message": "Latitude and longitude of city are required in decimal "
}

8.2) Invalid latitude or longitude values for example 
  e.g.} I am passing the incorrect latitude or longitude in the URL http://localhost:5000/weather?lat=126.25672870&lon=273.01704420.
here. The correct lat = 26.25672870 and lon = 73.01704420 but in response we get here { "status": false, "message": "Invalid latitude or longitude values."}
 e.g.2} I am swapping the value of the latitude & longitude of Jodhpur in response we can get { "status": false, "message": "Failed to fetch weather data"} or 
 we can get Weather data from a different city in response
