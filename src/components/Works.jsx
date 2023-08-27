import WorkCard from "./WorkCard";
import work1 from "../images/work-1.png";
import work2 from "../images/work-2.png";
import work3 from "../images/work-3.png";

export default function Works() {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Works</h1>
        <div className="work-list">
          <WorkCard
            image={work1}
            title="Social Media App"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quam facere quibusdam deserunt dolore vero. Incidunt ea nihil sint. Velit."
          />
          <WorkCard
            image={work2}
            title="Music App"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quam facere quibusdam deserunt dolore vero. Incidunt ea nihil sint. Velit."
          />
          <WorkCard
            image={work3}
            title="Online Shopping App"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quam facere quibusdam deserunt dolore vero. Incidunt ea nihil sint. Velit."
          />
        </div>
        <a href="" className="btn">
          See more
        </a>
      </div>
    </div>
  );
}
