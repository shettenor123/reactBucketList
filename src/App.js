import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import history from './Utils/history'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { createBrowserHistory } from 'history';
import HomePage from './Views/HomePage/HomePage';
import AboutUs from './Views/AboutUs/AboutUs';
import SignIn from './Containers/SignIn/SignIn';
import Register from './Containers/Register/Register'
import TaskList from './Views/Task';
import addTask from './Views/Task/addTask';
import {/*  BrowserRouter as Router, */ Switch, Route, Link } from 'react-router-dom';
import { Router } from 'react-router';
import Layout from './Components/Layout/Layout';
import Cookies from 'js-cookie'
import BucketList from './Containers/BucketList/BucketList';
import { setAuth, registerUser } from './Store/actions/userAction';

function App(props) {
  // const history = createBrowserHistory();
  useEffect(() => {

    const authCheck = Cookies.get('Access-Token')
    if (authCheck) {
      setTimeout(() => {
        props.actions.setAuth({})
      }, 1000);
    }
    console.log("🚀 ~ file: App.js ~ line 22 ~ useEffect ~ authCheck", authCheck)

  }, [])
  return (
    <div className="App">
      <div className="project">
        <Router history={history}>
          <Layout />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={Register} />
            <Route path='/tasks' component={TaskList} />
            <Route path='/addTask' component={addTask} />
            <Route path='/editTask' component={addTask} />
            <Route path='/addBucketList' component={BucketList} />
          </Switch>
          {/* </Layout> */}
        </Router>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  hasAccess: state.user.hasAccess,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      setAuth
    },
    dispatch
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
