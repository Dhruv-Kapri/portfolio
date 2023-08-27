import Navbar from "./Navbar";
import HeaderAnimation from "./HeaderAnimation";

export default function Header() {
  return (
    <div id="header">
      <div className="container">
        <Navbar />
        <div className="row">
          <div className="header-col-1">
            <p>Web Developer</p>
            <h1>
              Hi, I'm <span>Dhruv</span>
              <br /> Kapri from India
            </h1>
          </div>
          <HeaderAnimation />
        </div>
      </div>
    </div>
  );
}
