import WorkCard from "./WorkCard";
import work1 from "../images/keeper.png";
import work2 from "../images/portfolio.png";
import work3 from "../images/work-3.png";

export default function Works() {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Works</h1>
        <div className="work-list">
          <WorkCard
            image={work1}
            title="Keeper App"
            content="A note keeper app designed for you, where you can add , delete and track your notes according to your preferences."
            url="https://dhruvkapri-keeper.netlify.app/"
          />
          <WorkCard
            image={work2}
            title="Portfolio Website"
            content="Personal portfolio website describing the various parts and stages of the development of professional persona."
            url="https://dhruvkapri-portfolio.netlify.app/"
          />
          <WorkCard
            image={work3}
            title="Online Shopping App"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quam facere quibusdam deserunt dolore vero. Incidunt ea nihil sint. Velit."
            url=""
          />
          <WorkCard
            image={work3}
            title="Online Shopping App"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quam facere quibusdam deserunt dolore vero. Incidunt ea nihil sint. Velit."
            url=""
          />
        </div>
        <a href="/" className="btn">
          See more
        </a>
      </div>
    </div>
  );
}
