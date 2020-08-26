import React, { Component } from 'react';

export default class InputBox extends Component {
  state = {
    error: false,
    inputText: '',
  };
  render() {
    const {
      onChangeProps,
      regex,
      errorText,
      placeholder,
      nameProp,
      value,
    } = this.props;
    return (
      <div
        style={{
          color: 'black',
          width: '100%',
          padding: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontFamily: '"Special Elite", cursive',
        }}
      >
        <input
          {...this.props}
          name={nameProp}
          value={value}
          type='text'
          placeholder={placeholder}
          onChange={onChangeProps}
          onBlur={(e) => {
            this.setState({
              error: !regex.test(e.target.value),
              inputText: e.target.value,
            });
          }}
          style={{
            width: '80%',
            border: 'none',
            height: 30,
            fontFamily: '"Special Elite", cursive',
            borderBottom: '1px solid #000',
          }}
        />
        {this.state.error ? (
          <span style={{ color: '#ba2d65', fontSize: 12, marginTop: 5 }}>
            {errorText}
          </span>
        ) : null}
      </div>
    );
  }
}
