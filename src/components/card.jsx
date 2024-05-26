function Card(props) {
  return (
    <div className="card">
      <h2 className="card-name">{props.name}</h2>
      <div className="card-image">
        <img src={props.imgLink} alt={props.name} />
      </div>
      <div className="card-body">
        <p className="card-text">Вселенная: {props.universe}</p>
        <p className="card-text">Альтергэго: {props.alterego}</p>
        <p className="card-text">Род занятий: {props.occupation}</p>
        <p className="card-text">Суперсилы: {props.superpowers}</p>
      </div>
    </div>
  );
}

export default Card;
