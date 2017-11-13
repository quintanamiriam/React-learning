class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing One', 'Thing two', 'Thing four'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlepick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  removeAll() {
    
    console.log(this.prop.options);
    // alert('Are you sure you want to remove?')
  }
  render() {
    return (
      <div>
          <button onClick={this.removeAll}>Remove All</button>
          {
            this.props.options.map((option) => <Option key={option} optionText={option} />)
          }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return(
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  addOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim;

    if (option) {
    alert('New Option')
    }
  }
  render() {
    return(
      <div>
        <form onSubmit={this.addOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
