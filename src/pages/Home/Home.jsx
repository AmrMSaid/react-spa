import homeImg from "../../assets/images/imgi_1_avatars2.svg";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home | React SPA";
  }, []);
  return (
    <section className="home d-flex flex-column align-items-center p-5 text-white text-center">
      <img src={homeImg} className="home-img m-5"></img>
      <h1 className="text-uppercase fw-bold mb-3">start framework</h1>
      <div className="d-flex align-items-center mb-3">
        <div className="line bg-white mx-3"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line bg-white mx-3"></div>
      </div>
      <p className="mb-5">Graphic Artist - Web Designer - Illustrator</p>
    </section>
  );
}
