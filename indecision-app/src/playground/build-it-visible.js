console.log("Works!");

let visibility = false;

const toggle = () => {
  visibility = !visibility;
  render();
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggle}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
        {visibility && (
          <div>
            <p>Now you see this...then you wont!</p>
          </div>
          )}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
