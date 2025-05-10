import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            inventore voluptatum animi quod iure ratione id asperiores dolorum,
            veritatis ea, adipisci distinctio a quo dicta expedita sit officia
            dignissimos voluptas, saepe labore provident maxime accusantium!
            Reiciendis corrupti quis quidem aliquid asperiores, culpa quod
            soluta cum explicabo! Que cupiditate animi perferendis.
          </p>
          <Link to="/">
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="./about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
