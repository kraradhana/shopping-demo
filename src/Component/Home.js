import React from 'react'
import Navbar from './Navbar'
export const Home = () => {
  return (
    <>
      <Navbar />
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/1600x680/?IFuture,Technolgoies,Coffee,Training"
              alt="Training Batch"
            />    </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/1600x680/?IFuture,Technolgoies,Coffee"
              alt="Training Batch"
            />    </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/1600x680/?Technolgoies,Coffee,Training"
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

  

    </>
    
  )
}
export default Home;
