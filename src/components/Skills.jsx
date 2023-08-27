export default function Skills(params) {
  return (
    <div
      className={`tab-contents ${params.tab === "skills" ? "active-tab" : ""}`}
      id="skills"
    >
      <ul>
        <li>
          <span>UI/UX</span>
          <br />
          Designing Web/App interfaces
        </li>
        <li>
          <span>Web Development</span>
          <br />
          Web app Development
        </li>
        <li>
          <span>App Development</span>
          <br />
          Building Android/iOS apps
        </li>
      </ul>
    </div>
  );
}
