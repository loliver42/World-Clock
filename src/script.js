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
  let fijiElement = document.querySelector("#fiji");
  if (fijiElement) {
    let fijiDateElement = fijiElement.querySelector(".date");
    let fijiTimeElement = fijiElement.querySelector(".time");
    let fijiTime = moment().tz("Pacific/Fiji");
    fijiDateElement.innerHTML = fijiTime.format("MMMM Do YYYY");
    fijiTimeElement.innerHTML = fijiTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
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
