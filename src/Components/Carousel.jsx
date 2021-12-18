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
          <MDBCarouselElement src='https://initiate.alphacoders.com/images/183/cropped-1366-768-183434.jpg?7500' alt='...' /> 
          <MDBCarouselCaption>
            <h5>Anime Experience</h5>
            <p>uma plataforma de descoberta de anime moderna que ajuda você a rastrear o anime que está assistindo.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://initiate.alphacoders.com/images/841/cropped-1366-768-841139.jpg?4885' alt='...' />
          <MDBCarouselCaption>
            <h5>Anime Experience</h5>
            <p>uma plataforma de descoberta de anime moderna que ajuda você a rastrear o anime que está assistindo.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://initiate.alphacoders.com/images/744/cropped-1366-768-744315.png?6882' alt='...' />
          <MDBCarouselCaption>
            <h5></h5>
            <p></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}