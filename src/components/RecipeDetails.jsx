import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function RecipeDetails() {
  const [element, setElement] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/data.json")
      .then((res) => {
        const foundElement = res.data.find((e) => e.id === parseInt(id));
        setElement(foundElement);
        console.log(foundElement);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!element) {
    return (
      <div className="card" aria-hidden="true" >
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        {console.log("Component is rendering")}
        {element.image_url && (
          <Card.Img variant="top" src={element.image_url} height="250px" />
        )}
        <Card.Body>
          <Card.Title className="text-danger">{element.name}</Card.Title>
          <Card.Text>{element.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RecipeDetails;
