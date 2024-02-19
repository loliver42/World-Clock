function updateTime() {
  let trentonElement = document.querySelector("#trenton");
  let trentonDateElement = trentonElement.querySelector(".date");
  let trentonTimeElement = trentonElement.querySelector(".time");
  let trentonTime = moment().tz("America/Trenton");
  trentonDateElement.innerHTML = trentonTime.format("MMMM Do YYYY");
  trentonTimeElement.innerHTML = trentonTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );

  let phillyElement = document.querySelector("#philly");
  let phillyDateElement = phillyElement.querySelector(".date");
  let phillyTimeElement = phillyElement.querySelector(".time");
  let phillyTime = moment().tz("America/Philadelphia");
  phillyDateElement.innerHTML = phillyTime.format("MMMM Do YYYY");
  phillyTimeElement.innerHTML = phillyTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
