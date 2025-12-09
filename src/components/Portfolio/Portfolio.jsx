import { useEffect } from "react";
import image1 from "../../assets/images/imgi_1_port1.png";
import image2 from "../../assets/images/imgi_2_port2.png";
import image3 from "../../assets/images/imgi_3_port3.png";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio | React SPA";
  }, []);
  return (
    <section className="portfolio d-flex flex-column align-items-center justify-content-center text-center p-5">
      <h2 className="text-uppercase fw-bold fs-1 mb-3">portfolio component</h2>
      <div className="d-flex align-items-center mb-3">
        <div className="line mx-3"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line mx-3"></div>
      </div>
      <div className="container">
        <div className="row g-5">
          <div className="col-md-6 col-lg-4">
            <div className="rounded-3 position-relative overflow-hidden">
              <img src={image1} className="w-100 rounded-3"></img>
              <div className="layer position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="rounded-3 position-relative overflow-hidden">
              <img src={image2} className="w-100 rounded-3"></img>
              <div className="layer position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="rounded-3 position-relative overflow-hidden">
              <img src={image3} className="w-100 rounded-3"></img>
              <div className="layer position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="rounded-3 position-relative overflow-hidden">
              <img src={image1} className="w-100 rounded-3"></img>
              <div className="layer position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="rounded-3 position-relative overflow-hidden">
              <img src={image2} className="w-100 rounded-3"></img>
              <div className="layer position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="rounded-3 position-relative overflow-hidden">
              <img src={image3} className="w-100 rounded-3"></img>
              <div className="layer position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
