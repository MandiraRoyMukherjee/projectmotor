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
  
 
 <span className="heading">
   <input type="text" placeholder="Search.." name="search"  className="search"  />
  

  




  
 </span>

 
 
 
     <div class="dropdown">
     <button className="button">Location <i class="fa fa-map-marker"></i></button>
  <div class="dropdown-content">
  <div className="pin">
 <div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Enter Pin Code:</label>
  </div>
  <div class="col-auto">
    <input type="number" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
    <input type="submit"/>
  </div>

  
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Must be 6 Numbers long.
    </span>
  </div>
</div>
</div>
 
  </div>
</div>
 
 
 <div className="logo">
   <img src={process.env.PUBLIC_URL + "/asset/Rectangle 17.svg"} height="63px" />
 </div>
 </div>


 <div className="header-right">
   <ul className="header-right-list">
     <li >
     <div class="dropdown">
  <button class="dropbtn1">My Account</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>  
      <img src={process.env.PUBLIC_URL + "/asset/Vector.png"} width="18.9px" height="10.8px" 
        margin-left="11px"
      /></li>
     <li margin-right="20px">
     <div class="dropdown">
  <button class="dropbtn1">More</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>  <img src={process.env.PUBLIC_URL + "/asset/Vector.png"}  width="18.9px" height="10.8px" 
       margin-left="11px"
     />
     </li>
     <li>
     <img src={process.env.PUBLIC_URL + "/asset/feather_shopping-cart.png"} height="37px" />
     </li>
   </ul>
 </div>

<div className="header2">

<ul>
  <li className="heading2" >
  
  <div class="dropdown">
  <button class="dropbtn">All category</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>  
  <img src={process.env.PUBLIC_URL + "/asset/Vector.png"} background ="#808B96" width="18.9px"
height="10.8px"  />
  </li>
  <li className="heading2">
  <div class="dropdown">
  <button class="dropbtn">Two wheeler</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>  
  <img src={process.env.PUBLIC_URL + "/asset/Vector.png"} background="#808B96" width="18.9px"
height="10.8px" />
  </li>
  <li className="heading2">
  <div class="dropdown">
  <button class="dropbtn">Three wheeler</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>  
  <img src={process.env.PUBLIC_URL + "/asset/Vector.png"} background="#808B96" width="18.9px"
height="10.8px"/>
  </li>
  <li className="heading2">
  <div class="dropdown">
  <button class="dropbtn">Charging Tools</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>  
  
  <img src={process.env.PUBLIC_URL + "/asset/Vector.png"} background="#808B96"  width="18.9px"
    height ="10.8px" />
  </li>
  </ul>
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

<div className="button-below-carousel">
  <ul className="button-below">
    <li className="button-rounded"><button type="button" className="button-rounded" >e-rickshaw</button></li>
    <li className="button-rounded"><button type="button" className="button-rounded">scooter</button></li>
    <li className="button-rounded"><button type="button" className="button-rounded">cycle</button></li>
    <li className="button-rounded"><button type="button" className="button-rounded">bike</button></li>
    <li className="button-rounded"><button type="button" className="button-rounded">accesories</button></li>
  </ul>
</div>



