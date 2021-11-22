import React, { Component } from "react";
import {
    Link,
    Route,
    Routes,
    // Switch,
    Redirect,
    // HashRouter as Router,
} from "react-router-dom";
import { Router } from "react-router";

import publicRoutes from "./publicRoutes";
// import privateRoutes from "./protectedRoutes";
// import history from "./history";
// const route = [...publicRoutes/* , ...privateRoutes */];
import HomePage from "../Views/HomePage/HomePage";

 export default class Routing extends Component {

    render() {
        return (
            <div className="trade">
                <Router /* history={history} */>
                    {/* <Routes> */}
                        {/* <Layout> */}
                            <Routes>
                                {publicRoutes.map((data) => (
                                    <Route exact={
                                        data.exact === false ? false : true
                                    }
                                        path={'/'}
                                        component={HomePage}
                                    />
                                ))
                                }
                            </Routes>
                        {/* </Layout> */}
                    {/* </Routes> */}
                </Router>
            </div>
        );
    }
}