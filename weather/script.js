  //json
 console.log("===houjr 1:JSON Basics ===");

 let student ={
     name:"Mona",
     age:19,
     marks:[85,90,89]
 };

//convert object to JSON string
 let jsonstring = JSON.stringify(student);
 console.log("JSON String:",jsonstring);
 console.log("Type of jsonstring:",typeof jsonstring);
//convert JSON string back to object
 let jsonobject = JSON.parse(jsonstring);
 console.log("JSON Object:",jsonobject);
 console.log("Type of jsonobject:",typeof jsonobject);
//variables of books atleast 3 books
 let books =[
     {title:"harry potter",author:"R K Rowling",year:2001},
     {title:"The Great Gatsby ",author:" F. Scott Fitzgerald",year:2005},
     {title:"Midnight's Children ",author:" Salman Rushdie",year:2010}
 ];
 console.log("Books Array:",books);
 //convert books array to JSON string
 let booksJsonString = JSON.stringify(books);
 console.log("Books JSON String:",booksJsonString);
 //convert JSON string back to array
 let booksArray = JSON.parse(booksJsonString);
 console.log("Books Array from JSON String:",booksArray);

 //hour 2: AJEX with fetch
 console.log("===hour 2: AJEX with fetch ===");
 //fetch sample Json from API
 fetch("https://jsonplaceholder.typicode.com/posts")
 .then(response => response.json())
 .then(data => console.log("Fetcheed Data:",data))
 .catch(error => console.error("Error fetching data:",error));

 //hour 3: Display JSON data on webpage
 console.log("===hour 3: Display JSON data on webpage ===");
 //fetch all users and show in console + page
 fetch("https://jsonplaceholder.typicode.com/users") 
 .then(response => response.json())
 .then(users => {
     output = "<h3>User List</h3>";
     users.forEach(user => {
         output+= `<li>${user.name} - ${user.email})</li>`;
     });
     output += "</ul>";
     //append result to page
     document.body.innerHTML += output;
    });
    // Predefined city → coordinates
   //oredefined city -> coordinates
// script.js

const cityCoords = {
  "bangalore": { lat: 12.97, lon: 77.59 },
  "delhi":     { lat: 28.61, lon: 77.23 },
  "mumbai":    { lat: 19.07, lon: 72.87 },
  "london":    { lat: 51.51, lon: -0.13 },
  "new york":  { lat: 40.71, lon: -74.01 }
};

// Wait for DOM so IDs always exist
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("fetchbtn");
  const input = document.getElementById("cityname");
  const resultDiv = document.getElementById("result");

  btn.addEventListener("click", () => {
    const raw = input.value || "";
    const city = raw.trim().toLowerCase();

    if (!city) {
      resultDiv.innerHTML = "<p style='color:orange'>Please enter a city name.</p>";
      return;
    }

    if (!cityCoords[city]) {
      resultDiv.innerHTML = `<p style='color:red'>⚠️ City "${raw}" not in list!</p>`;
      return;
    }

    const coords = cityCoords[city];
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

    resultDiv.innerHTML = "<p>Loading...</p>";

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => {
        if (!data.current_weather) {
          resultDiv.innerHTML = "<p style='color:red'>⚠️ Weather data not available!</p>";
          return;
        }

        // Capitalize city display nicely
        const displayCity = raw.trim().split(" ")
          .map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
          .join(" ");

        resultDiv.innerHTML = `
          <h3>Weather in ${displayCity}</h3>
          <p>🌡️ Temp: ${data.current_weather.temperature} °C</p>
          <p>🍃 Wind: ${data.current_weather.windspeed} km/h</p>
          <p>⏲️ Time: ${data.current_weather.time}</p>
        `;
      })
      .catch(err => {
        console.error(err);
        resultDiv.innerHTML = `<p style='color:red'>⚠️ Error fetching weather data: ${err.message}</p>`;
      });
  });
});
