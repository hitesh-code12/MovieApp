import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import styles from "./Home.module.css";
import MovieCards from "./MovieCards";
function Home(props) {
  let MovieArray = props.MovieArray.results;
    console.log(MovieArray,"from home");
  const [searchtex, setSearch] = useState([]);
  const onChangeHandler = (e) => {
    setSearch(e.target.value)
    if(searchtex!=="")
    {
        const searchedmovie=MovieArray.filter((title)=>{
            return console.log (Object.values(title));/* .join(" ").toLowerCase().includes(searchtex.toLowerCase) */
        })
        setSearch(searchedmovie);
    }

  };
  return (
    <div>
      <Form style={{ padding: "20px" }} className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        //   value={searchtex}
          onChange={onChangeHandler}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Row>
        <MovieCards MovieArray={MovieArray} />
      </Row>
    </div>
  );
}

export default Home;
