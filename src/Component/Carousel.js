import React from 'react'
import './Carousel.css';
import img1 from './img/bgf.jpg'
import img from './img/bgg.jpg'
import img3 from './img/bgd.jpg'
export const Carousel = () => {
  return (
    <div>
      <div
  id="carouselExampleInterval"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src={img1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src={img} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleInterval"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleInterval"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}
export default Carousel;