import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found | React SPA";
  }, []);
  return (
    <div className="not-found d-flex flex-column align-items-center justify-content-center text-white">
      <h2 className="fw-bold fs-1">Not Found</h2>
      <p className="fs-5">This page doesn’t exist.</p>
    </div>
  );
}
