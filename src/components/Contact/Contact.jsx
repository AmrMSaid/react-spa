import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | React SPA";
  }, []);
  return (
    <section className="contact d-flex flex-column align-items-center justify-content-center p-5">
      <h2 className="text-uppercase fw-bold fs-1 mb-3 text-center">
        contact section
      </h2>
      <div className="d-flex align-items-center mb-3">
        <div className="line mx-3"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line mx-3"></div>
      </div>
      <div className="form w-50">
        <FloatingLabel controlId="" label="Name" className="mt-4">
          <Form.Control
            className="form-control border-0 border-bottom rounded-0"
            type="text"
            placeholder=""
          />
        </FloatingLabel>
        <FloatingLabel controlId="" label="Age" className="mt-4">
          <Form.Control
            className="form-control border-0 border-bottom rounded-0"
            type="number"
            placeholder="Age"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Email" className="mt-4">
          <Form.Control
            className="form-control border-0 border-bottom rounded-0"
            type="email"
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mt-4"
        >
          <Form.Control
            className="form-control border-0 border-bottom rounded-0"
            type="password"
            placeholder="Password"
          />
        </FloatingLabel>
        <Button variant="primary" className="mt-4">
          Send Message
        </Button>
      </div>
    </section>
  );
}
