import Carousel from 'react-bootstrap/Carousel';
import "./Offer.css"
function Offer() {
  return (
    <Carousel className='offer'>
      <Carousel.Item>
        
        
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        
      </Carousel.Item>
      <Carousel.Item>
        

 
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       
      </Carousel.Item>
      <Carousel.Item>
        

   
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
   
      </Carousel.Item>
    </Carousel>
  );
}

export default Offer;