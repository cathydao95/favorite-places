function NewLocation(props) {
  return (
    <li>
      <div>
        <img src={props.img} alt={props.title}></img>
      </div>
      <div>
        <h3>{props.tile}</h3>
        <p>{props.description}</p>
      </div>
    </li>
  );
}

export default NewLocation;
