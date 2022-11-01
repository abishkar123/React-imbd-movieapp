import React, { useEffect, useState } from 'react'
import { Col, Row, ButtonGroup, Button
} from 'react-bootstrap';
import { CustomCard } from './CustomCard';

export const MovieList = ({movieList,func, deleteMovie}) => {
  console.log(movieList, "loading 1");

  const [displayMovie, setdisplayMovie] = useState([]);
   useEffect(()=>{
  console.log("loading 2...");
  setdisplayMovie(movieList);
},[movieList]);

  const selectCategory = cat => {
    cat === "all" && setdisplayMovie(movieList);

    cat === "happy" &&
    setdisplayMovie (movieList.filter(item => item.type === "happy"));

    cat === "lazy" &&
    setdisplayMovie (movieList.filter(item => item.type === "lazy"));
  
  };
  return (
    <div className='bg-dark py-3  rounded p-3 mt-5'>
    <Row>
        <Col> 
    <ButtonGroup aria-label="Basic example">
      <Button
      onClick={()=> selectCategory ("all")}
      variant="primary">All</Button
    
      >
      <Button
      onClick={()=> selectCategory ("happy")}
      variant="danger">Happy</Button
      
      >
      <Button
      onClick={()=> selectCategory ("lazy")}
      variant="info">Lazy</Button
      
      >
    </ButtonGroup>
    < p className='mt-3'> {displayMovie.length} movies found!</p>
        </Col>
    </Row>
    <Row>
        <Col className="d-flex flex-wrap justify-content-around gap-3"> 
        {
          displayMovie.map((item, i) =>{
            return <CustomCard movie ={item} isDelete={true} func ={deleteMovie}/>
          })
        }
        
        </Col>
    </Row>
     </div>
  )
}
