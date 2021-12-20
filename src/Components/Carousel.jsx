import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://images7.alphacoders.com/105/thumb-1920-1054068.png' alt='...' /> 
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://images7.alphacoders.com/105/thumb-1920-1054068.png' alt='imagem anine' />
          
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://images7.alphacoders.com/105/thumb-1920-1054068.png' alt='...' />
          <MDBCarouselCaption>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}