import React from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Portfolio.scss';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Portfolio = ({deviceType}) => {
	return(
		<div className='portfolio'>
			<span className='title'>Millions Of Tiles Sold</span>
			<span className='text'>GRACING WALLS OF ALL KINDS</span>
			<div className='portfolio-items'>
				<Carousel
				  swipeable={false}
				  draggable={false}
				  showDots={true}
				  responsive={responsive}
				  ssr={true} // means to render carousel on server-side.
				  infinite={true}
				  autoPlay={false}
				  autoPlaySpeed={1000}
				  keyBoardControl={true}
				  customTransition="all .5"
				  transitionDuration={500}
				  containerClass="carousel-container"
				  removeArrowOnDeviceType={["tablet", "mobile"]}
				  deviceType={deviceType}
				  dotListClass="custom-dot-list-style"
				  itemClass="carousel-item-padding-0-px"
				>
				<PortfolioItem imageUrl='https://mixtiles-json.s3.amazonaws.com/testimonials/en/framed/5559850833281024.jpg'/>
				<PortfolioItem imageUrl='https://mixtiles-json.s3.amazonaws.com/testimonials/en/framed/5559850833281024.jpg'/>
				<PortfolioItem imageUrl='https://mixtiles-json.s3.amazonaws.com/testimonials/en/framed/5559850833281024.jpg'/>
				<PortfolioItem imageUrl='https://mixtiles-json.s3.amazonaws.com/testimonials/en/framed/5559850833281024.jpg'/>
				<PortfolioItem imageUrl='https://mixtiles-json.s3.amazonaws.com/testimonials/en/framed/5559850833281024.jpg'/>

				</Carousel>
			</div>
		</div>
	)
}

export default Portfolio;