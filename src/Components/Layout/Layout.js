import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logOutUser } from "../../Store/actions/userAction";
import Cookies from 'js-cookie'
function Layout(props) {
    const logout = (e) => {
        e.preventDefault()
        console.log(' logount -----')
        props.actions.logOutUser({ token: Cookies.get('Access-Token') })
    }
    const { hasAccess } = props
    return (
        <div className="tab-option">{!hasAccess ?
            <>
                {/* <Link to='/'> Home</Link>
                <Link to='/aboutus'> | AboutUs</Link> */}
                <Link to='/signin'>Sign In</Link>
                <Link to='/signup'>Sign Up</Link>
            </>
            :
            <>
                <Link to='/tasks'>Task</Link>
                <Link to='/' onClick={(e) => logout(e)}> Logout</Link>
            </>
        }
        </div>
    )
}
const mapStateToProps = (state) => ({
    hasAccess: state.user.hasAccess,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            logOutUser
        },
        dispatch
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(Layout);