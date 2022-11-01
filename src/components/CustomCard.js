import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomCard = ({ movie, func, isDelete, removeDisplay }) => {

  return (
    <Card style={{ width: "18rem", color: "black" }}>
      <Card.Img variant="top" src={movie?.Poster} />
      <Card.Body>
        <Card.Title>{movie?.Title}</Card.Title>
        <Card.Text>
          Rating: {movie?.imdbRating}
          <br />
          Year: {movie?.Year}
          <br/>
          Actor: {movie?.Actors}
        </Card.Text>

        
        {isDelete?(<div className="d-grid">
          <Button 
          onClick={()=>func(movie.imdbID)}
          variant="danger">Delete</Button>
        </div>):(
            <div className="d-flex justify-content-between">
          <Button
            onClick={() => func({ ...movie, type: "happy" })}
            variant="danger"
          >
            Happy
          </Button>
        <Button>
         <i onClick ={removeDisplay} className="fa-solid fa-trash"></i>
         </Button>
          <Button
            onClick={() => func({ ...movie, type: "lazy" })}
            variant="info"
          >
            Lazy
          </Button>
        </div>

          )
        }

        {/* <div className="d-flex justify-content-between">
          <Button
            onClick={() => func({ ...movie, type: "happy" })}
            variant="danger"
          >
            Happy
          </Button>
          <Button
            onClick={() => func({ ...movie, type: "lazy" })}
            variant="info"
          >
            Lazy
          </Button>
        </div> */}


        {/* <div className="d-grid">
          <Button variant="danger">Delete</Button>
        </div> */}
      </Card.Body>
    </Card>
  );
};