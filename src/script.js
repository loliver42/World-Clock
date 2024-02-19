function updateTime() {
  let trentonElement = document.querySelector("#trenton");
  if (trentonElement) {
    let trentonDateElement = trentonElement.querySelector(".date");
    let trentonTimeElement = trentonElement.querySelector(".time");
    let trentonTime = moment().tz("America/Trenton");
    trentonDateElement.innerHTML = trentonTime.format("MMMM Do YYYY");
    trentonTimeElement.innerHTML = trentonTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }

  let phillyElement = document.querySelector("#philly");
  if (phillyElement) {
    let phillyDateElement = phillyElement.querySelector(".date");
    let phillyTimeElement = phillyElement.querySelector(".time");
    let phillyTime = moment().tz("America/Philadelphia");
    phillyDateElement.innerHTML = phillyTime.format("MMMM Do YYYY");
    phillyTimeElement.innerHTML = phillyTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>] A [</small>]"
          )}</div>
        </div>
        
    <a href="/">All Cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
