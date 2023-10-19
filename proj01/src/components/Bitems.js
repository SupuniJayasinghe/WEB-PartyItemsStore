import React from 'react'
import './Bitems.css'
import img1 from './assets/hats.jpg'
import img2 from './assets/cups.jpeg'
import img3 from './assets/Blowouts.jpg'
import img4 from './assets/balloons.jpeg'
import img5 from './assets/waterb.jpeg'
import img6 from './assets/PaperPlates.jpg'
import img7 from './assets/helium.jpeg'
import img8 from './assets/banners.jpeg'

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import * as Icon from "react-bootstrap-icons";
import ReactStars from "react-rating-stars-component";


function Bitems() {
  return ( 
    <div className='bitems'>
        <h2 className='t'>Birthday Party Items</h2>
    <CardGroup className='row'>
      <Card className='hover-card'>
        <div className='container'>
            <Card.Img className='card-img' variant="top" src={img1} />
            <div className='middle'>
            <ButtonGroup className="btnGroup">
                <Button className="wish">
                    <Icon.Heart></Icon.Heart>
                </Button>
                <Button className='add-cart'>Add to Cart</Button>
                <Button className='eye'>
                    <Icon.Eye></Icon.Eye>
                </Button>
            </ButtonGroup>
            </div>    
        </div>
        <div className='con'>
        <Card.Body>
          <Card.Title className='item-name'>Hats</Card.Title>
          <a href='#' className='feedback'>Add Your Review Here</a>
        </Card.Body>
        <Card.Footer>
            <div className='footer'>
                <p className='price'>20 LKR</p>
                <ReactStars count={5} size={28} color="gray" a11y={true} edit={true} isHalf="true" activeColor="#ffd700"/>
            </div>
        </Card.Footer>
        </div>   
      </Card>

      <Card className='hover-card'>
        <div className='container'>
            <Card.Img className='card-img' variant="top" src={img2} />
            <div className='middle'>
            <ButtonGroup className="btnGroup">
                <Button className="wish">
                    <Icon.Heart></Icon.Heart>
                </Button>
                <Button className='add-cart'>Add to Cart</Button>
                <Button className='eye'>
                    <Icon.Eye></Icon.Eye>
                </Button>
            </ButtonGroup>
            </div>    
        </div>
        <div className='con'>
        <Card.Body>
          <Card.Title className='item-name'>Cups</Card.Title>
          <a href='#' className='feedback'>Add Your Review Here</a>
        </Card.Body>
        <Card.Footer>
            <div className='footer'>
                <p className='price'>150 LKR</p>
                <ReactStars count={5} size={28} color="gray" a11y={true} edit={true} isHalf="true" activeColor="#ffd700"/>
            </div>
        </Card.Footer>
        </div>   
      </Card>

      <Card className='hover-card'>
        <div className='container'>
            <Card.Img className='card-img' variant="top" src={img3} />
            <div className='middle'>
            <ButtonGroup className="btnGroup">
                <Button className="wish">
                    <Icon.Heart></Icon.Heart>
                </Button>
                <Button className='add-cart'>Add to Cart</Button>
                <Button className='eye'>
                    <Icon.Eye></Icon.Eye>
                </Button>
            </ButtonGroup>
            </div>    
        </div>
        <div className='con'>
        <Card.Body>
          <Card.Title className='item-name'>Blowouts</Card.Title>
          <a href='#' className='feedback'>Add Your Review Here</a>
        </Card.Body>
        <Card.Footer>
            <div className='footer'>
                <p className='price'>20 LKR</p>
                <ReactStars count={5} size={28} color="gray" a11y={true} edit={true} isHalf="true" activeColor="#ffd700"/>
            </div>
        </Card.Footer>
        </div>   
      </Card>

      <Card className='hover-card'>
        <div className='container'>
            <Card.Img className='card-img' variant="top" src={img6} />
            <div className='middle'>
            <ButtonGroup className="btnGroup">
                <Button className="wish">
                    <Icon.Heart></Icon.Heart>
                </Button>
                <Button className='add-cart'>Add to Cart</Button>
                <Button className='eye'>
                    <Icon.Eye></Icon.Eye>
                </Button>
            </ButtonGroup>
            </div>    
        </div>
        <div className='con'>
        <Card.Body>
          <Card.Title className='item-name'>Paper Plates</Card.Title>
          <a href='#' className='feedback'>Add Your Review Here</a>
        </Card.Body>
        <Card.Footer>
            <div className='footer'>
                <p className='price'>30 LKR</p>
                <ReactStars count={5} size={28} color="gray" a11y={true} edit={true} isHalf="true" activeColor="#ffd700"/>
            </div>
        </Card.Footer>
        </div>   
      </Card>

      <Card className='hover-card'>
        <div className='container'>
            <Card.Img className='card-img' variant="top" src={img8} />
            <div className='middle'>
            <ButtonGroup className="btnGroup">
                <Button className="wish">
                    <Icon.Heart></Icon.Heart>
                </Button>
                <Button className='add-cart'>Add to Cart</Button>
                <Button className='eye'>
                    <Icon.Eye></Icon.Eye>
                </Button>
            </ButtonGroup>
            </div>    
        </div>
        <div className='con'>
        <Card.Body>
          <Card.Title className='item-name'>Banners</Card.Title>
          <a href='#' className='feedback'>Add Your Review Here</a>
        </Card.Body>
        <Card.Footer>
            <div className='footer'>
                <p className='price'>50 LKR</p>
                <ReactStars count={5} size={28} color="gray" a11y={true} edit={true} isHalf="true" activeColor="#ffd700"/>
            </div>
        </Card.Footer>
        </div>   
      </Card>
      
    </CardGroup>
    </div> 
    
  );
}

export default Bitems;
