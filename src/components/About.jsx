import AboutTab from "./AboutTab";
import user from "../images/user.jpeg";

export default function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={user} alt="" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title"> About Me</h1>
            <p>
              I'm Dhruv, a dedicated college student deeply intrigued by the
              intersections of web development and data science. My journey
              began with web development, where I blend design finesse and
              coding techniques to create immersive digital experiences.
              Simultaneously, I'm captivated by data science's power to extract
              insights from complex datasets, utilizing coding skills to uncover
              valuable patterns. With a strong academic foundation in computer
              science and a hunger for learning, I continuously explore new
              technologies and frameworks. Beyond coding, I find joy in
              photography and travel, capturing moments and broadening my
              perspectives. I'm eager to connect with fellow enthusiasts and
              professionals, ready to collaborate and contribute to innovative
              projects in the ever-evolving landscapes of web dev and data
              science.
            </p>
            <AboutTab />
          </div>
        </div>
      </div>
    </div>
  );
}
