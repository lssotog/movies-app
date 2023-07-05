import "./App.css";

function App() {
  const url =
    "https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr";

  fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6025dee46cmsh08e3a62f71c2bffp142df3jsn4c70b1a2dd47",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  })
    .then((response) => {
      console.log("----->", response);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default App;
