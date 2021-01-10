import React,{compoent} from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import { Slider } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import  Card1 from'./Card1';




const Header = () =>{
 


  const [value, setValue] = React.useState(2);
  return(
    <div>
    <div className="header">
    <ul>
   <li>More</li>
   <li>My Account</li>
 </ul>
 
 <span className="heading">
 
   <input type="text" placeholder="Search.." name="search"  className="search" />
   <button type="submit"><i class="fa fa-search"></i></button>
  


 </span>

<div className="header2">

<ul >
  <li className="heading2" >All Catagory</li>
  <li className="heading2">Two wheler</li>
  <li className="heading2">Theree wheler</li>
  <li className="heading2">Charging Tools</li>
</ul>
 </div>
</div>

 <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + "/asset/Top Corusal.png"}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + "/asset/Top Corusal.png"}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + "/asset/Top Corusal.png"}
      alt="Third slide"
    />
   

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> <br/>
 <div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Pin Code</label>
  </div>
  <div class="col-auto">
    <input type="number" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Must be 6 Numbers long.
    </span>
  </div>
</div>


<div className="slider">
<p>0 &nbsp; &nbsp; &nbsp; 50 &nbsp; &nbsp; &nbsp; 100 &nbsp;&nbsp; &nbsp; 200 &nbsp; &nbsp; &nbsp;300 &nbsp;&nbsp;&nbsp; 400 &nbsp; &nbsp; &nbsp; 500  1000 </p>
 <Slider />
 </div>

 <CardDeck>
  <Card>
    <Card.Img variant="top" src={process.env.PUBLIC_URL + "/asset/Top Corusal.png"} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend"></Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={process.env.PUBLIC_URL + "/asset/Top Corusal.png"} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend"></Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={process.env.PUBLIC_URL + "/asset/Top Corusal.png"} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend"></Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
  
    </Card.Footer>
  </Card>
</CardDeck>

<div className="header2">
<p className="more1">More</p>
</div>
<Card1 name="Deals Of The Day"/>

<div className="header2">
<p className="more1">More</p>
</div>
<Card1 name="Top Selling Products"/>
<div className="header2">
<p className="more1">More</p>
</div>
<Card1 name="ElectriX Recomended"/>

<div className="footer">
  <h5 className="fh">Copiright @ www.electrikx.com</h5>
</div>



</div>
    

     
  





  )
}

export default Header;