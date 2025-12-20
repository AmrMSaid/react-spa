import { useEffect } from "react";
import image1 from "../../assets/images/imgi_1_port1.png";
import image2 from "../../assets/images/imgi_2_port2.png";
import image3 from "../../assets/images/imgi_3_port3.png";
import Heading from "../../components/Heading/Heading";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio | React SPA";
  }, []);

  const cols = [
    { img: image1 },
    { img: image2 },
    { img: image3 },
    { img: image1 },
    { img: image2 },
    { img: image3 },
  ];
  
  return (
    <section className="portfolio d-flex flex-column align-items-center justify-content-center text-center p-5">
      <Heading
        heading={"portfolio component"}
        text="dark-text"
        bg="dark-bg"
      ></Heading>
      <div className="container">
        <div className="row g-5">
          {cols.map((col, id) => (
            <div key={id} className="col-md-6 col-lg-4">
              <div className="rounded-3 position-relative overflow-hidden">
                <img src={col.img} className="w-100 rounded-3"></img>
                <div className="layer position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
