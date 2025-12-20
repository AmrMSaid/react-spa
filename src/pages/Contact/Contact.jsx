import { useEffect } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Heading from "../../components/Heading/Heading";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | React SPA";
  }, []);

  const inputs = [
    { label: "Name", type: "text" },
    { label: "Age", type: "number" },
    { label: "Email", type: "email" },
    { label: "Password", type: "password" },
  ];

  return (
    <section className="contact d-flex flex-column align-items-center justify-content-center p-5">
      <Heading
        heading={"conatct section"}
        text="dark-text"
        bg="dark-bg"
      ></Heading>
      <div className="form w-50">
        {inputs.map((input) => (
          <FloatingLabel
            key={input.label}
            controlId=""
            label={input.label}
            className="mt-4"
          >
            <Form.Control
              className="form-control border-0 border-bottom rounded-0"
              type={input.type}
              placeholder=""
            />
          </FloatingLabel>
        ))}
        <Button variant="primary" className="mt-4">
          Send Message
        </Button>
      </div>
    </section>
  );
}
