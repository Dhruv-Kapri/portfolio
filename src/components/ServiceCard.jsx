export default function ServiceCard(params) {
  return (
    <div>
      <i className={params.class}></i>
      <h2>{params.title}</h2>
      <p>{params.content}</p>
      <a href="#">Learn more</a>
    </div>
  );
}