<div className="slider">
<h3>What is your budget</h3>
<p className="slider-budget" >0 &nbsp; &nbsp; &nbsp; 50 &nbsp; &nbsp; &nbsp; 100 &nbsp;&nbsp; &nbsp; 200 &nbsp; &nbsp; &nbsp;300 &nbsp;&nbsp;&nbsp; 400 &nbsp; &nbsp; &nbsp; 500 &nbsp; &nbsp; &nbsp; 1000 </p>
 <Slider  className="slider-budget"/>
 </div>



 <div className="container-top1">
                    <p id="left-side1">Top selling products</p>
                  
                </div>
                <div className="container1">
                    <div className="item1" id="item-1">
                        <div className="gridcontainer1">
                            <div className="grid-item1"><img src={process.env.PUBLIC_URL + "/asset/Rectangle 34.png"} alt="there is an image"  />this is product
                            
                             
     <Box component="fieldset" mb={3} borderColor="transparent">
       <Typography component="legend"></Typography>
       <Rating name="read-only" value={value} readOnly />
     </Box></div>
  

                            <div className="grid-item1"><img src={process.env.PUBLIC_URL + "/asset/Rectangle 34.png"} alt="there is an image" />this is product
                            
                             
                            <Box component="fieldset" mb={3} borderColor="transparent">
                              <Typography component="legend"></Typography>
                              <Rating name="read-only" value={value} readOnly />
                            </Box></div>
                            <div className="grid-item1"><img src={process.env.PUBLIC_URL + "/asset/Rectangle 34.png"} alt="there is an image" />
                            this is product
                            
                             
                            <Box component="fieldset" mb={3} borderColor="transparent">
                              <Typography component="legend"></Typography>
                              <Rating name="read-only" value={value} readOnly />
                            </Box></div>
                            <div className="grid-item1"><img src={process.env.PUBLIC_URL + "/asset/Rectangle 34.png"} alt="there is an image" />
                            this is product
                            
                             
                            <Box component="fieldset" mb={3} borderColor="transparent">
                              <Typography component="legend"></Typography>
                              <Rating name="read-only" value={value} readOnly />
                            </Box></div>
                        </div>

                    </div>
                    <div className="item1" id="item-1">
                        <div className="gridcontainer1">
                            <div className="grid-item1"> <img src={process.env.PUBLIC_URL + "/asset/Rectangle 34.png"} alt="there is an image" />this is product
                            
                             
                            <Box component="fieldset" mb={3} borderColor="transparent">
                              <Typography component="legend"></Typography>
                              <Rating name="read-only" value={value} readOnly />
                            </Box></div>
                            <div className="grid-item1"> <img src={process.env.PUBLIC_URL + "/asset/Rectangle 34.png"} alt="there is an image" />this is product
                            
                             
                            <Box component="fieldset" mb={3} borderColor="transparent">
                              <Typography component="legend"></Typography>
                              <Rating name="read-only" value={value} readOnly />
                            </Box></div>
                            <div className="grid-item1"> <img src={process.env.PUBLIC_URL + "/asset/Rectangle 34.png"} alt="there is an image" />this is product
                            
                             
                            <Box component="fieldset" mb={3} borderColor="transparent">
                              <Typography component="legend"></Typography>
                              <Rating name="read-only" value={value} readOnly />
                            </Box></div>
                            <div className="grid-item1"> <img src={process.env.PUBLIC_URL + "/asset/Rectangle 34.png"} alt="there is an image" />this is product
                            
                             
                            <Box component="fieldset" mb={3} borderColor="transparent">
                              <Typography component="legend"></Typography>
                              <Rating name="read-only" value={value} readOnly />
                            </Box></div>
                        </div>
                    </div>
                </div>

 
 <CardDeck>
  
 <Card>
   
   <Card.Body>
    
     <Box component="fieldset" mb={3} borderColor="transparent">
       <Typography component="legend"></Typography>
       <Rating name="read-only" value={value} readOnly />
     </Box>
     <Card.Img variant="top" src={process.env.PUBLIC_URL + "/asset/Top Corusal.png"}   />
     <Card.Title>Card title</Card.Title>
     <Card.Text>
       This is a wider card with supporting text below as a natural lead-in to
       additional content. This card has even longer content than the first to
       show that equal height action.
     </Card.Text>
   </Card.Body>
  
   <Card.Footer>
     <small className="text-muted">Last updated 3 mins ago</small>
 
   </Card.Footer>
 </Card>
  
  <Card>
   
    <Card.Body>
     
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend"></Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + "/asset/Top Corusal.png"}   />
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
   
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
  
    </Card.Footer>
  </Card>
  <Card>
   
    <Card.Body>
     
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend"></Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + "/asset/Top Corusal.png"}   />
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
   
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
  
    </Card.Footer>
  </Card>
</CardDeck>
<div className="header3">


<Card1 name="Deals Of The Day"/>
</div>

<div className="header3">
<p className="more1">More</p>

<Card1 name="Top Selling Products"/>
</div>
<div className="header3">
<p className="more1">More</p>

<Card1 name="ElectriX Recomended"/>
</div>

<div className="footer">
  <h5 className="fh">Copiright @ www.electrikx.com</h5>
</div>

</div>
  )
}

export default Header;