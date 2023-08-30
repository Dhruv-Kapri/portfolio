export default function WorkCard(params) {
  return (
    <div className="work col">
      <img src={params.image} alt="" />
      <div className="layer">
        <h2>{params.title}</h2>
        <p>{params.content}</p>
        <a href={params.url} target="_blank" rel="noreferrer">
          <i className="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  );
}
