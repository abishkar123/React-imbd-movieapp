import React from 'react'
import { Col, Row, ButtonGroup, Button} from 'react-bootstrap';
import { CustomCard } from './CustomCard';

export const MovieList = () => {
  return (
    <div className='bg-dark py-3  rounded p-3 mt-5'>
    <Row>
        <Col> 
    <ButtonGroup aria-label="Basic example">
      <Button variant="primary">All</Button>
      <Button variant="danger">Happy</Button>
      <Button variant="info">Lazy</Button>
    </ButtonGroup>
    < p className='mt-3'> 5 movies found!</p>
        </Col>
    </Row>
    <Row>
        <Col className="d-flex flex-wrap justify-content-around gap-3"> 
        <CustomCard/>

        </Col>
    </Row>
     </div>
  )
}
