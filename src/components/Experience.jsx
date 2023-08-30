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
          Research intern at Indian Statistical Institute, Kolkata
        </li>
        <li>
          <span>2021 - Current</span>
          <br />
          Research intern at Indian Institute of Technology, Kharagpur
        </li>
      </ul>
    </div>
  );
}
