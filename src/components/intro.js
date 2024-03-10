function Introduction(props) {
  return (
    <div>
      <h1>Introduction</h1>
      <p>Hello World, I learn {props.lang}</p>
      <p>My Name {props.name}</p>
    </div>
  );
}

export default Introduction;
