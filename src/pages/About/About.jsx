import { useEffect } from "react";
import Heading from "../../components/Heading/Heading";

export default function About() {
  useEffect(() => {
    document.title = "About | React SPA";
  }, []);

  const aboutStr = `Freelancer is a free bootstrap theme created by Route.
    The download includes the complete source files including HTML, CSS, and
    JavaScript as well as optional SASS stylesheets for easy customization.`;

  return (
    <section className="about d-flex flex-column align-items-center justify-content-center text-white p-5">
      <Heading heading={"about component"} bg="bg-white"></Heading>
      <div className="about-container">
        <div className="row px-5">
          <div className="col-md-6">
            <p>{aboutStr}</p>
          </div>
          <div className="col-md-6">
            <p>{aboutStr}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
