import React from "react";
import familyPack from "../assets/slides/FamilyPack.jpg";
import liveInTheMoment from "../assets/slides/LiveInTheMoment.jpg";
import feelTheComfort from "../assets/slides/FeelTheComfort.jpeg";

function SectionSlides() {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide w-full mt-16"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src={familyPack}
            className="d-block w-screen h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            alt="Family colorful slippers"
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src={liveInTheMoment}
            className="d-block w-screen h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            alt="People enjoying with comfort slippers"
          />
        </div>
        <div className="carousel-item">
          <img
            src={feelTheComfort}
            className="d-block w-screen h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            alt="Man on sofa with comfort sandals"
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default SectionSlides;