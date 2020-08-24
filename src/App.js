import React from 'react';
import { Component } from 'react';

class App extends Component {
  state = {
    value: '',
    details: [],
  };
  handleChangeValue = (e) => {
    this.setState({
      value: e.target.value,
      // details: [...this.state.value],
    });
  };
  handleSubmitBtn = () => {
    this.setState({
      details: [...this.state.details, this.state.value],
      value: '',
    });
  };
  render() {
    return (
      <div>
        <Input
          label='Input'
          onChangeInp={this.handleChangeValue}
          valueProp={this.state.value}
        />
        {/* <input type='text' onChange={this.handleChangeValue}></input> */}
        <button onClick={this.handleSubmitBtn}>Submit</button>
        <Card details={this.state.value} />
        {this.state.details.map((det) => (
          <p>{det}</p>
        ))}
      </div>
    );
  }
}

export default App;

const Input = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input
        placeholder='input text ...'
        type='text'
        value={props.valueProp}
        onChange={props.onChangeInp}
      >
        {}
      </input>
    </>
  );
};

const Card = (props) => {
  return <div>{props.details}</div>;
};
