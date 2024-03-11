

function Button(props) {
    return (
      <div>
        <button onClick = {() => props.click()}>
            Click Me
        </button>
      </div>
    );
  }
  
  export default Button;
  