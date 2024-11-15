const getFetchBtn = document.getElementById("getFetch");
const getAsyncBtn = document.getElementById("getAsync");

function getDataFetch() {
  const apiLink = "http://localhost:3000/api/players";
  fetch(apiLink)
    .then((response) => response.json())
    .then((data) => {
      console.log("getFetch", data);

      let output = "<ul>";
      for (const player of data) {
        output += "<li>" + player.name + ": " + player.position + "</li><br>";;
      }

      output += "</ul>";

      document.getElementById("data").innerHTML = output;
    });
}
getFetchBtn.addEventListener("click", getDataFetch);

async function getDataAsync() {
  const response = await fetch("http://localhost:3000/api/players");
  const data = await response.json();

  console.log("getAsync", data);

  let output = "<ul>";
  for (const player of data) {
    output += "<li>" + player.name + ": " + player.achievements + "</li><br>";
  }

  output += "<ul>";

  document.getElementById("data").innerHTML = output;
}
getAsyncBtn.addEventListener("click", getDataAsync);