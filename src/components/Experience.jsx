export default function Experience(params) {
  return (
    <div
      className={`tab-contents ${
        params.tab === "experience" ? "active-tab" : ""
      }`}
      id="experience"
    >
      <ul>
        <li>
          <span>2021 - Current</span>
          <br />
          UI/UX Design training at ET Institute
        </li>
        <li>
          <span>2018-2020</span>
          <br />
          Web app Development
        </li>
        <li>
          <span>2017-2019</span>
          <br />
          UI/UX Design Executive at Coin Digital Ltd.
        </li>
        <li>
          <span>2017-2019</span>
          <br />
          Internship at eKart e-commerce.
        </li>
      </ul>
    </div>
  );
}
