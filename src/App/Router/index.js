import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoginContainer from "../Containers/LoginContainer";
class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={LoginContainer} />
      </Switch>
    );
  }
}
const mapStateToProps = state => ({
  loginData: state.loginReducer
});

export default connect(mapStateToProps, null)(AppRouter);
