import { useEffect } from "react";
import homeImg from "../../assets/images/imgi_1_avatars2.svg";
import Heading from "../../components/Heading/Heading";

export default function Home() {
  useEffect(() => {
    document.title = "Home | React SPA";
  }, []);

  return (
    <section className="home d-flex flex-column align-items-center p-5 text-white text-center">
      <img src={homeImg} className="home-img m-5"></img>
      <Heading heading={"start framework"} bg="bg-white"></Heading>
      <p className="mb-5">Graphic Artist - Web Designer - Illustrator</p>
    </section>
  );
}
