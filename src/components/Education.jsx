export default function Education(params) {
  return (
    <div
      className={`tab-contents ${
        params.tab === "education" ? "active-tab" : ""
      }`}
      id="education"
    >
      <ul>
        <li>
          <span>2021 - Current</span>
          <br />
          B.Arch From IIT Kharagpur
        </li>
        <li>
          <span>2018 - 2020</span>
          <br />
          Senior High Schooling from Sidhhartha Public School, Delhi
        </li>
        <li>
          <span>2016 - 2018</span>
          <br />
          High Schooling from Gen. B. C. Joshi A.P.S
        </li>
      </ul>
    </div>
  );
}
