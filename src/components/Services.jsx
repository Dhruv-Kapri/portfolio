import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <ServiceCard
            class="fa-solid fa-code"
            title="Web Development"
            content="Adept in web development, I blend creativity and coding finesse to build captivating online experiences. Proficient in HTML, CSS, and JavaScript, along with various other frameworks, I craft responsive and user-friendly websites."
          />
          <ServiceCard
            class="fa-solid fa-crop-simple"
            title="UI/UX Design"
            content="Merging aesthetics and functionality, my UI/UX design skills create delightful user journeys. With a keen eye for detail and empathy, I shape intuitive interfaces that elevate user experiences. From wireframes to prototypes, I craft designs that seamlessly balance aesthetics and usability, making every interaction memorable."
          />
          <ServiceCard
            class="fa-brands fa-android"
            title="App Development"
            content="Proficient in app development, I wield the tools to craft seamless user experiences. From concept to code, I'm skilled in creating Android and iOS applications that marry innovation with practicality. User-centric design and robust functionality lie at the heart of my app development expertise."
          />
        </div>
      </div>
    </div>
  );
}
