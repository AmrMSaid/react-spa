import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About | React SPA";
  }, []);
  return (
    <section className="about d-flex flex-column align-items-center justify-content-center text-white p-5">
      <h2 className="text-uppercase fw-bold fs-1 mb-3 text-center">
        about component
      </h2>
      <div className="d-flex align-items-center mb-3">
        <div className="line bg-white mx-3"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line bg-white mx-3"></div>
      </div>
      <div className="about-container">
        <div className="row px-5">
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
