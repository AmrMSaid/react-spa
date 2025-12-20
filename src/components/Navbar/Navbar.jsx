import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavbarComp() {
  return (
    <Navbar data-bs-theme="dark" expand="lg" className="p-4 sticky-top dark-bg">
      <Container className="nav-container">
        <div className="nav-header d-flex justify-content-between">
          <Navbar.Brand>
            <Link
              className="nav-title text-decoration-none text-white fs-2 text-uppercase fw-bold"
              to="/"
            >
              start framework
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <ul className="d-flex list-unstyled m-0 text-uppercase fw-bold">
              <li>
                <NavLink
                  className="text-decoration-none text-white mx-3 px-1"
                  to="about"
                >
                  about
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-decoration-none text-white mx-3 px-1"
                  to="portfolio"
                >
                  portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-decoration-none text-white mx-3 px-1"
                  to="contact"
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
