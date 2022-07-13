import React, { useState } from "react";
import axios from "axios";
import Home from "../Home/Home";
import Button from "react-bootstrap/esm/Button";
export default function MovieApi() {
  const [movieData, setMovieData] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://movies-app1.p.rapidapi.com/api/movies',
    headers: {
      'X-RapidAPI-Key': 'f9617ff190msh110ebf26f552e3cp12af75jsnd2f60e4283e9',
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
    }
  };
  const axioscall = async () => {
    await axios
      .request(options)
      .then(function (response) {
        setMovieData(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const onclickHandler = () => {
    axioscall();
  };

  return (
    <div>
      <Button onClick={onclickHandler}>View All The movies</Button>

      <Home
        // onclickHandler={onclickHandler}
        MovieArray={movieData}
      ></Home>
    </div>
  );
}
