import { useState } from "react";
import "./App.css";

function App() {
  const [endpoint, setEndpoint] = useState("");
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
      console.log("----->", response.json());
    })
    .catch((err) => {
      console.log(err);
    });

  const onChangeHandler = (e) => {
    setEndpoint(e.target.value);
  };

  return (
    <section>
      <form>
        <input type="text" value={endpoint} onChange={onChangeHandler} />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default App;
