import React, { Component } from "react";
import styles from "./styles";
import InputBox from "../components/InputBox";
import Btn from "../components/Btn";

export default class SignInForm extends Component {
  state = {
    showMsg: false,
  };

  onChangeHandle = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    this.props.changeItemsProps({ nam, val });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    {!this.props.editMode? this.props.handleSignIn(): this.props.handleUpdate()
    }
  };

  myBtnClick = () => {
    this.setState({
      username: this.state.username,
      showMsg: true,
    });
  };

  render() {
    let isDisabled =
      this.props.item.username === "" ||
      this.props.item.email === "" ||
      this.props.item.phone === "";
    return (
      <form style={styles.form} onSubmit={this.handleSubmitForm}>
        <h2 style={{ textAlign: "center" }}>
          {this.props.editMode ? "Update" : "New Contact"}
        </h2>
        <InputBox
          nameProp="username"
          placeholder="Username"
          regex={/^[a-z0-9]{2,}$/}
          errorText="username cannot include space"
          value={this.props.item.username}
          onChangeProps={this.onChangeHandle}
        />
        <InputBox
          nameProp="email"
          placeholder="Email"
          regex={/^[a-z0-9]{3,}@[2-z]{2,}\.[a-z]{2,4}$/i}
          errorText="invalid E-mail format"
          value={this.props.item.email}
          onChangeProps={this.onChangeHandle}
        />
        <InputBox
          nameProp="phone"
          placeholder="Phone No."
          regex={/^07[0-9]{9}$/}
          errorText="invalid Mobile Number format"
          value={this.props.item.phone}
          onChangeProps={this.onChangeHandle}
        />
        <div style={styleBtn}>
          <Btn
            title={this.props.editMode ? "Update" : "Submit"}
            bg="#bdbdbd"
            isDisable={isDisabled}
          />
          {this.state.showMsg ? <span> added to Address Book</span> : null}
        </div>
      </form>
    );
  }
}
const styleBtn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: 10,
};
