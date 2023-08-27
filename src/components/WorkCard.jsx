export default function WorkCard(params) {
  return (
    <div className="work">
      <img src={params.image} alt="" />
      <div className="layer">
        <h2>{params.title}</h2>
        <p>{params.content}</p>
        <a href="#">
          <i className="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  );
}
