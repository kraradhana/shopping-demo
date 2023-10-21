import React from 'react'
import Navbar from './Navbar'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/1600x300/?IFuture,coffee,Coffee,coffee"
              alt="Training Batch"
            />    </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/1600x300/?coffee,coffee,Coffee"
              alt="Training Batch"
            />    </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/1600x300/?coffee,Coffee,coffee"
              alt="Training Batch"
            />    </div>
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
      <section>
      <div className="container py-5">
      </div>
      </section>
    </div>
    
  )
}

export default Contact
