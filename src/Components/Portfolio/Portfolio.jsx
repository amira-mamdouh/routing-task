import React from "react";
import Img1 from "../../assets/poert1.png";
import Img2 from "../../assets/port2.png";
import Img3 from "../../assets/port3.png";

export default function Portfolio() {
  return (
    <>
      <section>
        <div className="container min-vh-100 py-5">
          <div className="portfolio-header d-flex align-items-center justify-content-center flex-column py-4">
            <h2 className="fw-bold fs-1">PORTFOLIO COMPONENT</h2>
            <div className="py-3 star-container position-relative w-50 port-contain text-center">
              <i className="port-icon fa-solid fa-star position-relative w-100"></i>
            </div>
          </div>
          <div className="row g-3 mb-5">
            <div className="col-md-4">
              <div className="img-item position-relative">
                <img src={Img1} className="w-100 rounded-3" alt="" />
                <div className="lay position-absolute rounded-3 d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-plus text-white display-1"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-item position-relative">
                <img src={Img2} className="w-100 rounded-3" alt="" />
                <div className="lay position-absolute rounded-3 d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-plus text-white display-1"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-item position-relative">
                <img src={Img3} className="w-100 rounded-3" alt="" />
                <div className="lay position-absolute rounded-3 d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-plus text-white display-1"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-item position-relative">
                <img src={Img1} className="w-100 rounded-3" alt="" />
                <div className="lay position-absolute rounded-3 d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-plus text-white display-1"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-item position-relative">
                <img src={Img2} className="w-100 rounded-3" alt="" />
                <div className="lay position-absolute rounded-3 d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-plus text-white display-1"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-item position-relative">
                <img src={Img3} className="w-100 rounded-3" alt="" />
                <div className="lay position-absolute rounded-3 d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-plus text-white display-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
