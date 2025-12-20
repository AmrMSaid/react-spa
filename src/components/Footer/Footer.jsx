import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function Navbar() {
  return (
    <footer className="text-white dark-bg">
      <CardGroup>
        <Card className="text-white py-5">
          <Card.Body>
            <div className="text-center">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </Card.Body>
        </Card>
        <Card className="text-white py-5">
          <Card.Body>
            <div className="text-center">
              <h3>AROUND THE WEB</h3>
              <div className="d-flex flex-wrap justify-content-center">
                <div className="circle d-flex justify-content-center mx-1">
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div className="circle d-flex justify-content-center mx-1">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="circle d-flex justify-content-center mx-1">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="circle d-flex justify-content-center mx-1">
                  <i className="fa-solid fa-globe"></i>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="text-white py-5">
          <Card.Body>
            <div className="text-center">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </Card.Body>
        </Card>
      </CardGroup>
      <div className="footer-footer text-center p-4">
        <p className="m-0">Copyright © Your Website 2025</p>
      </div>
    </footer>
  );
}
