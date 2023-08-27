import Flutter from "../images/SVGIcons/flutter.svg";
import Python from "../images/SVGIcons/python.svg";
import Photoshop from "../images/SVGIcons/adobe-photoshop.svg";
import Django from "../images/SVGIcons/django.svg";
import Premiere from "../images/SVGIcons/adobe-premiere-pro.svg";
import HTML from "../images/SVGIcons/html-5.svg";
import Figma from "../images/SVGIcons/figma.svg";
import CSS from "../images/SVGIcons/css3.svg";
import Javascript from "../images/SVGIcons/javascript.svg";
import Illustrator from "../images/SVGIcons/adobe-illustrator.svg";
import Dart from "../images/SVGIcons/dart.svg";
import PostgreSQL from "../images/SVGIcons/PostgreSQL-Dark.svg";
import MySQL from "../images/SVGIcons/MySQL-Dark.svg";
import Firebase from "../images/SVGIcons/Firebase-Dark.svg";
import Github from "../images/SVGIcons/Github-Dark.svg";

export default function HeaderAnimation() {
  return (
    <div className="header-col-2">
      <div className="hoodie-guy-animation-class">
        <div className="hoodie-guy"></div>
        <div className="circle">
          <span style={{ "--i": 1 }}>
            <img src={Flutter} height="75px" alt="" />
          </span>
          <span style={{ "--i": 2 }}>
            <img src={Python} height="75px" alt="" />
          </span>
          <span style={{ "--i": 3 }}>
            <img src={Photoshop} height="75px" alt="" />
          </span>
          <span style={{ "--i": 4 }}>
            <img src={Django} height="75px" alt="" />
          </span>
          <span style={{ "--i": 5 }}>
            <img src={Premiere} height="75px" alt="" />
          </span>
          <span style={{ "--i": 6 }}>
            <img src={HTML} height="70px" alt="" />
          </span>
          <span style={{ "--i": 7 }}>
            <img src={Figma} height="75px" alt="" />
          </span>
          <span style={{ "--i": 8 }}>
            <img src={CSS} height="70px" alt="" />
          </span>
          <span style={{ "--i": 9 }}>
            <img src={Javascript} height="75px" alt="" />
          </span>
          <span style={{ "--i": 10 }}>
            <img src={Illustrator} height="75px" alt="" />
          </span>
          <span style={{ "--i": 11 }}>
            <img src={Dart} height="75px" alt="" />
          </span>
          <span style={{ "--i": 12 }}>
            <img src={PostgreSQL} height="75px" alt="" />
          </span>
          <span style={{ "--i": 13 }}>
            <img src={MySQL} height="75px" alt="" />
          </span>
          <span style={{ "--i": 14 }}>
            <img src={Firebase} height="75px" alt="" />
          </span>
          <span style={{ "--i": 15 }}>
            <img src={Github} height="75px" alt="" />
          </span>
        </div>
      </div>
      <div className="background-circle"></div>
    </div>
  );
}
